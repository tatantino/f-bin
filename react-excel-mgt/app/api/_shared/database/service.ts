import { plainToInstance, ClassConstructor } from 'class-transformer';
import { validateOrReject, ValidationError } from 'class-validator';
import logger from '../utils/logger';
import { DB_CONFIG } from './config';
import {
  SQLStatementRequest,
  SQLStatementResponse,
  SQLParameter,
  SQLWaitTimeoutAction,
  QueryResult,
  ExecuteResult,
} from './types';

const TRANSFORM_OPTIONS = {
  enableImplicitConversion: true,
  excludeExtraneousValues: true,
} as const;

const API_HEADERS = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${DB_CONFIG.TOKEN}`,
} as const;

export class DatabaseService {
  private static transformToInstance<T>(
    cls: ClassConstructor<T>,
    data: object
  ): T {
    return plainToInstance(cls, data, TRANSFORM_OPTIONS);
  }

  private static getErrorMessage(error: unknown): string {
    if (error instanceof Array && error[0] instanceof ValidationError) {
      return error
        .flatMap(err => Object.values(err.constraints || {}))
        .join(', ');
    }
    return error instanceof Error ? error.message : 'Unknown error';
  }

  private static async validateParameters(
    parameters?: SQLParameter[]
  ): Promise<SQLParameter[] | undefined> {
    if (!parameters?.length) return undefined;

    try {
      return await Promise.all(
        parameters.map(async param => {
          const instance = this.transformToInstance(
            SQLParameter,
            param as object
          );
          await validateOrReject(instance);
          return instance;
        })
      );
    } catch (error) {
      const message = this.getErrorMessage(error);
      logger.error('Parameter validation failed', { error, message });
      throw new Error(message);
    }
  }

  public static async executeRequest(
    sql: string,
    parameters?: SQLParameter[],
    wait_timeout?: string,
    on_wait_timeout?: SQLWaitTimeoutAction
  ): Promise<SQLStatementResponse> {
    const requestDto = this.transformToInstance(SQLStatementRequest, {
      warehouse_id: DB_CONFIG.WAREHOUSE_ID,
      statement: sql.trim(),
      parameters: await this.validateParameters(parameters),
      wait_timeout,
      on_wait_timeout,
    });

    try {
      await validateOrReject(requestDto);
    } catch (error) {
      const message = this.getErrorMessage(error);
      logger.error('Request validation failed', { error, message });
      throw new Error(message);
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(
      () => controller.abort(),
      DB_CONFIG.QUERY_TIMEOUT
    );

    try {
      const response = await fetch(
        `${DB_CONFIG.DATABRICKS_URL}${DB_CONFIG.ENDPOINTS.SQL_STATEMENTS}`,
        {
          method: 'POST',
          headers: API_HEADERS,
          body: JSON.stringify(requestDto),
          signal: controller.signal,
          next: { revalidate: 0 },
        }
      );

      if (!response.ok) {
        throw new Error(
          `API request failed: ${response.status} ${response.statusText}`
        );
      }

      const result = this.transformToInstance(
        SQLStatementResponse,
        await response.json()
      );

      if (!result.status?.state || !result.statement_id) {
        throw new Error('Invalid response format: missing required fields');
      }

      if (result.status.state === 'FAILED') {
        throw new Error(
          result.status.error?.message || 'Query execution failed'
        );
      }

      return result;
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        throw new Error('Query execution timed out');
      }
      throw error;
    } finally {
      clearTimeout(timeoutId);
    }
  }

  static async query<T = unknown>(
    sql: string,
    parameters?: SQLParameter[],
    wait_timeout?: string,
    on_wait_timeout?: SQLWaitTimeoutAction
  ): Promise<QueryResult<T>> {
    if (!sql?.trim()) {
      return { success: false, error: 'SQL statement is required' };
    }

    try {
      logger.debug('Executing SQL query', {
        sql,
        parameters,
        wait_timeout,
        on_wait_timeout,
      });
      const result = await this.executeRequest(
        sql,
        parameters,
        wait_timeout,
        on_wait_timeout
      );

      if (!result.result?.data_array) {
        return { success: true, data: [], meta: { total: 0 } };
      }

      const columns =
        result.manifest?.schema.columns.map(col => col.name) || [];
      const data = result.result.data_array.map(
        row => Object.fromEntries(columns.map((col, i) => [col, row[i]])) as T
      );

      return {
        success: true,
        data,
        meta: { total: result.result.row_count || 0, columns },
      };
    } catch (error) {
      logger.error('Query failed', { sql, parameters, error });
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  static async execute(
    sql: string,
    parameters?: SQLParameter[],
    wait_timeout?: string
  ): Promise<ExecuteResult> {
    if (!sql?.trim()) {
      return { success: false, error: 'SQL statement is required' };
    }

    try {
      logger.debug('Executing SQL statement', {
        sql,
        parameters,
        wait_timeout,
      });
      const result = await this.executeRequest(sql, parameters, wait_timeout);

      return {
        success: true,
        affectedRows: result.result?.row_count || 0,
      };
    } catch (error) {
      logger.error('Execution failed', { sql, parameters, error });
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  /**
   * Executes a SQL query and directly returns the data or throws an error
   *
   * This is a simplified version of query() that doesn't wrap results in a complex object.
   * It either returns the data array directly or throws an error, making it easier to use
   * with try/catch or the withErrorHandling utility.
   *
   * @param sql SQL query to execute
   * @param parameters Optional query parameters
   * @param wait_timeout Optional wait timeout in seconds (e.g. "30s")
   * @returns Array of query results (returns empty array for no results)
   * @throws Error if the query fails for any reason
   */
  static async queryDirect<T = unknown>(
    sql: string,
    parameters?: SQLParameter[],
    wait_timeout?: string
  ): Promise<T[]> {
    if (!sql?.trim()) {
      throw new Error('SQL statement is required');
    }

    try {
      logger.debug('Executing direct SQL query', { sql, parameters });

      const result = await this.executeRequest(sql, parameters, wait_timeout);
      if (!result.result?.data_array) {
        return [];
      }

      // Map column names to data array values to create objects
      const columns =
        result.manifest?.schema.columns.map(col => col.name) || [];
      return result.result.data_array.map(
        row => Object.fromEntries(columns.map((col, i) => [col, row[i]])) as T
      );
    } catch (error) {
      logger.error('Direct SQL query failed', {
        sql,
        parameters,
        error: error instanceof Error ? error.message : 'Unknown error',
      });
      throw error instanceof Error
        ? error
        : new Error(`Query execution failed: ${error}`);
    }
  }

  /**
   * Executes a SQL statement and directly returns affected rows count or throws an error
   *
   * This is a simplified version of execute() that doesn't wrap results in a complex object.
   * It either returns the affected rows count directly or throws an error, making it easier to use
   * with try/catch or the withErrorHandling utility.
   *
   * @param sql SQL statement to execute (INSERT, UPDATE, DELETE, etc.)
   * @param parameters Optional statement parameters
   * @param wait_timeout Optional wait timeout in seconds (e.g. "30s")
   * @returns Number of affected rows (0 if no rows affected)
   * @throws Error if the execution fails for any reason
   */
  static async executeDirect(
    sql: string,
    parameters?: SQLParameter[],
    wait_timeout?: string
  ): Promise<number> {
    // Validate SQL input
    if (!sql?.trim()) {
      throw new Error('SQL statement is required');
    }

    try {
      logger.debug('Executing direct SQL statement', { sql, parameters });

      const result = await this.executeRequest(sql, parameters, wait_timeout);
      return result.result?.row_count || 0;
    } catch (error) {
      logger.error('Direct SQL execution failed', {
        sql,
        parameters,
        error: error instanceof Error ? error.message : 'Unknown error',
      });
      throw error instanceof Error
        ? error
        : new Error(`Statement execution failed: ${error}`);
    }
  }
}

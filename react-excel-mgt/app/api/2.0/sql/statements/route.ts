import { NextRequest } from 'next/server';
import { randomUUID } from 'crypto';
import { logger } from '@/lib/logger';
import { Database, open } from 'sqlite';
import sqlite3 from 'sqlite3';
import path from 'path';

interface SQLColumn {
  name: string;
  position: number;
  type_name: string;
  type_text: string;
}

interface SQLResponse {
  statement_id: string;
  status: {
    state: 'SUCCEEDED' | 'FAILED' | 'PENDING' | 'RUNNING';
    error?: {
      message: string;
      error_code: string;
    };
  };
  manifest: {
    format: 'JSON_ARRAY';
    schema: {
      column_count: number;
      columns: SQLColumn[];
    };
  };
  result: {
    chunk_index: number;
    total_chunk_count: number;
    row_count: number;
    row_offset: number;
    data_array: unknown[][];
  };
}

interface SQLParameter {
  name: string;
  value: string;
  type: string;
}

class SQLiteService {
  private static db: Database | null = null;
  private static readonly DB_PATH = path.resolve(
    process.cwd(),
    'data/tank_plan.db'
  );

  static async getConnection(): Promise<Database> {
    if (!this.db) {
      this.db = await open({
        filename: this.DB_PATH,
        driver: sqlite3.Database,
      });
    }
    return this.db;
  }

  static async executeStatement(sql: string, params?: SQLParameter[]) {
    const context = {
      module: 'SQLiteService',
      function: 'executeStatement',
      requestId: `sql-${Date.now()}`,
    };

    try {
      logger.group('Executing SQL statement', context);
      const db = await this.getConnection();

      const paramMap = new Map<string, string[]>();
      params?.forEach(p => {
        const values = paramMap.get(p.name) || [];
        values.push(p.value);
        paramMap.set(p.name, values);
      });

      const paramValues: string[] = [];
      const processedSql = sql.replace(/:(\w+)/g, (_, name) => {
        const values = paramMap.get(name);
        if (!values?.length) {
          throw new Error(`Missing parameter value for :${name}`);
        }

        const value = values.shift();
        paramValues.push(value!);
        return '?';
      });

      logger.debug('Executing query', context, {
        sql: processedSql,
        paramCount: paramValues.length,
        paramValues,
      });

      const isSelect = processedSql
        .toLowerCase()
        .replace(/\s+/g, ' ')
        .startsWith('select ');

      if (isSelect) {
        const rows = await db.all(processedSql, paramValues);
        const columns = rows.length > 0 ? Object.keys(rows[0]) : [];

        const formattedRows = rows.map(row =>
          columns.map(col => {
            const value = row[col];

            if (value === null) return null;

            return String(value);
          })
        );

        return {
          columns,
          rows: formattedRows,
        };
      } else {
        const result = await db.run(processedSql, paramValues);
        return {
          columns: ['affected_rows'],
          rows: [[String(result.changes)]],
        };
      }
    } catch (error) {
      logger.error('SQL execution failed', context, {
        sql,
        params: params?.length,
        paramValues: params?.map(p => p.value),
        error: error instanceof Error ? error.message : 'Unknown error',
      });
      throw error;
    } finally {
      logger.groupEnd();
    }
  }
}

interface ErrorResponse {
  statement_id: string;
  status: {
    state: 'FAILED';
    error: {
      message: string;
      error_code: string;
    };
  };
}

function createErrorResponse(
  message: string,
  code: string = 'EXECUTION_ERROR'
): ErrorResponse {
  return {
    statement_id: randomUUID().replace(/-/g, ''),
    status: {
      state: 'FAILED',
      error: {
        message,
        error_code: code,
      },
    },
  };
}

const TYPE_MAPPING = {
  INTEGER: 'LONG',
  REAL: 'DOUBLE',
  TEXT: 'STRING',
  BLOB: 'BINARY',
  NULL: 'NULL',
  BOOLEAN: 'BOOLEAN',
  DATE: 'DATE',
  TIMESTAMP: 'TIMESTAMP',
  DATETIME: 'TIMESTAMP',
} as const;

function getSQLiteTypeMapping(sqliteType: string): string {
  const type = sqliteType.toUpperCase();
  return TYPE_MAPPING[type as keyof typeof TYPE_MAPPING] || 'STRING';
}

function formatResponse(result: any, columns: any[]): SQLResponse {
  return {
    statement_id: randomUUID().replace(/-/g, ''),
    status: {
      state: 'SUCCEEDED',
    },
    manifest: {
      format: 'JSON_ARRAY',
      schema: {
        column_count: columns.length,
        columns: columns.map((col, index) => ({
          name: col,
          position: index,
          type_name: getSQLiteTypeMapping('TEXT'),
          type_text: 'TEXT',
        })),
      },
    },
    result: {
      chunk_index: 0,
      total_chunk_count: 1,
      row_count: result.rows.length,
      row_offset: 0,
      data_array: result.rows.length ? result.rows : [],
    },
  };
}

interface StatementRequest {
  warehouse_id: string;
  statement: string;
  wait_timeout?: string;
  on_wait_timeout?: 'CONTINUE' | 'CANCEL';
  parameters?: SQLParameter[];
}

function validateRequest(body: unknown): body is StatementRequest {
  if (!body || typeof body !== 'object') {
    return false;
  }

  const request = body as StatementRequest;

  if (!request.warehouse_id || typeof request.warehouse_id !== 'string') {
    return false;
  }

  if (!request.statement || typeof request.statement !== 'string') {
    return false;
  }

  if (request.wait_timeout && typeof request.wait_timeout !== 'string') {
    return false;
  }

  if (
    request.on_wait_timeout &&
    !['CONTINUE', 'CANCEL'].includes(request.on_wait_timeout)
  ) {
    return false;
  }

  return true;
}

export async function POST(request: NextRequest) {
  const context = {
    module: 'SQLiteService',
    function: 'executeStatement',
    requestId: `req-${Date.now()}`,
  };

  try {
    const requestBody = await request.json();

    if (!validateRequest(requestBody)) {
      return new Response(
        JSON.stringify(
          createErrorResponse('Invalid request format', 'INVALID_REQUEST')
        ),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const sql = requestBody.statement;
    const params = requestBody.parameters || [];

    logger.debug('Processing SQL request', context, {
      sql,
      paramCount: params.length,
      warehouse_id: requestBody.warehouse_id,
      wait_timeout: requestBody.wait_timeout,
    });

    const result = await SQLiteService.executeStatement(sql, params);
    const response = formatResponse(result, result.columns);

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    logger.error('SQL execution failed', context, {
      error: error instanceof Error ? error.message : 'Unknown error',
    });

    return new Response(
      JSON.stringify(
        createErrorResponse(
          error instanceof Error ? error.message : 'Unknown error'
        )
      ),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

export const OPTIONS = () =>
  new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });

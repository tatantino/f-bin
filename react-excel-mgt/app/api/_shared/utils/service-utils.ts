import logger from './logger';
import type { SQLParameter, SQLParameterType } from '../database/types';

/**
 * Wraps a service method with standardized error handling
 * @param operation Function to execute with error handling
 * @param errorMessage Error message to log if operation fails
 * @param metadata Additional metadata to include in error log
 * @returns The result of the operation
 */
export async function withErrorHandling<T>(
  operation: () => Promise<T>,
  errorMessage: string,
  metadata?: Record<string, any>
): Promise<T> {
  try {
    return await operation();
  } catch (error) {
    logger.error(errorMessage, {
      error: error instanceof Error ? error.message : 'Unknown error',
      ...metadata,
    });
    throw error;
  }
}

/**
 * SQL field condition definition for building WHERE clauses
 */
export interface SqlFieldCondition<T extends Record<string, any>> {
  /** Input field name in options object */
  field: keyof T;
  /** SQL column name in database table */
  sqlColumn: string;
  /** SQL parameter type */
  type: SQLParameterType;
  /** SQL operator (defaults to '=') */
  operator?: string;
  /** Parameter name in SQL query (defaults to field name) */
  paramName?: string;
  /** Optional transform function for the field value */
  transform?: (value: any) => any;
}

/**
 * Builds SQL WHERE conditions and parameters from options object
 * @param filterOptions Object containing filter criteria
 * @param fieldConditions Array of field condition definitions
 * @param tableAlias Optional table alias to prefix column names
 * @returns Object with SQL conditions array and parameters array
 */
export function buildWhereClause<T extends Record<string, any>>(
  filterOptions: T,
  fieldConditions: SqlFieldCondition<T>[],
  tableAlias?: string
): {
  conditions: string[];
  params: SQLParameter[];
} {
  const conditions: string[] = [];
  const params: SQLParameter[] = [];

  fieldConditions.forEach(fieldDef => {
    const value = filterOptions[fieldDef.field];

    // Skip empty values
    if (value === undefined || value === null || value === '') {
      return;
    }

    // Construct column name with optional table alias
    const columnName = tableAlias
      ? `${tableAlias}.${fieldDef.sqlColumn}`
      : fieldDef.sqlColumn;

    // Use provided parameter name or default to field name
    const paramName = fieldDef.paramName || String(fieldDef.field);

    // Use provided operator or default to '='
    const operator = fieldDef.operator || '=';

    // Add SQL condition
    conditions.push(`${columnName} ${operator} :${paramName}`);

    // Add parameter with optional value transformation
    params.push({
      name: paramName,
      value: fieldDef.transform ? fieldDef.transform(value) : value,
      type: fieldDef.type,
    });
  });

  return { conditions, params };
}

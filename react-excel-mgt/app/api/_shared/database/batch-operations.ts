import { DatabaseService } from './service';
import logger from '../utils/logger';

/**
 * Batch insert utility for database operations
 * Provides an efficient way to insert multiple records at once
 */
export class BatchOperations {
  /**
   * Insert multiple records into a database table
   * @param tableName - Target table name
   * @param records - Array of records to insert
   * @param options - Configuration options
   */
  static async batchInsert<T extends Record<string, any>>(
    tableName: string,
    records: T[],
    options: {
      excludeColumns?: string[];
      numericColumns?: string[];
      dateColumns?: string[];
    } = {}
  ): Promise<void> {
    if (!records.length) return;

    const {
      excludeColumns = [],
      numericColumns = [],
      dateColumns = [],
    } = options;

    // Log operation
    logger.debug('Executing batch insert', {
      tableName,
      recordCount: records.length,
      columnsCount: Object.keys(records[0]).length,
    });

    // Get valid columns
    const columns = Object.keys(records[0]).filter(
      col => !excludeColumns.includes(col)
    );

    // Format value based on column type
    const formatValue = (value: any, column: string): string => {
      // Handle null/undefined/empty strings
      if (value === null || value === undefined || value === '') {
        return 'NULL';
      }

      // Format based on column type
      if (numericColumns.includes(column)) {
        return String(value); // Numbers don't need quotes
      }

      if (dateColumns.includes(column)) {
        return `'${value}'`; // Dates need quotes
      }

      // Handle strings - escape single quotes
      return `'${String(value).replace(/'/g, "''")}'`;
    };

    // Build VALUES part of SQL
    const values = records
      .map(
        record =>
          `(${columns.map(col => formatValue(record[col], col)).join(', ')})`
      )
      .join(',\n');

    // Execute insert
    const sql = `
      INSERT INTO ${tableName} (${columns.join(', ')})
      VALUES ${values}
    `;

    await DatabaseService.execute(sql);
  }
}

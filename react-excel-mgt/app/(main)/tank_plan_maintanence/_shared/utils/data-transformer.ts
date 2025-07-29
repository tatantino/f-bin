import type { DatabricksAPIResponse, TransformedQueryResult } from '../types';
import { logger } from '@/lib/logger';
import { DateUtils } from './DateUtils';
import { DATE_COLUMNS } from '../config/config';

export class DataTransformer {
  static transformValue(value: any, type: string, columnKey: string): any {
    if (value === null || value === undefined) {
      return '';
    }

    if (
      type.toUpperCase() === 'DATE' ||
      type.toUpperCase() === 'TIMESTAMP' ||
      DATE_COLUMNS.includes(columnKey)
    ) {
      return DateUtils.formatToYYYYMMDD(value);
    }

    switch (type.toUpperCase()) {
      case 'BIGINT':
      case 'LONG':
      case 'INT':
      case 'INTEGER':
        return Number(value);
      case 'DOUBLE':
      case 'FLOAT':
        return parseFloat(value);
      case 'BOOLEAN':
        return Boolean(value);
      default:
        return String(value);
    }
  }

  static transformRows(result: DatabricksAPIResponse): any[] {
    const { columns } = result.manifest!.schema;
    const { data_array } = result.result!;

    return data_array.map(row => {
      const transformedRow: Record<string, any> = {};
      columns.forEach((column, index) => {
        const value = row[index];
        transformedRow[column.name] = this.transformValue(
          value,
          column.type_name,
          column.name
        );
      });
      return transformedRow;
    });
  }

  static transformQueryResult<T>(
    result: DatabricksAPIResponse,
    context: Record<string, any>,
    rowTransformer?: (row: any[]) => T
  ): TransformedQueryResult<T[]> {
    if (
      result.status.state !== 'SUCCEEDED' ||
      !result.manifest ||
      !result.result
    ) {
      logger.warn('Invalid response format', context, result);
      return {
        success: false,
        error: 'Invalid response format from SQL API',
        data: [],
      };
    }

    try {
      const transformedData = rowTransformer
        ? result.result.data_array.map(rowTransformer)
        : this.transformRows(result);

      logger.debug('Data transformation result', context, {
        success: true,
        count: transformedData.length,
        sample: transformedData.slice(0, 3).map(item => {
          const preview: Record<string, any> = {};
          const keys = Object.keys(item as object);
          keys.forEach(key => {
            preview[key] = (item as any)[key];
          });
          return preview;
        }),
      });

      return {
        success: true,
        data: transformedData as T[],
        debug: {
          rowCount: transformedData.length,
          timestamp: new Date().toISOString(),
          stage: 'Success',
          details: {
            statement_id: result.statement_id,
            originalStructure: {
              columnCount: result.manifest.schema.column_count,
              rowCount: result.result.row_count,
            },
          },
        },
      };
    } catch (error) {
      logger.error('Data transformation failed', context, { error });
      return {
        success: false,
        error: 'Failed to transform data',
        data: [],
        debug: {
          stage: 'Error',
          timestamp: new Date().toISOString(),
          details: { error },
        },
      };
    }
  }
}

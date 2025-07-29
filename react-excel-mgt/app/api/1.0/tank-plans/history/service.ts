import { DatabaseService, BatchOperations } from '@/app/api/_shared/database';
import { TableUtils, DataLayer } from '@/app/api/_shared/database/table-utils';
import {
  withErrorHandling,
  buildWhereClause,
  SqlFieldCondition,
} from '@/app/api/_shared/utils/service-utils';
import { TankPlanHistory, CreateTankPlanHistory } from './models';
import type {
  SQLParameter,
  SQLParameterType,
} from '@/app/api/_shared/database/types';

/**
 * Query options for tank plan histories
 */
interface QueryOptions {
  tank?: string;
  rc?: string;
  category?: string;
  startDate?: string;
  endDate?: string;
  page?: number;
  limit?: number;
}

/**
 * Tank Plan History Service
 * Handles database operations for tank plan history records
 */
export class TankPlanHistoryService {
  private static readonly TABLE = TableUtils.getTableName(
    'app_tank_plan_change_hist',
    DataLayer.GOLD
  );

  private static readonly DATE_COLUMNS = [
    'drain_date_o',
    'repair_date_o',
    'RTL_date_o',
    'TL_date_o',
    'GG_date_o',
    'drain_date_n',
    'repair_date_n',
    'RTL_date_n',
    'TL_date_n',
    'GG_date_n',
  ];

  /**
   * Get tank plan histories with filtering and pagination
   */
  static async getHistories(
    options: QueryOptions = {}
  ): Promise<TankPlanHistory[]> {
    return withErrorHandling(async () => {
      const filterConditions: SqlFieldCondition<QueryOptions>[] = [
        {
          field: 'tank',
          sqlColumn: 'tank',
          type: 'STRING' as SQLParameterType,
        },
        { field: 'rc', sqlColumn: 'RC', type: 'STRING' as SQLParameterType },
        {
          field: 'category',
          sqlColumn: 'remark_category',
          type: 'STRING' as SQLParameterType,
        },
        {
          field: 'startDate',
          sqlColumn: 'plan_change_hist_timestamp',
          operator: '>=',
          paramName: 'start_date',
          type: 'TIMESTAMP' as SQLParameterType,
          transform: value => value,
        },
        {
          field: 'endDate',
          sqlColumn: 'plan_change_hist_timestamp',
          operator: '<=',
          paramName: 'end_date',
          type: 'TIMESTAMP' as SQLParameterType,
          transform: value =>
            value.length === 10 ? value + ' 23:59:59' : value,
        },
      ];

      const { conditions, params } = buildWhereClause(
        options,
        filterConditions
      );
      const whereClause = conditions.length
        ? `WHERE ${conditions.join(' AND ')}`
        : '';

      const limitClause =
        options.page && options.limit
          ? `LIMIT ${options.limit} OFFSET ${(options.page - 1) * options.limit}`
          : '';

      const sql = `
        SELECT * FROM ${this.TABLE}
        ${whereClause}
        ORDER BY plan_change_hist_timestamp DESC
        ${limitClause}
      `;

      return await DatabaseService.queryDirect<TankPlanHistory>(sql, params);
    }, 'Failed to get tank plan histories');
  }

  /**
   * Create a new tank plan history record
   */
  static async createHistory(history: CreateTankPlanHistory): Promise<object> {
    return withErrorHandling(async () => {
      const columns = Object.keys(history);
      const values = columns.map((_, i) => `:value_${i}`);
      const params: SQLParameter[] = Object.entries(history).map(
        ([key, value], i) => ({
          name: `value_${i}`,
          value: String(value || ''),
          type: key.includes('date') ? 'DATE' : 'STRING',
        })
      );

      const sql = `INSERT INTO ${this.TABLE} (${columns.join(', ')}) VALUES (${values.join(', ')})`;
      await DatabaseService.executeDirect(sql, params);

      return {};
    }, 'Failed to create tank plan history record');
  }

  /**
   * Create multiple tank plan history records in a single operation
   */
  static async createHistories(
    histories: CreateTankPlanHistory[]
  ): Promise<object> {
    if (!histories.length) {
      return { count: 0 };
    }

    return withErrorHandling(async () => {
      await BatchOperations.batchInsert(this.TABLE, histories, {
        excludeColumns: ['plan_change_hist_timestamp', 'update_timestamp'],
        dateColumns: this.DATE_COLUMNS,
        numericColumns: ['plan_master_id'],
      });

      return { count: histories.length };
    }, 'Failed to create tank plan history records');
  }
}

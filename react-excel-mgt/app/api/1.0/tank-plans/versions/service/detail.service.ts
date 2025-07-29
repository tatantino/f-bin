import { DatabaseService, BatchOperations } from '@/app/api/_shared/database';
import { TableUtils, DataLayer } from '@/app/api/_shared/database/table-utils';
import { withErrorHandling } from '@/app/api/_shared/utils/service-utils';
import { TankPlanDetail } from '../models';
import type { SQLParameterType } from '@/app/api/_shared/database/types';

/**
 * Detail Tank Plan Service
 * Handles database operations for tank plan detail records
 */
export class DetailService {
  // Table definition
  static readonly DETAIL_TABLE = TableUtils.getTableName(
    'app_tank_plan_detail',
    DataLayer.GOLD
  );

  // Valid columns for detail table
  static readonly DETAIL_NUMERIC_COLUMNS = [
    'plan_row_id',
    'plan_master_id',
    'tank_life',
    'cold_idle',
    'repair_LT',
    'RTL_LT',
    'TL_LT',
  ];

  static readonly DETAIL_DATE_COLUMNS = [
    'last_tank_light_date',
    'drain_date',
    'repair_date',
    'RTL_date',
    'TL_date',
    'GG_date',
  ];

  /**
   * Fetch detail records by master ID
   */
  static async fetchDetailsByMasterId(
    masterId: string
  ): Promise<TankPlanDetail[]> {
    return withErrorHandling(async () => {
      const sql = `
          SELECT *
          FROM ${this.DETAIL_TABLE}
          WHERE plan_master_id = :masterId
          ORDER BY plan_row_id
        `;
      return await DatabaseService.queryDirect<TankPlanDetail>(sql, [
        {
          name: 'masterId',
          value: masterId,
          type: 'STRING' as SQLParameterType,
        },
      ]);
    }, `Failed to fetch details for master ID ${masterId}`);
  }

  /**
   * Insert tank plan details
   */
  static async insertDetails(details: TankPlanDetail[]): Promise<void> {
    if (!details.length) return;

    return withErrorHandling(async () => {
      await BatchOperations.batchInsert(this.DETAIL_TABLE, details, {
        excludeColumns: ['create_timestamp', 'update_timestamp'],
        numericColumns: this.DETAIL_NUMERIC_COLUMNS,
        dateColumns: this.DETAIL_DATE_COLUMNS,
      });
    }, 'Failed to insert details');
  }

  /**
   * Update tank plan details
   */
  static async updateDetails(
    masterId: string,
    details: TankPlanDetail[]
  ): Promise<void> {
    if (!details.length) return;

    return withErrorHandling(async () => {
      // Delete existing details first
      await this.deleteDetailsByMasterId(masterId);

      // Insert new details if any exist
      const detailsWithMasterId = details.map(detail => ({
        ...detail,
        plan_master_id: Number(masterId),
      }));

      await this.insertDetails(detailsWithMasterId);
    }, `Failed to update details for master ID ${masterId}`);
  }

  /**
   * Delete all details for a master ID
   */
  static async deleteDetailsByMasterId(masterId: string): Promise<void> {
    return withErrorHandling(async () => {
      const sql = `
          DELETE FROM ${this.DETAIL_TABLE}
          WHERE plan_master_id = :masterId
        `;
      await DatabaseService.executeDirect(sql, [
        {
          name: 'masterId',
          value: masterId,
          type: 'STRING' as SQLParameterType,
        },
      ]);
    }, `Failed to delete details for master ID ${masterId}`);
  }
}

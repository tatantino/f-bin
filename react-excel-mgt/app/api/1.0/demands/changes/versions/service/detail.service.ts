import { DatabaseService } from '@/app/api/_shared/database';
import { TableUtils, DataLayer } from '@/app/api/_shared/database/table-utils';
import { BatchOperations } from '@/app/api/_shared/database/batch-operations';
import { DmdChangeDetail, UpdateDmdChangeDetail } from '../models/dmd-change';
import { withErrorHandling } from '@/app/api/_shared/utils/service-utils';
import { v4 as uuidv4 } from 'uuid';

/**
 * Detail Demand Change Service
 * Handles database operations for demand change detail records
 */
export class DetailService {
  static readonly DETAIL_TABLE = TableUtils.getTableName(
    'app_dmd_change_detail',
    DataLayer.GOLD
  );

  /** Valid columns for detail table */
  static readonly DETAIL_VALID_COLUMNS = [
    'business_unit',
    'region',
    'gen_group',
    'gen_size',
    'composition_group',
    'composition',
    'customer',
    'TFT_customer',
    'TFT_region',
    'area',
    'thickness',
    'grade',
    'dmd_year',
    'dmd_quarter',
    'dmd_value',
  ];

  /**
   * Fetch detail records by master ID
   */
  static async fetchDetailsByMasterId(
    masterId: string
  ): Promise<DmdChangeDetail[]> {
    return withErrorHandling(async () => {
      const sql = `
        SELECT *
        FROM ${this.DETAIL_TABLE}
        WHERE dmd_change_master_id = :masterId
      `;
      return await DatabaseService.queryDirect<DmdChangeDetail>(sql, [
        { name: 'masterId', value: masterId, type: 'STRING' },
      ]);
    }, `Failed to fetch details for master ID ${masterId}`);
  }

  /**
   * Insert demand change details
   */
  static async insertDetails(
    details: UpdateDmdChangeDetail[],
    masterId: string
  ): Promise<void> {
    return withErrorHandling(async () => {
      const preparedDetails = this.prepareDetailRecords(details, masterId);

      await BatchOperations.batchInsert(this.DETAIL_TABLE, preparedDetails, {
        excludeColumns: ['create_timestamp', 'update_timestamp'],
        numericColumns: ['dmd_value'],
      });
    }, `Failed to insert ${details.length} detail records for master ID ${masterId}`);
  }

  /**
   * Update demand change details
   */
  static async updateDetails(
    masterId: string,
    details: UpdateDmdChangeDetail[]
  ): Promise<void> {
    return withErrorHandling(async () => {
      if (details.length > 0) {
        await this.deleteDetailsByMasterId(masterId);
        await this.insertDetails(details, masterId);
      }
    }, `Failed to update details for master ID ${masterId}`);
  }

  /**
   * Delete all details for a master ID
   */
  static async deleteDetailsByMasterId(masterId: string): Promise<void> {
    return withErrorHandling(async () => {
      const sql = `
        DELETE FROM ${this.DETAIL_TABLE}
        WHERE dmd_change_master_id = :masterId
      `;
      await DatabaseService.executeDirect(sql, [
        { name: 'masterId', value: masterId, type: 'STRING' },
      ]);
    }, `Failed to delete details for master ID ${masterId}`);
  }

  /**
   * Prepare detail records for insertion
   */
  static prepareDetailRecords(
    details: UpdateDmdChangeDetail[],
    masterId: string
  ): Record<string, any>[] {
    return details.map(detail => {
      // Use the detail ID from frontend if provided, otherwise generate new one
      const validDetail: Record<string, any> = {
        dmd_change_detail_id: detail.dmd_change_detail_id || uuidv4(),
        dmd_change_master_id: masterId,
      };

      for (const column of this.DETAIL_VALID_COLUMNS) {
        validDetail[column] = (detail as any)[column];
      }

      return validDetail;
    });
  }
}

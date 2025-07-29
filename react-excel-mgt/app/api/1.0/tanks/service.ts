import { DatabaseService, BatchOperations } from '@/app/api/_shared/database';
import { TableUtils, DataLayer } from '@/app/api/_shared/database/table-utils';
import { withErrorHandling } from '@/app/api/_shared/utils/service-utils';
import { Tank } from './models';

/**
 * Tank Service
 * Handles database operations for tank records
 */
export class TankService {
  private static readonly TABLE = TableUtils.getTableName(
    'app_tank',
    DataLayer.GOLD
  );

  /**
   * Get all tanks
   */
  static async getTanks(): Promise<Tank[]> {
    return withErrorHandling(async () => {
      return await DatabaseService.queryDirect<Tank>(
        `SELECT * FROM ${this.TABLE}`
      );
    }, 'Failed to get tanks');
  }

  /**
   * Save tanks (replaces all existing records)
   */
  static async saveTanks(tanks: Tank[]): Promise<{ count: number }> {
    if (!tanks.length) {
      throw new Error('No tanks provided');
    }

    return withErrorHandling(
      async () => {
        // Delete all existing records
        await DatabaseService.executeDirect(`DELETE FROM ${this.TABLE}`);

        // Insert new records using batch operation
        await BatchOperations.batchInsert(this.TABLE, tanks, {
          excludeColumns: ['create_timestamp', 'update_timestamp'],
          numericColumns: ['region_seq'],
        });

        return { count: tanks.length };
      },
      'Failed to save tanks',
      { tanks }
    );
  }
}

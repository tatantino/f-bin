import { DatabaseService, BatchOperations } from '@/app/api/_shared/database';
import { TableUtils, DataLayer } from '@/app/api/_shared/database/table-utils';
import { withErrorHandling } from '@/app/api/_shared/utils/service-utils';
import { CompositionOverride, CHANGE_TYPE } from './models';

/**
 * CompositionOverride Service
 * Handles database operations for composition override records
 */
export class CompositionOverrideService {
  private static readonly TABLE = TableUtils.getTableName(
    'app_tankplan_override',
    DataLayer.GOLD
  );

  /**
   * Get all composition overrides
   * Filters out soft-deleted records and resets change_type for existing records
   */
  static async getCompositionOverrides(): Promise<CompositionOverride[]> {
    return withErrorHandling(async () => {
      // Fetch all records that are not marked as deleted
      const records = await DatabaseService.queryDirect<CompositionOverride>(
        `SELECT * FROM ${this.TABLE} WHERE change_type IS NULL OR change_type != '${CHANGE_TYPE.DELETE}'`
      );

      // Reset change_type for existing records to ensure proper tracking
      return records.map(record => ({
        ...record,
        // Clear change_type for existing records to ensure they're not marked as new/updated
        // This ensures only actual changes will be tracked when the user modifies data
        change_type: null,
      }));
    }, 'Failed to get composition overrides');
  }

  /**
   * Save composition overrides
   * Handles record status and ID generation
   */
  static async saveCompositionOverrides(
    overrides: CompositionOverride[]
  ): Promise<{ count: number }> {
    if (!Array.isArray(overrides) || overrides.length === 0) {
      throw new Error('Invalid data format. Expected array of overrides.');
    }

    return withErrorHandling(async () => {
      const currentTimestamp = new Date().toISOString().slice(0, 10);
      // .slice(0, 19)
      // .replace('T', ' ');

      // Process each override record
      const processedOverrides = overrides.map(override => {
        // 确保每条记录都有override_id
        if (!override.override_id) {
          throw new Error('All override records must have an override_id');
        }

        return {
          ...override,
          created_date: override.created_date || currentTimestamp,
          updated_date: override.updated_date || currentTimestamp,
        };
      });

      // Delete all existing records
      await DatabaseService.executeDirect(`DELETE FROM ${this.TABLE}`);

      console.log('processedOverrides', processedOverrides);
      // Insert new records using batch operation
      await BatchOperations.batchInsert(this.TABLE, processedOverrides, {
        dateColumns: [
          'period_from',
          'period_to',
          'effective_from',
          'effective_to',
          'created_date',
          'updated_date',
        ],
      });

      return { count: processedOverrides.length };
    }, 'Failed to save composition overrides');
  }
}

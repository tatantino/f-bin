import { DatabaseService } from '@/app/api/_shared/database';
import { TableUtils, DataLayer } from '@/app/api/_shared/database/table-utils';
import { withErrorHandling } from '@/app/api/_shared/utils/service-utils';
import type { CompositionGroupMappings } from './models';
/**
 * Composition Group Mapping Service
 * Responsible for database interactions and data transformations for composition groups
 */
export class CompositionGroupMappingService {
  private static readonly TABLE = TableUtils.getTableName(
    'composition_group_mapping',
    DataLayer.SILVER
  );

  /**
   * Get all composition groups with their associated compositions
   */
  static async getCompositionGroups(): Promise<CompositionGroupMappings[]> {
    return withErrorHandling(async () => {
      const query = `
        SELECT DISTINCT composition_group, composition
        FROM ${this.TABLE}
        ORDER BY composition_group, composition
      `;

      const rows = await DatabaseService.queryDirect<{
        composition_group: string;
        composition: string;
      }>(query);

      // Group compositions by composition_group
      const groupMap = new Map<string, Set<string>>();

      rows.forEach(row => {
        if (!groupMap.has(row.composition_group)) {
          groupMap.set(row.composition_group, new Set<string>());
        }
        groupMap.get(row.composition_group)!.add(row.composition);
      });

      // Format the final result
      return Array.from(groupMap.entries()).map(
        ([composition_group, compositions]) => ({
          composition_group,
          compositions: Array.from(compositions).sort(),
        })
      );
    }, 'Failed to get composition groups and compositions');
  }
}

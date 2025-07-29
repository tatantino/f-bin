import { DatabaseService } from '@/app/api/_shared/database';
import { TableUtils, DataLayer } from '@/app/api/_shared/database/table-utils';
import { withErrorHandling } from '@/app/api/_shared/utils/service-utils';
import type { GenGroupIsopipeMappings, GenGroupQueryRow } from './models';

/**
 * Generation Group Mapping Service
 * Responsible for database interactions and data transformations for generation groups
 */
export class GenGroupMappingService {
  private static readonly TABLE = TableUtils.getTableName(
    'composition_group_mapping',
    DataLayer.SILVER
  );

  /**
   * Get all generation groups with their associated generations and isopipe mappings
   */
  static async getGenGroups(): Promise<GenGroupIsopipeMappings[]> {
    return withErrorHandling(async () => {
      const query = `
        SELECT DISTINCT 
          gen_group,
          gen,
          isopipe_mapping_1st, allocation_1st,
          isopipe_mapping_2nd, allocation_2nd,
          isopipe_mapping_3rd, allocation_3rd,
          isopipe_mapping_4th, allocation_4th
        FROM ${this.TABLE}
        ORDER BY gen_group, gen
      `;

      const rows = await DatabaseService.queryDirect<GenGroupQueryRow>(query);

      // Group generations and isopipe mappings by gen_group
      const groupMap = new Map<
        string,
        { gens: Set<string>; mappings: Map<string, number> }
      >();

      rows.forEach(row => {
        if (!groupMap.has(row.gen_group)) {
          groupMap.set(row.gen_group, {
            gens: new Set<string>(),
            mappings: new Map<string, number>(),
          });
        }

        const group = groupMap.get(row.gen_group)!;
        group.gens.add(row.gen);

        // Add isopipe mappings
        if (row.isopipe_mapping_1st) {
          group.mappings.set(
            row.isopipe_mapping_1st,
            (row.allocation_1st ?? 0) * 100
          );
        }
        if (row.isopipe_mapping_2nd) {
          group.mappings.set(
            row.isopipe_mapping_2nd,
            (row.allocation_2nd ?? 0) * 100
          );
        }
        if (row.isopipe_mapping_3rd) {
          group.mappings.set(
            row.isopipe_mapping_3rd,
            (row.allocation_3rd ?? 0) * 100
          );
        }
        if (row.isopipe_mapping_4th) {
          group.mappings.set(
            row.isopipe_mapping_4th,
            (row.allocation_4th ?? 0) * 100
          );
        }
      });

      // Format the final result
      return Array.from(groupMap.entries()).map(
        ([gen_group, { gens, mappings }]) => ({
          gen_group,
          gens: Array.from(gens).sort(),
          isopipe_mappings: Array.from(mappings.entries())
            .map(([size, allocation]) => ({
              size,
              allocation: Math.round(allocation * 100) / 100, // Round to 2 decimal places
            }))
            .sort((a, b) => parseInt(b.size) - parseInt(a.size)), // Sort by size in descending order
        })
      );
    }, 'Failed to get generation groups and isopipe mappings');
  }
}

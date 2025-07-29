import { DatabaseService } from '@/app/api/_shared/database';
import { TableUtils, DataLayer } from '@/app/api/_shared/database/table-utils';
import { withErrorHandling } from '@/app/api/_shared/utils/service-utils';
import type { SpGbVersion, VersionRecord } from './models';

/**
 * SP-GB Version Service
 * Responsible for fetching and processing SP-GB version data from Databricks
 */
export class SpGbVersionService {
  private static readonly TABLE = TableUtils.getTableName(
    'vw_demand_summary',
    DataLayer.SILVER
  );

  /**
   * Get all SP-GB versions with their associated quarter dates
   */
  static async getSpGbVersions(): Promise<SpGbVersion[]> {
    return withErrorHandling(async () => {
      // Fetch all versions with dates in a single query
      const query = `
        SELECT DISTINCT 
          sp_gb_version, 
          sp_version, 
          gb_version, 
          date_YYYYQQ
        FROM ${this.TABLE}
        WHERE sp_gb_version IS NOT NULL 
          AND date_YYYYQQ IS NOT NULL
        ORDER BY sp_gb_version DESC, date_YYYYQQ ASC
      `;

      const records = await DatabaseService.queryDirect<VersionRecord>(query);

      // Group data by version
      const versionMap = new Map<string, SpGbVersion>();

      for (const record of records) {
        const { sp_gb_version, sp_version, gb_version, date_YYYYQQ } = record;

        // Create new version entry if not exists
        if (!versionMap.has(sp_gb_version)) {
          versionMap.set(sp_gb_version, {
            sp_gb_version,
            sp_version,
            gb_version,
            date_YYYYQQs: [],
          });
        }

        // Add quarter to version's quarters list (avoid duplicates)
        const version = versionMap.get(sp_gb_version)!;
        if (date_YYYYQQ && !version.date_YYYYQQs.includes(date_YYYYQQ)) {
          version.date_YYYYQQs.push(date_YYYYQQ);
        }
      }

      // Sort quarters for each version
      const versions = Array.from(versionMap.values());
      for (const version of versions) {
        version.date_YYYYQQs.sort();
      }

      return versions;
    }, 'Failed to fetch SP-GB versions');
  }
}

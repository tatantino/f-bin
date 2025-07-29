import type { PlanVersion, TransformedQueryResult } from '../types';
import { ApiClient } from './api-client';

export const VersionDatabaseService = {
  async getVersionInfo(
    id: number
  ): Promise<TransformedQueryResult<PlanVersion>> {
    try {
      const result = await ApiClient.get<{
        master: PlanVersion;
        details: unknown[];
      }>(`/api/1.0/tank-plans/versions/${id}`);

      if (!result?.master) {
        throw new Error('Version not found');
      }

      // Calculate row_count from details length for API compatibility
      const versionInfo = {
        ...result.master,
        row_count: result.details?.length || 0,
      };

      return {
        success: true,
        data: versionInfo,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  },
};

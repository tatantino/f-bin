import type {
  TankPlanDetailData,
  TransformedQueryResult,
  PlanVersion,
  PlanType,
} from '../types';
import { ApiClient } from './api-client';

interface PlanVersionInfo {
  parentId?: string | null;
  planVersion?: string;
  planOfficial?: string;
  versionNo?: number;
  username?: string;
  planType?: PlanType;
}

interface PlanVersionExistsResult {
  exists: boolean;
  data?: PlanVersion;
}

export const PlanDatabaseService = {
  async checkPlanVersionExists(
    planVersion: string,
    planType: PlanType
  ): Promise<TransformedQueryResult<PlanVersionExistsResult>> {
    try {
      const results = await ApiClient.get<PlanVersion[]>(
        '/api/1.0/tank-plans/versions',
        {
          planType,
          limit: '1',
        }
      );

      const versionExists =
        Array.isArray(results) &&
        results.some(
          version =>
            version.plan_version === planVersion &&
            version.plan_type === planType
        );

      return {
        success: true,
        data: {
          exists: versionExists,
          data: versionExists
            ? results.find(
                v => v.plan_version === planVersion && v.plan_type === planType
              )
            : undefined,
        },
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  },

  async savePlanData(
    data: TankPlanDetailData[],
    versionInfo: PlanVersionInfo = {}
  ): Promise<TransformedQueryResult<number>> {
    try {
      const planVersion =
        versionInfo.planVersion || new Date().toISOString().split('T')[0];
      const username = versionInfo.username || 'system';
      const planType = versionInfo.planType || 'Weekly';

      // Remove plan_detail_id to avoid unique constraint errors
      const cleanedData = data.map(({ plan_detail_id, ...rest }) => rest);

      const payload = {
        master: {
          plan_version: planVersion,
          plan_type: planType,
          plan_official: versionInfo.planOfficial || '',
          plan_version_no: versionInfo.versionNo || 1,
          plan_version_parent: versionInfo.parentId || '',
          user_name: username,
        },
        details: cleanedData,
      };

      const result = await ApiClient.post<{ id: string }>(
        '/api/1.0/tank-plans/versions',
        payload
      );
      const planMasterId = Number(result.id);

      if (!planMasterId) {
        throw new Error('Failed to get plan_master_id from API response');
      }

      return {
        success: true,
        data: planMasterId,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  },
};

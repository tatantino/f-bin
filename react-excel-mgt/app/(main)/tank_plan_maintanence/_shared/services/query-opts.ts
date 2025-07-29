import type {
  TankPlanDetailData,
  PlanHistoryRecord,
  PlanVersion,
} from '../types';
import { ApiClient } from './api-client';

export interface HistoryQueryParams {
  startDate?: string;
  endDate?: string;
  tank?: string;
  rc?: string;
  category?: string;
}

export interface PlanVersionExistsResult {
  exists: boolean;
  data?: PlanVersion;
}

export interface VersionInfoResult {
  master: PlanVersion;
  details: TankPlanDetailData[];
}

export const queryOpts = {
  versionDetails: (id?: string | number) => ({
    queryKey: ['tank-plan-version-details', id] as const,
    queryFn: async (): Promise<TankPlanDetailData[]> => {
      if (!id) throw new Error('Version ID is required');
      const result = await ApiClient.get<VersionInfoResult>(
        `/api/1.0/tank-plans/versions/${id}`
      );
      return result.details;
    },
    enabled: !!id,
  }),

  versionInfo: (id?: string | number) => ({
    queryKey: ['tank-plan-version-info', id] as const,
    queryFn: async (): Promise<VersionInfoResult> => {
      if (!id) throw new Error('Version ID is required');
      return ApiClient.get<VersionInfoResult>(
        `/api/1.0/tank-plans/versions/${id}`
      );
    },
    enabled: !!id,
  }),

  versionExists: (planVersion: string, planType: string) => ({
    queryKey: ['tank-plan-version-exists', planVersion, planType] as const,
    queryFn: async (): Promise<PlanVersionExistsResult> => {
      if (!planVersion || !planType) {
        throw new Error('Plan version and type are required');
      }

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
          v => v.plan_version === planVersion && v.plan_type === planType
        );

      return {
        exists: versionExists,
        data: versionExists
          ? results.find(
              v => v.plan_version === planVersion && v.plan_type === planType
            )
          : undefined,
      };
    },
    enabled: !!planVersion && !!planType,
  }),

  historyRecords: (params?: HistoryQueryParams) => ({
    queryKey: [
      'tank-plan-history-records',
      params?.startDate,
      params?.endDate,
      params?.tank,
      params?.rc,
      params?.category,
    ] as const,
    queryFn: async (): Promise<PlanHistoryRecord[]> => {
      // Convert params to Record<string, string> and filter out undefined/all values
      if (!params) return [];

      const queryParams = Object.entries(params)
        .filter(([_, value]) => value !== undefined && value !== 'all')
        .reduce(
          (acc, [key, value]) => ({ ...acc, [key]: value }),
          {} as Record<string, string>
        );

      return ApiClient.get<PlanHistoryRecord[]>(
        '/api/1.0/tank-plans/history',
        queryParams
      );
    },
  }),
} as const;

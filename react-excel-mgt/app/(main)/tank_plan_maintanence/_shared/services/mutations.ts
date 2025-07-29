import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import type { TankPlanDetailData, PlanVersion, PlanType } from '../types';
import { logger } from '@/lib/logger';
import { ApiClient } from './api-client';

export interface PlanVersionInfo {
  parentId?: string | null;
  planVersion?: string;
  planOfficial?: string;
  versionNo?: number;
  username?: string;
  planType?: PlanType;
}

export interface CreatePlanParams {
  data: TankPlanDetailData[];
  versionInfo: PlanVersionInfo;
}

export interface UpdatePlanParams {
  masterId: string | number;
  data: TankPlanDetailData[];
  versionInfo: Partial<PlanVersion>;
  username: string;
}

export function useCreatePlanVersionMutation() {
  const queryClient = useQueryClient();

  return useMutation<number, Error, CreatePlanParams>({
    mutationFn: async ({ data, versionInfo }) => {
      const planVersion =
        versionInfo.planVersion || new Date().toISOString().split('T')[0];
      const versionNo = versionInfo.versionNo || 1;
      const username = versionInfo.username || 'system';
      const planType = versionInfo.planType || 'Weekly';

      // Remove plan_detail_id from data
      const cleanedData = data.map(({ plan_detail_id, ...rest }) => rest);

      const payload = {
        master: {
          plan_version: planVersion,
          plan_type: planType,
          plan_official: versionInfo.planOfficial || '',
          plan_version_no: versionNo,
          plan_version_parent: versionInfo.parentId || '',
          user_name: username,
        },
        details: cleanedData,
      };

      logger.debug('Creating plan version', {
        module: 'useCreatePlanVersionMutation',
        planVersion,
        planType,
        username,
      });

      const result = await ApiClient.post<{ id: string }>(
        '/api/1.0/tank-plans/versions',
        payload
      );
      return Number(result.id);
    },
    onSuccess: planMasterId => {
      toast.success('Plan version created successfully');

      queryClient.invalidateQueries({
        queryKey: ['tank-plan-versions'],
      });

      queryClient.invalidateQueries({
        queryKey: ['tank-plan-version-details', planMasterId],
      });
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to create plan version');
    },
  });
}

export function useUpdatePlanVersionMutation() {
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, UpdatePlanParams>({
    mutationFn: async ({ masterId, data, versionInfo, username }) => {
      // Remove plan_detail_id from data
      const cleanedData = data.map(({ plan_detail_id, ...rest }) => rest);

      const payload = {
        master: {
          ...versionInfo,
          user_name: username,
        },
        details: cleanedData,
      };

      logger.debug('Updating plan version', {
        module: 'useUpdatePlanVersionMutation',
        masterId,
        username,
      });

      await ApiClient.patch(
        `/api/1.0/tank-plans/versions/${masterId}`,
        payload
      );
      return true;
    },
    onSuccess: (_, variables) => {
      toast.success('Plan version updated successfully');

      queryClient.invalidateQueries({
        queryKey: ['tank-plan-versions'],
      });

      queryClient.invalidateQueries({
        queryKey: ['tank-plan-version-details', variables.masterId],
      });
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to update plan version');
    },
  });
}

export const useSaveHistoryRecordsMutation = () => {
  return useMutation({
    mutationFn: async ({
      planMasterId,
      newData,
      originalData,
      username,
    }: {
      planMasterId: number;
      newData: TankPlanDetailData[];
      originalData: TankPlanDetailData[];
      username: string;
    }) => {
      // Process data to create history records
      const dateFields = [
        'drain_date',
        'repair_date',
        'RTL_date',
        'TL_date',
        'GG_date',
      ];

      const originalDataMap = new Map(
        originalData.map(row => [row.plan_row_id, row])
      );

      const historyRecords = newData
        .map(newRow => {
          const oldRow = originalDataMap.get(newRow.plan_row_id);
          if (!oldRow) return null;

          const hasChanges = dateFields.some(
            field => oldRow[field] !== newRow[field]
          );
          if (!hasChanges) return null;

          return {
            plan_master_id: planMasterId,
            tank: newRow.tank,
            RC: newRow.RC,
            drain_date_o: oldRow.drain_date,
            repair_date_o: oldRow.repair_date,
            RTL_date_o: oldRow.RTL_date,
            TL_date_o: oldRow.TL_date,
            GG_date_o: oldRow.GG_date,
            drain_date_n: newRow.drain_date,
            repair_date_n: newRow.repair_date,
            RTL_date_n: newRow.RTL_date,
            TL_date_n: newRow.TL_date,
            GG_date_n: newRow.GG_date,
            remark_category: newRow.remark_category || 'GENERAL',
            remark: newRow.remark || '',
            username: username,
          };
        })
        .filter(record => record !== null);

      if (historyRecords.length === 0) {
        return { success: true, count: 0 };
      }

      const result = await ApiClient.post<{ count: number }>(
        '/api/1.0/tank-plans/history',
        historyRecords
      );
      return { success: true, count: result.count || historyRecords.length };
    },
  });
};

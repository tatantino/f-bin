import { useCallback } from 'react';
import type { TankPlanDetailData } from '../../types';
import { useBaseState } from '../useBaseState';
import DatabaseService from '../../services/database';
import type { PlanVersionInfo, PlanVersionSaveResult } from './types';
import { logger } from '@/lib/logger';
import useMyAccount from '@/hooks/use-my-account';
import { toast } from 'sonner';
import { triggerPlanJob } from './useDatabricksJob';
import {
  useSaveHistoryRecordsMutation,
  useCreatePlanVersionMutation,
  useUpdatePlanVersionMutation,
} from '../../services/mutations';

interface VersionUpdateData {
  planMasterId: number;
  currentVersion: any;
  data: TankPlanDetailData[];
  originalData: TankPlanDetailData[];
  versionInfo: PlanVersionInfo;
  username: string;
}

export function usePlanVersionSave(): PlanVersionSaveResult {
  const { isLoading: isSaving, withLoading } = useBaseState({
    context: { module: 'usePlanVersionSave', function: 'savePlanData' },
  });
  const { account } = useMyAccount();
  const createVersionMutation = useCreatePlanVersionMutation();
  const updateVersionMutation = useUpdatePlanVersionMutation();
  const saveHistoryMutation = useSaveHistoryRecordsMutation();

  // Helper function to process history records
  const processHistoryRecords = async (
    newData: TankPlanDetailData[],
    originalData: TankPlanDetailData[],
    planMasterId: number,
    username: string
  ) => {
    try {
      await saveHistoryMutation.mutateAsync({
        planMasterId,
        newData,
        originalData,
        username,
      });
    } catch (error) {
      logger.error('Failed to save history records', {
        module: 'usePlanVersionSave',
        function: 'processHistoryRecords',
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  };

  // Helper function to handle version updates
  const handleVersionUpdate = async ({
    planMasterId,
    currentVersion,
    data,
    originalData,
    versionInfo,
    username,
  }: VersionUpdateData): Promise<boolean> => {
    const context = {
      module: 'usePlanVersionSave',
      function: 'handleVersionUpdate',
      versionInfo,
    };

    logger.debug('Handling version update', context);

    try {
      const currentVersionNo = parseInt(
        String(currentVersion.plan_version_no || 0),
        10
      );
      const newVersionNo = isNaN(currentVersionNo) ? 1 : currentVersionNo + 1;

      // Update the version using the mutation
      await updateVersionMutation.mutateAsync({
        masterId: planMasterId,
        data,
        versionInfo: {
          ...currentVersion,
          plan_version_no: newVersionNo,
          plan_official: versionInfo.planOfficial || '',
        },
        username,
      });

      // Use the provided originalData for history records
      if (originalData && originalData.length > 0) {
        await processHistoryRecords(data, originalData, planMasterId, username);
      }

      return true;
    } catch (error) {
      logger.error('Error updating plan version', context, {
        error: error instanceof Error ? error.message : 'Unknown error',
      });
      return false;
    }
  };

  const savePlanData = useCallback(
    async (
      data: TankPlanDetailData[],
      originalData: TankPlanDetailData[] = [],
      versionInfo: PlanVersionInfo = {}
    ): Promise<boolean> => {
      return withLoading(async () => {
        const context = {
          module: 'usePlanVersionSave',
          function: 'savePlanData',
          versionInfo,
        };

        try {
          logger.debug('Starting to save plan data', context, {
            dataLength: data.length,
          });

          if (!data.length) {
            logger.error('No data to save', context);
            return false;
          }

          if (!versionInfo.planType) {
            logger.error('Plan type is required', context);
            return false;
          }

          const versionCheckResult =
            await DatabaseService.checkPlanVersionExists(
              versionInfo.planVersion || '',
              versionInfo.planType
            );

          if (!versionCheckResult.success) {
            logger.error('Failed to check version existence', context, {
              error: versionCheckResult.error,
            });
            return false;
          }

          const username = account?.username || 'system';
          let planMasterId: number;

          if (
            versionCheckResult.data?.exists &&
            versionCheckResult.data?.data
          ) {
            const currentVersion = versionCheckResult.data.data;
            planMasterId = currentVersion.plan_master_id;
            const updateSuccess = await handleVersionUpdate({
              planMasterId,
              currentVersion,
              data,
              originalData,
              versionInfo,
              username,
            });
            if (!updateSuccess) return false;
          } else {
            try {
              // Use the mutation to create a new version
              planMasterId = await createVersionMutation.mutateAsync({
                data,
                versionInfo: {
                  ...versionInfo,
                  username,
                },
              });

              // Use provided originalData if available
              if (originalData && originalData.length > 0) {
                await processHistoryRecords(
                  data,
                  originalData,
                  planMasterId,
                  username
                );
              }
              // If no originalData is provided but parentId exists, fetch from backend as fallback
            } catch (error) {
              logger.error('Failed to create new version', context, {
                error: error instanceof Error ? error.message : 'Unknown error',
              });
              return false;
            }
          }

          try {
            await triggerPlanJob({
              planMasterId,
              planType: versionInfo.planType,
              contextModule: 'usePlanVersionSave',
            });
          } catch (error) {
            logger.error('Error in triggerPlanJob', context, {
              error: error instanceof Error ? error.message : 'Unknown error',
              stack: error instanceof Error ? error.stack : undefined,
            });
            // We don't return false here as the data has been saved successfully
          }

          return true;
        } catch (error) {
          logger.error('Error saving plan data', context, {
            error: error instanceof Error ? error.message : 'Unknown error',
            stack: error instanceof Error ? error.stack : undefined,
          });
          return false;
        }
      });
    },
    [
      account?.username,
      withLoading,
      createVersionMutation,
      updateVersionMutation,
      saveHistoryMutation,
    ]
  );

  return {
    savePlanData,
    isSaving,
  };
}

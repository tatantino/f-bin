/**
 * Hook for tank plan details page data management
 */
import { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useVersionInfo } from '../../_feature/plan-version/hooks';
import { usePlanSaveDialog } from '../../_shared/hooks/plan/usePlanSaveDialog';
import { queryOpts } from '../../_shared/services/query-opts';
import { useExport } from '../../_shared/hooks/useExport';
import { ltPlanExcelConfig } from '../../_shared/config/excel-config';
import { logger } from '@/lib/logger';
import useMyAccount from '@/hooks/use-my-account';
import { triggerPlanJob } from '../../_shared/hooks/plan/useDatabricksJob';
import {
  useUpdatePlanVersionMutation,
  useSaveHistoryRecordsMutation,
} from '../../_shared/services/mutations';
import type { TankPlanDetailData, PlanType } from '../../_shared/types';

export function usePlanPage({ planId }: { planId: string | null }) {
  // State management
  const [localData, setLocalData] = useState<TankPlanDetailData[]>([]);
  const [hasChanges, setHasChanges] = useState(false);
  const { account } = useMyAccount();
  const queryClient = useQueryClient();

  // Data fetching
  const {
    data: apiData = [],
    isLoading: isLoadingData,
    error: queryError,
    refetch: refreshData,
  } = useQuery({
    ...queryOpts.versionDetails(planId || undefined),
    queryKey: ['plan-details', planId],
  });

  // Version info
  const planIdNumber = planId ? Number(planId) : 0;
  const {
    version: versionInfo,
    isLoading: isLoadingVersion,
    refresh: loadVersionInfo,
  } = useVersionInfo(planIdNumber);

  // Current data (local edits or API data)
  const data = hasChanges ? localData : apiData;

  // Mutations
  const updateMutation = useUpdatePlanVersionMutation();
  const saveHistoryMutation = useSaveHistoryRecordsMutation();

  // Excel export
  const { handleExport, isExporting } = useExport(data, ltPlanExcelConfig);

  // Data operations
  function handleDataChange(newData: TankPlanDetailData[]) {
    setLocalData(newData);
    setHasChanges(true);
  }

  // Save operations
  async function updatePlanDetails(
    planData: TankPlanDetailData[]
  ): Promise<boolean> {
    if (!versionInfo?.plan_master_id) return false;

    try {
      const username = account?.username || versionInfo.user_name || 'system';
      const planMasterId = versionInfo.plan_master_id;

      // Update plan data
      await updateMutation.mutateAsync({
        masterId: planMasterId,
        data: planData,
        versionInfo,
        username,
      });

      // Save history records
      if (apiData.length > 0) {
        try {
          await saveHistoryMutation.mutateAsync({
            planMasterId,
            newData: planData,
            originalData: apiData as TankPlanDetailData[],
            username,
          });
        } catch (error) {
          logger.error('Failed to save history records', { error });
        }
      }

      // Trigger plan job
      try {
        await triggerPlanJob({
          planMasterId,
          planType: versionInfo.plan_type as PlanType,
          contextModule: 'usePlanPage',
        });
      } catch (error) {
        logger.error('Error in triggerPlanJob', { error });
      }

      return true;
    } catch {
      return false;
    }
  }

  // Validation & save dialog
  const {
    showValidateDialog,
    setShowValidateDialog,
    validationSteps,
    validationErrors,
    isValidating,
    isSaving,
    handleSave,
    handleConfirmSave,
  } = usePlanSaveDialog({
    onSave: async (planData: TankPlanDetailData[]) => {
      const success = await updatePlanDetails(planData);

      if (success) {
        setHasChanges(false);
        try {
          // Invalidate queries to refresh data
          await queryClient.invalidateQueries({
            queryKey: ['plan-details', planId],
          });
          await loadVersionInfo();
          window.dispatchEvent(new CustomEvent('refreshPlanList'));
        } catch (error) {
          logger.error('Failed to reload data after save', { error });
        }
      }

      return success;
    },
    onSaveError: () => {},
  });

  function handleSaveClick() {
    handleSave(data, apiData as TankPlanDetailData[]);
  }

  // Loading states
  const isLoading =
    isLoadingData ||
    isLoadingVersion ||
    isExporting ||
    isValidating ||
    isSaving ||
    updateMutation.isPending ||
    saveHistoryMutation.isPending;

  const loadingState = {
    isLoading,
    states: {
      isLoadingData: !!isLoadingData,
      isLoadingVersion: !!isLoadingVersion,
      isExporting: !!isExporting,
      isValidating: !!isValidating,
      isSaving: !!(
        isSaving ||
        updateMutation.isPending ||
        saveHistoryMutation.isPending
      ),
    },
  };

  return {
    // Data
    data,
    versionInfo,
    queryError,
    mutationError: updateMutation.error,
    hasChanges,
    loadingState,

    // Actions
    refreshData,
    handleExport,
    handleDataChange,
    handleSaveClick,
    handleConfirmSave,

    // Validation
    showValidateDialog,
    setShowValidateDialog,
    validationSteps,
    validationErrors,
    isValidating,
    isSaving,
  };
}

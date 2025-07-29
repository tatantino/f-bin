/**
 * Hook for weekly plan data management and operations
 */
import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import { useQuery } from '@tanstack/react-query';
import { ROUTES } from '@/app/config/routes';
import { useExport } from '../../_shared/hooks/useExport';
import { useLoadingState } from '../../_shared/hooks/useLoadingState';
import { usePlanSaveDialog } from '../../_shared/hooks/plan/usePlanSaveDialog';
import { usePlanVersionSave } from '../../_shared/hooks/plan/usePlanVersionSave';
import { useVersionInfo } from '../../_feature/plan-version/hooks';
import { ltPlanExcelConfig } from '../../_shared/config/excel-config';
import { logger } from '@/lib/logger';
import useMyAccount from '@/hooks/use-my-account';
import type { TankPlanDetailData, PlanVersion } from '../../_shared/types';
import { queryOpts } from '../../_shared/services/query-opts';

export function useWeeklyPlan(planId: string | null) {
  const router = useRouter();
  const { account } = useMyAccount();

  // ---- State Management ----
  const [hasChanges, setHasChanges] = useState(false);
  const [localData, setLocalData] = useState<TankPlanDetailData[]>([]);

  // ---- Data Fetching ----
  const {
    data: apiData = [],
    isLoading: isLoadingData,
    error: queryError,
  } = useQuery({
    ...queryOpts.versionDetails(planId || undefined),
    queryKey: ['weekly-plan-data', planId],
    enabled: !!planId,
  });

  // ---- Version Management ----
  const planIdNumber = planId ? Number(planId) : 0;
  const { version: versionInfo, isLoading: isLoadingVersion } =
    useVersionInfo(planIdNumber);

  // Initialize new version info based on parent version
  const [newVersionInfo, setNewVersionInfo] = useState<PlanVersion | null>(
    null
  );

  useEffect(() => {
    if (versionInfo) {
      setNewVersionInfo({
        ...versionInfo,
        plan_version: format(new Date(), 'yyyy-MM-dd'),
        user_name: account?.username || 'system',
        plan_type: 'Weekly',
        plan_official: '',
      });
    }
  }, [versionInfo, account]);

  // Initialize data when apiData changes and we don't have local changes
  useEffect(() => {
    if (apiData.length > 0 && !hasChanges) {
      setLocalData(apiData);
    }
  }, [apiData, hasChanges]);

  // Current data (local edits or API data)
  const data = hasChanges ? localData : apiData;

  // ---- Data Operations ----
  const handleDataChange = useCallback((newData: TankPlanDetailData[]) => {
    setLocalData(newData);
    setHasChanges(true);
  }, []);

  const handleVersionChange = useCallback((version: PlanVersion) => {
    logger.debug('Version info changed', {
      module: 'useWeeklyPlan',
      function: 'handleVersionChange',
      version,
    });
    setNewVersionInfo(version);
  }, []);

  // ---- Excel Export ----
  const { handleExport, isExporting } = useExport(data, ltPlanExcelConfig);

  // ---- Save Operations ----
  const { savePlanData, isSaving: isSavingVersion } = usePlanVersionSave();

  const handleSaveSuccess = useCallback(() => {
    router.push(ROUTES.VERSION_LIST);
    window.dispatchEvent(new CustomEvent('refreshPlanList'));
    setHasChanges(false);
  }, [router]);

  // Save dialog and validation
  const {
    showValidateDialog,
    setShowValidateDialog,
    showConfirmSave,
    setShowConfirmSave,
    validationSteps,
    validationErrors,
    isValidating,
    isSaving,
    handleSave,
    handleConfirmSave,
  } = usePlanSaveDialog({
    onSave: async data => {
      if (!versionInfo || !newVersionInfo) {
        throw new Error('Version information is not available');
      }

      logger.debug('Saving weekly plan', {
        module: 'useWeeklyPlan',
        versionInfo: {
          planVersion: newVersionInfo.plan_version,
          versionNo: newVersionInfo.plan_version_no,
          planOfficial: newVersionInfo.plan_official,
          parentId: planId,
          username: newVersionInfo.user_name,
        },
      });

      // Clean data to remove plan_detail_id values
      const cleanedData = data.map(({ plan_detail_id, ...rest }) => ({
        ...rest,
        plan_row_id: rest.plan_row_id,
      }));

      // Clean original data too to ensure consistency
      const cleanedOriginalData = apiData.map(
        ({ plan_detail_id, ...rest }) => ({
          ...rest,
          plan_row_id: rest.plan_row_id,
        })
      );

      return await savePlanData(cleanedData, cleanedOriginalData, {
        planType: 'Weekly',
        planVersion: newVersionInfo.plan_version,
        versionNo: newVersionInfo.plan_version_no,
        planOfficial: newVersionInfo.plan_official,
        parentId: planId,
        username: newVersionInfo.user_name,
      });
    },
    onSaveSuccess: handleSaveSuccess,
    onSaveError: error => {
      logger.error('Failed to save weekly plan', {
        module: 'useWeeklyPlan',
        error,
      });
    },
  });

  // Handle save button click
  const handleSaveClick = useCallback(() => {
    handleSave(data, apiData);
  }, [handleSave, data, apiData]);

  // ---- Loading State ----
  const loadingState = useLoadingState({
    isLoadingData,
    isLoadingVersion,
    isExporting,
    isValidating,
    isSaving: isSaving || isSavingVersion,
  });

  // ---- Return API ----
  return {
    // Data
    data,
    setData: handleDataChange,

    // Version info
    versionInfo,
    newVersionInfo,
    handleVersionChange,

    // Loading state
    loadingState,
    queryError,

    // Validation and save dialog
    showValidateDialog,
    setShowValidateDialog,
    showConfirmSave,
    setShowConfirmSave,
    validationSteps,
    validationErrors,

    // Actions
    handleSaveClick,
    handleConfirmSave,
    handleExport,

    // State
    hasChanges,
  };
}

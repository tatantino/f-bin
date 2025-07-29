'use client';

import { useRouter } from 'next/navigation';
import { useState, useCallback } from 'react';
import { format } from 'date-fns';
import { toast } from 'sonner';

import useMyAccount from '@/hooks/use-my-account';
import { ROUTES } from '@/app/config/routes';
import { ltPlanExcelConfig } from '../../_shared/config/excel-config';
import { useErrorState } from '../../_shared/hooks/useErrorState';
import { useExport } from '../../_shared/hooks/useExport';
import { useFileUpload } from '../../_shared/hooks/useFileUpload';
import { usePlanSaveDialog } from '../../_shared/hooks/plan/usePlanSaveDialog';
import { usePlanVersionSave } from '../../_shared/hooks/plan/usePlanVersionSave';
import { useLoadingState } from '../../_shared/hooks/useLoadingState';
import { logger } from '@/lib/logger';
import { sendSNSNotification } from '@/lib/notifications';
import type {
  PlanType,
  PlanVersion,
  TankPlanDetailData,
} from '../../_shared/types';

/**
 * Sends notification about plan updates
 */
async function sendPlanNotification(
  version: string,
  url: string
): Promise<void> {
  try {
    const subject = `Long Term Tank Plan [${version}] Notification`;

    await sendSNSNotification(
      {
        subject,
        message: `Long term tank plan version ${version} has been successfully uploaded.`,
        url,
      },
      'AWS_SNS_TOPIC_ARN_LONG_TERM_PLAN'
    );

    toast.success('Notification sent', {
      description: subject,
    });

    toast.success(
      `Long-term plan ${version} has been saved and stakeholders notified`
    );
  } catch (error) {
    toast.error('Notification failed', {
      description: error instanceof Error ? error.message : String(error),
    });

    logger.error('Failed to send notification for long-term plan', {
      module: 'LongTermPlan',
      error: error instanceof Error ? error.message : String(error),
    });
  }
}

export function useLongTermPlan() {
  const router = useRouter();
  const { account } = useMyAccount();

  // State management
  const { errors, setErrors, clearErrors } = useErrorState();
  const [showTable, setShowTable] = useState(false);
  const [data, setData] = useState<TankPlanDetailData[]>([]);

  // Version info state
  const [newVersionInfo, setNewVersionInfo] = useState<PlanVersion>(() => ({
    plan_master_id: undefined as any,
    plan_version: format(new Date(), 'yyyy-MM-dd'),
    plan_version_no: 1,
    plan_type: 'Long-term',
    plan_official: '',
    user_name: account?.username || 'system',
  }));

  // Excel export
  const { handleExport, isExporting } = useExport(data, ltPlanExcelConfig);

  // Save operations
  const { savePlanData, isSaving: isSavingVersion } = usePlanVersionSave();

  // File upload handler
  const { handleFileUpload, isLoading: isUploading } =
    useFileUpload<TankPlanDetailData>(ltPlanExcelConfig, {
      onSuccess: processedData => {
        if (processedData && processedData.length > 0) {
          setData(processedData);
          setShowTable(true);
        } else {
          setErrors(['No valid data found in the file']);
        }
      },
      onError: uploadErrors => {
        setErrors(uploadErrors);
        setShowTable(false);
      },
    });

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
    handleConfirmSave: confirmSave,
  } = usePlanSaveDialog({
    onSave: async planData => {
      const versionInfo = {
        planType: newVersionInfo.plan_type as PlanType,
        planVersion: newVersionInfo.plan_version,
        versionNo: newVersionInfo.plan_version_no,
        planOfficial: newVersionInfo.plan_official,
        username: newVersionInfo.user_name,
      };

      logger.debug('Saving long-term plan', {
        module: 'LongTermPlan',
        versionInfo,
      });

      // Remove plan_detail_id from data to avoid unique constraint errors
      const cleanedData = planData.map(({ plan_detail_id, ...rest }) => rest);

      return savePlanData(cleanedData, [], versionInfo);
    },
    onSaveSuccess: async () => {
      const planUrl = `${window.location.origin}${ROUTES.VERSION_LIST}`;
      await sendPlanNotification(newVersionInfo.plan_version, planUrl);

      router.push(ROUTES.VERSION_LIST);
      window.dispatchEvent(new CustomEvent('refreshPlanList'));
    },
    onSaveError: error => setErrors([String(error)]),
  });

  // Handle save button click
  const handleSaveClick = useCallback(() => {
    handleSave(data);
  }, [data, handleSave]);

  // Handle confirm save (wrapper to maintain API compatibility)
  const handleConfirmSave = useCallback(() => {
    confirmSave();
  }, [confirmSave]);

  // Loading state consolidation
  const loadingState = useLoadingState({
    isLoadingData: isUploading,
    isValidating,
    isSaving: isSaving || isSavingVersion,
    isExporting,
  });

  return {
    // Data
    data,
    errors,
    showTable,

    // UI state
    loadingState,
    validationSteps,
    validationErrors,
    showValidateDialog,
    showConfirmSave,
    isValidating,
    isSaving,
    isExporting,
    newVersionInfo,

    // State setters
    setNewVersionInfo,
    setData,
    clearErrors,
    setShowValidateDialog,
    setShowConfirmSave,
    setShowTable,

    // Actions
    handleSaveClick,
    handleExport,
    handleFileUpload,
    handleConfirmSave,
  };
}

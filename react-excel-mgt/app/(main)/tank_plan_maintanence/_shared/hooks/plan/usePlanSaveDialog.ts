import { useState, useCallback, useRef } from 'react';
import type { TankPlanDetailData } from '../../types';
import { usePlanValidation } from './usePlanValidation';
import type { ValidationStep } from '../../../_feature/plan-validation/types';
import type { PlanSaveDialogOptions } from './types';
import { logger } from '@/lib/logger';
import { toast } from 'sonner';

interface UsePlanSaveDialogResult {
  showValidateDialog: boolean;

  setShowValidateDialog: (show: boolean) => void;

  showConfirmSave: boolean;

  setShowConfirmSave: (show: boolean) => void;

  validationSteps: ValidationStep[];

  validationErrors: string[];

  isValidating: boolean;

  isSaving: boolean;

  handleSave: (
    data: TankPlanDetailData[],
    originalData?: TankPlanDetailData[]
  ) => Promise<void>;

  handleConfirmSave: () => Promise<void>;
}

export function usePlanSaveDialog({
  onSave,
  onSaveSuccess,
  onSaveError,
}: PlanSaveDialogOptions): UsePlanSaveDialogResult {
  const [showValidateDialog, setShowValidateDialog] = useState(false);
  const [showConfirmSave, setShowConfirmSave] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const currentDataRef = useRef<TankPlanDetailData[]>([]);

  const {
    steps: validationSteps,
    errors: validationErrors,
    isValidating,
    validateData,
    updateStepStatus,
    resetValidation,
  } = usePlanValidation();

  const handleSave = useCallback(
    async (data: TankPlanDetailData[], originalData?: TankPlanDetailData[]) => {
      const context = {
        module: 'usePlanSaveDialog',
        function: 'handleSave',
      };

      try {
        logger.debug('Starting validation', context, {
          dataLength: data.length,
        });

        currentDataRef.current = data;
        setShowValidateDialog(true);
        resetValidation();

        const errors = await validateData(data, originalData);
        if (errors.length > 0) {
          logger.debug('Validation failed', context, {
            errorCount: errors.length,
          });
          return;
        }

        logger.debug('Validation passed', context);
        setShowConfirmSave(true);
      } catch (error) {
        logger.error('Validation error', context, { error });
        toast.error('Failed to validate data');
      }
    },
    [validateData, resetValidation]
  );

  const handleConfirmSave = useCallback(async () => {
    const context = {
      module: 'usePlanSaveDialog',
      function: 'handleConfirmSave',
    };

    try {
      setIsSaving(true);
      updateStepStatus('save', 'processing');

      const data = currentDataRef.current;
      logger.debug('Starting save operation', context, {
        dataLength: data.length,
      });

      const success = await onSave(data);

      logger.debug('Save operation result', context, {
        success,
      });

      if (success) {
        logger.debug('Save operation successful', context);
        updateStepStatus('save', 'success');
        toast.success('Changes saved successfully');
        onSaveSuccess?.();
        setShowValidateDialog(false);
        setShowConfirmSave(false);
      } else {
        const errorMessage = 'Failed to save changes';
        logger.error('Save operation failed', context);
        updateStepStatus('save', 'error', errorMessage);
        onSaveError?.(errorMessage);
        toast.error(errorMessage);
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Failed to save plan data';
      logger.error('Save operation error', context, { error });
      updateStepStatus('save', 'error', errorMessage);
      onSaveError?.(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsSaving(false);
    }
  }, [onSave, updateStepStatus, onSaveSuccess, onSaveError]);

  return {
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
  } as const;
}

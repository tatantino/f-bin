import { useState, useCallback } from 'react';
import { toast } from 'sonner';
import { logger } from '@/lib/logger';
import { useDataValidation } from '../../_feature/plan-validation/useDataValidation';
import type { ValidationStep } from '../../_feature/plan-validation/types';

export interface SaveConfig<T> {
  module: string;

  validationSteps: ValidationStep[];

  validateFormat?: (data: T[]) => Promise<string[]>;

  validateRequired?: (data: T[]) => Promise<string[]>;

  validateBusiness?: (data: T[]) => Promise<string[]>;

  saveData: (data: T[]) => Promise<{ success: boolean; error?: string }>;

  onSaveSuccess?: () => void;

  onSaveError?: (error: string) => void;
}

export function useDataSave<T>({
  module,
  validationSteps,
  validateFormat,
  validateRequired,
  validateBusiness,
  saveData,
  onSaveSuccess,
  onSaveError,
}: SaveConfig<T>) {
  const [showValidateDialog, setShowValidateDialog] = useState(false);
  const [showConfirmSave, setShowConfirmSave] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const {
    steps,
    errors: validationErrors,
    isValidating,
    validateData,
    updateStepStatus,
    resetValidation,
  } = useDataValidation<T>({
    module,
    steps: validationSteps,
    validateFormat,
    validateRequired,
    validateBusiness,
  });

  const createContext = (action: string) => ({
    module,
    function: action,
  });

  const handleSaveClick = useCallback(
    async (data: T[]) => {
      const context = createContext('handleSaveClick');

      try {
        logger.debug('Save clicked', context);
        setShowValidateDialog(true);
        resetValidation();

        const errors = await validateData(data);
        if (errors.length > 0) {
          return;
        }

        setShowConfirmSave(true);
      } catch (error) {
        logger.error('Save preparation failed', context, { error });
        toast.error('Failed to prepare save operation');
      }
    },
    [validateData, resetValidation]
  );

  const handleConfirmSave = useCallback(
    async (data: T[]) => {
      const context = createContext('handleConfirmSave');

      try {
        setIsSaving(true);
        updateStepStatus('save', 'processing');

        const result = await saveData(data);

        if (result.success) {
          updateStepStatus('save', 'success');
          toast.success('Changes saved successfully');
          onSaveSuccess?.();
        } else {
          const errorMessage = result.error || 'Failed to save changes';
          updateStepStatus('save', 'error', errorMessage);
          onSaveError?.(errorMessage);
          toast.error(errorMessage);
        }
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : 'Failed to save changes';
        logger.error('Save failed', context, { error });
        updateStepStatus('save', 'error', errorMessage);
        onSaveError?.(errorMessage);
        toast.error(errorMessage);
      } finally {
        setIsSaving(false);
        setShowValidateDialog(false);
        setShowConfirmSave(false);
      }
    },
    [saveData, updateStepStatus, onSaveSuccess, onSaveError]
  );

  return {
    showValidateDialog,
    setShowValidateDialog,
    showConfirmSave,
    setShowConfirmSave,
    validationSteps: steps,
    validationErrors,
    isValidating,
    isSaving,
    handleSaveClick,
    handleConfirmSave,
  } as const;
}

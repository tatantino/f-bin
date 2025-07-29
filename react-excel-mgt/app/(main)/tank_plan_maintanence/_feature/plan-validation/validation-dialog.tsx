'use client';

import { useEffect, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { logger } from '@/lib/logger';
import type { ValidationStep } from './types';
import { ValidationSteps } from './components/validation-steps';
import { ValidationErrors } from './components/validation-errors';
import { ValidationSuccess } from './components/validation-success';
import { SavingStatus } from './components/saving-status';

export interface ValidationDialogProps {
  open: boolean;

  onOpenChange: (open: boolean) => void;

  isValidating: boolean;

  isSaving: boolean;

  errors?: string[];

  validationSteps: ValidationStep[];

  onConfirmSave?: () => void;

  className?: string;
}

export function ValidationDialog({
  open,
  onOpenChange,
  validationSteps = [],
  errors = [],
  isValidating,
  isSaving,
  onConfirmSave,
  className,
}: ValidationDialogProps) {
  const steps = useMemo(() => {
    if (!Array.isArray(validationSteps)) {
      logger.error('ValidationDialog: steps is not an array', {
        module: 'ValidationDialog',
        steps: validationSteps,
      });
      return [];
    }
    return validationSteps;
  }, [validationSteps]);

  const saveStep = useMemo(() => steps.find(s => s.id === 'save'), [steps]);

  useEffect(() => {
    if (open) {
      logger.debug('ValidationDialog opened', {
        module: 'ValidationDialog',
        stepsCount: steps.length,
        errorsCount: errors.length,
        isValidating,
        isSaving,
      });
    }
  }, [open, steps.length, errors.length, isValidating, isSaving]);

  useEffect(() => {
    if (!saveStep && !isValidating && errors.length === 0) {
      logger.warn('ValidationDialog: Save step not found', {
        module: 'ValidationDialog',
        steps: steps.map(s => s.id),
      });
    }
  }, [saveStep, isValidating, errors.length, steps]);

  const handleConfirmSave = async () => {
    try {
      logger.debug('Confirming save operation', {
        module: 'ValidationDialog',
      });
      await onConfirmSave?.();
    } catch (error) {
      logger.error('Failed to save changes', {
        module: 'ValidationDialog',
        error,
      });
    }
  };

  const showErrors = errors.length > 0;
  const showSuccess = !isValidating && !showErrors && saveStep;
  const showSaving = isSaving;
  const showSaveButton = !isValidating && !showErrors && !isSaving;

  if (!open) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={cn('sm:max-w-[500px]', className)}>
        <DialogHeader>
          <DialogTitle>Validation</DialogTitle>
          <DialogDescription>
            Please wait while we validate your changes
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <ValidationSteps
            steps={steps}
            isValidating={isValidating}
            className="min-h-[200px]"
          />

          {showErrors && <ValidationErrors errors={errors} className="mt-6" />}
          {showSuccess && (
            <ValidationSuccess step={saveStep} className="mt-6" />
          )}
          {showSaving && <SavingStatus className="mt-6" />}
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={isSaving}
          >
            Cancel
          </Button>
          {showSaveButton && (
            <Button onClick={handleConfirmSave}>Save Changes</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

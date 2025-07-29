import { useState, useCallback, useRef, useMemo } from 'react';
import { logger } from '@/lib/logger';
import {
  ValidationConfig,
  ValidationError,
  ValidationStepId,
  ValidationState,
  ValidationStatus,
} from './types';
import {
  withMinDuration,
  createValidationContext,
  createValidationResult,
  getErrorMessage,
} from './utils';

export function useDataValidation<T>({
  module,
  steps: initialSteps,
  validateFormat,
  validateRequired,
  validateBusiness,
}: ValidationConfig<T>) {
  const [state, setState] = useState<ValidationState>({
    steps: initialSteps,
    errors: [],
    isValidating: false,
  });

  const validationFns = useRef({
    validateFormat,
    validateRequired,
    validateBusiness,
  });

  const updateStepStatus = useCallback(
    (stepId: ValidationStepId, status: ValidationStatus, message?: string) => {
      setState(prev => ({
        ...prev,
        steps: prev.steps.map(step =>
          step.id === stepId
            ? { ...step, status, message: message || step.message }
            : step
        ),
      }));
    },
    []
  );

  const executeValidationStep = useCallback(
    async (
      stepId: ValidationStepId,
      validationFn?: (data: T[]) => Promise<ValidationError[]>,
      data?: T[]
    ): Promise<ValidationError[]> => {
      if (!validationFn || !data) return [];

      try {
        updateStepStatus(stepId, 'processing');
        const errors = await withMinDuration(validationFn(data));
        updateStepStatus(stepId, errors.length ? 'error' : 'success');
        return errors;
      } catch (error) {
        const message = getErrorMessage(error);
        updateStepStatus(stepId, 'error', message);
        return [message];
      }
    },
    [updateStepStatus]
  );

  const validateData = useCallback(
    async (data: T[], originalData?: T[]): Promise<ValidationError[]> => {
      const context = createValidationContext(module, 'validateData');
      const allErrors: ValidationError[] = [];

      try {
        setState(prev => ({ ...prev, isValidating: true, errors: [] }));

        const steps = [
          { id: 'format' as const, fn: validationFns.current.validateFormat },
          {
            id: 'required' as const,
            fn: validationFns.current.validateRequired,
          },
          {
            id: 'business' as const,
            fn: async (data: T[]) =>
              validationFns.current.validateBusiness?.(data, originalData) ||
              [],
          },
        ];

        for (const { id, fn } of steps) {
          const errors = await executeValidationStep(id, fn, data);
          allErrors.push(...errors);
        }

        logger.debug('Validation completed', context, {
          result: createValidationResult(allErrors),
        });

        setState(prev => ({ ...prev, errors: allErrors }));
        return allErrors;
      } catch (error) {
        const message = getErrorMessage(error);
        logger.error('Validation failed', context, { error });
        setState(prev => ({ ...prev, errors: [message] }));
        return [message];
      } finally {
        setState(prev => ({ ...prev, isValidating: false }));
      }
    },
    [executeValidationStep, module]
  );

  const resetValidation = useCallback(() => {
    setState({
      steps: initialSteps,
      errors: [],
      isValidating: false,
    });
  }, [initialSteps]);

  return useMemo(
    () => ({
      steps: state.steps,
      errors: state.errors,
      isValidating: state.isValidating,
      validateData,
      updateStepStatus,
      resetValidation,
    }),
    [
      state.steps,
      state.errors,
      state.isValidating,
      validateData,
      updateStepStatus,
      resetValidation,
    ]
  );
}

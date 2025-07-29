import { useState, useCallback, useEffect } from 'react';
import { useBaseState } from './useBaseState';

interface UseErrorStateOptions {
  onError?: (error: string) => void;
  onClear?: () => void;
  maxErrors?: number;
  autoHideDuration?: number;
}

export function useErrorState(options?: UseErrorStateOptions) {
  const [errors, setErrors] = useState<string[]>([]);
  const maxErrors = options?.maxErrors ?? 100;

  const { withLoading } = useBaseState({
    context: { module: 'useErrorState', function: 'handleError' },
  });

  const addError = useCallback(
    (error: unknown, context?: Record<string, unknown>) => {
      return withLoading(async () => {
        const errorMessage =
          error instanceof Error ? error.message : 'An error occurred';

        setErrors(prev => {
          const newErrors = [...prev, errorMessage].slice(-maxErrors);
          options?.onError?.(errorMessage);
          return newErrors;
        });
      });
    },
    [maxErrors, options?.onError, withLoading]
  );

  const addErrors = useCallback(
    (newErrors: string[]) => {
      if (!newErrors.length) return;

      setErrors(prev => {
        const combinedErrors = [...prev, ...newErrors].slice(-maxErrors);
        newErrors.forEach(error => options?.onError?.(error));
        return combinedErrors;
      });
    },
    [maxErrors, options?.onError]
  );

  const clearErrors = useCallback(() => {
    if (errors.length > 0) {
      setErrors([]);
      options?.onClear?.();
    }
  }, [errors.length, options?.onClear]);

  const removeError = useCallback((index: number) => {
    setErrors(prev => {
      if (index < 0 || index >= prev.length) return prev;
      return [...prev.slice(0, index), ...prev.slice(index + 1)];
    });
  }, []);

  useEffect(() => {
    if (options?.autoHideDuration && errors.length > 0) {
      const timer = setTimeout(() => {
        clearErrors();
      }, options.autoHideDuration);

      return () => clearTimeout(timer);
    }
  }, [errors.length, options?.autoHideDuration, clearErrors]);

  return {
    errors,
    setErrors,
    addError,
    addErrors,
    clearErrors,
    removeError,
    hasErrors: errors.length > 0,
    errorCount: errors.length,
  } as const;
}

import { useState, useCallback } from 'react';
import { logger } from '@/lib/logger';

interface BaseStateOptions<T = unknown> {
  context: {
    module: string;
    function: string;
  };
  onSuccess?: (data: T) => void;
  onError?: (error: Error | string) => void;
  onLoadStart?: () => void;
  onLoadEnd?: () => void;
}

export function useBaseState<T>(options: BaseStateOptions<T>) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleError = useCallback(
    (error: unknown) => {
      const message = error instanceof Error ? error.message : 'Unknown error';
      setError(message);
      options?.onError?.(message);
      return message;
    },
    [options]
  );

  const withLoading = useCallback(
    async <R>(
      action: () => Promise<R>,
      context?: Record<string, unknown>
    ): Promise<R> => {
      try {
        setIsLoading(true);
        options?.onLoadStart?.();
        logger.group('Starting operation', { ...options.context, ...context });

        const result = await action();

        if (typeof result === 'object' && result !== null) {
          options?.onSuccess?.(result as T);
        }

        return result;
      } catch (error) {
        handleError(error);
        throw error;
      } finally {
        setIsLoading(false);
        options?.onLoadEnd?.();
        logger.groupEnd();
      }
    },
    [handleError, options]
  );

  return {
    isLoading,
    error,
    setError,
    handleError,
    withLoading,
    clearError: () => setError(null),
  } as const;
}

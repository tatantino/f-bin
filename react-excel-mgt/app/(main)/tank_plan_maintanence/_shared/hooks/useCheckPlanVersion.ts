import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { queryOpts } from '../services';
import type { PlanType } from '../types';

interface UseCheckPlanVersionOptions {
  enabled?: boolean;
  onError?: (error: Error) => void;
}

/**
 * Hook to check if a plan version exists
 * @param planVersion Version string to check
 * @param planType Type of plan to check
 * @param options Additional options
 * @returns Query result with exists flag and optional version data
 */
export function useCheckPlanVersion(
  planVersion: string,
  planType: PlanType,
  options: UseCheckPlanVersionOptions = {}
) {
  const { enabled = true, onError } = options;

  const { data, isLoading, isError, error } = useQuery({
    ...queryOpts.versionExists(planVersion, planType),
    enabled: enabled && !!planVersion && !!planType,
  });

  // Handle error callback
  useEffect(() => {
    if (isError && error && onError) {
      onError(error instanceof Error ? error : new Error(String(error)));
    }
  }, [isError, error, onError]);

  return {
    exists: data?.exists || false,
    versionData: data?.data,
    isLoading,
    isError,
    error,
  };
}

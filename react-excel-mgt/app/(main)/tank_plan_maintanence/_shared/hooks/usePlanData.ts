import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import type { TankPlanDetailData } from '../types';
import { queryOpts } from '../services/query-opts';
import { logger } from '@/lib/logger';

interface UsePlanDataOptions {
  onError?: (error: Error) => void;
}

export function usePlanData(
  id?: string | number,
  options?: UsePlanDataOptions
) {
  const query = queryOpts.versionDetails(id);

  const {
    data = [] as TankPlanDetailData[],
    isLoading,
    isError,
    error,
  } = useQuery({
    ...query,
  });

  // Handle error callback
  useEffect(() => {
    if (isError && error && options?.onError) {
      options.onError(
        error instanceof Error ? error : new Error(String(error))
      );
    }
  }, [isError, error, options]);

  // 完全禁用调试日志，避免频繁渲染
  // logger.debug 调用会导致React组件的重新渲染

  const loadPlanData = async () => {
    // This is a convenience method to maintain API compatibility
    // It will trigger a refetch with the new ID by changing the component's id prop
    return data;
  };

  const clearData = () => {
    // No need to implement this as data will be cleared when the component unmounts
    // or when the query is invalidated
  };

  return {
    data,
    // 空函数，不输出任何警告
    setData: () => {},
    isLoading,
    loadPlanData,
    clearData,
  } as const;
}

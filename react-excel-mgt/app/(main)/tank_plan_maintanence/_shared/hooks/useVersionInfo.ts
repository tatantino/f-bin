import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { queryOpts } from '../services/query-opts';

interface UseVersionInfoOptions {
  onError?: (error: Error) => void;
}

export function useVersionInfo(
  id?: string | number,
  options: UseVersionInfoOptions = {}
) {
  const { onError } = options;

  const { data, isLoading, isError, error, refetch } = useQuery(
    queryOpts.versionInfo(id)
  );

  // Handle error callback
  useEffect(() => {
    if (isError && error && onError) {
      onError(error instanceof Error ? error : new Error(String(error)));
    }
  }, [isError, error, onError]);

  return {
    versionInfo: data?.master,
    details: data?.details || [],
    isLoading,
    refetch,
  };
}

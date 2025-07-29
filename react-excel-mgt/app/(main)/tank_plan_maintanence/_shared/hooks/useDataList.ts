import { useState, useEffect } from 'react';
import { useBaseState } from './useBaseState';
import { useToast } from '@/hooks/use-toast';

interface UseDataListProps<T> {
  loadData: () => Promise<{
    success: boolean;
    data?: T[];
    error?: string;
  }>;
  context: {
    module: string;
    function: string;
  };
  refreshTrigger?: boolean;
  filterFn?: (item: T, searchTerm: string) => boolean;
}

export interface UseDataListReturn<T> {
  data: T[];
  loading: boolean;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  refresh: () => Promise<void>;
}

export function useDataList<T>({
  loadData,
  context,
  refreshTrigger,
  filterFn,
}: UseDataListProps<T>): UseDataListReturn<T> {
  const [data, setData] = useState<T[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();
  const { isLoading, withLoading } = useBaseState({
    context,
    onError: (error: string | Error) => {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error instanceof Error ? error.message : error,
      });
    },
  });

  const handleLoad = async () => {
    await withLoading(async () => {
      const result = await loadData();

      if (!result.success || !result.data) {
        throw new Error(result.error || 'Failed to load data');
      }

      setData(result.data);
    });
  };

  useEffect(() => {
    handleLoad();
  }, []);

  useEffect(() => {
    if (refreshTrigger) {
      handleLoad();
    }
  }, [refreshTrigger]);

  const filteredData = filterFn
    ? data.filter(item => filterFn(item, searchTerm))
    : data;

  return {
    data: filteredData,
    loading: isLoading,
    searchTerm,
    setSearchTerm,
    refresh: handleLoad,
  };
}

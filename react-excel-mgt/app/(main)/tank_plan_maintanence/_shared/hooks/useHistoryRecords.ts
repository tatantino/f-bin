import { useQuery } from '@tanstack/react-query';
import { queryOpts, HistoryQueryParams } from '../services/query-opts';

export function useHistoryRecords(params: HistoryQueryParams = {}) {
  const {
    data = [],
    isLoading,
    error,
    refetch,
  } = useQuery(queryOpts.historyRecords(params));

  return {
    historyRecords: data,
    isLoading,
    error,
    refetch,
  };
}

import { useQueries } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { queryOpts } from '../services/query-opts';

/**
 * Hook for data fetching in demand change proposal page
 *
 * Uses React Query's useQueries for efficient parallel data fetching
 * Extracts masterId from search params automatically
 * Must be used within a Suspense boundary
 */
export function usePlanningData() {
  // This hook must be used within a Suspense boundary
  const searchParams = useSearchParams();
  const masterId = searchParams.get('dmd_change_master_id') || '';

  const results = useQueries({
    queries: [
      {
        ...queryOpts.demandChangeData(masterId),
        enabled: !!masterId,
      },
      queryOpts.genGroupIsopipeMappings,
    ],
  });

  const [demandChangeResult, genGroupMappingsResult] = results;

  return {
    loading: results.some(result => result.isLoading),
    error: results.some(result => result.isError)
      ? { message: 'Failed to fetch data' }
      : null,
    masterId: masterId || null,
    demandChangeData: demandChangeResult.data || null,
    genGroupIsopipeMappings: Array.isArray(genGroupMappingsResult.data)
      ? genGroupMappingsResult.data
      : [],
  };
}

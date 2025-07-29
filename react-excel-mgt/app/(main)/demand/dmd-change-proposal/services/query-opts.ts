/**
 * Query options for demand change proposal
 */
import { ENDPOINTS } from '../config/endpoints';

// Helper for consistent fetch handling
const fetchData = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
};

/**
 * Query options for React Query hooks
 */
export const queryOpts = {
  /**
   * Options for fetching demand change data
   */
  demandChangeData: (masterId: string) => ({
    queryKey: ['demand-change-data', masterId],
    queryFn: () => fetchData(ENDPOINTS.DEMAND_CHANGE(masterId)),
  }),

  /**
   * Options for fetching gen group isopipe mappings
   */
  genGroupIsopipeMappings: {
    queryKey: ['gen-group-isopipe-mappings'],
    queryFn: async () => {
      const data = await fetchData(ENDPOINTS.GEN_GROUP_ISOPIPE_MAPPINGS);
      return Array.isArray(data) ? data : [];
    },
  },
} as const;

import { ENDPOINTS } from '../config';
import type { DmdChangeMaster, DmdChangeDetail } from '../types/api';

// API返回的组合数据类型
interface DmdChangeData {
  master: DmdChangeMaster;
  details: DmdChangeDetail[];
}

export const queryOpts = {
  genGroups: {
    queryKey: ['gen-groups'],
    queryFn: async () => {
      const response = await fetch(ENDPOINTS.DEMANDS.COMPOSITION.GEN_GROUPS);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch gen groups');
      }
      return response.json();
    },
    staleTime: 1000 * 60 * 60, // 1 hour
    gcTime: 1000 * 60 * 60, // 1 hour
  },

  compositionGroups: {
    queryKey: ['composition-groups'],
    queryFn: async () => {
      const response = await fetch(
        ENDPOINTS.DEMANDS.COMPOSITION.COMPOSITION_GROUPS
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || 'Failed to fetch composition groups'
        );
      }
      return response.json();
    },
    staleTime: 1000 * 60 * 60, // 1 hour
    gcTime: 1000 * 60 * 60 * 24, // 1 hour
  },

  dmdChangeDetails: (id?: string | null) => ({
    queryKey: ['dmd-change-details', id],
    queryFn: async () => {
      if (!id) throw new Error('No ID provided');
      const response = await fetch(ENDPOINTS.DEMANDS.CHANGES.VERSION(id));

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || 'Failed to fetch demand change details'
        );
      }

      return response.json() as Promise<DmdChangeData>;
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 60, // 1 hour
  }),
} as const;

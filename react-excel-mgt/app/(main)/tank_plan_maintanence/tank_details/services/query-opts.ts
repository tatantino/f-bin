import { ENDPOINTS } from './endpoints';
import type { TankInfo } from '../types/tank';

export const queryOpts = {
  tanks: () => ({
    queryKey: ['tanks'],
    queryFn: async () => {
      const response = await fetch(ENDPOINTS.TANKS.LIST);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch tanks');
      }

      return response.json();
    },
  }),

  saveTanks: (tanks: TankInfo[]) => ({
    mutationFn: async () => {
      const response = await fetch(ENDPOINTS.TANKS.LIST, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tanks),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to save tanks');
      }
      return response.json();
    },
  }),
} as const;

/**
 * API mutations
 * Handles all mutation operations for list functionality
 */
'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { ENDPOINTS } from './endpoints';

/**
 * Delete version mutation hook
 */
export function useDeleteVersionMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(ENDPOINTS.DEMANDS.CHANGES.VERSION(id), {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to delete version');
      }

      return true;
    },
    onSuccess: () => {
      toast.success('Version deleted successfully');
      queryClient.invalidateQueries({ queryKey: ['dmd-versions'] });
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to delete version');
    },
  });
}

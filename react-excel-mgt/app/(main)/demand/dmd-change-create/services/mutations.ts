/**
 * API mutations
 * Handles all mutation operations for create functionality
 */
'use client';

import { ROUTES } from '@/app/config/routes';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import type {
  DmdChangeDetail,
  DmdChangeMaster,
  DmdChangeReq,
} from '../types/api';
import { createMasterData, transformData } from '../utils/data-transform';
import { ENDPOINTS } from '../config/endpoints';

// Save params type
export interface SaveDmdChangeParams {
  data: DmdChangeDetail[];
  versionInfo: DmdChangeMaster | null;
  remark: string;
  username: string;
}

/**
 * Hook for creating a demand change using React Query
 */
export function useCreateDmdChangeMutation() {
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, SaveDmdChangeParams>({
    mutationFn: async (params: SaveDmdChangeParams) => {
      const { data, versionInfo, remark, username } = params;

      // Validate version selection
      if (!versionInfo?.dmd_sp_gb_name) {
        throw new Error('Please select a version first');
      }

      // Prepare data for API submission
      const dateColumns = versionInfo.date_YYYYQQs || [];

      // Transform data for API submission
      const transformedDetails = transformData(data, dateColumns);
      if (transformedDetails.length === 0) {
        throw new Error('No valid data to save');
      }

      // Create API payload with master data and details
      const payload: DmdChangeReq = {
        master: createMasterData(versionInfo, username, remark),
        details: transformedDetails,
      };

      // Submit to API
      const response = await fetch(ENDPOINTS.DEMANDS.CHANGES.VERSIONS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create demand change');
      }

      // Return true to indicate success
      return true;
    },
    onSuccess: () => {
      // Show success toast and invalidate queries
      toast.success('Demand change created successfully');
      queryClient.invalidateQueries({ queryKey: ['dmd-changes'] });

      // Redirect to list page after successful save
      toast.loading('Redirecting to list page...');
      setTimeout(() => {
        window.location.href = ROUTES.DMD_CHANGE_LIST;
      }, 1000);
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to create demand change');
    },
  });
}

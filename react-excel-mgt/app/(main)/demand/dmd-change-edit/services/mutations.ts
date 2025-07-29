/**
 * API mutations
 * Handles all mutation operations for edit functionality
 */
'use client';

import { transformData, createMasterData } from '../utils/data-transform';
import type {
  DmdChangeMaster,
  DmdChangeDetail,
  DmdChangeReq,
} from '../types/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { ENDPOINTS } from '../config';

// Interface for save operation parameters
export interface SaveDmdChangeParams {
  data: DmdChangeDetail[];
  versionInfo: DmdChangeMaster;
  masterId: string;
  remark: string;
  username: string;
}

/**
 * Custom hook for updating demand changes
 */
export function useUpdateDmdChangeMutation() {
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, SaveDmdChangeParams>({
    mutationFn: async (params: SaveDmdChangeParams) => {
      const { data, versionInfo, masterId, remark, username } = params;

      // Transform and validate data
      const dateColumns = versionInfo.date_YYYYQQs || [];
      const transformedDetails = transformData(data, masterId, dateColumns);

      if (transformedDetails.length === 0) {
        throw new Error('No valid data to save');
      }

      // Create the payload
      const payload: DmdChangeReq = {
        master: createMasterData(masterId, versionInfo, username, remark),
        details: transformedDetails,
      };

      // Execute API call
      const endpoint = ENDPOINTS.DEMANDS.CHANGES.VERSION(masterId);
      const response = await fetch(endpoint, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update demand change');
      }

      // Return true to indicate success
      return true;
    },
    onSuccess: (_, variables) => {
      // Show success toast
      toast.success('Demand change updated successfully');

      // Invalidate relevant queries
      queryClient.invalidateQueries({
        queryKey: ['dmd-changes'],
      });

      // Invalidate specific detail query for this master ID
      queryClient.invalidateQueries({
        queryKey: ['dmd-change-details', variables.masterId],
      });
    },
    onError: (error: Error) => {
      // Show error toast
      toast.error(error.message || 'Failed to update demand change');
    },
  });
}

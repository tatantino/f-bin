import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import type { TankInfo } from '../types/tank';
import { queryOpts } from '../services/query-opts';

export function useTankQueryData() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [hasChanges, setHasChanges] = useState(false);

  // Fetch tanks data
  const { data: tanks = [], isLoading, refetch } = useQuery(queryOpts.tanks());

  // Create a mutation for saving tanks
  const saveMutation = useMutation({
    ...queryOpts.saveTanks(tanks),
    onSuccess: data => {
      toast({
        title: 'Save Success',
        description: `${data?.affectedRows || 0} rows affected`,
      });
      queryClient.invalidateQueries({ queryKey: ['tanks'] });
      setHasChanges(false);
    },
    onError: error => {
      toast({
        variant: 'destructive',
        title: 'Save Error',
        description:
          error instanceof Error ? error.message : 'Failed to save changes',
      });
    },
  });

  // Update local data
  const updateData = (newData: TankInfo[]) => {
    queryClient.setQueryData(['tanks'], newData);
    setHasChanges(true);
  };

  // Reset data to original state
  const resetData = () => {
    refetch();
    setHasChanges(false);
  };

  // Save changes
  const saveChanges = async () => {
    if (!hasChanges) return true;

    try {
      await saveMutation.mutateAsync();
      return true;
    } catch {
      return false;
    }
  };

  return {
    data: tanks,
    isLoading,
    hasChanges,
    updateData,
    resetData,
    saveChanges,
    refresh: refetch,
  };
}

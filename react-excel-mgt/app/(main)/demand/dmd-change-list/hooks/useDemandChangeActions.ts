import { useRouter } from 'next/navigation';
import { ROUTES } from '@/app/config/routes';
import type { DmdVersion } from '@/types/dmd-version';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { QUERY_KEY, DMD_CHANGES_API } from '../config';

export function useDemandChangeActions() {
  const router = useRouter();
  const queryClient = useQueryClient();

  // Mutation for deleting demand changes
  const { mutateAsync: deleteDmdChange, isPending: isDeleting } = useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(`${DMD_CHANGES_API}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete demand change');
      return true;
    },
    onSuccess: () => {
      toast.success('Demand change deleted successfully');
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
    },
    onError: () => toast.error('Failed to delete demand change'),
  });

  // Navigation handlers for edit and proposal actions
  const editDmdChange = (dmdChange: DmdVersion) => {
    if (!dmdChange.dmd_change_master_id) return;
    router.push(
      `${ROUTES.DMD_CHANGE_EDIT}?dmd_change_master_id=${dmdChange.dmd_change_master_id}`
    );
  };

  const viewDmdChangeProposal = (dmdChange: DmdVersion) => {
    if (!dmdChange.dmd_change_master_id) return;
    router.push(
      `${ROUTES.DMD_CHANGE_PROPOSAL}?dmd_change_master_id=${dmdChange.dmd_change_master_id}`
    );
  };

  return {
    editDmdChange,
    viewDmdChangeProposal,
    deleteDmdChange,
    isDeleting,
  };
}

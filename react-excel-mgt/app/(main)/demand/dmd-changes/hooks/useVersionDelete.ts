import { useCallback, useState } from 'react';
import type { DmdVersion } from '../types';
import { useDeleteVersionMutation } from '../services';

export function useVersionDelete() {
  const [versionToDelete, setVersionToDelete] = useState<DmdVersion | null>(
    null
  );
  const { mutateAsync: deleteVersion, isPending: isDeleting } =
    useDeleteVersionMutation();

  const handleDeleteVersion = useCallback(
    async (onSuccess?: () => void) => {
      if (!versionToDelete?.dmd_change_master_id) return;

      try {
        await deleteVersion(versionToDelete.dmd_change_master_id);
        setVersionToDelete(null);
        onSuccess?.();
      } catch (error) {
        // 错误处理已在mutation中完成
        console.error('Version delete error:', error);
      }
    },
    [versionToDelete, deleteVersion]
  );

  return {
    versionToDelete,
    setVersionToDelete,
    handleDeleteVersion,
    isDeleting,
  };
}

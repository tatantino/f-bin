import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { ROUTES } from '@/app/config/routes';
import type { DmdVersion } from '../../../tank_plan_maintanence/_shared/types';

export function useVersionEdit() {
  const router = useRouter();

  const handleEditVersion = useCallback(
    (version: DmdVersion) => {
      if (!version.dmd_change_master_id) {
        console.error('Invalid DMD Change Master ID');
        return;
      }
      router.push(
        `${ROUTES.DMD_CHANGE_EDIT}?dmd_change_master_id=${version.dmd_change_master_id}`
      );
    },
    [router]
  );

  return {
    handleEditVersion,
  };
}

import { useCallback, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import type { TankInfo } from '../types/tank';

export function useTankSave() {
  const { toast } = useToast();
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = useCallback(
    async (data: TankInfo[], saveChanges: () => Promise<boolean>) => {
      if (!data.length) return false;

      setIsSaving(true);
      try {
        const success = await saveChanges();
        return success;
      } catch (error) {
        toast({
          variant: 'destructive',
          title: 'Save Error',
          description: error instanceof Error ? error.message : 'Save failed',
        });
        return false;
      } finally {
        setIsSaving(false);
      }
    },
    [toast]
  );

  return { handleSave, isSaving };
}

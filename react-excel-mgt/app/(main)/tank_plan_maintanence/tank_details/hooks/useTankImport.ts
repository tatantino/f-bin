import { useCallback, useState } from 'react';

import { useToast } from '@/hooks/use-toast';

import type { TankInfo } from '../types/tank';
import { ExcelProcessor } from '../../_shared/utils/excel-processor';

import { tankExcelConfig } from '../config';

export function useTankImport() {
  const { toast } = useToast();
  const [isImporting, setIsImporting] = useState(false);

  const handleImport = useCallback(
    async (file: File): Promise<TankInfo[] | undefined> => {
      setIsImporting(true);
      try {
        const processor = new ExcelProcessor(tankExcelConfig);
        const { data, errors } = await processor.processFile(file);

        if (errors.length > 0) {
          errors.forEach(error => {
            toast({
              variant: 'destructive',
              title: 'Import Error',
              description: error,
            });
          });
          return undefined;
        }

        toast({
          title: 'Import Success',
          description: `Imported ${data.length} tanks from Excel. Please review and save the changes.`,
        });

        return data;
      } catch (error) {
        toast({
          variant: 'destructive',
          title: 'Import Error',
          description: error instanceof Error ? error.message : 'Import failed',
        });
        return undefined;
      } finally {
        setIsImporting(false);
      }
    },
    [toast]
  );

  return {
    handleImport,
    isImporting,
  };
}

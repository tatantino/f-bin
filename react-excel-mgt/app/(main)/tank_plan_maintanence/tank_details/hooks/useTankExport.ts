import { useToast } from '@/hooks/use-toast';
import { useCallback, useState } from 'react';
import type { TankInfo } from '../types/tank';
import { ExcelProcessor } from '../../_shared/utils/excel-processor';
import { tankExcelConfig } from '../config';
import { useFileDownload } from './useFileDownload';

export function useTankExport() {
  const { toast } = useToast();
  const { downloadFile } = useFileDownload();
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = useCallback(
    async (data: TankInfo[]): Promise<boolean> => {
      setIsExporting(true);
      try {
        const processor = new ExcelProcessor(tankExcelConfig);
        const blob = await processor.exportToExcel(data);
        const filename = `tank_info_${new Date().toISOString().split('T')[0]}.xlsx`;

        downloadFile(blob, filename);
        toast({
          title: 'Export Success',
          description: `Exported ${data.length} tanks successfully`,
        });
        return true;
      } catch (error) {
        toast({
          variant: 'destructive',
          title: 'Export Error',
          description: error instanceof Error ? error.message : 'Export failed',
        });
        return false;
      } finally {
        setIsExporting(false);
      }
    },
    [toast, downloadFile]
  );

  return { handleExport, isExporting };
}

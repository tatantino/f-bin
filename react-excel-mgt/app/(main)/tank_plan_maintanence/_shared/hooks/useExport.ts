import { useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useBaseState } from './useBaseState';
import type { ExcelConfig } from '../utils/excel-processor';
import { ExcelProcessor } from '../utils/excel-processor';

interface UseExportOptions {
  onExportStart?: () => void;
  onExportSuccess?: (fileName: string, rowCount: number) => void;
  onExportError?: (error: string) => void;
  onExportComplete?: () => void;
  fileNamePrefix?: string;
}

export function useExport<T>(
  data: T[],
  excelConfig: ExcelConfig<T>,
  options?: UseExportOptions
) {
  const { toast } = useToast();
  const { isLoading: isExporting, withLoading } = useBaseState({
    context: { module: 'useExport', function: 'handleExport' },
    onLoadStart: options?.onExportStart,
    onLoadEnd: options?.onExportComplete,
  });

  const generateFileName = useCallback(() => {
    const prefix = options?.fileNamePrefix || 'Export';
    const date = new Date().toISOString().split('T')[0];
    return `${prefix}_${date}.xlsx`;
  }, [options?.fileNamePrefix]);

  const downloadFile = useCallback((blob: Blob, fileName: string) => {
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }, []);

  const handleExport = useCallback(async () => {
    if (!data.length) return;

    await withLoading(async () => {
      const excelProcessor = new ExcelProcessor(excelConfig);
      const blob = await excelProcessor.exportToExcel(data);
      const fileName = generateFileName();

      downloadFile(blob, fileName);

      toast({
        title: 'Export Successful',
        description: `${data.length} rows exported to ${fileName}`,
      });

      options?.onExportSuccess?.(fileName, data.length);
    });
  }, [
    data,
    excelConfig,
    generateFileName,
    downloadFile,
    withLoading,
    toast,
    options,
  ]);

  return {
    handleExport,
    isExporting,
  } as const;
}

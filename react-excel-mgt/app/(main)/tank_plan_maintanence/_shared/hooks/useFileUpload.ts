'use client';

import { useState } from 'react';
import { ExcelProcessor } from '../utils/excel-processor';
import type { ExcelConfig } from '../utils/excel-processor';

interface UseFileUploadOptions<T> {
  onSuccess: (data: T[]) => void;
  onError: (errors: string[]) => void;
}

export function useFileUpload<T>(
  config: ExcelConfig<T>,
  { onSuccess, onError }: UseFileUploadOptions<T>
) {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const handleFileUpload = async (file: File) => {
    setIsLoading(true);
    setErrors([]);

    try {
      const processor = new ExcelProcessor(config);
      const { data, errors: validationErrors } =
        await processor.processFile(file);

      if (validationErrors && validationErrors.length > 0) {
        onError(validationErrors);
        return;
      }

      if (data && data.length > 0) {
        onSuccess(data);
      } else {
        onError(['No valid data found in the file']);
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      const newErrors = [errorMessage];
      setErrors(newErrors);
      onError(newErrors);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleFileUpload,
    isLoading,
    errors,
  } as const;
}

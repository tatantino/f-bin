import { useRef, useCallback } from 'react';

interface UseFileInputOptions {
  accept?: string;
  onFileSelect: (file: File) => Promise<void> | void;
  multiple?: boolean;
}

export function useFileInput({
  accept = '.xlsx,.xls',
  onFileSelect,
  multiple = false,
}: UseFileInputOptions) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleChange = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        try {
          await onFileSelect(file);
        } finally {
          event.target.value = '';
        }
      }
    },
    [onFileSelect]
  );

  return {
    fileInputRef,
    handleClick,
    handleChange,
    inputProps: {
      type: 'file',
      className: 'hidden',
      accept,
      multiple,
    },
  } as const;
}

import { useState, useCallback } from 'react';
import type { DialogConfig } from '../types';

interface UseDialogOptions {
  config?: DialogConfig;
  onConfirm: () => void;
}

export function useDialog({ config, onConfirm }: UseDialogOptions) {
  const [isOpen, setIsOpen] = useState(false);

  const handleTrigger = useCallback(() => {
    if (config) {
      setIsOpen(true);
      return;
    }
    onConfirm();
  }, [config, onConfirm]);

  const handleConfirm = useCallback(() => {
    setIsOpen(false);
    onConfirm();
  }, [onConfirm]);

  return {
    isOpen,
    setIsOpen,
    handleTrigger,
    handleConfirm,
  } as const;
}

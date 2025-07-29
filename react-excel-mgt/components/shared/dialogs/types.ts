import type { ReactNode } from 'react';

/**
 * Base configuration for dialog components
 */
export interface DialogConfig {
  /** Dialog title */
  title: string;
  /** Dialog description or message */
  description: string;
  /** Text for the confirm button */
  confirmText?: string;
  /** Text for the cancel button */
  cancelText?: string;
}

export interface DialogProps extends DialogConfig {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  headerContent?: ReactNode;
  footerContent?: ReactNode;
  contentClassName?: string;
  headerClassName?: string;
  footerClassName?: string;
  children?: ReactNode;
}

export interface ConfirmDialogProps extends DialogProps {
  onConfirm: () => void;
  isLoading?: boolean;
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
}

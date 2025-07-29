'use client';

import { Button } from '@/components/ui/button';
import { BaseDialog } from './BaseDialog';
import type { ConfirmDialogProps } from './types';
import { LoadingSpinner } from '@/components/shared/feedbacks/LoadingSpinner';
import { cn } from '@/lib/utils';

/**
 * A specialized dialog component for confirmation actions
 * @example
 * ```tsx
 * const { isOpen, setIsOpen, handleTrigger, handleConfirm } = useDialog({
 *   config: {
 *     title: 'Delete Item',
 *     description: 'Are you sure you want to delete this item?',
 *   },
 *   onConfirm: handleDelete,
 * });
 *
 * return (
 *   <ConfirmDialog
 *     open={isOpen}
 *     onOpenChange={setIsOpen}
 *     title="Delete Item"
 *     description="Are you sure you want to delete this item?"
 *     onConfirm={handleConfirm}
 *   />
 * );
 * ```
 */
export function ConfirmDialog({
  open,
  onOpenChange,
  title,
  description,
  onConfirm,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  isLoading = false,
  variant = 'default',
  footerContent,
}: ConfirmDialogProps) {
  // If custom footer content is provided, use it
  // Otherwise, create default footer with confirm/cancel buttons
  const dialogFooter = footerContent || (
    <div className="flex items-center justify-end gap-2">
      <Button
        variant="outline"
        onClick={() => onOpenChange(false)}
        disabled={isLoading}
        className="min-w-24 w-auto"
      >
        {cancelText}
      </Button>
      <Button
        variant={variant}
        onClick={onConfirm}
        disabled={isLoading}
        className={cn(
          'min-w-24 w-auto',
          variant === 'destructive' &&
            'bg-destructive hover:bg-destructive/90 text-destructive-foreground'
        )}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <LoadingSpinner size="sm" />
            <span>{confirmText}</span>
          </span>
        ) : (
          confirmText
        )}
      </Button>
    </div>
  );

  return (
    <BaseDialog
      open={open}
      onOpenChange={onOpenChange}
      title={title}
      description={description}
      footerContent={dialogFooter}
    />
  );
}

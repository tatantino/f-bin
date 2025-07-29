'use client';

import { Button } from '@/components/ui/button';
import { ConfirmDialog, useDialog } from '@/components/shared/dialogs';
import { memo } from 'react';
import type { ButtonProps } from '@/components/ui/button';
import type { DialogConfig } from '@/components/shared/dialogs';

interface ConfirmButtonProps extends Omit<ButtonProps, 'onClick'> {
  onClick: () => void;
  confirmConfig: DialogConfig;
  children: React.ReactNode;
}

/**
 * A button component that shows a confirmation dialog before executing the action
 * @example
 * ```tsx
 * <ConfirmButton
 *   onClick={handleDelete}
 *   confirmConfig={{
 *     title: 'Delete Item',
 *     description: 'Are you sure you want to delete this item?',
 *   }}
 * >
 *   Delete
 * </ConfirmButton>
 * ```
 */
export const ConfirmButton = memo(function ConfirmButton({
  onClick,
  confirmConfig,
  children,
  ...props
}: ConfirmButtonProps) {
  const { isOpen, setIsOpen, handleTrigger, handleConfirm } = useDialog({
    config: confirmConfig,
    onConfirm: onClick,
  });

  return (
    <>
      <Button onClick={handleTrigger} {...props}>
        {children}
      </Button>

      <ConfirmDialog
        open={isOpen}
        onOpenChange={setIsOpen}
        onConfirm={handleConfirm}
        {...confirmConfig}
      />
    </>
  );
});

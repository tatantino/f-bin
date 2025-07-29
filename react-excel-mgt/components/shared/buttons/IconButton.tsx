'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/components/shared/feedbacks/LoadingSpinner';
import { ICON_CONFIGS } from './config';
import { ConfirmButton } from './ConfirmButton';
import { memo } from 'react';
import type { IconButtonProps } from './types';
import type { DialogConfig } from '@/components/shared/dialogs';

/**
 * IconButton component that uses predefined types for consistent UI
 * @example
 * ```tsx
 * <IconButton action="edit" onClick={handleEdit} />
 * <IconButton action="delete" onClick={handleDelete} />
 * ```
 */
export const IconButton = memo(function IconButton({
  action,
  onClick,
  disabled,
  variant,
  size = 'icon',
  className,
  isLoading,
  ...props
}: IconButtonProps) {
  const config = ICON_CONFIGS[action];
  if (!config) {
    throw new Error(
      `IconButton: Configuration for action "${action}" not found.`
    );
  }

  const Icon = config.icon;
  const hasConfirm = (
    cfg: typeof config
  ): cfg is typeof config & { confirm: DialogConfig } => 'confirm' in cfg;

  const commonProps = {
    onClick,
    disabled: disabled || isLoading,
    variant: variant || config.variant || 'default',
    size,
    className: cn('hover:bg-muted', className),
    ...props,
  };

  const content = isLoading ? (
    <LoadingSpinner size="sm" />
  ) : (
    <Icon className="h-4 w-4" />
  );

  if (hasConfirm(config)) {
    return (
      <ConfirmButton {...commonProps} confirmConfig={config.confirm}>
        {content}
      </ConfirmButton>
    );
  }

  return <Button {...commonProps}>{content}</Button>;
});

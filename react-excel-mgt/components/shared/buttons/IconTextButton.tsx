'use client';

import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/components/shared/feedbacks/LoadingSpinner';
import { ICON_TEXT_CONFIGS } from './config';
import { ConfirmButton } from './ConfirmButton';
import { memo } from 'react';
import type { IconTextButtonProps } from './types';
import type { DialogConfig } from '@/components/shared/dialogs';

/**
 * A button component that displays both an icon and text
 * @example
 * ```tsx
 * <IconTextButton
 *   action="save"
 *   onClick={handleSave}
 *   isLoading={isSaving}
 * />
 *
 * <IconTextButton
 *   action="deleteItem"
 *   text="Remove User"
 *   loadingText="Removing..."
 *   onClick={handleDelete}
 * />
 * ```
 */
export const IconTextButton = memo(function IconTextButton({
  action,
  onClick,
  isLoading,
  disabled,
  className,
  text,
  size,
  variant,
  loadingText,
  ...props
}: IconTextButtonProps) {
  const config = ICON_TEXT_CONFIGS[action];
  if (!config) {
    throw new Error(
      `IconTextButton: Configuration for action "${action}" not found.`
    );
  }

  const Icon = config.icon;
  const displayText = text || config.text;
  const displayLoadingText = loadingText || config.loadingText;

  const hasConfirm = (
    cfg: typeof config
  ): cfg is typeof config & { confirm: DialogConfig } => 'confirm' in cfg;

  const commonProps = {
    onClick,
    disabled: disabled || isLoading,
    variant: variant || config.variant || 'default',
    size: size || config.size || 'default',
    className,
    ...props,
  };

  const content = isLoading ? (
    <LoadingSpinner size="sm" label={displayLoadingText} className="gap-2" />
  ) : (
    <div className="flex items-center gap-2">
      <Icon className="h-4 w-4" />
      <span>{displayText}</span>
    </div>
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

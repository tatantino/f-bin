import type { ButtonProps } from '@/components/ui/button';
import type { IconAction, IconTextAction } from './config';

// Base button props
export interface BaseButtonProps extends Omit<ButtonProps, 'onClick'> {
  onClick: () => void;
  isLoading?: boolean;
}

// Button props
export interface IconButtonProps extends BaseButtonProps {
  action: IconAction;
}

export interface IconTextButtonProps extends BaseButtonProps {
  action: IconTextAction;
  text?: string;
  loadingText?: string;
}

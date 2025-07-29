'use client';

import { cn } from '@/lib/utils';

const SPINNER_SIZES = {
  xs: 10,
  sm: 14,
  md: 18,
  lg: 22,
  xl: 26,
} as const;

type SpinnerSize = keyof typeof SPINNER_SIZES | number;

interface LoadingSpinnerProps {
  /**
   * Size of the spinner
   * - number: size in pixels
   * - preset: xs (10px), sm (14px), md (18px), lg (22px), xl (26px)
   */
  size?: SpinnerSize;
  /** Optional loading text to display next to the spinner */
  label?: string;
  /** Additional CSS classes for the container */
  className?: string;
  /** Additional CSS classes for the spinner */
  spinnerClassName?: string;
  /** Additional CSS classes for the label */
  labelClassName?: string;
}

/**
 * A versatile loading spinner component that can be used in various contexts
 * @example
 * ```tsx
 * // Basic spinner
 * <LoadingSpinner size="md" />
 *
 * // Spinner with text
 * <LoadingSpinner size="lg" label="Loading..." />
 *
 * // Custom size spinner
 * <LoadingSpinner size={40} />
 * ```
 */
export function LoadingSpinner({
  size = 'sm',
  label,
  className,
  spinnerClassName,
  labelClassName,
}: LoadingSpinnerProps) {
  const sizeInPixels = typeof size === 'number' ? size : SPINNER_SIZES[size];

  const spinner = (
    <div
      className={cn(
        'animate-spin rounded-full border border-current border-t-transparent',
        spinnerClassName
      )}
      style={{ width: `${sizeInPixels}px`, height: `${sizeInPixels}px` }}
    />
  );

  // If no label, return just the spinner
  if (!label) {
    return (
      <div className={cn('inline-flex items-center justify-center', className)}>
        {spinner}
      </div>
    );
  }

  // Return spinner with label
  return (
    <div className={cn('inline-flex items-center gap-1.5', className)}>
      {spinner}
      <span className={cn('text-xs text-muted-foreground', labelClassName)}>
        {label}
      </span>
    </div>
  );
}

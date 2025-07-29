import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface TimestampCellProps {
  value?: string | Date | null;
  className?: string;
  showTime?: boolean;
}

/**
 * A simple timestamp cell component for displaying dates in tables
 * @example
 * ```tsx
 * <TimestampCell value={date} />
 * <TimestampCell value={date} showTime />
 * ```
 */
export function TimestampCell({
  value,
  className,
  showTime = false,
}: TimestampCellProps) {
  if (!value) return null;

  const dateValue = typeof value === 'string' ? new Date(value) : value;
  const format_string = showTime ? 'yyyy-MM-dd HH:mm:ss' : 'yyyy-MM-dd';

  return <span className={className}>{format(dateValue, format_string)}</span>;
}

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import type { DateRangeFilterProps } from './types';

/**
 * A reusable date range filter component with calendar popup
 * @example
 * ```tsx
 * <DateRangeFilter
 *   value={dateRange}
 *   onChange={setDateRange}
 *   placeholder="Select date range"
 * />
 * ```
 */
export function DateRangeFilter({
  value,
  onChange,
  placeholder = 'Select date range',
  width = 260,
  disabled,
  formatString = 'LLL dd, y',
  numberOfMonths = 2,
  disableFuture,
  disablePast,
}: DateRangeFilterProps) {
  const displayText = value?.from
    ? value.to
      ? `${format(value.from, formatString)} - ${format(value.to, formatString)}`
      : format(value.from, formatString)
    : placeholder;

  const today = new Date();
  const disabledDays = [
    ...(disablePast ? [{ before: today }] : []),
    ...(disableFuture ? [{ after: today }] : []),
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            'h-10 justify-start text-left text-sm font-normal',
            !value && 'text-muted-foreground'
          )}
          style={{ width }}
          disabled={disabled}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {displayText}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="end">
        <Calendar
          initialFocus
          mode="range"
          defaultMonth={value?.from}
          selected={value}
          onSelect={onChange}
          numberOfMonths={numberOfMonths}
          disabled={disabledDays}
        />
      </PopoverContent>
    </Popover>
  );
}

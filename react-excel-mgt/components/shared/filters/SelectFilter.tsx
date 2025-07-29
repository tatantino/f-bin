import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import type { SelectFilterProps } from './types';

/**
 * A reusable select filter component with support for loading state, empty state,
 * and "all" option
 * @example
 * ```tsx
 * <SelectFilter
 *   options={[
 *     { value: 'active', label: 'Active' },
 *     { value: 'inactive', label: 'Inactive' }
 *   ]}
 *   value={status}
 *   onChange={setStatus}
 * />
 * ```
 */
export function SelectFilter<T extends string = string>({
  options,
  value,
  onChange,
  loading,
  placeholder = 'Select...',
  width = 160,
  emptyMessage = 'No options available',
  disabled,
}: SelectFilterProps<T>) {
  if (loading) {
    return <Skeleton className="h-10" style={{ width }} />;
  }

  const hasOptions = options.length > 0;

  return (
    <Select
      value={value}
      onValueChange={onChange}
      disabled={disabled || !hasOptions}
    >
      <SelectTrigger className="h-10 text-sm" style={{ width }}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map(({ value, label }) => (
          <SelectItem key={value} value={value} className="text-sm">
            {label}
          </SelectItem>
        ))}
        {!hasOptions && (
          <SelectItem
            value="none"
            disabled
            className="text-sm text-muted-foreground"
          >
            {emptyMessage}
          </SelectItem>
        )}
      </SelectContent>
    </Select>
  );
}

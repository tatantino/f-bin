import type { DateRange } from 'react-day-picker';

export interface BaseFilterProps {
  disabled?: boolean;
  width?: number;
}

export interface SelectOption<T extends string = string> {
  value: T;
  label: string;
}

export interface SelectFilterProps<T extends string = string>
  extends BaseFilterProps {
  options: SelectOption<T>[];
  value?: T;
  onChange: (value: T) => void;
  loading?: boolean;
  placeholder?: string;
  emptyMessage?: string;
  allOptionLabel?: string;
  showAllOption?: boolean;
}

export interface SearchFilterProps extends BaseFilterProps {
  placeholder?: string;
  onSearch: (value: string) => void;
  debounceMs?: number;
  initialValue?: string;
}

export interface DateRangeFilterProps extends BaseFilterProps {
  value?: DateRange;
  onChange: (range: DateRange | undefined) => void;
  placeholder?: string;
  formatString?: string;
  numberOfMonths?: number;
  disableFuture?: boolean;
  disablePast?: boolean;
}

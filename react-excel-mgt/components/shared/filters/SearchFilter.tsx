import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import type { SearchFilterProps } from './types';

/**
 * A reusable search filter component with debounced input
 * @example
 * ```tsx
 * <SearchFilter
 *   onSearch={handleSearch}
 *   placeholder="Search users..."
 *   debounceMs={500}
 * />
 * ```
 */
export function SearchFilter({
  placeholder = 'Search...',
  onSearch,
  debounceMs = 300,
  initialValue = '',
  width = 320,
  disabled,
}: SearchFilterProps) {
  const [value, setValue] = useState(initialValue);

  const debouncedSearch = useDebouncedCallback(onSearch, debounceMs);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setValue(newValue);
      debouncedSearch(newValue);
    },
    [debouncedSearch]
  );

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <div className="relative" style={{ width }}>
      <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="h-10 pl-8 text-sm"
        disabled={disabled}
      />
    </div>
  );
}

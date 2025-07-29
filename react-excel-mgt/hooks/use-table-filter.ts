import { useCallback, useMemo, useState } from 'react';
import type { DateRange } from 'react-day-picker';

export interface TableFilterConfig<T> {
  searchableFields: Array<keyof T>;

  filters?: {
    [K: string]: {
      defaultValue: string;
      matcher: (item: T, value: string) => boolean;
    };
  };

  dateField?: keyof T;
}

interface FilterState {
  searchTerm: string;
  filters: Record<string, string>;
  dateRange?: DateRange;
}

export function useTableFilter<T extends Record<string, any>>({
  data,
  config,
}: {
  data: T[];
  config: TableFilterConfig<T>;
}) {
  const [state, setState] = useState<FilterState>(() => ({
    searchTerm: '',
    filters: Object.fromEntries(
      Object.entries(config.filters || {}).map(([key, { defaultValue }]) => [
        key,
        defaultValue,
      ])
    ),
    dateRange: undefined,
  }));

  const setSearchTerm = useCallback(
    (term: string) => setState(prev => ({ ...prev, searchTerm: term })),
    []
  );

  const setFilter = useCallback(
    (name: string, value: string) =>
      setState(prev => ({
        ...prev,
        filters: { ...prev.filters, [name]: value },
      })),
    []
  );

  const setDateRange = useCallback(
    (range: DateRange | undefined) =>
      setState(prev => ({ ...prev, dateRange: range })),
    []
  );

  const filtered = useMemo(() => {
    const { searchTerm, filters, dateRange } = state;

    return data.filter(item => {
      if (searchTerm) {
        const term = searchTerm.toLowerCase();
        const matches = config.searchableFields.some(field =>
          item[field]?.toString().toLowerCase().includes(term)
        );
        if (!matches) return false;
      }

      if (config.filters) {
        const matchesFilters = Object.entries(filters).every(([key, value]) => {
          const filter = config.filters?.[key];
          return filter ? filter.matcher(item, value) : true;
        });
        if (!matchesFilters) return false;
      }

      if (dateRange && config.dateField) {
        const date = new Date(item[config.dateField]);
        if (
          (dateRange.from && date < dateRange.from) ||
          (dateRange.to && date > dateRange.to)
        ) {
          return false;
        }
      }

      return true;
    });
  }, [data, state, config]);

  return {
    filtered,

    setSearchTerm,
    setFilter,
    setDateRange,

    searchTerm: state.searchTerm,
    filters: state.filters,
    dateRange: state.dateRange,
  } as const;
}

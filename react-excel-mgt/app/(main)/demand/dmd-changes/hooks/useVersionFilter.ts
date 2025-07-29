import type { DmdVersion } from '../../../tank_plan_maintanence/_shared/types';
import { TABLE_CONFIG, PAGE_CONFIG } from '../config/constants';
import { addDays, format } from 'date-fns';
import { useTableFilter } from '@/hooks/use-table-filter';
import { useCallback, useEffect, useMemo } from 'react';

export function useVersionFilter() {
  const {
    searchTerm,
    setSearchTerm,
    filters,
    setFilter,
    dateRange,
    setDateRange,
  } = useTableFilter<DmdVersion>({
    data: [],
    config: {
      searchableFields: Array.from(TABLE_CONFIG.searchableFields),
      filters: {
        unit: {
          defaultValue: 'all',
          matcher: (version: DmdVersion, unit: string) =>
            unit === 'all' || version.dmd_change_unit === unit,
        },
      },
      dateField: 'create_timestamp',
    },
  });

  useEffect(() => {
    if (!dateRange) {
      setDateRange({
        from: addDays(new Date(), -PAGE_CONFIG.defaultPastDays),
        to: new Date(),
      });
    }
  }, [dateRange, setDateRange]);

  const filterVersions = useCallback(
    (versions: DmdVersion[]) => {
      return versions.filter(item => {
        if (searchTerm) {
          const term = searchTerm.toLowerCase();
          const matches = TABLE_CONFIG.searchableFields.some(field =>
            String(item[field] || '')
              .toLowerCase()
              .includes(term)
          );
          if (!matches) return false;
        }

        const unit = filters.unit;
        if (unit !== 'all' && item.dmd_change_unit !== unit) {
          return false;
        }

        if (dateRange?.from || dateRange?.to) {
          const date = item.create_timestamp
            ? new Date(item.create_timestamp)
            : new Date();

          const dateStr = format(date, 'yyyy-MM-dd');
          const fromStr = dateRange.from
            ? format(dateRange.from, 'yyyy-MM-dd')
            : '';
          const toStr = dateRange.to ? format(dateRange.to, 'yyyy-MM-dd') : '';

          if (fromStr && dateStr < fromStr) return false;
          if (toStr && dateStr > toStr) return false;
        }

        return true;
      });
    },
    [searchTerm, filters, dateRange]
  );

  const formattedDateRange = useMemo(() => {
    if (!dateRange) return undefined;
    return {
      from: dateRange.from
        ? new Date(format(dateRange.from, 'yyyy-MM-dd'))
        : undefined,
      to: dateRange.to
        ? new Date(format(dateRange.to, 'yyyy-MM-dd'))
        : undefined,
    };
  }, [dateRange]);

  return {
    filterVersions,
    searchTerm,
    setSearchTerm,
    selectedUnit: filters.unit,
    setSelectedUnit: (value: string) => setFilter('unit', value),
    dateRange: formattedDateRange,
    setDateRange,
  };
}

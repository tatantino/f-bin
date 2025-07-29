import React, { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { DataTable } from '../base-data-table';
import { SearchFilter } from '../../filters/SearchFilter';
import { DateRangeFilter } from '../../filters/DateRangeFilter';
import { SelectFilter } from '../../filters/SelectFilter';
import { IconButton } from '../../buttons/IconButton';
import type { Column, TableAction } from '../base-data-table/types';
import type { DateRange } from 'react-day-picker';
import type { SelectOption } from '../../filters/types';
import { sortData, filterData } from './utils';
import { addDays, format } from 'date-fns';

// Filter configuration for select filters
export interface FilterConfig<T> {
  field: keyof T;
  label: string;
  width?: number;
}

// Props for SimpleDataList component
export interface DataListTableProps<T extends Record<string, any>> {
  // Data fetching
  queryFn?: (filters?: Record<string, any>) => Promise<T[]>;
  queryKey: string | string[];
  apiEndpoint?: string;

  // Table configuration
  columns: Column<T>[];
  actions?: TableAction<T>[];
  keyExtractor?: (item: T) => string;
  initialSort?: {
    key: keyof T;
    direction: 'asc' | 'desc';
  };

  // Filters
  searchFields?: Array<keyof T>;
  selectFilters?: FilterConfig<T>[];
  dateField?: keyof T;
  defaultPastDays?: number;

  // UI options
  searchPlaceholder?: string;
  disableFutureDate?: boolean;
  showSearch?: boolean;
  showDateFilter?: boolean;
  showRefreshButton?: boolean;
  className?: string;
  filterBarClassName?: string;
  renderCustomFilters?: () => React.ReactNode;
}

const extractItemId = (item: Record<string, any>) => String(item.id);

// Format date range to keep only year, month, and day
export function formatDateRange(dateRange?: DateRange) {
  if (!dateRange) return undefined;
  return {
    from: dateRange.from ? format(dateRange.from, 'yyyy-MM-dd') : undefined,
    to: dateRange.to ? format(dateRange.to, 'yyyy-MM-dd') : undefined,
  };
}

// Default fetch function that uses the provided API endpoint
async function fetchDataFromApi<T>(
  apiEndpoint: string,
  { dateRange }: { dateRange?: DateRange } = {}
) {
  const formattedRange = formatDateRange(dateRange);
  const queryParams = formattedRange
    ? `?startDate=${formattedRange.from}&endDate=${formattedRange.to}`
    : '';

  const response = await fetch(`${apiEndpoint}${queryParams}`);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to fetch data');
  }

  return response.json();
}

export function DataListTable<T extends Record<string, any>>({
  // Data fetching
  queryFn,
  queryKey,
  apiEndpoint,

  // Table configuration
  columns,
  actions,
  keyExtractor = extractItemId,
  initialSort,

  // Filters
  searchFields = [],
  selectFilters = [],
  dateField,
  defaultPastDays = 365,

  // UI options
  searchPlaceholder = 'Search...',
  disableFutureDate = true,
  showSearch = true,
  showDateFilter = dateField !== undefined,
  showRefreshButton = true,
  className,
  filterBarClassName,
  renderCustomFilters,
}: DataListTableProps<T>) {
  // Create query function from props
  const dataFetcher = useMemo(() => {
    if (queryFn) return queryFn;
    if (apiEndpoint)
      return (filters?: Record<string, any>) =>
        fetchDataFromApi<T>(apiEndpoint, filters);
    throw new Error('Either queryFn or apiEndpoint must be provided');
  }, [queryFn, apiEndpoint]);

  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState<DateRange | undefined>(
    defaultPastDays
      ? {
          from: addDays(new Date(), -defaultPastDays),
          to: new Date(),
        }
      : undefined
  );
  const [filterSelections, setFilterSelections] = useState<
    Record<string, string>
  >(
    selectFilters.reduce(
      (acc, filter) => ({ ...acc, [filter.field as string]: 'all' }),
      {} as Record<string, string>
    )
  );

  // Sorting state
  const [sortConfig, setSortConfig] = useState<{
    key: keyof T;
    direction: 'asc' | 'desc';
  }>(initialSort || { key: columns[0].key, direction: 'asc' });

  // Format date range for query
  const formattedDateRange = useMemo(
    () => formatDateRange(dateRange),
    [dateRange]
  );
  const completeQueryKey = useMemo(() => {
    const baseKey = Array.isArray(queryKey) ? queryKey : [queryKey];
    return [...baseKey, formattedDateRange];
  }, [queryKey, formattedDateRange]);

  // Fetch data
  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: completeQueryKey,
    queryFn: () => dataFetcher({ dateRange }),
  });

  // Process data
  const filterableFields = selectFilters.map(filter => filter.field);
  const filteredData = useMemo(
    () =>
      filterData(
        data,
        searchTerm,
        filterSelections,
        searchFields,
        filterableFields
      ),
    [data, searchTerm, filterSelections, searchFields, filterableFields]
  );
  const sortedData = useMemo(
    () => sortData(filteredData, sortConfig),
    [filteredData, sortConfig]
  );

  // Generate select options from data
  const filterOptions = useMemo(() => {
    const options: Record<string, SelectOption[]> = {};

    selectFilters.forEach(filter => {
      const field = filter.field as string;
      const uniqueValues = Array.from(
        new Set(
          data.map((item: T) => String(item[field] || '')).filter(Boolean)
        )
      )
        .sort()
        .map(value => ({ value, label: value }) as SelectOption);

      options[field] = [{ value: 'all', label: 'All' }, ...uniqueValues];
    });

    return options;
  }, [data, selectFilters]);

  // Handle sort column click
  const handleSortChange = (key: keyof T) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  // Handle select filter change
  const handleFilterChange = (field: string) => (value: string) => {
    setFilterSelections(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className={className}>
      {/* Filter Bar */}
      <div
        className={`flex flex-wrap items-center gap-4 pb-4 ${filterBarClassName || ''}`}
      >
        {showSearch && searchFields.length > 0 && (
          <SearchFilter
            placeholder={searchPlaceholder}
            initialValue={searchTerm}
            onSearch={setSearchTerm}
            disabled={isLoading}
          />
        )}

        {selectFilters.map(filter => {
          const field = filter.field as string;
          return (
            <SelectFilter
              key={field}
              options={filterOptions[field] || []}
              value={filterSelections[field]}
              onChange={handleFilterChange(field)}
              loading={isLoading}
              placeholder={filter.label}
              width={filter.width}
            />
          );
        })}

        {showDateFilter && dateField && (
          <DateRangeFilter
            value={dateRange}
            onChange={setDateRange}
            disabled={isLoading}
            disableFuture={disableFutureDate}
          />
        )}

        {renderCustomFilters && renderCustomFilters()}

        {showRefreshButton && (
          <IconButton
            action="refresh"
            onClick={() => refetch()}
            disabled={isLoading}
            variant="outline"
            className="ml-auto"
          />
        )}
      </div>

      {/* Data Table */}
      <DataTable<T>
        data={sortedData}
        columns={columns}
        sortConfig={sortConfig}
        onSort={handleSortChange}
        actions={actions}
        keyExtractor={keyExtractor}
        loading={isLoading}
      />
    </div>
  );
}

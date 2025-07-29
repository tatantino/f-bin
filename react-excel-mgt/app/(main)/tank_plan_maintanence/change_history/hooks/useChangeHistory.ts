import { useState, useMemo } from 'react';
import { format, subMonths } from 'date-fns';
import { DateRange } from 'react-day-picker';
import { debounce } from 'lodash';
import type { PlanHistoryRecord } from '../../_shared/types';
import { useHistoryRecords } from '../../_shared/hooks/useHistoryRecords';

// Constants
const DEFAULT_FILTER_VALUE = 'all';
const SEARCH_DEBOUNCE_MS = 300;

// Types
type FilterType = 'tank' | 'rc' | 'category';

/**
 * Manages change history data, filtering, sorting and pagination
 */
export function useChangeHistory() {
  // Date range initialization (last 6 months)
  const defaultDateRange = (): DateRange => ({
    from: subMonths(new Date(), 6),
    to: new Date(),
  });

  // State
  const [selectedCategory, setSelectedCategory] =
    useState(DEFAULT_FILTER_VALUE);
  const [selectedTank, setSelectedTank] = useState(DEFAULT_FILTER_VALUE);
  const [selectedRC, setSelectedRC] = useState(DEFAULT_FILTER_VALUE);
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState<DateRange | undefined>(
    defaultDateRange
  );
  const [sortConfig, setSortConfig] = useState<{
    key: keyof PlanHistoryRecord;
    direction: 'asc' | 'desc';
  }>({
    key: 'plan_change_hist_timestamp',
    direction: 'desc',
  });

  // Format date range for API
  const formattedDateRange = useMemo(
    () => ({
      startDate: dateRange?.from
        ? format(dateRange.from, 'yyyy-MM-dd')
        : undefined,
      endDate: dateRange?.to ? format(dateRange.to, 'yyyy-MM-dd') : undefined,
    }),
    [dateRange]
  );

  // Fetch data with filters applied
  const {
    historyRecords,
    isLoading: loading,
    refetch: refresh,
  } = useHistoryRecords({
    startDate: formattedDateRange.startDate,
    endDate: formattedDateRange.endDate,
    tank: selectedTank !== DEFAULT_FILTER_VALUE ? selectedTank : undefined,
    rc: selectedRC !== DEFAULT_FILTER_VALUE ? selectedRC : undefined,
    category:
      selectedCategory !== DEFAULT_FILTER_VALUE ? selectedCategory : undefined,
  });

  // Extract unique tank and RC options
  const tanks = useMemo(
    () =>
      Array.from(new Set(historyRecords?.map(r => r.tank) || []))
        .sort()
        .map(tank => ({ value: tank, label: tank })),
    [historyRecords]
  );

  const rcs = useMemo(
    () =>
      Array.from(new Set(historyRecords?.map(r => r.RC) || []))
        .sort()
        .map(rc => ({ value: rc, label: rc })),
    [historyRecords]
  );

  // Search records across multiple fields
  const isSearchMatch = (record: PlanHistoryRecord, term: string): boolean => {
    if (!term) return true;

    const searchLower = term.toLowerCase();
    const searchableFields = [
      record.tank,
      record.RC,
      record.remark,
      record.remark_category,
      record.plan_version,
      record.username,
      record.plan_type,
    ];

    return searchableFields.some(
      field =>
        typeof field === 'string' && field.toLowerCase().includes(searchLower)
    );
  };

  // Apply filtering and sorting
  const filteredData = useMemo(() => {
    // Apply search filter
    const filtered = historyRecords.filter(record =>
      isSearchMatch(record, searchTerm)
    );

    // Apply sorting
    return [...filtered].sort((a, b) => {
      const aValue = String(a[sortConfig.key] ?? '');
      const bValue = String(b[sortConfig.key] ?? '');

      if (!aValue && !bValue) return 0;
      if (!aValue) return 1;
      if (!bValue) return -1;

      const compareResult = aValue.localeCompare(bValue);
      return sortConfig.direction === 'asc' ? compareResult : -compareResult;
    });
  }, [historyRecords, searchTerm, sortConfig]);

  // Event handlers
  const handleSearch = debounce(
    (value: string) => setSearchTerm(value),
    SEARCH_DEBOUNCE_MS
  );

  const handleSort = (key: keyof PlanHistoryRecord) => {
    setSortConfig(current => ({
      key,
      direction:
        current.key === key && current.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const handleFilterChange = (filterType: FilterType, value: string) => {
    switch (filterType) {
      case 'tank':
        setSelectedTank(value);
        break;
      case 'rc':
        setSelectedRC(value);
        break;
      case 'category':
        setSelectedCategory(value);
        break;
    }
  };

  return {
    // Data
    filteredData,
    loading,
    tanks,
    rcs,

    // State
    selectedCategory,
    selectedTank,
    selectedRC,
    searchTerm,
    dateRange,
    sortConfig,

    // Actions
    setDateRange,
    handleSort,
    handleSearch,
    handleFilterChange,
    refresh,
  };
}

import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import type { DmdVersion, SelectOption } from '../types';
import { queryOpts } from '../services/query-opts';
import { useVersionFilter } from './useVersionFilter';

export function useDmdListData() {
  const {
    filterVersions,
    searchTerm,
    setSearchTerm,
    selectedUnit,
    setSelectedUnit,
    dateRange,
    setDateRange,
  } = useVersionFilter();

  // Use React Query to fetch data
  const {
    data: versions = [],
    isLoading: loading,
    refetch,
  } = useQuery(queryOpts.versions(dateRange));

  // Calculate unique unit options
  const uniqueUnits = useMemo((): SelectOption[] => {
    const units = new Set<string>(
      versions
        .map((v: DmdVersion) => v.dmd_change_unit)
        .filter((unit: unknown): unit is string => Boolean(unit))
    );
    return [
      { value: 'all', label: 'All Units' },
      ...Array.from(units)
        .sort()
        .map(unit => ({ value: unit, label: unit })),
    ];
  }, [versions]);

  // Apply filters
  const filteredVersions = useMemo(() => {
    return versions.length ? filterVersions(versions) : [];
  }, [versions, filterVersions]);

  return {
    versions: filteredVersions,
    loading,
    searchTerm,
    setSearchTerm,
    selectedUnit,
    setSelectedUnit,
    dateRange,
    setDateRange,
    refresh: refetch,
    uniqueUnits,
  };
}

import { useCallback, useMemo, useState } from 'react';
import type { DmdVersion } from '../../../tank_plan_maintanence/_shared/types';
import type { TableSortConfig } from '../types';
import { TABLE_CONFIG } from '../config/constants';

export function useVersionSort(versions: DmdVersion[]) {
  const [sortConfig, setSortConfig] = useState<TableSortConfig>(
    TABLE_CONFIG.initialSort
  );

  const compareValues = useCallback((a: unknown, b: unknown): number => {
    if (a === b) return 0;
    if (a === null) return 1;
    if (b === null) return -1;
    return String(a).localeCompare(String(b));
  }, []);

  const handleSort = useCallback((key: keyof DmdVersion) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  }, []);

  const sortedVersions = useMemo(() => {
    if (!versions.length) return versions;

    return [...versions].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      const compareResult = compareValues(aValue, bValue);
      return sortConfig.direction === 'asc' ? compareResult : -compareResult;
    });
  }, [versions, sortConfig, compareValues]);

  return { sortConfig, handleSort, sortedVersions };
}

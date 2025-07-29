import { memo } from 'react';
import { IconButton } from '@/components/shared/buttons/IconButton';
import { SelectFilter } from '@/components/shared/filters/SelectFilter';
import { SearchFilter } from '@/components/shared/filters/SearchFilter';
import { DateRangeFilter } from '@/components/shared/filters/DateRangeFilter';
import type { VersionFilterProps } from '../types';

export const VersionFilter = memo(function VersionFilter({
  loading,
  onRefresh,
  searchTerm,
  onSearch,
  unitOptions = [],
  selectedUnit,
  onUnitChange,
  dateRange,
  onDateRangeChange,
}: VersionFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <SearchFilter
        placeholder="Search versions..."
        initialValue={searchTerm}
        onSearch={onSearch}
        disabled={loading}
      />

      <SelectFilter
        options={unitOptions}
        value={selectedUnit}
        onChange={onUnitChange}
        loading={loading}
        placeholder="Change Unit"
        allOptionLabel="All Units"
      />

      <DateRangeFilter
        value={dateRange}
        onChange={onDateRangeChange}
        disabled={loading}
        disableFuture={true}
      />

      {onRefresh && (
        <IconButton
          action="refresh"
          onClick={onRefresh}
          disabled={loading}
          variant="outline"
          className="ml-auto"
        />
      )}
    </div>
  );
});

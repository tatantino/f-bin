import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';
import {
  DateRangeFilter,
  SearchFilter,
  SelectFilter,
} from '@/components/shared/filters';
import type { DateRange } from 'react-day-picker';

type FilterOption = {
  value: string;
  label: string;
};

// Category filter options
const CATEGORY_OPTIONS: FilterOption[] = [
  { value: 'all', label: 'All Categories' },
  { value: 'Schedule', label: 'Schedule' },
  { value: 'Resource', label: 'Resource' },
  { value: 'Cost', label: 'Cost' },
  { value: 'Lead time', label: 'Lead time' },
  { value: 'Tanks issue', label: 'Tanks issue' },
  { value: 'Inventory', label: 'Inventory' },
  { value: 'Other', label: 'Other' },
];

type Props = {
  loading?: boolean;
  onRefresh?: () => void;
  searchTerm: string;
  onSearch: (value: string) => void;
  tanks: FilterOption[];
  rcs: FilterOption[];
  selectedTank: string;
  selectedRC: string;
  selectedCategory: string;
  onTankChange: (value: string) => void;
  onRCChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  dateRange?: DateRange;
  onDateRangeChange: (range: DateRange | undefined) => void;
};

/**
 * Filters for the change history data
 */
export function ChangeHistoryFilter({
  loading,
  onRefresh,
  searchTerm,
  onSearch,
  tanks,
  rcs,
  selectedTank,
  selectedRC,
  selectedCategory,
  onTankChange,
  onRCChange,
  onCategoryChange,
  dateRange,
  onDateRangeChange,
}: Props) {
  return (
    <div className="flex items-center gap-4">
      {/* Search filter */}
      <SearchFilter
        initialValue={searchTerm}
        onSearch={onSearch}
        placeholder="Search all columns..."
        disabled={loading}
      />

      {/* Tank filter */}
      <SelectFilter
        options={[{ value: 'all', label: 'All Tanks' }, ...tanks]}
        value={selectedTank}
        onChange={onTankChange}
        placeholder="Tank"
        loading={loading}
      />

      {/* RC filter */}
      <SelectFilter
        options={[{ value: 'all', label: 'All RCs' }, ...rcs]}
        value={selectedRC}
        onChange={onRCChange}
        placeholder="RC"
        loading={loading}
      />

      {/* Category filter */}
      <SelectFilter
        options={CATEGORY_OPTIONS}
        value={selectedCategory}
        onChange={onCategoryChange}
        placeholder="Category"
        loading={loading}
      />

      {/* Date range filter */}
      <DateRangeFilter
        value={dateRange}
        onChange={onDateRangeChange}
        disabled={loading}
      />

      {/* Refresh button */}
      {onRefresh && (
        <Button
          variant="outline"
          size="icon"
          onClick={onRefresh}
          disabled={loading}
        >
          <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
        </Button>
      )}
    </div>
  );
}

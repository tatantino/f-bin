import type { DateRange } from 'react-day-picker';
import type { DmdVersion } from '../../../../../types/dmd-version';
import type { TableAction } from '@/components/shared/tables/base-data-table/types';

export type { DmdVersion };

export interface TableSortConfig {
  key: keyof DmdVersion;
  direction: 'asc' | 'desc';
}

export interface FilterState {
  searchTerm: string;
  selectedUnit: string;
  dateRange?: DateRange;
}

export interface VersionTableProps {
  data: DmdVersion[];
  sortConfig: TableSortConfig;
  onSort: (key: keyof DmdVersion) => void;
  onEdit?: (version: DmdVersion) => void;
  onDelete?: (version: DmdVersion) => void;
  onProposal?: (version: DmdVersion) => void;
  loading?: boolean;
}

export interface VersionFilterProps {
  loading?: boolean;
  onRefresh?: () => void;
  searchTerm: string;
  onSearch: (value: string) => void;
  unitOptions: SelectOption[];
  selectedUnit: string;
  onUnitChange: (value: string) => void;
  dateRange?: DateRange;
  onDateRangeChange: (range: DateRange | undefined) => void;
}

export interface VersionHeaderProps {
  title: string;
  description?: string;
  tooltip?: TooltipConfig;
}

export interface VersionAction extends TableAction<DmdVersion> {
  variant: 'default' | 'destructive';
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface TooltipConfig {
  title: string;
  content: React.ReactNode;
}

export interface VersionCreateDto
  extends Omit<
    DmdVersion,
    'dmd_change_master_id' | 'create_timestamp' | 'update_timestamp'
  > {}

export interface ApiResponse<T = DmdVersion[]> {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    code?: string;
  };
}

export interface ListCardProps {
  title: string;
  description?: string;
  tooltip?: TooltipConfig;
  loading?: boolean;
  onRefresh?: () => void;
  searchPlaceholder?: string;
  onSearch?: (value: string) => void;
  unitOptions?: SelectOption[];
  onUnitChange?: (value: string) => void;
  selectedUnit?: string;
  dateRange?: DateRange;
  onDateRangeChange?: (range: DateRange | undefined) => void;
  children?: React.ReactNode;
  totalRows?: number;
  filteredRows?: number;
}

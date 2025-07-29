import type { DateRange } from 'react-day-picker';
import type { DmdVersion } from '../../../../types/dmd-version';
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

export interface SelectOption {
  value: string;
  label: string;
}

export interface TooltipConfig {
  title: string;
  content: React.ReactNode;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    code?: string;
  };
}

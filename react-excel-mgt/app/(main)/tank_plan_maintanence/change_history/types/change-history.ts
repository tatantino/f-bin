import type { DateRange } from 'react-day-picker';
import type { PlanHistoryRecord } from '../../_shared/types';

/**
 * Fields that can be sorted in the change history table
 */
export type SortableFields = keyof Pick<
  PlanHistoryRecord,
  | 'plan_change_hist_timestamp'
  | 'tank'
  | 'RC'
  | 'username'
  | 'remark_category'
  | 'remark'
  | 'plan_version'
>;

/**
 * Sort configuration for the table
 */
export type SortConfig = {
  key: SortableFields;
  direction: 'asc' | 'desc';
};

/**
 * Filter state for the change history page
 */
export type ChangeHistoryFilters = {
  dateRange: DateRange | undefined;
  selectedTank: string;
  selectedRC: string;
  selectedCategory: string;
  sortConfig: SortConfig;
};

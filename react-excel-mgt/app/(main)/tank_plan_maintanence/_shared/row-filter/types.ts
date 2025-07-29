/**
 * Types for the row filter component
 */

export const DATE_FIELD_NAMES = [
  'drain_date',
  'repair_date',
  'RTL_date',
  'TL_date',
  'GG_date',
] as const;

export type DateFieldName = (typeof DATE_FIELD_NAMES)[number];

/**
 * Configuration options for the row filter component
 */
export interface RowFilterConfig {
  /**
   * Whether to enable the filter UI
   */
  enabled?: boolean;

  /**
   * Callback triggered when the filter state changes
   */
  onFilterChange?: (showAll: boolean) => void;

  /**
   * Initial state of the filter - whether to show all rows (true) or apply filtering (false)
   * @default true
   */
  initialShowAll?: boolean;

  /**
   * Optional list of custom date field names to filter by
   * If not provided, the default DATE_FIELD_NAMES will be used
   */
  dateFieldNames?: readonly string[];
}

/**
 * Props for the RowFilter component
 */
export interface RowFilterProps {
  /**
   * Whether to show all rows or apply filtering
   */
  showAllRows: boolean;

  /**
   * Callback triggered when the filter state changes
   */
  onShowAllRowsChange: (showAll: boolean) => void;

  /**
   * Whether to enable the filter UI
   * @default true
   */
  enabled?: boolean;

  /**
   * Whether the data contains date fields that can be filtered
   */
  hasDateFields: boolean;

  /**
   * List of date field names to filter by
   * @default DATE_FIELD_NAMES
   */
  dateFieldNames?: readonly string[];

  /**
   * Number of days to use as the filter threshold
   * @default 260 (~8.5 months)
   */
  dateFilterThreshold?: number;
}

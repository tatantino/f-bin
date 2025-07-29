import { DateRange } from 'react-day-picker';

export type ChangeType = 'INSERT' | 'UPDATE' | 'DELETE' | 'all';

export interface HistoryRecord extends PlanHistoryRecord {
  plan_version: number;
  plan_type: PlanType;
  plan_official: PlanTag;
  plan_version_no: number;
}

export interface BaseTankPlanData {
  plan_row_id: string;
  tank: string;
  iso: string;
  glass_type: string;
  gen: string;
  RT: string;
  RC: string;
  platform: string;
  design_asis: string;
  tank_life: number;
  last_tank_light_date: string;
  drain_date: string;
  repair_date: string;
  RTL_date: string;
  TL_date: string;
  GG_date: string;
  cold_idle: number;
  repair_LT: number;
  RTL_LT: number;
  TL_LT: number;
  remark_category: string;
  remark: string;
  comment: string;
}

export interface TankPlanDetailData extends BaseTankPlanData {
  [key: string]: string | number;
}

export type PlanType = 'Long-term' | 'Weekly';
export type PlanTag = 'GB' | '18MP' | '';
export type PlanBadgeType = PlanType | PlanTag;

export interface PlanVersion {
  plan_master_id: number;
  plan_version: string;
  plan_type: string;
  plan_official: string;
  plan_version_no: number;
  user_name: string;
  plan_version_parent?: number;
  create_timestamp?: string;
  update_timestamp?: string;
  row_count?: number;
}

export interface TransformedQueryResult<T> {
  success: boolean;
  data?: T;
  error?: string;
  errors?: string[];
  debug?: {
    rowCount?: number;
    timestamp?: string;
    stage?: string;
    details?: unknown;
  };
}

export interface ExcelProcessResult {
  data: TankPlanDetailData[];
  errors: string[];
}

export interface RowValidationResult {
  isValid: boolean;
  errors: string[];
}

export interface ExportResult {
  success: boolean;
  fileName?: string;
  error?: Error | string;
  rowCount?: number;
}

export interface PlanHistoryRecord {
  plan_change_hist_id: number;
  plan_master_id: number;
  tank: string;
  RC: string;
  drain_date_o: string | null;
  repair_date_o: string | null;
  RTL_date_o: string | null;
  TL_date_o: string | null;
  GG_date_o: string | null;
  drain_date_n: string | null;
  repair_date_n: string | null;
  RTL_date_n: string | null;
  TL_date_n: string | null;
  GG_date_n: string | null;
  remark_category: string;
  remark: string;
  plan_change_hist_timestamp: string;
  plan_version: number;
  plan_type: string;
  plan_official: string;
  plan_version_no: number;
  version_match: string;
  username: string;
  plan_create_timestamp: string;
}

export interface HistoryChange {
  field_name: string;
  old_value: string | null;
  new_value: string | null;
}

export interface HistoryGroup {
  plan_master_id: number;
  plan_row_id: string;
  tank: string;
  changes: HistoryChange[];
  change_type: 'UPDATE' | 'INSERT' | 'DELETE';
  create_timestamp: string;
  user_name: string;
}

export type ValidationStepStatus =
  | 'pending'
  | 'processing'
  | 'success'
  | 'error';

export interface ValidationStep {
  id: string;
  name: string;
  status: ValidationStepStatus;
  message?: string;
}

export interface ValidationState {
  isValidating: boolean;
  isSaving: boolean;
  validationSteps: ValidationStep[];
  validationErrors: string[];
  showValidateDialog: boolean;
  showConfirmSave: boolean;
}

export interface SQLParameter {
  name: string;
  value: string;
  type: string;
}

export interface DatabricksAPIResponse {
  statement_id: string;
  status: {
    state: 'SUCCEEDED' | 'FAILED' | 'PENDING' | 'RUNNING';
    error?: {
      message: string;
      code?: string;
    };
  };
  manifest?: {
    format: string;
    schema: {
      column_count: number;
      columns: SQLColumn[];
    };
  };
  result?: {
    chunk_index: number;
    total_chunk_count: number;
    row_count: number;
    row_offset: number;
    data_array: unknown[][];
  };
}

export interface SQLColumn {
  name: string;
  position: number;
  type_name: string;
  type_text: string;
}

export interface VersionNode {
  id: number;
  version: string;
  type: PlanType;
  status: PlanTag;
  versionNo: number;
  parentId: number | null;
  children: VersionNode[];
  metadata: {
    createdAt: string;
    createdBy: string;
    rowCount: number;
    hasChanges: boolean;
  };
}

export interface SQLQuery {
  sql: string;
  params: any[];
}

export interface VersionChangeRecord {
  plan_master_id: number;
  plan_version: string;
  plan_type: PlanType;
  plan_official: PlanTag;
  plan_version_no: number;
  create_timestamp: string;
  update_timestamp: string;
  user_name: string;
  tank: string;
  changes: {
    [key: string]: {
      old_value: string | number | null;
      new_value: string | number | null;
    };
  };
}

export interface TankChangeHistory {
  tank: string;
  versions: VersionChangeRecord[];
}

export interface DataListFilterOptions<T = string> {
  type?: FilterOption<T>[];
  tag?: FilterOption<string>[];
  tank?: FilterOption<string>[];
}

export interface DataListFilterHandlers {
  type?: (value: string) => void;
  tag?: (value: string) => void;
  tank?: (value: string) => void;
}

export interface DataListSelectedFilters {
  type?: string;
  tag?: string;
  tank?: string;
}

export interface ColumnConfig {
  validateValue?: (value: string | number | null | undefined) => string | null;
}

export interface TankPlanChangeHistory {
  plan_change_hist_id?: number;
  plan_master_id: number;
  tank: string;
  RC: string;
  drain_date_o: string | Date | null;
  repair_date_o: string | Date | null;
  RTL_date_o: string | Date | null;
  TL_date_o: string | Date | null;
  GG_date_o: string | Date | null;
  drain_date_n: string | Date | null;
  repair_date_n: string | Date | null;
  RTL_date_n: string | Date | null;
  TL_date_n: string | Date | null;
  GG_date_n: string | Date | null;
  remark_category: string;
  remark: string;
  username: string;
  plan_change_hist_timestamp?: string;
}

export interface ChangeHistoryResponse {
  success: boolean;
  data?: TankPlanChangeHistory[];
  error?: string;
}

export interface DataGridColumn<T> {
  key: string;
  field: keyof T;
  header: string;
  label: string;
  formatValue?: (value: any) => string;
}

export interface ExcelConfig {
  sheetName: string;
  columns: Array<{
    field: string;
    header: string;
  }>;
}

export interface FilterOption<T = string> {
  value: T;
  label: string;
}

export interface FilterOptions {
  type?: FilterOption[];
  tag?: FilterOption[];
  tank?: FilterOption[];
  rc?: FilterOption[];
  category?: FilterOption[];
  unit?: FilterOption[];
}

export interface FilterChangeHandlers {
  type?: (value: string) => void;
  tag?: (value: string) => void;
  tank?: (value: string) => void;
  rc?: (value: string) => void;
  category?: (value: string) => void;
  unit?: (value: string) => void;
}

export interface SelectedFilters {
  type?: string;
  tag?: string;
  tank?: string;
  rc?: string;
  category?: string;
  unit?: string;
}

export interface FilterState {
  searchTerm: string;
  selectedUnit: string;
  dateRange?: DateRange;
}

export interface TooltipConfig {
  title: string;
  content: React.ReactNode;
}

export interface ListCardProps {
  title: string;
  description?: string;
  tooltip?: TooltipConfig;
  loading?: boolean;
  onRefresh?: () => void;
  searchPlaceholder?: string;
  onSearch?: (value: string) => void;
  filterOptions?: FilterOptions;
  onFilterChange?: FilterChangeHandlers;
  selectedFilters?: SelectedFilters;
  dateRange?: DateRange;
  onDateRangeChange?: (range: DateRange | undefined) => void;
  children?: React.ReactNode;
  totalRows?: number;
  filteredRows?: number;
}

export interface DmdVersion {
  dmd_change_master_id: string;
  dmd_sp_gb_name: string;
  tank_plan_master_id: string;
  dmd_remark: string | null;
  dmd_change_name: string | null;
  dmd_change_unit: string | null;
  username: string;
  create_timestamp?: string;
  update_timestamp?: string;
}

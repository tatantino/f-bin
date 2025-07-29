import { type Cell } from '@tanstack/react-table';

export type VisibilityState = Record<string, boolean>;
export type DataChangeHandler<T> = (data: T[]) => void;
export type ValidationResult = string | null;

export interface EditConfig<TData> {
  allowEdit?: boolean;
  formatValue?: (value: string, columnId: keyof TData) => string;
  onDataChange?: DataChangeHandler<TData>;
}

export interface DataTableProps<TData> {
  data: TData[];
  columns: DataGridColumn<TData>[];
  editConfig?: EditConfig<TData>;
  onDataChange?: DataChangeHandler<TData>;
  rowHeight?: number;
  maxHeight?: number;
  className?: string;
  columnVisibility?: VisibilityState;
  onColumnVisibilityChange?: (visibility: VisibilityState) => void;
  isLoading?: boolean;
  columnToggle?: {
    enabled: boolean;
  };
  headerStartContent?: React.ReactNode;
  headerEndContent?: React.ReactNode;

  /**
   * The field name to use as unique row identifier
   * This is critical for maintaining row identity
   */
  idField: keyof TData | ((row: TData, index: number) => string);
}

export interface DataGridColumn<T> {
  key: keyof T | string;
  label: string;
  type?: 'text' | 'select' | 'number' | 'date';
  options?: readonly string[];
  getDynamicOptions?: (row: T) => string[];
  validateValue?: (value: string) => string | null;
  tooltip?: string;
  canFilter?: boolean;
  formatValue?: (value: any) => string;
  width?: number;
  isPinned?: 'left' | 'right';
  meta?: {
    customRenderer?: (
      value: any,
      context?: { rowIndex: number }
    ) => React.ReactNode;
    nonEditable?: boolean;
  };
  valueMap?: {
    valueToDisplay: (value: any) => string;
    displayToValue: (display: string) => any;
  };
}

export interface TableMeta<TData> {
  updateData: (rowId: string, columnId: keyof TData, value: string) => void;
  editingCell: string | undefined;
  editedCells: Record<string, boolean>;
  switchEditingCell: (cell: Cell<TData, unknown>) => void;
  editConfig?: EditConfig<TData>;
}

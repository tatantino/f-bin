import type { MenuAction } from '../components/DropdownMenuButton';

export type Alignment = 'left' | 'center' | 'right';
export type SortDirection = 'asc' | 'desc';

export interface BaseColumn<T> {
  key: keyof T;
  label: string;
  width?: number;
  align?: Alignment;
  className?: string;
}

export interface SortableColumn<T> extends BaseColumn<T> {
  sortable: true;
}

export interface RenderableColumn<T> extends BaseColumn<T> {
  render: (value: T[keyof T], row: T) => React.ReactNode;
}

export type Column<T> = BaseColumn<T> | SortableColumn<T> | RenderableColumn<T>;

export interface SortConfig<T> {
  key: keyof T;
  direction: SortDirection;
}

export type TableAction<T> = MenuAction<T>;

export interface DataTableProps<T extends Record<string, any>> {
  data: T[];
  columns: Column<T>[];
  sortConfig?: SortConfig<T>;
  onSort?: (key: keyof T) => void;
  actions?: TableAction<T>[];
  disabled?: boolean;
  keyExtractor?: (item: T) => string;
  emptyMessage?: string;
  loading?: boolean;
  className?: string;
  compact?: boolean;
}

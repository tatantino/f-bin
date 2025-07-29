import { TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SortableHeader } from '@/components/shared/tables/cells/SortableHeader';
import type { PlanHistoryRecord } from '../../../_shared/types';

type Column = {
  key: keyof PlanHistoryRecord;
  label: string;
  sortable?: boolean;
};

// Table column definitions
const COLUMNS = {
  // Basic info columns
  BASIC: [
    { key: 'tank', label: 'Tank', sortable: true },
    { key: 'RC', label: 'RC', sortable: true },
  ],

  // Schedule columns
  SCHEDULE: [
    { key: 'drain_date_o', label: 'Drain' },
    { key: 'repair_date_o', label: 'Start' },
    { key: 'RTL_date_o', label: 'RTL' },
    { key: 'TL_date_o', label: 'TL' },
    { key: 'GG_date_o', label: 'GG' },
  ],

  // Metadata columns
  META: [
    { key: 'plan_change_hist_timestamp', label: 'Change Date', sortable: true },
    { key: 'plan_version', label: 'Version', sortable: true },
    { key: 'username', label: 'User', sortable: true },
    { key: 'remark_category', label: 'Category', sortable: true },
    { key: 'remark', label: 'Remarks', sortable: true },
  ],
} as const;

/**
 * Renders a single table column header with optional sorting
 */
function TableColumnHeader({
  column,
  sortConfig,
  onSort,
  className,
  rowSpan,
}: {
  column: Column;
  sortConfig?: {
    key: keyof PlanHistoryRecord;
    direction: 'asc' | 'desc';
  };
  onSort?: (key: keyof PlanHistoryRecord) => void;
  className?: string;
  rowSpan?: number;
}) {
  if (column.sortable && sortConfig && onSort) {
    return (
      <TableHead className={className} rowSpan={rowSpan}>
        <SortableHeader
          sortKey={column.key}
          sortConfig={sortConfig}
          onSort={onSort}
        >
          {column.label}
        </SortableHeader>
      </TableHead>
    );
  }

  return (
    <TableHead className={className} rowSpan={rowSpan}>
      {column.label}
    </TableHead>
  );
}

/**
 * Renders a group of column headers
 */
function ColumnGroup({
  columns,
  sortConfig,
  onSort,
  className,
  rowSpan,
}: {
  columns: readonly Column[];
  sortConfig?: {
    key: keyof PlanHistoryRecord;
    direction: 'asc' | 'desc';
  };
  onSort?: (key: keyof PlanHistoryRecord) => void;
  className?: string;
  rowSpan?: number;
}) {
  return columns.map(column => (
    <TableColumnHeader
      key={column.key}
      column={column}
      sortConfig={sortConfig}
      onSort={onSort}
      className={className}
      rowSpan={rowSpan}
    />
  ));
}

/**
 * Header component for the history table with multi-row column groups
 */
export function HistoryTableHeader({
  sortConfig,
  onSort,
}: {
  sortConfig: {
    key: keyof PlanHistoryRecord;
    direction: 'asc' | 'desc';
  };
  onSort: (key: keyof PlanHistoryRecord) => void;
}) {
  return (
    <TableHeader>
      {/* First row */}
      <TableRow className="bg-muted/50">
        {/* Change date column */}
        <TableColumnHeader
          column={COLUMNS.META[0]}
          sortConfig={sortConfig}
          onSort={onSort}
          className="h-7 py-1"
          rowSpan={2}
        />

        {/* Basic info columns */}
        <ColumnGroup
          columns={COLUMNS.BASIC}
          sortConfig={sortConfig}
          onSort={onSort}
          className="h-7 py-1"
          rowSpan={2}
        />

        {/* Schedule changes header */}
        <TableHead className="h-7 border-b py-1 text-center" colSpan={5}>
          Schedule Changes
        </TableHead>

        {/* Metadata columns */}
        <ColumnGroup
          columns={COLUMNS.META.slice(1)}
          sortConfig={sortConfig}
          onSort={onSort}
          className="h-7 py-1"
          rowSpan={2}
        />
      </TableRow>

      {/* Second row with schedule columns */}
      <TableRow className="bg-muted/50">
        <ColumnGroup
          columns={COLUMNS.SCHEDULE}
          className="h-6 py-0.5 text-center"
        />
      </TableRow>
    </TableHeader>
  );
}

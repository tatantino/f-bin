/**
 * Excel-like data table with editable cells and column visibility toggle
 */
'use client';

import { cn } from '@/lib/utils';
import { Table } from '@/components/ui/table';
import { TableHeader } from './components/table-header';
import { DataTableBody } from './components/table-body';
import { ColumnToggle } from './components/column-toggle';
import { useTableSetup } from './hooks/use-table-setup';
import {
  DEFAULT_ROW_HEIGHT,
  DEFAULT_MAX_HEIGHT,
  HEADER_HEIGHT,
  DEFAULT_SKELETON_ROWS,
  TABLE_STYLES,
} from './constants';

import type { DataTableProps, DataGridColumn } from './types';

/**
 * DataTable component that combines data grid functionality with Excel-like editing
 */
export function DataTable<TData extends Record<string, any>>({
  // Data and columns
  data,
  columns,

  // Editing configuration
  editConfig,
  onDataChange,

  // Display configuration
  rowHeight = DEFAULT_ROW_HEIGHT,
  maxHeight = DEFAULT_MAX_HEIGHT,
  className,
  isLoading,

  // Column visibility
  columnVisibility: initialColumnVisibility,
  onColumnVisibilityChange,

  // Feature toggles
  columnToggle,

  // Header content
  headerStartContent,
  headerEndContent,

  // Row identification
  idField,
}: DataTableProps<TData>) {
  // Create a getRowId function based on idField
  const getRowId =
    typeof idField === 'function'
      ? idField
      : (row: TData, index: number) => String(row[idField] ?? `row_${index}`);

  // Use the table setup hook to handle all state management and data processing
  const {
    table,
    filteredData,
    columnVisibility,
    handleColumnVisibilityChange,
  } = useTableSetup({
    data,
    columns,
    editConfig,
    onDataChange,
    initialColumnVisibility,
    onColumnVisibilityChange,
    getRowId,
  });

  // Calculate the table height based on data or loading state
  const containerHeight = Math.min(
    maxHeight,
    (isLoading ? DEFAULT_SKELETON_ROWS : filteredData.length) * rowHeight +
      HEADER_HEIGHT
  );

  return (
    <div className="flex flex-col gap-1">
      <div className={cn(TABLE_STYLES.toolbar, 'justify-between')}>
        <div className="flex items-center gap-2">
          {columnToggle?.enabled && columns.length > 0 && (
            <ColumnToggle
              columns={columns}
              columnVisibility={columnVisibility}
              onColumnVisibilityChange={handleColumnVisibilityChange}
            />
          )}
          {headerStartContent}
        </div>
        <div className="flex items-center gap-2">{headerEndContent}</div>
      </div>

      <div
        className={cn(TABLE_STYLES.container, className)}
        style={{ height: containerHeight }}
      >
        <div className="relative overflow-auto">
          <style jsx global>{`
            .pinned-row td[class*='z-30'] {
              box-shadow: 0 0 4px rgba(0, 0, 0, 0.05);
            }
          `}</style>
          <Table>
            <TableHeader table={table} />
            <DataTableBody
              table={table}
              rowHeight={rowHeight}
              isLoading={isLoading}
            />
          </Table>
        </div>
      </div>
    </div>
  );
}

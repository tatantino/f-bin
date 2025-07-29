'use client';

import React from 'react';
import { type Table, type Row } from '@tanstack/react-table';
import { TableBody, TableCell, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { EditableCell } from './editable-cell';
import { TableSkeleton } from './table-skeleton';
import type { TableMeta } from '../types';

interface TableBodyProps<TData> {
  table: Table<TData>;
  rowHeight: number;
  isLoading?: boolean;
}

function TableRowContent<TData>({
  row,
  rowHeight,
  meta,
}: {
  row: Row<TData>;
  rowHeight: number;
  meta: TableMeta<TData>;
}) {
  const { editConfig, updateData } = meta;

  return (
    <TableRow
      className={cn(
        'group border-b border-border/50',
        'transition-colors duration-150',
        'hover:bg-muted/50',
        row.index % 2 === 0 ? 'bg-card' : 'bg-muted/60 dark:bg-muted/30',
        'pinned-row'
      )}
      data-state={row.getIsSelected() && 'selected'}
      data-row-id={row.id}
      data-row-index={row.index}
    >
      {row.getVisibleCells().map(cell => {
        const isPinned = cell.column.getIsPinned();
        const pinIndex = isPinned ? cell.column.getPinnedIndex() : undefined;

        return (
          <TableCell
            key={cell.id}
            className={cn(
              'border-r border-border/50 p-0 text-sm last:border-r-0',
              isPinned && 'sticky z-30 backdrop-blur-sm bg-background/85',
              isPinned === 'left' && 'left-0',
              isPinned === 'right' && 'right-0',
              !isPinned && 'group-hover:bg-muted/30'
            )}
            style={{
              height: rowHeight,
              width: cell.column.getSize()
                ? `${cell.column.getSize()}px`
                : undefined,
              ...(isPinned === 'left' && pinIndex !== undefined
                ? { left: `${cell.column.getStart(isPinned)}px` }
                : {}),
              ...(isPinned === 'right' && pinIndex !== undefined
                ? { right: `${cell.column.getAfter(isPinned)}px` }
                : {}),
            }}
          >
            <EditableCell
              cell={cell}
              allowEdit={editConfig?.allowEdit}
              formatValue={editConfig?.formatValue}
              onUpdate={updateData}
            />
          </TableCell>
        );
      })}
    </TableRow>
  );
}

export function DataTableBody<TData>({
  table,
  rowHeight,
  isLoading,
}: TableBodyProps<TData>) {
  if (isLoading) {
    return (
      <TableSkeleton
        columns={table.getAllColumns().length}
        rowHeight={rowHeight}
      />
    );
  }

  const rows = table.getRowModel().rows;

  if (rows.length === 0) {
    return (
      <TableBody>
        <TableRow>
          <TableCell
            colSpan={table.getAllColumns().length}
            className="h-32 text-center text-muted-foreground"
          >
            No data available
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }

  const meta = table.options.meta as TableMeta<TData>;

  return (
    <TableBody>
      {rows.map(row => (
        <TableRowContent
          key={row.id}
          row={row}
          rowHeight={rowHeight}
          meta={meta}
        />
      ))}
    </TableBody>
  );
}

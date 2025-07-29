'use client';

import React from 'react';
import { type Table, type ColumnDef } from '@tanstack/react-table';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface TableHeaderProps<TData> {
  table: Table<TData>;
}

function HeaderCell<TData>({
  columnDef,
  hasFilter,
  filterValue,
  onFilterChange,
  column,
}: {
  columnDef: ColumnDef<TData, unknown>;
  hasFilter: boolean;
  filterValue: string;
  onFilterChange: (value: string) => void;
  column: any; // Pass the column object to access pinning state
}) {
  const label = (columnDef.header as string) || '';
  const tooltip = (columnDef.meta as { tooltip?: string })?.tooltip;
  const width = columnDef.size;

  // Check if column is pinned
  const isPinned = column.getIsPinned();
  const pinIndex = isPinned ? column.getPinnedIndex() : undefined;

  return (
    <th
      className={cn(
        'relative border-r border-border/50 p-1.5 last:border-r-0',
        'bg-gradient-to-b from-white/[0.02] via-white/[0.01] to-transparent',
        'group hover:bg-white/[0.02]',
        isPinned && 'sticky z-40 backdrop-blur-sm bg-background/90',
        isPinned === 'left' && 'left-0',
        isPinned === 'right' && 'right-0'
      )}
      style={{
        ...(width ? { width: `${width}px`, minWidth: `${width}px` } : {}),
        ...(isPinned === 'left' && pinIndex !== undefined
          ? { left: `${column.getStart(isPinned)}px` }
          : {}),
        ...(isPinned === 'right' && pinIndex !== undefined
          ? { right: `${column.getAfter(isPinned)}px` }
          : {}),
      }}
    >
      <div className="flex items-center justify-between gap-2">
        <span
          className={cn(
            'block text-[13px] font-medium text-muted-foreground/90',
            'truncate',
            tooltip && 'cursor-help'
          )}
          title={tooltip}
        >
          {label}
        </span>
      </div>

      {hasFilter && (
        <div className="mt-1">
          <Input
            className={cn(
              'h-5 text-[11px]',
              'px-1 py-0',
              'bg-background/40',
              'border-border/40',
              'focus:bg-background/60',
              'focus:border-primary/50 focus:ring-1 focus:ring-primary/20',
              'placeholder:text-muted-foreground/40',
              'transition-all duration-200',
              'group-hover:bg-background/50',
              'group-hover:border-border/50'
            )}
            value={filterValue}
            onChange={e => onFilterChange(e.target.value)}
          />
        </div>
      )}
    </th>
  );
}

export function TableHeader<TData>({ table }: TableHeaderProps<TData>) {
  return (
    <thead
      className={cn(
        'sticky top-0 z-10',
        'before:absolute before:inset-0 before:-z-10',
        'before:backdrop-blur-[8px] before:backdrop-saturate-[1.8]',
        'bg-gradient-to-b from-background/70 via-background/60 to-background/50',
        'supports-[backdrop-filter]:bg-background/40',
        'border-b border-border/50',
        'shadow-[0_2px_4px_rgba(0,0,0,0.08)]',
        'transition-all duration-200'
      )}
    >
      <tr>
        {table.getAllColumns().map(column => (
          <HeaderCell
            key={column.id}
            columnDef={column.columnDef}
            hasFilter={column.getCanFilter()}
            filterValue={(column.getFilterValue() as string) ?? ''}
            onFilterChange={value => column.setFilterValue(value)}
            column={column}
          />
        ))}
      </tr>
    </thead>
  );
}

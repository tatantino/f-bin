'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Columns } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { DataGridColumn } from '../types';

interface ColumnToggleProps<TData> {
  columns: DataGridColumn<TData>[];
  columnVisibility: Record<string, boolean>;
  onColumnVisibilityChange: (visibility: Record<string, boolean>) => void;
}

export function ColumnToggle<TData>({
  columns,
  columnVisibility,
  onColumnVisibilityChange,
}: ColumnToggleProps<TData>) {
  const visibleCount = Object.values(columnVisibility).filter(Boolean).length;
  const hasHiddenColumns = visibleCount < columns.length;

  const toggleColumn = (columnKey: string) => {
    onColumnVisibilityChange({
      ...columnVisibility,
      [columnKey]: !columnVisibility[columnKey],
    });
  };

  const toggleAllColumns = () => {
    const shouldShowAll = hasHiddenColumns;
    const newVisibility = Object.fromEntries(
      columns.map(col => [col.key, shouldShowAll])
    );
    onColumnVisibilityChange(newVisibility);
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            'h-9 gap-1.5 border bg-background pl-3 pr-2 font-normal',
            'min-w-[130px] justify-start',
            hasHiddenColumns && 'text-muted-foreground'
          )}
        >
          <Columns className="h-4 w-4 flex-none text-muted-foreground" />
          <span className="flex-1 text-left">
            {hasHiddenColumns
              ? `${visibleCount}/${columns.length} columns`
              : 'All Columns'}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-56"
        onCloseAutoFocus={e => e.preventDefault()}
      >
        <DropdownMenuLabel className="flex items-center justify-between">
          <span className="text-xs font-normal text-muted-foreground">
            Toggle columns
          </span>
          <Button
            variant="ghost"
            size="sm"
            className="h-7 px-2 text-xs hover:bg-primary/5"
            onClick={e => {
              e.preventDefault();
              e.stopPropagation();
              toggleAllColumns();
            }}
          >
            {hasHiddenColumns ? 'Show all' : 'Hide all'}
          </Button>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {columns.map(column => (
          <DropdownMenuCheckboxItem
            key={column.key as string}
            checked={columnVisibility[column.key as string] !== false}
            onCheckedChange={() => toggleColumn(column.key as string)}
            onSelect={e => {
              e.preventDefault();
              e.stopPropagation();
            }}
            className="gap-2"
          >
            {column.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

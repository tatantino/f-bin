import { TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SortableHeader } from '@/components/shared/tables/cells/SortableHeader';
import { cn } from '@/lib/utils';
import type { Column, SortConfig } from '../types';

interface HeaderProps<T extends Record<string, any>> {
  columns: Column<T>[];
  sortConfig?: SortConfig<T>;
  onSort?: (key: keyof T) => void;
  showActions?: boolean;
}

export function Header<T extends Record<string, any>>({
  columns,
  sortConfig,
  onSort,
  showActions = true,
}: HeaderProps<T>) {
  const renderColumnHeader = (column: Column<T>) => {
    const content = <span className="text-sm font-medium">{column.label}</span>;

    if (!('sortable' in column) || !sortConfig || !onSort) {
      return content;
    }

    return (
      <SortableHeader
        sortKey={String(column.key)}
        sortConfig={{
          key: String(sortConfig.key),
          direction: sortConfig.direction,
        }}
        onSort={() => onSort(column.key)}
      >
        {content}
      </SortableHeader>
    );
  };

  return (
    <TableHeader className="border-b bg-muted/50">
      <TableRow className="hover:bg-muted/60">
        {columns.map(column => (
          <TableHead
            key={String(column.key)}
            className={cn(
              'h-10 py-2',
              column.width && `w-[${column.width}px]`,
              column.align === 'center' && 'text-center',
              column.align === 'right' && 'text-right',
              column.className
            )}
          >
            {renderColumnHeader(column)}
          </TableHead>
        ))}
        {showActions && (
          <TableHead className="h-10 w-[100px] py-2 text-center">
            Actions
          </TableHead>
        )}
      </TableRow>
    </TableHeader>
  );
}

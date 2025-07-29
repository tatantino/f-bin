import { TableCell, TableRow as TableRowBase } from '@/components/ui/table';
import { DropdownMenuButton } from './DropdownMenuButton';
import type { Column, TableAction } from '../types';
import { cn } from '@/lib/utils';

interface RowProps<T extends Record<string, any>> {
  data: T;
  columns: Column<T>[];
  actions?: TableAction<T>[];
  disabled?: boolean;
  className?: string;
}

export function Row<T extends Record<string, any>>({
  data,
  columns,
  actions,
  disabled,
  className,
}: RowProps<T>) {
  const renderCell = (column: Column<T>) => {
    const value = data[column.key];
    if ('render' in column) {
      return column.render(value, data);
    }
    return String(value ?? '-');
  };

  return (
    <TableRowBase
      className={cn(
        'transition-colors hover:bg-muted/30',
        'focus:bg-muted/40',
        className
      )}
    >
      {columns.map(column => (
        <TableCell
          key={String(column.key)}
          className={cn(
            'py-2.5',
            column.align === 'center' && 'text-center',
            column.align === 'right' && 'text-right',
            column.className
          )}
        >
          {renderCell(column)}
        </TableCell>
      ))}
      {actions?.length ? (
        <TableCell className="w-[100px] py-2.5">
          <DropdownMenuButton
            data={data}
            actions={actions}
            disabled={disabled}
          />
        </TableCell>
      ) : null}
    </TableRowBase>
  );
}

import { Table, TableBody } from '@/components/ui/table';
import { Header } from './components/Header';
import { Row } from './components/Row';
import { cn } from '@/lib/utils';
import { TableSkeleton } from './components/TableSkeleton';
import type { DataTableProps } from './types';

const DEFAULT_KEY_EXTRACTOR = (item: any) => String(item.id);
const DEFAULT_EMPTY_MESSAGE = 'No data available';

export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  sortConfig,
  onSort,
  actions,
  disabled,
  keyExtractor = DEFAULT_KEY_EXTRACTOR,
  emptyMessage = DEFAULT_EMPTY_MESSAGE,
  loading,
  className,
  compact,
}: DataTableProps<T>) {
  if (loading) {
    return (
      <TableSkeleton columns={columns} showActions={Boolean(actions?.length)} />
    );
  }

  if (!data.length) {
    return (
      <div className="flex h-[200px] items-center justify-center text-muted-foreground">
        {emptyMessage}
      </div>
    );
  }

  const showActions = Boolean(actions?.length);

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-md border bg-card shadow-sm',
        className
      )}
    >
      <Table>
        <Header
          columns={columns}
          sortConfig={sortConfig}
          onSort={onSort}
          showActions={showActions}
        />
        <TableBody
          className={cn('divide-y divide-border', compact && 'divide-y-0')}
        >
          {data.map(item => (
            <Row
              key={keyExtractor(item)}
              data={item}
              columns={columns}
              actions={actions}
              disabled={disabled}
              className="duration-200 animate-in fade-in slide-in-from-left-2"
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

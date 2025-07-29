import { ArrowUp, ArrowDown, ArrowUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SortableHeaderProps<T extends string> {
  children: React.ReactNode;
  sortKey: T;
  sortConfig: {
    key: T;
    direction: 'asc' | 'desc';
  };
  onSort: (key: T) => void;
}

export function SortableHeader<T extends string>({
  children,
  sortKey,
  sortConfig,
  onSort,
}: SortableHeaderProps<T>) {
  const isSorted = sortConfig.key === sortKey;

  return (
    <div
      className={cn(
        'group flex cursor-pointer items-center gap-1 transition-colors duration-200',
        'hover:text-primary',
        isSorted && 'font-medium text-primary'
      )}
      onClick={() => onSort(sortKey)}
    >
      {children}
      <div
        className={cn(
          'transition-transform duration-200',
          isSorted
            ? 'text-primary'
            : 'text-muted-foreground group-hover:text-primary'
        )}
      >
        {isSorted ? (
          sortConfig.direction === 'asc' ? (
            <ArrowUp className="h-4 w-4 duration-200 animate-in zoom-in" />
          ) : (
            <ArrowDown className="h-4 w-4 duration-200 animate-in zoom-in" />
          )
        ) : (
          <ArrowUpDown className="h-4 w-4 opacity-70 group-hover:opacity-100" />
        )}
      </div>
    </div>
  );
}

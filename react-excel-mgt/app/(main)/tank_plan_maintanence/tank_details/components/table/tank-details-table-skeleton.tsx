'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { tankTableColumns } from '../../config';

export function TankDetailsTableSkeleton() {
  // Generate columns based on the actual table columns config
  const columnCount = tankTableColumns.length;
  // Create rows for the skeleton
  const rowCount = 8;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Skeleton className="h-9 w-36" /> {/* Header/filter */}
        <div className="flex items-center gap-2">
          <Skeleton className="h-9 w-28" /> {/* Column toggle */}
          <Skeleton className="h-9 w-28" /> {/* Row filter */}
        </div>
      </div>

      <div className="overflow-hidden rounded-md border">
        {/* Table header */}
        <div className="flex items-center border-b bg-muted/50 p-2">
          {Array.from({ length: columnCount }).map((_, index) => (
            <div key={`header-${index}`} className="flex-1 px-4 py-2">
              <Skeleton className="h-5 w-24" />
            </div>
          ))}
        </div>

        {/* Table rows */}
        {Array.from({ length: rowCount }).map((_, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            className="flex items-center border-b p-2 last:border-0"
          >
            {Array.from({ length: columnCount }).map((_, colIndex) => (
              <div
                key={`cell-${rowIndex}-${colIndex}`}
                className="flex-1 px-4 py-2"
              >
                <Skeleton className="h-5 w-full max-w-[120px]" />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Table stats */}
      <div className="flex items-center justify-between">
        <Skeleton className="h-5 w-48" /> {/* Row count */}
        <Skeleton className="h-5 w-36" /> {/* Pagination */}
      </div>
    </div>
  );
}

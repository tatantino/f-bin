'use client';

import { TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';
import { DEFAULT_SKELETON_ROWS } from '../constants';

interface TableSkeletonProps {
  columns: number;
  rows?: number;
  rowHeight: number;
}

export function TableSkeleton({
  columns,
  rows = DEFAULT_SKELETON_ROWS,
  rowHeight,
}: TableSkeletonProps) {
  return (
    <TableBody>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <TableRow key={rowIndex} style={{ height: rowHeight }}>
          {Array.from({ length: columns }).map((_, colIndex) => (
            <TableCell key={colIndex} className="px-4 py-2">
              <Skeleton className="h-4 w-full" />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
}

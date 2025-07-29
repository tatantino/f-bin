'use client';

import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';
import { LAYOUT_CONFIG } from '../config';

/**
 * Table area skeleton component
 * Specifically for displaying the table section during data loading
 */
export function TableSkeleton() {
  return (
    <motion.div {...LAYOUT_CONFIG.animations.table} className="space-y-4">
      <div className="flex justify-between">
        <Skeleton className="h-9 w-[120px]" /> {/* Add row button */}
        <Skeleton className="h-9 w-[180px]" /> {/* Table search/filter */}
      </div>

      {/* Table header */}
      <div className="rounded-md border">
        <div className="border-b bg-muted/50 px-4 py-2">
          <div className="flex items-center">
            <Skeleton className="h-6 w-6 rounded-sm" /> {/* Checkbox */}
            <div className="ml-2 grid w-full grid-cols-6 gap-4">
              <Skeleton className="h-5 w-24" /> {/* Column title */}
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-5 w-24" />
            </div>
          </div>
        </div>

        {/* Table rows */}
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="border-b px-4 py-3 last:border-0">
            <div className="flex items-center">
              <Skeleton className="h-4 w-4 rounded-sm" /> {/* Checkbox */}
              <div className="ml-2 grid w-full grid-cols-6 gap-4">
                <Skeleton className="h-5 w-full max-w-[120px]" />
                <Skeleton className="h-5 w-full max-w-[120px]" />
                <Skeleton className="h-5 w-full max-w-[120px]" />
                <Skeleton className="h-5 w-full max-w-[120px]" />
                <Skeleton className="h-5 w-full max-w-[120px]" />
                <Skeleton className="h-5 w-full max-w-[120px]" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex items-center justify-between">
        <Skeleton className="h-5 w-32" /> {/* Page info */}
        <div className="flex gap-2">
          <Skeleton className="h-9 w-9" /> {/* Previous button */}
          <Skeleton className="h-9 w-9" /> {/* Next button */}
        </div>
      </div>
    </motion.div>
  );
}

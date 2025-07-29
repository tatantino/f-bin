'use client';

import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';
import { LAYOUT_CONFIG } from '../config';

/**
 * Skeleton component for demand change page loading state
 * Maintains consistent layout with the final loaded state for better UX
 */
export function DmdChangeSkeleton() {
  return (
    <motion.div
      {...LAYOUT_CONFIG.animations.content}
      className={LAYOUT_CONFIG.container}
    >
      {/* Page header skeleton */}
      <div className="flex items-center justify-between border-b px-4 py-3">
        <div className="flex items-center gap-3">
          <Skeleton className="h-8 w-8 rounded-full" /> {/* Back button */}
          <div className="space-y-2">
            <Skeleton className="h-7 w-56" /> {/* Title */}
            <Skeleton className="h-4 w-72" /> {/* Description */}
          </div>
        </div>
        <Skeleton className="h-9 w-[120px]" /> {/* Save button */}
      </div>

      {/* Main content area */}
      <div className={LAYOUT_CONFIG.tableContainer}>
        <div className="flex flex-col gap-4">
          {/* Version selector skeleton */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Skeleton className="h-5 w-36" /> {/* Label */}
              <Skeleton className="h-10 w-[280px]" /> {/* Dropdown */}
            </div>
          </div>

          {/* Table skeleton */}
          <div className="space-y-4">
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
          </div>
        </div>
      </div>
    </motion.div>
  );
}

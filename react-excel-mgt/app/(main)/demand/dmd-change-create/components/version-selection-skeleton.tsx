'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { motion } from 'framer-motion';
import { LAYOUT_CONFIG } from '../config/constants';

/**
 * Skeleton component for version selection page
 * Displayed when user has not yet selected a DMD version
 */
export function VersionSelectionSkeleton() {
  return (
    <motion.div
      {...LAYOUT_CONFIG.animations.content}
      className={LAYOUT_CONFIG.container}
    >
      {/* Page header skeleton */}
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Skeleton className="h-5 w-5 rounded-full" />
          <div className="flex flex-row gap-4">
            <Skeleton className="h-8 w-[320px]" />
            <div className="h-6 w-px shrink-0 bg-border" />
            <Skeleton className="mt-1 h-6 w-[260px]" />
          </div>
        </div>
        <Skeleton className="h-6 w-6 rounded-full opacity-70" />
      </div>

      {/* Content area */}
      <div className="p-6">
        <div className="space-y-6">
          {/* Version selection controls */}
          <div className="flex items-center gap-4">
            <Skeleton className="h-6 w-[200px]" />
            <Skeleton className="h-10 w-[280px] rounded-md" />
          </div>

          {/* Empty state prompt */}
          <div className="flex h-[300px] items-center justify-center rounded-md border border-dashed border-slate-200">
            <Skeleton className="h-8 w-[210px]" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

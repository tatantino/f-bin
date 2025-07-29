'use client';

import { Suspense } from 'react';
import { LoadingSpinner } from '@/components/shared/feedbacks/LoadingSpinner';
import { ChangeHistoryContent } from './components';

/**
 * Change history page with suspense for async data loading
 */
export default function ChangeHistoryPage() {
  return (
    <div className="flex h-full flex-col">
      <Suspense fallback={<LoadingFallback />}>
        <ChangeHistoryContent />
      </Suspense>
    </div>
  );
}

function LoadingFallback() {
  return (
    <div className="flex h-full items-center justify-center">
      <LoadingSpinner />
    </div>
  );
}

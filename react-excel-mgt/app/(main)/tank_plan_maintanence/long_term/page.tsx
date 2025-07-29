'use client';

import { Suspense } from 'react';
import { LoadingSpinner } from '@/components/shared/feedbacks/LoadingSpinner';
import { LongTermContent } from './components/long-term-content';

export default function LongTermPlan() {
  return (
    <Suspense
      fallback={
        <div className="flex h-full items-center justify-center">
          <LoadingSpinner />
        </div>
      }
    >
      <LongTermContent />
    </Suspense>
  );
}

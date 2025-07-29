'use client';

import { Suspense } from 'react';
import { LoadingSpinner } from '@/components/shared/feedbacks/LoadingSpinner';
import {
  TankDetailsHeader,
  TankDetailsTable,
  TankDetailsTableSkeleton,
} from './components';
import { useTankDetailsPage } from './hooks';

function LoadingState() {
  return (
    <div className="flex h-[calc(100vh-200px)] items-center justify-center">
      <LoadingSpinner />
    </div>
  );
}

export default function TankDetailsPage() {
  const {
    data,
    tableKey,
    hasChanges,
    isLoadingData,
    handleDataChange,
    handleImportSuccess,
    handleSaveSuccess,
    saveChanges,
  } = useTankDetailsPage();

  if (isLoadingData) {
    return (
      <div className="container mx-auto">
        <LoadingState />
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <div className="space-y-4">
        <TankDetailsHeader
          data={data}
          hasChanges={hasChanges}
          onDataChange={handleDataChange}
          handleImportSuccess={handleImportSuccess}
          handleSaveSuccess={handleSaveSuccess}
          saveChanges={saveChanges}
        />
        <Suspense fallback={<TankDetailsTableSkeleton />}>
          <TankDetailsTable
            data={data}
            onDataChange={handleDataChange}
            key={tableKey}
          />
        </Suspense>
      </div>
    </div>
  );
}

'use client';

import { Suspense } from 'react';
import { PageTitle } from '@/components/shared/layouts/PageTitle';
import { BackLink } from '@/components/shared/navigation';
import { ROUTES } from '@/app/config/routes';
import { SizeAssignmentCard } from '../shared/size-assignment';
import { BaseDataCard } from './components';
import { SizeAssignmentCardSkeleton, BaseDataCardSkeleton } from './Skeletons';
import { usePlanningData } from './hooks';
import { PAGE_CONFIG } from './config';
import { ErrorAlert } from '@/components/shared/feedbacks/ErrorAlert';

/**
 * Demand Change Proposal Content
 *
 * Shows base data card and size assignment interface for demand changes
 */
function DemandChangeProposalContent() {
  // Fetch data with error handling
  const {
    loading,
    error,
    masterId,
    demandChangeData,
    genGroupIsopipeMappings,
  } = usePlanningData();

  return (
    <div className="container mx-auto">
      <PageTitle
        title={PAGE_CONFIG.title}
        icon={<BackLink to={ROUTES.DMD_CHANGE_LIST} />}
        tooltip={PAGE_CONFIG.tooltip}
      />

      <div className="mx-auto space-y-6 p-4">
        {!masterId ? (
          <ErrorAlert message="Missing demand change master ID parameter" />
        ) : loading ? (
          <>
            <BaseDataCardSkeleton />
            <SizeAssignmentCardSkeleton />
          </>
        ) : error ? (
          <ErrorAlert message={error.message} />
        ) : (
          <>
            <BaseDataCard demandChangeData={demandChangeData} />
            <SizeAssignmentCard
              demandChangeData={demandChangeData}
              genGroupIsopipeMappings={genGroupIsopipeMappings}
            />
          </>
        )}
      </div>
    </div>
  );
}

/**
 * Demand Change Proposal Page
 *
 * Wraps content in Suspense boundary for useSearchParams()
 */
export default function DemandChangeProposalPage() {
  return (
    <Suspense
      fallback={<div className="container mx-auto p-4">Loading...</div>}
    >
      <DemandChangeProposalContent />
    </Suspense>
  );
}

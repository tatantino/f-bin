'use client';

/**
 * Composition override page for managing tank composition override settings
 */
import { PageTitle } from '@/components/shared/layouts';
import { ErrorBoundary } from '@/components/shared/feedbacks';
import { CompositionOverrideTable } from './components';
import { PAGE_TITLE, PAGE_DESCRIPTION, TOOLTIP_CONFIG } from './config';

export default function CompositionOverridePage() {
  return (
    <div className="container mx-auto">
      <div className="space-y-4">
        {/* Header with page title */}
        <PageTitle
          title={PAGE_TITLE}
          description={PAGE_DESCRIPTION}
          tooltip={TOOLTIP_CONFIG}
        />

        {/* Table container with error boundary */}
        <ErrorBoundary
          fallback={
            <div className="p-4 rounded-md bg-red-50 border border-red-200 text-red-800">
              <h3 className="text-lg font-medium mb-2">Error</h3>
              <p>
                Failed to load composition override data. Please try refreshing
                the page or contact support if the issue persists.
              </p>
            </div>
          }
        >
          <CompositionOverrideTable />
        </ErrorBoundary>
      </div>
    </div>
  );
}

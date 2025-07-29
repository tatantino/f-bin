/**
 * Tank plan details page with data editing capabilities
 */
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { BackLink } from '../_shared/components/back-link';
import { RefreshCw } from 'lucide-react';
import { CompactVersionInfo } from '../_feature/plan-version';
import { PlanDetailsTable } from './components/PlanDetailsTable';
import { ValidationDialog } from '../_feature/plan-validation/validation-dialog';
import { usePlanPage } from './hooks/usePlanPage';
import { PageTitle } from '@/components/shared/layouts/PageTitle';
import { PAGE_TITLE, PAGE_DESCRIPTION, getTooltipContent } from './config';

// Error display component
function ErrorDisplay({
  message,
  onRetry,
}: {
  message?: string;
  onRetry: () => void;
}) {
  return (
    <div className="mx-4 my-2 rounded-md bg-red-50 p-3 text-sm text-red-700">
      <div className="flex items-center justify-between">
        <span>{message || 'An error occurred'}</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={onRetry}
          className="h-7 px-2 text-red-700 hover:bg-red-100 hover:text-red-800"
        >
          <RefreshCw className="mr-1 h-3 w-3" />
          Retry
        </Button>
      </div>
    </div>
  );
}

// Empty state display
function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex h-full flex-col items-center justify-center gap-2"
    >
      <p className="text-sm text-muted-foreground">No plan data available</p>
      <p className="text-xs text-muted-foreground">
        Try adjusting the filters or loading a different plan
      </p>
    </motion.div>
  );
}

export default function PlanDetailsPage() {
  const planId = useSearchParams().get('id');
  const {
    data,
    queryError,
    mutationError,
    hasChanges,
    loadingState,
    showValidateDialog,
    validationSteps,
    validationErrors,
    isValidating,
    isSaving,
    refreshData,
    handleExport,
    handleDataChange,
    handleSaveClick,
    handleConfirmSave,
    setShowValidateDialog,
  } = usePlanPage({ planId });

  const hasError = queryError || mutationError;
  const errorMessage = queryError?.message || mutationError?.message;
  const hasData = data.length > 0;
  const showEmptyState = !loadingState.isLoading && !hasData;

  return (
    <>
      {/* Header with title */}
      <PageTitle
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        tooltip={{ content: getTooltipContent() }}
        icon={<BackLink />}
      />

      {/* Error display */}
      {hasError && (
        <ErrorDisplay message={errorMessage} onRetry={refreshData} />
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
        className="flex h-full flex-col"
      >
        {/* Main content area */}
        <div className="min-h-0 flex-1 mx-2">
          {planId && <CompactVersionInfo versionId={planId} />}

          <div className="m-2">
            <AnimatePresence mode="wait">
              {hasData ? (
                <PlanDetailsTable
                  data={data}
                  onDataChange={handleDataChange}
                  hasChanges={hasChanges}
                  isLoading={loadingState.isLoading}
                  isExporting={loadingState.states.isExporting}
                  onSave={handleSaveClick}
                  onExport={handleExport}
                />
              ) : (
                showEmptyState && <EmptyState />
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Validation dialog */}
      <ValidationDialog
        open={showValidateDialog}
        onOpenChange={setShowValidateDialog}
        validationSteps={validationSteps}
        errors={validationErrors}
        isValidating={isValidating}
        isSaving={isSaving}
        onConfirmSave={handleConfirmSave}
      />
    </>
  );
}

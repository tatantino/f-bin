'use client';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { motion, AnimatePresence } from 'framer-motion';
import { Suspense } from 'react';
import { ROUTES } from '@/app/config/routes';
import { PageTitle } from '@/components/shared/layouts/PageTitle';
import { BackLink } from '@/components/shared/navigation';
import { IconTextButton } from '@/components/shared/buttons';
import {
  SaveRemarkDialog,
  VersionSelectionSkeleton,
  DmdChangeTable,
  VersionEditor,
} from './components';
import { LAYOUT_CONFIG, PAGE_CONFIG } from './config';
import { useDmdChange } from './hooks';

/**
 * Error message component
 */
function ErrorMessage({ message }: { message: string }) {
  return (
    <Alert variant="destructive" className="mx-4 mt-4">
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}

/**
 * Empty state component for when no version is selected
 */
function EmptyStatePrompt() {
  return (
    <motion.div
      key="no-version"
      {...LAYOUT_CONFIG.animations.table}
      className="flex h-[300px] items-center justify-center rounded-md border border-dashed p-8"
    >
      <p className="text-center text-lg">
        Please select a Baseline DMD Version to start
      </p>
    </motion.div>
  );
}

/**
 * Demand Change Creation Page
 * Main entry component for creating demand changes
 */
export default function DmdChangeCreatePage() {
  const {
    // Data state
    data,
    versionInfo,

    // Derived state
    hasSelectedVersion,
    canSave,
    isLoading,

    // UI state
    loadError,
    showRemarkDialog,

    // Data actions
    handleDataChange,
    handleVersionChange,

    // UI actions
    handleSaveClick,
    handleSaveConfirm,
    handleDialogClose,
  } = useDmdChange();

  // Render main content
  const renderMainContent = () => (
    <div className={LAYOUT_CONFIG.tableContainer}>
      <div className="flex flex-col gap-4">
        {/* Version selector component */}
        <VersionEditor
          versionInfo={versionInfo}
          onChange={handleVersionChange}
        />

        {/* Table or empty state based on version selection */}
        <AnimatePresence mode="wait">
          {hasSelectedVersion ? (
            <motion.div
              key={versionInfo?.dmd_sp_gb_name || 'empty'}
              {...LAYOUT_CONFIG.animations.table}
            >
              <DmdChangeTable
                data={data}
                onChange={handleDataChange}
                versionInfo={versionInfo}
              />
            </motion.div>
          ) : (
            <EmptyStatePrompt />
          )}
        </AnimatePresence>
      </div>
    </div>
  );

  return (
    <Suspense fallback={<VersionSelectionSkeleton />}>
      <motion.div
        {...LAYOUT_CONFIG.animations.content}
        className={LAYOUT_CONFIG.container}
      >
        {/* Page header */}
        <PageTitle
          title={PAGE_CONFIG.title}
          description={PAGE_CONFIG.description}
          tooltip={PAGE_CONFIG.tooltip}
          icon={<BackLink to={ROUTES.DMD_CHANGE_LIST} />}
          actions={
            canSave && (
              <IconTextButton
                action="validateAndSave"
                onClick={handleSaveClick}
                disabled={!canSave}
                isLoading={isLoading}
              />
            )
          }
        />

        {/* Error display */}
        {loadError && <ErrorMessage message={loadError} />}

        {/* Main content area */}
        {renderMainContent()}

        {/* Save remark dialog */}
        <SaveRemarkDialog
          open={showRemarkDialog}
          onClose={handleDialogClose}
          onConfirm={handleSaveConfirm}
          isLoading={isLoading}
        />
      </motion.div>
    </Suspense>
  );
}

'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { motion, AnimatePresence } from 'framer-motion';
import { PageTitle } from '@/components/shared/layouts/PageTitle';
import { BackLink } from '@/components/shared/navigation';
import { IconTextButton } from '@/components/shared/buttons';
import { ROUTES } from '@/app/config/routes';
import { DmdChangeTable } from './components/dmd-change-table';
import { SaveRemarkDialog } from './components/save-remark-dialog';
import { VersionEditor } from './components/version-editor';
import { DmdChangeSkeleton } from './components/dmd-change-skeleton';
import { LAYOUT_CONFIG } from './config';
import { useDmdChange } from './hooks/useDmdChange';

/**
 * Error message component
 */
function ErrorMessage({ message }: { message: string }) {
  return (
    <Alert variant="destructive" className="m-4">
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}

/**
 * Component that gets the masterId from URL params
 */
function DmdChangeEditRouter() {
  const searchParams = useSearchParams();
  const masterId = searchParams.get('dmd_change_master_id');

  if (!masterId) {
    return (
      <ErrorMessage message="No demand change ID provided. Please select a demand change to edit." />
    );
  }

  return <DmdChangeContent masterId={masterId} />;
}

/**
 * Demand Change Edit Page
 * Main entry component for editing existing demand changes
 */
export default function DmdChangeEditPage() {
  return (
    <Suspense fallback={<DmdChangeSkeleton />}>
      <DmdChangeEditRouter />
    </Suspense>
  );
}

/**
 * Content component that renders the edit interface
 */
function DmdChangeContent({ masterId }: { masterId: string }) {
  const {
    data,
    versionInfo,
    hasChanges,
    loadingState,
    loadError,
    showRemarkDialog,
    setData: onDataChange,
    onUnitChange,
    onSave,
    onConfirmSave,
    setShowRemarkDialog,
  } = useDmdChange(masterId);

  if (loadError) {
    return <ErrorMessage message={loadError.message} />;
  }

  if (loadingState.isLoading || !versionInfo) {
    return <DmdChangeSkeleton />;
  }

  const canSave = !!data.length && hasChanges && !loadingState.isLoading;

  return (
    <motion.div
      {...LAYOUT_CONFIG.animations.content}
      className={LAYOUT_CONFIG.container}
    >
      {/* Page title area */}
      <PageTitle
        title="Edit Demand Change"
        description="Edit demand change details"
        tooltip={{
          content: (
            <>
              <h3 className="font-medium leading-none">
                About Demand Change Editor
              </h3>
              <div className="pt-2 text-sm text-muted-foreground">
                <p>Key features:</p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Edit Demand Change details directly in the table
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Update unit settings
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Save changes with remarks
                  </li>
                </ul>
              </div>
            </>
          ),
        }}
        icon={<BackLink to={ROUTES.DMD_CHANGE_LIST} />}
        actions={
          <IconTextButton
            action="validateAndSave"
            onClick={onSave}
            disabled={!canSave}
            isLoading={loadingState.isSaving}
          />
        }
      />

      {/* Main content area */}
      <div className={LAYOUT_CONFIG.tableContainer}>
        <div className="flex flex-col gap-4">
          {/* Version and unit selector */}
          <VersionEditor
            versionInfo={versionInfo}
            onUnitChange={onUnitChange}
          />

          {/* Data table (with animation) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={versionInfo?.dmd_sp_gb_name || 'default-version-key'}
              {...LAYOUT_CONFIG.animations.table}
            >
              <DmdChangeTable
                data={data}
                onDataChange={onDataChange}
                versionInfo={versionInfo}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Save remark dialog */}
      <SaveRemarkDialog
        open={showRemarkDialog}
        onClose={() => setShowRemarkDialog(false)}
        onConfirm={onConfirmSave}
        isLoading={loadingState.isSaving}
      />
    </motion.div>
  );
}

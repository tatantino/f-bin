/**
 * Main content component for long-term plan page
 */
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { LongTermUpload } from './long-term-upload';
import { LongTermDataTable } from './long-term-data-table';
import { LongTermPageTitle } from './long-term-page-title';
import { ValidationDialog } from '../../_feature/plan-validation/validation-dialog';
import { useLongTermPlan } from '../hooks/use-long-term-plan';

export function LongTermContent() {
  const {
    data,
    errors,
    showTable,
    loadingState,
    validationSteps,
    validationErrors,
    showValidateDialog,
    showConfirmSave,
    isValidating,
    isSaving,
    isExporting,
    newVersionInfo,
    setNewVersionInfo,
    setData,
    clearErrors,
    handleSaveClick,
    handleExport,
    handleFileUpload,
    setShowValidateDialog,
    setShowConfirmSave,
    handleConfirmSave,
    setShowTable,
  } = useLongTermPlan();

  const handleDialogOpenChange = (open: boolean) => {
    if (!open) {
      showValidateDialog && setShowValidateDialog(false);
      showConfirmSave && setShowConfirmSave(false);
    }
  };

  const handleReUpload = () => {
    setShowTable(false);
    setData([]);
    clearErrors();
  };

  const pageTitle = <LongTermPageTitle />;

  const validationDialog = (
    <ValidationDialog
      open={showValidateDialog || showConfirmSave}
      onOpenChange={handleDialogOpenChange}
      validationSteps={validationSteps}
      errors={validationErrors}
      isValidating={isValidating}
      isSaving={isSaving}
      onConfirmSave={showConfirmSave ? handleConfirmSave : undefined}
    />
  );

  const content = !showTable ? (
    <div className="flex-none pt-12">
      <LongTermUpload
        onFileSelect={handleFileUpload}
        isLoading={loadingState.isLoading}
        errors={errors}
        onErrorClose={clearErrors}
      />
    </div>
  ) : (
    <div className="flex h-full flex-col gap-4">
      <LongTermDataTable
        data={data}
        errors={errors}
        onDataChange={setData}
        newVersionInfo={newVersionInfo}
        onVersionChange={setNewVersionInfo}
        onSave={handleSaveClick}
        onExport={handleExport}
        onReUpload={handleReUpload}
        isLoading={loadingState.isLoading}
        isSaving={isSaving}
        isExporting={isExporting}
      />
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
      className="flex h-full flex-col"
    >
      {pageTitle}

      <div className="min-h-0 flex-1">
        <AnimatePresence mode="wait">{content}</AnimatePresence>
      </div>

      {validationDialog}
    </motion.div>
  );
}

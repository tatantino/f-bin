/**
 * Weekly plan creation page with data editing capabilities
 */
'use client';

import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { PageTitle } from '@/components/shared/layouts/PageTitle';
import { HorizontalVersionEditor } from '../_feature/plan-version/horizontal-version-editor';
import { useWeeklyPlan } from './hooks';
import { WeeklyTable } from './components/WeeklyTable';
import { ValidationDialog } from '../_feature/plan-validation/validation-dialog';
import { PAGE_CONFIG, ANIMATIONS, LAYOUT_CLASSES } from './config';

// Tooltip content component
function TooltipContent() {
  const { features } = PAGE_CONFIG.tooltip;

  return (
    <>
      <p className="text-sm text-muted-foreground">
        Create weekly tank plans. You can:
      </p>
      <ul className="text-sm text-muted-foreground">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 pb-1">
            <span className="h-1 w-1 rounded-full bg-primary" />
            {feature}
          </li>
        ))}
      </ul>
    </>
  );
}

function WeeklyPlanContent() {
  const searchParams = useSearchParams();
  const planId = searchParams.get('id');

  const {
    data,
    setData: handleDataChange,
    versionInfo,
    newVersionInfo,
    loadingState,
    showValidateDialog,
    setShowValidateDialog,
    showConfirmSave,
    setShowConfirmSave,
    validationSteps,
    validationErrors,
    handleSaveClick: onSave,
    handleConfirmSave: onConfirmSave,
    handleExport: onExport,
    hasChanges,
    handleVersionChange: onVersionChange,
  } = useWeeklyPlan(planId);

  const { title, description, tooltip } = PAGE_CONFIG;

  const tooltipProps = {
    title: tooltip.title,
    content: <TooltipContent />,
  };

  return (
    <motion.div {...ANIMATIONS.content} className={LAYOUT_CLASSES.container}>
      <PageTitle
        title={title}
        description={description}
        tooltip={tooltipProps}
      />

      {/* Version Editor */}
      {versionInfo && newVersionInfo && (
        <div className="px-4 pt-2">
          <HorizontalVersionEditor
            newVersionInfo={newVersionInfo}
            onVersionChange={onVersionChange}
            parentVersion={versionInfo}
            type="Weekly"
          />
        </div>
      )}

      <WeeklyTable
        data={data}
        onDataChange={handleDataChange}
        onSave={onSave}
        onExport={onExport}
        loadingState={loadingState}
        hasChanges={hasChanges}
      />

      {/* Validation dialog */}
      <ValidationDialog
        open={showValidateDialog || showConfirmSave}
        onOpenChange={isOpen => {
          if (!isOpen) {
            setShowValidateDialog(false);
            setShowConfirmSave(false);
          }
        }}
        validationSteps={validationSteps}
        errors={validationErrors}
        isValidating={loadingState.states.isValidating}
        isSaving={loadingState.states.isSaving}
        onConfirmSave={showConfirmSave ? onConfirmSave : undefined}
      />
    </motion.div>
  );
}

export default function WeeklyPlanPage() {
  return <WeeklyPlanContent />;
}

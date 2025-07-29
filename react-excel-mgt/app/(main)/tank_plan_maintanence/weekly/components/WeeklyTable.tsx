/**
 * Table for displaying and editing weekly plan data
 */
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { LoadingSpinner } from '@/components/shared/feedbacks/LoadingSpinner';
import { IconTextButton } from '@/components/shared/buttons/IconTextButton';
import { FilteredPlanDataTable } from '../../_shared';
import { ANIMATIONS, LAYOUT_CLASSES, getTableColumns } from '../config';
import type { TankPlanDetailData } from '../../_shared/types';
import type { LoadingState } from '../types';

// Action buttons component
interface ActionButtonsProps {
  onSave: () => void;
  onExport: () => void;
  loadingState: LoadingState;
  hasData: boolean;
  hasChanges: boolean;
}

function ActionButtons({
  onSave,
  onExport,
  loadingState,
  hasData,
  hasChanges,
}: ActionButtonsProps) {
  const {
    isLoading,
    states: { isSaving, isExporting },
  } = loadingState;

  return (
    <div className="flex items-center gap-3">
      <IconTextButton
        action="validateAndSave"
        onClick={onSave}
        disabled={isLoading || !hasData}
        isLoading={isSaving}
      />

      <IconTextButton
        action="exportExcel"
        onClick={onExport}
        disabled={isLoading || !hasData}
        isLoading={isExporting}
      />
    </div>
  );
}

interface WeeklyTableProps {
  data: TankPlanDetailData[];
  onDataChange: (data: TankPlanDetailData[]) => void;
  onSave: () => void;
  onExport: () => void;
  loadingState: LoadingState;
  hasChanges: boolean;
}

export function WeeklyTable({
  data,
  onDataChange,
  onSave,
  onExport,
  loadingState,
  hasChanges,
}: WeeklyTableProps) {
  const columns = getTableColumns();
  const hasData = data.length > 0;

  return (
    <div className={LAYOUT_CLASSES.tableContainer}>
      <AnimatePresence mode="wait">
        {hasData ? (
          <motion.div
            key="table"
            {...ANIMATIONS.fadeInScale}
            className={LAYOUT_CLASSES.tableWrapper}
          >
            <FilteredPlanDataTable
              data={data}
              columns={columns}
              editConfig={{
                allowEdit: true,
                onDataChange,
              }}
              className="h-full w-full"
              headerEndContent={
                <ActionButtons
                  onSave={onSave}
                  onExport={onExport}
                  loadingState={loadingState}
                  hasData={hasData}
                  hasChanges={hasChanges}
                />
              }
            />
          </motion.div>
        ) : (
          <motion.div
            key="loading"
            {...ANIMATIONS.fadeIn}
            className={LAYOUT_CLASSES.loadingWrapper}
          >
            <LoadingSpinner />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

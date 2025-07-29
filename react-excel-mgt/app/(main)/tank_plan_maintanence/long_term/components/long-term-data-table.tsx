/**
 * Data table component for long-term plan page
 */
'use client';

import { useMemo } from 'react';
import { DATE_COLUMNS } from '../../_shared/config/config';
import { createTableColumns } from '../../_shared/config/table-columns';
import { DateUtils } from '../../_shared/utils/utils';
import { HorizontalVersionEditor } from '../../_feature/plan-version/horizontal-version-editor';
import { FilteredPlanDataTable } from '../../_shared';
import { IconTextButton } from '@/components/shared/buttons';
import type { TankPlanDetailData, PlanVersion } from '../../_shared/types';

interface LongTermDataTableProps {
  data: TankPlanDetailData[];
  errors?: string[];
  onDataChange?: (data: TankPlanDetailData[]) => void;
  newVersionInfo?: PlanVersion;
  onVersionChange?: (version: PlanVersion) => void;
  onSave: () => void;
  onExport: () => void;
  onReUpload: () => void;
  isLoading: boolean;
  isSaving: boolean;
  isExporting: boolean;
}

// Action buttons component
function ActionButtons({
  onSave,
  onExport,
  onReUpload,
  isLoading,
  isSaving,
  isExporting,
  hasData,
}: {
  onSave: () => void;
  onExport: () => void;
  onReUpload: () => void;
  isLoading: boolean;
  isSaving: boolean;
  isExporting: boolean;
  hasData: boolean;
}) {
  const isActionDisabled = isLoading || !hasData;

  return (
    <div className="flex items-center gap-3">
      <IconTextButton
        action="validateAndSave"
        onClick={onSave}
        disabled={isActionDisabled}
        isLoading={isSaving}
      />

      <IconTextButton
        action="reUpload"
        onClick={onReUpload}
        disabled={isLoading}
      />

      <IconTextButton
        action="exportExcel"
        onClick={onExport}
        disabled={isActionDisabled}
        isLoading={isExporting}
      />
    </div>
  );
}

export function LongTermDataTable({
  data,
  errors = [],
  onDataChange,
  newVersionInfo,
  onVersionChange,
  onSave,
  onExport,
  onReUpload,
  isLoading,
  isSaving,
  isExporting,
}: LongTermDataTableProps) {
  const columns = useMemo(
    () =>
      createTableColumns({
        allowEdit: true,
        formatValue: (value, columnId) => {
          const isDate = DATE_COLUMNS.includes(columnId);
          return isDate ? DateUtils.format(value) : value;
        },
      }),
    []
  );

  const editConfig = {
    allowEdit: true,
    formatValue: (value: string, columnId: keyof TankPlanDetailData) => {
      const column = columns.find(col => col.key === columnId);
      return column?.formatValue?.(value) ?? value;
    },
  };

  const hasData = data.length > 0;

  return (
    <div className="min-h-0 flex-1 px-4 pt-2 pb-4">
      {newVersionInfo && onVersionChange && (
        <div className="mb-4">
          <HorizontalVersionEditor
            newVersionInfo={newVersionInfo}
            onVersionChange={onVersionChange}
            type="Long-term"
          />
        </div>
      )}

      <FilteredPlanDataTable
        data={data}
        columns={columns}
        onDataChange={onDataChange}
        editConfig={editConfig}
        className="h-full w-full"
        headerEndContent={
          <ActionButtons
            onSave={onSave}
            onExport={onExport}
            onReUpload={onReUpload}
            isLoading={isLoading}
            isSaving={isSaving}
            isExporting={isExporting}
            hasData={hasData}
          />
        }
      />
    </div>
  );
}

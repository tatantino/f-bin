'use client';

import { IconTextButton } from '@/components/shared/buttons';
import { useQuery } from '@tanstack/react-query';
import { DataTable } from '@/components/shared/tables/excel-data-table';
import { INITIAL_ROW } from '../config/constants';
import { useTableColumns } from '../hooks';
import { queryOpts } from '../services';
import type { DmdChangeDetail, DmdChangeMaster } from '../types/api';
import { createEmptyValuesByDates } from '../utils';
import { v4 as uuidv4 } from 'uuid';

/**
 * Get row ID for demand change table
 */
function getRowId(row: DmdChangeDetail, index: number): string {
  // Always use the detail ID if available
  if (row.dmd_change_detail_id) {
    return row.dmd_change_detail_id;
  }
  // Fallback to index-based ID for new rows without ID yet
  // Using a stable prefix to avoid random ID generation
  return `new_row_${index}`;
}

/**
 * Demand change table component props
 */
export interface DmdChangeTableProps {
  data: DmdChangeDetail[];
  onChange: (data: DmdChangeDetail[]) => void;
  versionInfo: DmdChangeMaster | null;
}

/**
 * Demand change table component
 * Renders an editable table for demand change data
 */
export function DmdChangeTable({
  data,
  onChange,
  versionInfo,
}: DmdChangeTableProps) {
  const dateYYYYQQs = versionInfo?.date_YYYYQQs || [];
  const columns = useTableColumns(dateYYYYQQs);
  const { isLoading: loadingGroups } = useQuery(queryOpts.compositionGroups);

  const handleAddRow = () => {
    const newRow = {
      ...INITIAL_ROW,
      dmd_change_detail_id: uuidv4(),
      ...createEmptyValuesByDates(dateYYYYQQs),
    };
    onChange([...data, newRow as DmdChangeDetail]);
  };

  return (
    <DataTable
      data={data}
      columns={columns}
      editConfig={{ allowEdit: true, onDataChange: onChange }}
      className="h-full w-full"
      columnToggle={{ enabled: true }}
      headerStartContent={
        <IconTextButton
          action="addNew"
          text="Add Row"
          variant="outline"
          onClick={handleAddRow}
          disabled={loadingGroups}
          isLoading={loadingGroups}
          className="text-black"
        />
      }
      idField={getRowId}
    />
  );
}

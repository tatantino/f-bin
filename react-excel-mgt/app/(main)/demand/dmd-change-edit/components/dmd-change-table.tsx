'use client';

import { DataTable } from '@/components/shared/tables/excel-data-table';
import { INITIAL_ROW } from '../config';
import { useTableColumns } from '../hooks/useTable';
import { IconTextButton } from '@/components/shared/buttons';
import type { DmdChangeDetail, DmdChangeMaster } from '../types/api';
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

interface DmdChangeTableProps {
  data: DmdChangeDetail[];
  onDataChange: (data: DmdChangeDetail[]) => void;
  versionInfo: DmdChangeMaster | null;
}

/**
 * Demand change table component for edit mode
 * Allows editing demand data in a tabular format
 */
export function DmdChangeTable({
  data,
  onDataChange,
  versionInfo,
}: DmdChangeTableProps) {
  const dateYYYYQQs = versionInfo?.date_YYYYQQs || [];
  const columns = useTableColumns(dateYYYYQQs);

  const handleAddRow = () => {
    const newRow = {
      ...INITIAL_ROW,
      dmd_change_detail_id: uuidv4(), // 确保新行有唯一ID
      ...Object.fromEntries(
        (dateYYYYQQs || []).map((date: string) => [`dmd_value_${date}`, null])
      ),
      create_timestamp: '',
      update_timestamp: '',
    };
    onDataChange([...data, newRow]);
  };

  return (
    <DataTable
      data={data}
      columns={columns}
      editConfig={{
        allowEdit: true,
        onDataChange,
      }}
      className="h-full w-full"
      columnToggle={{ enabled: true }}
      headerStartContent={
        <IconTextButton
          action="addNew"
          text="Add Row"
          variant="outline"
          onClick={handleAddRow}
          className="text-black"
        />
      }
      idField={getRowId}
    />
  );
}

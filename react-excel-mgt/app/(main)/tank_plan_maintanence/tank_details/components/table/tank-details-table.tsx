import { useMemo } from 'react';

import { DataTable } from '@/components/shared/tables/excel-data-table';
import type { DataGridColumn } from '@/components/shared/tables/excel-data-table';
import { ErrorBoundary } from '@/components/shared/feedbacks';
import type { TankInfo } from '../../types/tank';

import { tankTableColumns } from '../../config';

interface TankDetailsTableProps {
  data: TankInfo[];
  onDataChange: (data: TankInfo[]) => void;
}

function TableContent({ data, onDataChange }: TankDetailsTableProps) {
  const columns = useMemo(
    () => [...tankTableColumns] as DataGridColumn<TankInfo>[],
    []
  );
  const editConfig = useMemo(
    () => ({
      allowEdit: true,
      onDataChange,
    }),
    [onDataChange]
  );

  return (
    <DataTable
      data={data}
      columns={columns}
      editConfig={editConfig}
      idField="id"
    />
  );
}

export function TankDetailsTable(props: TankDetailsTableProps) {
  return (
    <div className="tank-details-table-container relative">
      <ErrorBoundary
        fallback={
          <div className="p-4 text-sm text-red-500">
            Failed to load table. Please try refreshing the page.
          </div>
        }
      >
        <TableContent {...props} />
      </ErrorBoundary>
    </div>
  );
}

'use client';

import { Suspense, useState } from 'react';
import { LoadingSpinner } from '@/components/shared/feedbacks/LoadingSpinner';
import { DataListTable } from '@/components/shared/tables/data-list-view';
import { useDemandChangeActions } from './hooks/useDemandChangeActions';
import type { DmdVersion } from '@/types/dmd-version';
import { ConfirmDialog } from '@/components/shared/dialogs/ConfirmDialog';
import { DemandChangeHeader } from './components/DemandChangeHeader';
import { Edit, LineChart, Trash2 } from 'lucide-react';
import type { TableAction } from '@/components/shared/tables/base-data-table/types';
import {
  DMD_CHANGES_API,
  DEFAULT_PAST_DAYS,
  QUERY_KEY,
  tableColumns,
  searchableFields,
  selectFilters,
  initialSort,
  extractDmdVersionKey,
} from './config';

export function DemandChangeList() {
  const [dmdChangeToDelete, setDmdChangeToDelete] = useState<DmdVersion | null>(
    null
  );
  const { editDmdChange, viewDmdChangeProposal, deleteDmdChange, isDeleting } =
    useDemandChangeActions();

  // Define row actions directly in the component
  const rowActions: TableAction<DmdVersion>[] = [
    {
      label: 'Proposal',
      icon: LineChart,
      onClick: viewDmdChangeProposal,
    },
    {
      label: 'Edit',
      icon: Edit,
      onClick: editDmdChange,
    },
    {
      label: 'Delete',
      icon: Trash2,
      onClick: dmdChange => setDmdChangeToDelete(dmdChange),
    },
  ];

  // Handle delete confirmation
  const confirmDelete = async () => {
    if (!dmdChangeToDelete?.dmd_change_master_id) return;

    try {
      await deleteDmdChange(dmdChangeToDelete.dmd_change_master_id);
      setDmdChangeToDelete(null);
    } catch (error) {
      console.error('Failed to delete demand change', error);
    }
  };

  return (
    <>
      <DemandChangeHeader />

      <Suspense fallback={<LoadingSpinner />}>
        <DataListTable<DmdVersion>
          queryKey={QUERY_KEY}
          apiEndpoint={DMD_CHANGES_API}
          columns={tableColumns}
          actions={rowActions}
          searchFields={searchableFields}
          selectFilters={selectFilters}
          dateField="create_timestamp"
          defaultPastDays={DEFAULT_PAST_DAYS}
          initialSort={initialSort}
          keyExtractor={extractDmdVersionKey}
        />
      </Suspense>

      {dmdChangeToDelete && (
        <ConfirmDialog
          open={true}
          onOpenChange={open => !open && setDmdChangeToDelete(null)}
          title="Confirm Deletion"
          description={`Are you sure you want to delete the demand change "${dmdChangeToDelete?.dmd_sp_gb_name || 'this item'}"? This action cannot be undone.`}
          onConfirm={confirmDelete}
          confirmText="Delete"
          isLoading={isDeleting}
          variant="destructive"
        />
      )}
    </>
  );
}

export default DemandChangeList;

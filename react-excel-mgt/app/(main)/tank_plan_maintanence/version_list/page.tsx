'use client';

import { Suspense, useState } from 'react';
import { LoadingSpinner } from '@/components/shared/feedbacks/LoadingSpinner';
import { DataListTable } from '@/components/shared/tables/data-list-view';
import { useVersionActions } from './hooks/useVersionActions';
import type { PlanVersion } from '../_shared/types';
import { ConfirmDialog } from '@/components/shared/dialogs/ConfirmDialog';
import { VersionHeader } from './components/VersionHeader';
import { VersionEditDialog } from './components/VersionEditDialog';
import { Edit, FileText, CalendarRange, Trash2 } from 'lucide-react';
import type { TableAction } from '@/components/shared/tables/base-data-table/types';
import {
  TANK_PLANS_API,
  DEFAULT_PAST_DAYS,
  QUERY_KEY,
  tableColumns,
  searchableFields,
  selectFilters,
  initialSort,
  extractPlanVersionKey,
} from './config';
import { logger } from '@/lib/logger';

export function VersionList() {
  const [planToDelete, setPlanToDelete] = useState<PlanVersion | null>(null);
  const {
    editPlan,
    viewPlan,
    viewWeeklyPlan,
    deletePlan,
    isDeleting,
    planToEdit,
    editedVersion,
    setPlanToEdit,
    setEditedVersion,
    isSaving,
    handleSaveVersionInfo,
  } = useVersionActions();

  // Define row actions directly in the component
  const rowActions: TableAction<PlanVersion>[] = [
    {
      label: 'Edit Version Info',
      icon: Edit,
      onClick: editPlan,
    },
    {
      label: 'View Plan',
      icon: FileText,
      onClick: viewPlan,
    },
    {
      label: 'Create Weekly Plan',
      icon: CalendarRange,
      onClick: viewWeeklyPlan,
    },
    {
      label: 'Delete',
      icon: Trash2,
      onClick: plan => setPlanToDelete(plan),
    },
  ];

  // Handle delete confirmation
  const confirmDelete = async () => {
    if (!planToDelete?.plan_master_id) return;

    try {
      await deletePlan(String(planToDelete.plan_master_id));
      setPlanToDelete(null);
    } catch (error) {
      logger.error('Failed to delete plan', {
        module: 'VersionList',
        function: 'confirmDelete',
        error,
        planId: planToDelete.plan_master_id,
      });

      setPlanToDelete(null);
    }
  };

  return (
    <>
      <VersionHeader />

      <Suspense fallback={<LoadingSpinner />}>
        <DataListTable<PlanVersion>
          queryKey={QUERY_KEY}
          apiEndpoint={TANK_PLANS_API}
          columns={tableColumns}
          actions={rowActions}
          searchFields={searchableFields}
          selectFilters={selectFilters}
          dateField="update_timestamp"
          defaultPastDays={DEFAULT_PAST_DAYS}
          initialSort={initialSort}
          keyExtractor={extractPlanVersionKey}
        />
      </Suspense>

      {/* Edit Dialog */}
      <VersionEditDialog
        plan={planToEdit}
        editedVersion={editedVersion}
        isSaving={isSaving}
        onClose={() => setPlanToEdit(null)}
        onSave={() => handleSaveVersionInfo()}
        onChange={setEditedVersion}
      />

      {/* Delete Confirmation Dialog */}
      {planToDelete && (
        <ConfirmDialog
          open={true}
          onOpenChange={open => !open && setPlanToDelete(null)}
          title="Confirm Deletion"
          description={`Are you sure you want to delete the plan version "${planToDelete.plan_version || 'this item'}"? This action cannot be undone.`}
          onConfirm={confirmDelete}
          confirmText="Delete"
          isLoading={isDeleting}
          variant="destructive"
        />
      )}
    </>
  );
}

export default VersionList;

'use client';

import { Suspense } from 'react';
import { LoadingSpinner } from '@/components/shared/feedbacks/LoadingSpinner';
import {
  VersionTable,
  VersionHeader,
  VersionFilter,
  VersionDeleteDialog,
} from './components';
import { PAGE_CONFIG } from './config/page-config';
import {
  useVersionEdit,
  useVersionDelete,
  useVersionSort,
  useDmdListData,
} from './hooks';

function DmdVersionList() {
  const {
    versions,
    loading,
    searchTerm,
    setSearchTerm,
    refresh,
    selectedUnit,
    setSelectedUnit,
    dateRange,
    setDateRange,
    uniqueUnits,
  } = useDmdListData();

  const { sortConfig, handleSort, sortedVersions } = useVersionSort(versions);
  const { handleEditVersion } = useVersionEdit();
  const {
    versionToDelete,
    setVersionToDelete,
    handleDeleteVersion,
    isDeleting,
  } = useVersionDelete();

  return (
    <div className="space-y-4">
      <VersionFilter
        loading={loading}
        onRefresh={refresh}
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
        unitOptions={uniqueUnits}
        selectedUnit={selectedUnit}
        onUnitChange={setSelectedUnit}
        dateRange={dateRange}
        onDateRangeChange={setDateRange}
      />

      <VersionTable
        data={sortedVersions}
        sortConfig={sortConfig}
        onSort={handleSort}
        onEdit={handleEditVersion}
        onDelete={setVersionToDelete}
        loading={loading}
      />

      <VersionDeleteDialog
        version={versionToDelete}
        onClose={() => setVersionToDelete(null)}
        onConfirm={() => handleDeleteVersion(refresh)}
        isDeleting={isDeleting}
      />
    </div>
  );
}

export default function DmdVersionsPage() {
  return (
    <>
      <VersionHeader {...PAGE_CONFIG} />

      <Suspense fallback={<LoadingSpinner />}>
        <DmdVersionList />
      </Suspense>
    </>
  );
}

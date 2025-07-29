import { useCallback } from 'react';
import { useTableRefresh } from '../../_shared/hooks/useTableRefresh';
import { useTankQueryData } from './useTankQueryData';
import type { TankInfo } from '../types/tank';

export function useTankDetailsPage() {
  const { tableKey, refreshTable } = useTableRefresh();
  const {
    data,
    isLoading,
    hasChanges,
    updateData,
    resetData,
    saveChanges,
    refresh,
  } = useTankQueryData();

  const handleDataChange = useCallback(
    (newData: TankInfo[]) => updateData(newData),
    [updateData]
  );

  const handleImportSuccess = useCallback(
    (newData: TankInfo[]) => {
      updateData(newData);
      refreshTable();
    },
    [updateData, refreshTable]
  );

  const handleSaveSuccess = useCallback(
    (newData: TankInfo[]) => {
      updateData(newData);
      refreshTable();
    },
    [updateData, refreshTable]
  );

  return {
    data,
    error: null,
    hasChanges,
    isLoadingData: isLoading,
    tableKey: tableKey.toString(),
    handleDataChange,
    handleImportSuccess,
    handleSaveSuccess,
    handleLoad: refresh,
    saveChanges,
  };
}

'use client';

import { useCallback, useEffect, useState } from 'react';
import { useBaseState } from '../../../tank_plan_maintanence/_shared/hooks/useBaseState';
import { transformResponseToTableData } from '../utils/data-transform';
import { INITIAL_ROW, MIN_ROWS } from '../config';
import type { DmdChangeDetail, DmdChangeMaster } from '../types/api';
import { queryOpts } from '../services/query-opts';
import { useUpdateDmdChangeMutation } from '../services/mutations';
import { useQuery } from '@tanstack/react-query';
import useMyAccount from '@/hooks/use-my-account';
import { v4 as uuidv4 } from 'uuid';

/**
 * Main hook for demand change editing
 * Manages state and logic for editing existing demand changes
 */
export function useDmdChange(masterId: string) {
  const { handleError } = useBaseState({
    context: { module: 'useDmdChange', function: 'saveAction' },
  });
  const { account } = useMyAccount();

  // Core state
  const [data, setData] = useState<DmdChangeDetail[]>([]);
  const [versionInfo, setVersionInfo] = useState<DmdChangeMaster | null>(null);
  const [hasChanges, setHasChanges] = useState(false);
  const [showRemarkDialog, setShowRemarkDialog] = useState(false);

  // React Query hooks
  const {
    data: dmdChangeData,
    isLoading,
    error: loadError,
  } = useQuery(queryOpts.dmdChangeDetails(masterId));

  // Use mutation hook for updates
  const updateMutation = useUpdateDmdChangeMutation();

  // Initialize data when fetched from API
  useEffect(() => {
    if (!dmdChangeData) return;

    const { master, details } = dmdChangeData;
    setVersionInfo(master);

    const transformedData = transformResponseToTableData(
      master,
      details,
      INITIAL_ROW as unknown as DmdChangeDetail,
      MIN_ROWS
    );

    setData(transformedData);
    setHasChanges(false);
  }, [dmdChangeData]);

  // Handle data changes
  const handleDataChange = useCallback(
    (newData: DmdChangeDetail[]) => {
      // Generate unique detail IDs for new rows that don't have one
      const dataWithIds = newData.map(item => ({
        ...item,
        dmd_change_detail_id: item.dmd_change_detail_id || uuidv4(),
        dmd_change_master_id: item.dmd_change_master_id || masterId,
      }));

      setData(dataWithIds);
      setHasChanges(true);
    },
    [masterId]
  );

  // Handle unit changes
  const handleUnitChange = useCallback(
    (unit: string) => {
      if (!versionInfo) return;
      setVersionInfo({ ...versionInfo, dmd_change_unit: unit });
      setHasChanges(true);
    },
    [versionInfo]
  );

  // Handle save click (validation)
  const handleSaveClick = useCallback(() => {
    if (!versionInfo) {
      handleError(new Error('Save Validation: Version information not found'));
      return;
    }

    if (data.length === 0) {
      handleError(
        new Error('Save Validation: Cannot save an empty demand change record')
      );
      return;
    }

    setShowRemarkDialog(true);
  }, [data.length, handleError, versionInfo]);

  // Handle save confirmation using React Query mutation
  const handleSaveConfirm = useCallback(
    async (remark: string) => {
      if (!versionInfo) return false;

      try {
        await updateMutation.mutateAsync({
          data,
          versionInfo,
          masterId,
          remark,
          username: account?.username || 'system',
        });

        setHasChanges(false);
        setShowRemarkDialog(false);
        return true;
      } catch (error) {
        handleError(error);
        return false;
      }
    },
    [
      data,
      versionInfo,
      masterId,
      handleError,
      updateMutation,
      account?.username,
    ]
  );

  return {
    data,
    versionInfo,
    hasChanges,
    loadingState: {
      isLoading,
      isSaving: updateMutation.isPending,
    },
    loadError,
    showRemarkDialog,
    setData: handleDataChange,
    onUnitChange: handleUnitChange,
    onSave: handleSaveClick,
    onConfirmSave: handleSaveConfirm,
    setShowRemarkDialog,
  };
}

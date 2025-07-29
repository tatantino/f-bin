'use client';

import useMyAccount from '@/hooks/use-my-account';
import { useCallback, useMemo, useState } from 'react';
import { useBaseState } from '../../../tank_plan_maintanence/_shared/hooks/useBaseState';
import { INITIAL_ROW, MIN_ROWS } from '../config/constants';
import { useCreateDmdChangeMutation } from '../services';
import type { DmdChangeDetail, DmdChangeMaster } from '../types/api';
import { v4 as uuidv4 } from 'uuid';

/**
 * Default empty rows for initialization
 */
const createEmptyRows = () =>
  Array(MIN_ROWS)
    .fill(null)
    .map(() => ({
      ...INITIAL_ROW,
      dmd_change_detail_id: uuidv4(),
      create_timestamp: '',
      update_timestamp: '',
    })) as DmdChangeDetail[];

/**
 * Main hook for demand change creation
 * Manages state and logic for creating new demand changes
 * Uses React Query for API mutations
 */
export function useDmdChange() {
  const { handleError } = useBaseState({
    context: { module: 'useDmdChange', function: 'saveAction' },
  });
  const { account } = useMyAccount();

  // React Query mutation hook
  const createMutation = useCreateDmdChangeMutation();

  // Generate master ID at initialization
  const masterIdRef = useMemo(() => ({ id: uuidv4() }), []);

  // Core states
  const [data, setData] = useState<DmdChangeDetail[]>(createEmptyRows());
  const [versionInfo, setVersionInfo] = useState<DmdChangeMaster | null>(null);
  const [hasChanges, setHasChanges] = useState(false);
  const [showRemarkDialog, setShowRemarkDialog] = useState(false);

  /**
   * Derived states for UI rendering and validation
   */
  const derivedState = useMemo(() => {
    return {
      // Check if a version is selected
      hasSelectedVersion: Boolean(versionInfo?.dmd_sp_gb_name),
      // Check if data can be saved (has data and changes)
      canSave: data.length > 0 && hasChanges,
      // UI loading state
      isLoading: createMutation.isPending,
      // Error message if present
      errorMessage: createMutation.error ? String(createMutation.error) : null,
    };
  }, [
    versionInfo?.dmd_sp_gb_name,
    data.length,
    hasChanges,
    createMutation.isPending,
    createMutation.error,
  ]);

  /**
   * Handle table data changes
   */
  const handleDataChange = useCallback(
    (newData: DmdChangeDetail[]) => {
      // Generate unique detail IDs for new rows that don't have one
      const dataWithIds = newData.map(item => ({
        ...item,
        dmd_change_detail_id: item.dmd_change_detail_id || uuidv4(),
        dmd_change_master_id: item.dmd_change_master_id || masterIdRef.id,
      }));

      setData(dataWithIds);
      setHasChanges(true);
    },
    [masterIdRef.id]
  );

  /**
   * Handle version selection/change
   * Reset data when changing to a different version
   */
  const handleVersionChange = useCallback(
    (version: Partial<DmdChangeMaster>) => {
      setVersionInfo(prev => {
        // Reset data when changing versions
        if (
          version.dmd_sp_gb_name &&
          version.dmd_sp_gb_name !== prev?.dmd_sp_gb_name
        ) {
          setData(createEmptyRows());
        }

        // Create new version state with master ID
        const newState = prev
          ? { ...prev, ...version, dmd_change_master_id: masterIdRef.id }
          : {
              ...(version as DmdChangeMaster),
              dmd_change_master_id: masterIdRef.id,
            };

        setHasChanges(true);
        return newState;
      });
    },
    [masterIdRef.id]
  );

  /**
   * Handle save button click (validate and show dialog)
   */
  const handleSaveClick = useCallback(() => {
    // Validate version selection
    if (!versionInfo?.dmd_sp_gb_name) {
      handleError('Please select a version first');
      return;
    }

    // Validate data
    if (!data.length) {
      handleError('Cannot create an empty demand change record');
      return;
    }

    // Show dialog for remark input
    setShowRemarkDialog(true);
  }, [data.length, handleError, versionInfo?.dmd_sp_gb_name]);

  /**
   * Handle save confirmation with remark
   */
  const handleSaveConfirm = useCallback(
    async (remark: string) => {
      try {
        // Execute mutation with React Query
        await createMutation.mutateAsync({
          data,
          versionInfo,
          remark,
          username: account?.username || 'system',
        });

        // Reset UI state after successful save
        // setData(createEmptyRows());
        // setVersionInfo(null);
        // setHasChanges(false);
        setShowRemarkDialog(false);
        return true;
      } catch (error) {
        handleError(error);
        return false;
      }
    },
    [data, versionInfo, handleError, account?.username, createMutation]
  );

  /**
   * Handle dialog close
   */
  const handleDialogClose = useCallback(() => {
    setShowRemarkDialog(false);
  }, []);

  /**
   * Return hook interface organized by logical groups
   */
  return {
    // Data state
    data,
    versionInfo,

    // Derived state
    ...derivedState,

    // UI state
    loadError: derivedState.errorMessage,
    showRemarkDialog,

    // Data actions
    handleDataChange,
    handleVersionChange,

    // UI actions
    handleSaveClick,
    handleSaveConfirm,
    handleDialogClose,
  };
}

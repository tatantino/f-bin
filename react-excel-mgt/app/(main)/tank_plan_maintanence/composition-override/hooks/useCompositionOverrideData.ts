/**
 * Hook for managing composition override data, including loading, updating, and saving changes
 */
import { useState, useCallback } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import useMyAccount from '@/hooks/use-my-account';
import {
  INITIAL_OVERRIDE_ROW,
  CHANGE_TYPE,
  type CompositionOverrideItem,
} from '../config';
import {
  fetchCompositionOverrides,
  applyBusinessRules,
  saveCompositionOverrides,
} from '../services';
import { v4 as uuidv4 } from 'uuid';

export function useCompositionOverrideData() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { account } = useMyAccount();
  const [hasChanges, setHasChanges] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [updateCounter, setUpdateCounter] = useState(0);

  // Fetch data
  const {
    data: compositionOverrides = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['compositionOverrides'],
    queryFn: fetchCompositionOverrides,
  });

  // Update data and handle errors
  const updateData = useCallback(
    (newData: CompositionOverrideItem[]) => {
      try {
        const processedData = applyBusinessRules(newData);
        queryClient.setQueryData(['compositionOverrides'], processedData);
        setHasChanges(true);
        setUpdateCounter(prev => prev + 1);
        return true;
      } catch (err) {
        toast({
          variant: 'destructive',
          title: 'Validation Error',
          description: err instanceof Error ? err.message : 'Unknown error',
        });
        return false;
      }
    },
    [queryClient, toast]
  );

  // Create a new row
  const createNewRow = useCallback(() => {
    const username = account?.username || 'system';
    return {
      ...INITIAL_OVERRIDE_ROW,
      override_id: uuidv4(),
      created_by: username,
      updated_by: username,
    };
  }, [account?.username]);

  // Toggle delete status for existing rows
  const toggleDeleteStatus = useCallback(
    (row: CompositionOverrideItem) => {
      if (!row.override_id) return;

      const newData = [...compositionOverrides];
      const rowIndex = newData.findIndex(
        item => item.override_id === row.override_id
      );

      if (rowIndex === -1) return;

      // Toggle between delete and normal state
      const currentStatus = newData[rowIndex].change_type;
      const newStatus =
        currentStatus === CHANGE_TYPE.DELETE ? null : CHANGE_TYPE.DELETE;

      newData[rowIndex] = {
        ...newData[rowIndex],
        change_type: newStatus,
      };

      updateData(newData);
    },
    [compositionOverrides, updateData]
  );

  // Delete new rows
  const deleteRow = useCallback(
    (row: CompositionOverrideItem) => {
      const newData = compositionOverrides.filter(item => item !== row);
      updateData(newData);
    },
    [compositionOverrides, updateData]
  );

  // Check if a row has changed
  const hasRowChanged = (
    original: CompositionOverrideItem,
    current: CompositionOverrideItem
  ): boolean => {
    const dataFields = [
      'override_type_no',
      'tank',
      'override_variable',
      'override_value',
      'period_from',
      'period_to',
      'effective_from',
      'effective_to',
      'comment',
      'affect_module',
    ];

    return dataFields.some(
      field =>
        original[field as keyof CompositionOverrideItem] !==
        current[field as keyof CompositionOverrideItem]
    );
  };

  // Update overrides and mark changed rows
  const updateOverrides = useCallback(
    (newData: CompositionOverrideItem[]) => {
      const updatedData = newData.map(row => {
        if (!row.override_id || row.change_type === CHANGE_TYPE.DELETE) {
          return row;
        }

        const originalRow = compositionOverrides.find(
          orig => orig.override_id === row.override_id
        );

        if (originalRow && hasRowChanged(originalRow, row)) {
          return { ...row, change_type: CHANGE_TYPE.UPDATE };
        }

        return row;
      });

      updateData(updatedData);
    },
    [compositionOverrides, updateData]
  );

  // Add a new row
  const addNewRow = useCallback(() => {
    const newRow = createNewRow();
    updateOverrides([...compositionOverrides, newRow]);
  }, [compositionOverrides, updateOverrides, createNewRow]);

  // Save changes
  const saveChanges = async () => {
    if (!hasChanges) return true;

    setIsSaving(true);
    try {
      const result = await saveCompositionOverrides(compositionOverrides);
      queryClient.invalidateQueries({ queryKey: ['compositionOverrides'] });
      setHasChanges(false);
      toast({
        title: 'Success',
        description: `Changes saved successfully (${result.count} records)`,
      });
      return true;
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description:
          error instanceof Error ? error.message : 'Unknown error occurred',
      });
      return false;
    } finally {
      setIsSaving(false);
    }
  };

  return {
    compositionOverrides,
    isLoading,
    isError,
    error,
    hasChanges,
    isSaving,
    updateCounter,
    updateOverrides,
    addNewRow,
    toggleDeleteStatus,
    deleteRow,
    saveChanges,
  };
}

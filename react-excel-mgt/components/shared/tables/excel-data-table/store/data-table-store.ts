/**
 * Data table state management using Zustand
 * Handles data filtering, cell editing, and visibility states
 */
import { create } from 'zustand';
import { createCellId } from '../utils/row-id';
import type { EditConfig, VisibilityState } from '../types';

/**
 * Core state and actions for the data table
 */
export interface DataTableState<TData extends Record<string, any>> {
  // State
  data: TData[];
  editingCell: string | undefined;
  editedCells: Record<string, boolean>;
  isEdited: boolean;
  columnVisibility: VisibilityState;
  editConfig?: EditConfig<TData>;

  // Actions
  updateData: (rowId: string, columnId: keyof TData, value: string) => void;
  switchEditingCell: (cellId: string) => void;
  setColumnVisibility: (visibility: VisibilityState) => void;
}

/**
 * Creates a data table store instance with the provided initial values
 */
export const createDataTableStore = <TData extends Record<string, any>>(
  initialData: TData[],
  getRowId: (row: TData, index: number) => string,
  editConfig?: EditConfig<TData>,
  onDataChange?: (data: TData[]) => void,
  initialColumnVisibility?: VisibilityState
) => {
  return create<DataTableState<TData>>()((set, get) => ({
    data: initialData,
    editingCell: undefined,
    editedCells: {},
    isEdited: false,
    columnVisibility: initialColumnVisibility || {},
    editConfig,

    updateData: (rowId, columnId, value) => {
      const { data } = get();
      const newData = [...data];

      // Find the row by ID using the provided getRowId function
      const rowIndex = newData.findIndex(
        (row, index) => getRowId(row, index) === rowId
      );

      if (rowIndex !== -1) {
        newData[rowIndex] = {
          ...newData[rowIndex],
          [columnId]: value,
        };

        const cellId = createCellId(rowId, String(columnId));

        set({
          data: newData,
          editedCells: { ...get().editedCells, [cellId]: true },
          isEdited: true,
        });

        editConfig?.onDataChange?.(newData);
        onDataChange?.(newData);
      } else {
        // Log error for debugging
        console.error(
          '[DataTable/updateData] Failed to find original row for update',
          {
            rowId,
            availableIds: newData.map((row, i) => getRowId(row, i)),
          }
        );
      }
    },

    switchEditingCell: cellId => {
      set({ editingCell: cellId });
    },

    setColumnVisibility: visibility => {
      set({ columnVisibility: visibility });
    },
  }));
};

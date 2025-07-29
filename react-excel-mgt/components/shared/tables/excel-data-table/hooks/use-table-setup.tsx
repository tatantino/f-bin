/**
 * Centralizes table state management, data processing, and event handling
 */
import { useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  type Cell,
} from '@tanstack/react-table';
import { useShallow } from 'zustand/react/shallow';
import { convertToColumnDef } from '../utils/column-utils';
import { createDataTableStore } from '../store/data-table-store';
import type {
  DataGridColumn,
  EditConfig,
  TableMeta,
  VisibilityState,
} from '../types';

interface TableSetupProps<TData extends Record<string, any>> {
  data: TData[];
  columns: DataGridColumn<TData>[];
  editConfig?: EditConfig<TData>;
  onDataChange?: (data: TData[]) => void;
  initialColumnVisibility?: VisibilityState;
  onColumnVisibilityChange?: (visibility: VisibilityState) => void;
  getRowId: (row: TData, index: number) => string;
}

export function useTableSetup<TData extends Record<string, any>>({
  data,
  columns,
  editConfig,
  onDataChange,
  initialColumnVisibility,
  onColumnVisibilityChange,
  getRowId,
}: TableSetupProps<TData>) {
  const defaultVisibility = useMemo(
    () => Object.fromEntries(columns.map(col => [col.key, true])),
    [columns]
  );

  // Prepare initial column pinning state
  const initialColumnPinning = useMemo(() => {
    const pinningState = { left: [] as string[], right: [] as string[] };

    columns.forEach(column => {
      if (column.isPinned === 'left') {
        pinningState.left.push(String(column.key));
      } else if (column.isPinned === 'right') {
        pinningState.right.push(String(column.key));
      }
    });

    return pinningState;
  }, [columns]);

  const useStore = useMemo(
    () =>
      createDataTableStore<TData>(
        data,
        getRowId,
        editConfig,
        onDataChange,
        initialColumnVisibility ?? defaultVisibility
      ),
    [
      data,
      getRowId,
      editConfig,
      onDataChange,
      initialColumnVisibility,
      defaultVisibility,
    ]
  );

  const {
    filteredData,
    editedCells,
    editingCell,
    updateData,
    switchEditingCell: switchEditingCellStore,
    columnVisibility,
    setColumnVisibility,
  } = useStore(
    useShallow(state => ({
      filteredData: state.data,
      editedCells: state.editedCells,
      editingCell: state.editingCell,
      updateData: state.updateData,
      switchEditingCell: state.switchEditingCell,
      columnVisibility: state.columnVisibility,
      setColumnVisibility: state.setColumnVisibility,
    }))
  );

  const switchEditingCell = (cell: Cell<TData, unknown>) => {
    switchEditingCellStore(cell.id);
  };

  const visibleColumns = useMemo(
    () =>
      columns.filter(
        column => columnVisibility[column.key as string] !== false
      ),
    [columns, columnVisibility]
  );

  const tableMeta: TableMeta<TData> = {
    editedCells,
    updateData,
    editingCell,
    switchEditingCell,
    editConfig,
  };

  const table = useReactTable({
    data: filteredData,
    columns: visibleColumns.map(convertToColumnDef),
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    meta: tableMeta,
    state: {
      columnVisibility,
    },
    getRowId,
    enableColumnPinning: true,
    initialState: {
      columnPinning: initialColumnPinning,
    },
  });

  const handleColumnVisibilityChange = (visibility: VisibilityState) => {
    setColumnVisibility(visibility);
    onColumnVisibilityChange?.(visibility);
  };

  return {
    table,
    filteredData,
    columnVisibility,
    handleColumnVisibilityChange,
  };
}

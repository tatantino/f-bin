import type { ColumnDef } from '@tanstack/react-table';
import type { DataGridColumn } from '../types';

export function convertToColumnDef<T>(column: DataGridColumn<T>): ColumnDef<T> {
  return {
    ...column,
    accessorKey: column.key,
    header: column.label,
    size: column.width,
    enablePinning: !!column.isPinned,
    ...(column.isPinned && { minSize: 80 }),
    cell: ({ getValue }) => {
      const value = getValue();
      if (
        column.valueMap?.valueToDisplay &&
        value !== undefined &&
        value !== null
      ) {
        return column.valueMap.valueToDisplay(value);
      }
      return column.formatValue?.(value as string) ?? value;
    },
    enableColumnFilter: column.canFilter ?? true,
    meta: {
      ...column.meta,
      tooltip: column.tooltip,
      isDate: column.type === 'date',
      validateValue: column.validateValue,
      valueMap: column.valueMap,
    },
  };
}

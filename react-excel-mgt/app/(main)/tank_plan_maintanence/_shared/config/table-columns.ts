import { type DataGridColumn } from '@/components/shared/tables/excel-data-table';
import { type TankPlanDetailData } from '../types';
import { DateUtils } from '../utils/utils';
import { TANK_COLUMNS, type ColumnConfig, validateField } from './config';

interface CreateTableColumnsOptions {
  allowEdit?: boolean;
  formatValue?: (value: string, columnId: string) => string;
  validateCell?: (value: string, columnId: string) => string | null;
}

export function createTableColumns(
  options?: CreateTableColumnsOptions
): DataGridColumn<TankPlanDetailData>[] {
  return TANK_COLUMNS.map((column: ColumnConfig) => ({
    key: column.key as keyof TankPlanDetailData,
    label: column.label,
    tooltip: column.tooltip,
    isDate: column.isDate,
    type: column.type,
    options: column.options,
    width: column.width,
    isPinned: column.isPinned,
    formatValue: (value: string) => {
      if (options?.formatValue) {
        return options.formatValue(value, column.key);
      }
      if (column.format?.display) {
        return column.format.display(value);
      }
      return column.isDate ? DateUtils.format(value) : value;
    },
    validateValue: (value: string) => {
      if (options?.validateCell) {
        return options.validateCell(value, column.key);
      }
      if (column.validation) {
        return validateField(value, column);
      }
      return null;
    },
  }));
}

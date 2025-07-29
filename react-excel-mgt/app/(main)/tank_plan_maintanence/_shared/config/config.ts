import { ROUTES } from '@/app/config/routes';
import type { TankPlanDetailData } from '../types';

export { ROUTES };

export type ValidationRule = {
  type: 'required' | 'date' | 'number' | 'pattern';
  message?: string;
  pattern?: RegExp;
  min?: number;
  max?: number;
};

export interface ColumnConfig {
  key: string;
  label: string;
  excelHeader: string;
  type: 'text' | 'date' | 'number' | 'select';
  validation?: ValidationRule[];
  width?: number;
  hidden?: boolean;
  order?: number;
  editable?: boolean;
  format?: {
    display?: (value: string) => string;
    export?: (value: string) => string;
  };
  tooltip?: string;
  isDate?: boolean;
  options?: string[];
  isPinned?: 'left' | 'right';
}

export const PLAN_DETAIL_COLUMNS: Record<string, ColumnConfig> = {
  plan_row_id: {
    key: 'plan_row_id',
    label: 'Plan ID',
    excelHeader: 'Plan id',
    type: 'text',
    order: 1,
    validation: [{ type: 'required', message: 'Plan id is required' }],
    isPinned: 'left',
    width: 80,
  },
  tank: {
    key: 'tank',
    label: 'Tank',
    excelHeader: 'Tank',
    type: 'text',
    order: 2,
    validation: [{ type: 'required', message: 'Tank is required' }],
    isPinned: 'left',
    width: 80,
  },
  iso: {
    key: 'iso',
    label: 'Iso',
    excelHeader: 'Isopipe',
    type: 'text',
    order: 3,
  },
  glass_type: {
    key: 'glass_type',
    label: 'Glass Type',
    excelHeader: 'Biz_2 (After R)',
    type: 'text',
    order: 4,
  },
  gen: {
    key: 'gen',
    label: 'Gen',
    excelHeader: 'Gen',
    type: 'text',
    order: 5,
  },
  RT: {
    key: 'RT',
    label: 'RT',
    excelHeader: 'RT',
    type: 'text',
    order: 6,
  },
  RC: {
    key: 'RC',
    label: 'RC',
    excelHeader: 'RC',
    type: 'text',
    order: 7,
  },
  platform: {
    key: 'platform',
    label: 'Platform',
    excelHeader: 'Design_As Is',
    type: 'text',
    order: 8,
  },
  design_asis: {
    key: 'design_asis',
    label: 'Design As Is',
    excelHeader: 'Design_To Be',
    type: 'text',
    order: 9,
  },
  tank_life: {
    key: 'tank_life',
    label: 'Tank Life',
    excelHeader: 'Tank Life',
    type: 'number',
    order: 10,
  },
  last_tank_light_date: {
    key: 'last_tank_light_date',
    label: 'Last Tank Light',
    excelHeader: 'Last Tank Light',
    type: 'date',
    order: 11,
    validation: [{ type: 'date', message: 'Invalid date format' }],
  },
  drain_date: {
    key: 'drain_date',
    label: 'Drain Date',
    excelHeader: 'Drain',
    type: 'date',
    order: 12,
    validation: [{ type: 'date', message: 'Invalid date format' }],
  },
  repair_date: {
    key: 'repair_date',
    label: 'Repair Date',
    excelHeader: 'Start',
    type: 'date',
    order: 13,
    validation: [{ type: 'date', message: 'Invalid date format' }],
  },
  RTL_date: {
    key: 'RTL_date',
    label: 'RTL Date',
    excelHeader: 'RTL',
    type: 'date',
    order: 14,
    validation: [{ type: 'date', message: 'Invalid date format' }],
  },
  TL_date: {
    key: 'TL_date',
    label: 'TL Date',
    excelHeader: 'Light',
    type: 'date',
    order: 15,
    validation: [{ type: 'date', message: 'Invalid date format' }],
  },
  GG_date: {
    key: 'GG_date',
    label: 'GG Date',
    excelHeader: 'Good Glass',
    type: 'date',
    order: 16,
    validation: [{ type: 'date', message: 'Invalid date format' }],
  },
  cold_idle: {
    key: 'cold_idle',
    label: 'Cold Idle',
    excelHeader: "Idle/Conv' Days",
    type: 'number',
    order: 17,
    validation: [
      {
        type: 'number',
        min: 0,
        max: 9999,
        message: "Idle/Conv' Days must be a number between 0 and 9999",
      },
    ],
  },
  repair_LT: {
    key: 'repair_LT',
    label: 'Repair-LT',
    excelHeader: 'Installation Days',
    type: 'number',
    order: 18,
    validation: [
      {
        type: 'number',
        min: 0,
        max: 9999,
        message: 'Installation Days must be a number between 0 and 9999',
      },
    ],
  },
  RTL_LT: {
    key: 'RTL_LT',
    label: 'RTL-LT',
    excelHeader: 'Protective Days',
    type: 'number',
    order: 19,
    validation: [
      {
        type: 'number',
        min: 0,
        max: 9999,
        message: 'Protective Days must be a number between 0 and 9999',
      },
    ],
  },
  TL_LT: {
    key: 'TL_LT',
    label: 'TL-LT',
    excelHeader: 'Start-up Days',
    type: 'number',
    order: 20,
    validation: [
      {
        type: 'number',
        min: 0,
        max: 9999,
        message: 'Start-up Days must be a number between 0 and 9999',
      },
    ],
  },
  comment: {
    key: 'comment',
    label: 'Comments',
    excelHeader: 'Comments',
    type: 'text',
    order: 21,
  },
  remark_category: {
    key: 'remark_category',
    label: 'Remark Category',
    excelHeader: '',
    type: 'select',
    order: 22,
    editable: true,
    options: [
      'Inventory',
      'Tanks issue',
      'Schedule',
      'Cost',
      'Resource',
      'Lead time',
      'Other',
    ],
    validation: [
      {
        type: 'pattern',
        pattern:
          /^(Inventory|Tanks issue|Schedule|Cost|Resource|Lead time|Other)$/,
        message:
          'Please select a valid category from the list (Inventory, Tanks issue, Schedule, Cost, Resource, Lead time, Other)',
      },
    ],
    format: {
      display: (value: string) => value || 'Select category...',
    },
  },
  remark: {
    key: 'remark',
    label: 'Remark',
    excelHeader: '',
    type: 'text',
    order: 23,
    width: 250,
    editable: true,
    format: {
      display: (value: string) => value || 'Add remark...',
    },
  },
};

export const TANK_COLUMNS = Object.values(PLAN_DETAIL_COLUMNS)
  .sort((a, b) => (a.order || 0) - (b.order || 0))
  .map(column => ({
    ...column,
    isDate: column.type === 'date',
    tooltip: column.label,
  }));

export const getColumns = () =>
  Object.values(PLAN_DETAIL_COLUMNS).sort(
    (a, b) => (a.order || 0) - (b.order || 0)
  );

export const getVisibleColumns = () => getColumns().filter(col => !col.hidden);

export const getRequiredColumns = () =>
  getColumns().filter(col =>
    col.validation?.some(rule => rule.type === 'required')
  );

export const getDateColumns = () =>
  getColumns().filter(col => col.type === 'date');

export const getEditableColumns = () =>
  getColumns().filter(col => col.editable !== false);

export const getColumnKeys = () => getColumns().map(col => col.key);

export const getExcelHeaderMap = () => {
  const map = new Map<string, string>();
  Object.values(PLAN_DETAIL_COLUMNS).forEach(col => {
    map.set(col.excelHeader, col.key);
  });
  return map;
};

export const getExcelHeaders = () =>
  Object.values(PLAN_DETAIL_COLUMNS)
    .filter(col => col.excelHeader.trim() !== '')
    .map(col => col.excelHeader.trim());

export type ColumnKey = keyof typeof PLAN_DETAIL_COLUMNS;
export type DateColumn = Extract<ColumnKey, keyof TankPlanDetailData>;

export const REQUIRED_COLUMNS = getRequiredColumns().map(col => col.key);
export const DATE_COLUMNS = getDateColumns().map(col => col.key);

export const validateField = (
  value: string | number | null | undefined,
  column: ColumnConfig
): string | null => {
  if (!column.validation) return null;

  const stringValue =
    value === null || value === undefined ? '' : String(value);

  for (const rule of column.validation) {
    switch (rule.type) {
      case 'required':
        if (!stringValue || !stringValue.trim()) {
          return rule.message || `${column.label} is required`;
        }
        break;
      case 'date':
        if (stringValue && !/^\d{4}-\d{2}-\d{2}$/.test(stringValue)) {
          return rule.message || `${column.label} must be in YYYY-MM-DD format`;
        }
        break;
      case 'number':
        const num = Number(stringValue);
        if (stringValue && isNaN(num)) {
          return rule.message || `${column.label} must be a number`;
        }
        if (rule.min !== undefined && num < rule.min) {
          return rule.message || `${column.label} must be at least ${rule.min}`;
        }
        if (rule.max !== undefined && num > rule.max) {
          return rule.message || `${column.label} must be at most ${rule.max}`;
        }
        break;
      case 'pattern':
        if (stringValue && rule.pattern && !rule.pattern.test(stringValue)) {
          return rule.message || `${column.label} has invalid format`;
        }
        break;
    }
  }
  return null;
};

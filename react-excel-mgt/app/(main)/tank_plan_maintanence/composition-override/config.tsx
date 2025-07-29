import React from 'react';
import { Info } from 'lucide-react';
import type { DataGridColumn } from '@/components/shared/tables/excel-data-table';

export const API_PATH = '/api/1.0/composition-override';

export interface CompositionOverrideItem {
  override_id?: string;
  override_type_no: number;
  override_type?: string;
  tank?: string;
  override_variable?: string;
  override_value?: string;
  period_from?: string;
  period_to?: string;
  effective_from?: string;
  effective_to?: string;
  comment?: string;
  created_date?: string;
  created_by?: string;
  updated_date?: string;
  updated_by?: string;
  affect_module?: string;
  change_type?: string | null;
}

/**
 * Change type constants for tracking record status
 * I = Insert (new record)
 * U = Update (modified record)
 * D = Delete (record marked for deletion)
 */
export const CHANGE_TYPE = {
  NEW: 'I',
  UPDATE: 'U',
  DELETE: 'D',
} as const;

export const INITIAL_OVERRIDE_ROW: CompositionOverrideItem = {
  override_type_no: 1,
  change_type: CHANGE_TYPE.NEW,
};

export const PAGE_TITLE = 'Composition Override';
export const PAGE_DESCRIPTION = 'Manage composition override settings';
export const TOOLTIP_CONFIG = {
  content: (
    <div className="max-w-xs">
      <h3 className="font-medium leading-none mb-2">
        About Composition Overrides
      </h3>
      <div className="text-sm text-muted-foreground space-y-1">
        <p>
          Composition overrides allow you to define custom values for specific
          variables on specific tanks. These overrides can be time-constrained
          to apply only during certain periods.
        </p>
        <p>
          All changes are saved back to the database and will affect related
          calculations and processes.
        </p>
      </div>
    </div>
  ),
  icon: <Info className="h-4 w-4 text-muted-foreground" />,
};

export const overrideTypeMap = {
  1: 'Composition Override',
  2: 'Status Override',
  3: 'Support Other Business',
} as const;
export const overrideTypeOptions = Object.values(overrideTypeMap);

// Date format validation function
const validateDateFormat = (value: string): string | null => {
  if (!value) return null;
  return /^\d{4}-\d{2}-\d{2}$/.test(value) ? null : 'date format "YYYY-MM-DD"';
};

export const compositionOverrideTableColumns: DataGridColumn<CompositionOverrideItem>[] =
  [
    {
      key: 'change_type',
      label: 'Change Type',
      formatValue: value => value ?? '',
      type: 'text',
      meta: {
        nonEditable: true,
      },
    },
    {
      key: 'override_type_no',
      label: 'Override Type',
      type: 'select',
      options: overrideTypeOptions,
      valueMap: {
        valueToDisplay: (value: number): string =>
          overrideTypeMap[value as keyof typeof overrideTypeMap] || '',
        displayToValue: (display: string): number => {
          const entry = Object.entries(overrideTypeMap).find(
            ([, v]) => v === display
          );
          return entry ? Number(entry[0]) : 1;
        },
      },
    },
    { key: 'tank', label: 'Tank', formatValue: value => value ?? '' },
    {
      key: 'override_variable',
      label: 'Variable',
      formatValue: value => value ?? '',
    },
    {
      key: 'override_value',
      label: 'Value',
      formatValue: value => value ?? '',
    },
    {
      key: 'period_from',
      label: 'Period From',
      type: 'date',
      formatValue: value => value ?? '',
      validateValue: validateDateFormat,
    },
    {
      key: 'period_to',
      label: 'Period To',
      type: 'date',
      formatValue: value => value ?? '',
      validateValue: validateDateFormat,
    },
    {
      key: 'effective_from',
      label: 'Effective From',
      type: 'date',
      formatValue: value => value ?? '',
      validateValue: validateDateFormat,
    },
    {
      key: 'effective_to',
      label: 'Effective To',
      type: 'date',
      formatValue: value => value ?? '',
      validateValue: validateDateFormat,
    },
    { key: 'comment', label: 'Comment', formatValue: value => value ?? '' },
    {
      key: 'affect_module',
      label: 'Affect Module',
      formatValue: value => value ?? '',
    },
    {
      key: 'created_date',
      label: 'Created Date',
      formatValue: value => value ?? '',
      meta: { nonEditable: true },
    },
    {
      key: 'created_by',
      label: 'Created By',
      formatValue: value => value ?? '',
      meta: { nonEditable: true },
    },
    {
      key: 'updated_date',
      label: 'Updated Date',
      formatValue: value => value ?? '',
      meta: { nonEditable: true },
    },
    {
      key: 'updated_by',
      label: 'Updated By',
      formatValue: value => value ?? '',
      meta: { nonEditable: true },
    },
  ];

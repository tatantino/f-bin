import type { DataGridColumn } from '@/components/shared/tables/excel-data-table';
import type { DmdChangeDetail } from './types/api';

// Page configuration
export const PAGE_TITLE = 'Edit Demand Change';
export const PAGE_DESCRIPTION = 'Edit demand change details';
export const PAGE_TOOLTIP = {
  content: (
    <>
      <h3 className="font-medium leading-none">About Demand Change Editor</h3>
      <div className="pt-2 text-sm text-muted-foreground">
        <p>Key features:</p>
        <ul className="mt-2 space-y-2">
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Edit Demand Change details directly in the table
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Update unit settings
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Save changes with remarks
          </li>
        </ul>
      </div>
    </>
  ),
};

// API endpoints
export const ENDPOINTS = {
  DEMANDS: {
    SUMMARIES: {
      SP_GB_VERSIONS: '/api/1.0/demands/summaries/sp-gb-versions',
    },
    COMPOSITION: {
      GEN_GROUPS: '/api/1.0/demands/mappings/gen-group-isopipe-mappings',
      COMPOSITION_GROUPS:
        '/api/1.0/demands/mappings/composition-group-mappings',
    },
    CHANGES: {
      VERSIONS: '/api/1.0/demands/changes/versions',
      VERSION: (id: string) => `/api/1.0/demands/changes/versions/${id}`,
    },
  },
};

// Layout and animation settings
export const LAYOUT_CONFIG = {
  container: 'flex h-full flex-col',
  tableContainer: 'min-h-0 flex-1 p-4',
  animations: {
    content: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.35, delay: 0.15 },
    },
    table: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
      transition: { duration: 0.2 },
    },
  },
};

// Initial empty row template
export const INITIAL_ROW = {
  dmd_change_detail_id: '',
  dmd_change_master_id: '',
  business_unit: '',
  region: '',
  gen_group: '',
  gen_size: '',
  composition_group: '',
  composition: '',
  customer: '',
  TFT_customer: '',
  TFT_region: '',
  area: '',
  thickness: '',
  grade: '',
  dmd_year: '',
  dmd_quarter: '',
  dmd_value: undefined,
};

// Minimum rows to display in table
export const MIN_ROWS = 7;

// Query keys
export const QUERY_KEYS = {
  GEN_GROUPS: 'gen-groups',
  COMPOSITION_GROUPS: 'composition-groups',
  DMD_CHANGE_DETAILS: (id: string) => ['dmd-change-details', id],
  DMD_VERSIONS: 'dmd-versions',
};

// Default value formatting function
export const defaultFormatValue = (value: string | number | null) =>
  String(value ?? '');

// Number input validation
export const validateNumberValue = (value: string) => {
  if (!value || value === '-') return null;
  return !isNaN(Number(value)) ? null : 'Invalid number';
};

// Create base metadata columns (read-only fields)
export const createBaseColumns = (): DataGridColumn<DmdChangeDetail>[] => [
  {
    key: 'business_unit',
    label: 'Business Unit',
    formatValue: defaultFormatValue,
  },
  { key: 'region', label: 'Region', formatValue: defaultFormatValue },
  { key: 'customer', label: 'Customer', formatValue: defaultFormatValue },
  {
    key: 'TFT_customer',
    label: 'TFT Customer',
    formatValue: defaultFormatValue,
  },
  { key: 'TFT_region', label: 'TFT Region', formatValue: defaultFormatValue },
  { key: 'area', label: 'Area', formatValue: defaultFormatValue },
  { key: 'thickness', label: 'Thickness', formatValue: defaultFormatValue },
  { key: 'grade', label: 'Grade', formatValue: defaultFormatValue },
];

// Create generation related columns, with dynamic options
export const createGenColumns = (
  genGroups: { gen_group: string; gens: string[] }[]
): DataGridColumn<DmdChangeDetail>[] => [
  {
    key: 'gen_group',
    label: 'Gen Group',
    type: 'select',
    options: genGroups.map(group => group.gen_group),
    formatValue: defaultFormatValue,
  },
  {
    key: 'gen_size',
    label: 'Gen Size',
    type: 'select',
    options: [],
    getDynamicOptions: row => {
      const group = genGroups.find(g => g.gen_group === row.gen_group);
      return group?.gens || [];
    },
    formatValue: defaultFormatValue,
  },
];

// Create composition related columns, with dynamic options
export const createCompositionColumns = (
  compositionGroups: { composition_group: string; compositions: string[] }[]
): DataGridColumn<DmdChangeDetail>[] => [
  {
    key: 'composition_group',
    label: 'Composition Group',
    type: 'select',
    options: compositionGroups.map(group => group.composition_group),
    formatValue: defaultFormatValue,
  },
  {
    key: 'composition',
    label: 'Composition',
    type: 'select',
    options: [],
    getDynamicOptions: row => {
      const group = compositionGroups.find(
        g => g.composition_group === row.composition_group
      );
      return group?.compositions || [];
    },
    formatValue: defaultFormatValue,
  },
];

// Create date value columns (editable demand values)
export const createDateColumns = (
  dates: string[]
): DataGridColumn<DmdChangeDetail>[] => {
  const currentYear = new Date().getFullYear();

  return dates
    .filter(date => parseInt(date.split('-')[0]) >= currentYear - 1)
    .map(date => ({
      key: `dmd_value_${date}` as const,
      label: date,
      type: 'number',
      formatValue: defaultFormatValue,
      validateValue: validateNumberValue,
    }));
};

/**
 * Layout and animation settings
 */
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
} as const;

/**
 * Table data configuration
 */

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
} as const;

// Minimum rows to display in table
export const MIN_ROWS = 7;

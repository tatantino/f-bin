import type { ExcelConfig } from '../../_shared/utils/excel-processor';
import type { TankInfo } from '../types/tank';

export const EXCEL_HEADER_MAP = {
  Tank: 'tank',
  BU: 'BU',
  Region: 'region',
  'Region Sequence': 'region_seq',
  Location: 'location',
  ISO: 'iso',
  Platform: 'platform',
  'Metal Shop': 'metal_shop',
} as const;

type ExcelHeaders = typeof EXCEL_HEADER_MAP;
type ExcelHeaderKey = keyof ExcelHeaders;

export const tankExcelConfig: Readonly<ExcelConfig<TankInfo>> = {
  requiredHeaders: Object.keys(EXCEL_HEADER_MAP),
  headerMap: new Map(Object.entries(EXCEL_HEADER_MAP)),

  processRow: (rawRow: Record<string, unknown>): TankInfo => {
    const processValue = (key: ExcelHeaderKey): string => {
      const value = rawRow[key];
      return value != null ? String(value) : '';
    };

    return {
      id: 0,
      tank: processValue('Tank'),
      BU: processValue('BU'),
      region: processValue('Region'),
      region_seq: Number(processValue('Region Sequence')) || 0,
      location: processValue('Location'),
      iso: processValue('ISO'),
      platform: processValue('Platform'),
      metal_shop: processValue('Metal Shop'),
    };
  },

  validateRow: (row: TankInfo, rowIndex: number): string[] => {
    const errors: string[] = [];
    const rowNumber = rowIndex + 1;

    if (!row.tank?.trim()) {
      errors.push(`Row ${rowNumber}: Tank is required`);
    }

    if (typeof row.region_seq !== 'number' || isNaN(row.region_seq)) {
      errors.push(`Row ${rowNumber}: Region Sequence must be a valid number`);
    }

    return errors;
  },
} as const;

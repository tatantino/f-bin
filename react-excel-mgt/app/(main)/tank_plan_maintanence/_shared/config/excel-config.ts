import { type ExcelConfig } from '../utils/excel-processor';
import type { TankPlanDetailData } from '../types';
import { PLAN_DETAIL_COLUMNS, validateField } from './config';
import { DateUtils, DataUtils } from '../utils/utils';
import { getExcelHeaders, getExcelHeaderMap } from './config';

export const ltPlanExcelConfig: ExcelConfig<TankPlanDetailData> = {
  requiredHeaders: getExcelHeaders(),
  headerMap: getExcelHeaderMap(),

  processRow: (rawRow: Record<string, unknown>): TankPlanDetailData => {
    if (!rawRow || typeof rawRow !== 'object') {
      throw new Error('Invalid row data');
    }

    const processedRow = Object.keys(PLAN_DETAIL_COLUMNS).reduce((acc, key) => {
      acc[key as keyof TankPlanDetailData] = '';
      return acc;
    }, {} as TankPlanDetailData);

    const headerMap = getExcelHeaderMap();

    Object.entries(rawRow).forEach(([excelHeader, value]) => {
      const internalKey = headerMap.get(excelHeader);
      if (internalKey) {
        const column = PLAN_DETAIL_COLUMNS[internalKey];

        // 处理空值
        if (
          value === null ||
          value === undefined ||
          value === '' ||
          value === 'TBD'
        ) {
          processedRow[internalKey as keyof TankPlanDetailData] = '';
          return;
        }

        if (column.type === 'date') {
          const dateValue = DateUtils.format(String(value));
          processedRow[internalKey as keyof TankPlanDetailData] = dateValue;
        } else if (column.type === 'number') {
          const numValue = DataUtils.cleanNumber(value);
          processedRow[internalKey as keyof TankPlanDetailData] =
            numValue !== null ? String(numValue) : ('' as any);
        } else {
          const cleanValue = DataUtils.cleanString(value);
          processedRow[internalKey as keyof TankPlanDetailData] =
            cleanValue || '';
        }
      }
    });

    return processedRow;
  },

  validateRow: (row: TankPlanDetailData, rowIndex: number): string[] => {
    const errors: string[] = [];
    const rowNum = rowIndex + 1;

    try {
      Object.entries(PLAN_DETAIL_COLUMNS).forEach(([key, column]) => {
        if (!column.validation) return;

        const value = row[key as keyof TankPlanDetailData];
        const error = validateField(value, column);
        if (error) {
          errors.push(`Row ${rowNum}: ${error}`);
        }
      });

      if (row.drain && row.start) {
        const drainDate = new Date(row.drain);
        const startDate = new Date(row.start);
        if (drainDate > startDate) {
          errors.push(`Row ${rowNum}: Drain date must be before Start date`);
        }
      }
    } catch (error) {
      errors.push(
        `Row ${rowNum} validation failed: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    }

    return errors;
  },
};

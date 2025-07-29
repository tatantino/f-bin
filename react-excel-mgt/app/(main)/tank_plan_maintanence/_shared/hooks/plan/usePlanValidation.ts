import type { TankPlanDetailData } from '../../types';
import { PLAN_DETAIL_COLUMNS, validateField } from '../../config/config';
import { useDataValidation } from '../../../_feature/plan-validation/useDataValidation';
import type { ValidationStep } from '../../../_feature/plan-validation/types';
import { differenceInDays, parse, isValid } from 'date-fns';

export const validationSteps: ValidationStep[] = [
  { id: 'format', label: 'Format Validation', status: 'pending' },
  { id: 'required', label: 'Required Fields', status: 'pending' },
  { id: 'business', label: 'Business Rules', status: 'pending' },
  { id: 'save', label: 'Save Data', status: 'pending' },
];

export async function validateFormat(
  data: TankPlanDetailData[]
): Promise<string[]> {
  const errors: string[] = [];
  data.forEach(row => {
    Object.entries(PLAN_DETAIL_COLUMNS).forEach(([key, column]) => {
      const value = row[key as keyof TankPlanDetailData];
      const error = validateField(value, column);
      if (error) {
        errors.push(`Plan ID ${row.plan_row_id}: ${error}`);
      }
    });
  });
  return errors;
}

export async function validateRequired(
  data: TankPlanDetailData[]
): Promise<string[]> {
  const errors: string[] = [];
  data.forEach(row => {
    Object.entries(PLAN_DETAIL_COLUMNS)
      .filter(([_, col]) =>
        col.validation?.some(rule => rule.type === 'required')
      )
      .forEach(([key, column]) => {
        const value = row[key as keyof TankPlanDetailData];
        const error = validateField(value, column);
        if (error) {
          errors.push(`Plan ID ${row.plan_row_id}: ${error}`);
        }
      });
  });
  return errors;
}

function parseDate(dateStr: string | null | undefined): Date | null {
  if (!dateStr) return null;
  const parsedDate = parse(dateStr, 'yyyy-MM-dd', new Date());
  return isValid(parsedDate) ? parsedDate : null;
}

function calculateDateDiff(
  startDate: string | null | undefined,
  endDate: string | null | undefined
): number | null {
  const start = parseDate(startDate);
  const end = parseDate(endDate);

  if (!start || !end) return null;
  return differenceInDays(end, start);
}

function isEmptyOrZero(value: any): boolean {
  return value === null || value === undefined || value === '' || value === 0;
}

export async function validateBusiness(
  data: TankPlanDetailData[],
  originalData?: TankPlanDetailData[]
): Promise<string[]> {
  const errors: string[] = [];

  if (originalData?.length) {
    data.forEach((row, index) => {
      const originalRow = originalData[index];
      if (!originalRow) return;

      const hasChanges = Object.keys(row).some(
        key => row[key] !== originalRow[key]
      );

      if (hasChanges) {
        if (!row.remark_category) {
          errors.push(
            `Plan ID ${row.plan_row_id}: Remark category is required for modified rows`
          );
        }
        if (!row.remark) {
          errors.push(
            `Plan ID ${row.plan_row_id}: Remark is required for modified rows`
          );
        }
      }
    });
  }

  data.forEach(row => {
    const dateFields = [
      'drain_date',
      'repair_date',
      'RTL_date',
      'TL_date',
      'GG_date',
    ] as const;

    const dates = dateFields
      .map(field => ({
        field,
        date: parseDate(row[field]),
      }))
      .filter(item => item.date !== null);

    for (let i = 0; i < dates.length - 1; i++) {
      const currentDate = dates[i];
      const nextDate = dates[i + 1];

      if (
        currentDate.date &&
        nextDate.date &&
        currentDate.date > nextDate.date
      ) {
        errors.push(
          `Plan ID ${row.plan_row_id}: ${currentDate.field} (${
            row[currentDate.field]
          }) must be before ${nextDate.field} (${row[nextDate.field]})`
        );
      }
    }

    if (!isEmptyOrZero(row.cold_idle)) {
      if (row.drain_date && row.repair_date) {
        const calculatedDiff = calculateDateDiff(
          row.drain_date,
          row.repair_date
        );
        if (
          calculatedDiff !== null &&
          Math.abs(calculatedDiff - row.cold_idle) > 0.1
        ) {
          errors.push(
            `Plan ID ${row.plan_row_id}: Cold Idle (${row.cold_idle}) does not match the difference between Repair Date and Drain Date (${calculatedDiff} days)`
          );
        }
      }
    }

    if (!isEmptyOrZero(row.repair_LT)) {
      if (row.repair_date && row.RTL_date) {
        const calculatedDiff = calculateDateDiff(row.repair_date, row.RTL_date);
        if (
          calculatedDiff !== null &&
          Math.abs(calculatedDiff - row.repair_LT) > 0.1
        ) {
          errors.push(
            `Plan ID ${row.plan_row_id}: Repair-LT (${row.repair_LT}) does not match the difference between RTL Date and Repair Date (${calculatedDiff} days)`
          );
        }
      }
    }

    if (!isEmptyOrZero(row.RTL_LT)) {
      if (row.RTL_date && row.TL_date) {
        const calculatedDiff = calculateDateDiff(row.RTL_date, row.TL_date);
        if (
          calculatedDiff !== null &&
          Math.abs(calculatedDiff - row.RTL_LT) > 0.1
        ) {
          errors.push(
            `Plan ID ${row.plan_row_id}: RTL-LT (${row.RTL_LT}) does not match the difference between TL Date and RTL Date (${calculatedDiff} days)`
          );
        }
      }
    }

    if (!isEmptyOrZero(row.TL_LT)) {
      if (row.TL_date && row.GG_date) {
        const calculatedDiff = calculateDateDiff(row.TL_date, row.GG_date);
        if (
          calculatedDiff !== null &&
          Math.abs(calculatedDiff - row.TL_LT) > 0.1
        ) {
          errors.push(
            `Plan ID ${row.plan_row_id}: TL-LT (${row.TL_LT}) does not match the difference between GG Date and TL Date (${calculatedDiff} days)`
          );
        }
      }
    }

    if (typeof row.tank_life === 'number' && row.tank_life < 0) {
      errors.push(`Plan ID ${row.plan_row_id}: Tank life cannot be negative`);
    }
  });

  return errors;
}

export function usePlanValidation() {
  return useDataValidation<TankPlanDetailData>({
    module: 'TankPlanValidation',
    steps: validationSteps,
    validateFormat,
    validateRequired,
    validateBusiness,
  });
}

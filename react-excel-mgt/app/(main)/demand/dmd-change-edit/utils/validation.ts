import type { DmdChangeDetail } from '../types/api';

/**
 * Validates a single row of demand change data
 * A row is valid if it's empty or if it has either gen_group or gen_size filled
 */
export const validateRow = (row: DmdChangeDetail): boolean => {
  const hasValue = Object.values(row).some(
    value => value !== null && value !== '' && value !== undefined
  );
  return !hasValue || Boolean(row.gen_group) || Boolean(row.gen_size);
};

/**
 * Validates all demand change data rows
 * Returns validation result with invalid row numbers if any
 */
export const validateData = (
  data: DmdChangeDetail[]
): { isValid: boolean; invalidRows: number[] } => {
  const invalidRows = data
    .map((row, index) => ({ row, index: index + 1 }))
    .filter(({ row }) => !validateRow(row))
    .map(({ index }) => index);

  return {
    isValid: invalidRows.length === 0,
    invalidRows,
  };
};

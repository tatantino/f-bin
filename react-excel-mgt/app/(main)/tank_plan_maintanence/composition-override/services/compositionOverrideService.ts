/**
 * Service for handling API operations and data validation
 */
import { API_PATH, type CompositionOverrideItem } from '../config';

/**
 * Validates date format (YYYY-MM-DD)
 */
export const validateDateFormat = (date?: string): boolean => {
  if (!date) return true;
  return /^\d{4}-\d{2}-\d{2}$/.test(date);
};

/**
 * Process data to enforce business rules:
 * - When override_type_no is 1, period_from and period_to should be undefined
 * - Validate date formats
 */
export const applyBusinessRules = (data: CompositionOverrideItem[]) =>
  data.map(row => {
    // For composition override type, clear period fields
    const processedRow =
      row.override_type_no === 1
        ? { ...row, period_from: undefined, period_to: undefined }
        : { ...row };

    // Validate date formats
    const validateField = (field: string, value?: string) => {
      if (value && !validateDateFormat(value)) {
        throw new Error(
          `Invalid ${field} date format for ${row.tank || 'new record'}`
        );
      }
    };

    validateField('effective_from', processedRow.effective_from);
    validateField('effective_to', processedRow.effective_to);
    validateField('period_from', processedRow.period_from);
    validateField('period_to', processedRow.period_to);

    return processedRow;
  });

/**
 * Fetches composition override data from the API
 */
export const fetchCompositionOverrides = async (): Promise<
  CompositionOverrideItem[]
> => {
  const response = await fetch(API_PATH);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to fetch composition overrides');
  }
  return response.json();
};

/**
 * Saves composition override data to the API
 */
export const saveCompositionOverrides = async (
  data: CompositionOverrideItem[]
): Promise<{ count: number }> => {
  const processedData = applyBusinessRules(data);
  const response = await fetch(API_PATH, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(processedData),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to save composition overrides');
  }
  return response.json();
};

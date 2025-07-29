/**
 * Utility functions for row filtering based on date fields
 */
import { DATE_FIELD_NAMES } from './types';

export const DATE_FILTER_THRESHOLD = 244; // ~8.5 months

/**
 * Calculate the difference in days between a date and today
 * @param date The date string to compare with today
 * @returns The absolute difference in days, or null if the date is invalid
 */
export function getDateDifference(date: string): number | null {
  if (!date) return null;
  const today = new Date();
  const targetDate = new Date(date);

  // Check if the parsed date is valid
  if (isNaN(targetDate.getTime())) return null;

  return Math.abs(
    Math.floor((targetDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
  );
}

/**
 * Filter rows based on date proximity to current date
 * @param row The data row to evaluate
 * @param dateFields Array of field names to check for dates
 * @param threshold Maximum number of days to include
 * @returns true if the row should be included, false otherwise
 */
export function filterRowsByDate<TData extends Record<string, any>>(
  row: TData,
  dateFields: readonly string[] = DATE_FIELD_NAMES,
  threshold: number = DATE_FILTER_THRESHOLD
): boolean {
  // Extract date differences for all date fields in the row
  const dateDiffs = dateFields
    .map(field => getDateDifference(row[field as keyof TData] as string))
    .filter((diff): diff is number => diff !== null);

  // Include the row if there are no date fields or if any date is within the threshold
  return dateDiffs.length === 0 || Math.min(...dateDiffs) <= threshold;
}

/**
 * Filter an array of data based on date fields
 * @param data Array of data objects to filter
 * @param showAllRows Whether to show all rows or apply date filtering
 * @param dateFields Array of field names to check for dates
 * @returns Filtered array of data objects
 */
export function filterDataByDates<TData extends Record<string, any>>(
  data: TData[],
  showAllRows: boolean,
  dateFields: readonly string[] = DATE_FIELD_NAMES
): TData[] {
  if (showAllRows) return data;
  return data.filter(row => filterRowsByDate(row, dateFields));
}

/**
 * Check if data contains any date fields that can be filtered
 * @param data Array of data objects to check
 * @param dateFields Array of field names to check for dates
 * @returns true if any row contains a date field, false otherwise
 */
export function hasDateFieldsInData<TData extends Record<string, any>>(
  data: TData[],
  dateFields: readonly string[] = DATE_FIELD_NAMES
): boolean {
  if (!data.length) return false;
  const firstRow = data[0];
  return dateFields.some(field => field in firstRow);
}

import type { DmdChangeMaster } from '../types/api';

/**
 * Data utility functions
 */

/**
 * Creates empty value entries for each date in dateYYYYQQs
 */
export const createEmptyValuesByDates = (dateYYYYQQs?: string[] | null) =>
  Object.fromEntries(
    (dateYYYYQQs || []).map(date => [`dmd_value_${date}`, null])
  );

/**
 * Checks if a valid version is selected
 */
export const isValidVersion = (versionInfo?: DmdChangeMaster | null) =>
  Boolean(versionInfo?.dmd_sp_gb_name);

/**
 * Filters out value fields from data object, keeping only metadata fields
 */
export const filterNonValueFields = (data: Record<string, unknown>) =>
  Object.fromEntries(
    Object.entries(data).filter(([key]) => !key.startsWith('dmd_value_'))
  );

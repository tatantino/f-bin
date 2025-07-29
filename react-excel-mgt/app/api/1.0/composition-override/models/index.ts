/**
 * CompositionOverride interface
 * Represents a composition override record
 */
export interface CompositionOverride {
  override_id?: string;
  override_type_no: string;
  override_type: string;
  tank: string;
  override_variable: string;
  override_value: string;
  period_from?: string;
  period_to?: string;
  effective_from?: string;
  effective_to?: string;
  comment?: string;
  created_date?: string;
  created_by: string;
  updated_date?: string;
  updated_by: string;
  affect_module?: string;
  change_type?: string | null;
}

/**
 * Record status constants
 */
export const CHANGE_TYPE = {
  NEW: 'I',
  UPDATE: 'U',
  DELETE: 'D',
} as const;

export type ChangeType = (typeof CHANGE_TYPE)[keyof typeof CHANGE_TYPE];

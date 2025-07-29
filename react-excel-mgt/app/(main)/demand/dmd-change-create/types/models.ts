import type { DmdChangeDetail } from './api';

/**
 * Extended demand change detail DTO
 * Contains dynamic value fields
 */
export interface ExtendedDmdChangeDetail extends DmdChangeDetail {
  [key: `dmd_value_${string}`]: number | null;
}

/**
 * Transformed detail data
 */
export interface TransformedDetail extends DmdChangeDetail {
  dmd_change_detail_id: string;
  dmd_change_master_id: string;
  business_unit: string;
  region: string;
  gen_group: string;
  gen_size: string;
  composition_group: string;
  composition: string;
  customer: string;
  TFT_customer: string;
  TFT_region: string;
  area: string;
  thickness: string;
  grade: string;
  dmd_year: string;
  dmd_quarter: string;
  dmd_value: number;
}

/**
 * Composition group type
 */
export interface CompositionGroup {
  composition_group: string;
  compositions: string[];
}

/**
 * Production group type
 */
export interface GenGroup {
  gen_group: string;
  gens: string[];
}

/**
 * Group data wrapper type
 */
export interface GroupData<T> {
  loading: boolean;
  error: string | null;
  data: T[];
}

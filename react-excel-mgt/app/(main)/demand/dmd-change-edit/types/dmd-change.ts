import type { DmdChangeDetail } from './api';

export interface ExtendedDmdChangeDetail extends DmdChangeDetail {
  [key: `dmd_value_${string}`]: number | null;
}

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

// Tank Plan Master Types
export interface TankPlanMaster {
  plan_master_id?: number;
  plan_version: string;
  plan_type: string;
  plan_official?: string;
  plan_version_no: number;
  plan_version_parent?: number;
  version_match?: string;
  user_name: string;
  create_timestamp?: string;
  update_timestamp?: string;
}

export type CreateTankPlanMaster = Omit<
  TankPlanMaster,
  'plan_master_id' | 'create_timestamp' | 'update_timestamp' | 'version_match'
>;

export type UpdateTankPlanMaster = Partial<CreateTankPlanMaster>;

// Tank Plan Detail Types
export interface TankPlanDetail {
  plan_detail_id?: number;
  plan_master_id?: number;
  plan_row_id: number;
  tank: string;
  iso: string;
  glass_type: string;
  gen: string;
  RT: string;
  RC: string;
  platform: string;
  design_asis: string;
  tank_life: number;
  last_tank_light_date: string;
  drain_date: string;
  repair_date: string;
  RTL_date: string;
  TL_date: string;
  GG_date: string;
  cold_idle: number;
  repair_LT: number;
  RTL_LT: number;
  TL_LT: number;
  remark_category: string;
  remark: string;
  comment: string;
}

// Tank Plan History Types
export interface TankPlanHistory {
  plan_change_hist_id?: number;
  plan_master_id: number;
  tank: string;
  RC: string;
  drain_date_o?: string | null;
  repair_date_o?: string | null;
  RTL_date_o?: string | null;
  TL_date_o?: string | null;
  GG_date_o?: string | null;
  drain_date_n?: string | null;
  repair_date_n?: string | null;
  RTL_date_n?: string | null;
  TL_date_n?: string | null;
  GG_date_n?: string | null;
  remark_category: string;
  remark: string;
  username: string;
  plan_change_hist_timestamp?: string;
  update_timestamp?: string;
}

export type CreateTankPlanHistory = Omit<
  TankPlanHistory,
  'plan_change_hist_id' | 'plan_change_hist_timestamp' | 'update_timestamp'
>;

// Tank Types
export interface Tank {
  id?: number;
  tank: string;
  BU: string;
  region: string;
  region_seq: number | string;
  location: string;
  iso: string;
  platform: string;
  metal_shop: string;
  create_timestamp?: string;
  update_timestamp?: string;
}

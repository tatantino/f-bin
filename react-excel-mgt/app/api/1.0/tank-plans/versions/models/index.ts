/**
 * Tank Plan Master Interface
 */
export interface TankPlanMaster {
  plan_master_id?: string;
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

/**
 * Create and update types
 */
export type CreateTankPlanMaster = Omit<
  TankPlanMaster,
  'plan_master_id' | 'create_timestamp' | 'update_timestamp' | 'version_match'
>;

export type UpdateTankPlanMaster = Partial<CreateTankPlanMaster>;

/**
 * Tank Plan Detail Interface
 */
export interface TankPlanDetail {
  plan_detail_id: number;
  plan_master_id: number;
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

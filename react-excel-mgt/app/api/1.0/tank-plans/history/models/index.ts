/**
 * Tank Plan History interface
 * Represents a tank plan change history record
 */
export interface TankPlanHistory {
  plan_change_hist_id: number;
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

export type UpdateTankPlanHistory = Partial<CreateTankPlanHistory>;

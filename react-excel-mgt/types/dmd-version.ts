export interface DmdVersion {
  dmd_change_master_id: string;
  dmd_sp_gb_name: string;
  tank_plan_master_id: string;
  dmd_remark: string | null;
  dmd_change_name: string | null;
  dmd_change_unit: string | null;
  username: string;
  create_timestamp?: string;
  update_timestamp?: string;
}

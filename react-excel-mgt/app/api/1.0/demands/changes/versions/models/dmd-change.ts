/**
 * 需求变更主记录数据接口
 *
 * 用于表示需求变更的基本信息，如变更ID、关联的SP/GB版本、单位、备注等
 */
export interface DmdChangeMaster {
  dmd_change_master_id: string;
  dmd_sp_gb_name: string;
  username: string;
  dmd_change_name: string;
  dmd_change_unit: string;
  dmd_remark: string;
  date_YYYYQQs: string[];
  create_timestamp: string;
  update_timestamp: string;
}

/**
 * 需求变更详情数据接口
 *
 * 用于表示需求变更的具体数据，包含维度细分(世代组、组分组等)和变更值
 */
export interface DmdChangeDetail {
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
  dmd_value?: number;
  create_timestamp: string;
  update_timestamp: string;
  [key: `dmd_value_${string}`]: number | null;
}

/**
 * 创建需求变更主记录类型
 * 排除自动生成的时间戳和记录数量字段
 */
export type CreateDmdChangeMaster = Omit<
  DmdChangeMaster,
  'create_timestamp' | 'update_timestamp' | 'row_count'
>;

/**
 * 更新需求变更主记录类型
 * 所有字段为可选，便于部分更新
 */
export type UpdateDmdChangeMaster = Partial<CreateDmdChangeMaster>;

/**
 * 创建需求变更详情类型
 * 排除自动生成的时间戳字段
 */
export type CreateDmdChangeDetail = Omit<
  DmdChangeDetail,
  'create_timestamp' | 'update_timestamp'
>;

/**
 * 更新需求变更详情类型
 * 所有字段为可选，便于部分更新
 */
export type UpdateDmdChangeDetail = Partial<CreateDmdChangeDetail>;

/**
 * 完整需求变更数据结构
 * 包含主记录和详情记录列表
 */
export interface DemandChangeData {
  master: DmdChangeMaster;
  details: DmdChangeDetail[];
}

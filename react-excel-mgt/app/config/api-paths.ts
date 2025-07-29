/**
 * 全局API端点配置
 * 集中管理所有的API路径，避免在各个模块中重复定义
 */

// API基础路径
const API_BASE = '/api/1.0';

// 资源类型定义
export type ResourceId = string | number;

/**
 * 完整API端点配置
 */
export const API = {
  // 需求模块
  DEMANDS: {
    // 基础路径
    BASE: `${API_BASE}/demands`,

    // 需求变更
    CHANGES: {
      BASE: `${API_BASE}/demands/changes`,
      VERSIONS: `${API_BASE}/demands/changes/versions`,
      VERSION: (id: ResourceId) => `${API_BASE}/demands/changes/versions/${id}`,
    },

    // 组分组映射
    COMPOSITION: {
      BASE: `${API_BASE}/demands/mappings`,
      COMPOSITION_GROUPS: `${API_BASE}/demands/mappings/composition-group-mappings`,
      GEN_GROUPS: `${API_BASE}/demands/mappings/gen-group-isopipe-mappings`,
    },

    // 需求汇总
    SUMMARIES: {
      BASE: `${API_BASE}/demands/summaries`,
      SP_GB_VERSIONS: `${API_BASE}/demands/summaries/sp-gb-versions`,
    },
  },

  // 坦克模块
  TANKS: {
    BASE: `${API_BASE}/tanks`,
    DETAIL: (id: ResourceId) => `${API_BASE}/tanks/${id}`,
    BATCH_UPDATE: `${API_BASE}/tanks/batch-update`,
  },

  // 坦克计划模块
  TANK_PLANS: {
    BASE: `${API_BASE}/tank-plans`,
    VERSIONS: `${API_BASE}/tank-plans/versions`,
    VERSION: (id: ResourceId) => `${API_BASE}/tank-plans/versions/${id}`,
    HISTORY: `${API_BASE}/tank-plans/history`,
  },
};

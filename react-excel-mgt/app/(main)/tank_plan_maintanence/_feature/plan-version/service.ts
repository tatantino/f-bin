import type { PlanVersion } from '../../_shared/types';

const API_BASE = '/api/1.0/tank-plans/versions';

export interface VersionResponse {
  master: PlanVersion;
  details: any[]; // 我们只关心master部分，details类型可以简化
}

export const VersionService = {
  async getVersionInfo(id: number): Promise<PlanVersion> {
    // 快速检查，避免无效ID请求
    if (!id || id <= 0) {
      throw new Error('Invalid version ID');
    }

    const response = await fetch(`${API_BASE}/${id}`);

    if (!response.ok) {
      throw new Error(`Error fetching version info: ${response.status}`);
    }

    const result = (await response.json()) as VersionResponse;
    return result.master;
  },

  async getParentId(id: number): Promise<number | null> {
    if (!id || id <= 0) return null;

    const response = await fetch(`${API_BASE}/${id}`);
    if (!response.ok) return null;

    const result = (await response.json()) as VersionResponse;
    // 直接返回父版本ID
    return result.master?.plan_version_parent || null;
  },
};

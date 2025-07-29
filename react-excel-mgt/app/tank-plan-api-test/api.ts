'use client';

import {
  TankPlanMaster,
  TankPlanDetail,
  CreateTankPlanMaster,
  UpdateTankPlanMaster,
  TankPlanHistory,
  CreateTankPlanHistory,
  Tank,
} from './types';

const API_BASE = '/api/1.0/tank-plans';

// Generic API fetch function with error handling
async function fetchApiData<T>(url: string, options?: RequestInit): Promise<T> {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `API request failed: ${response.status} ${response.statusText} ${errorText}`
      );
    }
    return await response.json();
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
}

// Tank Plan Versions API
export const tankPlanVersionsApi = {
  // Get list of versions with optional filters
  getVersions: async (
    params: URLSearchParams = new URLSearchParams()
  ): Promise<TankPlanMaster[]> => {
    return fetchApiData<TankPlanMaster[]>(
      `${API_BASE}/versions?${params.toString()}`
    );
  },

  // Get single version by id
  getVersion: async (
    id: string
  ): Promise<{ master: TankPlanMaster; details: TankPlanDetail[] }> => {
    return fetchApiData<{ master: TankPlanMaster; details: TankPlanDetail[] }>(
      `${API_BASE}/versions/${id}`
    );
  },

  // Create new version
  createVersion: async (data: {
    master: CreateTankPlanMaster;
    details?: TankPlanDetail[];
  }): Promise<{ id: number }> => {
    return fetchApiData<{ id: number }>(`${API_BASE}/versions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  },

  // Update existing version
  updateVersion: async (
    id: string,
    data: { master?: UpdateTankPlanMaster; details?: TankPlanDetail[] }
  ): Promise<void> => {
    try {
      const response = await fetch(`${API_BASE}/versions/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Failed to update version: ${response.status} ${response.statusText} ${errorText}`
        );
      }

      return await response.json();
    } catch (error) {
      console.error(`Error updating version ${id}:`, error);
      throw error;
    }
  },

  // Delete version
  deleteVersion: async (id: string): Promise<void> => {
    try {
      const response = await fetch(`${API_BASE}/versions/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Failed to delete version: ${response.status} ${response.statusText} ${errorText}`
        );
      }

      return await response.json();
    } catch (error) {
      console.error(`Error deleting version ${id}:`, error);
      throw error;
    }
  },
};

// Tank Plan History API
export const tankPlanHistoryApi = {
  // Get history entries with optional filters
  getHistories: async (
    params: URLSearchParams = new URLSearchParams()
  ): Promise<TankPlanHistory[]> => {
    return fetchApiData<TankPlanHistory[]>(
      `${API_BASE}/history?${params.toString()}`
    );
  },

  // Create new history entry
  createHistory: async (data: CreateTankPlanHistory): Promise<void> => {
    try {
      const response = await fetch(`${API_BASE}/history`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Failed to create history: ${response.status} ${response.statusText} ${errorText}`
        );
      }

      return await response.json();
    } catch (error) {
      console.error('Error creating history:', error);
      throw error;
    }
  },

  // Create multiple history entries in a single request
  createHistories: async (
    data: CreateTankPlanHistory[]
  ): Promise<{ count: number }> => {
    try {
      const response = await fetch(`${API_BASE}/history`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Failed to create histories: ${response.status} ${response.statusText} ${errorText}`
        );
      }

      return await response.json();
    } catch (error) {
      console.error('Error creating histories:', error);
      throw error;
    }
  },
};

// Tanks API
export const tanksApi = {
  getTanks: async (): Promise<Tank[]> => {
    return fetchApiData<Tank[]>('/api/1.0/tanks');
  },

  saveTanks: async (tanks: Tank[]): Promise<{ count: number }> => {
    return fetchApiData<{ count: number }>('/api/1.0/tanks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tanks),
    });
  },
};

export const compositionOverrideApi = {
  getOverrides: async () => {
    return fetchApiData('/api/1.0/composition-override');
  },

  saveOverrides: async (overrides: any[]): Promise<{ count: number }> => {
    return fetchApiData<{ count: number }>('/api/1.0/composition-override', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(overrides),
    });
  },
};

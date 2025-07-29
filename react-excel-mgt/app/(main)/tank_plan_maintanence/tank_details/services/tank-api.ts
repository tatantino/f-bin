import type { TankInfo, BatchUpdateResponse, ApiResponse } from '../types/tank';
import { ENDPOINTS } from './endpoints';

async function handleApiResponse<T>(
  response: Response
): Promise<ApiResponse<T>> {
  if (!response.ok) {
    const errorText = await response.text();
    try {
      const errorJson = JSON.parse(errorText);
      return {
        success: false,
        error: errorJson.error || `HTTP error ${response.status}`,
      };
    } catch {
      return {
        success: false,
        error: errorText || `HTTP error ${response.status}`,
      };
    }
  }

  try {
    const result = await response.json();
    return result;
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : 'Failed to parse response',
    };
  }
}

export const TankApiService = {
  async getTankList(): Promise<ApiResponse<TankInfo[]>> {
    try {
      const response = await fetch(ENDPOINTS.TANKS.LIST);
      return handleApiResponse<TankInfo[]>(response);
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch tanks',
      };
    }
  },

  async saveTankList(
    tanks: TankInfo[]
  ): Promise<ApiResponse<BatchUpdateResponse>> {
    try {
      const response = await fetch(ENDPOINTS.TANKS.LIST, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tanks),
      });
      return handleApiResponse<BatchUpdateResponse>(response);
    } catch (error) {
      return {
        success: false,
        error:
          error instanceof Error ? error.message : 'Failed to update tanks',
      };
    }
  },
};

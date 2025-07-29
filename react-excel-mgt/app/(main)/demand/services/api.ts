import type { ApiResponse } from '../types';

/**
 * API服务类
 * 提供HTTP请求方法，统一错误处理
 */
export class ApiService {
  /**
   * POST请求
   * @param url - API端点URL
   * @param data - 请求体数据
   * @returns 请求结果
   */
  static async post<T, D = any>(
    url: string,
    data?: D
  ): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`Failed to post: ${url}`, error);
      return {
        success: false,
        error: {
          message:
            error instanceof Error ? error.message : 'Failed to post data',
        },
      };
    }
  }

  /**
   * PATCH请求
   * @param url - API端点URL
   * @param data - 请求体数据
   * @returns 请求结果
   */
  static async patch<T, D = any>(
    url: string,
    data?: D
  ): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`Failed to update: ${url}`, error);
      return {
        success: false,
        error: {
          message:
            error instanceof Error ? error.message : 'Failed to update data',
        },
      };
    }
  }
}

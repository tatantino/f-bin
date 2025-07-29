interface ApiError {
  code: string;
  message: string;
}

interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: ApiError;
  meta?: Record<string, unknown>;
}

interface RequestConfig extends RequestInit {
  params?: Record<string, string>;
}

export class ApiClient {
  private static readonly BASE_HEADERS = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  private static createUrl(
    url: string,
    params?: Record<string, string>
  ): string {
    if (!params) return url;
    const searchParams = new URLSearchParams(params);
    return `${url}?${searchParams.toString()}`;
  }

  private static async handleResponse<T>(
    response: Response
  ): Promise<ApiResponse<T>> {
    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: {
          code: response.status.toString(),
          message: data.error?.message || response.statusText,
        },
      };
    }

    return data;
  }

  private static async request<T>(
    url: string,
    config: RequestConfig = {}
  ): Promise<ApiResponse<T>> {
    try {
      const { params, headers, ...restConfig } = config;
      const response = await fetch(this.createUrl(url, params), {
        headers: {
          ...this.BASE_HEADERS,
          ...headers,
        },
        ...restConfig,
      });
      return this.handleResponse<T>(response);
    } catch (error) {
      return {
        success: false,
        error: {
          code: 'NETWORK_ERROR',
          message:
            error instanceof Error ? error.message : 'Network request failed',
        },
      };
    }
  }

  static async get<T>(
    url: string,
    params?: Record<string, string>
  ): Promise<ApiResponse<T>> {
    return this.request<T>(url, { method: 'GET', params });
  }

  static async post<T>(url: string, data: unknown): Promise<ApiResponse<T>> {
    return this.request<T>(url, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  static async patch<T>(url: string, data: unknown): Promise<ApiResponse<T>> {
    return this.request<T>(url, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  static async delete<T>(url: string): Promise<ApiResponse<T>> {
    return this.request<T>(url, { method: 'DELETE' });
  }
}

export class ApiClient {
  static async get<T>(url: string, queryParams?: Record<string, string>) {
    const queryString = queryParams
      ? new URLSearchParams(
          Object.entries(queryParams).filter(
            ([_, value]) => value !== undefined && value !== 'all'
          )
        ).toString()
      : '';

    const response = await fetch(
      `${url}${queryString ? `?${queryString}` : ''}`
    );

    if (!response.ok) {
      const errorData = await response
        .json()
        .catch(() => ({ message: response.statusText }));
      throw new Error(errorData.message || `Error: ${response.status}`);
    }

    return (await response.json()) as T;
  }

  static async post<T>(url: string, data: unknown) {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response
        .json()
        .catch(() => ({ message: response.statusText }));
      throw new Error(errorData.message || `Error: ${response.status}`);
    }

    return (await response.json()) as T;
  }

  static async patch<T>(url: string, data: unknown) {
    const response = await fetch(url, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response
        .json()
        .catch(() => ({ message: response.statusText }));
      throw new Error(errorData.message || `Error: ${response.status}`);
    }

    return (await response.json()) as T;
  }
}

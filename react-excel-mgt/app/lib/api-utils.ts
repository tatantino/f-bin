export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}

export async function handleApiResponse<T>(
  response: Response
): Promise<ApiResponse<T>> {
  if (!response.ok) {
    let errorMessage: string;
    try {
      const errorText = await response.text();
      try {
        const errorJson = JSON.parse(errorText);
        errorMessage = errorJson.error || `HTTP error ${response.status}`;
      } catch {
        errorMessage = errorText || `HTTP error ${response.status}`;
      }
    } catch {
      errorMessage = `HTTP error ${response.status}`;
    }
    return { success: false, error: errorMessage };
  }

  try {
    const responseText = await response.text();
    if (!responseText) {
      return { success: true };
    }

    const data = JSON.parse(responseText);
    if (data.error) {
      return { success: false, error: data.error };
    }

    return {
      success: true,
      data: data.data || data,
    };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : 'Failed to parse response',
    };
  }
}

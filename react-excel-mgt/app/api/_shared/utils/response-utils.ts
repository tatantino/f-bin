import { NextResponse } from 'next/server';

const HEADERS = { 'Content-Type': 'application/json' };

/**
 * Common HTTP status codes for API responses
 * Use these constants for better code readability when setting response status
 */
export const HTTP_STATUS = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_ERROR: 500,
};

export class ApiResponseUtils {
  static success<T>(data: T, meta?: Record<string, unknown>): Response {
    return new Response(
      JSON.stringify({ success: true, data, ...(meta && { meta }) }),
      { status: HTTP_STATUS.OK, headers: HEADERS }
    );
  }

  static error(code: keyof typeof HTTP_STATUS, message: string): Response {
    const status = HTTP_STATUS[code];
    return new Response(
      JSON.stringify({ success: false, error: { code, message } }),
      { status, headers: HEADERS }
    );
  }
}

/**
 * Utility function to handle API requests with consistent error handling
 * @param handler Async function that performs the API operation
 * @param defaultErrorMessage Default error message to use if error is not an Error object
 * @returns Response object with the result of the handler or an error
 */
export async function handleApiRequest<T>(
  handler: () => Promise<T>,
  defaultErrorMessage: string
): Promise<Response> {
  try {
    const result = await handler();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : defaultErrorMessage },
      { status: HTTP_STATUS.INTERNAL_ERROR }
    );
  }
}

/**
 * Common test utilities for API testing
 * Provides standardized testing functions and helpers
 */

import { NextRequest } from 'next/server';

/**
 * Request helpers
 */

// Create a mock request object with optional method and body
export const createMockRequest = (
  url: string,
  method = 'GET',
  body?: object
) => {
  return new NextRequest(url, {
    method,
    body: body ? JSON.stringify(body) : undefined,
  });
};

// Create mock route parameters for route handlers with ID
export const createMockParams = (id: string) => ({ params: { id } });

/**
 * Mock setup helpers
 */

// Set up common mocks for Next.js API route testing
export const setupApiMocks = () => {
  // Mock NextResponse
  jest.mock('next/server', () => ({
    NextRequest: jest.fn().mockImplementation((url, init) => ({
      url,
      method: init?.method || 'GET',
      json: () => Promise.resolve(init?.body ? JSON.parse(init.body) : {}),
    })),
    NextResponse: {
      json: jest.fn().mockImplementation((body, init) => ({
        status: init?.status || 200,
        headers: init?.headers || {},
        json: () => Promise.resolve(body),
      })),
    },
  }));
};

/**
 * Service mock helpers
 */

// Mock a successful service response
export const mockServiceSuccess = (mockFn: jest.Mock, value: any) => {
  mockFn.mockResolvedValue(value);
};

// Mock a service error response
export const mockServiceError = (mockFn: jest.Mock, message: string) => {
  mockFn.mockRejectedValue(new Error(message));
};

/**
 * Database mock helpers
 */

// Create direct database mock for service tests
export const mockDatabase = (mockResults?: any) => {
  const queryDirectMock = jest.fn();

  if (mockResults) {
    queryDirectMock.mockResolvedValue(mockResults);
  }

  return {
    queryDirect: queryDirectMock,
    mockResult: (results: any) => queryDirectMock.mockResolvedValue(results),
    mockError: (message: string) =>
      queryDirectMock.mockRejectedValue(new Error(message)),
  };
};

/**
 * Assertion helpers
 */

// Verify a successful response
export const expectSuccessResponse = async (
  response: any,
  expectedData: any
) => {
  const data = await response.json();
  expect(response.status).toBe(200);
  expect(data).toEqual(expectedData);
};

// Verify an error response
export const expectErrorResponse = async (
  response: any,
  expectedMessage: string
) => {
  const data = await response.json();
  expect(response.status).toBe(500);
  expect(data).toEqual({ message: expectedMessage });
};

// Verify that a promise throws with a specific error message
export const expectToThrowWithMessage = async (
  promise: Promise<any>,
  errorMessage: string
) => {
  try {
    await promise;
    fail('Expected to throw error');
  } catch (error) {
    expect(error).toBeInstanceOf(Error);
    expect((error as Error).message).toBe(errorMessage);
  }
};

/**
 * Cleanup helpers
 */

// Reset all mocks between tests
export const resetAllMocks = () => {
  jest.clearAllMocks();
};

/**
 * Test Utilities Index
 *
 * This file exports all test utilities for easier imports.
 * Use this single import to access all test utilities:
 * ```
 * import { createMockRequest, mockServiceSuccess, tankPlanTestData } from '@test-utils';
 * ```
 */

// Core test utilities
export {
  // Request helpers
  createMockRequest,
  createMockParams,

  // Mock setup helpers
  setupApiMocks,

  // Response mock helpers
  mockServiceSuccess,
  mockServiceError,

  // Database mock helpers
  mockDatabase,

  // Assertion helpers
  expectSuccessResponse,
  expectErrorResponse,
  expectToThrowWithMessage,
} from './test-utils';

// Database service utilities
export { createMockDbRows } from './service-test-utils';

// Test data (re-exported from the data directory)
export * from './data';

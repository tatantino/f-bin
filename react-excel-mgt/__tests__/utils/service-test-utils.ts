/**
 * Database service testing utilities
 * Simple helpers for testing database-related services
 */

/**
 * Create mock database rows with specified structure
 * Helps create test data for database tests
 *
 * @param count Number of rows to create
 * @param template Base template for each row
 * @param modifier Optional function to modify each row
 * @returns Array of mock database rows
 */
export const createMockDbRows = <T extends Record<string, any>>(
  count: number,
  template: T,
  modifier?: (index: number, base: T) => Partial<T>
): T[] => {
  return Array.from({ length: count }, (_, i) => {
    const base = { ...template };
    if (modifier) {
      return { ...base, ...modifier(i, base) };
    }
    return base;
  });
};

/**
 * Mock batch operations for database service
 */
export const mockBatchOperations = {
  batchInsert: jest.fn().mockResolvedValue({ success: true }),
  batchUpdate: jest.fn().mockResolvedValue({ success: true }),
  batchDelete: jest.fn().mockResolvedValue({ success: true }),

  reset() {
    this.batchInsert.mockReset();
    this.batchUpdate.mockReset();
    this.batchDelete.mockReset();
    return this;
  },
};

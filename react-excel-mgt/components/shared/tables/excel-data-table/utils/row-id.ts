/**
 * Utilities for cell ID generation
 */

/**
 * Create a unique cell identifier from rowId and columnId
 */
export function createCellId(rowId: string, columnId: string): string {
  return `${rowId}-${columnId}`;
}

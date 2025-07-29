import { SizeType } from '../../types';

/**
 * Creates a key for base data lookup
 * Generates a consistent key format for referencing gen group and composition group combinations
 */

/**
 * Creates initial ratios based on size mappings
 * Distributes percentages across sizes based on their allocation values
 * If no allocations exist, distributes equally
 */
export const createInitialRatios = (
  genGroup: string,
  sizeMappings: Array<{ size: string; allocation: number }>
): Record<SizeType, number> => {
  if (!sizeMappings.length) return {};

  const nonZeroMappings = sizeMappings.filter(
    mapping => mapping.allocation > 0
  );

  if (nonZeroMappings.length === 0) {
    const equalShare = 100 / sizeMappings.length;
    return Object.fromEntries(
      sizeMappings.map(({ size }) => [size, equalShare])
    ) as Record<SizeType, number>;
  }

  const total = nonZeroMappings.reduce(
    (sum, { allocation }) => sum + allocation,
    0
  );
  const scaleFactor = 100 / total;

  const ratios = Object.fromEntries(
    sizeMappings.map(({ size, allocation }) => [
      size,
      allocation === 0 ? 0 : Math.round(allocation * scaleFactor),
    ])
  );

  const currentTotal = Object.values(ratios).reduce(
    (sum, value) => sum + value,
    0
  );
  if (currentTotal !== 100) {
    const largestSize = nonZeroMappings.sort(
      (a, b) => ratios[b.size] - ratios[a.size]
    )[0]?.size;

    if (largestSize) {
      ratios[largestSize] += 100 - currentTotal;
    }
  }

  return ratios as Record<SizeType, number>;
};

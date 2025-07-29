import { SizeType } from '../../types';

/**
 * Checks if a ratio distribution contains negative values
 *
 * @param ratios Ratio values to check
 * @returns True if any ratio is negative
 */
export const hasNegativeRatios = (
  ratios: Record<SizeType, number>
): boolean => {
  return Object.values(ratios).some(val => val < 0);
};

/**
 * Calculates how much a neighboring size can absorb from a ratio change
 *
 * @param neighborValue Current value of the neighboring size
 * @param changeAmount The amount that needs to be absorbed (positive means decrease)
 * @param allowsNegative Whether negative ratios are permitted
 * @returns New value for the neighbor and amount absorbed
 */
export const adjustNextCellValue = (
  neighborValue: number,
  changeAmount: number,
  allowsNegative: boolean
): { nextNewValue: number; absorbedDifference: number } => {
  const lowerLimit = allowsNegative ? -100 : 0;

  // If neighbor can fully absorb the change while staying within bounds
  if (
    (allowsNegative || neighborValue + changeAmount >= 0) &&
    neighborValue + changeAmount <= 100
  ) {
    return {
      nextNewValue: neighborValue + changeAmount,
      absorbedDifference: changeAmount,
    };
  }

  // Calculate capacity limits of the neighboring size
  const upperCapacity = 100 - neighborValue; // how much it can increase
  const lowerCapacity = neighborValue - lowerLimit; // how much it can decrease

  let absorbedDifference = 0;
  let nextNewValue = neighborValue;

  if (changeAmount > 0 && upperCapacity < 0) {
    // Neighbor needs to decrease (when changeAmount is positive)
    absorbedDifference = Math.min(changeAmount, -upperCapacity);
    nextNewValue = neighborValue - absorbedDifference;
  } else if (changeAmount < 0 && lowerCapacity > 0) {
    // Neighbor needs to increase (when changeAmount is negative)
    absorbedDifference = Math.max(changeAmount, -lowerCapacity);
    nextNewValue = neighborValue - absorbedDifference;
  }

  return { nextNewValue, absorbedDifference };
};

/**
 * Distributes unabsorbed change proportionally among remaining sizes
 *
 * @param ratios Current ratio values
 * @param changedSize Size that was directly changed by user
 * @param neighborSize Size that already attempted to absorb change
 * @param remainingChange Change amount still needing distribution
 * @returns Updated ratios with distributed change
 */
export const distributeRemainingDifference = (
  ratios: Record<SizeType, number>,
  changedSize: SizeType,
  neighborSize: SizeType,
  remainingChange: number
): Record<SizeType, number> => {
  const updatedRatios = { ...ratios };
  const sizes = Object.keys(ratios);

  // Skip distribution if change is negligible
  if (Math.abs(remainingChange) <= 0.001) return updatedRatios;

  // Find sizes that haven't been adjusted yet
  const otherSizes = sizes.filter(
    size => size !== changedSize && size !== neighborSize
  );

  if (otherSizes.length === 0) return updatedRatios;

  // Calculate total of other sizes for proportional distribution
  const otherSizesTotal = otherSizes.reduce(
    (sum, size) => sum + ratios[size],
    0
  );

  if (Math.abs(otherSizesTotal) < 0.001) {
    // Equal distribution if other sizes total is near zero
    const equalShare = remainingChange / otherSizes.length;
    otherSizes.forEach(size => {
      updatedRatios[size] = ratios[size] - equalShare;
    });
  } else {
    // Proportional distribution based on relative weights
    otherSizes.forEach(size => {
      const proportion = ratios[size] / otherSizesTotal;
      updatedRatios[size] = ratios[size] - remainingChange * proportion;
    });
  }

  return updatedRatios;
};

/**
 * Ensures ratio total is exactly 100% after adjustments
 *
 * @param ratios Current ratio values
 * @param changedSize Size directly changed by user
 * @param neighborSize First neighboring size
 * @param allowsNegative Whether negative ratios are permitted
 * @returns Normalized ratios summing to exactly 100%
 */
export const normalizeRatiosTo100 = (
  ratios: Record<SizeType, number>,
  changedSize: SizeType,
  neighborSize: SizeType,
  allowsNegative: boolean
): Record<SizeType, number> => {
  const normalizedRatios = { ...ratios };
  const sizes = Object.keys(normalizedRatios);

  // Round values and calculate total
  let total = 0;
  for (const size of sizes) {
    if (allowsNegative) {
      normalizedRatios[size] = Math.round(normalizedRatios[size]);
    } else {
      normalizedRatios[size] = Math.max(0, Math.round(normalizedRatios[size]));
    }
    total += normalizedRatios[size];
  }

  // No adjustment needed if already at 100
  if (total === 100) return normalizedRatios;

  // Calculate adjustment needed
  const adjustment = 100 - total;

  // Try to adjust neighbor first
  if (
    (allowsNegative || normalizedRatios[neighborSize] + adjustment >= 0) &&
    normalizedRatios[neighborSize] + adjustment <= 100
  ) {
    normalizedRatios[neighborSize] += adjustment;
  } else {
    // Find another adjustable size if neighbor can't be adjusted
    const adjustableSize =
      sizes.find(
        size =>
          size !== changedSize &&
          (allowsNegative || normalizedRatios[size] + adjustment >= 0) &&
          normalizedRatios[size] + adjustment <= 100
      ) || changedSize; // Fall back to changed size if needed

    normalizedRatios[adjustableSize] += adjustment;
  }

  return normalizedRatios;
};

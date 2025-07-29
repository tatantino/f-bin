import { ProductionPlan } from '../../types';

/**
 * Helper functions for working with production plans
 * Note: These functions are kept for reference but are no longer used
 * with the integrated data structure that includes base values directly in year plans
 */

/**
 * Checks if there are any negative base values in a plan for given years
 *
 * @param plan Production plan to check
 * @returns Map of year to boolean indicating if base value is negative
 */
export function checkNegativeBaseValues(
  plan: ProductionPlan
): Record<string, boolean> {
  const result: Record<string, boolean> = {};

  Object.entries(plan.years).forEach(([year, yearData]) => {
    result[year] = yearData.baseValue < 0;
  });

  return result;
}

/**
 * Gets min and max bounds for inputs based on base values
 *
 * @param plan Production plan to process
 * @returns Map of year to value info
 */
export function getValueBounds(
  plan: ProductionPlan
): Record<string, { min: number; max: number }> {
  const result: Record<string, { min: number; max: number }> = {};

  Object.entries(plan.years).forEach(([year, yearData]) => {
    const baseValue = yearData.baseValue;
    const isNegative = baseValue < 0;

    result[year] = {
      min: isNegative ? baseValue : 0,
      max: isNegative ? 0 : baseValue,
    };
  });

  return result;
}

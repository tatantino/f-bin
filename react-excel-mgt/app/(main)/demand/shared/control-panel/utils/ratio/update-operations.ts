import { ProductionPlan, SizeType, PlanItemKey } from '../../types';
import {
  hasNegativeRatios,
  adjustNextCellValue,
  distributeRemainingDifference,
  normalizeRatiosTo100,
} from './update-helpers';

/**
 * Updates ratios to maintain a total of 100%
 *
 * When one ratio is changed, others are adjusted to maintain the total.
 * Handles both positive-only and mixed ratio scenarios.
 *
 * @param ratios Current ratios for all sizes
 * @param changedSize Size being updated
 * @param newValue New ratio value
 * @returns Updated ratios that sum to 100%
 */
export function updateRatios(
  ratios: Record<SizeType, number>,
  changedSize: SizeType,
  newValue: number
): Record<SizeType, number> {
  const sizes = Object.keys(ratios);

  // Special case: only one size always gets 100%
  if (sizes.length <= 1) {
    return { [changedSize]: 100 };
  }

  // Special case: with two sizes, directly calculate complement
  if (sizes.length === 2) {
    const otherSize = sizes.find(size => size !== changedSize)!;
    const boundedValue = boundValue(newValue, ratios);
    return {
      [changedSize]: boundedValue,
      [otherSize]: 100 - boundedValue,
    };
  }

  // Create a copy of ratios to modify
  const updatedRatios = { ...ratios };
  const allowsNegative = hasNegativeRatios(ratios);

  // Limit the new value to valid range and calculate change
  const boundedValue = boundValue(newValue, ratios);
  const valueChange = ratios[changedSize] - boundedValue;
  updatedRatios[changedSize] = boundedValue;

  // Choose next size for initial adjustment
  const nextSize = getNextSize(sizes, changedSize);

  // Adjust next size to absorb some of the change
  const { nextNewValue, absorbedDifference } = adjustNextCellValue(
    ratios[nextSize],
    valueChange,
    allowsNegative
  );
  updatedRatios[nextSize] = nextNewValue;

  // Distribute any remaining change to other sizes
  const remainingChange = valueChange - absorbedDifference;
  if (Math.abs(remainingChange) > 0.001) {
    const balancedRatios = distributeRemainingDifference(
      updatedRatios,
      changedSize,
      nextSize,
      remainingChange
    );

    return normalizeRatiosTo100(
      balancedRatios,
      changedSize,
      nextSize,
      allowsNegative
    );
  }

  // Ensure total is exactly 100%
  return normalizeRatiosTo100(
    updatedRatios,
    changedSize,
    nextSize,
    allowsNegative
  );
}

/**
 * Bound a value to valid range based on whether negative values are allowed
 */
function boundValue(value: number, ratios: Record<SizeType, number>): number {
  const min = hasNegativeRatios(ratios) ? -100 : 0;
  return Math.max(min, Math.min(100, value));
}

/**
 * Get the next size in the collection for adjustment
 */
function getNextSize(sizes: string[], changedSize: string): string {
  const currentIndex = sizes.indexOf(changedSize);
  const nextIndex = (currentIndex + 1) % sizes.length;
  return sizes[nextIndex];
}

/**
 * Updates a ratio in a production plan and returns updated plans
 *
 * @param plans Collection of production plans
 * @param key Identifies the specific ratio to update (genGroup, compositionGroup, year, size)
 * @param value New ratio value
 * @returns Updated plans with rebalanced ratios
 */
export function updatePlanRatio(
  plans: ProductionPlan[],
  key: PlanItemKey,
  value: number
): ProductionPlan[] {
  const { genGroup, compositionGroup, year, size } = key;

  // Find the plan to update
  const planIndex = plans.findIndex(
    plan =>
      plan.genGroup === genGroup && plan.compositionGroup === compositionGroup
  );

  // If plan not found or year not in plan, return unchanged
  if (planIndex === -1 || !plans[planIndex].years[year]) {
    return plans;
  }

  // Create new plans array with the updated plan
  const updatedPlans = [...plans];
  const plan = plans[planIndex];

  // Update the specific year's ratios
  updatedPlans[planIndex] = {
    ...plan,
    years: {
      ...plan.years,
      [year]: {
        ...plan.years[year],
        ratios: updateRatios(plan.years[year].ratios, size, value),
      },
    },
  };

  return updatedPlans;
}

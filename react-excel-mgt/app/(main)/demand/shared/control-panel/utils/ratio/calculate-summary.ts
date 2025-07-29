import { ProductionPlan, SummaryData } from '../../types';

/**
 * Calculates production summary based on plans
 * Aggregates values across all plans and sizes to create a production summary
 *
 * @param plans Production plans containing base values and ratios
 * @returns Summary of production by size and year
 */
export const calculateProduction = (plans: ProductionPlan[]): SummaryData => {
  // Initialize summary structure
  const summary: SummaryData = {};

  // Quick return for empty data
  if (!plans.length) {
    return summary;
  }

  // Process each plan
  plans.forEach(plan => {
    // For each year in the plan
    Object.entries(plan.years).forEach(([year, yearData]) => {
      const { baseValue, ratios } = yearData;

      // Skip calculation if base value is zero (improves performance)
      if (baseValue === 0) return;

      // Process each size allocation
      Object.entries(ratios).forEach(([size, ratio]) => {
        // Initialize summary structure if needed
        if (!summary[size]) {
          summary[size] = {};
        }
        if (!summary[size][year]) {
          summary[size][year] = 0;
        }

        // Calculate production for this element and add to summary
        const production = (baseValue * ratio) / 100;
        summary[size][year] += production;
      });
    });
  });

  return summary;
};

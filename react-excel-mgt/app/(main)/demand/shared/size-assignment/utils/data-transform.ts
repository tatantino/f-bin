import {
  YearType,
  ProductionPlan,
  DmdChangeDetail,
  SizeType,
  GenGroupIsopipeMappings,
} from '../types';

/**
 * Transforms API detail data into the application's required format
 * Returns a unified data structure with plans and available years
 */
export function transformApiDetails(
  details: DmdChangeDetail[],
  genGroupIsopipeMappings: GenGroupIsopipeMappings[]
): { plans: ProductionPlan[]; years: string[] } {
  const years: string[] = [];
  const genGroups = new Set<string>();
  // Store base values temporarily during processing
  const baseData: Record<string, Record<string, number>> = {};
  const genCompositions = new Map<string, Set<string>>();

  // Process valid records and collect data
  for (const detail of details) {
    const { gen_group, composition_group, dmd_year, dmd_value } = detail;

    // Skip invalid data
    if (!gen_group || !dmd_year || dmd_value === undefined) continue;

    // Track unique values
    if (!years.includes(dmd_year)) years.push(dmd_year);
    genGroups.add(gen_group);

    // Track compositions for each gen group
    if (!genCompositions.has(gen_group)) {
      genCompositions.set(gen_group, new Set());
    }
    genCompositions.get(gen_group)!.add(composition_group || '');

    // Aggregate values in baseData
    const key = `${gen_group}-${composition_group || ''}`;
    if (!baseData[key]) baseData[key] = {};

    // Add value to total
    const numValue = Number(dmd_value);
    if (!isNaN(numValue)) {
      baseData[key][dmd_year] = (baseData[key][dmd_year] || 0) + numValue;
    }
  }

  // Sort years for consistent ordering
  years.sort();

  // Build integrated production plans with flat structure
  const plans = [...genGroups].flatMap(genGroup => {
    // Find matching group and extract isopipe mappings
    const mappingGroup = genGroupIsopipeMappings.find(
      group => group.gen_group === genGroup
    );
    const sizeMappings =
      mappingGroup?.isopipe_mappings.map(mapping => ({
        size: mapping.size,
        allocation: mapping.allocation,
      })) || [];

    const compositions = genCompositions.get(genGroup) || new Set();

    return [...compositions].map(compositionGroup => {
      const baseDataKey = `${genGroup}-${compositionGroup || ''}`;
      const yearData = baseData[baseDataKey] || {};
      const initialRatios = createInitialRatios(sizeMappings);

      // Create flat year data structure directly
      const yearsMap: Record<
        string,
        { baseValue: number; ratios: Record<SizeType, number> }
      > = {};

      years.forEach(year => {
        yearsMap[year] = {
          baseValue: yearData[year] || 0,
          ratios: { ...initialRatios },
        };
      });

      return {
        genGroup: genGroup as YearType,
        compositionGroup,
        years: yearsMap,
      };
    });
  });

  return { plans, years };
}

/**
 * Creates initial ratios based on size mappings
 * Distributes percentages across sizes based on their allocation values
 * If no allocations exist, distributes equally
 */
export const createInitialRatios = (
  sizeMappings: Array<{ size: string; allocation: number }>
): Record<SizeType, number> => {
  if (!sizeMappings.length) return {};

  const nonZeroMappings = sizeMappings.filter(m => m.allocation > 0);

  // If no allocations, distribute equally
  if (nonZeroMappings.length === 0) {
    const equalShare = 100 / sizeMappings.length;
    return Object.fromEntries(
      sizeMappings.map(({ size }) => [size, equalShare])
    ) as Record<SizeType, number>;
  }

  // Calculate proportional distribution
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

  // Ensure total is exactly 100%
  const currentTotal = Object.values(ratios).reduce(
    (sum, value) => sum + value,
    0
  );
  if (currentTotal !== 100) {
    // Adjust largest value to make total exactly 100
    const largestSize = nonZeroMappings.sort(
      (a, b) => ratios[b.size] - ratios[a.size]
    )[0]?.size;

    if (largestSize) {
      ratios[largestSize] += 100 - currentTotal;
    }
  }

  return ratios as Record<SizeType, number>;
};

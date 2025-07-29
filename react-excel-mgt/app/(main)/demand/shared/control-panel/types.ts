/**
 * Type definitions for Control Panel module
 */

// Basic types
export type SizeType = string;
export type YearType = string;

// Integrated production plan structure
export interface ProductionPlan {
  genGroup: string;
  compositionGroup: string;
  // Direct mapping of years to their data
  years: Record<
    string,
    {
      // Base value for this year's calculation
      baseValue: number;
      // Size ratio distribution (must sum to 100%)
      ratios: Record<SizeType, number>;
    }
  >;
}

// Key for identifying specific ratio cells
export interface PlanItemKey {
  genGroup: string;
  compositionGroup: string;
  year: YearType;
  size: SizeType;
}

// Summary data type for production calculation results
export type SummaryData = Record<string, Record<string, number>>;

// Update function signature
export type RatioUpdateFn = (key: PlanItemKey, value: number) => void;

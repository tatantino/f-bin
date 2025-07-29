/**
 * Type definitions for Size Assignment module
 */

// Import backend types
import type { GenGroupIsopipeMappings } from '@/app/api/1.0/demands/mappings/gen-group-isopipe-mappings/models';
import type {
  DmdChangeMaster,
  DmdChangeDetail,
  DemandChangeData,
} from '@/app/api/1.0/demands/changes/versions/models/dmd-change';

// Import and re-export types from control-panel
import type {
  SizeType,
  YearType,
  ProductionPlan,
  SummaryData,
  RatioUpdateFn,
  PlanItemKey,
} from '../control-panel/types';

export type {
  SizeType,
  YearType,
  ProductionPlan,
  SummaryData,
  RatioUpdateFn,
  PlanItemKey,
};

// Re-export backend types
export type {
  GenGroupIsopipeMappings,
  DmdChangeMaster,
  DmdChangeDetail,
  DemandChangeData,
};

/**
 * Integrated data structure for size assignment
 * Combines plans, baseData and years in a single structure
 */
export interface SizeAssignmentData {
  plans: ProductionPlan[];
  baseData: Record<string, Record<string, number>>;
  years: string[];
}

// Result data type passed to onViewResult callback
export interface ResultData {
  summary: SummaryData;
  spGbName?: string;
  dmdChangeMasterId?: string;
}

// Component props
export interface SizeAssignmentCardProps {
  demandChangeData: DemandChangeData | null;
  genGroupIsopipeMappings: GenGroupIsopipeMappings[];
  onViewResult?: (data: ResultData) => void;
}

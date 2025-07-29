/**
 * API related types
 */

import type {
  DmdChangeDetail,
  DmdChangeMaster,
  DemandChangeData,
} from '@/app/api/1.0/demands/changes/versions/models/dmd-change';

/**
 * Demand change request
 */
export interface DmdChangeReq {
  master: Partial<DmdChangeMaster>;
  details: Partial<DmdChangeDetail>[];
}

/**
 * Save response
 */
export interface DmdChangeSaveRes {
  id: string;
  version: string;
}

// Re-export core types
export type { DmdChangeDetail, DmdChangeMaster, DemandChangeData };

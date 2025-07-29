/**
 * API related type definitions
 * Re-export key types from global API module
 */

import type {
  DmdChangeMaster,
  DmdChangeDetail,
  DemandChangeData,
} from '@/app/api/1.0/demands/changes/versions/models/dmd-change';
import type { SpGbVersion } from '@/app/api/1.0/demands/summaries/sp-gb-versions/models';

// API request type
export interface DmdChangeReq {
  master: Partial<DmdChangeMaster>;
  details: Partial<DmdChangeDetail>[];
}

// Save response type
export interface DmdChangeSaveRes {
  id: string;
  version: string;
}

// Re-export core DTO types
export type { DmdChangeMaster, DmdChangeDetail, SpGbVersion, DemandChangeData };

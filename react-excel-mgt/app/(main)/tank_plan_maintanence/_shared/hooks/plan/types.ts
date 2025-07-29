import type { TankPlanDetailData, PlanType } from '../../types';

export interface PlanVersionInfo {
  parentId?: string | null;

  planVersion?: string;

  planOfficial?: string;

  versionNo?: number;

  username?: string;

  planType?: PlanType;
}

export interface PlanSaveDialogOptions {
  onSave: (data: TankPlanDetailData[]) => Promise<boolean>;

  onSaveSuccess?: () => void;

  onSaveError?: (error: string) => void;
}

export interface PlanVersionSaveResult {
  isSaving: boolean;

  savePlanData: (
    data: TankPlanDetailData[],
    originalData?: TankPlanDetailData[],
    versionInfo?: PlanVersionInfo
  ) => Promise<boolean>;
}

export interface PlanPageOptions {
  planId: string | null;

  onError?: (error: string) => void;
}

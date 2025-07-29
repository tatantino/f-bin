import type { PlanVersion } from '../../_shared/types';

export interface VersionCardProps {
  version: Omit<PlanVersion, 'plan_master_id'>;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
  label?: string;
}

export interface VersionInfoProps {
  versionId: number;
  className?: string;
  variant?: 'primary' | 'secondary';
  label?: string;
  url?: string;
}

export interface VersionInfoWithParentProps {
  versionId: number;
  className?: string;
}

export interface UseVersionInfoReturn {
  version: PlanVersion | null;
  isLoading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
}

export interface UseParentVersionIdReturn {
  parentId: number | null;
  isLoading: boolean;
}

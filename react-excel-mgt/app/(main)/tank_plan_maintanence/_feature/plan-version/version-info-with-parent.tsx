'use client';

import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { VersionInfo } from './version-info';
import { useParentVersionId } from './hooks';
import { ROUTES } from '../../_shared/config/config';
import type { VersionInfoWithParentProps } from './types';

export function VersionInfoWithParent({
  versionId,
  className,
}: VersionInfoWithParentProps) {
  const { parentId, isLoading } = useParentVersionId(versionId);
  const planBasePath = `${ROUTES.PLAN_DETAILS}?id=`;

  if (isLoading) {
    return null;
  }

  return (
    <div className={cn('px-4 py-1', className)}>
      <div className="flex items-center gap-6">
        {parentId && (
          <div className="flex items-center">
            <VersionInfo
              versionId={parentId}
              variant="secondary"
              label="Parent Version"
              url={`${planBasePath}${parentId}`}
            />
            <ArrowRight className="ml-6 h-4 w-4 text-muted-foreground/30" />
          </div>
        )}

        <VersionInfo
          versionId={versionId}
          variant="primary"
          label="Current Version"
        />
      </div>
    </div>
  );
}

'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { GitBranch, Clock, User, Layers } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { LoadingSpinner } from '@/components/shared/feedbacks/LoadingSpinner';
import { useVersionInfo, useParentVersionId } from './hooks';
import { ROUTES } from '@/app/config/routes';
import { DateUtils } from '../../_shared/utils/DateUtils';
import { StringUtils } from '../../_shared/utils/string-utils';
import { PlanBadge } from '../../_shared/components/badges';
import { VersionCard } from './version-card';
import type { PlanVersion } from '../../_shared/types';
import type { PlanBadgeType } from '../../_shared/types';
import { useMemo } from 'react';

const metaItemClass = 'flex items-center gap-1 shrink-0';
const metaWrapperClass =
  'flex items-center gap-3 text-sm text-muted-foreground shrink-0';

interface CompactVersionCardProps {
  version: PlanVersion;
  parentVersion?: PlanVersion | null;
  className?: string;
}

function CompactVersionCard({
  version,
  parentVersion,
  className,
}: CompactVersionCardProps) {
  const {
    plan_version,
    plan_version_no,
    plan_type,
    plan_official,
    user_name,
    update_timestamp,
  } = version;

  const planBasePath = `${ROUTES.PLAN_DETAILS}?id=`;

  return (
    <div
      className={cn(
        'inline-flex items-center gap-3 px-3 py-2',
        'transition-all duration-200',
        className
      )}
    >
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div
            className={cn(
              'flex h-7 w-7 items-center justify-center rounded-full',
              'bg-primary/10 text-primary',
              'ring-2 ring-primary/5'
            )}
          >
            <Layers className="h-4 w-4" />
          </div>
          <div className="flex min-w-0 items-center gap-2">
            <h3 className="truncate text-base font-semibold tracking-tight text-foreground/90">
              {plan_version}
            </h3>
            {plan_version_no && (
              <Badge
                variant="secondary"
                className="bg-primary/5 text-primary/90"
              >
                v{plan_version_no}
              </Badge>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          {plan_type && <PlanBadge type={plan_type as PlanBadgeType} />}
          {plan_official && <PlanBadge type={plan_official as PlanBadgeType} />}
        </div>
      </div>

      <div className={metaWrapperClass}>
        {user_name && (
          <div className={metaItemClass}>
            <User className="h-3.5 w-3.5" />
            <span className="max-w-[100px] truncate">
              {StringUtils.extractUsername(user_name)}
            </span>
          </div>
        )}
        {update_timestamp && (
          <div className={metaItemClass}>
            <Clock className="h-3.5 w-3.5" />
            <span>{DateUtils.formatToDateTime(update_timestamp)}</span>
          </div>
        )}
        {parentVersion && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={`${planBasePath}${parentVersion.plan_master_id}`}
                  className={cn(
                    'group flex items-center gap-1.5 rounded-full border border-input/50',
                    'bg-background/50 px-2 py-0.5',
                    'hover:border-primary/30 hover:bg-primary/5 hover:text-primary',
                    'transition-all duration-200'
                  )}
                >
                  <div className="flex items-center gap-1">
                    <GitBranch className="h-3.5 w-3.5 text-muted-foreground/70 group-hover:text-current" />
                    <span className="text-xs font-medium text-muted-foreground/90 group-hover:text-current">
                      Parent:
                    </span>
                  </div>
                  <span className="text-xs font-semibold">
                    {parentVersion.plan_version} v
                    {parentVersion.plan_version_no}
                  </span>
                </Link>
              </TooltipTrigger>
              <TooltipContent
                side="bottom"
                align="end"
                sideOffset={4}
                className="border-border/50 p-0"
              >
                <VersionCard version={parentVersion} />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
    </div>
  );
}

interface CompactVersionInfoProps {
  versionId: number | string;
  className?: string;
}

export function CompactVersionInfo({
  versionId,
  className,
}: CompactVersionInfoProps) {
  // 转换versionId为数字
  const versionIdNum = useMemo(() => {
    if (typeof versionId === 'string') {
      return Number(versionId) || 0;
    }
    return versionId;
  }, [versionId]);

  const { version, isLoading, error } = useVersionInfo(versionIdNum);
  const { parentId, isLoading: isLoadingParent } =
    useParentVersionId(versionIdNum);
  const { version: parentVersion, isLoading: isLoadingParentInfo } =
    useVersionInfo(parentId || 0);

  if (isLoading || isLoadingParent || isLoadingParentInfo) {
    return <LoadingSpinner className={className} />;
  }

  if (error || !version) {
    return (
      <div className={cn('text-sm text-destructive', className)}>
        {error || 'Version not found'}
      </div>
    );
  }

  return (
    <CompactVersionCard
      version={version}
      parentVersion={parentVersion}
      className={className}
    />
  );
}

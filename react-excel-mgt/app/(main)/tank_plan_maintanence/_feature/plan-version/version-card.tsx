'use client';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { User, Clock } from 'lucide-react';
import { PlanBadge } from '../../_shared/components/badges';
import type { VersionCardProps } from './types';
import type { PlanBadgeType } from '../../_shared/types';
import { DateUtils } from '../../_shared/utils/DateUtils';
import { StringUtils } from '../../_shared/utils/string-utils';

const metaItemClass = 'flex items-center gap-1';
const metaWrapperClass =
  'flex min-w-0 flex-1 items-center gap-3 text-sm text-muted-foreground';

export function VersionCard({
  version,
  onClick,
  className,
  variant = 'primary',
}: VersionCardProps) {
  if (!version) return null;

  const {
    plan_version,
    plan_version_no,
    plan_type,
    plan_official,
    user_name,
    update_timestamp,
  } = version;

  const cardStyles = {
    primary: 'border-primary/50 bg-card shadow-[0_4px_12px_rgba(0,0,0,0.08)]',
    secondary:
      'border-muted bg-muted/5 hover:border-muted-foreground/20 opacity-50',
  };

  return (
    <div
      className={cn(
        'w-[320px] rounded-lg border p-2.5',
        'shadow-[0_2px_4px_rgba(0,0,0,0.02)] transition-all duration-200',
        onClick && 'cursor-pointer hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)]',
        cardStyles[variant],
        className
      )}
      onClick={onClick}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2">
          <h3 className="truncate text-lg font-semibold tracking-tight text-gray-700">
            {plan_version}
          </h3>
          {plan_version_no && <Badge>v{plan_version_no}</Badge>}
        </div>
        {plan_type && <PlanBadge type={plan_type as PlanBadgeType} />}
      </div>

      <div className="mt-2 flex items-center justify-between gap-2">
        <div className={metaWrapperClass}>
          {user_name && (
            <div className={metaItemClass}>
              <User className="h-4 w-4" />
              <span className="truncate">
                {StringUtils.extractUsername(user_name)}
              </span>
            </div>
          )}
          {update_timestamp && (
            <div className={metaItemClass}>
              <Clock className="h-4 w-4" />
              <span>{DateUtils.formatToDateTime(update_timestamp)}</span>
            </div>
          )}
        </div>
        {plan_official && <PlanBadge type={plan_official as PlanBadgeType} />}
      </div>
    </div>
  );
}

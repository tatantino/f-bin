import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { ROUTES } from '@/app/config/routes';
import { PlanBadge } from '@/components/shared/badges';
import type { PlanVersion } from '../../_shared/types';

export function VersionCell({ data }: { data: PlanVersion }) {
  const { plan_version, plan_version_no, plan_official, plan_master_id } = data;

  return (
    <div className="flex items-center gap-2">
      <Link
        href={`${ROUTES.PLAN_DETAILS}?id=${plan_master_id}`}
        className="font-medium text-primary hover:underline"
      >
        {plan_version}
      </Link>

      {/* Version number badge */}
      {plan_version_no > 1 && (
        <Badge variant="outline" className="h-5 px-1 text-xs">
          v{plan_version_no}
        </Badge>
      )}

      {/* Plan tag badge (GB/18MP) */}
      {plan_official && <PlanBadge type={plan_official} />}
    </div>
  );
}

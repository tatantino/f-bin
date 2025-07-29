import type { NextRequest } from 'next/server';
import { TankPlanService } from '../../service';
import { handleApiRequest } from '@/app/api/_shared/utils/response-utils';

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  return handleApiRequest(
    () => TankPlanService.getParentVersion(params.id),
    'Failed to get parent version'
  );
}

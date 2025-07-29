import type { NextRequest } from 'next/server';
import { RequestUtils } from '@/app/api/_shared/utils/request-utils';
import { TankPlanService } from './service/index';
import { CreateTankPlanMaster, TankPlanDetail } from './models';
import { handleApiRequest } from '@/app/api/_shared/utils/response-utils';

export async function GET(request: NextRequest) {
  return handleApiRequest(async () => {
    const params = RequestUtils.extractPaginationParams(request);
    const searchParams = new URL(request.url).searchParams;

    // Extract search parameters in a more readable way
    const searchOptions = RequestUtils.extractSearchParams(searchParams, [
      'planType',
      'planOfficial',
      'startDate',
      'endDate',
    ]);

    const options = {
      ...params,
      ...searchOptions,
    };

    return await TankPlanService.getVersions(options);
  }, 'Failed to get versions');
}

export async function POST(request: NextRequest) {
  return handleApiRequest(async () => {
    const { master, details } = (await request.json()) as {
      master: CreateTankPlanMaster;
      details?: TankPlanDetail[];
    };

    return await TankPlanService.createVersion(master, details);
  }, 'Failed to create version');
}

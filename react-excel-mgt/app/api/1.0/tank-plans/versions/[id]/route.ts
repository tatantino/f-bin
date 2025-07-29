import type { NextRequest } from 'next/server';
import { TankPlanService } from '../service';
import { TankPlanDetail, UpdateTankPlanMaster } from '../models';
import { handleApiRequest } from '@/app/api/_shared/utils/response-utils';

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  return handleApiRequest(
    () => TankPlanService.getVersion(params.id),
    'Failed to get version'
  );
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  return handleApiRequest(async () => {
    const { master, details } = (await request.json()) as {
      master?: UpdateTankPlanMaster;
      details?: TankPlanDetail[];
    };

    console.log('PATCH request received');
    console.log(master);
    console.log(details);
    console.log(params.id);
    return await TankPlanService.updateVersion(
      params.id,
      master || {},
      details
    );
  }, 'Failed to update version');
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  return handleApiRequest(
    () => TankPlanService.deleteVersion(params.id),
    'Failed to delete version'
  );
}

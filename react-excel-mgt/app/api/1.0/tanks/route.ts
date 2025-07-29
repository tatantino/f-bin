import { NextRequest } from 'next/server';
import { TankService } from './service';
import { Tank } from './models';
import { handleApiRequest } from '@/app/api/_shared/utils/response-utils';

/**
 * GET /api/1.0/tanks
 * Retrieves all tank records
 */
export async function GET() {
  return handleApiRequest(() => TankService.getTanks(), 'Failed to get tanks');
}

/**
 * POST /api/1.0/tanks
 * Replaces all tank records with the provided data
 */
export async function POST(request: NextRequest) {
  return handleApiRequest(async () => {
    const data = await request.json();
    const tanks = data.tanks || data;

    if (!Array.isArray(tanks)) {
      throw new Error('Invalid tanks data: expected an array');
    }

    return await TankService.saveTanks(tanks);
  }, 'Failed to save tanks');
}

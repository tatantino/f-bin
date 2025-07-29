import { NextRequest } from 'next/server';
import { CompositionOverrideService } from './service';
import { handleApiRequest } from '@/app/api/_shared/utils/response-utils';

/**
 * GET /api/1.0/composition-override
 * Retrieves all composition override records
 */
export async function GET() {
  return handleApiRequest(
    () => CompositionOverrideService.getCompositionOverrides(),
    'Failed to get composition overrides'
  );
}

/**
 * POST /api/1.0/composition-override
 * Replaces all composition override records with the provided data
 */
export async function POST(request: NextRequest) {
  return handleApiRequest(async () => {
    const data = await request.json();

    if (!Array.isArray(data)) {
      throw new Error('Invalid composition override data: expected an array');
    }

    return await CompositionOverrideService.saveCompositionOverrides(data);
  }, 'Failed to save composition overrides');
}

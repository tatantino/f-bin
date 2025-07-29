import { NextRequest } from 'next/server';
import { DmdChangeService } from './service/index';
import { RequestUtils } from '@/app/api/_shared/utils/request-utils';
import {
  CreateDmdChangeMaster,
  CreateDmdChangeDetail,
} from './models/dmd-change';
import { handleApiRequest } from '@/app/api/_shared/utils/response-utils';

/**
 * Get all demand change versions with filtering
 *
 * GET /api/1.0/demands/changes/versions
 */
export async function GET(request: NextRequest) {
  return handleApiRequest(async () => {
    const params = RequestUtils.extractPaginationParams(request);
    const searchParams = new URL(request.url).searchParams;

    // Extract search parameters in a more readable way
    const searchOptions = RequestUtils.extractSearchParams(searchParams, [
      'sp_gb_name',
      'startDate',
      'endDate',
      'sort',
      'order',
    ]);

    // Map parameter names to expected option names
    const options = {
      ...params,
      ...searchOptions,
    };

    return await DmdChangeService.getVersions(options);
  }, 'Failed to get versions');
}

/**
 * Create new demand change version
 *
 * POST /api/1.0/demands/changes/versions
 */
export async function POST(request: NextRequest) {
  return handleApiRequest(async () => {
    // Parse request body
    const { master, details } = (await request.json()) as {
      master: CreateDmdChangeMaster;
      details: CreateDmdChangeDetail[];
    };

    // Create version
    return await DmdChangeService.createVersion(master, details);
  }, 'Failed to create version');
}

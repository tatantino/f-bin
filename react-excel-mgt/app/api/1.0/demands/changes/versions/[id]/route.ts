import { NextRequest } from 'next/server';
import { DmdChangeService } from '../service/index';
import {
  UpdateDmdChangeMaster,
  UpdateDmdChangeDetail,
} from '../models/dmd-change';
import { handleApiRequest } from '@/app/api/_shared/utils/response-utils';

/**
 * Get demand change version details
 *
 * GET /api/1.0/demands/changes/versions/[id]
 */
export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  return handleApiRequest(
    () => DmdChangeService.getVersion(params.id),
    'Failed to get version details'
  );
}

/**
 * Update demand change version
 *
 * PATCH /api/1.0/demands/changes/versions/[id]
 */
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  return handleApiRequest(async () => {
    // Parse request body
    const { master, details } = (await request.json()) as {
      master: UpdateDmdChangeMaster;
      details: UpdateDmdChangeDetail[];
    };

    // Update version with master and details in one call
    return await DmdChangeService.updateVersion(params.id, master, details);
  }, 'Failed to update version');
}

/**
 * Delete demand change version
 *
 * DELETE /api/1.0/demands/changes/versions/[id]
 */
export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  return handleApiRequest(
    () => DmdChangeService.deleteVersion(params.id),
    'Failed to delete version'
  );
}

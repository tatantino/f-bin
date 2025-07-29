import { SpGbVersionService } from './service';
import { handleApiRequest } from '@/app/api/_shared/utils/response-utils';

/**
 * SP-GB Versions API
 *
 * Endpoint: GET /api/1.0/demands/summaries/sp-gb-versions
 * Purpose: Retrieve all SP-GB version combinations and their associated quarters
 * Data Source: vw_demand_summary view in Databricks
 */
export async function GET() {
  return handleApiRequest(
    () => SpGbVersionService.getSpGbVersions(),
    'Failed to get SP-GB versions'
  );
}

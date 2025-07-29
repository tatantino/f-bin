import { GenGroupMappingService } from './service';
import { handleApiRequest } from '@/app/api/_shared/utils/response-utils';

/**
 * Generation Group API Endpoint
 *
 * Endpoint: GET /api/1.0/demands/mappings/gen-group-isopipe-mappings
 * Purpose: Retrieve generation groups with their associated generations and isopipe mappings
 * Data source: composition_group_mapping table
 *
 * Response format:
 * - gen_group: Generation group name
 * - gens: Array of generation sizes belonging to this group
 * - isopipe_mappings: Array of isopipe sizes and allocations
 *   - size: Isopipe size
 *   - allocation: Allocation percentage(0-100)
 *
 * Consumers:
 * - Demand planning tools
 * - Isopipe allocation calculations
 */
export async function GET() {
  return handleApiRequest(
    () => GenGroupMappingService.getGenGroups(),
    'Failed to get generation groups'
  );
}

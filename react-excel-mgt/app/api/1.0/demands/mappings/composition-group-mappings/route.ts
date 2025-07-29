import { CompositionGroupMappingService } from './service';
import { handleApiRequest } from '@/app/api/_shared/utils/response-utils';

/**
 * Composition Group API Endpoint
 *
 * Endpoint: GET /api/1.0/demands/mappings/composition-group-mappings
 * Purpose: Retrieve all composition groups and their associated compositions
 * Data source: composition_group_mapping table
 *
 * Response format:
 * - composition_group: Composition group name
 * - compositions: Array of composition codes belonging to this group
 *
 * Consumers:
 * - Demand change creation interface
 * - Demand planning tools
 */
export async function GET() {
  return handleApiRequest(
    () => CompositionGroupMappingService.getCompositionGroups(),
    'Failed to get composition groups'
  );
}

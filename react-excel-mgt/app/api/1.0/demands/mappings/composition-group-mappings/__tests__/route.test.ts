import { GET } from '../route';
import { CompositionGroupMappingService } from '../service';
import {
  mockServiceSuccess,
  mockServiceError,
  expectSuccessResponse,
  expectErrorResponse,
  setupApiMocks,
} from '@test-utils';

// Setup mocks
setupApiMocks();

// Mock service
jest.mock('../service', () => ({
  CompositionGroupMappingService: {
    getCompositionGroups: jest.fn(),
  },
}));

// Test data
const mockCompositionGroups = [
  { composition_group: 'Group1', compositions: ['A1', 'A2', 'A3'] },
  { composition_group: 'Group2', compositions: ['B1', 'B2'] },
];

describe('Composition Group Mappings API', () => {
  beforeEach(jest.clearAllMocks);

  describe('GET endpoint', () => {
    it('returns composition groups', async () => {
      // Mock service response
      mockServiceSuccess(
        CompositionGroupMappingService.getCompositionGroups as jest.Mock,
        mockCompositionGroups
      );

      // Call API endpoint
      const response = await GET();

      // Verify response
      await expectSuccessResponse(response, mockCompositionGroups);
    });

    it('handles service errors', async () => {
      // Mock service error
      mockServiceError(
        CompositionGroupMappingService.getCompositionGroups as jest.Mock,
        'Database error'
      );

      // Call API endpoint
      const response = await GET();

      // Verify error response
      await expectErrorResponse(response, 'Database error');
    });
  });
});

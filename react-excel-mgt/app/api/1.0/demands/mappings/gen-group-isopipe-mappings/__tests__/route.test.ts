import { GET } from '../route';
import { GenGroupMappingService } from '../service';
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
  GenGroupMappingService: {
    getGenGroups: jest.fn(),
  },
}));

// Test data
const mockGenGroups = [
  {
    gen_group: 'G10',
    gens: ['G10.1', 'G10.2', 'G10.3'],
    isopipe_mappings: [
      { size: '300', allocation: 70 },
      { size: '200', allocation: 30 },
    ],
  },
  {
    gen_group: 'G11',
    gens: ['G11.1', 'G11.2'],
    isopipe_mappings: [{ size: '400', allocation: 100 }],
  },
];

describe('Generation Group Mappings API', () => {
  beforeEach(jest.clearAllMocks);

  describe('GET endpoint', () => {
    it('returns generation groups', async () => {
      // Mock service response
      mockServiceSuccess(
        GenGroupMappingService.getGenGroups as jest.Mock,
        mockGenGroups
      );

      // Call API endpoint
      const response = await GET();

      // Verify response
      await expectSuccessResponse(response, mockGenGroups);
    });

    it('handles service errors', async () => {
      // Mock service error
      mockServiceError(
        GenGroupMappingService.getGenGroups as jest.Mock,
        'Database error'
      );

      // Call API endpoint
      const response = await GET();

      // Verify error response
      await expectErrorResponse(response, 'Database error');
    });
  });
});

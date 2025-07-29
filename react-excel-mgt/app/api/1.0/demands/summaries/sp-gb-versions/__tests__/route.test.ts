import { GET } from '../route';
import { SpGbVersionService } from '../service';
import {
  expectSuccessResponse,
  expectErrorResponse,
  mockServiceSuccess,
  mockServiceError,
  spGbVersionsTestData,
  setupApiMocks,
} from '@test-utils';

// Setup mocks
setupApiMocks();

// Mock service dependencies
jest.mock('../service', () => ({
  SpGbVersionService: {
    getSpGbVersions: jest.fn(),
  },
}));

describe('SP-GB Versions API', () => {
  beforeEach(jest.clearAllMocks);

  it('returns versions from service', async () => {
    // Mock service response
    mockServiceSuccess(
      SpGbVersionService.getSpGbVersions as jest.Mock,
      spGbVersionsTestData.versions
    );

    // Call API endpoint
    const response = await GET();

    // Verify response
    await expectSuccessResponse(response, spGbVersionsTestData.versions);
  });

  it('handles service errors', async () => {
    // Mock service error
    mockServiceError(
      SpGbVersionService.getSpGbVersions as jest.Mock,
      'Database error'
    );

    // Call API endpoint
    const response = await GET();

    // Verify error response
    await expectErrorResponse(response, 'Database error');
  });
});

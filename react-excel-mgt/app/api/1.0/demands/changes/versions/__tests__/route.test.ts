import { GET, POST } from '../route';
import { DmdChangeService } from '../service/index';
import {
  createMockRequest,
  expectSuccessResponse,
  expectErrorResponse,
  mockServiceSuccess,
  mockServiceError,
  demandChangeTestData,
  apiEndpoints,
  setupApiMocks,
} from '@test-utils';

// Setup mocks
setupApiMocks();

// Mock service dependencies
jest.mock('../service/index', () => ({
  DmdChangeService: {
    getVersions: jest.fn(),
    createVersion: jest.fn(),
  },
}));

describe('Demand Change Versions API', () => {
  beforeEach(jest.clearAllMocks);

  describe('GET endpoint', () => {
    it('returns demand change versions', async () => {
      // Mock service response
      mockServiceSuccess(DmdChangeService.getVersions as jest.Mock, [
        demandChangeTestData.master,
      ]);

      // Call API endpoint
      const response = await GET(
        createMockRequest(apiEndpoints.demands.changes.versions)
      );

      // Verify response
      await expectSuccessResponse(response, [demandChangeTestData.master]);
    });

    it('handles service errors', async () => {
      // Mock service error
      mockServiceError(
        DmdChangeService.getVersions as jest.Mock,
        'Database error'
      );

      // Call API endpoint
      const response = await GET(
        createMockRequest(apiEndpoints.demands.changes.versions)
      );

      // Verify error response
      await expectErrorResponse(response, 'Database error');
    });
  });

  describe('POST endpoint', () => {
    it('creates new demand change version', async () => {
      // Mock service response
      mockServiceSuccess(DmdChangeService.createVersion as jest.Mock, {
        id: '123',
      });

      // Call API endpoint
      const response = await POST(
        createMockRequest(
          apiEndpoints.demands.changes.versions,
          'POST',
          demandChangeTestData.createRequest
        )
      );

      // Verify response
      await expectSuccessResponse(response, { id: '123' });
      expect(DmdChangeService.createVersion).toHaveBeenCalled();
    });

    it('handles service errors', async () => {
      // Mock service error
      mockServiceError(
        DmdChangeService.createVersion as jest.Mock,
        'Validation failed'
      );

      // Call API endpoint
      const response = await POST(
        createMockRequest(apiEndpoints.demands.changes.versions, 'POST', {
          master: { dmd_sp_gb_name: 'Test' },
          details: [],
        })
      );

      // Verify error response
      await expectErrorResponse(response, 'Validation failed');
    });
  });
});

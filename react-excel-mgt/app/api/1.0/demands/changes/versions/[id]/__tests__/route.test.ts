import { GET, PATCH, DELETE } from '../route';
import { DmdChangeService } from '../../service/index';
import {
  createMockRequest,
  createMockParams,
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
jest.mock('../../service/index', () => ({
  DmdChangeService: {
    getVersion: jest.fn(),
    updateVersion: jest.fn(),
    deleteVersion: jest.fn(),
  },
}));

// Test constants
const TEST_ID = '123';
const mockParams = createMockParams(TEST_ID);

describe('Demand Change Single Version API', () => {
  beforeEach(jest.clearAllMocks);

  describe('GET endpoint', () => {
    it('returns version by ID', async () => {
      // Mock service response
      const versionData = demandChangeTestData.getVersionData();
      mockServiceSuccess(DmdChangeService.getVersion as jest.Mock, versionData);

      // Call API endpoint
      const response = await GET(
        createMockRequest(apiEndpoints.demands.changes.version(TEST_ID)),
        mockParams
      );

      // Verify response
      await expectSuccessResponse(response, versionData);
    });

    it('handles service errors', async () => {
      // Mock service error
      mockServiceError(
        DmdChangeService.getVersion as jest.Mock,
        'Version not found'
      );

      // Call API endpoint
      const response = await GET(
        createMockRequest(apiEndpoints.demands.changes.version(TEST_ID)),
        mockParams
      );

      // Verify error response
      await expectErrorResponse(response, 'Version not found');
    });
  });

  describe('PATCH endpoint', () => {
    it('updates version successfully', async () => {
      // Mock service response
      mockServiceSuccess(DmdChangeService.updateVersion as jest.Mock, {
        id: TEST_ID,
      });

      // Call API endpoint
      const response = await PATCH(
        createMockRequest(
          apiEndpoints.demands.changes.version(TEST_ID),
          'PATCH',
          demandChangeTestData.updateRequest
        ),
        mockParams
      );

      // Verify response
      await expectSuccessResponse(response, { id: TEST_ID });
      expect(DmdChangeService.updateVersion).toHaveBeenCalled();
    });

    it('handles service errors', async () => {
      // Mock service error
      mockServiceError(
        DmdChangeService.updateVersion as jest.Mock,
        'Failed to update version'
      );

      // Call API endpoint
      const response = await PATCH(
        createMockRequest(
          apiEndpoints.demands.changes.version(TEST_ID),
          'PATCH',
          {
            master: { dmd_change_name: 'Test' },
            details: [],
          }
        ),
        mockParams
      );

      // Verify error response
      await expectErrorResponse(response, 'Failed to update version');
    });
  });

  describe('DELETE endpoint', () => {
    it('deletes version successfully', async () => {
      // Mock service response
      mockServiceSuccess(DmdChangeService.deleteVersion as jest.Mock, {
        id: TEST_ID,
      });

      // Call API endpoint
      const response = await DELETE(
        createMockRequest(
          apiEndpoints.demands.changes.version(TEST_ID),
          'DELETE'
        ),
        mockParams
      );

      // Verify response
      await expectSuccessResponse(response, { id: TEST_ID });
    });

    it('handles service errors', async () => {
      // Mock service error
      mockServiceError(
        DmdChangeService.deleteVersion as jest.Mock,
        'Failed to delete version'
      );

      // Call API endpoint
      const response = await DELETE(
        createMockRequest(
          apiEndpoints.demands.changes.version(TEST_ID),
          'DELETE'
        ),
        mockParams
      );

      // Verify error response
      await expectErrorResponse(response, 'Failed to delete version');
    });
  });
});

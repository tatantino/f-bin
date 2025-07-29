import { GET, PATCH, DELETE } from '../route';
import { TankPlanService } from '../../service/index';
import {
  createMockRequest,
  createMockParams,
  expectSuccessResponse,
  expectErrorResponse,
  mockServiceSuccess,
  mockServiceError,
  tankPlanTestData,
  apiEndpoints,
  setupApiMocks,
} from '@test-utils';

// Setup mocks
setupApiMocks();

// Mock service dependencies
jest.mock('../../service/index', () => ({
  TankPlanService: {
    getVersion: jest.fn(),
    updateVersion: jest.fn(),
    deleteVersion: jest.fn(),
  },
}));

// Test constants
const TEST_ID = '1';
const mockParams = createMockParams(TEST_ID);

describe('Tank Plan Single Version API', () => {
  beforeEach(jest.clearAllMocks);

  describe('GET endpoint', () => {
    it('returns version by ID', async () => {
      // Mock service response
      const versionData = tankPlanTestData.getVersionData();
      mockServiceSuccess(TankPlanService.getVersion as jest.Mock, versionData);

      // Call API endpoint
      const response = await GET(
        createMockRequest(apiEndpoints.tankPlans.version(TEST_ID)),
        mockParams
      );

      // Verify response
      await expectSuccessResponse(response, versionData);
    });

    it('handles service errors', async () => {
      // Mock service error
      mockServiceError(
        TankPlanService.getVersion as jest.Mock,
        'Version not found'
      );

      // Call API endpoint
      const response = await GET(
        createMockRequest(apiEndpoints.tankPlans.version(TEST_ID)),
        mockParams
      );

      // Verify error response
      await expectErrorResponse(response, 'Version not found');
    });
  });

  describe('PATCH endpoint', () => {
    it('updates version successfully', async () => {
      // Mock service response
      mockServiceSuccess(TankPlanService.updateVersion as jest.Mock, {
        id: TEST_ID,
      });

      // Call API endpoint
      const response = await PATCH(
        createMockRequest(
          apiEndpoints.tankPlans.version(TEST_ID),
          'PATCH',
          tankPlanTestData.updateRequest
        ),
        mockParams
      );

      // Verify response
      await expectSuccessResponse(response, { id: TEST_ID });
      expect(TankPlanService.updateVersion).toHaveBeenCalled();
    });

    it('handles service errors', async () => {
      // Mock service error
      mockServiceError(
        TankPlanService.updateVersion as jest.Mock,
        'Failed to update version'
      );

      // Call API endpoint
      const response = await PATCH(
        createMockRequest(apiEndpoints.tankPlans.version(TEST_ID), 'PATCH', {
          master: { plan_version: 'TEST' },
          details: [],
        }),
        mockParams
      );

      // Verify error response
      await expectErrorResponse(response, 'Failed to update version');
    });
  });

  describe('DELETE endpoint', () => {
    it('deletes version successfully', async () => {
      // Mock service response
      mockServiceSuccess(TankPlanService.deleteVersion as jest.Mock, {
        id: TEST_ID,
      });

      // Call API endpoint
      const response = await DELETE(
        createMockRequest(apiEndpoints.tankPlans.version(TEST_ID), 'DELETE'),
        mockParams
      );

      // Verify response
      await expectSuccessResponse(response, { id: TEST_ID });
    });

    it('handles service errors', async () => {
      // Mock service error
      mockServiceError(
        TankPlanService.deleteVersion as jest.Mock,
        'Failed to delete version'
      );

      // Call API endpoint
      const response = await DELETE(
        createMockRequest(apiEndpoints.tankPlans.version(TEST_ID), 'DELETE'),
        mockParams
      );

      // Verify error response
      await expectErrorResponse(response, 'Failed to delete version');
    });
  });
});

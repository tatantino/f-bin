import { GET, POST } from '../route';
import { TankPlanService } from '../service/index';
import {
  createMockRequest,
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
jest.mock('../service/index', () => ({
  TankPlanService: {
    getVersions: jest.fn(),
    createVersion: jest.fn(),
  },
}));

describe('Tank Plan Versions API', () => {
  beforeEach(jest.clearAllMocks);

  describe('GET endpoint', () => {
    it('returns tank plan versions', async () => {
      // Mock service response
      mockServiceSuccess(TankPlanService.getVersions as jest.Mock, [
        tankPlanTestData.master,
      ]);

      // Call API endpoint
      const response = await GET(
        createMockRequest(apiEndpoints.tankPlans.versions)
      );

      // Verify response
      await expectSuccessResponse(response, [tankPlanTestData.master]);
    });

    it('handles service errors', async () => {
      // Mock service error
      mockServiceError(
        TankPlanService.getVersions as jest.Mock,
        'Database error'
      );

      // Call API endpoint
      const response = await GET(
        createMockRequest(apiEndpoints.tankPlans.versions)
      );

      // Verify error response
      await expectErrorResponse(response, 'Database error');
    });
  });

  describe('POST endpoint', () => {
    it('creates new tank plan version', async () => {
      // Mock service response
      mockServiceSuccess(TankPlanService.createVersion as jest.Mock, {
        id: '2',
      });

      // Call API endpoint
      const response = await POST(
        createMockRequest(
          apiEndpoints.tankPlans.versions,
          'POST',
          tankPlanTestData.createRequest
        )
      );

      // Verify response
      await expectSuccessResponse(response, { id: '2' });
      expect(TankPlanService.createVersion).toHaveBeenCalledWith(
        expect.anything(),
        expect.anything()
      );
    });

    it('handles service errors', async () => {
      // Mock service error
      mockServiceError(
        TankPlanService.createVersion as jest.Mock,
        'Validation failed'
      );

      // Call API endpoint
      const response = await POST(
        createMockRequest(apiEndpoints.tankPlans.versions, 'POST', {
          master: { plan_version: 'TEST' },
        })
      );

      // Verify error response
      await expectErrorResponse(response, 'Validation failed');
    });
  });
});

import { GenGroupMappingService } from '../service';
import { DatabaseService } from '@/app/api/_shared/database/service';
import logger from '@/app/api/_shared/utils/logger';
import { expectToThrowWithMessage } from '@test-utils';

// Mock dependencies
jest.mock('@/app/api/_shared/database/service', () => ({
  DatabaseService: {
    queryDirect: jest.fn(),
  },
}));

jest.mock('@/app/api/_shared/utils/logger', () => ({
  __esModule: true,
  default: {
    error: jest.fn(),
    info: jest.fn(),
    debug: jest.fn(),
  },
}));

describe('GenGroupMappingService', () => {
  beforeEach(jest.clearAllMocks);

  describe('getGenGroups', () => {
    // Test data
    const mockDbRows = [
      {
        gen_group: 'G10',
        gen: 'G10.1',
        isopipe_mapping_1st: '300',
        allocation_1st: 0.7,
        isopipe_mapping_2nd: '200',
        allocation_2nd: 0.3,
        isopipe_mapping_3rd: null,
        allocation_3rd: null,
        isopipe_mapping_4th: null,
        allocation_4th: null,
      },
      {
        gen_group: 'G11',
        gen: 'G11.1',
        isopipe_mapping_1st: '400',
        allocation_1st: 1.0,
        isopipe_mapping_2nd: null,
        allocation_2nd: null,
        isopipe_mapping_3rd: null,
        allocation_3rd: null,
        isopipe_mapping_4th: null,
        allocation_4th: null,
      },
    ];

    it('transforms database rows into generation groups', async () => {
      // Mock database response
      (DatabaseService.queryDirect as jest.Mock).mockResolvedValue(mockDbRows);

      // Call service method
      const result = await GenGroupMappingService.getGenGroups();

      // Verify result
      expect(result).toHaveLength(2);
      expect(result[0]).toHaveProperty('gen_group');
      expect(result[0]).toHaveProperty('gens');
      expect(result[0]).toHaveProperty('isopipe_mappings');
    });

    it('handles database errors', async () => {
      // Mock database error
      (DatabaseService.queryDirect as jest.Mock).mockRejectedValue(
        new Error('Database error')
      );

      // Verify error handling
      await expectToThrowWithMessage(
        GenGroupMappingService.getGenGroups(),
        'Database error'
      );
      expect(logger.error).toHaveBeenCalled();
    });
  });
});

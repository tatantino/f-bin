import { CompositionGroupMappingService } from '../service';
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

describe('CompositionGroupMappingService', () => {
  beforeEach(jest.clearAllMocks);

  describe('getCompositionGroups', () => {
    // Test data
    const mockDbRows = [
      { composition_group: 'Group1', composition: 'A1' },
      { composition_group: 'Group1', composition: 'A2' },
      { composition_group: 'Group2', composition: 'B1' },
      { composition_group: 'Group1', composition: 'A3' },
      { composition_group: 'Group2', composition: 'B2' },
    ];

    it('transforms database rows into grouped format', async () => {
      // Mock database response
      (DatabaseService.queryDirect as jest.Mock).mockResolvedValue(mockDbRows);

      // Call service method
      const result =
        await CompositionGroupMappingService.getCompositionGroups();

      // Verify result
      expect(result).toHaveLength(2);
      expect(result[0]).toHaveProperty('composition_group');
      expect(result[0]).toHaveProperty('compositions');
    });

    it('handles database errors', async () => {
      // Mock database error
      (DatabaseService.queryDirect as jest.Mock).mockRejectedValue(
        new Error('Database error')
      );

      // Verify error handling
      await expectToThrowWithMessage(
        CompositionGroupMappingService.getCompositionGroups(),
        'Database error'
      );
      expect(logger.error).toHaveBeenCalled();
    });
  });
});

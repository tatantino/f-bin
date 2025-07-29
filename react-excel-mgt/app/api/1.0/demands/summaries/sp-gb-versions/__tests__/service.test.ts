import { SpGbVersionService } from '../service';
import { DatabaseService } from '@/app/api/_shared/database/service';
import logger from '@/app/api/_shared/utils/logger';
import { expectToThrowWithMessage, spGbVersionsTestData } from '@test-utils';

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

describe('SpGbVersionService', () => {
  beforeEach(jest.clearAllMocks);

  describe('getSpGbVersions', () => {
    it('transforms database rows into versions with quarters', async () => {
      // Mock database response
      (DatabaseService.queryDirect as jest.Mock).mockResolvedValue(
        spGbVersionsTestData.dbRows
      );

      // Call service method
      const result = await SpGbVersionService.getSpGbVersions();

      // Verify result structure
      expect(result).toHaveLength(2);
      expect(result[0].date_YYYYQQs).toEqual(['2023-Q1', '2023-Q2', '2024-Q2']);
    });

    it('handles database errors', async () => {
      // Mock database error
      (DatabaseService.queryDirect as jest.Mock).mockRejectedValue(
        new Error('Database error')
      );

      // Verify error is propagated
      await expectToThrowWithMessage(
        SpGbVersionService.getSpGbVersions(),
        'Database error'
      );
      expect(logger.error).toHaveBeenCalled();
    });
  });
});

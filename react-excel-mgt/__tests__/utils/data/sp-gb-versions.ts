/**
 * SP-GB versions test data
 * Provides mock data for SP-GB versions related tests
 */

export const spGbVersionsTestData = {
  // List of versions
  versions: [
    {
      sp_gb_version: 'SP2024-08_GB2023-2040501',
      sp_version: 'SP2024-08',
      gb_version: 'GB2023-2040501',
      date_YYYYQQs: ['2023-Q1', '2023-Q2', '2024-Q2'],
    },
    {
      sp_gb_version: 'SP2024-08_GB2023-2030901',
      sp_version: 'SP2024-08',
      gb_version: 'GB2023-2030901',
      date_YYYYQQs: ['2023-Q1', '2023-Q4', '2024-Q1'],
    },
  ],

  // Raw database rows
  dbRows: [
    {
      sp_gb_version: 'SP2024-08_GB2023-2040501',
      sp_version: 'SP2024-08',
      gb_version: 'GB2023-2040501',
      date_YYYYQQ: '2023-Q1',
    },
    {
      sp_gb_version: 'SP2024-08_GB2023-2040501',
      sp_version: 'SP2024-08',
      gb_version: 'GB2023-2040501',
      date_YYYYQQ: '2023-Q2',
    },
    {
      sp_gb_version: 'SP2024-08_GB2023-2040501',
      sp_version: 'SP2024-08',
      gb_version: 'GB2023-2040501',
      date_YYYYQQ: '2024-Q2',
    },
    {
      sp_gb_version: 'SP2024-08_GB2023-2030901',
      sp_version: 'SP2024-08',
      gb_version: 'GB2023-2030901',
      date_YYYYQQ: '2023-Q1',
    },
    {
      sp_gb_version: 'SP2024-08_GB2023-2030901',
      sp_version: 'SP2024-08',
      gb_version: 'GB2023-2030901',
      date_YYYYQQ: '2023-Q4',
    },
    {
      sp_gb_version: 'SP2024-08_GB2023-2030901',
      sp_version: 'SP2024-08',
      gb_version: 'GB2023-2030901',
      date_YYYYQQ: '2024-Q1',
    },
  ],
};

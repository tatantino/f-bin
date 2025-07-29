import type { DmdVersion } from '../types';

export const PAGE_CONFIG = {
  title: 'Demand Change List',
  description: 'View and manage Demand Changes',
  searchPlaceholder: 'Search changes...',
  defaultPastDays: 365,
} as const;

export const TABLE_CONFIG = {
  columns: [
    { key: 'dmd_sp_gb_name', label: 'SP/GB Name', sortable: true },
    { key: 'dmd_change_name', label: 'Change Name', sortable: true },
    { key: 'dmd_change_unit', label: 'Change Unit', sortable: true },
    { key: 'dmd_remark', label: 'Remark', sortable: true },
    { key: 'username', label: 'User', sortable: true },
    { key: 'create_timestamp', label: 'Created', sortable: true },
    { key: 'update_timestamp', label: 'Updated', sortable: true },
  ] as const,
  searchableFields: [
    'dmd_sp_gb_name',
    'dmd_change_name',
    'dmd_change_unit',
    'dmd_remark',
    'username',
  ] as const,
  initialSort: {
    key: 'create_timestamp' as keyof DmdVersion,
    direction: 'desc' as const,
  },
} as const;

export const API_CONFIG = {
  baseUrl: '/api/1.0/demands/changes/versions',
} as const;

export const MESSAGES = {
  success: {
    update: 'Version updated successfully',
    delete: 'Version deleted successfully',
  },
  error: {
    update: 'Failed to update version',
    delete: 'Failed to delete version',
    generic: 'An error occurred',
  },
} as const;

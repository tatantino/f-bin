import { TimestampCell } from '@/components/shared/tables/cells/TimestampCell';
import { formatDisplayUnit } from '@/utils/formatters/unitFormatters';
import type { Column } from '@/components/shared/tables/base-data-table/types';
import type { DmdVersion } from '@/types/dmd-version';
import type { FilterConfig } from '@/components/shared/tables/data-list-view';
import { ROUTES } from '@/app/config/routes';

// Page configuration
export const PAGE_TITLE = 'Demand Change List';
export const HEADER_BUTTON_TYPE = 'addNew';
export const HEADER_BUTTON_TEXT = 'New Demand Change';
export const HEADER_BUTTON_ROUTE = ROUTES.DMD_CHANGE_CREATE;

// API endpoint for demand changes
export const DMD_CHANGES_API = '/api/1.0/demands/changes/versions';

// Default number of past days to show in date filter
export const DEFAULT_PAST_DAYS = 365;

// Query key for React Query
export const QUERY_KEY = 'dmd-versions';

// Function to extract unique key from DmdVersion
export const extractDmdVersionKey = (item: DmdVersion): string =>
  item.dmd_change_master_id ||
  `${item.dmd_sp_gb_name}-${item.create_timestamp || ''}`;

// Table columns configuration
export const tableColumns: Column<DmdVersion>[] = [
  {
    key: 'dmd_sp_gb_name',
    label: 'SP/GB Name',
    sortable: true,
    render: value => String(value ?? '-'),
  },
  {
    key: 'dmd_change_unit',
    label: 'Change Unit',
    sortable: true,
    render: value => formatDisplayUnit(String(value ?? '')),
  },
  {
    key: 'dmd_remark',
    label: 'Remark',
    sortable: true,
    render: value => String(value ?? '-'),
  },
  {
    key: 'username',
    label: 'User',
    sortable: true,
    render: value => String(value ?? '-'),
  },
  {
    key: 'create_timestamp',
    label: 'Created',
    sortable: true,
    render: value => <TimestampCell value={value as string} />,
  },
  {
    key: 'update_timestamp',
    label: 'Updated',
    sortable: true,
    render: value => <TimestampCell value={value as string} />,
  },
];

// Search fields configuration
export const searchableFields: (keyof DmdVersion)[] = [
  'dmd_sp_gb_name',
  'dmd_change_unit',
  'dmd_remark',
  'username',
];

// Select filters configuration
export const selectFilters: FilterConfig<DmdVersion>[] = [
  { field: 'dmd_change_unit', label: 'Change Unit' },
];

// Initial sort configuration
export const initialSort = {
  key: 'create_timestamp' as keyof DmdVersion,
  direction: 'desc' as const,
};

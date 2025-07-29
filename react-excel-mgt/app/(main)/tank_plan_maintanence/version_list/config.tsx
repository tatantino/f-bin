import { TimestampCell } from '@/components/shared/tables/cells/TimestampCell';
import type { Column } from '@/components/shared/tables/base-data-table/types';
import type { PlanVersion } from '../_shared/types';
import type { FilterConfig } from '@/components/shared/tables/data-list-view';
import { ROUTES } from '@/app/config/routes';
import { VersionCell } from './components/VersionCell';
import { PlanBadge } from '@/components/shared/badges';

// Page configuration
export const PAGE_TITLE = 'Tank Plan Version List';
export const HEADER_BUTTON_TYPE = 'addNew';
export const HEADER_BUTTON_TEXT = 'Upload Long-term Plan';
export const HEADER_BUTTON_ROUTE = ROUTES.LONG_TERM;

// API endpoint for tank plan versions
export const TANK_PLANS_API = '/api/1.0/tank-plans/versions';

// Default number of past days to show in date filter
export const DEFAULT_PAST_DAYS = 90;

// Query key for React Query
export const QUERY_KEY = 'tank-plan-versions';

// Function to extract unique key from PlanVersion
export const extractPlanVersionKey = (item: PlanVersion): string =>
  String(item.plan_master_id);

// Table columns configuration
export const tableColumns: Column<PlanVersion>[] = [
  {
    key: 'plan_version',
    label: 'Version',
    sortable: true,
    render: (_, data) => <VersionCell data={data} />,
  },
  {
    key: 'plan_type',
    label: 'Type',
    sortable: true,
    render: value => <PlanBadge type={String(value ?? '')} />,
  },
  {
    key: 'user_name',
    label: 'Created By',
    sortable: true,
    render: value => String(value ?? '-'),
  },
  {
    key: 'update_timestamp',
    label: 'Updated At',
    sortable: true,
    render: value => <TimestampCell value={value as string} />,
  },
  {
    key: 'create_timestamp',
    label: 'Created At',
    sortable: true,
    render: value => <TimestampCell value={value as string} />,
  },
];

// Search fields configuration
export const searchableFields: (keyof PlanVersion)[] = [
  'plan_version',
  'plan_type',
  'user_name',
];

// Select filters configuration
export const selectFilters: FilterConfig<PlanVersion>[] = [
  { field: 'plan_type', label: 'Plan Type' },
  { field: 'plan_official', label: 'Plan Tag' },
];

// Initial sort configuration
export const initialSort = {
  key: 'plan_version' as keyof PlanVersion,
  direction: 'desc' as const,
};

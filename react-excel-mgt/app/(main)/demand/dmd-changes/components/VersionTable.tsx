import { Edit, Trash2, LineChart } from 'lucide-react';
import { TimestampCell } from '@/components/shared/tables/cells/TimestampCell';
import { DataTable } from '@/components/shared/tables/base-data-table';
import type { Column } from '@/components/shared/tables/base-data-table/types';
import type { DmdVersion, VersionTableProps, VersionAction } from '../types';
import { TABLE_CONFIG } from '../config/constants';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/app/config/routes';
import { formatDisplayUnit } from '@/utils/formatters/unitFormatters';
import { TableSkeleton } from './table-skeleton';

const COLUMNS: Column<DmdVersion>[] = TABLE_CONFIG.columns.map(col => ({
  key: col.key,
  label: col.label,
  sortable: col.sortable,
  render: (value: unknown) => {
    if (col.key.includes('timestamp')) {
      return <TimestampCell value={value as string} />;
    }
    if (col.key === 'dmd_change_unit') {
      return formatDisplayUnit(String(value ?? ''));
    }
    return String(value ?? '-');
  },
}));

function createVersionActions(
  onEdit?: (version: DmdVersion) => void,
  onDelete?: (version: DmdVersion) => void,
  onProposal?: (version: DmdVersion) => void
): VersionAction[] {
  const actions: VersionAction[] = [];

  if (onProposal) {
    actions.push({
      label: 'Proposal',
      icon: LineChart,
      onClick: onProposal,
      variant: 'default',
    });
  }

  if (onEdit) {
    actions.push({
      label: 'Edit',
      icon: Edit,
      onClick: onEdit,
      variant: 'default',
    });
  }

  if (onDelete) {
    actions.push({
      label: 'Delete',
      icon: Trash2,
      onClick: onDelete,
      variant: 'destructive',
    });
  }

  return actions;
}

export function VersionTable({
  data,
  sortConfig,
  onSort,
  onEdit,
  onDelete,
  loading,
}: VersionTableProps) {
  const router = useRouter();

  if (loading) {
    return <TableSkeleton />;
  }

  const handleProposal = (version: DmdVersion) => {
    if (!version.dmd_change_master_id) {
      console.error('Invalid DMD Change Master ID');
      return;
    }
    router.push(
      `${ROUTES.DMD_CHANGE_PROPOSAL}?dmd_change_master_id=${version.dmd_change_master_id}`
    );
  };

  const actions = createVersionActions(onEdit, onDelete, handleProposal);

  return (
    <DataTable<DmdVersion>
      data={data}
      columns={COLUMNS}
      sortConfig={sortConfig}
      onSort={onSort}
      actions={actions.length ? actions : undefined}
      keyExtractor={version => version.dmd_change_master_id}
    />
  );
}

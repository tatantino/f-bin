import type { TankInfo } from '../types/tank';
import type { DataGridColumn } from '@/components/shared/tables/excel-data-table';

const createColumn = (
  key: keyof TankInfo,
  label: string
): DataGridColumn<TankInfo> => ({
  key,
  label,
  formatValue: (value: string | number | null) => String(value || ''),
});

export const tankTableColumns: Readonly<DataGridColumn<TankInfo>[]> = [
  createColumn('tank', 'Tank'),
  createColumn('BU', 'BU'),
  createColumn('region', 'Region'),
  createColumn('region_seq', 'Region Sequence'),
  createColumn('location', 'Location'),
  createColumn('iso', 'ISO'),
  createColumn('platform', 'Platform'),
  createColumn('metal_shop', 'Metal Shop'),
] as const;

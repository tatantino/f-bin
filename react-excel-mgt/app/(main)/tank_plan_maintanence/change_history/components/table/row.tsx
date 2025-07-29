import { TableCell, TableRow } from '@/components/ui/table';
import Link from 'next/link';
import { ROUTES } from '@/app/config/routes';
import { DateChangeCell } from './date-change-cell';
import type { PlanHistoryRecord } from '../../../_shared/types';

/**
 * Renders a row in the history table with change information
 */
export function HistoryTableRow({ record }: { record: PlanHistoryRecord }) {
  return (
    <TableRow key={record.plan_change_hist_id} className="h-10">
      {/* Change date */}
      <TableCell className="px-2 py-1">
        {record.plan_change_hist_timestamp}
      </TableCell>

      {/* Basic info */}
      <TableCell className="px-2 py-1">{record.tank}</TableCell>
      <TableCell className="px-2 py-1">{record.RC}</TableCell>

      {/* Schedule changes */}
      <TableCell className="px-2 py-1">
        <DateChangeCell
          oldValue={record.drain_date_o}
          newValue={record.drain_date_n}
        />
      </TableCell>
      <TableCell className="px-2 py-1">
        <DateChangeCell
          oldValue={record.repair_date_o}
          newValue={record.repair_date_n}
        />
      </TableCell>
      <TableCell className="px-2 py-1">
        <DateChangeCell
          oldValue={record.RTL_date_o}
          newValue={record.RTL_date_n}
        />
      </TableCell>
      <TableCell className="px-2 py-1">
        <DateChangeCell
          oldValue={record.TL_date_o}
          newValue={record.TL_date_n}
        />
      </TableCell>
      <TableCell className="px-2 py-1">
        <DateChangeCell
          oldValue={record.GG_date_o}
          newValue={record.GG_date_n}
        />
      </TableCell>

      {/* Version link */}
      <TableCell className="px-2 py-1">
        <Link
          href={`${ROUTES.PLAN_DETAILS}?id=${record.plan_master_id}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          Link
        </Link>
      </TableCell>

      {/* Additional metadata */}
      <TableCell className="px-2 py-1">{record.username}</TableCell>
      <TableCell className="px-2 py-1">{record.remark_category}</TableCell>
      <TableCell className="px-2 py-1">{record.remark}</TableCell>
    </TableRow>
  );
}

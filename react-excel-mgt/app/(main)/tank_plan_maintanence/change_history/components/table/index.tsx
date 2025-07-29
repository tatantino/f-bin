import { Table, TableBody } from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';
import { HistoryTableHeader } from './header';
import { HistoryTableRow } from './row';
import type { PlanHistoryRecord } from '../../../_shared/types';

interface HistoryTableProps {
  data: PlanHistoryRecord[];
  isLoading?: boolean;
  sortConfig: {
    key: keyof PlanHistoryRecord;
    direction: 'asc' | 'desc';
  };
  onSort: (key: keyof PlanHistoryRecord) => void;
}

/**
 * Table component for displaying change history records
 */
export function HistoryTable({
  data,
  isLoading,
  sortConfig,
  onSort,
}: HistoryTableProps) {
  const renderTableContent = () => {
    if (isLoading) {
      return (
        <TableBody>
          {Array(10)
            .fill(null)
            .map((_, index) => (
              <tr key={`skeleton-${index}`} className="h-10">
                {Array(12)
                  .fill(null)
                  .map((_, cellIndex) => (
                    <td key={`cell-${cellIndex}`} className="px-2 py-1">
                      <Skeleton className="h-4 w-full" />
                    </td>
                  ))}
              </tr>
            ))}
        </TableBody>
      );
    }

    if (data.length === 0) {
      return (
        <TableBody>
          <tr>
            <td colSpan={12} className="h-96 text-center">
              <div className="flex flex-col items-center justify-center gap-2 py-8 text-muted-foreground">
                <p>No results found. Try adjusting your filters.</p>
              </div>
            </td>
          </tr>
        </TableBody>
      );
    }

    return (
      <TableBody>
        {data.map(record => (
          <HistoryTableRow key={record.plan_change_hist_id} record={record} />
        ))}
      </TableBody>
    );
  };

  return (
    <div className="overflow-x-auto rounded-md border">
      <Table>
        <HistoryTableHeader sortConfig={sortConfig} onSort={onSort} />
        {renderTableContent()}
      </Table>
    </div>
  );
}

export * from './header';
export * from './row';

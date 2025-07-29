import React from 'react';
import { InfoTooltip } from '@/components/shared/feedbacks/InfoTooltip';
import { formatDisplayUnit } from '@/utils/formatters/unitFormatters';
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from '@/components/ui/table';

/**
 * Props for the demand data table component
 */
export interface DmdDataTableProps {
  headers: string[];
  rows: (string | number | null)[][];
  unit: string;
}

/**
 * Component that displays demand change data in a table format
 */
export function DmdDataTable({ headers, rows, unit }: DmdDataTableProps) {
  const isEmpty = rows.length === 0 || headers.length === 0;

  return (
    <section>
      <header className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-medium">
            Demand Change Data (by Gen Group)
          </h3>
          <InfoTooltip content={<TableTooltipContent />} />
        </div>
        <div className="text-[11px]">Unit: {formatDisplayUnit(unit)}</div>
      </header>

      {isEmpty ? <EmptyState /> : <DataTable headers={headers} rows={rows} />}
    </section>
  );
}

/**
 * Empty state component when no data is available
 */
function EmptyState() {
  return (
    <div className="flex h-32 items-center justify-center rounded-md border border-gray-200 bg-gray-50/50">
      <p className="text-sm">No demand change data available</p>
    </div>
  );
}

/**
 * Data table component to display the demand data
 */
function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: (string | number | null)[][];
}) {
  return (
    <div className="overflow-hidden rounded-md border border-gray-200">
      <Table className="w-full">
        <TableHeader>
          <TableRow className="bg-gray-50">
            {headers.map((header, index) => (
              <TableHead
                key={index}
                className={`border-b text-xs ${index >= 2 ? 'text-center' : ''}`}
              >
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((cell, cellIndex) => {
                const isTextColumn = cellIndex < 2;
                return (
                  <TableCell
                    key={cellIndex}
                    className={getCellClassName(cell, isTextColumn)}
                  >
                    {formatCellContent(cell, isTextColumn)}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

/**
 * Get cell class name based on column type and value
 */
function getCellClassName(
  cell: string | number | null,
  isTextColumn: boolean
): string {
  const baseClass = 'py-1.5 font-medium';

  if (isTextColumn) {
    return baseClass;
  }

  const numValue = cell === null ? 0 : typeof cell === 'number' ? cell : 0;
  const valueClass = numValue < 0 ? 'text-rose-400' : '';

  return `${baseClass} text-center tabular-nums ${valueClass}`;
}

/**
 * Format cell content based on data type and value
 */
function formatCellContent(
  cell: string | number | null,
  isTextColumn: boolean
): React.ReactNode {
  if (isTextColumn) return cell;

  const numValue = cell === null ? 0 : typeof cell === 'number' ? cell : 0;
  return numValue > 0 ? `+${numValue}` : numValue;
}

/**
 * Tooltip content for explaining the table
 */
function TableTooltipContent() {
  return (
    <div className="space-y-2 text-xs">
      <p>Displays aggregated demand change values by generation group.</p>
      <p>
        Each row represents a unique gen group and composition group
        combination, with values shown per year.
      </p>
      <p>Negative values are shown in red.</p>
    </div>
  );
}

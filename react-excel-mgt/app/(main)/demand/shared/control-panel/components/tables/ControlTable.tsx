import React, { ReactNode } from 'react';
import { Badge } from '@/components/ui/badge';
import { ProductionPlan, SizeType } from '../../types';
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from '@/components/ui/table';
import { getSizeColor } from '../../config/constants';

interface ControlTableProps {
  plans: ProductionPlan[];
  years: string[];
  renderCell: (plan: ProductionPlan, year: string, size: SizeType) => ReactNode;
}

/**
 * Table for controlling size ratios or quantities
 */
function ControlTable({ plans, years, renderCell }: ControlTableProps) {
  // Helper function to sort sizes by dimension (larger first)
  const sortSizes = (sizes: string[]): SizeType[] => {
    return [...sizes].sort((a, b) => {
      const sizeA = parseInt(a.replace('"', ''));
      const sizeB = parseInt(b.replace('"', ''));
      return sizeB - sizeA;
    }) as SizeType[];
  };

  return (
    <div className="overflow-hidden rounded-md border border-gray-200">
      <Table className="w-full">
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="w-[100px] border-b text-xs">
              Gen Group
            </TableHead>
            <TableHead className="w-[120px] border-b text-xs">
              Composition Group
            </TableHead>
            <TableHead className="w-[70px] border-b text-xs">Isopipe</TableHead>
            {years.map(year => (
              <TableHead key={year} className="border-b text-center text-xs">
                {year}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {plans.flatMap(plan => {
            // Get first year to extract size keys
            const firstYear = years[0];
            const firstYearData = plan.years[firstYear];

            // If no data for the first year, skip this plan
            if (!firstYearData) return [];

            // Sort sizes for this plan
            const sizes = sortSizes(Object.keys(firstYearData.ratios));

            return sizes.map((size, sizeIndex) => (
              <TableRow
                key={`${plan.genGroup}-${plan.compositionGroup}-${size}`}
                className={sizeIndex % 2 === 1 ? 'bg-gray-50/30' : ''}
              >
                {/* Only render gen/composition group cells for first size row */}
                {sizeIndex === 0 && (
                  <>
                    <TableCell
                      className="py-1.5 font-medium"
                      rowSpan={sizes.length}
                    >
                      {plan.genGroup}
                    </TableCell>
                    <TableCell
                      className="py-1.5 font-medium"
                      rowSpan={sizes.length}
                    >
                      {plan.compositionGroup}
                    </TableCell>
                  </>
                )}

                {/* Size badge */}
                <TableCell className="py-1.5">
                  <Badge
                    variant="outline"
                    className={`${getSizeColor(size)} justify-center px-2 py-0.5 text-[10px]`}
                  >
                    {size}
                  </Badge>
                </TableCell>

                {/* Year cells */}
                {years.map(year => {
                  const yearData = plan.years[year];
                  const baseValue = yearData?.baseValue || 0;

                  return (
                    <TableCell
                      key={`${plan.genGroup}-${plan.compositionGroup}-${size}-${year}`}
                      className="p-1.5"
                    >
                      {baseValue !== 0 ? (
                        renderCell(plan, year, size)
                      ) : (
                        <div className="relative">
                          <div className="absolute inset-0 rounded-md bg-gray-100/50 shadow-inner" />
                          <div className="relative flex h-8 items-center justify-center rounded-md border border-gray-200/50 bg-gray-50/30" />
                        </div>
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ));
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export { ControlTable };

'use client';

import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { getItemColor } from './display-helpers';

interface ResultTableProps {
  data: Record<string, Record<string, number>>;
  years: string[];
}

/**
 * Displays summary data in a tabular format
 */
export function ResultTable({ data, years }: ResultTableProps) {
  // Sort items - larger sizes first if numeric, otherwise alphabetically
  const sortedItems = Object.keys(data).sort((a, b) => {
    const numA = parseFloat(a.split('"')[0]);
    const numB = parseFloat(b.split('"')[0]);
    return !isNaN(numA) && !isNaN(numB) ? numB - numA : a.localeCompare(b);
  });

  return (
    <div className="overflow-hidden rounded-md border border-gray-200">
      <Table className="w-full">
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="border-b text-xs">Isopipe Size</TableHead>
            {years.map(year => (
              <TableHead key={year} className="border-b text-center text-xs">
                {year}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedItems.map((item, index) => (
            <TableRow key={item}>
              <TableCell className="py-1.5">
                <Badge
                  variant="outline"
                  className={`${getItemColor(item)} justify-center px-2 py-0.5 text-[10px]`}
                >
                  {item}
                </Badge>
              </TableCell>

              {years.map(year => {
                const value = data[item][year] || 0;
                const valueClass =
                  value === 0 ? '' : value < 0 ? 'text-rose-400' : '';

                return (
                  <TableCell
                    key={`${item}-${year}`}
                    className={`py-1.5 text-center text-xs tabular-nums ${valueClass}`}
                  >
                    {value.toFixed(1)}
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

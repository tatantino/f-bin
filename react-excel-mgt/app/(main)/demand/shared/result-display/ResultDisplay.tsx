import React from 'react';
import { InfoTooltip } from '@/components/shared/feedbacks/InfoTooltip';
import { formatDisplayUnit } from '@/utils/formatters/unitFormatters';
import { ResultTable } from './ResultTable';

// Default tooltip content
const TOOLTIP = (
  <>
    <p className="text-sm text-muted-foreground">
      This table shows the calculated production results:
    </p>
    <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
      <li className="flex items-start gap-2.5">
        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
        <span>Each row represents an Isopipe size&apos;s total production</span>
      </li>
      <li className="flex items-start gap-2.5">
        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
        <span>Values are the sum of all Gen Groups producing this size</span>
      </li>
      <li className="flex items-start gap-2.5">
        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
        <span>Updates automatically when you change ratios or quantities</span>
      </li>
    </ul>
  </>
);

export interface ResultDisplayProps {
  summary: Record<string, Record<string, number>>;
  years: string[];
  unit: string;
}

/**
 * Generic component for displaying tabular results with summary data
 */
export function ResultDisplay({ summary, years, unit }: ResultDisplayProps) {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-medium">Result ( by Isopipe )</h3>
          <InfoTooltip content={TOOLTIP} />
        </div>
        <div className="text-[11px]">Unit: {formatDisplayUnit(unit)}</div>
      </div>

      <ResultTable data={summary} years={years} />
    </div>
  );
}

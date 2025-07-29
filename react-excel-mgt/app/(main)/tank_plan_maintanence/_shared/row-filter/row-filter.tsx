'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Switch } from '@/components/ui/switch';
import { Filter, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { RowFilterProps, DATE_FIELD_NAMES } from './types';
import { logger } from '@/lib/logger';

/**
 * A dropdown filter component for filtering rows by date range
 * Specifically designed for tank plan maintenance workflows
 */
export function RowFilter({
  showAllRows,
  onShowAllRowsChange,
  enabled = true,
  hasDateFields,
  dateFieldNames = DATE_FIELD_NAMES,
  dateFilterThreshold = 199, // ~6.5 months
}: RowFilterProps) {
  // Do not render if there are no date fields or the filter is disabled
  if (!hasDateFields || !enabled) return null;

  // Handle the switch toggle - inverts the showAllRows state
  const handleRowFilterChange = (checked: boolean) => {
    logger.debug('Row filter changed', {
      module: 'RowFilter',
      showingFiltered: checked,
      newShowAllRows: !checked,
      dateFieldNames,
      dateFilterThreshold,
    });
    onShowAllRowsChange(!checked);
  };

  // Format field names for display
  const formatFieldName = (field: string): string => {
    return field
      .replace(/_/g, ' ')
      .replace(/date/i, 'Date')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            'h-9 gap-1.5 border bg-background pl-3 pr-2 font-normal',
            'min-w-[130px] justify-start',
            !showAllRows && 'text-primary font-medium'
          )}
          title={
            showAllRows
              ? 'Click to filter data within 18 months'
              : 'Currently showing data within 18 months'
          }
        >
          <Filter
            className={cn(
              'h-4 w-4 flex-none',
              showAllRows ? 'text-muted-foreground' : 'text-primary'
            )}
          />
          <span className="flex-1 text-left">
            {showAllRows ? 'All Rows' : 'Within 18MP'}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[280px]">
        <DropdownMenuLabel className="flex items-center gap-2 text-xs font-normal text-muted-foreground">
          <Calendar className="h-4 w-4" />
          Date Range Filter
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="p-2">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium">
                    Show rows within 18 months
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Only show rows where any date field is within 18 months from
                    today
                  </p>
                </div>
                <Switch
                  checked={!showAllRows}
                  onCheckedChange={handleRowFilterChange}
                  className="data-[state=checked]:bg-primary"
                />
              </div>
            </div>
            <div className="space-y-2 rounded-md bg-muted/50 p-2 text-xs">
              <div className="font-medium">Filtered Date Fields:</div>
              <div className="space-y-1 pl-2 text-muted-foreground">
                {dateFieldNames.map(field => (
                  <div key={field}>• {formatFieldName(field)}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

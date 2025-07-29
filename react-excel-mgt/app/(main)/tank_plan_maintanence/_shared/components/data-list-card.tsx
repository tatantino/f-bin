'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Search, CalendarIcon, RefreshCw } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { DateRange } from 'react-day-picker';
import { PageTitle } from '@/components/shared/layouts/PageTitle';

export interface FilterOption<T = string> {
  value: T;
  label: string;
}

export interface DataListCardProps<T = string> {
  title: string;
  description?: string;
  tooltip?: {
    title: string;
    content: React.ReactNode;
  };
  loading?: boolean;
  onRefresh?: () => void;
  searchPlaceholder?: string;
  onSearch?: (value: string) => void;
  filterOptions?: {
    type?: FilterOption<T>[];
    tag?: FilterOption<string>[];
    tank?: FilterOption<string>[];
    rc?: FilterOption<string>[];
    category?: FilterOption<string>[];
  };
  onFilterChange?: {
    type?: (value: T) => void;
    tag?: (value: string) => void;
    tank?: (value: string) => void;
    rc?: (value: string) => void;
    category?: (value: string) => void;
  };
  selectedFilters?: {
    type?: T;
    tag?: string;
    tank?: string;
    rc?: string;
    category?: string;
  };
  dateRange?: DateRange | undefined;
  onDateRangeChange?: (range: DateRange | undefined) => void;
  children?: React.ReactNode;
  className?: string;
  totalRows?: number;
  filteredRows?: number;
}

export function DataListCard<T extends string>({
  title,
  description,
  tooltip,
  loading,
  onRefresh,
  searchPlaceholder = 'Search...',
  onSearch,
  filterOptions,
  onFilterChange,
  selectedFilters,
  dateRange,
  onDateRangeChange,
  children,
  className,
  totalRows,
  filteredRows,
}: DataListCardProps<T>) {
  return (
    <>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <PageTitle
              title={title}
              description={description}
              tooltip={tooltip}
            />
            {typeof totalRows === 'number' && (
              <div className="flex items-center gap-2">
                <div
                  className={cn(
                    'rounded-md px-2 py-0.5 text-xs font-medium',
                    loading
                      ? 'bg-muted'
                      : filteredRows !== totalRows && filteredRows !== undefined
                        ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400'
                        : 'bg-muted/50 text-muted-foreground'
                  )}
                >
                  {loading ? (
                    <div className="h-3 w-16 animate-pulse rounded bg-muted-foreground/10" />
                  ) : (
                    <span className="tabular-nums">
                      {filteredRows?.toLocaleString() ??
                        totalRows.toLocaleString()}
                      {filteredRows !== totalRows &&
                        filteredRows !== undefined && (
                          <>
                            {' '}
                            <span className="text-muted-foreground/70">
                              of
                            </span>{' '}
                            {totalRows.toLocaleString()}
                          </>
                        )}{' '}
                      <span className="text-muted-foreground/70">
                        {totalRows === 1 ? 'row' : 'rows'}
                      </span>
                    </span>
                  )}
                </div>
                {filteredRows !== totalRows && filteredRows !== undefined && (
                  <span className="text-[10px] text-muted-foreground">
                    ({Math.round((filteredRows / totalRows) * 100)}%)
                  </span>
                )}
              </div>
            )}
          </div>
          {onRefresh && (
            <Button
              variant="outline"
              size="icon"
              onClick={onRefresh}
              disabled={loading}
            >
              <RefreshCw className={cn('h-4 w-4', loading && 'animate-spin')} />
            </Button>
          )}
        </div>

        <div className="flex items-center gap-4">
          {onSearch && (
            <div className="relative flex-1">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder={searchPlaceholder}
                onChange={e => onSearch(e.target.value)}
                className="h-10 pl-8 text-sm"
              />
            </div>
          )}

          {filterOptions?.type && (
            <Select
              value={selectedFilters?.type as string}
              onValueChange={(value: string) =>
                onFilterChange?.type?.(value as T)
              }
            >
              <SelectTrigger className="h-10 w-[160px] text-sm">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                {filterOptions.type.map(option => (
                  <SelectItem
                    key={String(option.value)}
                    value={String(option.value)}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}

          {filterOptions?.tag && (
            <Select
              value={selectedFilters?.tag}
              onValueChange={onFilterChange?.tag}
            >
              <SelectTrigger className="h-10 w-[160px] text-sm">
                <SelectValue placeholder="Tag" />
              </SelectTrigger>
              <SelectContent>
                {filterOptions.tag.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}

          {filterOptions?.tank && (
            <Select
              value={selectedFilters?.tank}
              onValueChange={onFilterChange?.tank}
            >
              <SelectTrigger className="h-10 w-[160px] text-sm">
                <SelectValue placeholder="Tank" />
              </SelectTrigger>
              <SelectContent>
                {filterOptions.tank.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}

          {filterOptions?.rc && (
            <Select
              value={selectedFilters?.rc}
              onValueChange={onFilterChange?.rc}
            >
              <SelectTrigger className="h-10 w-[160px] text-sm">
                <SelectValue placeholder="RC" />
              </SelectTrigger>
              <SelectContent>
                {filterOptions.rc.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}

          {filterOptions?.category && (
            <Select
              value={selectedFilters?.category}
              onValueChange={onFilterChange?.category}
            >
              <SelectTrigger className="h-10 w-[160px] text-sm">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {filterOptions.category.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}

          {onDateRangeChange && (
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={'outline'}
                  className={cn(
                    'h-10 w-[260px] justify-start text-left text-sm font-normal',
                    !dateRange && 'text-muted-foreground'
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateRange?.from ? (
                    dateRange.to ? (
                      <>
                        {format(dateRange.from, 'LLL dd, y')} -{' '}
                        {format(dateRange.to, 'LLL dd, y')}
                      </>
                    ) : (
                      format(dateRange.from, 'LLL dd, y')
                    )
                  ) : (
                    <span>Pick a date range</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={dateRange?.from}
                  selected={dateRange}
                  onSelect={onDateRangeChange}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>

      <div className="mt-4">{children}</div>
    </>
  );
}

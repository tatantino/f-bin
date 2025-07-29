'use client';

import React, { useState, useMemo } from 'react';
import { DataTable } from '@/components/shared/tables/excel-data-table';
import {
  RowFilter,
  filterDataByDates,
  hasDateFieldsInData,
  DATE_FIELD_NAMES,
} from './row-filter';
import type {
  VisibilityState,
  EditConfig,
  DataGridColumn,
} from '@/components/shared/tables/excel-data-table/types';
import { logger } from '@/lib/logger';

interface FilteredPlanDataTableProps<TData extends Record<string, any>> {
  /**
   * The dataset to display and filter
   */
  data: TData[];

  /**
   * Table column definitions
   */
  columns: DataGridColumn<TData>[];

  /**
   * Configuration for edit functionality
   */
  editConfig?: EditConfig<TData>;

  /**
   * Optional callback when data changes
   */
  onDataChange?: (data: TData[]) => void;

  /**
   * Row height in pixels
   */
  rowHeight?: number;

  /**
   * Maximum height of the table in pixels
   */
  maxHeight?: number;

  /**
   * Optional CSS class names
   */
  className?: string;

  /**
   * Initial column visibility state
   */
  columnVisibility?: VisibilityState;

  /**
   * Callback when column visibility changes
   */
  onColumnVisibilityChange?: (visibility: VisibilityState) => void;

  /**
   * Whether to enable row filtering
   * @default true
   */
  rowFilterEnabled?: boolean;

  /**
   * Initial filter state - whether to show all rows
   * @default true
   */
  initialShowAllRows?: boolean;

  /**
   * Custom date field names to filter by
   */
  dateFieldNames?: readonly string[];

  /**
   * Content to display at the start of the table header
   */
  headerStartContent?: React.ReactNode;

  /**
   * Content to display at the end of the table header
   */
  headerEndContent?: React.ReactNode;

  /**
   * Force table re-render when this key changes
   * @deprecated Use TanStack Query invalidation instead
   */
  forceUpdateKey?: number | string;
}

/**
 * A wrapper component that combines a DataTable with a RowFilter
 * specifically for tank plan data with date filtering
 */
export function FilteredPlanDataTable<TData extends Record<string, any>>({
  data: initialData,
  columns,
  editConfig,
  onDataChange,
  rowHeight,
  maxHeight,
  className,
  columnVisibility,
  onColumnVisibilityChange,
  rowFilterEnabled = true,
  initialShowAllRows = true,
  dateFieldNames = DATE_FIELD_NAMES,
  headerStartContent,
  headerEndContent,
  forceUpdateKey,
}: FilteredPlanDataTableProps<TData>) {
  // State for row filtering
  const [showAllRows, setShowAllRows] = useState(initialShowAllRows);

  // State for maintaining the complete dataset
  const [localData, setLocalData] = useState<TData[]>(initialData);

  // Update localData when initialData changes
  React.useEffect(() => {
    setLocalData(initialData);
  }, [initialData]);

  // Check if data contains date fields that can be filtered
  const hasDateFields = useMemo(
    () => hasDateFieldsInData(initialData, dateFieldNames),
    [initialData, dateFieldNames]
  );

  // Apply filtering to data for display only
  const displayData = useMemo(
    () => filterDataByDates(localData, showAllRows, dateFieldNames),
    [localData, showAllRows, dateFieldNames]
  );

  // When filter state changes
  const handleShowAllRowsChange = (show: boolean) => {
    logger.debug('Row filter state changed', {
      module: 'FilteredPlanDataTable',
      showAllRows: show,
      totalRows: localData.length,
      filteredRows: show
        ? localData.length
        : filterDataByDates(localData, false, dateFieldNames).length,
    });
    setShowAllRows(show);
  };

  // Create a modified editConfig that updates the complete dataset
  const modifiedEditConfig = editConfig
    ? {
        ...editConfig,
        onDataChange: (newData: TData[]) => {
          // Create a map to track updated rows
          const dataMap = new Map<string | number, TData>();

          // First, add all existing data to the map with index as fallback key
          localData.forEach((item, index) => {
            const id = item.plan_detail_id || item.id || `row_${index}`;
            dataMap.set(id, item);
          });

          // Update the map with changed rows
          newData.forEach((item, index) => {
            // Use plan_detail_id, id, or index as key
            const id = item.plan_detail_id || item.id || `row_${index}`;
            dataMap.set(id, item);
          });

          // Convert map back to array while preserving order as much as possible
          // For Excel imported data without IDs, we need to maintain the original array
          const updatedData = Array.from(dataMap.values());

          // Update local state
          setLocalData(updatedData);

          // Call original onDataChange with complete dataset
          editConfig.onDataChange?.(updatedData);
          onDataChange?.(updatedData);
        },
      }
    : undefined;

  // Create the row filter component if enabled
  const rowFilter = rowFilterEnabled && (
    <RowFilter
      showAllRows={showAllRows}
      onShowAllRowsChange={handleShowAllRowsChange}
      enabled={rowFilterEnabled}
      hasDateFields={hasDateFields}
      dateFieldNames={dateFieldNames}
    />
  );

  // Combine custom headerStartContent with the row filter
  const combinedHeaderStartContent = (
    <>
      {rowFilter}
      {headerStartContent}
    </>
  );

  return (
    <div className="flex flex-col gap-1">
      <DataTable
        data={displayData}
        columns={columns}
        editConfig={modifiedEditConfig}
        rowHeight={rowHeight}
        maxHeight={maxHeight}
        className={className}
        columnToggle={{ enabled: true }}
        columnVisibility={columnVisibility}
        onColumnVisibilityChange={onColumnVisibilityChange}
        headerStartContent={combinedHeaderStartContent}
        headerEndContent={headerEndContent}
        key={`${forceUpdateKey || 'data'}-${showAllRows}`} // Re-render when filter or force key changes
        idField={(row: TData, index: number) =>
          String(row.plan_detail_id || row.id || `row_${index}`)
        }
      />
    </div>
  );
}

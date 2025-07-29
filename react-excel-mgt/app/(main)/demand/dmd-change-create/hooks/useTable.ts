/**
 * Table-related hooks
 * Handles table rendering, column configuration and data operations
 */
'use client';

import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import type { DataGridColumn } from '@/components/shared/tables/excel-data-table';
import { INITIAL_ROW, MIN_ROWS } from '../config/constants';
import { queryOpts } from '../services';
import type { CompositionGroup, GenGroup } from '../types';
import type { DmdChangeDetail } from '../types/api';
import { createEmptyValuesByDates } from '../utils';

// Basic formatting and validation functions
const defaultFormatValue = (value: string | number | null) =>
  String(value ?? '');

const validateNumberValue = (value: string) => {
  if (!value || value === '-') return null;
  return !isNaN(Number(value)) ? null : 'Invalid number';
};

/**
 * Creates base column definitions
 */
function createColumns(
  genGroups: GenGroup[],
  compositionGroups: CompositionGroup[],
  dateYYYYQQs?: string[] | null
): DataGridColumn<DmdChangeDetail>[] {
  // Base columns with metadata fields
  const baseColumns: DataGridColumn<DmdChangeDetail>[] = [
    {
      key: 'business_unit',
      label: 'Business Unit',
      formatValue: defaultFormatValue,
    },
    { key: 'region', label: 'Region', formatValue: defaultFormatValue },
    { key: 'customer', label: 'Customer', formatValue: defaultFormatValue },
    {
      key: 'TFT_customer',
      label: 'TFT Customer',
      formatValue: defaultFormatValue,
    },
    {
      key: 'TFT_region',
      label: 'TFT Region',
      formatValue: defaultFormatValue,
    },
    { key: 'area', label: 'Area', formatValue: defaultFormatValue },
    { key: 'thickness', label: 'Thickness', formatValue: defaultFormatValue },
    { key: 'grade', label: 'Grade', formatValue: defaultFormatValue },
  ];

  // Gen group columns
  const genColumns: DataGridColumn<DmdChangeDetail>[] = [
    {
      key: 'gen_group',
      label: 'Gen Group',
      type: 'select',
      options: genGroups.map(group => group.gen_group),
      formatValue: defaultFormatValue,
    },
    {
      key: 'gen_size',
      label: 'Gen Size',
      type: 'select',
      options: [],
      getDynamicOptions: (row: DmdChangeDetail) => {
        const group = genGroups.find(g => g.gen_group === row.gen_group);
        return group?.gens || [];
      },
      formatValue: defaultFormatValue,
    },
  ];

  // Composition columns
  const compositionColumns: DataGridColumn<DmdChangeDetail>[] = [
    {
      key: 'composition_group',
      label: 'Composition Group',
      type: 'select',
      options: compositionGroups.map(group => group.composition_group),
      formatValue: defaultFormatValue,
    },
    {
      key: 'composition',
      label: 'Composition',
      type: 'select',
      options: [],
      getDynamicOptions: (row: DmdChangeDetail) => {
        const group = compositionGroups.find(
          g => g.composition_group === row.composition_group
        );
        return group?.compositions || [];
      },
      formatValue: defaultFormatValue,
    },
  ];

  // Date columns (dynamic based on YYYYQQs)
  const dateColumns: DataGridColumn<DmdChangeDetail>[] = dateYYYYQQs?.length
    ? dateYYYYQQs
        .filter(
          date => parseInt(date.split('-')[0]) >= new Date().getFullYear() - 1
        )
        .map(date => ({
          key: `dmd_value_${date}` as keyof DmdChangeDetail,
          label: date,
          type: 'number',
          formatValue: defaultFormatValue,
          validateValue: validateNumberValue,
        }))
    : [];

  // Combine all columns
  return [...baseColumns, ...genColumns, ...compositionColumns, ...dateColumns];
}

/**
 * Table column configuration hook
 * Returns column definitions for the data table
 */
export function useTableColumns(dateYYYYQQs?: string[] | null) {
  const { data: compositionGroups = [] } = useQuery(
    queryOpts.compositionGroups
  );
  const { data: genGroups = [] } = useQuery(queryOpts.genGroups);

  return useMemo(
    () => createColumns(genGroups, compositionGroups, dateYYYYQQs),
    [dateYYYYQQs, compositionGroups, genGroups]
  );
}

/**
 * Table data operation hook
 * Provides utility functions for table data manipulation
 */
export function useTableData(dateYYYYQQs?: string[] | null) {
  // Create a new empty row with date columns
  const createNewRow = useMemo(
    () => () => ({
      ...INITIAL_ROW,
      ...createEmptyValuesByDates(dateYYYYQQs),
    }),
    [dateYYYYQQs]
  );

  // Ensure table has at least the minimum required rows
  const ensureMinRows = useMemo(
    () => (data: DmdChangeDetail[]) => {
      if (data.length >= MIN_ROWS) return data;

      const rowsToAdd = MIN_ROWS - data.length;
      return [
        ...data,
        ...Array(rowsToAdd)
          .fill(0)
          .map(() => createNewRow()),
      ];
    },
    [createNewRow]
  );

  return { createNewRow, ensureMinRows };
}

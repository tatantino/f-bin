/**
 * Table related hooks
 * Handles table rendering, column configuration and data operations
 */
'use client';

import { useMemo } from 'react';
import type { DmdChangeDetail } from '../types/api';
import { useQuery } from '@tanstack/react-query';
import {
  INITIAL_ROW,
  MIN_ROWS,
  ENDPOINTS,
  createBaseColumns,
  createGenColumns,
  createCompositionColumns,
  createDateColumns,
} from '../config';

// 查询键定义
const QUERY_KEYS = {
  GEN_GROUPS: 'gen-groups',
  COMPOSITION_GROUPS: 'composition-groups',
};

// --------------------------------------------------
// Type definitions
// --------------------------------------------------

/** Generation group type */
type GenGroup = any; // Assuming the type is imported from somewhere

/** Composition group type */
type CompositionGroup = any; // Assuming the type is imported from somewhere

// --------------------------------------------------
// Helper functions
// --------------------------------------------------

/**
 * Default value formatting function
 */
const defaultFormatValue = (value: string | number | null) =>
  String(value ?? '');

/**
 * Number input validation
 */
const validateNumberValue = (value: string) => {
  if (!value || value === '-') return null;
  return !isNaN(Number(value)) ? null : 'Invalid number';
};

// --------------------------------------------------
// Column creation functions
// --------------------------------------------------

// --------------------------------------------------
// Main hooks
// --------------------------------------------------

/**
 * Table column configuration hook
 * Generates table column definitions based on available data
 *
 * @param dateYYYYQQs - Array of date strings (YYYY-QQ format)
 * @returns Array of column definitions for the data table
 */
export function useTableColumns(dateYYYYQQs?: string[] | null) {
  const { data: compositionGroups = [] } = useQuery({
    queryKey: [QUERY_KEYS.COMPOSITION_GROUPS],
    queryFn: async () => {
      const response = await fetch(
        ENDPOINTS.DEMANDS.COMPOSITION.COMPOSITION_GROUPS
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || 'Failed to fetch composition groups'
        );
      }
      return response.json();
    },
    staleTime: 1000 * 60 * 60, // 1 hour
    gcTime: 1000 * 60 * 60 * 24, // 1 day
  });

  const { data: genGroups = [] } = useQuery({
    queryKey: [QUERY_KEYS.GEN_GROUPS],
    queryFn: async () => {
      const response = await fetch(ENDPOINTS.DEMANDS.COMPOSITION.GEN_GROUPS);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch gen groups');
      }
      return response.json();
    },
    staleTime: 1000 * 60 * 60, // 1 hour
    gcTime: 1000 * 60 * 60, // 1 hour
  });

  return useMemo(() => {
    const baseColumns = createBaseColumns();
    const genCols = createGenColumns(genGroups);
    const compositionCols = createCompositionColumns(compositionGroups);
    const dateCols = dateYYYYQQs?.length ? createDateColumns(dateYYYYQQs) : [];

    return [...baseColumns, ...genCols, ...compositionCols, ...dateCols];
  }, [dateYYYYQQs, compositionGroups, genGroups]);
}

/**
 * Table data operations hook
 * Handles table row addition, deletion, etc.
 *
 * @param dateYYYYQQs - Array of date strings (YYYY-QQ format)
 * @returns Table data operation functions
 */
export function useTableData(dateYYYYQQs?: string[] | null) {
  const createEmptyValuesByDates = (dates?: string[] | null) =>
    Object.fromEntries((dates || []).map(date => [`dmd_value_${date}`, null]));

  const createNewRow = useMemo(() => {
    return () => ({
      ...INITIAL_ROW,
      ...createEmptyValuesByDates(dateYYYYQQs),
    });
  }, [dateYYYYQQs]);

  const ensureMinRows = useMemo(() => {
    return (data: DmdChangeDetail[]) => {
      if (data.length >= MIN_ROWS) return data;

      const rowsToAdd = MIN_ROWS - data.length;
      const newRows = Array(rowsToAdd)
        .fill(0)
        .map(() => createNewRow());

      return [...data, ...newRows];
    };
  }, [createNewRow]);

  return {
    createNewRow,
    ensureMinRows,
  };
}

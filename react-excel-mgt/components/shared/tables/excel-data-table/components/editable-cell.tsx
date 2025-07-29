/**
 * Editable cell components for the data table
 * Supports text and select inputs with validation
 */
'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { type Cell } from '@tanstack/react-table';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import type { DataGridColumn } from '../types';

/**
 * Styling constants for cell components
 */
const CELL_STYLES = {
  base: 'flex h-full w-full items-center px-2 cursor-pointer select-none active:bg-primary/8 hover:bg-primary/5 transition-all duration-200 ease-out',
  modified:
    'bg-amber-50/80 dark:bg-amber-500/30 text-amber-900 dark:text-amber-100 font-medium border-l-2 border-amber-400/50 dark:border-amber-400/30',
  input:
    'h-full w-full rounded-[2px] border-0 bg-background/90 px-2 py-0 focus-visible:ring-0 focus-visible:ring-offset-0 selection:bg-primary/15',
  select:
    'h-full w-full rounded-[2px] border-0 min-h-0 py-0 px-2 focus:ring-0 focus:ring-offset-0 bg-transparent',
  selectWrapper: 'flex h-full w-full items-center justify-center min-h-0',
  selectTrigger:
    'h-full min-h-0 w-full flex items-center justify-between truncate',
  selectContent: 'max-h-[300px] overflow-y-auto',
  wrapper: 'relative flex h-full w-full items-center',
  inputWrapper:
    'absolute inset-0 flex items-center duration-200 ease-out animate-in fade-in',
  inputBorder:
    'pointer-events-none absolute -inset-[0px] rounded-[2px] border border-primary/80 duration-200 ease-out animate-in fade-in',
} as const;

// Symbol used to represent empty values in select fields
const EMPTY_VALUE = Symbol('EMPTY');

/**
 * Props for the EditableCell component
 */
interface EditableCellProps<TData> {
  cell: Cell<TData, unknown>;
  allowEdit?: boolean;
  formatValue?: (value: string, columnId: keyof TData) => string;
  onUpdate: (rowId: string, columnId: keyof TData, value: string) => void;
}

/**
 * Select input cell component for dropdown options
 */
function SelectCell<TData>({
  value,
  options,
  onChange,
  hasValueChanged,
}: {
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
  hasValueChanged: boolean;
}) {
  const safeValue = value || String(EMPTY_VALUE);

  return (
    <div
      className={cn(
        CELL_STYLES.wrapper,
        CELL_STYLES.base,
        hasValueChanged && CELL_STYLES.modified
      )}
    >
      <div className={CELL_STYLES.selectWrapper}>
        <Select
          value={safeValue}
          onValueChange={val =>
            onChange(val === String(EMPTY_VALUE) ? '' : val)
          }
        >
          <SelectTrigger
            className={cn(CELL_STYLES.select, CELL_STYLES.selectTrigger)}
          >
            <SelectValue placeholder=" " />
          </SelectTrigger>
          <SelectContent className={CELL_STYLES.selectContent}>
            <SelectItem value={String(EMPTY_VALUE)}>
              <span>&nbsp;</span>
            </SelectItem>
            {options.map(option => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

/**
 * Text input cell component with validation support
 */
function TextCell<TData>({
  value,
  onChange,
  onBlur,
  inputRef,
  validateValue,
  type,
}: {
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  inputRef: React.RefObject<HTMLInputElement>;
  validateValue?: (value: string) => string | null;
  type?: string;
}) {
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setError(validateValue?.(newValue) ?? null);
    onChange(newValue);
  };

  return (
    <div className={CELL_STYLES.wrapper}>
      <div className={CELL_STYLES.inputWrapper}>
        <div className="relative h-full w-full">
          <div
            className={cn(
              CELL_STYLES.inputBorder,
              error && 'border-destructive'
            )}
          />
          <Input
            ref={inputRef}
            value={value}
            onChange={handleChange}
            onBlur={onBlur}
            type="text"
            inputMode={type === 'number' ? 'numeric' : 'text'}
            className={cn(CELL_STYLES.input, error && 'text-destructive')}
          />
          {error && (
            <div className="absolute left-0 top-full z-50 mt-1 rounded-md bg-destructive/90 px-2 py-1 text-xs text-white">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Main editable cell component that renders the appropriate input based on column type
 * Supports text and select inputs with validation
 */
export function EditableCell<TData>({
  cell,
  allowEdit = true,
  formatValue,
  onUpdate,
}: EditableCellProps<TData>) {
  const inputRef = useRef<HTMLInputElement>(null);
  const originalValueRef = useRef(String(cell.getValue() ?? ''));
  const columnDef = cell.column.columnDef as unknown as DataGridColumn<TData>;
  const isNonEditable = columnDef.meta?.nonEditable === true;

  const [value, setValue] = useState(originalValueRef.current);
  const [isEditing, setIsEditing] = useState(false);

  const hasValueChanged = value !== originalValueRef.current;

  useEffect(() => {
    if (isEditing && inputRef.current && columnDef.type !== 'select') {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing, columnDef.type]);

  const handleSave = useCallback(() => {
    const currentValue = value.trim();
    const originalValue = originalValueRef.current.trim();

    if (columnDef.validateValue) {
      const error = columnDef.validateValue(currentValue);
      if (error) {
        setValue(originalValueRef.current);
        setIsEditing(false);
        return;
      }
    }

    if (currentValue !== originalValue) {
      onUpdate(cell.row.id, cell.column.id as keyof TData, currentValue);
    }

    setIsEditing(false);
  }, [value, cell, onUpdate, columnDef]);

  const handleSelectChange = useCallback(
    (newValue: string) => {
      setValue(newValue);
      if (newValue.trim() !== originalValueRef.current.trim()) {
        onUpdate(cell.row.id, cell.column.id as keyof TData, newValue);
      }
    },
    [cell, onUpdate, originalValueRef]
  );

  // Read-only cell rendering
  if (!allowEdit || isNonEditable) {
    return (
      <div className={CELL_STYLES.base}>
        <span className="truncate">
          {columnDef.meta?.customRenderer
            ? columnDef.meta.customRenderer(originalValueRef.current, {
                rowIndex: cell.row.index,
              })
            : (formatValue?.(
                originalValueRef.current,
                cell.column.id as keyof TData
              ) ?? originalValueRef.current)}
        </span>
      </div>
    );
  }

  // Select cell rendering
  if (columnDef.type === 'select') {
    const options = columnDef.getDynamicOptions
      ? columnDef.getDynamicOptions(cell.row.original)
      : columnDef.options || [];

    // Handle value mapping if provided
    if (columnDef.valueMap) {
      const { valueToDisplay, displayToValue } = columnDef.valueMap;
      return (
        <SelectCell
          value={valueToDisplay(value)}
          options={options}
          onChange={selectedDisplay => {
            handleSelectChange(String(displayToValue(selectedDisplay)));
          }}
          hasValueChanged={hasValueChanged}
        />
      );
    }

    return (
      <SelectCell
        value={value}
        options={options}
        onChange={handleSelectChange}
        hasValueChanged={hasValueChanged}
      />
    );
  }

  // Text cell rendering - editing mode
  if (isEditing) {
    return (
      <TextCell
        value={value}
        onChange={setValue}
        onBlur={handleSave}
        inputRef={inputRef}
        validateValue={columnDef.validateValue}
        type={columnDef.type}
      />
    );
  }

  // Text cell rendering - display mode
  return (
    <div className={CELL_STYLES.wrapper} onClick={() => setIsEditing(true)}>
      <div
        className={cn(
          CELL_STYLES.base,
          hasValueChanged && CELL_STYLES.modified
        )}
      >
        <span className="truncate">
          {formatValue?.(value, cell.column.id as keyof TData) ?? value}
        </span>
      </div>
    </div>
  );
}

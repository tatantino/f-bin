import React from 'react';
import {
  ProductionPlan,
  SizeType,
  PlanItemKey,
  RatioUpdateFn,
} from '../../types';
import { InputCell } from './InputCell';
import { ControlTable } from '../tables';

interface QuantityControlProps {
  plans: ProductionPlan[];
  years: string[];
  onUpdate: RatioUpdateFn;
}

/**
 * Calculates quantity based on base value and ratio
 * Converts percentage to absolute value
 */
export const calculateQuantity = (baseValue: number, ratio: number) =>
  (baseValue * ratio) / 100;

/**
 * Calculates ratio based on quantity and base value
 * Converts absolute value to percentage
 */
export const calculateRatio = (quantity: number, baseValue: number) =>
  baseValue === 0 ? 0 : (quantity * 100) / baseValue;

/**
 * Manages size assignments using absolute quantity values
 */
function QuantityControl({ plans, years, onUpdate }: QuantityControlProps) {
  // Render input cell with appropriate quantity value and constraints
  const renderCell = (plan: ProductionPlan, year: string, size: SizeType) => {
    const yearData = plan.years[year];
    if (!yearData) return null;

    const baseValue = yearData.baseValue;

    // Skip rendering for zero base value
    if (baseValue === 0) return null;

    const quantity = calculateQuantity(baseValue, yearData.ratios[size]);

    // Calculate min/max based on base value
    const isNegativeBase = baseValue < 0;
    const min = isNegativeBase ? baseValue : 0;
    const max = isNegativeBase ? 0 : baseValue;

    // Create key for updates
    const itemKey: PlanItemKey = {
      genGroup: plan.genGroup,
      compositionGroup: plan.compositionGroup,
      year,
      size,
    };

    return (
      <InputCell
        value={quantity}
        onChange={(value: number) => {
          const newRatio = calculateRatio(value, baseValue);
          onUpdate(itemKey, newRatio);
        }}
        min={min}
        max={max}
        step={0.1}
        size={size}
        precision={1}
      />
    );
  };

  return <ControlTable plans={plans} years={years} renderCell={renderCell} />;
}

export { QuantityControl };

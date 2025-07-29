import React from 'react';
import {
  ProductionPlan,
  SizeType,
  PlanItemKey,
  RatioUpdateFn,
} from '../../types';
import { InputCell } from './InputCell';
import { ControlTable } from '../tables';

interface RatioControlProps {
  plans: ProductionPlan[];
  years: string[];
  onUpdate: RatioUpdateFn;
}

/**
 * Manages size assignments using percentage/ratio values
 */
function RatioControl({ plans, years, onUpdate }: RatioControlProps) {
  // Render cell with appropriate constraints
  const renderCell = (plan: ProductionPlan, year: string, size: SizeType) => {
    const yearData = plan.years[year];
    if (!yearData) return null;

    // Calculate min/max constraints based on baseValue sign
    const min = 0;
    const max = 100;

    // Create key for updates
    const itemKey: PlanItemKey = {
      genGroup: plan.genGroup,
      compositionGroup: plan.compositionGroup,
      year,
      size,
    };

    return (
      <InputCell
        value={yearData.ratios[size]}
        onChange={(value: number) => onUpdate(itemKey, value)}
        min={min}
        max={max}
        size={size}
        suffix="%"
      />
    );
  };

  return <ControlTable plans={plans} years={years} renderCell={renderCell} />;
}

export { RatioControl };

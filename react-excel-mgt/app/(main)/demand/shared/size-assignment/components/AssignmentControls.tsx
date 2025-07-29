import { useState } from 'react';
import { RatioControl, QuantityControl } from '../../control-panel';
import { TabControl } from './TabControl';
import { ProductionPlan, PlanItemKey } from '../types';

interface AssignmentControlsProps {
  plans: ProductionPlan[];
  years: string[];
  onRatioUpdate: (planItemKey: PlanItemKey, value: number) => void;
}

/**
 * Controls section for size assignment
 * Handles mode switching and ratio/quantity inputs
 */
export function AssignmentControls({
  plans,
  years,
  onRatioUpdate,
}: AssignmentControlsProps) {
  // Manage mode state internally
  const [mode, setMode] = useState<'ratio' | 'quantity'>('ratio');

  // Handle mode change
  const handleModeChange = (newMode: 'ratio' | 'quantity') => {
    setMode(newMode);
  };

  return (
    <div>
      <TabControl mode={mode} onModeChange={handleModeChange} />

      {mode === 'ratio' ? (
        <RatioControl plans={plans} years={years} onUpdate={onRatioUpdate} />
      ) : (
        <QuantityControl plans={plans} years={years} onUpdate={onRatioUpdate} />
      )}
    </div>
  );
}

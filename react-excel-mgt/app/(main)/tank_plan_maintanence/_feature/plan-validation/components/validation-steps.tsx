import { cn } from '@/lib/utils';
import type { ValidationStep as ValidationStepType } from '../types';
import { ValidationStep } from './validation-step';

interface ValidationStepsProps {
  steps: ValidationStepType[];

  isValidating: boolean;

  className?: string;
}

export function ValidationSteps({
  steps,
  isValidating,
  className,
}: ValidationStepsProps) {
  return (
    <div
      className={cn(
        'space-y-2.5 rounded-lg bg-muted/30 p-3 transition-all duration-300',
        isValidating ? 'opacity-100' : 'opacity-80',
        className
      )}
    >
      {steps.map(step => (
        <ValidationStep key={step.id} step={step} />
      ))}
    </div>
  );
}

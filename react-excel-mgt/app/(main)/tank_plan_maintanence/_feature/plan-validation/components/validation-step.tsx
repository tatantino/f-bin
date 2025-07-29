import { Circle, CheckCircle, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ValidationStep as ValidationStepType } from '../types';

interface ValidationStepProps {
  step: ValidationStepType;
}

const statusIconMap = {
  pending: <Circle className="h-4 w-4 text-muted-foreground/30" />,
  processing: (
    <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
  ),
  success: <CheckCircle className="h-4 w-4 text-green-500" />,
  error: <XCircle className="h-4 w-4 text-red-500" />,
};

const statusClassMap = {
  pending: '',
  processing: 'bg-background shadow-sm ring-1 ring-border/50',
  success: 'text-green-600',
  error: 'text-red-600',
};

export function ValidationStep({ step }: ValidationStepProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 rounded-md px-3 py-2 transition-all duration-200',
        statusClassMap[step.status]
      )}
    >
      <div className="flex-shrink-0">{statusIconMap[step.status]}</div>
      <div className="flex flex-col gap-0.5">
        <span className="text-sm font-medium">{step.label}</span>
        {step.message && (
          <span className="text-xs text-muted-foreground">{step.message}</span>
        )}
      </div>
    </div>
  );
}

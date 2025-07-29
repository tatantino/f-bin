import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ValidationStep } from '../types';

interface ValidationSuccessProps {
  step?: ValidationStep;
  message?: string;
  className?: string;
}

export function ValidationSuccess({
  step,
  message,
  className,
}: ValidationSuccessProps) {
  if (!step || step.status !== 'pending') return null;

  return (
    <div
      className={cn(
        'duration-300 animate-in fade-in slide-in-from-top-2',
        className
      )}
    >
      <div className="min-h-[90px] space-y-2 rounded-lg bg-green-50 px-4 py-3 text-green-900 ring-1 ring-green-200">
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
            <Check className="h-3 w-3 text-green-600" />
          </div>
          <p className="text-sm font-medium">Ready to save changes</p>
        </div>
        <div className="pl-7">
          <p className="text-sm text-green-700">
            {message ||
              'All validations passed successfully. Would you like to proceed with saving?'}
          </p>
        </div>
      </div>
    </div>
  );
}

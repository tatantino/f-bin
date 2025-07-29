import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ValidationErrorsProps {
  errors: string[];

  className?: string;
}

export function ValidationErrors({ errors, className }: ValidationErrorsProps) {
  if (!errors.length) return null;

  const errorItemClasses = cn(
    'text-sm text-red-700',
    'py-1',
    'border-l-2 border-red-200/50 pl-2',
    'animate-in fade-in-50 slide-in-from-top-1',
    'duration-100'
  );

  return (
    <div
      className={cn(
        'duration-300 animate-in fade-in slide-in-from-top-2',
        className
      )}
    >
      <div className="space-y-3 rounded-lg bg-red-50 px-4 py-3 text-red-900 ring-1 ring-red-200">
        <div className="flex items-center gap-2">
          <div className="h-1 w-1 rounded-full bg-red-500" />
          <p className="text-sm font-medium">Please fix the following issues</p>
        </div>

        <ScrollArea className="h-[200px] w-full rounded pr-4">
          <div className="space-y-2 pl-3">
            {errors.map((error, index) => (
              <p key={index} className={errorItemClasses}>
                {error}
              </p>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SavingStatusProps {
  message?: string;
  className?: string;
}

export function SavingStatus({
  message = 'Please wait while we save your data. This may take a few moments...',
  className,
}: SavingStatusProps) {
  return (
    <div
      className={cn(
        'duration-300 animate-in fade-in slide-in-from-top-2',
        className
      )}
    >
      <div className="min-h-[90px] space-y-2 rounded-lg bg-primary/5 px-4 py-3 text-primary ring-1 ring-primary/20">
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
            <Loader2 className="h-3 w-3 animate-spin text-primary" />
          </div>
          <p className="text-sm font-medium">Saving your changes</p>
        </div>
        <div className="pl-7">
          <p className="text-sm text-primary/80">{message}</p>
        </div>
      </div>
    </div>
  );
}

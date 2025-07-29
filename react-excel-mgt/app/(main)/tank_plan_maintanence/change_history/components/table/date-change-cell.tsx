import { cn } from '@/lib/utils';

interface DateChangeCellProps {
  oldValue: string | null;
  newValue: string | null;
}

/**
 * Displays old and new date values with visual indication of changes
 */
export function DateChangeCell({ oldValue, newValue }: DateChangeCellProps) {
  // No values case
  if (!oldValue && !newValue) {
    return null;
  }

  // Unchanged value case
  if (oldValue === newValue && oldValue) {
    return (
      <div className="text-center text-xs tabular-nums leading-tight text-muted-foreground/80">
        {oldValue}
      </div>
    );
  }

  return (
    <div className="space-y-[2px] text-center text-xs tabular-nums leading-tight">
      {/* New value */}
      <div
        className={cn(
          'font-medium',
          newValue ? 'text-emerald-600' : 'text-muted-foreground/30'
        )}
      >
        {newValue || 'null'}
      </div>

      {/* Old value */}
      <div
        className={cn(
          oldValue &&
            newValue &&
            oldValue !== newValue &&
            'line-through decoration-red-400/60',
          oldValue ? 'text-red-400/90' : 'text-muted-foreground/30'
        )}
      >
        {oldValue || 'null'}
      </div>
    </div>
  );
}

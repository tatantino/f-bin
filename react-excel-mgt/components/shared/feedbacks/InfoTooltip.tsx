import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Info } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InfoTooltipProps {
  content: React.ReactNode;
  className?: string;
  iconSize?: number;
  delayDuration?: number;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
}

/**
 * A reusable info tooltip component that displays helpful information
 * when users hover over or focus on the info icon.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <InfoTooltip content="Simple tooltip text" />
 *
 * // Complex content with JSX
 * <InfoTooltip
 *   content={
 *     <>
 *       <h3 className="font-medium">Feature Title</h3>
 *       <p className="text-sm text-muted-foreground">Feature description</p>
 *     </>
 *   }
 * />
 * ```
 */
export function InfoTooltip({
  content,
  className,
  iconSize = 16,
  delayDuration = 300,
  side = 'right',
  align = 'start',
}: InfoTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={delayDuration}>
        <TooltipTrigger asChild>
          <button
            type="button"
            className={cn(
              'inline-flex items-center justify-center rounded-full p-0.5',
              'text-muted-foreground hover:bg-muted hover:text-foreground',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
              'transition-colors duration-200',
              className
            )}
          >
            <Info width={iconSize} height={iconSize} />
          </button>
        </TooltipTrigger>
        <TooltipContent
          side={side}
          align={align}
          className="max-w-[320px] space-y-2 p-3"
        >
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

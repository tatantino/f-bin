import { InfoTooltip } from '@/components/shared/feedbacks';
import { cn } from '@/lib/utils';
import type { PageTitleProps } from '@/types/page';

/**
 * A reusable page title component that displays a header with optional description,
 * tooltip, icon, and action buttons
 * @example
 * ```tsx
 * <PageTitle
 *   title="Dashboard"
 *   description="Overview of your data"
 *   tooltip={{
 *     content: (
 *       <>
 *         <h3 className="font-medium leading-none">About Dashboard</h3>
 *         <div className="text-sm text-muted-foreground">This page shows key metrics</div>
 *       </>
 *     )
 *   }}
 *   actions={<Button>New Item</Button>}
 * />
 * ```
 */
export function PageTitle({
  title,
  description,
  tooltip,
  actions,
  icon,
  className,
}: PageTitleProps) {
  return (
    <header
      className={cn('flex items-center justify-between gap-4', className)}
    >
      <div className="flex min-w-0 items-center gap-4">
        {icon && <div className="flex shrink-0 items-center">{icon}</div>}
        <div className="flex min-w-0 items-center gap-4">
          <div className="flex items-center gap-2">
            <h1 className="truncate text-2xl font-semibold tracking-tight">
              {title}
            </h1>
            {tooltip && (
              <InfoTooltip
                content={tooltip.content}
                className="shrink-0"
                side="right"
                align="start"
              />
            )}
          </div>
          {description && (
            <>
              <div className="h-6 w-px shrink-0 bg-border" />
              <p className="truncate text-sm text-muted-foreground">
                {description}
              </p>
            </>
          )}
        </div>
      </div>
      {actions && (
        <div className="flex shrink-0 items-center gap-2">{actions}</div>
      )}
    </header>
  );
}

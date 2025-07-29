import { MoreHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

export interface MenuAction<T = any> {
  label: string;
  icon: LucideIcon;
  onClick: (data: T) => void;
  show?: (data: T) => boolean;
  disabled?: (data: T) => boolean;
  variant?: 'default' | 'destructive';
}

interface DropdownMenuButtonProps<T = any> {
  data: T;
  actions: MenuAction<T>[];
  disabled?: boolean;
  icon?: LucideIcon;
  buttonSize?: 'default' | 'sm' | 'lg' | 'icon';
  buttonVariant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
  align?: 'start' | 'end' | 'center';
  className?: string;
}

export function DropdownMenuButton<T = any>({
  data,
  actions,
  disabled,
  icon: Icon = MoreHorizontal,
  buttonSize = 'icon',
  buttonVariant = 'ghost',
  align = 'end',
  className,
}: DropdownMenuButtonProps<T>) {
  if (!actions?.length) return null;

  const visibleActions = actions.filter(
    action => !action.show || action.show(data)
  );
  if (!visibleActions.length) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={buttonVariant}
          size={buttonSize}
          className={cn('h-8 w-8 p-0', className)}
          disabled={disabled}
        >
          <span className="sr-only">Open menu</span>
          <Icon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align={align} className="w-[180px]">
        {visibleActions.map((action, index) => {
          const Icon = action.icon;
          const isDisabled =
            disabled || (action.disabled && action.disabled(data));

          return (
            <DropdownMenuItem
              key={`${action.label}-${index}`}
              onClick={() => action.onClick(data)}
              disabled={isDisabled}
              className={cn(
                'gap-2',
                action.variant === 'destructive' && 'text-destructive',
                'focus:text-foreground'
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{action.label}</span>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

/**
 * Card component for displaying import steps
 */
'use client';

import { cn } from '@/lib/utils';
import type { ImportStepCard } from '../config/upload-config';

interface ImportStepCardProps {
  step: ImportStepCard;
}

export function ImportStepsCard({ step }: ImportStepCardProps) {
  const {
    title,
    icon: Icon,
    desc,
    steps,
    color,
    iconColor,
    iconBg,
    ringColor,
  } = step;

  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-xl border shadow-sm',
        'bg-gradient-to-b from-card to-card/50',
        'transition duration-300 hover:shadow-md',
        'dark:shadow-none'
      )}
    >
      <div
        className={cn(
          'absolute inset-0 bg-gradient-to-b opacity-0 transition-opacity duration-300',
          'group-hover:opacity-100',
          color
        )}
      />

      <div className="relative p-5">
        <div className="flex items-center gap-4">
          <div
            className={cn(
              'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl',
              'transition-all duration-300 group-hover:scale-110',
              'ring-2 ring-offset-2 ring-offset-background',
              iconBg,
              ringColor
            )}
          >
            <Icon className={cn('h-5 w-5', iconColor)} />
          </div>
          <div>
            <h4 className="flex items-center gap-2 text-lg font-semibold tracking-tight">
              {title}
            </h4>
            <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
          </div>
        </div>

        <div className="mt-4 space-y-2 pl-8">
          {steps.map((text, index) => (
            <div
              key={index}
              className={cn(
                'relative flex items-center gap-3',
                'text-sm text-muted-foreground'
              )}
            >
              <div
                className={cn(
                  'h-1.5 w-1.5 shrink-0 rounded-full',
                  'bg-muted-foreground/30',
                  'group-hover:bg-muted-foreground/50'
                )}
              />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

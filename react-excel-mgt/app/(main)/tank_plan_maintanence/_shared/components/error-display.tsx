'use client';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { AlertCircle, AlertTriangle, Info, X } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import { cva } from 'class-variance-authority';

export interface ErrorDisplayProps {
  errors: string[];
  title?: string;
  description?: string;
  className?: string;
  position?: 'fixed' | 'absolute' | 'relative';
  maxHeight?: number;
  showClose?: boolean;
  onClose?: () => void;
  variant?: 'error' | 'warning' | 'info';
  autoHideDuration?: number;
}

const errorDisplayVariants = cva('w-[600px] rounded-lg shadow-lg', {
  variants: {
    variant: {
      error: 'border-destructive/30 bg-destructive/5 text-destructive',
      warning: 'border-yellow-500/30 bg-yellow-500/5 text-yellow-700',
      info: 'border-blue-500/30 bg-blue-500/5 text-blue-700',
    },
    position: {
      fixed: 'fixed left-1/2 top-6 z-50 -translate-x-1/2',
      absolute: 'absolute left-1/2 top-6 z-50 -translate-x-1/2',
      relative: 'relative w-full',
    },
  },
  defaultVariants: {
    variant: 'error',
    position: 'fixed',
  },
});

const iconMap = {
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
} as const;

const variantMap = {
  error: 'destructive',
  warning: 'default',
  info: 'default',
} as const;

export function ErrorDisplay({
  errors,
  title = 'Error Occurred',
  description = 'Please check the following errors',
  className,
  position = 'fixed',
  maxHeight = 240,
  showClose = true,
  onClose,
  variant = 'error',
  autoHideDuration,
}: ErrorDisplayProps) {
  const [show, setShow] = useState(true);
  const Icon = iconMap[variant];

  const handleClose = useCallback(() => {
    setShow(false);
    onClose?.();
  }, [onClose]);

  useEffect(() => {
    if (errors.length > 0) {
      setShow(true);
    }
  }, [errors]);

  useEffect(() => {
    if (autoHideDuration && show && errors.length > 0) {
      const timer = setTimeout(handleClose, autoHideDuration);
      return () => clearTimeout(timer);
    }
  }, [autoHideDuration, show, errors.length, handleClose]);

  if (!errors.length || !show) return null;

  return (
    <div
      className={cn(
        errorDisplayVariants({ variant, position }),
        'backdrop-blur-lg supports-[backdrop-filter]:bg-opacity-[0.03]',
        'duration-300 animate-in fade-in slide-in-from-top-4',
        className
      )}
    >
      <Alert variant={variantMap[variant]} className="border-none">
        <div className="relative">
          {showClose && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-8 w-8"
              onClick={handleClose}
            >
              <X className="h-4 w-4" />
            </Button>
          )}

          <div className="flex items-center gap-2">
            <Icon className="h-4 w-4" />
            <AlertTitle>{title}</AlertTitle>
          </div>

          <ScrollArea className="mt-3 pr-4" style={{ maxHeight }}>
            <ul className="space-y-2 pl-6 text-sm">
              {errors.map((error, index) => (
                <li
                  key={index}
                  className="list-disc leading-relaxed duration-300 animate-in fade-in slide-in-from-bottom-1"
                >
                  {error}
                </li>
              ))}
            </ul>
          </ScrollArea>

          <div className="mt-3 flex items-center justify-between border-t pt-3 text-xs">
            <div>
              {errors.length} {errors.length === 1 ? 'error' : 'errors'} found
            </div>
            <AlertDescription>{description}</AlertDescription>
          </div>
        </div>
      </Alert>
    </div>
  );
}

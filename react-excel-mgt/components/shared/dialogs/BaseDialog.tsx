'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import type { DialogProps } from './types';

/**
 * Base dialog component that can be used to create specialized dialogs
 * @example
 * ```tsx
 * <BaseDialog
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 *   title="Custom Dialog"
 *   description="This is a custom dialog"
 *   headerContent={<CustomHeader />}
 *   footerContent={<CustomFooter />}
 * >
 *   <div>Custom content</div>
 * </BaseDialog>
 * ```
 */
export function BaseDialog({
  open,
  onOpenChange,
  title,
  description,
  headerContent,
  footerContent,
  contentClassName,
  headerClassName,
  footerClassName,
  children,
}: DialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={contentClassName}>
        <DialogHeader className={cn('space-y-2', headerClassName)}>
          {headerContent || (
            <>
              <DialogTitle className="text-xl font-semibold leading-none tracking-tight">
                {title}
              </DialogTitle>
              {description && (
                <DialogDescription className="text-black leading-normal">
                  {description}
                </DialogDescription>
              )}
            </>
          )}
        </DialogHeader>

        {children}

        {footerContent && (
          <DialogFooter className={footerClassName}>
            {footerContent}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}

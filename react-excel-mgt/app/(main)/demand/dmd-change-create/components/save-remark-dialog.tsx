'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useCallback, useState } from 'react';

/**
 * Save remark dialog props
 */
export interface SaveRemarkDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: (remark: string) => Promise<boolean> | void;
  isLoading?: boolean;
}

/**
 * Dialog for entering remarks when saving changes
 */
export function SaveRemarkDialog({
  open,
  onClose,
  onConfirm,
  isLoading = false,
}: SaveRemarkDialogProps) {
  const [remark, setRemark] = useState('');

  // Handle confirmation with non-empty remark
  const handleConfirm = useCallback(() => {
    const trimmedRemark = remark.trim();
    if (trimmedRemark) {
      onConfirm(trimmedRemark);
      setRemark('');
    }
  }, [remark, onConfirm]);

  // Handle dialog close and reset state
  const handleClose = useCallback(() => {
    onClose();
    setRemark('');
  }, [onClose]);

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Save Changes</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="remark">
              Please enter a remark for this change
            </Label>
            <Textarea
              id="remark"
              value={remark}
              onChange={e => setRemark(e.target.value)}
              placeholder="Enter your remark here..."
              rows={4}
              disabled={isLoading}
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={handleClose} disabled={isLoading}>
            Cancel
          </Button>
          <Button
            onClick={handleConfirm}
            disabled={!remark.trim() || isLoading}
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

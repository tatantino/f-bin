'use client';

import { useState, useCallback } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface SaveRemarkDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: (remark: string) => void;
  isLoading?: boolean;
}

export function SaveRemarkDialog({
  open,
  onClose,
  onConfirm,
  isLoading,
}: SaveRemarkDialogProps) {
  const [remark, setRemark] = useState('');

  const handleConfirm = useCallback(() => {
    const trimmedRemark = remark.trim();
    if (trimmedRemark) {
      onConfirm(trimmedRemark);
      setRemark('');
    }
  }, [remark, onConfirm]);

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

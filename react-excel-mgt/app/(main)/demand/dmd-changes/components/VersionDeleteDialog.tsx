import { memo } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { LoadingSpinner } from '@/components/shared/feedbacks/LoadingSpinner';
import type { DmdVersion } from '../types';

interface VersionDeleteDialogProps {
  version: DmdVersion | null;
  onClose: () => void;
  onConfirm: () => void;
  isDeleting?: boolean;
}

export const VersionDeleteDialog = memo(function VersionDeleteDialog({
  version,
  onClose,
  onConfirm,
  isDeleting = false,
}: VersionDeleteDialogProps) {
  if (!version) return null;

  const versionName = version.dmd_change_name || 'this version';

  return (
    <AlertDialog
      open={Boolean(version)}
      onOpenChange={(open: boolean) => !open && onClose()}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm Deletion</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete the version &quot;{versionName}
            &quot;? This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            disabled={isDeleting}
          >
            {isDeleting ? (
              <span className="flex items-center gap-2">
                <LoadingSpinner size="sm" />
                Deleting...
              </span>
            ) : (
              'Delete'
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
});

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { VersionEditor } from '../../_shared/components/version-editor';
import type { PlanVersion } from '../../_shared/types';

interface VersionEditDialogProps {
  plan: PlanVersion | null;
  editedVersion: PlanVersion | null;
  isSaving: boolean;
  onClose: () => void;
  onSave: () => void;
  onChange: (version: PlanVersion) => void;
}

export function VersionEditDialog({
  plan,
  editedVersion,
  isSaving,
  onClose,
  onSave,
  onChange,
}: VersionEditDialogProps) {
  return (
    <Dialog open={!!plan} onOpenChange={open => !open && onClose()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Version Info</DialogTitle>
        </DialogHeader>
        {editedVersion && (
          <div className="py-4">
            <VersionEditor version={editedVersion} onChange={onChange} />
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="font-medium">Created by:</span>
                <span>{editedVersion.user_name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Last edited at:</span>
                <span>{editedVersion.update_timestamp || ''}</span>
              </div>
            </div>
          </div>
        )}
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onSave} disabled={isSaving}>
            {isSaving ? 'Saving...' : 'Save changes'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

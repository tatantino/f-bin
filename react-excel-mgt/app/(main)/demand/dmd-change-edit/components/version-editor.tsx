'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';
import type { DmdChangeMaster } from '../types/api';

interface VersionEditorProps {
  versionInfo: DmdChangeMaster | null;
  onUnitChange: (unit: string) => void;
}

/**
 * Version editor component for edit mode
 * Displays version info and allows unit selection
 */
export function VersionEditor({
  versionInfo,
  onUnitChange,
}: VersionEditorProps) {
  // Safety check - if no version info, show skeleton
  if (!versionInfo) {
    return (
      <div className="flex flex-wrap items-center gap-8">
        <div className="flex items-center gap-2">
          <Label className="w-40">Baseline DMD Version:</Label>
          <Skeleton className="h-10 w-[280px]" />
        </div>
        <div className="flex items-center gap-2">
          <Label className="w-10">Unit: </Label>
          <Skeleton className="h-10 w-32" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-8">
      {/* Version display */}
      <div className="flex items-center gap-2">
        <Label className="w-40">Baseline DMD Version:</Label>
        <div className="flex h-10 items-center rounded-md border border-input bg-muted px-3">
          {versionInfo.dmd_sp_gb_name || 'No Version'}
        </div>
      </div>

      {/* Unit selector */}
      <div className="flex items-center gap-2">
        <Label htmlFor="unit" className="w-10">
          Unit:
        </Label>
        <Select
          value={versionInfo.dmd_change_unit || 'msqft'}
          onValueChange={onUnitChange}
        >
          <SelectTrigger id="unit" className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="msqft">msqft</SelectItem>
            <SelectItem value="kpcs">kpcs</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

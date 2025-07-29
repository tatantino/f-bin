'use client';

import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import { queryOpts } from '../services';
import type { DmdChangeMaster } from '@/app/api/1.0/demands/changes/versions/models/dmd-change';

/**
 * Version editor component props
 */
export interface VersionEditorProps {
  versionInfo: Partial<DmdChangeMaster> | null;
  onChange: (version: Partial<DmdChangeMaster>) => void;
}

/**
 * Version editor component
 * Handles version and unit selection
 */
export function VersionEditor({ versionInfo, onChange }: VersionEditorProps) {
  // Load available versions
  const { data: versions = [], isLoading } = useQuery(queryOpts.spGbVersions);

  // Determine UI states
  const hasSelectedVersion = Boolean(versionInfo?.dmd_sp_gb_name);
  const currentUnit = versionInfo?.dmd_change_unit || 'msqft';

  // Handle version selection
  const handleVersionSelect = useCallback(
    (value: string) => {
      const selectedVersion = versions.find(v => v.sp_gb_version === value);
      if (!selectedVersion) return;

      onChange({
        ...(versionInfo || {}),
        dmd_sp_gb_name: selectedVersion.sp_gb_version,
        date_YYYYQQs: selectedVersion.date_YYYYQQs,
        dmd_change_unit: currentUnit,
      });
    },
    [versions, versionInfo, onChange, currentUnit]
  );

  // Handle unit change
  const handleUnitChange = useCallback(
    (value: string) => {
      versionInfo &&
        onChange({
          ...versionInfo,
          dmd_change_unit: value,
        });
    },
    [versionInfo, onChange]
  );

  // Loading state
  if (isLoading) {
    return (
      <div className="flex items-center gap-2">
        <Label className="w-40">Baseline DMD Version:</Label>
        <Skeleton className="h-10 w-[280px]" />
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-8">
      {/* Version selector */}
      <div className="flex items-center gap-2">
        <Label htmlFor="version" className="w-40">
          Baseline DMD Version:
        </Label>
        <Select
          value={versionInfo?.dmd_sp_gb_name || ''}
          onValueChange={handleVersionSelect}
        >
          <SelectTrigger id="version" className="w-[280px]">
            <SelectValue placeholder="Select a version" />
          </SelectTrigger>
          <SelectContent>
            {versions.map(version => (
              <SelectItem
                key={version.sp_gb_version}
                value={version.sp_gb_version}
              >
                {version.sp_gb_version}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Unit selector - only shown if version is selected */}
      {hasSelectedVersion && (
        <div className="flex items-center gap-2">
          <Label htmlFor="unit" className="w-10">
            Unit:
          </Label>
          <Select value={currentUnit} onValueChange={handleUnitChange}>
            <SelectTrigger id="unit" className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="msqft">msqft</SelectItem>
              <SelectItem value="kpcs">kpcs</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
}

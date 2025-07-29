'use client';

import { PageTitle } from '@/components/shared/layouts/PageTitle';
import { BackLink } from '../../../_shared/components/back-link';
import type { TankInfo } from '../../types/tank';

import { ExportButton, ImportButton, SaveButton } from '..';
import { PAGE_DESCRIPTION, PAGE_TITLE, TOOLTIP_CONFIG } from '../../config';

interface TankDetailsHeaderProps {
  data: TankInfo[];
  hasChanges: boolean;
  onDataChange: (data: TankInfo[]) => void;
  handleImportSuccess: (data: TankInfo[]) => void;
  handleSaveSuccess: (data: TankInfo[]) => void;
  saveChanges: () => Promise<boolean>;
}

export function TankDetailsHeader({
  data,
  hasChanges,
  handleImportSuccess,
  handleSaveSuccess,
  saveChanges,
}: TankDetailsHeaderProps) {
  const actionButtons = (
    <div className="flex items-center gap-2">
      {hasChanges && (
        <>
          <SaveButton
            data={data}
            onSuccess={handleSaveSuccess}
            saveChanges={saveChanges}
          />
        </>
      )}
      <ImportButton onSuccess={handleImportSuccess} />
      <ExportButton data={data} />
    </div>
  );

  return (
    <PageTitle
      title={PAGE_TITLE}
      description={PAGE_DESCRIPTION}
      tooltip={TOOLTIP_CONFIG}
      actions={actionButtons}
      icon={<BackLink />}
    />
  );
}

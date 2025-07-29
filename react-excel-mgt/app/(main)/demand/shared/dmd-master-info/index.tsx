import React from 'react';
import type { DemandChangeData } from '@/app/api/1.0/demands/changes/versions/models/dmd-change';

/**
 * Simple component to display a label-value row
 */
const InfoRow = ({ label, value }: { label: string; value: string | null }) => (
  <div className="flex">
    <div className="w-1/3">{label}:</div>
    <div className="flex-1 font-medium">{value || '-'}</div>
  </div>
);

/**
 * Information section of the BaseDataCard that displays master information
 */
export default function BaseDataInfoSection({
  demandChangeData,
}: {
  demandChangeData: DemandChangeData | null;
}) {
  const masterInfo = demandChangeData?.master || null;

  return (
    <section aria-labelledby="info-heading">
      <header className="mb-3 flex items-center gap-2">
        <h3 id="info-heading" className="text-sm font-medium">
          Demand Change Information
        </h3>
      </header>

      {!masterInfo ? (
        <div className="text-sm text-amber-600">
          No DMD change information available
        </div>
      ) : (
        <div className="text-sm">
          <div className="space-y-3">
            <InfoRow label="SP/GB Name" value={masterInfo.dmd_sp_gb_name} />
            <InfoRow label="Created By" value={masterInfo.username} />
            {masterInfo.dmd_remark && (
              <InfoRow label="Remark" value={masterInfo.dmd_remark} />
            )}
          </div>
        </div>
      )}
    </section>
  );
}

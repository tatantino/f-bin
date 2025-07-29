import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import BaseDataInfoSection from '../../shared/dmd-master-info';
import { DmdDataTableContainer } from '../../shared/dmd-data-table';
import type { DemandChangeData } from '@/app/api/1.0/demands/changes/versions/models/dmd-change';

/**
 * A layout component that displays demand change information and data
 * in a structured two-column card format
 */
export const BaseDataCard = ({
  demandChangeData,
}: {
  demandChangeData: DemandChangeData | null;
}) => {
  return (
    <Card className="overflow-hidden border bg-white shadow-sm">
      <CardContent className="p-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Left column: Information section */}
          <BaseDataInfoSection demandChangeData={demandChangeData} />

          {/* Right column: Data table section */}
          <DmdDataTableContainer demandChangeData={demandChangeData} />
        </div>
      </CardContent>
    </Card>
  );
};

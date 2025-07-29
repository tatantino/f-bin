/**
 * Table for displaying and editing plan data
 */
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FileDown, Save } from 'lucide-react';
import { getTableColumns } from '../config';
import { FilteredPlanDataTable } from '../../_shared';
import { cn } from '@/lib/utils';
import type { TankPlanDetailData } from '../../_shared/types';

interface PlanDetailsTableProps {
  data: TankPlanDetailData[];
  onDataChange: (data: TankPlanDetailData[]) => void;
  hasChanges: boolean;
  isLoading: boolean;
  isExporting: boolean;
  onSave: () => void;
  onExport: () => void;
}

export function PlanDetailsTable({
  data,
  onDataChange,
  hasChanges,
  isLoading,
  isExporting,
  onSave,
  onExport,
}: PlanDetailsTableProps) {
  const columns = getTableColumns();

  // Action buttons for table operations
  const actionButtons = (
    <div className="flex items-center gap-3">
      {hasChanges && (
        <Button size="sm" onClick={onSave}>
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      )}
      <Button
        variant="outline"
        size="sm"
        onClick={onExport}
        disabled={isLoading || !data.length || isExporting}
      >
        <FileDown
          className={cn('mr-2 h-4 w-4', isExporting && 'animate-pulse')}
        />
        {isExporting ? 'Exporting...' : 'Export Excel'}
      </Button>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="h-full w-full"
    >
      <FilteredPlanDataTable
        data={data}
        columns={columns}
        editConfig={{ allowEdit: true, onDataChange }}
        className="h-full w-full"
        headerEndContent={actionButtons}
      />
    </motion.div>
  );
}

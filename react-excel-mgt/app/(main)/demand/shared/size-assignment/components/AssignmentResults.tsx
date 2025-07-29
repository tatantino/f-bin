import { ResultDisplay } from '../../result-display';
import { TankProposalLink } from './TankProposalLink';
import { DemandChangeData } from '@/app/api/1.0/demands/changes/versions/models/dmd-change';
import { ProductionPlan } from '../types';
import { calculateProduction } from '../../control-panel';

interface AssignmentResultsProps {
  plans: ProductionPlan[];
  years: string[];
  demandChangeData: DemandChangeData | null;
}

/**
 * Results section for size assignment
 * Displays calculation results and link to tank proposal
 */
export function AssignmentResults({
  plans,
  years,
  demandChangeData,
}: AssignmentResultsProps) {
  // Extract metadata from demandChangeData
  const unit = demandChangeData?.master?.dmd_change_unit || 'msqft';
  const spGbName = demandChangeData?.master?.dmd_sp_gb_name;
  const dmdChangeMasterId = demandChangeData?.master?.dmd_change_master_id;

  // Calculate summary from plans
  const summary = calculateProduction(plans);

  return (
    <div>
      <ResultDisplay summary={summary} years={years} unit={unit} />

      <TankProposalLink
        spGbName={spGbName}
        dmdChangeMasterId={dmdChangeMasterId}
        summary={summary}
      />
    </div>
  );
}

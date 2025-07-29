import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/app/config/routes';
import { SummaryData } from '../../control-panel/types';

interface TankProposalLinkProps {
  spGbName?: string;
  dmdChangeMasterId?: string;
  summary: SummaryData;
}

export function TankProposalLink({
  spGbName,
  dmdChangeMasterId,
  summary,
}: TankProposalLinkProps) {
  const router = useRouter();

  // Skip rendering if required data is missing
  if (!spGbName || !dmdChangeMasterId) {
    return null;
  }

  const handleViewResult = () => {
    const queryParams = new URLSearchParams({
      sp_gb_name: spGbName,
      dmd_change_master_id: dmdChangeMasterId,
      result_data: encodeURIComponent(JSON.stringify(summary)),
    });

    router.push(`${ROUTES.TANK_PROPOSAL}?${queryParams.toString()}`);
  };

  return (
    <div className="mt-4 flex justify-end">
      <Button
        variant="outline"
        size="sm"
        className="flex items-center gap-1 text-xs"
        onClick={handleViewResult}
      >
        Link to Tank Proposal
        <ArrowUpRight className="h-3 w-3" />
      </Button>
    </div>
  );
}

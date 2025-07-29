'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { AssignmentControls } from './AssignmentControls';
import { AssignmentResults } from './AssignmentResults';
import {
  ProductionPlan,
  PlanItemKey,
  DemandChangeData,
  GenGroupIsopipeMappings,
} from '../types';
import { updatePlanRatio } from '../../control-panel';
import { transformApiDetails } from '../utils/data-transform';

interface SizeAssignmentCardProps {
  demandChangeData: DemandChangeData | null;
  genGroupIsopipeMappings: GenGroupIsopipeMappings[];
}

/**
 * Size Assignment component for managing size distributions
 */
export function SizeAssignmentCard({
  demandChangeData,
  genGroupIsopipeMappings,
}: SizeAssignmentCardProps) {
  // Core state management
  const [plans, setPlans] = useState<ProductionPlan[]>([]);
  const [years, setYears] = useState<string[]>([]);

  // Process input data and initialize plans
  useEffect(() => {
    // Skip if no data available
    if (!demandChangeData?.details || !genGroupIsopipeMappings?.length) {
      return;
    }

    // Transform data directly with the original genGroupIsopipeMappings
    const { plans: transformedPlans, years: transformedYears } =
      transformApiDetails(demandChangeData.details, genGroupIsopipeMappings);

    setPlans(transformedPlans);
    setYears(transformedYears);
  }, [demandChangeData, genGroupIsopipeMappings]);

  // Handle ratio updates - update plans when ratio changes
  const handleRatioUpdate = (planItemKey: PlanItemKey, value: number) => {
    setPlans(currentPlans => updatePlanRatio(currentPlans, planItemKey, value));
  };

  // If there's no data to display, show a simple message
  if (!plans.length) {
    return (
      <Card className="overflow-hidden border bg-white shadow-sm">
        <div className="p-6 text-center">No assignment data available</div>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden border bg-white shadow-sm">
      <div className="border-b bg-gray-50 px-4 py-3">
        <h3 className="font-medium">Isopipe Assignment Proposal</h3>
      </div>
      <CardContent className="p-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr,auto,1fr] md:items-start">
          {/* Controls section */}
          <AssignmentControls
            plans={plans}
            years={years}
            onRatioUpdate={handleRatioUpdate}
          />

          {/* Arrow separator */}
          <div className="hidden h-full items-center md:flex">
            <div className="flex items-center rounded-full bg-gray-100 px-2 py-1">
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>

          {/* Results section */}
          <AssignmentResults
            plans={plans}
            years={years}
            demandChangeData={demandChangeData}
          />
        </div>
      </CardContent>
    </Card>
  );
}

import { toast } from 'sonner';
import { logger } from '@/lib/logger';
import { triggerDatabricksJob } from '../../services/databricks';
import type { PlanType } from '../../types';

interface TriggerJobOptions {
  planMasterId: number;
  planType?: PlanType;
  contextModule?: string;
}

/**
 * Trigger Databricks job for a tank plan
 * This is a standalone function that can be used in different hooks
 */
export async function triggerPlanJob({
  planMasterId,
  planType = 'Weekly',
  contextModule = 'useDatabricksJob',
}: TriggerJobOptions): Promise<boolean> {
  const context = {
    module: contextModule,
    function: 'triggerPlanJob',
    planMasterId,
    planType,
  };

  try {
    // Get version info using the API directly
    const response = await fetch(
      `/api/1.0/tank-plans/versions/${planMasterId}`
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `Error ${response.status}`);
    }

    const result = await response.json();

    if (!result?.master) {
      throw new Error('Failed to get version info');
    }

    const versionInfo = result.master;

    toast.info('Triggering Databricks job...');

    // Get job ID from env
    const jobId = Number(process.env.NEXT_PUBLIC_TANK_PLAN_MAINT_JOB_ID);
    if (!jobId || isNaN(jobId)) {
      throw new Error(
        'NEXT_PUBLIC_TANK_PLAN_MAINT_JOB_ID is not configured or invalid'
      );
    }

    logger.debug('Triggering Databricks job', context, {
      jobId,
      planVersion: versionInfo.plan_version,
      planVersionNo: versionInfo.plan_version_no,
      planType,
    });

    // Trigger job
    await triggerDatabricksJob({
      job_id: jobId,
      plan_version: versionInfo.plan_version,
      plan_version_no: versionInfo.plan_version_no,
      plan_type: planType,
      plan_official: versionInfo.plan_official,
    });

    toast.success('Job Triggered Successfully');

    // Give toast time to display
    await new Promise(resolve => setTimeout(resolve, 3000));
    return true;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    logger.error('Failed to trigger Databricks job', context, {
      error: errorMessage,
      stack: error instanceof Error ? error.stack : undefined,
    });

    toast.error('Job Trigger Failed');

    // Give toast time to display
    await new Promise(resolve => setTimeout(resolve, 3000));
    return false;
  }
}

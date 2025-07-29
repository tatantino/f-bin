import { logger } from '@/lib/logger';
import { ApiClient } from './api-client';

interface DatabricksJobParams {
  job_id: number;
  plan_version: string;
  plan_version_no: string | number;
  plan_type: string;
  plan_official?: string;
}

interface DatabricksJobResult {
  success: boolean;
  job_run_id?: string;
  error?: string;
}

export async function triggerDatabricksJob(
  params: DatabricksJobParams
): Promise<DatabricksJobResult> {
  try {
    const payload = {
      job_id: params.job_id,
      job_parameters: {
        plan_version: params.plan_version,
        plan_type: params.plan_type,
        plan_version_no: String(params.plan_version_no),
        ...(params.plan_official && { plan_official: params.plan_official }),
      },
    };

    return await ApiClient.post<DatabricksJobResult>(
      '/api/trigger-databricks-job',
      payload
    );
  } catch (error) {
    logger.error('Error in triggerDatabricksJob', {
      module: 'triggerDatabricksJob',
      error: error instanceof Error ? error.message : 'Unknown error',
      params,
    });
    throw error;
  }
}

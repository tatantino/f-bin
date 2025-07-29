import { NextRequest } from 'next/server';
import { logger } from '@/lib/logger';
import { randomUUID } from 'crypto';

interface RunNowRequest {
  job_id: number;
  job_parameters?: Record<string, string>;
}

interface RunNowResponse {
  run_id: number;
  number_in_job: number;
}

function validateRequest(body: unknown): body is RunNowRequest {
  if (!body || typeof body !== 'object') {
    return false;
  }

  const request = body as RunNowRequest;
  return typeof request.job_id === 'number';
}

export async function POST(request: NextRequest) {
  const context = {
    module: 'mock-databricks-job',
    function: 'POST',
  };

  try {
    const body = await request.json();

    if (!validateRequest(body)) {
      logger.error('Invalid request format', context, { body });
      return new Response(
        JSON.stringify({
          error_code: 'INVALID_PARAMETER_VALUE',
          message: 'job_id is required',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    logger.debug('Processing job run request', context, { body });

    const response: RunNowResponse = {
      run_id: parseInt(randomUUID().replace(/-/g, '').slice(0, 8), 16),
      number_in_job: Math.floor(Math.random() * 1000) + 1,
    };

    logger.debug('Job run triggered successfully', context, { response });

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    logger.error('Failed to process request', context, {
      error: error instanceof Error ? error.message : 'Unknown error',
    });

    return new Response(
      JSON.stringify({
        error_code: 'INTERNAL_ERROR',
        message: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

export const OPTIONS = () =>
  new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });

import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { logger } from '@/lib/logger';

const DATABRICKS_API = process.env.DATABRICKS_API_URL;
const DATABRICKS_TOKEN = process.env.DATABRICKS_TOKEN;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await fetch(`${DATABRICKS_API}/api/2.2/jobs/run-now`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${DATABRICKS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(
        `API request failed: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return NextResponse.json({ success: true, ...data });
  } catch (error) {
    logger.error('Failed to trigger Databricks job', {
      module: 'trigger-databricks-job',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

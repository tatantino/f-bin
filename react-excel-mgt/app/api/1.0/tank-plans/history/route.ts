import { NextRequest } from 'next/server';
import { TankPlanHistoryService } from './service';
import { CreateTankPlanHistory } from './models';
import { RequestUtils } from '@/app/api/_shared/utils/request-utils';
import { handleApiRequest } from '@/app/api/_shared/utils/response-utils';

// Define types for the frontend data structure
interface PlanDetailRow {
  plan_row_id: number;
  tank: string;
  RC: string;
  drain_date?: string;
  repair_date?: string;
  RTL_date?: string;
  TL_date?: string;
  GG_date?: string;
  remark_category?: string;
  remark?: string;
  [key: string]: any;
}

interface HistoryRequestData {
  planMasterId: number;
  newData: PlanDetailRow[];
  originalData: PlanDetailRow[];
  username: string;
}

export async function GET(request: NextRequest) {
  return handleApiRequest(async () => {
    const params = RequestUtils.extractPaginationParams(request);
    const searchParams = new URL(request.url).searchParams;

    // Extract search parameters in a more readable way
    const searchOptions = RequestUtils.extractSearchParams(searchParams, [
      'tank',
      'rc',
      'category',
      'startDate',
      'endDate',
    ]);

    const options = {
      ...params,
      ...searchOptions,
    };

    return await TankPlanHistoryService.getHistories(options);
  }, 'Failed to get histories');
}

export async function POST(request: NextRequest) {
  return handleApiRequest(async () => {
    const data = await request.json();

    if (!Array.isArray(data)) {
      throw new Error('Invalid request: expected an array of history records');
    }

    return await TankPlanHistoryService.createHistories(
      data as CreateTankPlanHistory[]
    );
  }, 'Failed to create history records');
}

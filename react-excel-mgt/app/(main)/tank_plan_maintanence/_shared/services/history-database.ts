import type {
  TransformedQueryResult,
  PlanHistoryRecord,
  TankPlanDetailData,
} from '../types';
import { ApiClient } from './api-client';

interface HistoryQueryParams {
  startDate?: string;
  endDate?: string;
  tank?: string;
  rc?: string;
  category?: string;
}

export const HistoryDatabaseService = {
  async getHistoryRecords(
    params: HistoryQueryParams
  ): Promise<TransformedQueryResult<PlanHistoryRecord[]>> {
    try {
      // Convert params to Record<string, string> and filter out undefined/all values
      const queryParams = Object.entries(params)
        .filter(([_, value]) => value !== undefined && value !== 'all')
        .reduce(
          (acc, [key, value]) => ({ ...acc, [key]: value }),
          {} as Record<string, string>
        );

      const data = await ApiClient.get<PlanHistoryRecord[]>(
        '/api/1.0/tank-plans/history',
        queryParams
      );

      return {
        success: true,
        data,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  },

  async saveHistoryRecords(
    planMasterId: number,
    newData: TankPlanDetailData[],
    originalData: TankPlanDetailData[],
    username: string
  ): Promise<TransformedQueryResult<void>> {
    try {
      // Process data to create history records
      const dateFields = [
        'drain_date',
        'repair_date',
        'RTL_date',
        'TL_date',
        'GG_date',
      ];

      const originalDataMap = new Map(
        originalData.map(row => [row.plan_row_id, row])
      );

      const historyRecords = newData
        .map(newRow => {
          const oldRow = originalDataMap.get(newRow.plan_row_id);
          if (!oldRow) return null;

          const hasChanges = dateFields.some(
            field => oldRow[field] !== newRow[field]
          );
          if (!hasChanges) return null;

          return {
            plan_master_id: planMasterId,
            tank: newRow.tank,
            RC: newRow.RC,
            drain_date_o: oldRow.drain_date,
            repair_date_o: oldRow.repair_date,
            RTL_date_o: oldRow.RTL_date,
            TL_date_o: oldRow.TL_date,
            GG_date_o: oldRow.GG_date,
            drain_date_n: newRow.drain_date,
            repair_date_n: newRow.repair_date,
            RTL_date_n: newRow.RTL_date,
            TL_date_n: newRow.TL_date,
            GG_date_n: newRow.GG_date,
            remark_category: newRow.remark_category || 'GENERAL',
            remark: newRow.remark || '',
            username: username,
          };
        })
        .filter(
          (record): record is NonNullable<typeof record> => record !== null
        );

      if (historyRecords.length === 0) {
        return { success: true };
      }

      await ApiClient.post('/api/1.0/tank-plans/history', historyRecords);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  },
};

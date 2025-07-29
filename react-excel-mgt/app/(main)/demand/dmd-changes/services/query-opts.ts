import { ENDPOINTS } from './endpoints';
import type { DateRange } from 'react-day-picker';
import type { DmdVersion } from '../types';
import { format } from 'date-fns';

// Format date range to keep only year, month, and day
const formatDateRange = (dateRange?: DateRange) => {
  if (!dateRange) return undefined;
  return {
    from: dateRange.from ? format(dateRange.from, 'yyyy-MM-dd') : undefined,
    to: dateRange.to ? format(dateRange.to, 'yyyy-MM-dd') : undefined,
  };
};

export const queryOpts = {
  versions: (dateRange?: DateRange) => ({
    queryKey: ['dmd-versions', formatDateRange(dateRange)],
    queryFn: async () => {
      const queryParams = dateRange
        ? `?dateRange=${JSON.stringify(formatDateRange(dateRange))}`
        : '';
      const response = await fetch(
        ENDPOINTS.DEMANDS.CHANGES.VERSIONS + queryParams
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch versions');
      }

      // Return data directly from the response
      return response.json();
    },
  }),
} as const;

'use client';

import { useState, useEffect } from 'react';
import { tankPlanHistoryApi } from '../api';
import { TankPlanHistory } from '../types';
import { TANKS, RC_VALUES, REMARK_CATEGORIES } from '../config/constants';
import { SelectField } from './common/SelectField';
import { JsonView } from './common/JsonView';

export function TankPlanHistoryList() {
  const [histories, setHistories] = useState<TankPlanHistory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({
    tank: '',
    rc: '',
    category: '',
    startDate: '',
    endDate: '',
  });
  const [requestParams, setRequestParams] = useState<any>(null);
  const [responseData, setResponseData] = useState<any>(null);

  const fetchHistories = async () => {
    try {
      setLoading(true);
      setError('');
      const params = new URLSearchParams();

      // Only add non-empty filter values
      Object.entries(filters).forEach(([key, value]) => {
        if (value) params.append(key, value);
      });

      // Store request parameters for display
      setRequestParams(Object.fromEntries(params.entries()));

      const response = await tankPlanHistoryApi.getHistories(params);
      setHistories(response || []);
      setResponseData(response);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Failed to fetch history records'
      );
      setHistories([]);
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchHistories();
  }, []);

  // Handle filter changes
  const handleFilterChange = (key: keyof typeof filters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  // Handle apply filters
  const handleApplyFilters = () => {
    fetchHistories();
  };

  // Reset filters
  const resetFilters = () => {
    setFilters({
      tank: '',
      rc: '',
      category: '',
      startDate: '',
      endDate: '',
    });
    // Fetch histories immediately after resetting filters
    setTimeout(() => fetchHistories(), 0);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Tank Plan History</h2>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-sm mb-1">Tank</label>
          <input
            type="text"
            value={filters.tank}
            onChange={e => handleFilterChange('tank', e.target.value)}
            className="border p-2 w-full rounded"
            placeholder="Filter by tank"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">RC</label>
          <input
            type="text"
            value={filters.rc}
            onChange={e => handleFilterChange('rc', e.target.value)}
            className="border p-2 w-full rounded"
            placeholder="Filter by RC"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Remark Category</label>
          <input
            type="text"
            value={filters.category}
            onChange={e => handleFilterChange('category', e.target.value)}
            className="border p-2 w-full rounded"
            placeholder="Filter by category"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Start Date</label>
          <input
            type="date"
            value={filters.startDate}
            onChange={e => handleFilterChange('startDate', e.target.value)}
            className="border p-2 w-full rounded"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">End Date</label>
          <input
            type="date"
            value={filters.endDate}
            onChange={e => handleFilterChange('endDate', e.target.value)}
            className="border p-2 w-full rounded"
          />
        </div>
      </div>

      <div className="mb-4 flex space-x-2">
        <button
          onClick={handleApplyFilters}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Apply Filters
        </button>
        <button
          onClick={resetFilters}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Reset Filters
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-center py-8">Loading history records...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">Plan Master ID</th>
                <th className="border p-2 text-left">Tank</th>
                <th className="border p-2 text-left">RC</th>
                <th className="border p-2 text-left">Remark Category</th>
                <th className="border p-2 text-left">Remark</th>
                <th className="border p-2 text-left">User</th>
                <th className="border p-2 text-left">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {!histories || histories.length === 0 ? (
                <tr>
                  <td className="border p-2 text-center" colSpan={7}>
                    No history records found.
                  </td>
                </tr>
              ) : (
                histories.map(history => (
                  <tr
                    key={history.plan_change_hist_id}
                    className="hover:bg-gray-50"
                  >
                    <td className="border p-2">{history.plan_master_id}</td>
                    <td className="border p-2">{history.tank}</td>
                    <td className="border p-2">{history.RC}</td>
                    <td className="border p-2">{history.remark_category}</td>
                    <td className="border p-2">{history.remark || '—'}</td>
                    <td className="border p-2">{history.username}</td>
                    <td className="border p-2">
                      {history.plan_change_hist_timestamp
                        ? new Date(
                            history.plan_change_hist_timestamp
                          ).toLocaleString()
                        : '—'}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* API Request/Response Display */}
      <div className="mt-8">
        <JsonView title="Request Parameters" data={requestParams} />
        <JsonView title="Response Data" data={responseData} />
      </div>
    </div>
  );
}

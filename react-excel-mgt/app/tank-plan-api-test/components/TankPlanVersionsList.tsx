'use client';

import { useState, useEffect } from 'react';
import { tankPlanVersionsApi } from '../api';
import { TankPlanMaster } from '../types';
import { PLAN_TYPES, PLAN_OFFICIALS } from '../config/constants';
import { SelectField } from './common/SelectField';
import { JsonView } from './common/JsonView';

interface TankPlanVersionsListProps {
  onSelectVersion: (id: string) => void;
}

export function TankPlanVersionsList({
  onSelectVersion,
}: TankPlanVersionsListProps) {
  const [versions, setVersions] = useState<TankPlanMaster[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({
    planType: '',
    planOfficial: '',
    startDate: '',
    endDate: '',
  });
  const [requestParams, setRequestParams] = useState<any>(null);
  const [responseData, setResponseData] = useState<any>(null);

  // Fetch versions based on current filters
  const fetchVersions = async () => {
    try {
      setLoading(true);
      setError('');
      const params = new URLSearchParams();

      // Only add non-empty filter values
      Object.entries(filters).forEach(([key, value]) => {
        if (value) params.append(key, value);
      });

      // Store request params for display
      setRequestParams(Object.fromEntries(params.entries()));

      const response = await tankPlanVersionsApi.getVersions(params);
      setVersions(response || []);
      setResponseData(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch versions');
      setVersions([]);
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchVersions();
  }, []);

  // Handle filter changes
  const handleFilterChange = (key: keyof typeof filters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  // Handle apply filters
  const handleApplyFilters = () => {
    fetchVersions();
  };

  // Delete version
  const handleDeleteVersion = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this version?'))
      return;

    try {
      setLoading(true);
      const response = await tankPlanVersionsApi.deleteVersion(id);
      setResponseData(response);
      fetchVersions();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete version');
    } finally {
      setLoading(false);
    }
  };

  // Reset filters
  const resetFilters = () => {
    setFilters({
      planType: '',
      planOfficial: '',
      startDate: '',
      endDate: '',
    });
    // Fetch versions immediately after resetting filters
    setTimeout(() => fetchVersions(), 0);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Tank Plan Versions</h2>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <SelectField
          label="Plan Type"
          value={filters.planType}
          onChange={value => handleFilterChange('planType', value)}
          options={PLAN_TYPES.map(type => ({ value: type, label: type }))}
          placeholder="All plan types"
        />

        <SelectField
          label="Plan Official"
          value={filters.planOfficial}
          onChange={value => handleFilterChange('planOfficial', value)}
          options={PLAN_OFFICIALS.map(official => ({
            value: official,
            label: official,
          }))}
          placeholder="All official statuses"
        />

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

      {/* Error Display */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {/* Loading State */}
      {loading ? (
        <div className="text-center py-8">Loading versions...</div>
      ) : (
        /* Versions Table */
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">ID</th>
                <th className="border p-2 text-left">Version</th>
                <th className="border p-2 text-left">Type</th>
                <th className="border p-2 text-left">Official</th>
                <th className="border p-2 text-left">Version No</th>
                <th className="border p-2 text-left">Created</th>
                <th className="border p-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {!versions || versions.length === 0 ? (
                <tr>
                  <td className="border p-2 text-center" colSpan={7}>
                    No versions found.
                  </td>
                </tr>
              ) : (
                versions.map(version => (
                  <tr key={version.plan_master_id} className="hover:bg-gray-50">
                    <td className="border p-2">{version.plan_master_id}</td>
                    <td className="border p-2">{version.plan_version}</td>
                    <td className="border p-2">{version.plan_type}</td>
                    <td className="border p-2">
                      {version.plan_official || '—'}
                    </td>
                    <td className="border p-2">{version.plan_version_no}</td>
                    <td className="border p-2">
                      {version.create_timestamp
                        ? new Date(version.create_timestamp).toLocaleString()
                        : '—'}
                    </td>
                    <td className="border p-2">
                      <button
                        onClick={() =>
                          version.plan_master_id &&
                          onSelectVersion(String(version.plan_master_id))
                        }
                        className="text-blue-600 hover:underline mr-2"
                      >
                        View
                      </button>
                      <button
                        onClick={() =>
                          version.plan_master_id &&
                          handleDeleteVersion(String(version.plan_master_id))
                        }
                        className="text-red-600 hover:underline"
                      >
                        Delete
                      </button>
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

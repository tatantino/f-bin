'use client';

import { useState } from 'react';
import { tankPlanHistoryApi, tankPlanVersionsApi } from '../api';
import type { CreateTankPlanHistory, TankPlanMaster } from '../types';
import {
  TANKS,
  RC_VALUES,
  REMARK_CATEGORIES,
  USER_NAMES,
  SAMPLE_TANK_PLAN_HISTORY,
} from '../config/constants';
import { SelectField } from './common/SelectField';
import { JsonView } from './common/JsonView';

interface CreateTankPlanHistoryProps {
  onSuccess: () => void;
}

export function CreateTankPlanHistory({
  onSuccess,
}: CreateTankPlanHistoryProps) {
  // Form state
  const [formData, setFormData] = useState<CreateTankPlanHistory>({
    plan_master_id: 0,
    tank: '',
    RC: '',
    drain_date_o: null,
    repair_date_o: null,
    RTL_date_o: null,
    TL_date_o: null,
    GG_date_o: null,
    drain_date_n: null,
    repair_date_n: null,
    RTL_date_n: null,
    TL_date_n: null,
    GG_date_n: null,
    remark_category: '',
    remark: '',
    username: 'Test User',
  });

  // History records array
  const [historyRecords, setHistoryRecords] = useState<CreateTankPlanHistory[]>(
    []
  );

  // UI state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [versions, setVersions] = useState<TankPlanMaster[]>([]);
  const [loadingVersions, setLoadingVersions] = useState(false);
  const [requestData, setRequestData] = useState<any>(null);
  const [responseData, setResponseData] = useState<any>(null);

  // Load available versions for selection
  const loadVersions = async () => {
    try {
      setLoadingVersions(true);
      const response = await tankPlanVersionsApi.getVersions();
      setVersions(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load versions');
    } finally {
      setLoadingVersions(false);
    }
  };

  // Load sample data
  const loadSampleData = () => {
    // Create a copy of sample data to avoid modifying the original
    const sampleData = { ...SAMPLE_TANK_PLAN_HISTORY };

    setFormData(sampleData);
  };

  // Handle form field changes
  const handleChange = (
    field: keyof CreateTankPlanHistory,
    value: string | number | null
  ) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Add current form data to history records array
  const handleAddRecord = () => {
    // Convert master ID to number
    const data: CreateTankPlanHistory = {
      ...formData,
      plan_master_id: Number(formData.plan_master_id),
    };

    setHistoryRecords(prev => [...prev, data]);

    // Reset form for next record
    setFormData({
      ...formData,
      tank: '',
      RC: '',
      drain_date_o: null,
      repair_date_o: null,
      RTL_date_o: null,
      TL_date_o: null,
      GG_date_o: null,
      drain_date_n: null,
      repair_date_n: null,
      RTL_date_n: null,
      TL_date_n: null,
      GG_date_n: null,
      remark_category: '',
      remark: '',
    });
  };

  // Remove record from array
  const handleRemoveRecord = (index: number) => {
    setHistoryRecords(prev => prev.filter((_, i) => i !== index));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (historyRecords.length === 0) {
      setError('Please add at least one history record');
      return;
    }

    try {
      setLoading(true);
      setError('');
      setSuccess('');

      setRequestData(historyRecords);
      const response = await tankPlanHistoryApi.createHistories(historyRecords);
      setResponseData(response);

      setSuccess(`Successfully created ${response.count} history records!`);
      setHistoryRecords([]);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Failed to create history records'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">
        Create Tank Plan History Records
      </h2>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {success}
        </div>
      )}

      <div className="mb-4 flex justify-end space-x-2">
        <button
          type="button"
          onClick={loadSampleData}
          className="bg-gray-500 text-white px-3 py-2 rounded hover:bg-gray-600 text-sm"
        >
          Load Sample Data
        </button>
      </div>

      <form onSubmit={e => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Plan Master ID */}
          <div>
            <label className="block text-sm mb-1">Plan Master ID*</label>
            <div className="flex">
              <input
                type="text"
                value={formData.plan_master_id || ''}
                onChange={e => handleChange('plan_master_id', e.target.value)}
                className="border p-2 flex-grow rounded-l"
                required
              />
              <button
                type="button"
                onClick={loadVersions}
                disabled={loadingVersions}
                className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
              >
                {loadingVersions ? '...' : 'Load'}
              </button>
            </div>
            {versions.length > 0 && (
              <select
                className="mt-2 border p-2 w-full rounded"
                onChange={e =>
                  handleChange('plan_master_id', Number(e.target.value))
                }
              >
                <option value="">Select a version</option>
                {versions.map(version => (
                  <option
                    key={version.plan_master_id}
                    value={version.plan_master_id}
                  >
                    {version.plan_version} (ID: {version.plan_master_id})
                  </option>
                ))}
              </select>
            )}
          </div>

          {/* Tank */}
          <SelectField
            label="Tank"
            value={formData.tank}
            onChange={value => handleChange('tank', value)}
            options={TANKS.map(tank => ({ value: tank, label: tank }))}
            required
            className="mt-0"
          />

          {/* RC */}
          <SelectField
            label="RC"
            value={formData.RC}
            onChange={value => handleChange('RC', value)}
            options={RC_VALUES.map(rc => ({ value: rc, label: rc }))}
            required
          />

          {/* Remark Category */}
          <SelectField
            label="Remark Category"
            value={formData.remark_category}
            onChange={value => handleChange('remark_category', value)}
            options={REMARK_CATEGORIES.map(category => ({
              value: category,
              label: category,
            }))}
            required
          />
        </div>

        {/* Dates Section */}
        <div className="mb-6 p-4 border rounded">
          <h3 className="text-lg font-semibold mb-2">Date Changes</h3>
          <p className="text-sm text-gray-600 mb-4">
            Enter original (old) and new dates to record the change.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {/* Drain Date */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">
                  Original Drain Date
                </label>
                <input
                  type="date"
                  value={formData.drain_date_o || ''}
                  onChange={e =>
                    handleChange(
                      'drain_date_o',
                      e.target.value ? e.target.value : null
                    )
                  }
                  className="border p-2 w-full rounded"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">New Drain Date</label>
                <input
                  type="date"
                  value={formData.drain_date_n || ''}
                  onChange={e =>
                    handleChange(
                      'drain_date_n',
                      e.target.value ? e.target.value : null
                    )
                  }
                  className="border p-2 w-full rounded"
                />
              </div>
            </div>

            {/* Repair Date */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">
                  Original Repair Date
                </label>
                <input
                  type="date"
                  value={formData.repair_date_o || ''}
                  onChange={e =>
                    handleChange(
                      'repair_date_o',
                      e.target.value ? e.target.value : null
                    )
                  }
                  className="border p-2 w-full rounded"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">New Repair Date</label>
                <input
                  type="date"
                  value={formData.repair_date_n || ''}
                  onChange={e =>
                    handleChange(
                      'repair_date_n',
                      e.target.value ? e.target.value : null
                    )
                  }
                  className="border p-2 w-full rounded"
                />
              </div>
            </div>

            {/* RTL Date */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Original RTL Date</label>
                <input
                  type="date"
                  value={formData.RTL_date_o || ''}
                  onChange={e =>
                    handleChange(
                      'RTL_date_o',
                      e.target.value ? e.target.value : null
                    )
                  }
                  className="border p-2 w-full rounded"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">New RTL Date</label>
                <input
                  type="date"
                  value={formData.RTL_date_n || ''}
                  onChange={e =>
                    handleChange(
                      'RTL_date_n',
                      e.target.value ? e.target.value : null
                    )
                  }
                  className="border p-2 w-full rounded"
                />
              </div>
            </div>

            {/* TL Date */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Original TL Date</label>
                <input
                  type="date"
                  value={formData.TL_date_o || ''}
                  onChange={e =>
                    handleChange(
                      'TL_date_o',
                      e.target.value ? e.target.value : null
                    )
                  }
                  className="border p-2 w-full rounded"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">New TL Date</label>
                <input
                  type="date"
                  value={formData.TL_date_n || ''}
                  onChange={e =>
                    handleChange(
                      'TL_date_n',
                      e.target.value ? e.target.value : null
                    )
                  }
                  className="border p-2 w-full rounded"
                />
              </div>
            </div>

            {/* GG Date */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Original GG Date</label>
                <input
                  type="date"
                  value={formData.GG_date_o || ''}
                  onChange={e =>
                    handleChange(
                      'GG_date_o',
                      e.target.value ? e.target.value : null
                    )
                  }
                  className="border p-2 w-full rounded"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">New GG Date</label>
                <input
                  type="date"
                  value={formData.GG_date_n || ''}
                  onChange={e =>
                    handleChange(
                      'GG_date_n',
                      e.target.value ? e.target.value : null
                    )
                  }
                  className="border p-2 w-full rounded"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Remark */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Remark</label>
          <textarea
            value={formData.remark || ''}
            onChange={e => handleChange('remark', e.target.value)}
            className="border p-2 w-full rounded"
            rows={2}
          />
        </div>

        {/* Username */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Username*</label>
          <input
            type="text"
            value={formData.username || ''}
            onChange={e => handleChange('username', e.target.value)}
            className="border p-2 w-full rounded"
            required
          />
        </div>

        <div className="flex justify-end mb-6">
          <button
            type="button"
            onClick={handleAddRecord}
            disabled={
              loading ||
              !formData.plan_master_id ||
              !formData.tank ||
              !formData.RC ||
              !formData.remark_category
            }
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
          >
            Add to Batch
          </button>
        </div>
      </form>

      {/* Records List */}
      {historyRecords.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">
            Records to Submit ({historyRecords.length})
          </h3>
          <div className="border rounded overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tank
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    RC
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {historyRecords.map((record, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {record.tank}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {record.RC}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {record.remark_category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <button
                        onClick={() => handleRemoveRecord(index)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          disabled={loading || historyRecords.length === 0}
          className="bg-green-600 text-white px-6 py-3 rounded text-lg font-medium hover:bg-green-700 disabled:bg-gray-400"
        >
          {loading ? 'Submitting...' : 'Submit Batch'}
        </button>
      </div>

      {/* Request/Response Data */}
      {requestData && (
        <div className="mt-8 border-t pt-6">
          <h3 className="text-lg font-semibold mb-2">Request Data</h3>
          <JsonView title="Request" data={requestData} />
        </div>
      )}

      {responseData && (
        <div className="mt-8 border-t pt-6">
          <h3 className="text-lg font-semibold mb-2">Response Data</h3>
          <JsonView title="Response" data={responseData} />
        </div>
      )}
    </div>
  );
}

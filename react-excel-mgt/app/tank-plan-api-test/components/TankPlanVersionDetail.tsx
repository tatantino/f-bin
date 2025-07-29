'use client';

import { useState, useEffect } from 'react';
import { tankPlanVersionsApi } from '../api';
import { TankPlanMaster, TankPlanDetail, UpdateTankPlanMaster } from '../types';
import {
  TANKS,
  ISO_VALUES,
  GLASS_TYPES,
  GEN_VALUES,
  RT_VALUES,
  RC_VALUES,
  PLATFORMS,
  DESIGN_VALUES,
  REMARK_CATEGORIES,
} from '../config/constants';
import { SelectField } from './common/SelectField';
import { JsonView } from './common/JsonView';

interface TankPlanVersionDetailProps {
  id: string;
  onBack: () => void;
}

export function TankPlanVersionDetail({
  id,
  onBack,
}: TankPlanVersionDetailProps) {
  // State
  const [master, setMaster] = useState<TankPlanMaster | null>(null);
  const [details, setDetails] = useState<TankPlanDetail[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [savingChanges, setSavingChanges] = useState(false);
  const [success, setSuccess] = useState('');
  const [requestData, setRequestData] = useState<any>(null);
  const [responseData, setResponseData] = useState<any>(null);

  // Fetch version data
  useEffect(() => {
    async function fetchVersionDetails() {
      try {
        setLoading(true);
        setError('');

        setRequestData({ id });
        const response = await tankPlanVersionsApi.getVersion(id);
        setResponseData(response);

        if (response && response.master) {
          setMaster(response.master);
          setDetails(response.details || []);
        } else {
          setError('Invalid response format from server');
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Failed to fetch version details'
        );
        setMaster(null);
        setDetails([]);
      } finally {
        setLoading(false);
      }
    }

    fetchVersionDetails();
  }, [id]);

  // Handle master changes
  const handleMasterChange = (
    key: keyof TankPlanMaster,
    value: string | number
  ) => {
    if (!master) return;
    setMaster({ ...master, [key]: value });
  };

  // Update detail row
  const handleDetailChange = (
    index: number,
    field: keyof TankPlanDetail,
    value: any
  ) => {
    if (!editMode) return;

    setDetails(prev => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        [field]: value,
      };
      return updated;
    });
  };

  // Save changes
  const handleSaveChanges = async () => {
    if (!master) return;

    try {
      setSavingChanges(true);
      setError('');

      // Prepare master data for update
      const masterUpdate: UpdateTankPlanMaster = {
        plan_version: master.plan_version,
        plan_type: master.plan_type,
        plan_official: master.plan_official,
        plan_version_no: Number(master.plan_version_no),
        plan_version_parent: master.plan_version_parent
          ? Number(master.plan_version_parent)
          : undefined,
        user_name: master.user_name,
      };

      // Prepare details data
      const detailsData = details.map((detail, index) => ({
        ...detail,
        plan_row_id: index + 1,
        tank_life: Number(detail.tank_life),
        cold_idle: Number(detail.cold_idle),
        repair_LT: Number(detail.repair_LT),
        RTL_LT: Number(detail.RTL_LT),
        TL_LT: Number(detail.TL_LT),
      }));

      const updatePayload = {
        master: masterUpdate,
        details: detailsData,
      };

      setRequestData(updatePayload);
      const response = await tankPlanVersionsApi.updateVersion(
        id,
        updatePayload
      );
      setResponseData(response);

      setSuccess('Changes saved successfully!');
      setEditMode(false);

      // Clear success message after delay
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save changes');
    } finally {
      setSavingChanges(false);
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading version details...</div>;
  }

  if (error) {
    return (
      <div>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
        <button
          onClick={onBack}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Back to Versions
        </button>
      </div>
    );
  }

  if (!master) {
    return (
      <div>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          Version not found
        </div>
        <button
          onClick={onBack}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Back to Versions
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">
          Version Details: {master.plan_version}
        </h2>
        <div className="space-x-2">
          {!editMode ? (
            <button
              onClick={() => setEditMode(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Edit
            </button>
          ) : (
            <button
              onClick={handleSaveChanges}
              disabled={savingChanges}
              className={`px-4 py-2 rounded ${
                savingChanges
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-green-500 hover:bg-green-600 text-white'
              }`}
            >
              {savingChanges ? 'Saving...' : 'Save Changes'}
            </button>
          )}
          <button
            onClick={onBack}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Back
          </button>
        </div>
      </div>

      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {success}
        </div>
      )}

      {/* Master Information */}
      <div className="mb-6 p-4 border rounded">
        <h3 className="text-lg font-semibold mb-4">Master Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium">Plan Version</label>
            {editMode ? (
              <input
                type="text"
                value={master.plan_version}
                onChange={e =>
                  handleMasterChange('plan_version', e.target.value)
                }
                className="border p-2 w-full rounded"
              />
            ) : (
              <p className="mt-1">{master.plan_version}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Plan Type</label>
            {editMode ? (
              <input
                type="text"
                value={master.plan_type}
                onChange={e => handleMasterChange('plan_type', e.target.value)}
                className="border p-2 w-full rounded"
              />
            ) : (
              <p className="mt-1">{master.plan_type}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Plan Official</label>
            {editMode ? (
              <input
                type="text"
                value={master.plan_official || ''}
                onChange={e =>
                  handleMasterChange('plan_official', e.target.value)
                }
                className="border p-2 w-full rounded"
              />
            ) : (
              <p className="mt-1">{master.plan_official || '—'}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Version No</label>
            {editMode ? (
              <input
                type="number"
                value={master.plan_version_no}
                onChange={e =>
                  handleMasterChange('plan_version_no', e.target.value)
                }
                className="border p-2 w-full rounded"
              />
            ) : (
              <p className="mt-1">{master.plan_version_no}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Created</label>
            <p className="mt-1">
              {master.create_timestamp
                ? new Date(master.create_timestamp).toLocaleString()
                : '—'}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium">User</label>
            <p className="mt-1">{master.user_name}</p>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">
          Details ({details.length})
        </h3>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">Row</th>
                <th className="border p-2 text-left">Tank</th>
                <th className="border p-2 text-left">ISO</th>
                <th className="border p-2 text-left">Glass Type</th>
                <th className="border p-2 text-left">RC</th>
                <th className="border p-2 text-left">Tank Life</th>
                <th className="border p-2 text-left">Drain Date</th>
                <th className="border p-2 text-left">Repair Date</th>
                <th className="border p-2 text-left">Category</th>
                <th className="border p-2 text-left">Remark</th>
              </tr>
            </thead>
            <tbody>
              {!details || details.length === 0 ? (
                <tr>
                  <td className="border p-2 text-center" colSpan={7}>
                    No details found.
                  </td>
                </tr>
              ) : (
                details.map((detail, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="border p-2">{detail.plan_row_id}</td>
                    <td className="border p-2">
                      {editMode ? (
                        <SelectField
                          label=""
                          value={detail.tank || ''}
                          onChange={value =>
                            handleDetailChange(index, 'tank', value)
                          }
                          options={TANKS.map(tank => ({
                            value: tank,
                            label: tank,
                          }))}
                          className="m-0"
                        />
                      ) : (
                        detail.tank
                      )}
                    </td>
                    <td className="border p-2">
                      {editMode ? (
                        <SelectField
                          label=""
                          value={detail.iso || ''}
                          onChange={value =>
                            handleDetailChange(index, 'iso', value)
                          }
                          options={ISO_VALUES.map(iso => ({
                            value: iso,
                            label: iso,
                          }))}
                          className="m-0"
                        />
                      ) : (
                        detail.iso
                      )}
                    </td>
                    <td className="border p-2">
                      {editMode ? (
                        <SelectField
                          label=""
                          value={detail.glass_type || ''}
                          onChange={value =>
                            handleDetailChange(index, 'glass_type', value)
                          }
                          options={GLASS_TYPES.map(type => ({
                            value: type,
                            label: type,
                          }))}
                          className="m-0"
                        />
                      ) : (
                        detail.glass_type
                      )}
                    </td>
                    <td className="border p-2">
                      {editMode ? (
                        <SelectField
                          label=""
                          value={detail.RC || ''}
                          onChange={value =>
                            handleDetailChange(index, 'RC', value)
                          }
                          options={RC_VALUES.map(rc => ({
                            value: rc,
                            label: rc,
                          }))}
                          className="m-0"
                        />
                      ) : (
                        detail.RC
                      )}
                    </td>
                    <td className="border p-2">
                      {editMode ? (
                        <input
                          type="number"
                          value={detail.tank_life}
                          onChange={e =>
                            handleDetailChange(
                              index,
                              'tank_life',
                              e.target.value
                            )
                          }
                          className="border p-1 w-full rounded"
                        />
                      ) : (
                        detail.tank_life
                      )}
                    </td>
                    <td className="border p-2">
                      {editMode ? (
                        <input
                          type="date"
                          value={detail.drain_date}
                          onChange={e =>
                            handleDetailChange(
                              index,
                              'drain_date',
                              e.target.value
                            )
                          }
                          className="border p-1 w-full rounded"
                        />
                      ) : (
                        detail.drain_date
                      )}
                    </td>
                    <td className="border p-2">
                      {editMode ? (
                        <input
                          type="date"
                          value={detail.repair_date}
                          onChange={e =>
                            handleDetailChange(
                              index,
                              'repair_date',
                              e.target.value
                            )
                          }
                          className="border p-1 w-full rounded"
                        />
                      ) : (
                        detail.repair_date
                      )}
                    </td>
                    <td className="border p-2">
                      {editMode ? (
                        <SelectField
                          label=""
                          value={detail.remark_category || ''}
                          onChange={value =>
                            handleDetailChange(index, 'remark_category', value)
                          }
                          options={REMARK_CATEGORIES.map(category => ({
                            value: category,
                            label: category,
                          }))}
                          className="m-0"
                        />
                      ) : (
                        detail.remark_category || '—'
                      )}
                    </td>
                    <td className="border p-2">
                      {editMode ? (
                        <input
                          type="text"
                          value={detail.remark || ''}
                          onChange={e =>
                            handleDetailChange(index, 'remark', e.target.value)
                          }
                          className="border p-1 w-full rounded"
                        />
                      ) : (
                        detail.remark || '—'
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Request and Response Data */}
      <div className="mt-6 p-4 border rounded">
        <h3 className="text-lg font-semibold mb-4">API Debug Information</h3>
        <JsonView title="Request Data" data={requestData} />
        <JsonView title="Response Data" data={responseData} />
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { tankPlanVersionsApi } from '../api';
import { CreateTankPlanMaster, TankPlanDetail } from '../types';
import {
  PLAN_TYPES,
  PLAN_OFFICIALS,
  USER_NAMES,
  TANKS,
  ISO_VALUES,
  GLASS_TYPES,
  GEN_VALUES,
  RT_VALUES,
  RC_VALUES,
  PLATFORMS,
  DESIGN_VALUES,
  REMARK_CATEGORIES,
  SAMPLE_TANK_PLAN_MASTER,
  SAMPLE_TANK_PLAN_DETAILS,
} from '../config/constants';
import { SelectField } from './common/SelectField';
import { JsonView } from './common/JsonView';

interface CreateTankPlanVersionProps {
  onSuccess: () => void;
}

export function CreateTankPlanVersion({
  onSuccess,
}: CreateTankPlanVersionProps) {
  // State for form data
  const [master, setMaster] = useState<CreateTankPlanMaster>({
    plan_version: '',
    plan_type: '',
    plan_official: '',
    plan_version_no: 1,
    plan_version_parent: undefined,
    user_name: 'Test User',
  });

  // State for details
  const [details, setDetails] = useState<TankPlanDetail[]>([
    createEmptyDetail(0),
  ]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [requestData, setRequestData] = useState<any>(null);
  const [responseData, setResponseData] = useState<any>(null);

  // Handle master form changes
  const handleMasterChange = (
    key: keyof CreateTankPlanMaster,
    value: string | number
  ) => {
    setMaster(prev => ({ ...prev, [key]: value }));
  };

  // Handle detail changes
  const handleDetailChange = (
    index: number,
    key: keyof TankPlanDetail,
    value: string | number
  ) => {
    setDetails(prev =>
      prev.map((detail, i) =>
        i === index ? { ...detail, [key]: value } : detail
      )
    );
  };

  // Add a new empty detail
  const addDetail = () => {
    setDetails(prev => [...prev, createEmptyDetail(prev.length)]);
  };

  // Remove a detail
  const removeDetail = (index: number) => {
    setDetails(prev => prev.filter((_, i) => i !== index));
  };

  // Load sample master data
  const loadSampleMaster = () => {
    setMaster({
      ...SAMPLE_TANK_PLAN_MASTER,
      plan_version: new Date().toISOString().split('T')[0], // Use today's date
      plan_version_parent: SAMPLE_TANK_PLAN_MASTER.plan_version_parent
        ? Number(SAMPLE_TANK_PLAN_MASTER.plan_version_parent)
        : undefined,
    });
  };

  // Load sample detail
  const loadSampleDetail = (index: number) => {
    const sampleDetail = SAMPLE_TANK_PLAN_DETAILS[0];

    setDetails(prev =>
      prev.map((detail, i) =>
        i === index ? { ...sampleDetail, plan_row_id: index + 1 } : detail
      )
    );
  };

  // Load all samples
  const loadAllSamples = () => {
    loadSampleMaster();
    setDetails([{ ...SAMPLE_TANK_PLAN_DETAILS[0], plan_row_id: 1 }]);
  };

  // Submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError('');
      setSuccess('');

      // Convert numeric fields for master
      const masterData: CreateTankPlanMaster = {
        ...master,
        plan_version_no: Number(master.plan_version_no),
        plan_version_parent: master.plan_version_parent
          ? Number(master.plan_version_parent)
          : undefined,
      };

      // Convert numeric fields for details
      const detailsData = details.map((detail, index) => ({
        ...detail,
        plan_row_id: index + 1,
        tank_life: Number(detail.tank_life),
        cold_idle: Number(detail.cold_idle),
        repair_LT: Number(detail.repair_LT),
        RTL_LT: Number(detail.RTL_LT),
        TL_LT: Number(detail.TL_LT),
      }));

      const requestPayload = {
        master: masterData,
        details: detailsData,
      };

      setRequestData(requestPayload);

      const response = await tankPlanVersionsApi.createVersion(requestPayload);

      setResponseData(response);
      setSuccess('Version created successfully!');
      // Don't redirect - allow user to view request/response data
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create version');
    } finally {
      setLoading(false);
    }
  };

  // Create an empty detail object
  function createEmptyDetail(rowId: number): TankPlanDetail {
    return {
      plan_detail_id: 0,
      plan_master_id: 0,
      plan_row_id: rowId + 1,
      tank: '',
      iso: '',
      glass_type: '',
      gen: '',
      RT: '',
      RC: '',
      platform: '',
      design_asis: '',
      tank_life: 0,
      last_tank_light_date: '',
      drain_date: '',
      repair_date: '',
      RTL_date: '',
      TL_date: '',
      GG_date: '',
      cold_idle: 0,
      repair_LT: 0,
      RTL_LT: 0,
      TL_LT: 0,
      remark_category: '',
      remark: '',
      comment: '',
    };
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Create New Tank Plan Version</h2>

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
          onClick={loadAllSamples}
          className="bg-gray-500 text-white px-3 py-2 rounded hover:bg-gray-600 text-sm"
        >
          Load All Sample Data
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Master Data */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">Master Information</h3>
            <button
              type="button"
              onClick={loadSampleMaster}
              className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 text-sm"
            >
              Load Sample
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm mb-1">Plan Version*</label>
              <input
                type="text"
                value={master.plan_version}
                onChange={e =>
                  handleMasterChange('plan_version', e.target.value)
                }
                className="border p-2 w-full rounded"
                required
              />
            </div>

            <SelectField
              label="Plan Type"
              value={master.plan_type}
              onChange={value => handleMasterChange('plan_type', value)}
              options={PLAN_TYPES.map(type => ({ value: type, label: type }))}
              required
            />

            <SelectField
              label="Plan Official"
              value={master.plan_official || ''}
              onChange={value => handleMasterChange('plan_official', value)}
              options={PLAN_OFFICIALS.map(official => ({
                value: official,
                label: official,
              }))}
              placeholder="Select official status"
            />

            <div>
              <label className="block text-sm mb-1">Version No*</label>
              <input
                type="number"
                value={master.plan_version_no}
                onChange={e =>
                  handleMasterChange('plan_version_no', e.target.value)
                }
                className="border p-2 w-full rounded"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Parent Version</label>
              <input
                type="number"
                value={master.plan_version_parent || ''}
                onChange={e =>
                  handleMasterChange('plan_version_parent', e.target.value)
                }
                className="border p-2 w-full rounded"
              />
            </div>

            <SelectField
              label="User Name"
              value={master.user_name}
              onChange={value => handleMasterChange('user_name', value)}
              options={USER_NAMES.map(name => ({ value: name, label: name }))}
              required
            />
          </div>
        </div>

        {/* Details */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">Details</h3>
            <button
              type="button"
              onClick={addDetail}
              className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
            >
              Add Row
            </button>
          </div>

          {details.map((detail, index) => (
            <div key={index} className="border p-4 mb-4 rounded">
              <div className="flex justify-between mb-2">
                <h4 className="font-medium">Detail #{index + 1}</h4>
                <div className="space-x-2">
                  <button
                    type="button"
                    onClick={() => loadSampleDetail(index)}
                    className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 text-sm"
                  >
                    Load Sample
                  </button>
                  {details.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeDetail(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <SelectField
                  label="Tank"
                  value={detail.tank}
                  onChange={value => handleDetailChange(index, 'tank', value)}
                  options={TANKS.map(tank => ({ value: tank, label: tank }))}
                  required
                />

                <SelectField
                  label="ISO"
                  value={detail.iso}
                  onChange={value => handleDetailChange(index, 'iso', value)}
                  options={ISO_VALUES.map(iso => ({ value: iso, label: iso }))}
                />

                <SelectField
                  label="Glass Type"
                  value={detail.glass_type}
                  onChange={value =>
                    handleDetailChange(index, 'glass_type', value)
                  }
                  options={GLASS_TYPES.map(type => ({
                    value: type,
                    label: type,
                  }))}
                />

                <SelectField
                  label="GEN"
                  value={detail.gen}
                  onChange={value => handleDetailChange(index, 'gen', value)}
                  options={GEN_VALUES.map(gen => ({ value: gen, label: gen }))}
                />

                <SelectField
                  label="RT"
                  value={detail.RT}
                  onChange={value => handleDetailChange(index, 'RT', value)}
                  options={RT_VALUES.map(rt => ({ value: rt, label: rt }))}
                />

                <SelectField
                  label="RC"
                  value={detail.RC}
                  onChange={value => handleDetailChange(index, 'RC', value)}
                  options={RC_VALUES.map(rc => ({ value: rc, label: rc }))}
                />

                <SelectField
                  label="Platform"
                  value={detail.platform}
                  onChange={value =>
                    handleDetailChange(index, 'platform', value)
                  }
                  options={PLATFORMS.map(platform => ({
                    value: platform,
                    label: platform,
                  }))}
                />

                <SelectField
                  label="Design ASIS"
                  value={detail.design_asis}
                  onChange={value =>
                    handleDetailChange(index, 'design_asis', value)
                  }
                  options={DESIGN_VALUES.map(design => ({
                    value: design,
                    label: design,
                  }))}
                />

                <div>
                  <label className="block text-sm mb-1">Tank Life</label>
                  <input
                    type="number"
                    value={detail.tank_life}
                    onChange={e =>
                      handleDetailChange(index, 'tank_life', e.target.value)
                    }
                    className="border p-2 w-full rounded"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">
                    Last Tank Light Date
                  </label>
                  <input
                    type="date"
                    value={detail.last_tank_light_date}
                    onChange={e =>
                      handleDetailChange(
                        index,
                        'last_tank_light_date',
                        e.target.value
                      )
                    }
                    className="border p-2 w-full rounded"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">Drain Date</label>
                  <input
                    type="date"
                    value={detail.drain_date}
                    onChange={e =>
                      handleDetailChange(index, 'drain_date', e.target.value)
                    }
                    className="border p-2 w-full rounded"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">Repair Date</label>
                  <input
                    type="date"
                    value={detail.repair_date}
                    onChange={e =>
                      handleDetailChange(index, 'repair_date', e.target.value)
                    }
                    className="border p-2 w-full rounded"
                  />
                </div>

                <SelectField
                  label="Remark Category"
                  value={detail.remark_category}
                  onChange={value =>
                    handleDetailChange(index, 'remark_category', value)
                  }
                  options={REMARK_CATEGORIES.map(category => ({
                    value: category,
                    label: category,
                  }))}
                />

                <div>
                  <label className="block text-sm mb-1">Remark</label>
                  <input
                    type="text"
                    value={detail.remark}
                    onChange={e =>
                      handleDetailChange(index, 'remark', e.target.value)
                    }
                    className="border p-2 w-full rounded"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <button
            onClick={() => removeDetail(details.length - 1)}
            disabled={details.length <= 1}
            className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 text-sm disabled:bg-red-300 disabled:cursor-not-allowed"
          >
            Remove Last Row
          </button>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            disabled={loading}
            className={`px-4 py-3 rounded ${
              loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            {loading ? 'Creating Version...' : 'Create Version'}
          </button>
        </div>
      </form>

      {/* API Request/Response Display */}
      {(requestData || responseData) && (
        <div className="mt-8">
          <JsonView title="Request Data" data={requestData} expanded={false} />
          <JsonView title="Response Data" data={responseData} expanded={true} />
        </div>
      )}
    </div>
  );
}

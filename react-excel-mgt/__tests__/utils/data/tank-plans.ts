/**
 * Tank plan test data
 * Provides mock data for tank plan related tests
 */

export const tankPlanTestData = {
  // Master record
  master: {
    plan_master_id: '1',
    plan_version: 'VERSION-001',
    plan_type: 'Type 1',
    plan_official: 'Y',
    plan_version_no: 1,
    user_name: 'Test User',
    create_timestamp: '2024-01-01T00:00:00Z',
    update_timestamp: '2024-01-01T00:00:00Z',
  },

  // Detail record
  detail: {
    plan_detail_id: 1,
    plan_master_id: 1,
    plan_row_id: 1,
    tank: 'TANK-001',
    iso: 'ISO-001',
    glass_type: 'Type A',
    remark: 'Test Remark',
    comment: 'Test Comment',
  },

  // Create request
  createRequest: {
    master: {
      plan_version: 'VERSION-002',
      plan_type: 'Type 2',
      plan_version_no: 2,
      user_name: 'Test User',
    },
    details: [
      {
        plan_row_id: 1,
        tank: 'TANK-002',
        iso: 'ISO-002',
        glass_type: 'Type B',
        remark: 'New Remark',
        comment: 'New Comment',
      },
    ],
  },

  // Update request
  updateRequest: {
    master: {
      plan_version: 'VERSION-001-UPDATED',
      plan_remark: 'Updated Remark',
    },
    details: [
      {
        plan_detail_id: 1,
        tank: 'TANK-001-UPDATED',
        comment: 'Updated Comment',
      },
    ],
  },

  // Helper methods
  emptyDetailsRequest: (master: any) => ({
    master,
    details: [],
  }),

  getVersionData: () => ({
    master: tankPlanTestData.master,
    details: [tankPlanTestData.detail],
  }),
};

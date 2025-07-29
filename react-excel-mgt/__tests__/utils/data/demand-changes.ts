/**
 * Demand change test data
 * Provides mock data for demand change related tests
 */

export const demandChangeTestData = {
  // Master record
  master: {
    dmd_change_master_id: '123',
    dmd_sp_gb_name: 'TestVersion',
    username: 'testuser',
    dmd_change_name: 'Test Change',
    dmd_change_unit: 'Unit',
    dmd_remark: 'Test Remark',
    date_YYYYQQs: ['2024Q1', '2024Q2'],
    create_timestamp: '2024-01-01T00:00:00Z',
    update_timestamp: '2024-01-01T00:00:00Z',
  },

  // Detail record
  detail: {
    dmd_change_detail_id: '456',
    dmd_change_master_id: '123',
    business_unit: 'BU1',
    region: 'Region1',
    gen_group: 'GenGroup1',
    gen_size: 'Size1',
    composition_group: 'CompGroup1',
    composition: 'Comp1',
    dmd_value: 100,
  },

  // Create request
  createRequest: {
    master: {
      dmd_sp_gb_name: 'TestVersion',
      username: 'testuser',
      dmd_change_name: 'New Change',
      dmd_change_unit: 'Unit',
      dmd_remark: 'Test Remark',
      date_YYYYQQs: ['2024Q1', '2024Q2'],
    },
    details: [
      {
        business_unit: 'BU1',
        region: 'Region1',
        gen_group: 'GenGroup1',
        gen_size: 'Size1',
        composition_group: 'CompGroup1',
        composition: 'Comp1',
        dmd_value: 100,
      },
    ],
  },

  // Update request
  updateRequest: {
    master: {
      dmd_change_name: 'Updated Change',
      dmd_remark: 'Updated Remark',
    },
    details: [
      {
        dmd_change_detail_id: '456',
        dmd_value: 200,
      },
    ],
  },

  // Helper methods
  emptyDetailsRequest: (master: any) => ({
    master,
    details: [],
  }),

  getVersionData: () => ({
    master: demandChangeTestData.master,
    details: [demandChangeTestData.detail],
  }),
};

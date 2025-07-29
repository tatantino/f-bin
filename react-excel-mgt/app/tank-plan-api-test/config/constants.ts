// Common constants for tank plan API testing

// Plan types from test_master_data.sql
export const PLAN_TYPES = ['Weekly', 'Long-term'];

// Plan official values from test_master_data.sql
export const PLAN_OFFICIALS = ['GB', '18MP'];

// Tank values from test_app_tank.sql
export const TANKS = [
  'T01',
  'T02',
  'T03',
  'T04',
  'T05',
  'T06',
  'T07',
  'T08',
  'T09',
  'T10',
];

// ISO values from test_app_tank.sql
export const ISO_VALUES = ['ISO1', 'ISO2', 'ISO3', 'ISO4'];

// Platform values from test_app_tank.sql
export const PLATFORMS = ['Platform A', 'Platform B', 'Platform C'];

// Glass types from test_detail_data.sql
export const GLASS_TYPES = ['Type A', 'Type B', 'Type C', 'Type D'];

// Gen values from test_detail_data.sql
export const GEN_VALUES = ['G8.5', 'G8.6', 'G10.5', 'G11'];

// RT values from test_detail_data.sql
export const RT_VALUES = ['RT2', 'RT3'];

// RC values from test_detail_data.sql
export const RC_VALUES = ['RC1', 'RC2', 'RC3'];

// Design values from test_detail_data.sql
export const DESIGN_VALUES = ['Design 2', 'Design 3', 'Design 4', 'Design 5'];

// Remark categories from test_detail_data.sql and test_change_history.sql
export const REMARK_CATEGORIES = [
  'Schedule',
  'Tanks issue',
  'Inventory',
  'Lead time',
  'Resource',
  'Other',
  'Cost',
];

// User names from test_master_data.sql
export const USER_NAMES = [
  'Alice',
  'Bob',
  'Sarah',
  'Kate',
  'Emma',
  'Tom',
  'David',
  'Mike',
  'John',
];

// Sample data for quick testing
export const SAMPLE_TANK_PLAN_MASTER = {
  plan_version: new Date().toISOString().split('T')[0], // Today's date
  plan_type: 'Weekly',
  plan_official: '',
  plan_version_no: 1,
  plan_version_parent: '',
  user_name: 'Test User',
};

export const SAMPLE_TANK_PLAN_DETAILS = [
  {
    plan_row_id: 1,
    tank: 'T01',
    iso: 'ISO1',
    glass_type: 'Type A',
    gen: 'G10.5',
    RT: 'RT3',
    RC: 'RC3',
    platform: 'Platform A',
    design_asis: 'Design 5',
    tank_life: 3.17,
    last_tank_light_date: '2023-11-04',
    drain_date: '2024-05-02',
    repair_date: '2024-05-07',
    RTL_date: '2024-05-31',
    TL_date: '2024-06-11',
    GG_date: '2024-06-17',
    cold_idle: 5,
    repair_LT: 24,
    RTL_LT: 11,
    TL_LT: 6,
    remark_category: 'Other',
    remark: 'Test remark',
    comment: 'Test comment',
  },
];

export const SAMPLE_TANK_PLAN_HISTORY = {
  plan_master_id: 1,
  tank: 'T05',
  RC: 'RC2',
  drain_date_o: '2024-02-29',
  repair_date_o: null,
  RTL_date_o: '2024-04-20',
  TL_date_o: '2024-05-16',
  GG_date_o: '2024-06-16',
  drain_date_n: '2024-02-29',
  repair_date_n: null,
  RTL_date_n: '2024-04-20',
  TL_date_n: '2024-05-18',
  GG_date_n: null,
  remark_category: 'Lead time',
  remark: 'Delivery time adjustment',
  username: 'Test User',
};

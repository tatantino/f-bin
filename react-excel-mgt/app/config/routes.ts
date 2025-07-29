export const TANK_PLAN_PATH = '/tank_plan_maintanence';
export const DEMAND_PATH = '/demand';

export const ROUTES = {
  VERSION_LIST: `${TANK_PLAN_PATH}/version_list`,
  HISTORY: `${TANK_PLAN_PATH}/change_history`,
  PLAN_DETAILS: `${TANK_PLAN_PATH}/plan_details`,
  WEEKLY: `${TANK_PLAN_PATH}/weekly`,
  LONG_TERM: `${TANK_PLAN_PATH}/long_term`,
  TANK_DETAILS: `${TANK_PLAN_PATH}/tank_details`,
  COMPOSITION_OVERRIDE: `${TANK_PLAN_PATH}/composition-override`,
  DMD_CHANGE_CREATE: `${DEMAND_PATH}/dmd-change-create`,
  DMD_CHANGE_EDIT: `${DEMAND_PATH}/dmd-change-edit`,
  DMD_CHANGE_LIST: `${DEMAND_PATH}/dmd-change-list`,
  DMD_CHANGE_PROPOSAL: `${DEMAND_PATH}/dmd-change-proposal`,
  TANK_PROPOSAL: `${DEMAND_PATH}/dmd-change-result`,
} as const;

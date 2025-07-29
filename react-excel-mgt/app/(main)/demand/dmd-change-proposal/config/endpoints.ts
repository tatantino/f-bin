/**
 * API endpoints for demand change proposal
 */
export const ENDPOINTS = {
  DEMAND_CHANGE: (id: string) => `/api/1.0/demands/changes/versions/${id}`,

  GEN_GROUP_ISOPIPE_MAPPINGS:
    '/api/1.0/demands/mappings/gen-group-isopipe-mappings',
} as const;

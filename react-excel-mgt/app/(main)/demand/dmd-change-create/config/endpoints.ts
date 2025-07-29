/**
 * API endpoints for demand change creation
 */
export const ENDPOINTS = {
  DEMANDS: {
    SUMMARIES: {
      SP_GB_VERSIONS: '/api/1.0/demands/summaries/sp-gb-versions',
    },
    GEN_GROUP_ISOPIPE_MAPPINGS:
      '/api/1.0/demands/mappings/gen-group-isopipe-mappings',
    COMPOSITION_GROUP_MAPPINGS:
      '/api/1.0/demands/mappings/composition-group-mappings',
    CHANGES: {
      VERSIONS: '/api/1.0/demands/changes/versions',
      VERSION: (id: string) => `/api/1.0/demands/changes/versions/${id}`,
    },
  },
} as const;

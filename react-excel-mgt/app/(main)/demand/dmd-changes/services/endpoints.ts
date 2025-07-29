/**
 * API endpoints for demand change list
 * Contains all endpoints used in this module
 */
export const ENDPOINTS = {
  DEMANDS: {
    CHANGES: {
      VERSIONS: '/api/1.0/demands/changes/versions',
      VERSION: (id: string) => `/api/1.0/demands/changes/versions/${id}`,
    },
  },
} as const;

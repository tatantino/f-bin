/**
 * API endpoints for testing
 * Centralized definitions of all API endpoints used in tests
 */

export const apiEndpoints = {
  tankPlans: {
    versions: 'http://localhost:3000/api/1.0/tank-plans/versions',
    version: (id: string) =>
      `http://localhost:3000/api/1.0/tank-plans/versions/${id}`,
  },
  demands: {
    changes: {
      versions: 'http://localhost:3000/api/1.0/demands/changes/versions',
      version: (id: string) =>
        `http://localhost:3000/api/1.0/demands/changes/versions/${id}`,
    },
    summaries: {
      spGbVersions:
        'http://localhost:3000/api/1.0/demands/summaries/sp-gb-versions',
    },
    mappings: {
      compositionGroups:
        'http://localhost:3000/api/1.0/demands/mappings/composition-group-mappings',
      genGroups:
        'http://localhost:3000/api/1.0/demands/mappings/gen-group-isopipe-mappings',
    },
  },
};

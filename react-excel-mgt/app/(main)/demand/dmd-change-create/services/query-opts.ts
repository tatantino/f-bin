import { ENDPOINTS } from '../config/endpoints';
import type { SpGbVersion } from '@/app/api/1.0/demands/summaries/sp-gb-versions/models';
import type { GenGroupIsopipeMappings } from '@/app/api/1.0/demands/mappings/gen-group-isopipe-mappings/models';
import type { CompositionGroupMappings } from '@/app/api/1.0/demands/mappings/composition-group-mappings/models';

export const queryOpts = {
  spGbVersions: {
    queryKey: ['sp-gb-versions'],
    queryFn: () =>
      fetch(ENDPOINTS.DEMANDS.SUMMARIES.SP_GB_VERSIONS).then(res =>
        res.json()
      ) as Promise<SpGbVersion[]>,
    staleTime: 1000 * 60 * 5, //  5 minutes
    gcTime: 1000 * 60 * 60, // 1 hour
  },

  genGroups: {
    queryKey: ['gen-groups'],
    queryFn: () =>
      fetch(ENDPOINTS.DEMANDS.GEN_GROUP_ISOPIPE_MAPPINGS).then(res =>
        res.json()
      ) as Promise<GenGroupIsopipeMappings[]>,
    staleTime: 1000 * 60 * 60, // 1 hour
    gcTime: 1000 * 60 * 60, // 1 hour
  },

  compositionGroups: {
    queryKey: ['composition-groups'],
    queryFn: () =>
      fetch(ENDPOINTS.DEMANDS.COMPOSITION_GROUP_MAPPINGS).then(res =>
        res.json()
      ) as Promise<CompositionGroupMappings[]>,
    staleTime: 1000 * 60 * 60, // 1 hour
    gcTime: 1000 * 60 * 60, // 1 hour
  },
} as const;

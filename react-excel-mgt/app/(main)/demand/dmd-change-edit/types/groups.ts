export interface CompositionGroup {
  composition_group: string;
  compositions: string[];
}

export interface GenGroup {
  gen_group: string;
  gens: string[];
}

export interface GroupData<T> {
  loading: boolean;
  error: string | null;
  data: T[];
}

export interface FilterOption<T = string> {
  value: T;
  label: string;
}

export interface FilterOptions {
  type?: FilterOption[];
  tag?: FilterOption[];
  tank?: FilterOption[];
  rc?: FilterOption[];
  category?: FilterOption[];
  unit?: FilterOption[];
}

export interface FilterChangeHandlers {
  type?: (value: string) => void;
  tag?: (value: string) => void;
  tank?: (value: string) => void;
  rc?: (value: string) => void;
  category?: (value: string) => void;
  unit?: (value: string) => void;
}

export interface SelectedFilters {
  type?: string;
  tag?: string;
  tank?: string;
  rc?: string;
  category?: string;
  unit?: string;
}

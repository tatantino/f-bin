import type { FilterOption } from '../components/data-list-card';
import type { PlanType } from '../types';

export const planTypeOptions: FilterOption<PlanType | 'all'>[] = [
  { value: 'Long-term', label: 'Long-term' },
  { value: 'Weekly', label: 'Weekly' },
];

export const planTagOptions: FilterOption<string>[] = [
  { value: 'GB', label: 'GB' },
  { value: '18MP', label: '18MP' },
];

/**
 * Generation group with associated generations and isopipe mappings
 */
export interface GenGroupIsopipeMappings {
  /** Generation group name */
  gen_group: string;
  /** List of generation sizes in this group */
  gens: string[];
  /** Isopipe mapping list with sizes and allocations */
  isopipe_mappings: Array<{
    size: string;
    allocation: number;
  }>;
}

/**
 * Database query result row for generation groups
 */
export interface GenGroupQueryRow {
  gen_group: string;
  gen: string;
  isopipe_mapping_1st: string | null;
  allocation_1st: number | null;
  isopipe_mapping_2nd: string | null;
  allocation_2nd: number | null;
  isopipe_mapping_3rd: string | null;
  allocation_3rd: number | null;
  isopipe_mapping_4th: string | null;
  allocation_4th: number | null;
}

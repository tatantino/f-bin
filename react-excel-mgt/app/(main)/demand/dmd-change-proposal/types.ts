/**
 * Type definitions entry file
 * Centralizes type exports for the module
 */

// Import API model types
import type { DemandChangeData } from '@/app/api/1.0/demands/changes/versions/models/dmd-change';
import type { GenGroupIsopipeMappings } from '@/app/api/1.0/demands/mappings/gen-group-isopipe-mappings/models';

// Re-export shared types for use throughout the module
export type { DemandChangeData };
export type { GenGroupIsopipeMappings };

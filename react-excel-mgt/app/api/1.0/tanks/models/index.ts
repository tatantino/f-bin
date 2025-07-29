/**
 * Tank interface
 * Represents a tank record
 */
export interface Tank {
  id?: number | string;
  tank: string;
  BU: string;
  region: string;
  region_seq: number | string;
  location: string;
  iso: string;
  platform: string;
  metal_shop: string;
  create_timestamp?: string;
  update_timestamp?: string;
}

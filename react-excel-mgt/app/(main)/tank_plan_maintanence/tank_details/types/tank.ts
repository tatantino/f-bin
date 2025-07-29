export interface TankInfo {
  id: number;
  tank: string;
  BU: string;
  region: string;
  region_seq: number;
  location: string;
  iso: string;
  platform: string;
  metal_shop: string;
}

export interface BatchUpdateResponse {
  affectedRows: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  meta?: Record<string, unknown>;
}

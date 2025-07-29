/**
 * SP-GB version with associated quarters
 */
export interface SpGbVersion {
  sp_gb_version: string;
  sp_version: string;
  gb_version: string;
  date_YYYYQQs: string[];
}

/**
 * Database query result record
 */
export interface VersionRecord {
  sp_gb_version: string;
  sp_version: string;
  gb_version: string;
  date_YYYYQQ: string;
}

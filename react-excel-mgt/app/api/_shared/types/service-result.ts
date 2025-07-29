export interface ServiceResult<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  meta?: { total: number };
  affectedRows?: number;
}

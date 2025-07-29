export interface QueryResult<T> {
  success: boolean;
  data?: T[];
  error?: string;
  meta?: {
    total: number;
    columns?: string[];
  };
}

export interface ExecuteResult {
  success: boolean;
  error?: string;
  affectedRows?: number;
}

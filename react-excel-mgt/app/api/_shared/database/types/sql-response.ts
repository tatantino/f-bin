import { Expose, Type } from 'class-transformer';

export enum SQLExecutionState {
  SUCCEEDED = 'SUCCEEDED',
  FAILED = 'FAILED',
  PENDING = 'PENDING',
  RUNNING = 'RUNNING',
}

export enum SQLFormat {
  ARROW_STREAM = 'ARROW_STREAM',
  JSON_ARRAY = 'JSON_ARRAY',
  CSV = 'CSV',
}

export class SQLColumn {
  @Expose()
  name!: string;

  @Expose()
  position!: number;

  @Expose()
  type_name!: string;

  @Expose()
  type_text!: string;
}

export class SQLSchema {
  @Expose()
  column_count!: number;

  @Expose()
  @Type(() => SQLColumn)
  columns!: SQLColumn[];
}

export class SQLManifest {
  @Expose()
  format!: SQLFormat;

  @Expose()
  @Type(() => SQLSchema)
  schema!: SQLSchema;

  @Expose()
  total_chunk_count?: number;

  @Expose()
  total_row_count?: number;

  @Expose()
  total_byte_count?: number;
}

export class SQLError {
  @Expose()
  error_code!: string;

  @Expose()
  message!: string;
}

export class SQLExecutionStatus {
  @Expose()
  state!: SQLExecutionState;

  @Expose()
  @Type(() => SQLError)
  error?: SQLError;
}

export class SQLResult {
  @Expose()
  chunk_index?: number;

  @Expose()
  row_offset?: number;

  @Expose()
  row_count?: number;

  @Expose()
  data_array?: unknown[][];
}

export class SQLStatementResponse {
  @Expose()
  statement_id!: string;

  @Expose()
  @Type(() => SQLExecutionStatus)
  status!: SQLExecutionStatus;

  @Expose()
  @Type(() => SQLManifest)
  manifest?: SQLManifest;

  @Expose()
  @Type(() => SQLResult)
  result?: SQLResult;
}

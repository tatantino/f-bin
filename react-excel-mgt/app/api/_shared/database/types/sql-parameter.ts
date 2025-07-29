import { IsString, IsEnum } from 'class-validator';
import { Expose } from 'class-transformer';

export const SQL_PARAMETER_TYPES = [
  'BOOLEAN',
  'BIGINT',
  'DOUBLE',
  'STRING',
  'DATE',
  'TIMESTAMP',
  'NULL',
] as const;

export type SQLParameterType = (typeof SQL_PARAMETER_TYPES)[number];

export class SQLParameter {
  @Expose()
  @IsString()
  name!: string;

  @Expose()
  @IsString()
  value!: string;

  @Expose()
  @IsEnum(SQL_PARAMETER_TYPES)
  type!: SQLParameterType;
}

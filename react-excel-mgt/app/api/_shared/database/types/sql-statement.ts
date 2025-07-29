import {
  IsString,
  IsOptional,
  IsArray,
  ValidateNested,
  IsEnum,
} from 'class-validator';
import { Type, Expose } from 'class-transformer';
import { SQLParameter } from './sql-parameter';

export enum SQLWaitTimeoutAction {
  CONTINUE = 'CONTINUE',
  CANCEL = 'CANCEL',
}

export class SQLStatementRequest {
  @Expose()
  @IsString()
  warehouse_id!: string;

  @Expose()
  @IsString()
  statement!: string;

  @Expose()
  @IsOptional()
  @IsString()
  wait_timeout?: string;

  @Expose()
  @IsOptional()
  @IsEnum(SQLWaitTimeoutAction)
  on_wait_timeout?: SQLWaitTimeoutAction;

  @Expose()
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SQLParameter)
  parameters?: SQLParameter[];
}

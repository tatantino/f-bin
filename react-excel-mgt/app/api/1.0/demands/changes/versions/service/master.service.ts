import { DatabaseService } from '@/app/api/_shared/database';
import { TableUtils, DataLayer } from '@/app/api/_shared/database/table-utils';
import {
  withErrorHandling,
  buildWhereClause,
  SqlFieldCondition,
} from '@/app/api/_shared/utils/service-utils';
import { DmdChangeMaster, CreateDmdChangeMaster } from '../models/dmd-change';
import type {
  SQLParameter,
  SQLParameterType,
} from '@/app/api/_shared/database/types';

/**
 * Query options for demand change versions
 */
export interface QueryOptions {
  sp_gb_name?: string;
  startDate?: string;
  endDate?: string;
  page?: number;
  limit?: number;
  sort?: string;
  order?: string;
}

/**
 * Master Demand Change Service
 * Handles database operations for demand change master records
 */
export class MasterService {
  static readonly MASTER_TABLE = TableUtils.getTableName(
    'app_dmd_change_master',
    DataLayer.GOLD
  );
  static readonly SUMMARY_TABLE = TableUtils.getTableName(
    'vw_demand_summary',
    DataLayer.SILVER
  );

  /**
   * Get demand change versions with pagination
   */
  static async getVersions(
    options: QueryOptions = {}
  ): Promise<DmdChangeMaster[]> {
    return withErrorHandling(async () => {
      const filterConditions: SqlFieldCondition<QueryOptions>[] = [
        {
          field: 'sp_gb_name',
          sqlColumn: 'dmd_sp_gb_name',
          type: 'STRING' as SQLParameterType,
        },
        {
          field: 'startDate',
          sqlColumn: 'create_timestamp',
          operator: '>=',
          paramName: 'startDate',
          type: 'TIMESTAMP' as SQLParameterType,
          transform: value => value,
        },
        {
          field: 'endDate',
          sqlColumn: 'create_timestamp',
          operator: '<=',
          paramName: 'endDate',
          type: 'TIMESTAMP' as SQLParameterType,
          transform: value =>
            value.length === 10 ? value + ' 23:59:59' : value,
        },
      ];

      const { conditions, params } = buildWhereClause(
        options,
        filterConditions
      );
      const whereClause = conditions.length
        ? `WHERE ${conditions.join(' AND ')}`
        : '';

      const orderClause = options.sort
        ? `ORDER BY ${options.sort} ${options.order?.toUpperCase() || 'DESC'}`
        : 'ORDER BY create_timestamp DESC';

      const limitClause =
        options.page && options.limit
          ? `LIMIT ${options.limit} OFFSET ${(options.page - 1) * options.limit}`
          : '';

      const sql = `
        SELECT *
        FROM ${this.MASTER_TABLE}
        ${whereClause}
        ${orderClause}
        ${limitClause}
      `;

      return await DatabaseService.queryDirect<DmdChangeMaster>(sql, params);
    }, 'Failed to get demand change versions');
  }

  /**
   * Fetch master record by ID
   */
  static async fetchMasterById(id: string): Promise<DmdChangeMaster> {
    return withErrorHandling(async () => {
      const sql = `
        SELECT *
        FROM ${this.MASTER_TABLE}
        WHERE dmd_change_master_id = :id
      `;
      const params = [{ name: 'id', value: id, type: 'STRING' as const }];

      const results = await DatabaseService.queryDirect<DmdChangeMaster>(
        sql,
        params
      );
      if (!results.length) {
        throw new Error('Version not found');
      }

      return results[0];
    }, `Failed to fetch master record by id ${id}`);
  }

  /**
   * Fetch both master record and its quarters
   */
  static async fetchMasterAndQuarters(id: string): Promise<{
    masterRecord: DmdChangeMaster;
    quarters: string[];
  }> {
    return withErrorHandling(async () => {
      const masterRecord = await this.fetchMasterById(id);
      const quarters = await this.fetchQuartersBySpGbName(
        masterRecord.dmd_sp_gb_name
      );

      return { masterRecord, quarters };
    }, `Failed to fetch master record and quarters for id ${id}`);
  }

  /**
   * Fetch quarters by SP/GB name
   */
  static async fetchQuartersBySpGbName(spGbName: string): Promise<string[]> {
    return withErrorHandling(async () => {
      const sql = `
        SELECT DISTINCT date_YYYYQQ
        FROM ${this.SUMMARY_TABLE}
        WHERE sp_gb_version = :sp_gb_name
        ORDER BY date_YYYYQQ ASC
      `;
      const results = await DatabaseService.queryDirect<{
        date_YYYYQQ: string;
      }>(sql, [{ name: 'sp_gb_name', value: spGbName, type: 'STRING' }]);

      return results.map(row => row.date_YYYYQQ);
    }, `Failed to fetch quarters for SP/GB name ${spGbName}`);
  }

  /**
   * Insert master record into database
   */
  static async insertMaster(
    masterId: string,
    master: CreateDmdChangeMaster
  ): Promise<void> {
    return withErrorHandling(async () => {
      const sql = `
        INSERT INTO ${this.MASTER_TABLE} (
          dmd_change_master_id,
          dmd_sp_gb_name,
          username,
          dmd_change_name,
          dmd_change_unit,
          dmd_remark
        ) VALUES (
          :id,
          :sp_gb_name,
          :username,
          :change_name,
          :change_unit,
          :remark
        )
      `;

      await DatabaseService.executeDirect(sql, [
        { name: 'id', value: masterId, type: 'STRING' },
        { name: 'sp_gb_name', value: master.dmd_sp_gb_name, type: 'STRING' },
        { name: 'username', value: master.username || '', type: 'STRING' },
        {
          name: 'change_name',
          value: master.dmd_change_name || '',
          type: 'STRING',
        },
        {
          name: 'change_unit',
          value: master.dmd_change_unit || '',
          type: 'STRING',
        },
        { name: 'remark', value: master.dmd_remark || '', type: 'STRING' },
      ]);
    }, `Failed to insert master record with id ${masterId}`);
  }

  /**
   * Update master record with new field values
   */
  static async updateMasterRecord(
    id: string,
    fields: { column: string; value: any; type: string }[]
  ): Promise<void> {
    if (fields.length === 0) return;

    return withErrorHandling(async () => {
      const setClause = fields
        .map(f => `${f.column} = :${f.column}`)
        .join(', ');
      const sql = `
        UPDATE ${this.MASTER_TABLE}
        SET ${setClause}, update_timestamp = CURRENT_TIMESTAMP
        WHERE dmd_change_master_id = :id
      `;

      const params: SQLParameter[] = fields.map(f => ({
        name: f.column,
        value: f.value,
        type: f.type as any,
      }));
      params.push({ name: 'id', value: id, type: 'STRING' });

      await DatabaseService.executeDirect(sql, params);
    }, `Failed to update master record with id ${id}`);
  }

  /**
   * Prepare update fields from master data for master record
   */
  static prepareMasterUpdateFields(
    masterData: any
  ): { column: string; value: any; type: string }[] {
    const fields: { column: string; value: any; type: string }[] = [];
    const fieldMappings = [
      { key: 'dmd_sp_gb_name', type: 'STRING' },
      { key: 'dmd_change_name', type: 'STRING' },
      { key: 'username', type: 'STRING' },
      { key: 'dmd_change_unit', type: 'STRING' },
      { key: 'dmd_remark', type: 'STRING' },
    ];

    for (const mapping of fieldMappings) {
      if (masterData[mapping.key] !== undefined) {
        fields.push({
          column: mapping.key,
          value: masterData[mapping.key],
          type: mapping.type,
        });
      }
    }

    return fields;
  }

  /**
   * Delete master record from database
   */
  static async deleteMasterRecord(id: string): Promise<void> {
    return withErrorHandling(async () => {
      const sql = `
        DELETE FROM ${this.MASTER_TABLE}
        WHERE dmd_change_master_id = :id
      `;
      await DatabaseService.executeDirect(sql, [
        { name: 'id', value: id, type: 'STRING' },
      ]);
    }, `Failed to delete master record with id ${id}`);
  }
}

import { DatabaseService } from '@/app/api/_shared/database';
import { TableUtils, DataLayer } from '@/app/api/_shared/database/table-utils';
import {
  withErrorHandling,
  buildWhereClause,
  SqlFieldCondition,
} from '@/app/api/_shared/utils/service-utils';
import { TankPlanMaster, UpdateTankPlanMaster } from '../models';
import type {
  SQLParameter,
  SQLParameterType,
} from '@/app/api/_shared/database/types';

/**
 * Query options for tank plan versions
 */
export interface QueryOptions {
  page?: number;
  limit?: number;
  sort?: string;
  order?: 'asc' | 'desc';
  planType?: string;
  planOfficial?: string;
  startDate?: string;
  endDate?: string;
}

/**
 * Master Tank Plan Service
 * Handles database operations for tank plan master records
 */
export class MasterService {
  static readonly MASTER_TABLE = TableUtils.getTableName(
    'app_tank_plan_master',
    DataLayer.GOLD
  );

  /**
   * Get all versions with filtering and pagination
   */
  static async getVersions(
    options: QueryOptions = {}
  ): Promise<TankPlanMaster[]> {
    return withErrorHandling(async () => {
      const filterConditions: SqlFieldCondition<QueryOptions>[] = [
        {
          field: 'planType',
          sqlColumn: 'plan_type',
          type: 'STRING' as SQLParameterType,
        },
        {
          field: 'planOfficial',
          sqlColumn: 'plan_official',
          type: 'STRING' as SQLParameterType,
        },
        {
          field: 'startDate',
          sqlColumn: 'update_timestamp',
          operator: '>=',
          paramName: 'start_date',
          type: 'TIMESTAMP' as SQLParameterType,
          transform: value => value,
        },
        {
          field: 'endDate',
          sqlColumn: 'update_timestamp',
          operator: '<=',
          paramName: 'end_date',
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
        : 'ORDER BY plan_version DESC';

      const limitClause =
        options.page && options.limit
          ? `LIMIT ${options.limit} OFFSET ${(options.page - 1) * options.limit}`
          : '';

      const sql = `
        SELECT * FROM ${this.MASTER_TABLE}
        ${whereClause}
        ${orderClause}
        ${limitClause}
      `;

      return await DatabaseService.queryDirect<TankPlanMaster>(sql, params);
    }, 'Failed to get tank plan versions');
  }

  /**
   * Get parent version for a tank plan version
   */
  static async getParentVersion(id: string): Promise<TankPlanMaster> {
    return withErrorHandling(async () => {
      const sql = `
          SELECT 
            plan_master_id, plan_version, plan_type,
            plan_official, plan_version_no, plan_version_parent,
            version_match, create_timestamp, update_timestamp, user_name
          FROM ${this.MASTER_TABLE}
          WHERE plan_master_id = (SELECT plan_version_parent FROM ${this.MASTER_TABLE} WHERE plan_master_id = :id)
        `;

      const results = await DatabaseService.queryDirect<TankPlanMaster>(sql, [
        { name: 'id', value: id, type: 'STRING' as SQLParameterType },
      ]);

      if (!results.length) {
        throw new Error('Parent version not found');
      }

      return results[0];
    }, `Failed to get parent version for id ${id}`);
  }

  /**
   * Fetch master record by ID
   */
  static async fetchMasterById(id: string): Promise<TankPlanMaster> {
    return withErrorHandling(async () => {
      const sql = `
          SELECT 
            plan_master_id, plan_version, plan_type,
            plan_official, plan_version_no, plan_version_parent,
            version_match, create_timestamp, update_timestamp, user_name
          FROM ${this.MASTER_TABLE}
          WHERE plan_master_id = :id
        `;
      const params: SQLParameter[] = [
        { name: 'id', value: id, type: 'STRING' as SQLParameterType },
      ];

      const results = await DatabaseService.queryDirect<TankPlanMaster>(
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
   * Insert master record into database
   */
  static async insertMaster(master: UpdateTankPlanMaster): Promise<number> {
    return withErrorHandling(async () => {
      const masterData = { ...master };
      const versionMatch =
        masterData.plan_version?.substring(0, 7).replace('-', '') || '';

      const columns = Object.keys(masterData);
      const values = columns.map(col => `:${col}`);

      const params = [
        ...Object.entries(masterData).map(([key, value]) => ({
          name: key,
          value: value === undefined ? '' : String(value),
          type:
            key === 'plan_version_no'
              ? ('BIGINT' as SQLParameterType)
              : ('STRING' as SQLParameterType),
        })),
        {
          name: 'version_match',
          value: versionMatch,
          type: 'STRING' as SQLParameterType,
        },
      ];

      // Insert record
      const insertSql = `
        INSERT INTO ${this.MASTER_TABLE} (${columns.join(', ')}, version_match) 
        VALUES (${values.join(', ')}, :version_match)
      `;

      await DatabaseService.executeDirect(insertSql, params);

      // Query for inserted record ID
      const selectSql = `
        SELECT plan_master_id 
        FROM ${this.MASTER_TABLE}
        WHERE plan_version = :plan_version 
          AND user_name = :user_name
        ORDER BY create_timestamp DESC
        LIMIT 1
      `;

      const results = await DatabaseService.queryDirect<{
        plan_master_id: number;
      }>(selectSql, [
        {
          name: 'plan_version',
          value: masterData.plan_version || '',
          type: 'STRING' as SQLParameterType,
        },
        {
          name: 'user_name',
          value: masterData.user_name || '',
          type: 'STRING' as SQLParameterType,
        },
      ]);

      if (!results.length) {
        throw new Error('Failed to retrieve created version ID');
      }

      return results[0].plan_master_id;
    }, 'Failed to insert master record');
  }

  /**
   * Update master record with new field values
   */
  static async updateMasterRecord(
    id: string,
    updateFields: UpdateTankPlanMaster
  ): Promise<void> {
    if (Object.keys(updateFields).length === 0) return;

    return withErrorHandling(async () => {
      // Create a safe copy of update fields, filtering out unwanted fields
      const fieldsToUpdate = Object.entries(updateFields)
        .filter(([key]) => key !== 'plan_master_id') // Exclude primary key
        .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});

      const updatedFields = {
        ...fieldsToUpdate,
        update_timestamp: new Date().toISOString(),
      };
      const updates = Object.keys(updatedFields).map(key => `${key} = :${key}`);

      const params: SQLParameter[] = [
        ...Object.entries(updatedFields).map(([key, value]) => ({
          name: key,
          value: String(value || ''),
          type:
            key === 'plan_version_no'
              ? ('BIGINT' as SQLParameterType)
              : ('STRING' as SQLParameterType),
        })),
        { name: 'id', value: id, type: 'STRING' as SQLParameterType },
      ];

      const sql = `
          UPDATE ${this.MASTER_TABLE}
          SET ${updates.join(', ')}
          WHERE plan_master_id = :id
        `;

      await DatabaseService.executeDirect(sql, params);
    }, `Failed to update master record with id ${id}`);
  }

  /**
   * Delete master record from database
   */
  static async deleteMasterRecord(id: string): Promise<void> {
    return withErrorHandling(async () => {
      const sql = `
          DELETE FROM ${this.MASTER_TABLE}
          WHERE plan_master_id = :id
        `;
      await DatabaseService.executeDirect(sql, [
        { name: 'id', value: id, type: 'STRING' as SQLParameterType },
      ]);
    }, `Failed to delete master record with id ${id}`);
  }
}

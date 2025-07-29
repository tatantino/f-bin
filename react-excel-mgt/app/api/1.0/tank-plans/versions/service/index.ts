import { MasterService, QueryOptions } from './master.service';
import { DetailService } from './detail.service';
import {
  TankPlanMaster,
  TankPlanDetail,
  CreateTankPlanMaster,
  UpdateTankPlanMaster,
} from '../models';
import { withErrorHandling } from '@/app/api/_shared/utils/service-utils';

/**
 * Tank Plan Service
 * Handles database operations for tank plan versions and their details
 */
export class TankPlanService {
  /**
   * Get tank plan versions with pagination
   */
  static async getVersions(
    options: QueryOptions = {}
  ): Promise<TankPlanMaster[]> {
    return withErrorHandling(
      async () => await MasterService.getVersions(options),
      'Failed to get versions'
    );
  }

  /**
   * Get a complete tank plan version by ID including master and details
   */
  static async getVersion(id: string): Promise<{
    master: TankPlanMaster;
    details: TankPlanDetail[];
  }> {
    return withErrorHandling(async () => {
      const [master, details] = await Promise.all([
        MasterService.fetchMasterById(id),
        DetailService.fetchDetailsByMasterId(id),
      ]);

      return { master, details };
    }, `Failed to get version by id ${id}`);
  }

  /**
   * Create a new tank plan version with details
   */
  static async createVersion(
    master: CreateTankPlanMaster,
    details?: TankPlanDetail[]
  ): Promise<{ id: number }> {
    return withErrorHandling(async () => {
      // Insert master record and get ID
      const masterId = await MasterService.insertMaster(master);

      // Insert details if provided
      if (masterId && details?.length) {
        await DetailService.insertDetails(
          details.map(detail => ({
            ...detail,
            plan_master_id: Number(masterId),
          }))
        );
      }

      return { id: Number(masterId) };
    }, 'Failed to create version');
  }

  /**
   * Update a tank plan version
   */
  static async updateVersion(
    id: string,
    masterData: UpdateTankPlanMaster,
    details?: TankPlanDetail[]
  ): Promise<{ id: string }> {
    return withErrorHandling(async () => {
      await MasterService.fetchMasterById(id);

      const updateTasks = [];

      if (Object.keys(masterData).length > 0) {
        updateTasks.push(MasterService.updateMasterRecord(id, masterData));
      }

      if (details !== undefined) {
        updateTasks.push(DetailService.updateDetails(id, details));
      }

      if (updateTasks.length > 0) {
        await Promise.all(updateTasks);
      }

      return { id };
    }, `Failed to update version ${id}`);
  }

  /**
   * Delete a tank plan version and its details
   */
  static async deleteVersion(id: string): Promise<{ id: string }> {
    return withErrorHandling(async () => {
      await MasterService.fetchMasterById(id);

      await Promise.all([
        DetailService.deleteDetailsByMasterId(id),
        MasterService.deleteMasterRecord(id),
      ]);

      return { id };
    }, `Failed to delete version ${id}`);
  }

  /**
   * Get parent version for a tank plan version
   */
  static async getParentVersion(id: string): Promise<TankPlanMaster> {
    return withErrorHandling(
      async () => await MasterService.getParentVersion(id),
      `Failed to get parent version for id ${id}`
    );
  }
}

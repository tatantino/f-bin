import { MasterService, QueryOptions } from './master.service';
import { DetailService } from './detail.service';
import {
  DmdChangeMaster,
  DmdChangeDetail,
  CreateDmdChangeMaster,
  UpdateDmdChangeMaster,
  CreateDmdChangeDetail,
  UpdateDmdChangeDetail,
} from '../models/dmd-change';
import { withErrorHandling } from '@/app/api/_shared/utils/service-utils';
import { v4 as uuidv4 } from 'uuid';

/**
 * Demand Change Service
 * Handles database operations for demand change versions and their details
 * Acts as a facade for MasterService and DetailService
 */
export class DmdChangeService {
  /**
   * Get demand change versions with pagination
   */
  static async getVersions(
    options: QueryOptions = {}
  ): Promise<DmdChangeMaster[]> {
    return withErrorHandling(
      async () => await MasterService.getVersions(options),
      'Failed to get dmd change versions'
    );
  }

  /**
   * Get a complete demand change version by ID including master, details and date quarters
   */
  static async getVersion(id: string): Promise<{
    master: DmdChangeMaster;
    details: DmdChangeDetail[];
  }> {
    return withErrorHandling(async () => {
      // Start both operations in parallel
      const [{ masterRecord, quarters }, details] = await Promise.all([
        MasterService.fetchMasterAndQuarters(id),
        DetailService.fetchDetailsByMasterId(id),
      ]);

      // Combine master data with quarters
      const master = {
        ...masterRecord,
        date_YYYYQQs: quarters,
      };

      return { master, details };
    }, `Failed to get version by id ${id}`);
  }

  /**
   * Create a new demand change version with details
   */
  static async createVersion(
    master: CreateDmdChangeMaster,
    details: CreateDmdChangeDetail[]
  ): Promise<{ id: string }> {
    return withErrorHandling(async () => {
      // Use master ID from frontend if provided, otherwise generate one
      const masterId = master.dmd_change_master_id || uuidv4();

      // Insert master record
      await MasterService.insertMaster(masterId, master);

      // Insert detail records if any
      if (details.length > 0) {
        await DetailService.insertDetails(details, masterId);
      }

      return { id: masterId };
    }, 'Failed to create demand change version');
  }

  /**
   * Update a demand change version
   */
  static async updateVersion(
    id: string,
    masterData: UpdateDmdChangeMaster,
    details?: UpdateDmdChangeDetail[]
  ): Promise<{ id: string }> {
    return withErrorHandling(async () => {
      // Check if version exists first
      await MasterService.fetchMasterById(id);

      // Prepare update tasks
      const updateTasks = [];

      // Update master record if needed
      const updateFields = MasterService.prepareMasterUpdateFields(masterData);
      if (updateFields.length > 0) {
        updateTasks.push(MasterService.updateMasterRecord(id, updateFields));
      }

      // Update details if provided
      if (details !== undefined) {
        updateTasks.push(DetailService.updateDetails(id, details));
      }

      // Execute all updates in parallel
      if (updateTasks.length > 0) {
        await Promise.all(updateTasks);
      }

      return { id };
    }, `Failed to update demand change version ${id}`);
  }

  /**
   * Delete a demand change version and its details
   */
  static async deleteVersion(id: string): Promise<{ id: string }> {
    return withErrorHandling(async () => {
      // Check if version exists first
      await MasterService.fetchMasterById(id);

      await Promise.all([
        DetailService.deleteDetailsByMasterId(id),
        MasterService.deleteMasterRecord(id),
      ]);

      return { id };
    }, `Failed to delete demand change version ${id}`);
  }
}

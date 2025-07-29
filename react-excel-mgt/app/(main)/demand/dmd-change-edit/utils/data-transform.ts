/**
 * Data transformation utilities for demand change editing
 */
import type { DmdChangeMaster, DmdChangeDetail } from '../types/api';
import type {
  ExtendedDmdChangeDetail,
  TransformedDetail,
} from '../types/dmd-change';
import { v4 as uuidv4 } from 'uuid';

/**
 * Creates master data record for demand change
 */
export function createMasterData(
  masterId: string,
  version: DmdChangeMaster,
  username: string,
  remark: string
): DmdChangeMaster {
  return {
    dmd_change_master_id: masterId,
    dmd_sp_gb_name: version.dmd_sp_gb_name,
    username: username || 'system',
    dmd_change_name: version.dmd_change_name || '',
    dmd_change_unit: version.dmd_change_unit || 'msqft',
    dmd_remark: remark,
    date_YYYYQQs: version.date_YYYYQQs || [],
    // @ts-ignore - 兼容API中的可选字段
    tank_plan_master_id: version.tank_plan_master_id,
    create_timestamp: version.create_timestamp || '',
    update_timestamp: version.update_timestamp || '',
  };
}

/**
 * Transforms API response data into table-friendly format
 */
export function transformResponseToTableData(
  masterData: DmdChangeMaster | null,
  detailsData: DmdChangeDetail[] = [],
  initialRow: DmdChangeDetail,
  minRows: number
): ExtendedDmdChangeDetail[] {
  // If no master data, return empty table with minimum rows
  if (!masterData) {
    return Array(minRows)
      .fill(null)
      .map(() => ({
        ...initialRow,
        dmd_change_detail_id: uuidv4(),
        create_timestamp: '',
        update_timestamp: '',
      })) as ExtendedDmdChangeDetail[];
  }

  // Group details by their identifying fields to avoid duplicates
  const groupedDetails = detailsData.reduce(
    (acc: { [key: string]: DmdChangeDetail[] }, detail) => {
      const key = [
        detail.business_unit,
        detail.region,
        detail.gen_group,
        detail.gen_size,
        detail.composition_group,
        detail.composition,
        detail.customer,
        detail.TFT_customer,
        detail.TFT_region,
        detail.area,
        detail.thickness,
        detail.grade,
      ].join('|');

      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(detail);
      return acc;
    },
    {}
  );

  // Convert grouped data into row format with date-specific values
  const formattedDetails = Object.values(groupedDetails).map(details => {
    const baseDetail = details[0];
    const row = {
      ...initialRow,
      ...baseDetail,
    } as ExtendedDmdChangeDetail;

    // Add date-specific values
    details.forEach(detail => {
      const dateKey =
        `dmd_value_${detail.dmd_year}-${detail.dmd_quarter}` as const;
      row[dateKey] = detail.dmd_value || null;
    });

    // Ensure all expected date columns exist
    masterData.date_YYYYQQs?.forEach(date => {
      const dateKey = `dmd_value_${date}` as const;
      if (!(dateKey in row)) {
        row[dateKey] = null;
      }
    });

    return row;
  });

  // Ensure minimum number of rows
  const rowCount = Math.max(formattedDetails.length, minRows);
  const emptyRows = Array(rowCount - formattedDetails.length)
    .fill(null)
    .map(() => ({
      ...initialRow,
      dmd_change_detail_id: uuidv4(),
      dmd_change_master_id: masterData.dmd_change_master_id,
      create_timestamp: '',
      update_timestamp: '',
    })) as ExtendedDmdChangeDetail[];

  return [...formattedDetails, ...emptyRows];
}

/**
 * Transforms UI data into format suitable for API submission
 */
export function transformData(
  data: DmdChangeDetail[],
  masterId: string,
  dateColumns: string[]
): TransformedDetail[] {
  const transformedDetails: TransformedDetail[] = [];

  // Filter out empty rows
  const nonEmptyRows = data.filter(row =>
    Object.entries(row).some(([key, value]) => {
      if (key === 'dmd_change_detail_id' || key === 'dmd_change_master_id')
        return false;
      return value !== null && value !== undefined && value !== '';
    })
  );

  // Process each row for each date column
  nonEmptyRows.forEach(row => {
    dateColumns.forEach(dateCol => {
      const value = row[`dmd_value_${dateCol}`];
      if (value === null || value === undefined || String(value).trim() === '')
        return;

      const [year, quarter] = dateCol.split('-');
      if (!year || !quarter || isNaN(Number(value))) return;

      transformedDetails.push({
        // Generate a new UUID for each date column entry to ensure uniqueness
        dmd_change_detail_id: uuidv4(),
        dmd_change_master_id: masterId,
        business_unit: row.business_unit || '',
        region: row.region || '',
        gen_group: row.gen_group || '',
        gen_size: row.gen_size || '',
        composition_group: row.composition_group || '',
        composition: row.composition || '',
        customer: row.customer || '',
        TFT_customer: row.TFT_customer || '',
        TFT_region: row.TFT_region || '',
        area: row.area || '',
        thickness: row.thickness || '',
        grade: row.grade || '',
        dmd_year: year,
        dmd_quarter: quarter,
        dmd_value: Number(value),
        create_timestamp: row.create_timestamp || new Date().toISOString(),
        update_timestamp: new Date().toISOString(),
      });
    });
  });

  return transformedDetails;
}

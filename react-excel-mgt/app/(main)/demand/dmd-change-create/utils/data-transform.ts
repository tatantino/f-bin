/**
 * Data transformation utilities for demand change creation
 */
import type { ExtendedDmdChangeDetail, TransformedDetail } from '../types';
import type { DmdChangeDetail, DmdChangeMaster } from '../types/api';

/**
 * Creates master data record for demand change
 */
export function createMasterData(
  version: DmdChangeMaster,
  username: string,
  remark: string
): DmdChangeMaster {
  return {
    dmd_change_master_id: version.dmd_change_master_id,
    dmd_sp_gb_name: version.dmd_sp_gb_name,
    username: username || 'system',
    dmd_change_name: version.dmd_change_name || '',
    dmd_change_unit: version.dmd_change_unit || 'msqft',
    dmd_remark: remark,
    date_YYYYQQs: version.date_YYYYQQs || [],
    create_timestamp: '',
    update_timestamp: '',
  };
}

/**
 * Groups details by key fields to avoid duplicates
 */
function groupDetailsByKey(
  details: DmdChangeDetail[]
): Record<string, DmdChangeDetail[]> {
  return details.reduce((acc: Record<string, DmdChangeDetail[]>, detail) => {
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
  }, {});
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
  if (!masterData) {
    return Array(minRows).fill({ ...initialRow });
  }

  const groupedDetails = groupDetailsByKey(detailsData);

  const formattedDetails = Object.values(groupedDetails).map(details => {
    const baseDetail = details[0];
    const row = {
      ...initialRow,
      ...baseDetail,
    } as ExtendedDmdChangeDetail;

    details.forEach(detail => {
      const dateKey =
        `dmd_value_${detail.dmd_year}-${detail.dmd_quarter}` as const;
      row[dateKey] = detail.dmd_value || null;
    });

    masterData.date_YYYYQQs?.forEach(date => {
      const dateKey = `dmd_value_${date}` as const;
      if (!(dateKey in row)) {
        row[dateKey] = null;
      }
    });

    return row;
  });

  const rowCount = Math.max(formattedDetails.length, minRows);
  const emptyRows = Array(rowCount - formattedDetails.length).fill({
    ...initialRow,
  });

  return [...formattedDetails, ...emptyRows];
}

/**
 * Filters out empty rows from the table data
 */
function filterNonEmptyRows(data: DmdChangeDetail[]): DmdChangeDetail[] {
  return data.filter(row =>
    Object.entries(row).some(([key, value]) => {
      if (key === 'dmd_change_detail_id' || key === 'dmd_change_master_id')
        return false;
      return value !== null && value !== undefined && value !== '';
    })
  );
}

/**
 * Creates a detail record for a specific date value
 */
function createDetailRecord(
  row: DmdChangeDetail,
  dateCol: string,
  value: any
): TransformedDetail | null {
  if (value === null || value === undefined || String(value).trim() === '')
    return null;

  const [year, quarter] = dateCol.split('-');
  if (!year || !quarter || isNaN(Number(value))) return null;

  return {
    dmd_change_detail_id: row.dmd_change_detail_id,
    dmd_change_master_id: row.dmd_change_master_id,
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
    create_timestamp: '',
    update_timestamp: '',
  };
}

/**
 * Transforms UI data into format suitable for API submission
 */
export function transformData(
  data: DmdChangeDetail[],
  dateColumns: string[]
): TransformedDetail[] {
  const transformedDetails: TransformedDetail[] = [];
  const nonEmptyRows = filterNonEmptyRows(data);

  nonEmptyRows.forEach(row => {
    dateColumns.forEach(dateCol => {
      const value = row[`dmd_value_${dateCol}`];
      const detail = createDetailRecord(row, dateCol, value);
      if (detail) transformedDetails.push(detail);
    });
  });

  return transformedDetails;
}

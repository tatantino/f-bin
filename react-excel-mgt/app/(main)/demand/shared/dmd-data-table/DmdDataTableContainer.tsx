import { DmdDataTable } from './DmdDataTable';
import type {
  DemandChangeData,
  DmdChangeDetail,
} from '@/app/api/1.0/demands/changes/versions/models/dmd-change';

/**
 * Container component for demand change data table
 */
export function DmdDataTableContainer({
  demandChangeData,
}: {
  demandChangeData: DemandChangeData | null;
}) {
  const unit = demandChangeData?.master?.dmd_change_unit || '';
  const details = demandChangeData?.details || [];
  const { headers, rows } = processTableData(details);

  return <DmdDataTable headers={headers} rows={rows} unit={unit} />;
}

/**
 * Process demand change data into table-ready format
 */
function processTableData(details: DmdChangeDetail[]) {
  // If no data, return empty result
  if (!details.length) {
    return {
      headers: ['Gen Group', 'Composition Group'],
      rows: [],
    };
  }

  // Extract all years and sort them
  const years = [
    ...new Set(
      details
        .filter(detail => detail.dmd_year)
        .map(detail => detail.dmd_year as string)
    ),
  ].sort();

  // Create headers
  const headers = ['Gen Group', 'Composition Group', ...years];

  // Group data by gen group and composition group
  const groupedData = new Map<string, Map<string, number>>();

  details.forEach(detail => {
    const { gen_group, composition_group, dmd_year, dmd_value } = detail;
    if (!gen_group || !dmd_year || dmd_value === undefined) return;

    const groupKey = `${gen_group}|${composition_group || ''}`;

    if (!groupedData.has(groupKey)) {
      groupedData.set(groupKey, new Map());
    }

    const yearData = groupedData.get(groupKey)!;
    const value =
      typeof dmd_value === 'string' ? parseFloat(dmd_value) : dmd_value;

    if (!isNaN(value)) {
      yearData.set(dmd_year, (yearData.get(dmd_year) || 0) + value);
    }
  });

  // Convert to table row data
  const rows = Array.from(groupedData.entries()).map(
    ([groupKey, yearValues]) => {
      const [genGroup, compositionGroup] = groupKey.split('|');
      const row: (string | number | null)[] = [
        genGroup,
        compositionGroup || '',
      ];

      // Add values for each year
      years.forEach(year => {
        row.push(yearValues.has(year) ? yearValues.get(year)! : null);
      });

      return row;
    }
  );

  return { headers, rows };
}

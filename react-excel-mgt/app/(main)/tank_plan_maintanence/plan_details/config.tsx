/**
 * Configuration for plan details page
 */
import { createTableColumns } from '../_shared/config/table-columns';
import { DATE_COLUMNS } from '../_shared/config/config';
import { DateUtils } from '../_shared/utils/utils';

// Page configuration
export const PAGE_TITLE = 'Plan View';
export const PAGE_DESCRIPTION = 'Click on any cell to edit';

// Create table columns with edit functionality
export function getTableColumns() {
  return createTableColumns({
    allowEdit: true,
    formatValue: (value, columnId) => {
      return DATE_COLUMNS.includes(columnId as any)
        ? DateUtils.format(value)
        : value;
    },
  });
}

// Tooltip content for page header
export function getTooltipContent() {
  return (
    <>
      <p className="text-sm text-muted-foreground">
        View and manage tank plans:
      </p>
      <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
        <li className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Edit plan information directly in the table
        </li>
        <li className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Filter plans by time range (18MP)
        </li>
        <li className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Customize visible columns
        </li>
        <li className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Export plans to Excel format
        </li>
      </ul>
    </>
  );
}

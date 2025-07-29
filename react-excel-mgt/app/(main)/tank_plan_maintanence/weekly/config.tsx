/**
 * Configuration for weekly plan page
 */
import { createTableColumns } from '../_shared/config/table-columns';
import { DATE_COLUMNS } from '../_shared/config/config';
import { DateUtils } from '../_shared/utils/utils';

// Page configuration
export const PAGE_CONFIG = {
  title: 'Create A New Weekly Plan',
  description: 'Click on any cell to edit',
  tooltip: {
    title: 'About Weekly Plan Editor',
    features: [
      'Edit plan details directly in the table',
      'Validate data before saving',
      'Export to Excel format',
    ],
  },
};

// Animation configurations
export const ANIMATIONS = {
  content: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.35, delay: 0.15, ease: [0.4, 0, 0.2, 1] },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.2 },
  },
  fadeInScale: {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.98 },
    transition: { duration: 0.2 },
  },
};

export const ANIMATION_MODES = {
  wait: 'wait',
  sync: 'sync',
};

// Layout class names
export const LAYOUT_CLASSES = {
  container: 'flex h-full flex-col',
  tableContainer: 'min-h-0 flex-1 p-4',
  tableWrapper: 'h-full w-full',
  loadingWrapper: 'flex h-full w-full items-center justify-center',
};

// Create table columns with edit functionality
export function getTableColumns() {
  return createTableColumns({
    allowEdit: true,
    formatValue: (value, columnId) => {
      const isDateColumn = DATE_COLUMNS.includes(columnId as any);
      return isDateColumn ? DateUtils.format(value) : value;
    },
  });
}

// Tooltip content component
export function TooltipContent() {
  const { features } = PAGE_CONFIG.tooltip;

  return (
    <>
      <p className="text-sm text-muted-foreground">
        Create weekly tank plans. You can:
      </p>
      <ul className="text-sm text-muted-foreground">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 pb-1">
            <span className="h-1 w-1 rounded-full bg-primary" />
            {feature}
          </li>
        ))}
      </ul>
    </>
  );
}

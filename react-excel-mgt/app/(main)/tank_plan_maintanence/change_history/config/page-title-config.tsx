export const PAGE_TITLE = 'Change History' as const;
export const PAGE_DESCRIPTION = 'View tank plan change history' as const;

export const TOOLTIP_CONFIG = {
  title: 'About Change History',
  content: (
    <>
      <p className="text-sm text-muted-foreground">
        View the history of changes made to tank plans. You can:
      </p>
      <ul className="text-sm text-muted-foreground">
        <li className="flex items-center gap-2 pb-1">
          <span className="h-1 w-1 rounded-full bg-primary" />
          Filter by date range, tank, and category
        </li>
        <li className="flex items-center gap-2 pb-1">
          <span className="h-1 w-1 rounded-full bg-primary" />
          View detailed change information
        </li>
        <li className="flex items-center gap-2">
          <span className="h-1 w-1 rounded-full bg-primary" />
          Track all modifications to tank plans
        </li>
      </ul>
    </>
  ),
} as const;

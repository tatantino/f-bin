export const PAGE_TITLE = 'Tank Details' as const;
export const PAGE_DESCRIPTION = 'Click on any cell to edit' as const;

export const TOOLTIP_CONFIG = {
  title: 'About Tank Details',
  content: (
    <>
      <p className="text-sm text-muted-foreground">
        Manage tank details. You can:
      </p>
      <ul className="text-sm text-muted-foreground">
        <li className="flex items-center gap-2 pb-1">
          <span className="h-1 w-1 rounded-full bg-primary" />
          Click on any cell to edit
        </li>
        <li className="flex items-center gap-2 pb-1">
          <span className="h-1 w-1 rounded-full bg-primary" />
          Import tank data from Excel
        </li>
        <li className="flex items-center gap-2">
          <span className="h-1 w-1 rounded-full bg-primary" />
          Export tank data to Excel
        </li>
      </ul>
    </>
  ),
} as const;

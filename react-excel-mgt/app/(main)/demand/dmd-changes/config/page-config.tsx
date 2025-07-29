import type { PageConfig } from '@/types/page';

export const PAGE_CONFIG: PageConfig = {
  title: 'Demand Change List',
  description: 'View and manage Demand Changes',
  tooltip: {
    content: (
      <>
        <p className="text-sm text-muted-foreground">
          Manage DMD versions. You can:
        </p>
        <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            View and edit version information
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Filter versions by date range and unit
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Track version history and changes
          </li>
        </ul>
      </>
    ),
  },
};

import type { PageConfig } from '@/types/page';

export const PAGE_CONFIG: PageConfig = {
  title: 'Create Demand Change',
  description: 'Click on any cell to edit',
  tooltip: {
    content: (
      <>
        <h3 className="font-medium leading-none">About Demand Change Editor</h3>
        <div className="pt-2 text-sm text-muted-foreground">
          <p>Key features:</p>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Edit Demand Change details directly in the table
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Validate data before saving
            </li>
          </ul>
        </div>
      </>
    ),
  },
};

/**
 * Page title component for long-term plan page
 */
'use client';

import { PageTitle } from '@/components/shared/layouts/PageTitle';

export function LongTermPageTitle() {
  return (
    <PageTitle
      title="Create A New Long-term Plan"
      tooltip={{
        content: (
          <>
            <p className="text-sm text-muted-foreground">
              This page allows you to upload long-term tank plans. You can:
            </p>
            <ul className="text-sm text-muted-foreground">
              <li className="flex items-center gap-2 pb-1">
                <span className="h-1 w-1 rounded-full bg-primary" />
                Upload Excel files with plan data
              </li>
              <li className="flex items-center gap-2 pb-1">
                <span className="h-1 w-1 rounded-full bg-primary" />
                Validate and save plan data
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-primary" />
                Export plans to Excel format
              </li>
            </ul>
          </>
        ),
      }}
    />
  );
}

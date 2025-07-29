/**
 * Demand Change Proposal page configuration
 */
export const PAGE_CONFIG = {
  // Page metadata
  title: 'Demand Change Proposal',

  // Help tooltip content
  tooltip: {
    content: (
      <>
        <h3 className="font-medium leading-none">
          About Demand Change Proposal
        </h3>
        <div className="pt-2 text-sm text-muted-foreground">
          <p>Key features:</p>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              View and analyze demand change data with size allocations
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Generate size allocation proposals
            </li>
          </ul>
        </div>
      </>
    ),
  },
};

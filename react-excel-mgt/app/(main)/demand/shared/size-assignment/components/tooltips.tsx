import React from 'react';

export const TOOLTIPS = {
  ASSIGNMENT_MODES: {
    RATIO: {
      title: 'Ratio Assignment Mode',
      content: (
        <>
          <p className="text-sm text-muted-foreground">
            How to use Ratio Assignment Mode:
          </p>
          <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
              <span>
                Enter percentage values to distribute production between sizes
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
              <span>
                Use arrow keys (↑↓) or mouse wheel to adjust values in 1%
                increments
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
              <span>System automatically ensures paired sizes total 100%</span>
            </li>
          </ul>
        </>
      ),
    },
    QUANTITY: {
      title: 'Quantity Assignment Mode',
      content: (
        <>
          <p className="text-sm text-muted-foreground">
            How to use Quantity Assignment Mode:
          </p>
          <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
              <span>Enter specific production quantities for each size</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
              <span>
                Use arrow keys (↑↓) or mouse wheel to adjust values in 0.1
                increments
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
              <span>
                System calculates corresponding percentages automatically
              </span>
            </li>
          </ul>
        </>
      ),
    },
  },
} as const;

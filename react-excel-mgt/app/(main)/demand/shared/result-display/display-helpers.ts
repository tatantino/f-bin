/**
 * Utility functions for styling and displaying data
 */

// Color palette for differentiating items visually
const COLOR_PALETTE = [
  { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-700' },
  { bg: 'bg-red-500/10', border: 'border-red-500/20', text: 'text-red-700' },
  {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    text: 'text-emerald-700',
  },
  {
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    text: 'text-purple-700',
  },
  {
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    text: 'text-amber-700',
  },
  {
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
    text: 'text-indigo-700',
  },
  { bg: 'bg-rose-500/10', border: 'border-rose-500/20', text: 'text-rose-700' },
] as const;

// Cache for color assignments to ensure consistency
const itemColorCache = new Map<string, string>();
let colorIndex = 0;

/**
 * Get consistent color classes for a specific item
 * Returns Tailwind classes for background, border, and text color
 *
 * @param item Item identifier (e.g. "32\"" or "Category A")
 * @returns Tailwind CSS class string
 */
export function getItemColor(item: string): string {
  if (itemColorCache.has(item)) {
    return itemColorCache.get(item)!;
  }

  const { bg, border, text } = COLOR_PALETTE[colorIndex % COLOR_PALETTE.length];
  const colorClasses = `${bg} ${border} ${text}`;

  itemColorCache.set(item, colorClasses);
  colorIndex++;

  return colorClasses;
}

/**
 * Formats a number for display with specified precision
 *
 * @param value Number to format
 * @param precision Decimal places to display
 * @returns Formatted number string
 */
export function formatNumber(value: number, precision: number = 1): string {
  return value.toFixed(precision);
}

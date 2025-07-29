/**
 * Configuration constants for the Control Panel component
 */

/**
 * Size color palette for visual identification
 * Each size gets a unique color from this palette
 */
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

// Cache for size color assignments to ensure consistency
const sizeColorCache = new Map<string, string>();
let lastColorIndex = 0;

/**
 * Get consistent color classes for a specific size
 * Returns Tailwind classes for background, border, and text color
 *
 * @param size Size identifier (e.g. "32\"")
 * @returns Tailwind CSS class string
 */
export function getSizeColor(size: string): string {
  // Return cached color if exists
  if (sizeColorCache.has(size)) {
    return sizeColorCache.get(size)!;
  }

  // Assign next color in palette
  const colorSet = COLOR_PALETTE[lastColorIndex % COLOR_PALETTE.length];
  const colorClasses = `${colorSet.bg} ${colorSet.border} ${colorSet.text}`;

  // Cache the assignment for future use
  sizeColorCache.set(size, colorClasses);
  lastColorIndex++;

  return colorClasses;
}

/**
 * Default ratio value for initializing inputs
 */
export const INITIAL_RATIO = 50;

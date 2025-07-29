import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

// Define the badge types for documentation
export type PlanBadgeType = string;

interface PlanBadgeProps {
  type: string;
  className?: string;
}

// Badge styles for different plan types and tags
const badgeStyles: Record<string, string> = {
  'Long-term':
    'border-blue-200 bg-blue-50/50 text-blue-700 hover:bg-blue-100 dark:border-blue-800 dark:bg-blue-950/20 dark:text-blue-400',
  Weekly:
    'border-emerald-200 bg-emerald-50/50 text-emerald-700 hover:bg-emerald-100 dark:border-emerald-800 dark:bg-emerald-950/20 dark:text-emerald-400',
  GB: 'border-purple-200 bg-purple-50/50 text-purple-700 hover:bg-purple-100 dark:border-purple-800 dark:bg-purple-950/20 dark:text-purple-400',
  '18MP':
    'border-amber-200 bg-amber-50/50 text-amber-700 hover:bg-amber-100 dark:border-amber-800 dark:bg-amber-950/20 dark:text-amber-400',
  '': 'border-gray-200 bg-gray-50/50 text-gray-700 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-950/20 dark:text-gray-400',
};

export function PlanBadge({ type, className }: PlanBadgeProps) {
  if (!type) return null;

  return (
    <Badge className={cn(badgeStyles[type] || '', className)}>{type}</Badge>
  );
}

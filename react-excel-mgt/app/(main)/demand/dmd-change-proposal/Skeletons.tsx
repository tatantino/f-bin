import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

/**
 * Reusable grid of skeleton placeholders
 */
function SkeletonRow({
  columns = 4,
  className = 'h-4 w-20',
}: {
  columns?: number;
  className?: string;
}) {
  // Tailwind requires static class names
  const gridClass =
    {
      2: 'grid grid-cols-2 gap-4',
      3: 'grid grid-cols-3 gap-4',
      4: 'grid grid-cols-4 gap-4',
      5: 'grid grid-cols-5 gap-4',
      6: 'grid grid-cols-6 gap-4',
    }[columns] || 'grid grid-cols-4 gap-4';

  return (
    <div className={gridClass}>
      {Array.from({ length: columns }).map((_, i) => (
        <Skeleton key={i} className={className} />
      ))}
    </div>
  );
}

/**
 * Size assignment card loading state
 */
export function SizeAssignmentCardSkeleton() {
  return (
    <Card>
      <CardContent className="p-6">
        <Skeleton className="mb-4 h-6 w-48" />
        <div className="space-y-6">
          <SkeletonRow columns={6} />

          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-5 w-32" />
              <div className="space-y-2 pl-4">
                {Array.from({ length: 2 }).map((_, j) => (
                  <SkeletonRow key={j} columns={6} />
                ))}
              </div>
            </div>
          ))}

          <div className="mt-4 border-t pt-4">
            <Skeleton className="mb-2 h-5 w-36" />
            <SkeletonRow columns={4} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

/**
 * Base data card loading state
 */
export function BaseDataCardSkeleton() {
  return (
    <Card className="overflow-hidden border bg-white shadow-sm">
      <CardContent className="p-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Left column - Info */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <Skeleton className="h-5 w-48" />
              <Skeleton className="h-4 w-4 rounded-full" />
            </div>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="mb-3 flex">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="ml-2 h-4 w-full" />
              </div>
            ))}
          </div>

          {/* Right column - Table */}
          <div>
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Skeleton className="h-5 w-48" />
                <Skeleton className="h-4 w-4 rounded-full" />
              </div>
              <Skeleton className="h-4 w-16" />
            </div>

            <div className="overflow-hidden rounded-md border">
              <div className="bg-muted/40 p-2">
                <SkeletonRow columns={4} />
              </div>

              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="border-t p-2">
                  <SkeletonRow columns={4} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

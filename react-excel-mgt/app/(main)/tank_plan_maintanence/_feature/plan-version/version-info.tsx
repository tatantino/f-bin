'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { GitBranch } from 'lucide-react';
import { LoadingSpinner } from '@/components/shared/feedbacks/LoadingSpinner';
import { VersionCard } from './version-card';
import { useVersionInfo } from './hooks';
import type { VersionInfoProps } from './types';

export function VersionInfo({
  versionId,
  className,
  variant = 'primary',
  label,
  url,
}: VersionInfoProps) {
  const { version, isLoading, error } = useVersionInfo(versionId);

  if (isLoading) {
    return <LoadingSpinner className={className} />;
  }

  if (error || !version) {
    return (
      <div className={className}>
        <p className="text-sm text-destructive">
          {error || 'Version not found'}
        </p>
      </div>
    );
  }

  const content = (
    <div className="flex flex-col items-center">
      <VersionCard
        version={version}
        variant={variant}
        className={cn(
          url && 'group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)]',
          className
        )}
      />
      {label && (
        <div className="mt-2 flex items-center gap-1.5 rounded-full bg-muted px-2 py-1">
          <GitBranch className="h-3 w-3" />
          <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            {label}
          </span>
        </div>
      )}
    </div>
  );

  if (url) {
    return (
      <Link
        href={url}
        className="group transition-all duration-200 hover:scale-[1.02]"
      >
        {content}
      </Link>
    );
  }

  return content;
}

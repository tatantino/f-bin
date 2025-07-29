/**
 * Horizontal version editor component for creating new plan versions
 */
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { GitBranch, Plus, Tag, Calendar } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { VersionCard } from './version-card';
import { PlanBadge } from '../../_shared/components/badges';
import { ROUTES } from '@/app/config/routes';
import type { PlanVersion } from '../../_shared/types';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const styles = {
  container: 'w-full rounded-lg border  bg-card/5 shadow-sm overflow-hidden',
  cardContent: 'p-0',
  section: 'flex flex-wrap items-center gap-4 px-5 py-3',
  divider: 'w-px self-stretch bg-border/40 mx-1',
  field: 'flex items-center gap-2',
  label:
    'flex items-center text-xs font-medium whitespace-nowrap pl-2 py-1 rounded',
  labelText: 'mr-0.5 text-muted-foreground',
  headerIcon: 'mr-1 h-3.5 w-3.5 text-primary',
  content: 'flex-1',
  dateButton: cn(
    'h-8 w-[120px] text-sm font-medium justify-center text-center',
    'rounded-md border-input/50 bg-card/50',
    'hover:bg-primary/5 hover:border-primary/30',
    'transition-colors duration-200'
  ),
  select: cn(
    'h-8 w-[90px] text-xs border-0 px-2 bg-transparent',
    'hover:bg-primary/5',
    'focus:ring-0 focus:ring-offset-0',
    'focus-visible:ring-0 focus-visible:ring-offset-0'
  ),
  parentBadge: cn(
    'flex items-center gap-1.5 px-3 py-1',
    'bg-card hover:bg-primary/5',
    'border-input/50 hover:border-primary/30',
    'text-xs font-medium text-foreground/90',
    'transition-all duration-200'
  ),
} as const;

function Field({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.field}>
      <div className={styles.label}>
        <Icon className={styles.headerIcon} />
        <span className={styles.labelText}>{label}:</span>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

type VersionType = 'Weekly' | 'Long-term';

interface Props {
  newVersionInfo: PlanVersion;
  onVersionChange: (version: PlanVersion) => void;
  type: VersionType;
  parentVersion?: PlanVersion;
}

export function HorizontalVersionEditor({
  newVersionInfo,
  onVersionChange,
  type,
  parentVersion,
}: Props) {
  const [date, setDate] = useState<Date>(() => new Date());

  useEffect(() => {
    const formattedDate = format(date, 'yyyy-MM-dd');
    if (newVersionInfo.plan_version !== formattedDate) {
      onVersionChange({ ...newVersionInfo, plan_version: formattedDate });
    }
  }, []);

  const tagOptions =
    type === 'Weekly'
      ? [
          { value: 'none', label: 'No Tag' },
          { value: '18MP', label: <PlanBadge type="18MP" /> },
        ]
      : [
          { value: 'none', label: 'No Tag' },
          { value: 'GB', label: <PlanBadge type="GB" /> },
        ];

  if (!newVersionInfo) return null;

  return (
    <Card className={styles.container}>
      <CardContent className={styles.cardContent}>
        <div className={styles.section}>
          <Field icon={Plus} label="New Version">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className={styles.dateButton}>
                  {format(date, 'yyyy-MM-dd')}
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto rounded-md border-border/40 p-0 shadow-md"
                align="start"
              >
                <CalendarComponent
                  mode="single"
                  selected={date}
                  onSelect={newDate => {
                    if (newDate) {
                      setDate(newDate);
                      onVersionChange({
                        ...newVersionInfo,
                        plan_version: format(newDate, 'yyyy-MM-dd'),
                      });
                    }
                  }}
                  initialFocus
                  className="rounded-md"
                />
              </PopoverContent>
            </Popover>
          </Field>

          <div className={styles.divider} />

          <Field icon={Tag} label="Tag">
            <Select
              value={newVersionInfo.plan_official || 'none'}
              onValueChange={value =>
                onVersionChange({
                  ...newVersionInfo,
                  plan_official: value === 'none' ? '' : value,
                })
              }
            >
              <SelectTrigger
                className={cn(styles.select, 'hover:bg-primary/5')}
              >
                <SelectValue placeholder="Select tag" className="text-xs" />
              </SelectTrigger>
              <SelectContent className="min-w-[90px] rounded-md border-border/40 p-1">
                {tagOptions.map(option => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    className="rounded-sm text-xs"
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <div className={styles.divider} />

          <Field icon={Calendar} label="Type">
            <div className="flex items-center">
              <PlanBadge type={type} />
            </div>
          </Field>

          {parentVersion && (
            <>
              <div className={styles.divider} />

              <Field icon={GitBranch} label="Parent">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={`${ROUTES.PLAN_DETAILS}?id=${parentVersion.plan_master_id}`}
                        className="flex items-center gap-1.5"
                      >
                        <Badge variant="outline" className={styles.parentBadge}>
                          <span className="font-medium">
                            {parentVersion.plan_version}
                          </span>
                          <span className="text-muted-foreground/60">
                            v{parentVersion.plan_version_no}
                          </span>
                        </Badge>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent
                      side="bottom"
                      align="end"
                      sideOffset={4}
                      className="rounded-md border-border/40 p-0 shadow-md"
                    >
                      <VersionCard version={parentVersion} />
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Field>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

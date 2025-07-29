'use client';

import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { CalendarIcon } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import type { PlanVersion } from '../types';

interface VersionEditorProps {
  version: PlanVersion;
  onChange?: (version: PlanVersion) => void;
  className?: string;
}

export function VersionEditor({
  version,
  onChange,
  className,
}: VersionEditorProps) {
  const [localVersion, setLocalVersion] = useState<PlanVersion>(version);
  const [date, setDate] = useState<Date>(() => {
    try {
      return new Date(version.plan_version);
    } catch {
      return new Date();
    }
  });

  useEffect(() => {
    setLocalVersion(version);
    try {
      setDate(new Date(version.plan_version));
    } catch {
      setDate(new Date());
    }
  }, [version]);

  const handlePlanVersionChange = (value: string) => {
    const newVersion = {
      ...localVersion,
      plan_version: value,
    };
    setLocalVersion(newVersion);
    onChange?.(newVersion);
  };

  const handleDateSelect = (newDate: Date | undefined) => {
    if (newDate) {
      const formattedDate = format(newDate, 'yyyy-MM-dd');
      setDate(newDate);
      handlePlanVersionChange(formattedDate);
    }
  };

  const handleTagChange = (checked: boolean) => {
    const newVersion = {
      ...localVersion,
      plan_official: checked
        ? localVersion.plan_type === 'Long-term'
          ? 'GB'
          : '18MP'
        : '',
    };
    setLocalVersion(newVersion);
    onChange?.(newVersion);
  };

  return (
    <div className={cn('space-y-6', className)}>
      <div className="flex items-center gap-3">
        <div className="flex flex-col gap-1.5">
          <Label
            htmlFor="plan-version"
            className="pl-12 text-sm font-medium text-muted-foreground"
          >
            Plan Version
          </Label>
          <div className="flex items-center gap-1">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  className={cn(
                    'h-8 w-8 p-0 hover:bg-muted/50',
                    date && 'text-primary'
                  )}
                >
                  <CalendarIcon className="h-3.5 w-3.5" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={handleDateSelect}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <Input
              id="plan-version"
              value={localVersion.plan_version}
              onChange={e => handlePlanVersionChange(e.target.value)}
              placeholder="YYYY-MM-DD"
              className="h-8 w-[100px] bg-muted/50 text-sm font-medium ring-offset-background placeholder:text-muted-foreground/50 focus-visible:ring-1 focus-visible:ring-primary"
            />
          </div>
        </div>
        <div className="h-[52px] w-px bg-muted/30" />
        <div className="flex flex-col gap-1.5">
          <Label
            htmlFor="version-tag"
            className="text-sm font-medium text-muted-foreground"
          >
            <span className="text-sm font-medium">
              {localVersion.plan_official
                ? localVersion.plan_official
                : `No ${localVersion.plan_type === 'Long-term' ? 'GB' : '18MP'} Tag`}
            </span>
          </Label>
          <div className="flex h-8 items-center gap-2">
            <Switch
              id="version-tag"
              checked={!!localVersion.plan_official}
              onCheckedChange={handleTagChange}
              className="data-[state=checked]:bg-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

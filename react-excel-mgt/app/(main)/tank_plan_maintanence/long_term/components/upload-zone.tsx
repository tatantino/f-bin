/**
 * File upload zone with drag and drop support
 */
'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Loader2, Upload } from 'lucide-react';

interface UploadZoneProps {
  onFileSelect: (file: File) => void;
  isLoading?: boolean;
  currentStep?: number;
  totalSteps?: number;
  stepLabel?: string;
  title?: string;
  description?: string;
  acceptedFileTypes?: string;
}

export function UploadZone({
  onFileSelect,
  isLoading = false,
  currentStep = 0,
  totalSteps = 1,
  stepLabel = '',
  title = 'Upload File',
  description = 'Drag & drop file here, or click the button below',
  acceptedFileTypes = '.xlsx,.xls,.csv',
}: UploadZoneProps) {
  const [isDragging, setIsDragging] = useState(false);

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
    setIsDragging(true);
  }

  function handleDragLeave() {
    setIsDragging(false);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) onFileSelect(file);
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.[0]) {
      onFileSelect(e.target.files[0]);
    }
  }

  // Calculate progress percentage
  const progressPercentage = Math.round(((currentStep + 1) / totalSteps) * 100);

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={cn(
        'relative w-full max-w-2xl rounded-xl border-2 border-dashed bg-card/50 transition-all duration-200',
        'before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-muted/50 before:to-transparent before:opacity-50',
        isDragging
          ? 'scale-[0.99] border-primary bg-primary/5 before:opacity-0'
          : 'border-border/50 hover:border-border hover:bg-card/80',
        isLoading && 'pointer-events-none'
      )}
    >
      <div className="relative flex flex-col items-center gap-6 px-6 py-12">
        {/* Icon area */}
        <div
          className={cn(
            'rounded-full p-6 ring-8 ring-background/50 transition-all duration-200',
            isDragging ? 'scale-110 bg-primary/20' : 'bg-primary/10'
          )}
        >
          {isLoading ? (
            <div className="relative">
              <Loader2 className="h-10 w-10 animate-spin text-primary" />
              <div className="absolute inset-0 animate-pulse rounded-full bg-primary/10" />
            </div>
          ) : (
            <Upload className="h-10 w-10 text-primary" />
          )}
        </div>

        {/* Title and description */}
        <div className="space-y-2 text-center">
          <h3 className="text-2xl font-semibold tracking-tight">
            {isLoading ? (
              <span className="inline-flex items-center gap-3">
                {stepLabel}
                <span className="inline-flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <span
                      key={i}
                      className={cn(
                        'h-1 w-1 rounded-full bg-primary',
                        'animate-bounce',
                        { 'animation-delay-200': i === 1 },
                        { 'animation-delay-400': i === 2 }
                      )}
                    />
                  ))}
                </span>
              </span>
            ) : (
              title
            )}
          </h3>
          <p className="text-base text-muted-foreground">
            {isDragging
              ? 'Release to Upload'
              : isLoading
                ? 'Please wait while we process your file'
                : description}
          </p>
        </div>

        {/* Progress bar (when loading) */}
        {isLoading && (
          <div className="w-full max-w-xs space-y-2">
            <div className="h-1 w-full overflow-hidden rounded-full bg-primary/10">
              <div
                className="h-full bg-primary transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Progress</span>
              <span>{progressPercentage}%</span>
            </div>
          </div>
        )}

        {/* File select button (when not loading) */}
        {!isLoading && (
          <div className="flex items-center gap-2">
            <label className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg">
                <div
                  className={cn(
                    'relative inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground shadow-sm',
                    'before:absolute before:inset-0 before:bg-white before:opacity-0 before:transition-opacity hover:before:opacity-10',
                    'active:scale-95',
                    'transition-all duration-200'
                  )}
                >
                  <Upload className="h-4 w-4" />
                  Select File
                </div>
              </div>
              <input
                type="file"
                className="hidden"
                accept={acceptedFileTypes}
                onChange={handleFileChange}
                disabled={isLoading}
              />
            </label>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Upload component for long-term plan Excel files
 */
'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ErrorDisplay } from '../../_shared/components/error-display';
import { ImportStepsCard } from './import-steps-card';
import { UploadZone } from './upload-zone';
import {
  IMPORT_STEPS,
  IMPORT_STEPS_CARDS,
  ACCEPTED_FILE_TYPES,
  ImportStep,
} from '../config/upload-config';

interface LongTermUploadProps {
  onFileSelect: (file: File) => void;
  isLoading?: boolean;
  errors?: string[];
  onErrorClose?: () => void;
}

export function LongTermUpload({
  onFileSelect,
  isLoading = false,
  errors = [],
  onErrorClose,
}: LongTermUploadProps) {
  const [appear, setAppear] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  // Initial fade-in animation
  useEffect(() => {
    const timer = setTimeout(() => setAppear(false), 50);
    return () => clearTimeout(timer);
  }, []);

  // Step animation during loading
  useEffect(() => {
    if (!isLoading) {
      setCurrentStep(0);
      return;
    }

    const timers = IMPORT_STEPS.map((step: ImportStep, index: number) =>
      setTimeout(() => setCurrentStep(index), step.delay)
    );

    return () => timers.forEach(clearTimeout);
  }, [isLoading]);

  return (
    <div
      className={cn(
        'h-full transition-all duration-300',
        appear ? 'opacity-0' : 'opacity-100'
      )}
    >
      <div className="flex h-full flex-col items-center justify-start">
        {/* Error display */}
        {errors.length > 0 && (
          <div className="mb-4 w-full max-w-2xl">
            <ErrorDisplay
              errors={errors}
              title="Import Error"
              description="Please check your file and try again"
              onClose={onErrorClose}
              variant="error"
            />
          </div>
        )}

        {/* Upload zone */}
        <UploadZone
          onFileSelect={onFileSelect}
          isLoading={isLoading}
          currentStep={currentStep}
          totalSteps={IMPORT_STEPS.length}
          stepLabel={IMPORT_STEPS[currentStep].label}
          title="Upload Long-term Excel File"
          description="Drag & drop file here, or click the button below"
          acceptedFileTypes={ACCEPTED_FILE_TYPES}
        />

        {/* Import steps cards */}
        {!isLoading && (
          <div className="mt-8 grid grid-cols-3 gap-6">
            {IMPORT_STEPS_CARDS.map(step => (
              <ImportStepsCard key={step.step} step={step} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

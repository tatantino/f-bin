/**
 * Configuration for long-term plan upload
 */
import { FileText, Save, Upload } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const ACCEPTED_FILE_TYPES = '.xlsx,.xls,.csv';

export interface ImportStep {
  label: string;
  delay: number;
}

export const IMPORT_STEPS: ImportStep[] = [
  { label: 'Reading file...', delay: 0 },
  { label: 'Validating format...', delay: 1000 },
  { label: 'Processing data...', delay: 2000 },
  { label: 'Checking fields...', delay: 3000 },
];

export interface ImportStepCard {
  step: string;
  title: string;
  icon: LucideIcon;
  desc: string;
  steps: string[];
  color: string;
  iconColor: string;
  iconBg: string;
  ringColor: string;
}

export const IMPORT_STEPS_CARDS: ImportStepCard[] = [
  {
    step: '1',
    title: 'Prepare',
    icon: FileText,
    desc: 'Prepare Excel file',
    steps: [
      'Use worksheet "sheet1"',
      'Match required columns',
      'Fill in data correctly',
    ],
    color: 'from-blue-500/5 to-blue-500/0',
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-500/10',
    ringColor: 'ring-blue-500/10',
  },
  {
    step: '2',
    title: 'Import',
    icon: Upload,
    desc: 'Import Excel file',
    steps: ['Drop or click to Import', 'Review any issues'],
    color: 'from-violet-500/5 to-violet-500/0',
    iconColor: 'text-violet-500',
    iconBg: 'bg-violet-500/10',
    ringColor: 'ring-violet-500/10',
  },
  {
    step: '3',
    title: 'Save',
    icon: Save,
    desc: 'Save the data',
    steps: ['Validate the data', 'Fix if needed', 'Save & Notify'],
    color: 'from-emerald-500/5 to-emerald-500/0',
    iconColor: 'text-emerald-500',
    iconBg: 'bg-emerald-500/10',
    ringColor: 'ring-emerald-500/10',
  },
];

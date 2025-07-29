import {
  FileDown,
  RotateCcw,
  Save,
  Trash2,
  X,
  Check,
  Plus,
  Edit,
  FileUp,
  Eye,
  Search,
  Filter,
  MoreHorizontal,
  Settings,
  RefreshCcw,
  ChevronLeft,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ButtonProps } from '@/components/ui/button';
import type { DialogConfig } from '@/components/shared/dialogs';

type IconConfig = {
  icon: LucideIcon;
  variant?: ButtonProps['variant'];
  confirm?: DialogConfig;
};

type IconTextConfig = IconConfig & {
  text: string;
  loadingText: string;
  size?: ButtonProps['size'];
};

const DEFAULT_CONFIRM_TEXTS = {
  confirmText: 'Confirm',
  cancelText: 'Cancel',
} as const;

export const ICON_CONFIGS = {
  edit: {
    icon: Edit,
    variant: 'ghost',
  },
  delete: {
    icon: Trash2,
    variant: 'ghost',
    confirm: {
      title: 'Confirm Delete',
      description:
        'Are you sure you want to delete this item? This action cannot be undone.',
      ...DEFAULT_CONFIRM_TEXTS,
    },
  },
  refresh: {
    icon: RefreshCcw,
    variant: 'ghost',
  },
  close: {
    icon: X,
    variant: 'ghost',
  },
  add: {
    icon: Plus,
    variant: 'default',
  },
  view: {
    icon: Eye,
    variant: 'ghost',
  },
  search: {
    icon: Search,
    variant: 'ghost',
  },
  filter: {
    icon: Filter,
    variant: 'ghost',
  },
  more: {
    icon: MoreHorizontal,
    variant: 'ghost',
  },
  settings: {
    icon: Settings,
    variant: 'ghost',
  },
  back: {
    icon: ChevronLeft,
    variant: 'ghost',
  },
} as const satisfies Readonly<Record<string, IconConfig>>;

export const ICON_TEXT_CONFIGS = {
  save: {
    text: 'Save',
    loadingText: 'Saving...',
    variant: 'default',
    size: 'sm',
    icon: Save,
    confirm: {
      title: 'Save Changes',
      description: 'Are you sure you want to save the changes?',
      ...DEFAULT_CONFIRM_TEXTS,
    },
  },
  validateAndSave: {
    text: 'Validate & Save',
    loadingText: 'Processing...',
    variant: 'default',
    size: 'sm',
    icon: Save,
  },
  exportExcel: {
    text: 'Export Excel',
    loadingText: 'Exporting...',
    variant: 'outline',
    size: 'sm',
    icon: FileDown,
  },
  importExcel: {
    text: 'Import Excel',
    loadingText: 'Importing...',
    variant: 'outline',
    size: 'sm',
    icon: FileUp,
  },
  edit: {
    text: 'Edit',
    loadingText: 'Loading...',
    variant: 'ghost',
    size: 'sm',
    icon: Edit,
  },
  addNew: {
    text: 'Add New',
    loadingText: 'Adding...',
    variant: 'default',
    size: 'sm',
    icon: Plus,
  },
  deleteItem: {
    text: 'Delete',
    loadingText: 'Deleting...',
    variant: 'destructive',
    size: 'sm',
    icon: Trash2,
    confirm: {
      title: 'Delete Item',
      description:
        'Are you sure you want to delete this item? This action cannot be undone.',
      ...DEFAULT_CONFIRM_TEXTS,
    },
  },
  resetForm: {
    text: 'Reset Form',
    loadingText: 'Resetting...',
    variant: 'ghost',
    size: 'sm',
    icon: RotateCcw,
    confirm: {
      title: 'Reset Form',
      description:
        'Are you sure you want to reset the form? All unsaved changes will be lost.',
      ...DEFAULT_CONFIRM_TEXTS,
    },
  },
  cancel: {
    text: 'Cancel',
    loadingText: 'Canceling...',
    variant: 'ghost',
    size: 'sm',
    icon: X,
  },
  confirm: {
    text: 'Confirm',
    loadingText: 'Confirming...',
    variant: 'default',
    size: 'sm',
    icon: Check,
  },
  reUpload: {
    text: 'Re-upload',
    loadingText: 'Loading...',
    variant: 'outline',
    size: 'sm',
    icon: FileUp,
    confirm: {
      title: 'Re-upload File',
      description:
        'Are you sure you want to re-upload? All unsaved changes will be lost.',
      ...DEFAULT_CONFIRM_TEXTS,
    },
  },
} as const satisfies Readonly<Record<string, IconTextConfig>>;

// Action types derived from configs
export type IconAction = keyof typeof ICON_CONFIGS;
export type IconTextAction = keyof typeof ICON_TEXT_CONFIGS;

/**
 * Cell component for displaying record status with appropriate icons and colors
 */
import React from 'react';
import { RefreshCw, X, Plus } from 'lucide-react';
import { CHANGE_TYPE } from '../config';

interface ChangeTypeCellProps {
  status?: string;
}

interface StatusConfig {
  icon: React.ReactNode;
  label: string;
  textColor: string;
}

const STATUS_CONFIG: Record<string, StatusConfig> = {
  [CHANGE_TYPE.DELETE]: {
    icon: <X className="h-4 w-4 text-red-600" />,
    label: 'Delete',
    textColor: 'text-red-600',
  },
  [CHANGE_TYPE.UPDATE]: {
    icon: <RefreshCw className="h-4 w-4 text-blue-600" />,
    label: 'Update',
    textColor: 'text-blue-600',
  },
  [CHANGE_TYPE.NEW]: {
    icon: <Plus className="h-4 w-4 text-green-600" />,
    label: 'New',
    textColor: 'text-green-600',
  },
};

export function ChangeTypeCell({ status }: ChangeTypeCellProps) {
  if (!status || !STATUS_CONFIG[status]) return null;

  const { icon, label, textColor } = STATUS_CONFIG[status];

  return (
    <div className="flex items-center justify-center">
      {icon}
      <span className={`ml-2 text-xs ${textColor}`}>{label}</span>
    </div>
  );
}

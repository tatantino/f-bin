/**
 * Action cell component for delete/restore operations on composition override records
 */
import React from 'react';
import { Trash2, Undo2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CHANGE_TYPE } from '../config';
import type { CompositionOverrideItem } from '../config';

interface ActionCellProps {
  row: CompositionOverrideItem;
  onToggleStatus: (row: CompositionOverrideItem) => void;
  onDeleteRow: (row: CompositionOverrideItem) => void;
}

export function ActionCell({
  row,
  onToggleStatus,
  onDeleteRow,
}: ActionCellProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    if (!row.override_id) {
      onDeleteRow(row);
    } else {
      onToggleStatus(row);
    }
  };

  const isNewRecord = !row.override_id;
  const isDeleted = row.change_type === CHANGE_TYPE.DELETE;

  const icon =
    isNewRecord || !isDeleted ? (
      <Trash2 className="h-4 w-4" />
    ) : (
      <Undo2 className="h-4 w-4" />
    );

  const colorClass = isDeleted
    ? 'text-green-600 hover:text-green-700'
    : 'text-red-600 hover:text-red-700';

  const dataStatus = isNewRecord ? 'new' : isDeleted ? 'deleted' : 'existing';

  return (
    <div className="flex justify-center items-center h-8">
      <Button
        variant="ghost"
        size="sm"
        onClick={handleClick}
        className={colorClass}
        data-status={dataStatus}
      >
        {icon}
      </Button>
    </div>
  );
}

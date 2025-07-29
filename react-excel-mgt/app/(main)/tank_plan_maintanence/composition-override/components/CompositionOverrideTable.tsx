/**
 * Table component for composition override data with editable cells and status indicators
 */
import { IconTextButton } from '@/components/shared/buttons/IconTextButton';
import { DataTable } from '@/components/shared/tables/excel-data-table';
import { DataGridColumn } from '@/components/shared/tables/excel-data-table/types';
import { ActionCell } from './ActionCell';
import { ChangeTypeCell } from './ChangeTypeCell';
import { useCompositionOverrideData } from '../hooks';
import {
  compositionOverrideTableColumns,
  type CompositionOverrideItem,
} from '../config';

/**
 * Renders the composition override table with custom columns and actions
 */
export function CompositionOverrideTable() {
  const {
    compositionOverrides: data,
    isLoading,
    isError,
    error,
    hasChanges,
    isSaving,
    updateCounter,
    updateOverrides,
    addNewRow,
    toggleDeleteStatus,
    deleteRow,
    saveChanges,
  } = useCompositionOverrideData();

  if (isError) {
    return (
      <div className="p-4 text-sm text-red-500">
        Error: {error instanceof Error ? error.message : 'Failed to load data'}
      </div>
    );
  }

  const tableColumns: DataGridColumn<CompositionOverrideItem>[] = [
    {
      key: 'actions' as keyof CompositionOverrideItem,
      label: 'Actions',
      type: 'text',
      meta: {
        nonEditable: true,
        customRenderer: (_, context) =>
          context && context.rowIndex < data.length ? (
            <ActionCell
              row={data[context.rowIndex]}
              onToggleStatus={toggleDeleteStatus}
              onDeleteRow={deleteRow}
            />
          ) : null,
      },
    },
    {
      ...compositionOverrideTableColumns[0],
      meta: {
        ...compositionOverrideTableColumns[0].meta,
        customRenderer: (_, context) =>
          context && context.rowIndex < data.length ? (
            <ChangeTypeCell status={data[context.rowIndex].change_type || ''} />
          ) : null,
      },
    },
    ...compositionOverrideTableColumns.slice(1),
  ];

  return (
    <DataTable
      data={data}
      columns={tableColumns}
      isLoading={isLoading}
      editConfig={{
        allowEdit: true,
        onDataChange: updateOverrides,
      }}
      headerStartContent={
        <IconTextButton
          action="addNew"
          text="Add Row"
          variant="outline"
          onClick={addNewRow}
          className="text-black"
        />
      }
      headerEndContent={
        <IconTextButton
          action="save"
          onClick={saveChanges}
          disabled={!hasChanges || isSaving || !data.length}
          isLoading={isSaving}
          className="w-24"
        />
      }
      columnToggle={{ enabled: true }}
      key={`override-table-${updateCounter}`}
      idField={row => String(row.override_id || `row_${Math.random()}`)}
    />
  );
}

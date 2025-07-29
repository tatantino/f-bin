'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { compositionOverrideApi } from '../api';
import { JsonView } from './common/JsonView';
import { cn } from '@/lib/utils';

interface CompositionOverride {
  override_id?: string;
  override_type_no: number;
  override_type: string;
  tank: string;
  override_variable: string;
  override_value: string;
  period_from?: string;
  period_to?: string;
  effective_from?: string;
  effective_to?: string;
  comment?: string;
  created_by: string;
  updated_by: string;
  affect_module?: string;
}

const DEFAULT_OVERRIDE: CompositionOverride = {
  override_type_no: 1,
  override_type: '',
  tank: '',
  override_variable: '',
  override_value: '',
  created_by: 'test_user',
  updated_by: 'test_user',
  affect_module: '',
};

// Excel-like styles
const excelTableStyles = {
  table: 'border-collapse w-full',
  header: 'bg-gray-100 font-medium text-sm',
  headerCell: 'px-2 py-3 border border-gray-200 text-center',
  row: 'hover:bg-gray-50',
  cell: 'p-0 border border-gray-200',
  input:
    'border-0 w-full h-full px-2 py-3 focus:ring-0 focus:outline-none focus-visible:ring-0',
};

export default function CompositionOverrideEditor() {
  const [overrides, setOverrides] = useState<CompositionOverride[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [requestData, setRequestData] = useState<any>(null);
  const [responseData, setResponseData] = useState<any>(null);

  useEffect(() => {
    loadOverrides();
  }, []);

  const loadOverrides = async () => {
    setLoading(true);
    try {
      setError('');
      const response = await compositionOverrideApi.getOverrides();
      setOverrides((response as CompositionOverride[]) || []);
      setResponseData(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load overrides');
    } finally {
      setLoading(false);
    }
  };

  const handleOverrideChange = (
    index: number,
    field: keyof CompositionOverride,
    value: string
  ) => {
    setOverrides(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const handleSaveOverrides = async () => {
    try {
      setSaving(true);
      setError('');
      setSuccess('');

      const overridesToSave = JSON.parse(JSON.stringify(overrides));
      setRequestData(overridesToSave);

      const result =
        await compositionOverrideApi.saveOverrides(overridesToSave);
      setResponseData(result);

      setSuccess(`Successfully saved ${result.count} overrides`);
      await loadOverrides();

      setTimeout(() => {
        setSuccess('');
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save overrides');
    } finally {
      setSaving(false);
    }
  };

  const addEmptyOverride = () => {
    setOverrides([...overrides, { ...DEFAULT_OVERRIDE }]);
  };

  const removeOverride = (index: number) => {
    setOverrides(overrides.filter((_, i) => i !== index));
  };

  if (loading) {
    return <div className="text-center py-8">Loading overrides...</div>;
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Composition Override Management</CardTitle>
        <CardDescription>
          View and edit composition override records
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between mb-4">
          <Button onClick={loadOverrides} variant="outline" disabled={loading}>
            {loading ? 'Loading...' : 'Refresh'}
          </Button>
          <div className="space-x-2">
            <Button onClick={addEmptyOverride} variant="outline">
              Add Row
            </Button>
            <Button
              onClick={handleSaveOverrides}
              disabled={saving || overrides.length === 0}
            >
              {saving ? 'Saving...' : 'Save Changes'}
            </Button>
          </div>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {success}
          </div>
        )}

        <div className="overflow-x-auto">
          <Table className={excelTableStyles.table}>
            <TableHeader className={excelTableStyles.header}>
              <TableRow>
                <TableHead className={excelTableStyles.headerCell}>
                  Type No
                </TableHead>
                <TableHead className={excelTableStyles.headerCell}>
                  Type
                </TableHead>
                <TableHead className={excelTableStyles.headerCell}>
                  Tank
                </TableHead>
                <TableHead className={excelTableStyles.headerCell}>
                  Variable
                </TableHead>
                <TableHead className={excelTableStyles.headerCell}>
                  Value
                </TableHead>
                <TableHead className={excelTableStyles.headerCell}>
                  Period From
                </TableHead>
                <TableHead className={excelTableStyles.headerCell}>
                  Period To
                </TableHead>
                <TableHead className={excelTableStyles.headerCell}>
                  Effective From
                </TableHead>
                <TableHead className={excelTableStyles.headerCell}>
                  Effective To
                </TableHead>
                <TableHead className={excelTableStyles.headerCell}>
                  Comment
                </TableHead>
                <TableHead className={excelTableStyles.headerCell}>
                  Affect Module
                </TableHead>
                <TableHead className={excelTableStyles.headerCell}>
                  Created By
                </TableHead>
                <TableHead className={excelTableStyles.headerCell}>
                  Updated By
                </TableHead>
                <TableHead className={excelTableStyles.headerCell}>
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {overrides.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={14} className="text-center py-6">
                    No overrides available. Add a new row to get started.
                  </TableCell>
                </TableRow>
              ) : (
                overrides.map((override, index) => (
                  <TableRow
                    key={override.override_id || index}
                    className={excelTableStyles.row}
                  >
                    <TableCell className={excelTableStyles.cell}>
                      <Input
                        className={excelTableStyles.input}
                        value={override.override_type_no || ''}
                        onChange={e =>
                          handleOverrideChange(
                            index,
                            'override_type_no',
                            e.target.value
                          )
                        }
                      />
                    </TableCell>
                    <TableCell className={excelTableStyles.cell}>
                      <Input
                        className={excelTableStyles.input}
                        value={override.override_type || ''}
                        onChange={e =>
                          handleOverrideChange(
                            index,
                            'override_type',
                            e.target.value
                          )
                        }
                      />
                    </TableCell>
                    <TableCell className={excelTableStyles.cell}>
                      <Input
                        className={excelTableStyles.input}
                        value={override.tank || ''}
                        onChange={e =>
                          handleOverrideChange(index, 'tank', e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell className={excelTableStyles.cell}>
                      <Input
                        className={excelTableStyles.input}
                        value={override.override_variable || ''}
                        onChange={e =>
                          handleOverrideChange(
                            index,
                            'override_variable',
                            e.target.value
                          )
                        }
                      />
                    </TableCell>
                    <TableCell className={excelTableStyles.cell}>
                      <Input
                        className={excelTableStyles.input}
                        value={override.override_value || ''}
                        onChange={e =>
                          handleOverrideChange(
                            index,
                            'override_value',
                            e.target.value
                          )
                        }
                      />
                    </TableCell>
                    <TableCell className={excelTableStyles.cell}>
                      <Input
                        className={excelTableStyles.input}
                        type="date"
                        value={override.period_from || ''}
                        onChange={e =>
                          handleOverrideChange(
                            index,
                            'period_from',
                            e.target.value
                          )
                        }
                      />
                    </TableCell>
                    <TableCell className={excelTableStyles.cell}>
                      <Input
                        className={excelTableStyles.input}
                        type="date"
                        value={override.period_to || ''}
                        onChange={e =>
                          handleOverrideChange(
                            index,
                            'period_to',
                            e.target.value
                          )
                        }
                      />
                    </TableCell>
                    <TableCell className={excelTableStyles.cell}>
                      <Input
                        className={excelTableStyles.input}
                        type="date"
                        value={override.effective_from || ''}
                        onChange={e =>
                          handleOverrideChange(
                            index,
                            'effective_from',
                            e.target.value
                          )
                        }
                      />
                    </TableCell>
                    <TableCell className={excelTableStyles.cell}>
                      <Input
                        className={excelTableStyles.input}
                        type="date"
                        value={override.effective_to || ''}
                        onChange={e =>
                          handleOverrideChange(
                            index,
                            'effective_to',
                            e.target.value
                          )
                        }
                      />
                    </TableCell>
                    <TableCell className={excelTableStyles.cell}>
                      <Input
                        className={excelTableStyles.input}
                        value={override.comment || ''}
                        onChange={e =>
                          handleOverrideChange(index, 'comment', e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell className={excelTableStyles.cell}>
                      <Input
                        className={excelTableStyles.input}
                        value={override.affect_module || ''}
                        onChange={e =>
                          handleOverrideChange(
                            index,
                            'affect_module',
                            e.target.value
                          )
                        }
                      />
                    </TableCell>
                    <TableCell className={excelTableStyles.cell}>
                      <Input
                        className={excelTableStyles.input}
                        value={override.created_by || ''}
                        onChange={e =>
                          handleOverrideChange(
                            index,
                            'created_by',
                            e.target.value
                          )
                        }
                      />
                    </TableCell>
                    <TableCell className={excelTableStyles.cell}>
                      <Input
                        className={excelTableStyles.input}
                        value={override.updated_by || ''}
                        onChange={e =>
                          handleOverrideChange(
                            index,
                            'updated_by',
                            e.target.value
                          )
                        }
                      />
                    </TableCell>
                    <TableCell
                      className={cn(excelTableStyles.cell, 'text-center')}
                    >
                      <Button
                        onClick={() => removeOverride(index)}
                        variant="ghost"
                        size="sm"
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        <div className="mt-8">
          <JsonView title="Request Data" data={requestData} />
          <JsonView title="Response Data" data={responseData} />
        </div>
      </CardContent>
    </Card>
  );
}

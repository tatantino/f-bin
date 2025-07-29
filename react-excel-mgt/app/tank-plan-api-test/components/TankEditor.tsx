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
import { toast } from 'sonner';
import { tanksApi } from '../api';
import { Tank } from '../types';
import { JsonView } from './common/JsonView';

export default function TankEditor() {
  const [tanks, setTanks] = useState<Tank[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [requestData, setRequestData] = useState<any>(null);
  const [responseData, setResponseData] = useState<any>(null);

  useEffect(() => {
    loadTanks();
  }, []);

  const loadTanks = async () => {
    setLoading(true);
    try {
      setError('');
      const response = await tanksApi.getTanks();
      setTanks(response || []);
      setResponseData(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load tanks');
    } finally {
      setLoading(false);
    }
  };

  const handleTankChange = (
    index: number,
    field: keyof Tank,
    value: string | number
  ) => {
    setTanks(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const handleSaveTanks = async () => {
    try {
      setSaving(true);
      setError('');
      setSuccess('');

      const tanksToSave = JSON.parse(JSON.stringify(tanks));
      setRequestData(tanksToSave);

      const result = await tanksApi.saveTanks(tanksToSave);
      setResponseData(result);

      setSuccess(`Successfully saved ${result.count} tanks`);

      setTimeout(() => {
        setSuccess('');
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save tanks');
    } finally {
      setSaving(false);
    }
  };

  const addEmptyTank = () => {
    setTanks([
      ...tanks,
      {
        tank: '',
        BU: '',
        region: '',
        region_seq: '',
        location: '',
        iso: '',
        platform: '',
        metal_shop: '',
      },
    ]);
  };

  const removeTank = (index: number) => {
    setTanks(tanks.filter((_, i) => i !== index));
  };

  if (loading) {
    return <div className="text-center py-8">Loading tanks...</div>;
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Tank Management</CardTitle>
        <CardDescription>View and edit tank information</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between mb-4">
          <Button onClick={loadTanks} variant="outline" disabled={loading}>
            {loading ? 'Loading...' : 'Refresh'}
          </Button>
          <div className="space-x-2">
            <Button onClick={addEmptyTank} variant="outline">
              Add Row
            </Button>
            <Button
              onClick={handleSaveTanks}
              disabled={saving || tanks.length === 0}
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

        <div className="rounded-md border overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tank</TableHead>
                <TableHead>BU</TableHead>
                <TableHead>Region</TableHead>
                <TableHead>Region Seq</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>ISO</TableHead>
                <TableHead>Platform</TableHead>
                <TableHead>Metal Shop</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tanks.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={9} className="text-center py-6">
                    {loading
                      ? 'Loading tanks...'
                      : 'No tanks available. Add a new row to get started.'}
                  </TableCell>
                </TableRow>
              ) : (
                tanks.map((tank, index) => (
                  <TableRow key={tank.id || index}>
                    <TableCell>
                      <Input
                        value={tank.tank || ''}
                        onChange={e =>
                          handleTankChange(index, 'tank', e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        value={tank.BU || ''}
                        onChange={e =>
                          handleTankChange(index, 'BU', e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        value={tank.region || ''}
                        onChange={e =>
                          handleTankChange(index, 'region', e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        value={tank.region_seq?.toString() || ''}
                        onChange={e =>
                          handleTankChange(index, 'region_seq', e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        value={tank.location || ''}
                        onChange={e =>
                          handleTankChange(index, 'location', e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        value={tank.iso || ''}
                        onChange={e =>
                          handleTankChange(index, 'iso', e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        value={tank.platform || ''}
                        onChange={e =>
                          handleTankChange(index, 'platform', e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        value={tank.metal_shop || ''}
                        onChange={e =>
                          handleTankChange(index, 'metal_shop', e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() => removeTank(index)}
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

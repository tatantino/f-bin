import { useState, useCallback } from 'react';

export function useTableRefresh() {
  const [tableKey, setTableKey] = useState(0);

  const refreshTable = useCallback(() => {
    setTableKey(prev => prev + 1);
  }, []);

  return {
    tableKey,
    refreshTable,
  } as const;
}

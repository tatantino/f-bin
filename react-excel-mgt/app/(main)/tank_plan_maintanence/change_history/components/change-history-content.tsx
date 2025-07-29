import { useEffect, useRef } from 'react';
import { PageTitle } from '@/components/shared/layouts/PageTitle';
import { ChangeHistoryFilter } from './filter';
import { HistoryTable } from './table';
import { useChangeHistory } from '../hooks';
import { PAGE_TITLE, PAGE_DESCRIPTION, TOOLTIP_CONFIG } from '../config';

/**
 * Main component for the Change History page
 */
export function ChangeHistoryContent() {
  const isInitialized = useRef(false);
  const {
    filteredData,
    loading,
    tanks,
    rcs,
    selectedCategory,
    selectedTank,
    selectedRC,
    dateRange,
    sortConfig,
    setDateRange,
    handleFilterChange,
    handleSort,
    handleSearch,
    refresh,
  } = useChangeHistory();

  // Load data once on initial render
  useEffect(() => {
    if (!isInitialized.current) {
      refresh();
      isInitialized.current = true;
    }
  }, [refresh]);

  return (
    <div className="flex h-full flex-col space-y-4">
      <PageTitle
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        tooltip={TOOLTIP_CONFIG}
      />

      <ChangeHistoryFilter
        loading={loading}
        onRefresh={refresh}
        searchTerm=""
        onSearch={handleSearch}
        tanks={tanks}
        rcs={rcs}
        selectedTank={selectedTank}
        selectedRC={selectedRC}
        selectedCategory={selectedCategory}
        onTankChange={value => handleFilterChange('tank', value)}
        onRCChange={value => handleFilterChange('rc', value)}
        onCategoryChange={value => handleFilterChange('category', value)}
        dateRange={dateRange}
        onDateRangeChange={setDateRange}
      />

      <HistoryTable
        data={filteredData}
        isLoading={loading}
        sortConfig={sortConfig}
        onSort={handleSort}
      />
    </div>
  );
}

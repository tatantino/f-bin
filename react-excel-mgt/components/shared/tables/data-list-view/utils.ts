import type { DateRange } from 'react-day-picker';

// Check if value is a valid date string
function isValidDateString(value: any): boolean {
  return typeof value === 'string' && !isNaN(Date.parse(value));
}

// Sort data based on column key and direction
export function sortData<T extends Record<string, any>>(
  data: T[],
  sortConfig: { key: keyof T; direction: 'asc' | 'desc' }
) {
  const { key, direction } = sortConfig;
  const multiplier = direction === 'asc' ? 1 : -1;

  return [...data].sort((a, b) => {
    // Handle null/undefined values
    if (a[key] == null && b[key] == null) return 0;
    if (a[key] == null) return -1 * multiplier;
    if (b[key] == null) return 1 * multiplier;

    const valueA = a[key];
    const valueB = b[key];

    // Compare dates
    if (isValidDateString(valueA) && isValidDateString(valueB)) {
      return (
        (new Date(valueA).getTime() - new Date(valueB).getTime()) * multiplier
      );
    }

    // Compare strings
    if (typeof valueA === 'string' && typeof valueB === 'string') {
      return valueA.localeCompare(valueB) * multiplier;
    }

    // Compare numbers
    if (typeof valueA === 'number' && typeof valueB === 'number') {
      return (valueA - valueB) * multiplier;
    }

    // Compare booleans
    if (typeof valueA === 'boolean' && typeof valueB === 'boolean') {
      return (valueA === valueB ? 0 : valueA ? 1 : -1) * multiplier;
    }

    // Default comparison as strings
    return String(valueA).localeCompare(String(valueB)) * multiplier;
  });
}

// Filter data with search term and select filters
export function filterData<T extends Record<string, any>>(
  data: T[],
  searchTerm: string,
  filterSelections: Record<string, string>,
  searchFields: Array<keyof T>,
  filterableFields: Array<keyof T>
): T[] {
  if (!data.length) return data;

  // Check if we need to filter at all
  const hasSearchFilter = !!searchTerm && searchFields.length > 0;
  const hasSelectFilter = Object.entries(filterSelections).some(
    ([key, value]) =>
      value !== 'all' && filterableFields.includes(key as keyof T)
  );

  if (!hasSearchFilter && !hasSelectFilter) return data;

  return data.filter(item => {
    // Apply search filter
    if (hasSearchFilter) {
      const normalizedTerm = searchTerm.toLowerCase().trim();
      const matchesSearch = searchFields.some(field => {
        const value = item[field];
        return value && String(value).toLowerCase().includes(normalizedTerm);
      });

      if (!matchesSearch) return false;
    }

    // Apply select filters
    if (hasSelectFilter) {
      for (const field of filterableFields) {
        const fieldName = field as string;
        const selectedValue = filterSelections[fieldName];

        if (selectedValue && selectedValue !== 'all') {
          if (String(item[field] || '') !== selectedValue) {
            return false;
          }
        }
      }
    }

    return true;
  });
}

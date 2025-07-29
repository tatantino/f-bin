/**
 * Supported unit types
 */
type UnitType = 'msqft' | 'sqm';

/**
 * Unit mapping configuration
 */
const unitMap: Record<UnitType, { display: string }> = {
  msqft: { display: 'Mft²' },
  sqm: { display: 'm²' },
};

/**
 * Format unit display
 * @param unit unit string
 * @returns formatted unit string
 */
export const formatDisplayUnit = (unit: string): string => {
  const normalizedUnit = unit.toLowerCase() as UnitType;
  const unitInfo = unitMap[normalizedUnit];

  return unitInfo?.display ?? unit;
};

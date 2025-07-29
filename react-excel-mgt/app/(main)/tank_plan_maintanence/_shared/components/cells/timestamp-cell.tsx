import { DateUtils } from '../../utils/DateUtils';

interface TimestampCellProps {
  timestamp?: string | Date | null;
}

export function TimestampCell({ timestamp }: TimestampCellProps) {
  if (!timestamp) return null;
  return <span>{DateUtils.format(timestamp)}</span>;
}

import { useTankExport } from '../../hooks';
import { IconTextButton } from '@/components/shared/buttons/IconTextButton';
import type { ActionButtonProps } from '../types';

type ExportButtonProps = ActionButtonProps;

export function ExportButton({ data, disabled, onSuccess }: ExportButtonProps) {
  const { handleExport, isExporting } = useTankExport();

  const hasData = Array.isArray(data) && data.length > 0;

  const handleClick = async () => {
    if (!hasData) return;
    const success = await handleExport(data);
    if (success) {
      onSuccess?.(data);
    }
  };

  return (
    <IconTextButton
      action="exportExcel"
      onClick={handleClick}
      disabled={disabled || isExporting || !hasData}
      isLoading={isExporting}
    />
  );
}

import { useFileInput } from '../../../_shared/hooks/useFileInput';
import { useTankImport } from '../../hooks';
import { IconTextButton } from '@/components/shared/buttons/IconTextButton';
import type { ActionButtonProps } from '../types';

type ImportButtonProps = Omit<ActionButtonProps, 'data'>;

export function ImportButton({ disabled, onSuccess }: ImportButtonProps) {
  const { handleImport, isImporting } = useTankImport();

  const { fileInputRef, handleClick, handleChange, inputProps } = useFileInput({
    onFileSelect: async file => {
      const result = await handleImport(file);
      if (result) {
        onSuccess?.(result);
      }
    },
  });

  return (
    <>
      <IconTextButton
        action="importExcel"
        onClick={handleClick}
        disabled={disabled || isImporting}
        isLoading={isImporting}
      />
      <input ref={fileInputRef} onChange={handleChange} {...inputProps} />
    </>
  );
}

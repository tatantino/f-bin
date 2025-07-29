import { useTankSave } from '../../hooks';
import { IconTextButton } from '@/components/shared/buttons/IconTextButton';
import type { ActionButtonProps } from '../types';

interface SaveButtonProps extends ActionButtonProps {
  saveChanges: () => Promise<boolean>;
}

export function SaveButton({
  data,
  disabled,
  onSuccess,
  saveChanges,
}: SaveButtonProps) {
  const { handleSave, isSaving } = useTankSave();

  const handleClick = async () => {
    if (!data?.length) return;

    const success = await handleSave(data, saveChanges);
    if (success) {
      onSuccess?.(data);
    }
  };

  return (
    <IconTextButton
      action="save"
      onClick={handleClick}
      disabled={disabled || isSaving || !data?.length}
      isLoading={isSaving}
    />
  );
}

import { useRouter } from 'next/navigation';
import { PageTitle } from '@/components/shared/layouts/PageTitle';
import { IconTextButton } from '@/components/shared/buttons/IconTextButton';
import { ROUTES } from '@/app/config/routes';
import type { PageTitleProps } from '@/types/page';

export function VersionHeader({ title, description, tooltip }: PageTitleProps) {
  const router = useRouter();

  const handleCreateClick = () => {
    router.push(ROUTES.DMD_CHANGE_CREATE);
  };

  return (
    <PageTitle
      title={title}
      description={description}
      tooltip={tooltip}
      actions={
        <IconTextButton
          action="addNew"
          text="New Demand Change"
          onClick={handleCreateClick}
        />
      }
    />
  );
}

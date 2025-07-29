import { useRouter } from 'next/navigation';
import { PageTitle } from '@/components/shared/layouts/PageTitle';
import { IconTextButton } from '@/components/shared/buttons/IconTextButton';
import {
  PAGE_TITLE,
  HEADER_BUTTON_ROUTE,
  HEADER_BUTTON_TEXT,
  HEADER_BUTTON_TYPE,
} from '../config';

export function VersionHeader() {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <PageTitle title={PAGE_TITLE} />
        <IconTextButton
          action={HEADER_BUTTON_TYPE}
          text={HEADER_BUTTON_TEXT}
          onClick={() => router.push(HEADER_BUTTON_ROUTE)}
        />
      </div>
    </>
  );
}

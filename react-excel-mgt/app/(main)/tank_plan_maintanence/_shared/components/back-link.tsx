import { ROUTES } from '@/app/config/routes';
import { BackLink as SharedBackLink } from '@/components/shared/navigation';

export function BackLink() {
  return <SharedBackLink to={ROUTES.VERSION_LIST} />;
}

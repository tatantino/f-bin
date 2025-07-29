import { redirect } from 'next/navigation';
import { ROUTES } from '@/app/config/routes';

export default function Home() {
  redirect(ROUTES.VERSION_LIST);
}

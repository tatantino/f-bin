'use client';

import {
  Calendar,
  Settings,
  History,
  List,
  ChevronRight,
  Home,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ROUTES, TANK_PLAN_PATH } from '@/app/config/routes';
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

const NAV_ITEMS = [
  { title: 'Version List', href: ROUTES.VERSION_LIST, icon: List },
  { title: 'History', href: ROUTES.HISTORY, icon: History },
  { title: 'Upload Long-term Plan', href: ROUTES.LONG_TERM, icon: Calendar },
  { title: 'Tank Detail', href: ROUTES.TANK_DETAILS, icon: Settings },
  {
    title: 'Composition Override',
    href: ROUTES.COMPOSITION_OVERRIDE,
    icon: Settings,
  },
  {
    title: 'DMD Change Create',
    href: ROUTES.DMD_CHANGE_CREATE,
    icon: Settings,
  },
  {
    title: 'DMD Change List',
    href: ROUTES.DMD_CHANGE_LIST,
    icon: Settings,
  },
];

const BREADCRUMB_LABELS: Record<string, string> = {
  tank_plan_maintanence: 'Tank Plan Maintanence',
  long_term: 'Upload Long-term Plan',
  tank_details: 'Tank Detail',
  plan: 'Plan',
};

function Breadcrumb() {
  const pathname = usePathname();
  const paths = pathname.split('/').filter(Boolean);

  return (
    <nav className="flex h-14 items-center gap-1 bg-background px-4 text-sm text-muted-foreground">
      <Link
        href={TANK_PLAN_PATH}
        className="flex items-center hover:text-foreground"
      >
        <Home className="h-4 w-4" />
      </Link>
      {paths.map((path, index) => (
        <div key={path} className="flex items-center gap-1">
          <ChevronRight className="h-4 w-4" />
          <Link
            href={`/${paths.slice(0, index + 1).join('/')}`}
            className={cn(
              'hover:text-foreground',
              index === paths.length - 1 && 'text-foreground'
            )}
          >
            {BREADCRUMB_LABELS[path] || path}
          </Link>
        </div>
      ))}
    </nav>
  );
}

function Nav() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="h-14 border-b px-4">
        <span className="text-lg font-semibold">Tank Plan System</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {NAV_ITEMS.map(({ title, href, icon: Icon }) => (
            <SidebarMenuItem key={href}>
              <Link
                href={href}
                className={cn(
                  'flex w-full items-center gap-3 px-3 py-2 transition-colors hover:bg-accent hover:text-accent-foreground',
                  pathname === href && 'bg-accent text-accent-foreground'
                )}
              >
                <Icon className="h-4 w-4" />
                {title}
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider defaultOpen>
      <Nav />
      <div className="flex flex-1 flex-col overflow-hidden">
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4">
            <SidebarTrigger />
            <Breadcrumb />
          </header>
          <main className="flex-1 overflow-auto">
            <div className="container flex flex-col gap-4 p-4">{children}</div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

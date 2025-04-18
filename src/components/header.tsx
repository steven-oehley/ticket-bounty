'use client';

import Link from 'next/link';

import { LucideTicket } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { homePath, ticketsPath } from '@/constants/paths';

import ThemeSwitcher from './theme/theme-switcher';

const Header = () => {
  return (
    <nav className="supports-backdrop-blur:bg-background/60 bg-background/95 fixed top-0 right-0 left-0 z-20 flex w-full justify-between border-b px-12 py-2.5 backdrop-blur">
      <div>
        <Button asChild variant="ghost">
          <Link href={homePath}>
            <LucideTicket />
            Ticket Bounty
          </Link>
        </Button>
      </div>
      <div className="flex gap-x-2">
        <Button asChild>
          <Link href={ticketsPath}>Tickets Page</Link>
        </Button>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};
export default Header;

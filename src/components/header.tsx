'use client';

import Link from 'next/link';

import { LucideLogOut, LucideTicket } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  homePath,
  signInPath,
  signUpPath,
  ticketsPath,
} from '@/constants/paths';
import { signOut } from '@/features/auth/actions/sign-out';

import SubmitBtn from './form/submit-btn';
import ThemeSwitcher from './theme/theme-switcher';

const Header = () => {
  const navItems = (
    <>
      <Button asChild>
        <Link href={ticketsPath}>Tickets Page</Link>
      </Button>
      <Button asChild variant="outline">
        <Link href={signInPath}>Sign In</Link>
      </Button>
      <Button asChild variant="outline">
        <Link href={signUpPath}>Sign Up</Link>
      </Button>
      <form action={signOut}>
        <SubmitBtn icon={<LucideLogOut />} label="Sign Out" />
      </form>
    </>
  );
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
        <ThemeSwitcher />
        {navItems}
      </div>
    </nav>
  );
};
export default Header;

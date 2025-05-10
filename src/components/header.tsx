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
import { useAuth } from '@/features/auth/hooks/use-auth';

import SubmitBtn from './form/submit-btn';
import ThemeSwitcher from './theme/theme-switcher';
import { Spinner } from './spinner';

const Header = () => {
  // this line makes all static routes change to dynamic routes
  // because header in layout and uses cookies - dynamic feature
  // const { user } = await getAuth();
  const { user, isFetched } = useAuth();

  if (!isFetched) {
    return null;
  }

  const navItems = !isFetched ? (
    <Spinner size="sm" />
  ) : user ? (
    <>
      <Button asChild>
        <Link href={ticketsPath}>Tickets Page</Link>
      </Button>
      <form action={signOut}>
        <SubmitBtn icon={<LucideLogOut />} label="Sign Out" />
      </form>
    </>
  ) : (
    <>
      <Button asChild variant="outline">
        <Link href={signInPath}>Sign In</Link>
      </Button>
      <Button asChild variant="outline">
        <Link href={signUpPath}>Sign Up</Link>
      </Button>
    </>
  );
  return (
    <nav className="animate-in slide-in-from-top supports-backdrop-blur:bg-background/60 bg-background/95 fixed top-0 right-0 left-0 z-20 flex w-full justify-between border-b px-12 py-2.5 backdrop-blur duration-500">
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

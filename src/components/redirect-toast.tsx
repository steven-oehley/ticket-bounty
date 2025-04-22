'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { toast } from 'sonner';

import { consumeCookiedByKey } from '@/actions/cookies';

// component rather than custom hook
// This is a client component that will be used to show a toast message when the user is redirected
// allows us to keep page a server component

const RedirectToast = () => {
  const pathname = usePathname();

  useEffect(() => {
    const showCookieToast = async () => {
      const message = await consumeCookiedByKey('toast');

      if (message) {
        toast.success(message);
      }
    };

    showCookieToast();
  }, [pathname]);

  return null;
};
// This component does not render anything, it just shows a toast message
// when the user is redirected

export default RedirectToast;

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { User } from '@/generated/prisma';

import { getAuth } from '../queries/get-auth';

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isFetched, setFetched] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const fetchUser = async () => {
      const { user } = await getAuth();
      setUser(user);
      setFetched(true);
    };

    fetchUser();
  }, [pathname]);

  return { isFetched, user };
};

export { useAuth };

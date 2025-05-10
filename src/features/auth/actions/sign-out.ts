'use server';

import { redirect } from 'next/navigation';

import { signInPath } from '@/constants/paths';
import { invalidateSession } from '@/lib/lucia';

import { getAuth } from '../queries/get-auth';
import { deleteSessionCookie } from '../utils/session-cookie';

export const signOut = async () => {
  const { session } = await getAuth();
  if (!session) {
    redirect(signInPath);
  }

  await invalidateSession(session.id);
  await deleteSessionCookie();

  redirect(signInPath);
};

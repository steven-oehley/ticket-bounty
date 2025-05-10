'use server';

import { redirect } from 'next/navigation';

import { z } from 'zod';

import {
  ActionState,
  fromErrorToActionState,
  toActionState,
} from '@/components/form/utils/to-action-state';
import { ticketsPath } from '@/constants/paths';
import { verifyPasswordHash } from '@/features/password/utils/hash-and-verify';
import { createSession } from '@/lib/lucia';
import { prisma } from '@/lib/prisma';
import { generateRandomToken } from '@/utils/crypto';

import { setSessionCookie } from '../utils/session-cookie';

const signInSchema = z.object({
  email: z
    .string()
    .nonempty('Email is required')
    .email('Invalid email address'),
  password: z
    .string()
    .nonempty('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .max(128, 'Password must be at most 128 characters long'),
});

export const signIn = async (actionState: ActionState, formData: FormData) => {
  try {
    const data = signInSchema.parse({
      // could also get all entries like this:
      // Object.fromEntries(formData)
      email: formData.get('email'),
      password: formData.get('password'),
    });

    const user = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!user) {
      // vague to prevent user enumeration
      // this is a security measure to prevent user enumeration
      // by returning the same error message for both cases
      return toActionState('ERROR', 'Incorrect email or password', formData);
    }

    const validPassword = await verifyPasswordHash(
      user.passwordHash,
      data.password,
    );

    if (!validPassword) {
      return toActionState('ERROR', 'Incorrect email or password', formData);
    }

    const sessionToken = generateRandomToken();
    const session = await createSession(sessionToken, user.id);

    await setSessionCookie(sessionToken, session.expiresAt);
  } catch (error) {
    return fromErrorToActionState(error, formData);
  }
  redirect(ticketsPath);
};

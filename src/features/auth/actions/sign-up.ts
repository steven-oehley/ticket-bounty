'use server';

import { redirect } from 'next/navigation';

import { z } from 'zod';

import {
  ActionState,
  fromErrorToActionState,
  toActionState,
} from '@/components/form/utils/to-action-state';
import { ticketsPath } from '@/constants/paths';
import { hashPassword } from '@/features/password/utils/hash-and-verify';
import { Prisma } from '@/generated/prisma';
import { createSession } from '@/lib/lucia';
import { prisma } from '@/lib/prisma';
import { generateRandomToken } from '@/utils/crypto';

import { setSessionCookie } from '../utils/session-cookie';

const signUpSchema = z
  .object({
    confirmPassword: z
      .string()
      .nonempty('Confirm password is required')
      .min(8, 'Confirm password must be at least 8 characters long')
      .max(128, 'Confirm password must be at most 128 characters long'),
    email: z
      .string()
      .nonempty('Email is required')
      .email('Invalid email address'),
    password: z
      .string()
      .nonempty('Password is required')
      .min(8, 'Password must be at least 8 characters long')
      .max(128, 'Password must be at most 128 characters long'),
    username: z
      .string()
      .nonempty('Username is required')
      .min(5, 'Username must be at least 3 characters long')
      .max(32, 'Username must be at most 32 characters long')
      .trim()
      .refine((val) => !val.includes(' '), 'Username cannot contain spaces'),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Passwords do not match',
        path: ['confirmPassword'],
      });
    }
  });

export const signUp = async (actionState: ActionState, formData: FormData) => {
  try {
    const data = signUpSchema.parse({
      confirmPassword: formData.get('confirmPassword'),
      email: formData.get('email'),
      password: formData.get('password'),
      username: formData.get('username'),
    });

    const passwordHash = await hashPassword(data.password);

    const user = await prisma.user.create({
      data: {
        email: data.email,
        passwordHash,
        username: data.username,
      },
    });
    const sessionToken = generateRandomToken();
    const session = await createSession(sessionToken, user.id);

    await setSessionCookie(sessionToken, session.expiresAt);
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === 'P2002'
    ) {
      return toActionState(
        'ERROR',
        'Either email or username is already in use',
        formData,
      );
    }

    return fromErrorToActionState(error, formData);
  }
  redirect(ticketsPath);
};

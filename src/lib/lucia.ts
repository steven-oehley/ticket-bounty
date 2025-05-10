import { hashToken } from '@/utils/crypto';

import { prisma } from './prisma';

const SESSION_REFRESH_INTERVAL_MS = 1000 * 60 * 60 * 24 * 15; // 15 days
const SESSION_MAX_DURATION_MS = SESSION_REFRESH_INTERVAL_MS * 2; // 30 days

export const createSession = async (sessionToken: string, userId: string) => {
  const sessionId = hashToken(sessionToken);

  const session = {
    expiresAt: new Date(Date.now() + SESSION_MAX_DURATION_MS),
    id: sessionId,
    userId,
  };

  await prisma.session.create({
    data: session,
  });

  return session;
};

export const validateSession = async (sessionToken: string) => {
  const sessionId = hashToken(sessionToken);

  const result = await prisma.session.findUnique({
    include: {
      user: true,
    },
    where: {
      id: sessionId,
    },
  });

  // if there is no session, return null
  if (!result) {
    return { session: null, user: null };
  }

  const { user, ...session } = result;

  // if the session is expired, delete it
  if (Date.now() >= session.expiresAt.getTime()) {
    // or your ORM of choice
    await prisma.session.delete({
      where: {
        id: sessionId,
      },
    });

    return { session: null, user: null };
  }

  // if 15 days are left until the session expires, refresh the session
  if (Date.now() >= session.expiresAt.getTime() - SESSION_REFRESH_INTERVAL_MS) {
    session.expiresAt = new Date(Date.now() + SESSION_MAX_DURATION_MS);

    await prisma.session.update({
      data: {
        expiresAt: session.expiresAt,
      },
      where: {
        id: sessionId,
      },
    });
  }

  return { session, user };
};

export const invalidateSession = async (sessionId: string) => {
  await prisma.session.delete({
    where: {
      id: sessionId,
    },
  });
};

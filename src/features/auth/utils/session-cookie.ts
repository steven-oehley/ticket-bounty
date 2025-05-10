import { cookies } from 'next/headers';

export const SESSION_COOKIE_NAME = 'session';

export const setSessionCookie = async (
  sessionToken: string,
  expiresAt: Date,
) => {
  const cookie = {
    attributes: {
      expires: expiresAt,
      httpOnly: true,
      path: '/',
      sameSite: 'lax' as const,
      secure: process.env.NODE_ENV === 'production',
    },
    name: SESSION_COOKIE_NAME,
    value: sessionToken,
  };

  (await cookies()).set(cookie.name, cookie.value, cookie.attributes);
};

export const deleteSessionCookie = async () => {
  const cookie = {
    attributes: {
      httpOnly: true,
      maxAge: 0,
      path: '/',
      sameSite: 'lax' as const,
      secure: process.env.NODE_ENV === 'production',
    },
    name: SESSION_COOKIE_NAME,
    value: '',
  };

  (await cookies()).set(cookie.name, cookie.value, cookie.attributes);
};

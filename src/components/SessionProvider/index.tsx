'use client';

import { FC, PropsWithChildren } from 'react';
import { SessionProvider as NextAuthSessionProvider } from 'next-auth/react';

const SessionProvider: FC<PropsWithChildren> = ({ children }) => {
  return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>;
};

export default SessionProvider;

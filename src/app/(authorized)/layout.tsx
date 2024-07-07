import { FC, PropsWithChildren } from 'react';
import { getServerSession } from 'next-auth';
import { redirect, RedirectType } from 'next/navigation'; // Import RedirectType
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { headers } from 'next/headers';

const AuthorizedLayout: FC<PropsWithChildren> = async ({ children }) => {
  const session = await getServerSession(authOptions);
  const requestedUrl = headers().get('x-url');

  if (!session) {
    let returnUrl = '/auth/signIn';
    if (requestedUrl) {
      const requestedPathname = encodeURIComponent(
        new URL(requestedUrl).pathname
      ).toString();
      returnUrl += `?returnUrl=${requestedPathname}`;
    }
    redirect(returnUrl, RedirectType.replace);
  }

  return <>{children}</>;
};

export default AuthorizedLayout;

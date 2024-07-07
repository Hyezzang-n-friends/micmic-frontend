import { FC, PropsWithChildren } from 'react';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const ProtectedLayout: FC<PropsWithChildren> = async ({ children }) => {
  const session = await getServerSession(authOptions);

  console.log(session);
  if (!session) {
    redirect('/auth/signIn');
  }

  return <>{children}</>;
};

export default ProtectedLayout;

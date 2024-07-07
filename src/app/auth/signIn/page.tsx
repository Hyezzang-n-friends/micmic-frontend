import SignIn from '@/components/SignIn';
import { getProviders } from 'next-auth/react';

const SignInPage = async () => {
  const providers = await getProviders();

  return <SignIn providers={providers} />;
};

export default SignInPage;

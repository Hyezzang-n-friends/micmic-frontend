'use client';

import { FC } from 'react';
import { ISignInProps } from './interfaces';
import { signIn } from 'next-auth/react';
import { Button, Container, Flex } from '@radix-ui/themes';

const SignIn: FC<ISignInProps> = ({ className, providers }) => {
  const handleClick = async (id: string) => {
    await signIn(id, {
      callbackUrl: '/'
    });
  };

  return (
    <main className={`sign__in ${className}`}>
      <Container size="1">
        <Flex direction="column" gap="4" align="center">
          {providers &&
            Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <Button onClick={() => handleClick(provider.id)} size="4">
                  Sign in with {provider.name}
                </Button>
              </div>
            ))}
        </Flex>
      </Container>
    </main>
  );
};

export default SignIn;

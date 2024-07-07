'use client';

import { FC } from 'react';
import { ISignInProps } from './interfaces';
import { signIn } from 'next-auth/react';

const SignIn: FC<ISignInProps> = ({ className, providers }) => {
  const handleClick = async (id: string) => {
    await signIn(id, {
      callbackUrl: '/'
    });
  };

  return (
    <main className={`sign__in ${className}`}>
      <div className="sign__in__list">
        {providers &&
          Object.values(providers).map((provider) => (
            <div key={provider.name} style={{ margin: '10px' }}>
              <button
                onClick={() => handleClick(provider.id)}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#4285F4',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '16px'
                }}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
      </div>
    </main>
  );
};

export default SignIn;

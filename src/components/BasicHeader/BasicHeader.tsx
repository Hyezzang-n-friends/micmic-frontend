'use client';

import { FC } from 'react';
import { Avatar, Box, Flex, DropdownMenu } from '@radix-ui/themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { routes } from './constants';
import { signOut } from 'next-auth/react';

import type { BasicHeaderProps } from './interfaces';

const BasicHeader: FC<BasicHeaderProps> = ({ className, session }) => {
  const pathname = usePathname();

  const handleClickSignOut = async () => {
    await signOut({ callbackUrl: '/' });
  };

  return (
    <header className={`basic__header ${className}`}>
      <Flex align="center" justify="between" height="52px">
        <Link href="/" className="header__logo">
          <h1>micmic</h1>
        </Link>

        <Flex align="center" gap="10px">
          {routes.map((route) => (
            <a
              key={route.path}
              href={route.path}
              className={`header__link ${
                pathname.includes(route.path) ? 'active' : ''
              }`}
            >
              {route.name}
            </a>
          ))}
        </Flex>

        {session ? (
          <Box className="header__avatar">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <button>
                  <Avatar
                    alt="User"
                    src="/avatar.jpg"
                    fallback={session.user?.name?.[0] || ''}
                    radius="full"
                  />
                </button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content sideOffset={5} variant="soft">
                <DropdownMenu.Item onSelect={handleClickSignOut}>
                  로그아웃
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </Box>
        ) : (
          <Link href="/auth/signIn" className="header__link login">
            로그인
          </Link>
        )}
      </Flex>
    </header>
  );
};

export default BasicHeader;

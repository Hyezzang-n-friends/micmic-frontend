import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import { Container, Theme } from '@radix-ui/themes';
import StyledComponentsRegistry from '@/components/StyledComponentsRegistry';
import BasicHeader from '@/components/BasicHeader';
import SessionProvider from '@/components/SessionProvider';

import './globals.css';
import '@radix-ui/themes/styles.css';
import { getServerSession } from 'next-auth';

const inter = Noto_Sans_KR({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'micmic',
  description: 'micmic'
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme appearance="dark">
          <StyledComponentsRegistry>
            <SessionProvider>
              <Container size="4">
                <BasicHeader session={session} />
                {children}
              </Container>
            </SessionProvider>
          </StyledComponentsRegistry>
        </Theme>
      </body>
    </html>
  );
}

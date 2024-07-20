import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import { Theme } from '@radix-ui/themes';
import StyledComponentsRegistry from '@/components/StyledComponentsRegistry';
import SessionProvider from '@/components/SessionProvider';
import LayoutWithHeader from '@/components/LayoutWithHeader';
import { getServerSession } from 'next-auth';

import './globals.css';
import '@radix-ui/themes/styles.css';

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
              <LayoutWithHeader session={session}>{children}</LayoutWithHeader>
            </SessionProvider>
          </StyledComponentsRegistry>
        </Theme>
      </body>
    </html>
  );
}

import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

import Body from '@/components/theme/body';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nike',
  description: 'Nike Landing Page',
};

function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Body>{children}</Body>
    </html>
  );
}

export default RootLayout;

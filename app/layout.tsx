import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

import Body from '@/components/theme/body';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nike',
  description:
    'Discover stylish Nike arrivals, quality comfort, and innovation for your active life.',
};

function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Body>{children}</Body>
    </html>
  );
}

export default RootLayout;

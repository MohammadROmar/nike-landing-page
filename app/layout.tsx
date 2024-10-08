import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';

const montserrat = localFont({
  src: '../assets/fonts/Montserrat.ttf',
  variable: '--font-montserrat',
});
const palanquin = localFont({
  src: '../assets/fonts/Palanquin.ttf',
  variable: '--font-palanquin',
});

export const metadata: Metadata = {
  title: 'Nike',
  description: 'Nike Landing Page',
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${palanquin.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

export default RootLayout;

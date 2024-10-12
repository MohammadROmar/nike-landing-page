'use client';

import { useEffect, useState, type PropsWithChildren } from 'react';
import localFont from 'next/font/local';
import { ThemeProvider } from 'next-themes';

const montserrat = localFont({
  src: '../../assets/fonts/Montserrat.ttf',
  variable: '--font-montserrat',
});
const palanquin = localFont({
  src: '../../assets/fonts/Palanquin.ttf',
  variable: '--font-palanquin',
});

export default function Body({ children }: PropsWithChildren) {
  const [didMount, setDidMount] = useState(false);

  useEffect(() => setDidMount(true), []);

  return (
    <body
      id="body"
      className={`${montserrat.variable} ${
        palanquin.variable
      } antialiased selection:bg-coral-red selection:text-white dark:bg-[#333] bg-white overflow-x-hidden ${
        didMount && 'transition-[background-color] duration-500'
      }`}
    >
      <ThemeProvider attribute="class" enableSystem>
        {children}
      </ThemeProvider>
    </body>
  );
}

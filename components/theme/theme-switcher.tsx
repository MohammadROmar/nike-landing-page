'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import MoonIcon from './moon-icon';
import SunIcon from './sun-icon';

export default function ThemeSwitcher() {
  const [didMount, setDidMount] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setDidMount(true), []);

  if (!didMount) {
    return null;
  }

  if (resolvedTheme === 'dark') {
    return <SunIcon onClick={() => setTheme('light')} />;
  }

  return <MoonIcon onClick={() => setTheme('dark')} />;
}

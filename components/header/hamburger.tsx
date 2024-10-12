'use client';

import { useState } from 'react';
import { Turn as HamburgerIcon } from 'hamburger-react';

import Sidebar from '../sidebar';
import { AnimatePresence } from 'framer-motion';

export default function HamburgerMenuIcon() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <HamburgerIcon toggled={isToggled} toggle={setIsToggled} rounded />

      <AnimatePresence>{isToggled && <Sidebar />}</AnimatePresence>
    </>
  );
}

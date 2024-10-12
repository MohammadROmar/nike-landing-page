import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';

import { headerLinks } from '@/data/links';
import ThemeSwitcher from './theme/theme-switcher';
import { createPortal } from 'react-dom';

export default function Sidebar() {
  const sidebarVariants: Variants = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
  };

  return createPortal(
    <motion.aside
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="w-60 absolute z-30 top-0 right-0 mt-24 p-4 flex flex-col items-center gap-8 backdrop-blur-[8px] lg:hidden"
    >
      <nav>
        <ul className="space-y-4">
          {headerLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="font-montserrat text-2xl to-black dark:text-white"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="w-12 h-12">
        <ThemeSwitcher />
      </div>
    </motion.aside>,
    document.getElementById('body')!
  );
}

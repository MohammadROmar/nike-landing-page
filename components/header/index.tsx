import Link from 'next/link';
import Image from 'next/image';

import NavItem from './nav-item';
import HamburgerMenuIcon from './hamburger';
import ThemeSwitcher from '../theme/theme-switcher';
import { headerLinks } from '@/data/links';
import headerLogoIcon from '@/assets/images/header-logo.svg';

export default function Header() {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <Link href="/">
          <Image src={headerLogoIcon} alt="Logo" priority />
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {headerLinks.map(({ label, href }) => (
            <NavItem key={label} label={label} href={href} />
          ))}
        </ul>
        <div className="lg:hidden">
          <HamburgerMenuIcon />
        </div>
        <div className="w-8 h-8 max-lg:hidden">
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
}

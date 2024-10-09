import Link from 'next/link';
import Image from 'next/image';

import { headerLinks } from '@/data/links';
import headerLogoIcon from '@/assets/images/header-logo.svg';
import hamburgerIcon from '@/assets/icons/hamburger.svg';
import NavItem from './nav-item';

export default function Header() {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center .max-container">
        <Link href="/">
          <Image src={headerLogoIcon} alt="Logo" priority />
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {headerLinks.map(({ label, href }) => (
            <NavItem label={label} href={href} />
          ))}
        </ul>
        <button className="lg:hidden">
          <Image
            src={hamburgerIcon}
            alt="Hamburger menu icon"
            className="w-6 h-6 cursor-pointer"
          />
        </button>
      </nav>
    </header>
  );
}

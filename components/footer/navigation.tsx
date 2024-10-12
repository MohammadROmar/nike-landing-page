import Link from 'next/link';

import { footerLinks } from '@/data/links';

export default function FooterNavigation() {
  return (
    <ul className="flex-1 flex flex-wrap justify-between gap-20 lg:gap-10 w-full">
      {footerLinks.map(({ title, links }) => (
        <li key={title}>
          <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
            {title}
          </h4>
          <ul>
            {links.map((link) => (
              <li
                key={link.label}
                className="text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray transition-colors duration-500"
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

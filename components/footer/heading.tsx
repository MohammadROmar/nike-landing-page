import Link from 'next/link';
import Image from 'next/image';

import { footerLogo } from '@/assets/images';
import { socialMedia } from '@/data/social-meadia';

export default function FooterHeading() {
  return (
    <div className="flex flex-col items-start">
      <Link href="/">
        <Image src={footerLogo} alt="Nike logo" />
      </Link>
      <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
        Get shoes ready for the new term at your nearst Nike store. Find Your
        perfect Size In Store. Get Rewards
      </p>
      <ul className="flex items-start gap-5 mt-8">
        {socialMedia.map(({ icon, alt, href }) => (
          <li key={alt}>
            <a href={href} target="_blank">
              <Image
                src={icon}
                alt={alt}
                className="bg-white rounded-full p-3 box-content"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

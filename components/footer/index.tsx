import Image from 'next/image';
import FooterHeading from './heading';
import FooterNavigation from './navigation';
import { copyrightSign } from '@/assets/icons';

export default function Footer() {
  return (
    <footer className="bg-black padding-x padding-t pb-8 max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <FooterHeading />

        <FooterNavigation />
      </div>

      <div className="flex justify-between mt-24 text-white-400 max-sm:flex-col max-sm:items-center">
        <div className="flex-1 flex justify-start items-center gap-2 cursor-pointer">
          <Image
            src={copyrightSign}
            alt="Copyrights icon"
            className="rounded-full"
          />
          <p className="font-montserrat">Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
}

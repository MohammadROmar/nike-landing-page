import Image from 'next/image';

import Button from '@/components/ui/button';
import { shoe8 } from '@/assets/images';

export default function SuperQuality() {
  return (
    <section
      id="about-us"
      className="padding flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex-1 flex flex-col">
        <h2 className="mt-8 font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          We provide you <span className="text-coral-red">super quality</span>
          {' Shoes'}
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring primum comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance
        </p>
        <p className="mt-6 mb-11 lg:max-w-lg info-text">
          Our dedication to detail and exellence ensure your satisfaction
        </p>
        <Button label="View Details" />
      </div>

      <div className="flex-1 flex justify-center items-center">
        <Image src={shoe8} alt="" className="object-contain" />
      </div>
    </section>
  );
}

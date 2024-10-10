import Image from 'next/image';

import Button from '@/components/ui/button';
import { offer } from '@/assets/images';
import { arrowRight } from '@/assets/icons';

export default function SpecialOffer() {
  return (
    <section className="padding max-container flex justify-center items-center max-xl:flex-col-reverse gap-8">
      <Image
        src={offer}
        alt="Special offer!"
        className="object-contain max-xl:w-full"
      />

      <div className="flex-1">
        <h2 className="mt-8 font-palanquin text-4xl font-bold">
          <span className="text-coral-red">Special </span>
          Offer
        </h2>
        <p className="mt-4 info-text">
          Embark on a shipping journey that redefines your experience with
          unbeatable deals. Form premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 mb-11 info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of expectional.
        </p>
        <div className="flex items-center gap-4">
          <Button label="Shop Now!" icon={arrowRight} />
          <Button label="Learn more" secondary />
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';

import { bigShoe1 } from '@/assets/images';
import { shoes } from '@/data/shoes';
import ShoeCard from './shoe-card';

export default function Collection() {
  const [bigShowImg, setBigShowImg] = useState(bigShoe1);

  return (
    <div className="relative flex-1 flex justify-center items-center min-h-screen bg-hero max-lg:py-40 bg-cover bg-center">
      <Image
        src={bigShowImg}
        alt="Shoe collection"
        className="object-contain"
      />

      <ul className="flex sm:gap-6 gap-4 absolute z-10 -bottom-[5%] sm:left-[10%] max-sm:px-6">
        {shoes.map((shoe, i) => (
          <ShoeCard
            key={i}
            shoe={shoe}
            bigShowImg={bigShowImg}
            changeImage={setBigShowImg}
          />
        ))}
      </ul>
    </div>
  );
}

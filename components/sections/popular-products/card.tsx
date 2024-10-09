import Image from 'next/image';

import type { Product } from '@/data/products';
import { star } from '@/assets/icons';

function Card({ product }: { product: Product }) {
  const { image, rating, name, price } = product;

  return (
    <li className="flex flex-col w-full">
      <div className="relative">
        <Image src={image} alt={name} />
      </div>
      <p className="flex items-center mt-4 gap-2">
        <span>
          <Image src={star} alt="Star icon" />
        </span>
        <span className="font-montserrat text-xl max-sm:text-base leading-normal text-coral-red">
          {rating}
        </span>
      </p>
      <h3 className="mt-2 text-2xl max-sm:text-lg leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold text-coral-red text-2xl max-sm:text-base leading-normal font-montserrat">
        {price}
      </p>
    </li>
  );
}

export default Card;

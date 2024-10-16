import Image from 'next/image';

import type { Product } from '@/data/products';
import { star } from '@/assets/icons';

function Card({ product }: { product: Product }) {
  const { image, rating, name, price } = product;

  return (
    <li>
      <Image src={`/images/${image}`} alt={name} width={280} height={280} />
      <p className="flex items-center mt-4 gap-2">
        <span>
          <Image src={star} alt="Star icon" />
        </span>
        <span className="font-montserrat text-xl max-sm:text-base leading-normal text-coral-red">
          {rating}
        </span>
      </p>
      <h3 className="text-title mt-2 text-2xl max-sm:text-lg leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold text-coral-red text-2xl max-sm:text-base leading-normal font-montserrat">
        {price}
      </p>
    </li>
  );
}

export default Card;

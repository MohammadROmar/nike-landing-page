import Image from 'next/image';

import type { Review } from '@/data/reviews';
import { star } from '@/assets/icons';

function ReviewCard({ review }: { review: Review }) {
  const { customerName, feedback, image, rating } = review;

  return (
    <li className="flex justify-center items-center flex-col">
      <Image
        src={image}
        alt={`${customerName} - a Nike customer`}
        sizes="7.5rem"
        className="rounded-full object-cover w-[7.5rem] h-[7.5rem]"
      />
      <p className="info-text text-center mt-6 max-w-sm">{feedback}</p>
      <div className="mt-3 flex items-center gap-2">
        <Image src={star} alt="Star icon" />
        <p className="font-montserrat text-coral-red text-xl">{rating}</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl font-bold">{customerName}</h3>
    </li>
  );
}

export default ReviewCard;

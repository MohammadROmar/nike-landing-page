import Image, { StaticImageData } from 'next/image';

import type { Shoe } from '@/data/shoes';

type ShoeCardProps = {
  shoe: Shoe;
  bigShowImg: StaticImageData;
  changeImage(value: StaticImageData): void;
};

export default function ShoeCard({
  shoe,
  bigShowImg,
  changeImage,
}: ShoeCardProps) {
  const isSelectedShoe = shoe.bigShoe === bigShowImg;

  function handleShoeChange() {
    if (bigShowImg !== shoe.bigShoe) {
      changeImage(shoe.bigShoe);
    }
  }

  return (
    <li
      className={`border-2 rounded-xl ${
        isSelectedShoe ? 'border-coral-red' : 'border-transparent'
      } cursor-pointer max-sm:flex-1`}
      onClick={handleShoeChange}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <Image
          src={shoe.thumbnail}
          alt="Shoe collection"
          className="object-contain"
        />
      </div>
    </li>
  );
}

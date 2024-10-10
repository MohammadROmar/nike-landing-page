import Image from 'next/image';

import { Service } from '@/data/services';

function Card({ service }: { service: Service }) {
  const { icon, label, subtext } = service;

  return (
    <li className="flex-1 sm:min-w-[22rem] sm:w-[22rem] w-full rounded-2xl shadow-3xl p-10">
      <div className="bg-coral-red rounded-full p-2 w-fit">
        <Image src={icon} alt={label} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {label}
      </h3>
      <p className="info-text mt-3">{subtext}</p>
    </li>
  );
}

export default Card;

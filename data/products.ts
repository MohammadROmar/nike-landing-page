import { shoe4, shoe5, shoe6, shoe7 } from '@/assets/images';

type Product = {
  image: SVGElement;
  name: string;
  price: string;
};

export const products: Product[] = [
  {
    image: shoe4,
    name: 'Nike Air Jordan-01',
    price: '$200.20',
  },
  {
    image: shoe5,
    name: 'Nike Air Jordan-10',
    price: '$210.20',
  },
  {
    image: shoe6,
    name: 'Nike Air Jordan-100',
    price: '$220.20',
  },
  {
    image: shoe7,
    name: 'Nike Air Jordan-001',
    price: '$230.20',
  },
];

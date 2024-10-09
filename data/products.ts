import { shoe4, shoe5, shoe6, shoe7 } from '@/assets/images';

export type Product = {
  image: string;
  name: string;
  price: string;
  rating: number;
};

export const products: Product[] = [
  {
    image: shoe4,
    name: 'Nike Air Jordan-01',
    price: '$200.20',
    rating: 4.9,
  },
  {
    image: shoe5,
    name: 'Nike Air Jordan-10',
    price: '$210.20',
    rating: 4.2,
  },
  {
    image: shoe6,
    name: 'Nike Air Jordan-100',
    price: '$220.20',
    rating: 4.8,
  },
  {
    image: shoe7,
    name: 'Nike Air Jordan-001',
    price: '$230.20',
    rating: 4.5,
  },
];

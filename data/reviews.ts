import { customer1, customer2 } from '@/assets/images';

type Review = {
  image: any;
  customerName: string;
  rating: number;
  feedback: string;
};

export const reviews: Review[] = [
  {
    image: customer1,
    customerName: 'Morich Brown',
    rating: 4.5,
    feedback:
      'The attention to detail and the quality of the product exceeded my expectations. Highly recommended!',
  },
  {
    image: customer2,
    customerName: 'Lota Mongeskar',
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

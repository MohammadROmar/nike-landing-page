import { shieldTick, support, truckFast } from '@/assets/icons';

type Service = {
  image: SVGElement;
  label: string;
  subtext: string;
};

export const services: Service[] = [
  {
    image: truckFast,
    label: 'Free shipping',
    subtext: 'Enjoy seamless shopping with our complimentary shipping service.',
  },
  {
    image: shieldTick,
    label: 'Secure Payment',
    subtext:
      'Experience worry-free transactions with our secure payment options.',
  },
  {
    image: support,
    label: 'Love to help you',
    subtext: 'Our dedicated team is here to assist you every step of the way.',
  },
];

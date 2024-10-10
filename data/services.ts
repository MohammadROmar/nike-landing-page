import { shieldTick, support, truckFast } from '@/assets/icons';

export type Service = {
  icon: string;
  label: string;
  subtext: string;
};

export const services: Service[] = [
  {
    icon: truckFast,
    label: 'Free shipping',
    subtext: 'Enjoy seamless shopping with our complimentary shipping service.',
  },
  {
    icon: shieldTick,
    label: 'Secure Payment',
    subtext:
      'Experience worry-free transactions with our secure payment options.',
  },
  {
    icon: support,
    label: 'Love to help you',
    subtext: 'Our dedicated team is here to assist you every step of the way.',
  },
];

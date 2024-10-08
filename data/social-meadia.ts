import { facebook, instagram, twitter } from '@/assets/icons';

type SocialMedia = {
  icon: SVGElement;
  alt: string;
};

export const socialMedia: SocialMedia[] = [
  { icon: facebook, alt: 'facebook logo' },
  { icon: twitter, alt: 'twitter logo' },
  { icon: instagram, alt: 'instagram logo' },
];

import { facebook, instagram, twitter } from '@/assets/icons';

type SocialMedia = {
  icon: string;
  alt: string;
  href: string;
};

export const socialMedia: SocialMedia[] = [
  { icon: facebook, alt: 'facebook logo', href: 'https://www.facebook.com' },
  { icon: twitter, alt: 'twitter logo', href: 'https://www.facebook.com' },
  { icon: instagram, alt: 'instagram logo', href: 'https://www.facebook.com' },
];

type Link = {
  href: string;
  label: string;
};

type FooterLink = {
  title: string;
  links: Link[];
};

export const headerLinks: Link[] = [
  { href: '#home', label: 'Home' },
  { href: '#about-us', label: 'About Us' },
  { href: '#products', label: 'Products' },
  { href: '#contact-us', label: 'Contact Us' },
];

export const footerLinks: FooterLink[] = [
  {
    title: 'Products',
    links: [
      { label: 'Air Force 1', href: '/' },
      { label: 'Air Max 1', href: '/' },
      { label: 'Air Jordan 1', href: '/' },
      { label: 'Air Force 2', href: '/' },
      { label: 'Nike Waffle Racer', href: '/' },
      { label: 'Nike Cortez', href: '/' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'About us', href: '/' },
      { label: 'FAQs', href: '/' },
      { label: 'How it works', href: '/' },
      { label: 'Privacy policy', href: '/' },
      { label: 'Payment policy', href: '/' },
    ],
  },
  {
    title: 'Get in touch',
    links: [
      { label: 'customer@nike.com', href: 'mailto:customer@nike.com' },
      { label: '+123456789', href: 'tel:+123456789' },
    ],
  },
];

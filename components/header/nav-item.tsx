import Link from 'next/link';

type NavItemProps = {
  label: string;
  href: string;
};

export default function NavItem({ label, href }: NavItemProps) {
  return (
    <li key={label}>
      <Link
        href={href}
        className="font-montserrat leading-normal text-base text-slate-gray"
      >
        {label}
      </Link>
    </li>
  );
}

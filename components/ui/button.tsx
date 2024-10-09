import Image from 'next/image';

type ButtonProps = {
  label: string;
  icon: string;
  alt?: string;
};

export default function Button({ label, icon, alt }: ButtonProps) {
  return (
    <button className="flex justify-center items-center gap-2 px-8 py-4 font-montserrat border border-coral-red text-lg leading-none bg-coral-red rounded-full text-white">
      {label}
      <Image
        src={icon}
        alt={alt ?? 'An icon'}
        className="rounded-full w-5 h-5"
      />
    </button>
  );
}

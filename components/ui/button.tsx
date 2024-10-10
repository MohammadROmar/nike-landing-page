import Image from 'next/image';

type ButtonProps = {
  label: string;
  icon?: string;
  alt?: string;
  secondary?: boolean;
};

export default function Button({ label, icon, alt, secondary }: ButtonProps) {
  const textColor = secondary ? 'border-slate-gray' : 'text-white';
  const bgColor = secondary ? 'bg-transparent' : 'bg-coral-red';
  const borderColor = secondary ? 'border-slate-gray' : 'border-coral-red';

  return (
    <button
      className={`w-fit flex justify-center items-center gap-2 px-8 py-4 font-montserrat border text-lg leading-5 rounded-full ${textColor} ${bgColor} ${borderColor}`}
    >
      {label}
      {icon && (
        <Image
          src={icon}
          alt={alt ?? 'An icon'}
          className="rounded-full w-5 h-5"
        />
      )}
    </button>
  );
}

import { statistics } from '@/data/statistics';

export default function Statistics() {
  return (
    <ul className="flex gap-16 justify-start items-start flex-wrap w-full mt-20">
      {statistics.map(({ label, value }) => (
        <li key={label}>
          <p className="text-4xl font-palanquin font-bold">{value}</p>
          <p className="leading-7 font-montserrat text-slate-gray">{label}</p>
        </li>
      ))}
    </ul>
  );
}

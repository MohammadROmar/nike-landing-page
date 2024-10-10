import Card from './card';
import { services } from '@/data/services';

export default function Services() {
  return (
    <section className="padding-x max-container py-10">
      <ul className="flex justify-center flex-wrap gap-9">
        {services.map((service) => (
          <Card key={service.label} service={service} />
        ))}
      </ul>
    </section>
  );
}

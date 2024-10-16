import Card from './card';
import { getProducts } from '@/init-db';

export default function PopularProducts() {
  const products = getProducts();

  return (
    <section id="products" className="padding max-container">
      <h2 className="text-title text-4xl font-palanquin font-bold capitalize">
        our <span className="text-coral-red">popular</span> products
      </h2>
      <p className="font-montserrat text-slate-gray lg:max-w-lg text-lg leading-8 mt-7 mb-14">
        Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design, and value
      </p>

      <ul className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Card key={product.name} product={product} />
        ))}
      </ul>
    </section>
  );
}

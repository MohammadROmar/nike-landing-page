import {
  Header,
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomReviews,
  Subscribe,
  Footer,
} from '@/components/sections';

export default function HomePage() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <PopularProducts />
      <SuperQuality />
      <Services />
      <SpecialOffer />
      <CustomReviews />
      <Subscribe />
      <Footer />
    </main>
  );
}

import {
  Header,
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer,
} from '@/components/sections';

export default function LandingPage() {
  return (
    <>
      <main className="relative">
        <Header />
        <Hero />
        <PopularProducts />
        <SuperQuality />
        <Services />
        <SpecialOffer />
        <CustomerReviews />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
}

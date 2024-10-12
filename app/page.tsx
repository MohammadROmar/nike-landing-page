import Header from '@/components/header';
import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
} from '@/components/sections';
import Footer from '@/components/footer';

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

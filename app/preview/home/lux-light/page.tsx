import Header from '@/components/preview/lux/Header';
import Features from '@/components/preview/lux/Features';
import Cards from '@/components/preview/lux/Cards';
import Steps from '@/components/preview/lux/Steps';
import Reviews from '@/components/preview/lux/Reviews';
import FAQ from '@/components/preview/lux/FAQ';
import Footer from '@/components/preview/lux/Footer';

export default function LuxLightPage() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Features />
      <Cards />
      <Steps />
      <Reviews />
      <FAQ />
      <Footer />
    </main>
  );
}

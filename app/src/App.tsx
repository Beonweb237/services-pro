import { useEffect } from 'react';
import Lenis from 'lenis';
import { LanguageProvider } from './hooks/useLanguage';
import Navigation from './sections/Navigation';
import HeroV2 from './sections/HeroV2';
import TrustBanner from './sections/TrustBanner';
import Stats from './sections/Stats';
import ProScore from './sections/ProScore';
import ProsMoment from './sections/ProsMoment';
import Leaderboard from './sections/Leaderboard';
import Families from './sections/Families';
import CategoriesV2 from './sections/CategoriesV2';
import HowItWorks from './sections/HowItWorks';
import CitiesV2 from './sections/CitiesV2';
import ProfileShowcase from './sections/ProfileShowcase';
import Gallery from './sections/Gallery';
import Levels from './sections/Levels';
import Pricing from './sections/Pricing';
import TestimonialsV2 from './sections/TestimonialsV2';
import FAQ from './sections/FAQ';
import Roadmap from './sections/Roadmap';
import CTA from './sections/CTA';
import Footer from './sections/Footer';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <LanguageProvider>
      <Navigation />
      <main>
        <HeroV2 />
        <TrustBanner />
        <Stats />
        <ProScore />
        <ProsMoment />
        <Leaderboard />
        <Families />
        <CategoriesV2 />
        <HowItWorks />
        <CitiesV2 />
        <ProfileShowcase />
        <Gallery />
        <Levels />
        <Pricing />
        <TestimonialsV2 />
        <FAQ />
        <Roadmap />
        <CTA />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

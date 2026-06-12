import { useRef, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import ParticleCanvas from './ParticleCanvas';
import CylinderCarousel from './CylinderCarousel';
import { Search, Star, Users, Briefcase } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const { t } = useLanguage();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-overline', { opacity: 0, y: 20, duration: 0.6, delay: 0.2, ease: 'power3.out' });
      gsap.from('.hero-title', { opacity: 0, y: 30, duration: 0.8, delay: 0.3, ease: 'power3.out' });
      gsap.from('.hero-subtitle', { opacity: 0, y: 30, duration: 0.8, delay: 0.45, ease: 'power3.out' });
      gsap.from('.hero-search', { opacity: 0, y: 20, duration: 0.6, delay: 0.6, ease: 'power3.out' });
      gsap.from('.hero-ctas', { opacity: 0, y: 20, duration: 0.6, delay: 0.7, ease: 'power3.out' });
      gsap.from('.hero-stats', { opacity: 0, y: 20, duration: 0.6, delay: 0.85, ease: 'power3.out' });
    }, contentRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={contentRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#0A0A0F' }}
    >
      {/* Particle background */}
      <ParticleCanvas />

      {/* Cylinder Carousel - positioned on right */}
      <CylinderCarousel />

      {/* Content - left side */}
      <div className="container-main relative z-10 w-full">
        <div className="max-w-xl lg:max-w-[520px]">
          {/* Overline */}
          <p className="hero-overline overline mb-4">
            {t('hero.overline')}
          </p>

          {/* Title */}
          <h1
            className="hero-title text-4xl md:text-5xl font-bold leading-tight mb-5"
            style={{ color: '#F0F0F5', maxWidth: '520px' }}
          >
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <p
            className="hero-subtitle text-base md:text-lg mb-8"
            style={{ color: '#6B6B80', maxWidth: '440px', lineHeight: 1.6 }}
          >
            {t('hero.subtitle')}
          </p>

          {/* Search bar */}
          <div
            className="hero-search relative mb-6"
            style={{ maxWidth: '480px' }}
          >
            <div
              className="flex items-center gap-3 h-14 px-4 rounded-xl"
              style={{
                background: '#14141E',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <Search size={20} style={{ color: '#6B6B80', flexShrink: 0 }} />
              <input
                type="text"
                placeholder={t('hero.search_placeholder') as string}
                className="flex-1 bg-transparent text-sm outline-none"
                style={{ color: '#F0F0F5' }}
              />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero-ctas flex flex-wrap gap-3 mb-10">
            <button className="btn-gold">
              {t('hero.cta_find')}
            </button>
            <button className="btn-outline">
              {t('hero.cta_explore')}
            </button>
          </div>

          {/* Trust stats */}
          <div className="hero-stats flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <Users size={16} style={{ color: '#D4A853' }} />
              <span className="text-sm font-medium" style={{ color: '#F0F0F5' }}>
                2,400+ {t('hero.stat_pros')}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase size={16} style={{ color: '#D4A853' }} />
              <span className="text-sm font-medium" style={{ color: '#F0F0F5' }}>
                15,000+ {t('hero.stat_missions')}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Star size={16} style={{ color: '#D4A853' }} />
              <span className="text-sm font-medium" style={{ color: '#F0F0F5' }}>
                4.8 {t('hero.stat_rating')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile fallback - horizontal scrollable cards */}
      <MobileCategoryStrip />
    </section>
  );
}

function MobileCategoryStrip() {
  const categories = [
    { name: 'Plomberie', count: 234 },
    { name: 'Électricité', count: 189 },
    { name: 'Menuiserie', count: 156 },
    { name: 'Coiffure', count: 267 },
    { name: 'Informatique', count: 203 },
    { name: 'Design', count: 178 },
    { name: 'Nettoyage', count: 220 },
    { name: 'Cuisine', count: 145 },
  ];

  return (
    <div className="lg:hidden absolute bottom-8 left-0 right-0 z-10">
      <div className="flex gap-3 overflow-x-auto px-4 pb-2 snap-x snap-mandatory scrollbar-hide">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="snap-start shrink-0 flex flex-col items-center gap-1 py-3 px-4 rounded-xl"
            style={{
              background: '#14141E',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              minWidth: '120px',
            }}
          >
            <span className="text-sm font-semibold" style={{ color: '#F0F0F5' }}>{cat.name}</span>
            <span className="text-xs" style={{ color: '#6B6B80' }}>{cat.count} pros</span>
          </div>
        ))}
      </div>
    </div>
  );
}

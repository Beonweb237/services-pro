import { useRef, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import ParticleCanvas from './ParticleCanvas';
import CylinderCarousel from './CylinderCarousel';
import { Search, Star, Users, Briefcase, ArrowDown } from 'lucide-react';
import gsap from 'gsap';

export default function HeroV2() {
  const { t } = useLanguage();
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-overline', { opacity: 0, y: 20, duration: 0.6, delay: 0.3, ease: 'power3.out' });
      gsap.from('.hero-title', { opacity: 0, y: 30, duration: 0.8, delay: 0.4, ease: 'power3.out' });
      gsap.from('.hero-subtitle', { opacity: 0, y: 30, duration: 0.8, delay: 0.55, ease: 'power3.out' });
      gsap.from('.hero-search', { opacity: 0, y: 20, duration: 0.6, delay: 0.7, ease: 'power3.out' });
      gsap.from('.hero-ctas', { opacity: 0, y: 20, duration: 0.6, delay: 0.8, ease: 'power3.out' });
      gsap.from('.hero-stats', { opacity: 0, y: 20, duration: 0.6, delay: 0.95, ease: 'power3.out' });
      gsap.from('.hero-images', { opacity: 0, x: 60, duration: 1, delay: 0.5, ease: 'power3.out' });
    }, contentRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={contentRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#0A0A0F' }}
    >
      {/* Background image with parallax */}
      <div
        ref={imageRef}
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: 'url(/assets/pro-at-work-1.jpg)' }}
      />
      {/* Dark overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(10,10,15,0.95) 0%, rgba(10,10,15,0.85) 50%, rgba(10,10,15,0.7) 100%)',
        }}
      />

      {/* Particle background */}
      <ParticleCanvas />

      {/* Cylinder Carousel */}
      <CylinderCarousel />

      {/* Content - left side */}
      <div className="container-main relative z-10 w-full">
        <div className="max-w-xl lg:max-w-[540px]">
          {/* Overline */}
          <p className="hero-overline overline mb-4">
            {t('hero.overline')}
          </p>

          {/* Title */}
          <h1
            className="hero-title text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-tight mb-5"
            style={{ color: '#F0F0F5', maxWidth: '540px' }}
          >
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <p
            className="hero-subtitle text-base md:text-lg mb-8"
            style={{ color: '#6B6B80', maxWidth: '460px', lineHeight: 1.7 }}
          >
            {t('hero.subtitle')}
          </p>

          {/* Search bar */}
          <div className="hero-search relative mb-6" style={{ maxWidth: '500px' }}>
            <div
              className="flex items-center gap-3 h-14 px-4 rounded-xl"
              style={{
                background: 'rgba(20, 20, 30, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <Search size={20} style={{ color: '#D4A853', flexShrink: 0 }} />
              <input
                type="text"
                placeholder={t('hero.search_placeholder') as string}
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-[#6B6B80]"
                style={{ color: '#F0F0F5' }}
              />
              <button className="btn-gold text-sm py-2 px-5">{t('hero.cta_find')}</button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero-ctas flex flex-wrap gap-3 mb-10">
            <button className="btn-gold">{t('hero.cta_find')}</button>
            <button className="btn-outline">{t('hero.cta_explore')}</button>
          </div>

          {/* Trust stats */}
          <div className="hero-stats flex flex-wrap gap-6">
            {[
              { icon: Users, value: '2,400+', label: t('hero.stat_pros') },
              { icon: Briefcase, value: '15,000+', label: t('hero.stat_missions') },
              { icon: Star, value: '4.8', label: t('hero.stat_rating') },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="flex items-center gap-2">
                  <Icon size={16} style={{ color: '#D4A853' }} />
                  <span className="text-sm font-medium" style={{ color: '#F0F0F5' }}>
                    {stat.value} <span style={{ color: '#6B6B80' }}>{stat.label}</span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right side - pro image cards */}
        <div className="hero-images hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 flex-col gap-4 w-[35%] max-w-[400px]">
          <div
            className="rounded-2xl overflow-hidden h-48 relative group"
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <img
              src="/assets/pro-at-work-2.jpg"
              alt="Professional"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(10,10,15,0.9) 100%)' }} />
            <div className="absolute bottom-3 left-4">
              <p className="text-xs font-medium" style={{ color: '#D4A853' }}>Coiffure — Yaoundé</p>
              <p className="text-sm font-semibold" style={{ color: '#F0F0F5' }}>Amina T. — Pro Score 96</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div
              className="rounded-2xl overflow-hidden h-36 flex-1 relative group"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <img
                src="/assets/pro-at-work-3.jpg"
                alt="Plumber"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(10,10,15,0.9) 100%)' }} />
              <div className="absolute bottom-2 left-3">
                <p className="text-xs" style={{ color: '#F0F0F5' }}>Jean K. — Plombier</p>
              </div>
            </div>
            <div
              className="rounded-2xl overflow-hidden h-36 w-32 flex items-center justify-center"
              style={{ background: 'rgba(212,168,83,0.1)', border: '1px solid rgba(212,168,83,0.2)' }}
            >
              <div className="text-center">
                <p className="text-2xl font-bold" style={{ color: '#D4A853' }}>94%</p>
                <p className="text-xs" style={{ color: '#6B6B80' }}>Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <ArrowDown size={20} style={{ color: '#6B6B80' }} />
      </div>

      {/* Mobile fallback */}
      <MobileCategoryStrip />
    </section>
  );
}

function MobileCategoryStrip() {
  const { t } = useLanguage();
  const categories = [
    { name: 'Plomberie', nameEn: 'Plumbing', count: 234 },
    { name: 'Électricité', nameEn: 'Electrical', count: 189 },
    { name: 'Menuiserie', nameEn: 'Carpentry', count: 156 },
    { name: 'Coiffure', nameEn: 'Hair & Beauty', count: 267 },
    { name: 'Informatique', nameEn: 'IT Services', count: 203 },
    { name: 'Design', nameEn: 'Design', count: 178 },
    { name: 'Nettoyage', nameEn: 'Cleaning', count: 220 },
    { name: 'Cuisine', nameEn: 'Catering', count: 145 },
  ];

  return (
    <div className="lg:hidden absolute bottom-16 left-0 right-0 z-10">
      <div className="flex gap-3 overflow-x-auto px-4 pb-2 snap-x snap-mandatory scrollbar-hide">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="snap-start shrink-0 flex flex-col items-center gap-1 py-3 px-4 rounded-xl"
            style={{
              background: 'rgba(20, 20, 30, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(10px)',
              minWidth: '120px',
            }}
          >
            <span className="text-sm font-semibold" style={{ color: '#F0F0F5' }}>{cat.name}</span>
            <span className="text-xs" style={{ color: '#6B6B80' }}>{cat.count} {t('categories.pro_count')}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

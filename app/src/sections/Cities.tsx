import { useRef, useEffect, useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { MapPin, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cities = [
  {
    name: 'Douala',
    nameFr: 'Douala',
    image: '/assets/city-douala.jpg',
    pros: 1240,
    categories: 18,
    description: 'Capitale économique avec le plus grand réseau de professionnels.',
    top: ['Plomberie', 'Électricité', 'Coiffure'],
  },
  {
    name: 'Yaoundé',
    nameFr: 'Yaoundé',
    image: '/assets/city-yaounde.jpg',
    pros: 890,
    categories: 18,
    description: 'Capitale politique, riche en talents du bâtiment et services.',
    top: ['Informatique', 'Design', 'Menuiserie'],
  },
  {
    name: 'Bafoussam',
    nameFr: 'Bafoussam',
    image: '/assets/city-bafoussam.jpg',
    pros: 270,
    categories: 15,
    description: 'Cœur de la région de l\'Ouest, artisans de renom.',
    top: ['Maçonnerie', 'Couture', 'Ferronnerie'],
  },
];

export default function Cities() {
  const { lang, t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCity, setActiveCity] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.city-card', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding"
      style={{ background: '#0A0A0F' }}
    >
      <div className="container-main">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <p className="overline mb-4">{t('cities.overline')}</p>
            <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: '#F0F0F5' }}>
              {t('cities.title')}
            </h2>
          </div>
          <p className="text-sm mt-3 md:mt-0 max-w-md" style={{ color: '#6B6B80' }}>
            {t('cities.subtitle')}
          </p>
        </div>

        {/* City selector tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {cities.map((city, i) => (
            <button
              key={i}
              className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all whitespace-nowrap"
              style={{
                background: activeCity === i ? '#D4A853' : 'rgba(255,255,255,0.05)',
                color: activeCity === i ? '#0A0A0F' : '#F0F0F5',
                border: activeCity === i ? 'none' : '1px solid rgba(255,255,255,0.08)',
              }}
              onClick={() => setActiveCity(i)}
            >
              <MapPin size={14} />
              {lang === 'fr' ? city.nameFr : city.name}
            </button>
          ))}
        </div>

        {/* Active city showcase */}
        <div
          className="city-card relative rounded-2xl overflow-hidden"
          style={{ minHeight: 420, border: '1px solid rgba(255,255,255,0.08)' }}
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-700"
            style={{ backgroundImage: `url(${cities[activeCity].image})` }}
          />
          {/* Dark gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(10,10,15,0.3) 0%, rgba(10,10,15,0.85) 60%, #0A0A0F 100%)',
            }}
          />

          {/* Content */}
          <div className="relative z-10 p-8 md:p-12 flex flex-col justify-end h-full" style={{ minHeight: 420 }}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#F0F0F5' }}>
                  {lang === 'fr' ? cities[activeCity].nameFr : cities[activeCity].name}
                </h3>
                <p className="text-base mb-4 max-w-md" style={{ color: 'rgba(240,240,245,0.8)' }}>
                  {cities[activeCity].description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cities[activeCity].top.map((cat, j) => (
                    <span
                      key={j}
                      className="text-xs px-3 py-1.5 rounded-full"
                      style={{ background: 'rgba(212,168,83,0.2)', color: '#D4A853', border: '1px solid rgba(212,168,83,0.3)' }}
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-center">
                  <p className="text-2xl font-bold" style={{ color: '#D4A853' }}>{cities[activeCity].pros.toLocaleString()}</p>
                  <p className="text-xs" style={{ color: '#6B6B80' }}>Pros</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold" style={{ color: '#D4A853' }}>{cities[activeCity].categories}</p>
                  <p className="text-xs" style={{ color: '#6B6B80' }}>Catégories</p>
                </div>
                <button className="btn-gold flex items-center gap-2 text-sm self-center">
                  {t('cities.explore')}
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

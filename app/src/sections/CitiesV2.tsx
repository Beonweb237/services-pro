import { useRef, useEffect, useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { MapPin, Users, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const allCities = [
  { name: 'Douala', region: 'Littoral', population: '4.5M', pros: 1240, categories: 18, quarters: 32, color: '#D4A853', image: '/assets/city-douala.jpg', top: ['Plomberie', 'Électricité', 'Coiffure'] },
  { name: 'Yaoundé', region: 'Centre', population: '4M', pros: 890, categories: 18, quarters: 35, color: '#3B82F6', image: '/assets/city-yaounde.jpg', top: ['Informatique', 'Design', 'Menuiserie'] },
  { name: 'Bafoussam', region: 'Ouest', population: '400K', pros: 270, categories: 15, quarters: 15, color: '#10B981', image: '/assets/city-bafoussam.jpg', top: ['Maçonnerie', 'Couture', 'Ferronnerie'] },
  { name: 'Garoua', region: 'Nord', population: '500K', pros: 145, categories: 12, quarters: 15, color: '#F59E0B', image: '/assets/pro-at-work-1.jpg', top: ['Climatisation', 'BTP', 'Transport'] },
  { name: 'Bamenda', region: 'Nord-Ouest', population: '500K', pros: 189, categories: 14, quarters: 17, color: '#8B5CF6', image: '/assets/pro-at-work-2.jpg', top: ['Coiffure', 'Informatique', 'Médecine'] },
  { name: 'Ngaoundéré', region: 'Adamaoua', population: '300K', pros: 98, categories: 10, quarters: 13, color: '#EC4899', image: '/assets/pro-at-work-3.jpg', top: ['Jardinage', 'Maçonnerie', 'Menuiserie'] },
  { name: 'Maroua', region: 'Extrême-Nord', population: '450K', pros: 134, categories: 11, quarters: 17, color: '#F97316', image: '/assets/cover-plumbing.jpg', top: ['Électricité', 'Froid', 'Plomberie'] },
  { name: 'Bertoua', region: 'Est', population: '250K', pros: 87, categories: 10, quarters: 11, color: '#14B8A6', image: '/assets/cover-electrical.jpg', top: ['Nettoyage', 'Cuisine', 'Carrelage'] },
  { name: 'Ebolowa', region: 'Sud', population: '150K', pros: 56, categories: 9, quarters: 9, color: '#22C55E', image: '/assets/cover-carpentry.jpg', top: ['Jardinage', 'Électricité', 'Plomberie'] },
  { name: 'Buea', region: 'Sud-Ouest', population: '300K', pros: 167, categories: 13, quarters: 19, color: '#6366F1', image: '/assets/cat-cover-masonry.jpg', top: ['Informatique', 'Design', 'Coiffure'] },
  { name: 'Kribi', region: 'Sud', population: '100K', pros: 45, categories: 8, quarters: 12, color: '#06B6D4', image: '/assets/cat-cover-beauty.jpg', top: ['Plomberie', 'Nettoyage', 'Cuisine'] },
  { name: 'Limbe', region: 'Sud-Ouest', population: '200K', pros: 112, categories: 12, quarters: 15, color: '#A855F7', image: '/assets/cat-cover-mechanic.jpg', top: ['Mécanique', 'Électricité', 'Climatisation'] },
  { name: 'Edéa', region: 'Littoral', population: '150K', pros: 78, categories: 9, quarters: 10, color: '#EF4444', image: '/assets/pro-at-work-3.jpg', top: ['Électricité', 'BTP', 'Froid'] },
  { name: 'Kumba', region: 'Sud-Ouest', population: '300K', pros: 134, categories: 12, quarters: 12, color: '#84CC16', image: '/assets/cover-plumbing.jpg', top: ['Coiffure', 'Couture', 'Maçonnerie'] },
];

export default function CitiesV2() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCity, setActiveCity] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.city-card-v2', {
        y: 40, opacity: 0, scale: 0.97, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
      gsap.from('.city-tab', {
        y: 20, opacity: 0, duration: 0.4, ease: 'power3.out', stagger: 0.03,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const city = allCities[activeCity];

  return (
    <section ref={sectionRef} className="section-padding" style={{ background: '#0A0A0F' }}>
      <div className="container-main">
        <p className="overline mb-4">{t('cities.overline')}</p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4" style={{ color: '#F0F0F5' }}>
          {t('cities.title')}
        </h2>
        <p className="text-sm mb-8 max-w-lg" style={{ color: '#6B6B80' }}>
          {t('cities.subtitle')}
        </p>

        {/* City tabs - scrollable */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {allCities.map((c, i) => (
            <button
              key={i}
              className="city-tab flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap"
              style={{
                background: activeCity === i ? c.color : 'rgba(255,255,255,0.05)',
                color: activeCity === i ? '#0A0A0F' : '#F0F0F5',
                border: activeCity === i ? 'none' : '1px solid rgba(255,255,255,0.08)',
              }}
              onClick={() => setActiveCity(i)}
            >
              <MapPin size={13} />
              {c.name}
            </button>
          ))}
        </div>

        {/* City showcase */}
        <div
          className="city-card-v2 relative rounded-2xl overflow-hidden"
          style={{ minHeight: 440, border: `1px solid ${city.color}20` }}
        >
          <div className="absolute inset-0 bg-cover bg-center transition-all duration-700" style={{ backgroundImage: `url(${city.image})` }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,10,15,0.2) 0%, rgba(10,10,15,0.85) 50%, #0A0A0F 100%)' }} />

          <div className="relative z-10 p-8 md:p-10 flex flex-col justify-end h-full" style={{ minHeight: 440 }}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-1 rounded-full font-medium" style={{ background: `${city.color}30`, color: city.color }}>
                    {city.region}
                  </span>
                  <span className="text-xs" style={{ color: '#6B6B80' }}>~{city.population} hab.</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-bold mb-3" style={{ color: '#F0F0F5' }}>
                  {city.name}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {city.top.map((cat, j) => (
                    <span key={j} className="text-xs px-3 py-1.5 rounded-full font-medium" style={{ background: `${city.color}20`, color: city.color, border: `1px solid ${city.color}40` }}>
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-6 md:gap-8">
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold" style={{ color: city.color }}>{city.pros.toLocaleString()}</p>
                  <p className="text-xs flex items-center gap-1" style={{ color: '#6B6B80' }}><Users size={10} /> Pros</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold" style={{ color: city.color }}>{city.categories}</p>
                  <p className="text-xs" style={{ color: '#6B6B80' }}>Catégories</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold" style={{ color: city.color }}>{city.quarters}</p>
                  <p className="text-xs" style={{ color: '#6B6B80' }}>Quartiers</p>
                </div>
                <button className="btn-gold flex items-center gap-2 self-center">
                  {t('cities.explore')} <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* City count */}
        <p className="text-center text-xs mt-6" style={{ color: '#6B6B80' }}>
          {allCities.length} villes couvertes • {allCities.reduce((a, c) => a + c.pros, 0).toLocaleString()} professionnels • {allCities.reduce((a, c) => a + c.quarters, 0)} quartiers desservis
        </p>
      </div>
      <style>{`.scrollbar-hide::-webkit-scrollbar{display:none;}`}</style>
    </section>
  );
}

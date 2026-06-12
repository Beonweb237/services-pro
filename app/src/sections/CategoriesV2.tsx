import { useRef, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import {
  Droplets, Zap, Hammer, Mountain, Paintbrush, Flower2, Scissors,
  Ruler, Wrench, Monitor, Palette, Camera, ChefHat, Sparkles,
  Truck, Wind, Flame, Grid3x3, Cpu, CircleHelp
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const categoriesList = [
  { key: '1', icon: Droplets, proCount: 234, image: '/assets/cover-plumbing.jpg' },
  { key: '2', icon: Zap, proCount: 189, image: '/assets/cover-electrical.jpg' },
  { key: '3', icon: Hammer, proCount: 156, image: '/assets/cover-carpentry.jpg' },
  { key: '4', icon: Mountain, proCount: 142, image: '/assets/cat-cover-masonry.jpg' },
  { key: '5', icon: Paintbrush, proCount: 198, image: '/assets/cat-cover-beauty.jpg' },
  { key: '6', icon: Flower2, proCount: 87, image: '/assets/pro-at-work-3.jpg' },
  { key: '7', icon: Scissors, proCount: 267, image: '/assets/cat-cover-beauty.jpg' },
  { key: '8', icon: Ruler, proCount: 134, image: '/assets/pro-at-work-2.jpg' },
  { key: '9', icon: Wrench, proCount: 112, image: '/assets/cat-cover-mechanic.jpg' },
  { key: '10', icon: Monitor, proCount: 203, image: '/assets/pro-at-work-1.jpg' },
  { key: '11', icon: Palette, proCount: 178, image: '/assets/cover-electrical.jpg' },
  { key: '12', icon: Camera, proCount: 95, image: '/assets/cover-carpentry.jpg' },
  { key: '13', icon: ChefHat, proCount: 145, image: '/assets/pro-at-work-2.jpg' },
  { key: '14', icon: Sparkles, proCount: 220, image: '/assets/pro-at-work-3.jpg' },
  { key: '15', icon: Truck, proCount: 76, image: '/assets/cover-plumbing.jpg' },
  { key: '16', icon: Wind, proCount: 98, image: '/assets/cat-cover-mechanic.jpg' },
  { key: '17', icon: Flame, proCount: 67, image: '/assets/cat-cover-masonry.jpg' },
  { key: '18', icon: Grid3x3, proCount: 123, image: '/assets/cover-carpentry.jpg' },
  { key: '19', icon: Cpu, proCount: 54, image: '/assets/cover-electrical.jpg' },
  { key: '20', icon: CircleHelp, proCount: 41, image: '/assets/pro-at-work-1.jpg' },
];

export default function CategoriesV2() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.category-card', {
        y: 40,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.05,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="categories"
      className="section-padding"
      style={{ background: '#0A0A0F' }}
    >
      <div className="container-main">
        <p className="overline mb-4">{t('categories.overline')}</p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-10" style={{ color: '#F0F0F5' }}>
          {t('categories.title')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categoriesList.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.key}
                className="category-card group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1"
                style={{
                  height: 160,
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(212, 168, 83, 0.3)';
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(212, 168, 83, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <img
                    src={cat.image}
                    alt=""
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300 group-hover:scale-110"
                    style={{ transition: 'opacity 0.3s, transform 0.5s' }}
                  />
                </div>
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(180deg, rgba(10,10,15,0.5) 0%, rgba(10,10,15,0.95) 100%)' }}
                />
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(212, 168, 83, 0.15)' }}
                    >
                      <Icon size={20} style={{ color: '#D4A853' }} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold" style={{ color: '#F0F0F5' }}>
                        {t(`categories.${cat.key}`)}
                      </h4>
                      <p className="text-xs" style={{ color: '#6B6B80' }}>
                        {cat.proCount}{t('categories.pro_count')}
                      </p>
                    </div>
                  </div>
                  {/* Hover progress bar */}
                  <div
                    className="h-0.5 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: 'rgba(255,255,255,0.1)' }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${Math.min(100, (cat.proCount / 300) * 100)}%`,
                        background: 'linear-gradient(90deg, #D4A853, #E8C87A)',
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

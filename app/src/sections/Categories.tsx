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
  { key: '1', icon: Droplets, proCount: 234 },
  { key: '2', icon: Zap, proCount: 189 },
  { key: '3', icon: Hammer, proCount: 156 },
  { key: '4', icon: Mountain, proCount: 142 },
  { key: '5', icon: Paintbrush, proCount: 198 },
  { key: '6', icon: Flower2, proCount: 87 },
  { key: '7', icon: Scissors, proCount: 267 },
  { key: '8', icon: Ruler, proCount: 134 },
  { key: '9', icon: Wrench, proCount: 112 },
  { key: '10', icon: Monitor, proCount: 203 },
  { key: '11', icon: Palette, proCount: 178 },
  { key: '12', icon: Camera, proCount: 95 },
  { key: '13', icon: ChefHat, proCount: 145 },
  { key: '14', icon: Sparkles, proCount: 220 },
  { key: '15', icon: Truck, proCount: 76 },
  { key: '16', icon: Wind, proCount: 98 },
  { key: '17', icon: Flame, proCount: 67 },
  { key: '18', icon: Grid3x3, proCount: 123 },
  { key: '19', icon: Cpu, proCount: 54 },
  { key: '20', icon: CircleHelp, proCount: 41 },
];

export default function Categories() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.category-card', {
        y: 40,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.06,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categoriesList.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.key}
                className="category-card group flex items-center gap-4 p-5 rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: '#14141E',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(212, 168, 83, 0.3)';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(212, 168, 83, 0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                  style={{ background: 'rgba(212, 168, 83, 0.1)' }}
                >
                  <Icon size={24} style={{ color: '#D4A853' }} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-0.5" style={{ color: '#F0F0F5' }}>
                    {t(`categories.${cat.key}`)}
                  </h4>
                  <p className="text-xs" style={{ color: '#6B6B80' }}>
                    {cat.proCount}{t('categories.pro_count')}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

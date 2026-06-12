import { useRef, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import {
  Scale, Calculator, HeartPulse, HardHat, Code, Megaphone,
  GraduationCap, Building2, Sparkles, Leaf
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const families = [
  { key: '1', icon: Scale, pros: 89, color: '#6366F1' },
  { key: '2', icon: Calculator, pros: 134, color: '#10B981' },
  { key: '3', icon: HeartPulse, pros: 267, color: '#EF4444' },
  { key: '4', icon: HardHat, pros: 456, color: '#F59E0B' },
  { key: '5', icon: Code, pros: 203, color: '#3B82F6' },
  { key: '6', icon: Megaphone, pros: 156, color: '#EC4899' },
  { key: '7', icon: GraduationCap, pros: 178, color: '#8B5CF6' },
  { key: '8', icon: Building2, pros: 112, color: '#14B8A6' },
  { key: '9', icon: Sparkles, pros: 345, color: '#F97316' },
  { key: '10', icon: Leaf, pros: 87, color: '#22C55E' },
];

export default function Families() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.family-card', {
        y: 40,
        opacity: 0,
        scale: 0.95,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding" style={{ background: '#14141E' }}>
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="overline mb-4">{t('families.overline')}</p>
          <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: '#F0F0F5' }}>
            {t('families.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {families.map((fam) => {
            const Icon = fam.icon;
            return (
              <div
                key={fam.key}
                className="family-card group p-5 rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-2"
                style={{
                  background: '#1A1A28',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${fam.color}40`;
                  e.currentTarget.style.boxShadow = `0 10px 40px ${fam.color}15`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                  style={{ background: `${fam.color}20` }}
                >
                  <Icon size={22} style={{ color: fam.color }} />
                </div>
                <h4 className="text-sm font-semibold mb-1" style={{ color: '#F0F0F5' }}>
                  {t(`families.${fam.key}`)}
                </h4>
                <p className="text-xs mb-2" style={{ color: '#6B6B80' }}>
                  {t(`families.${fam.key}_desc`)}
                </p>
                <p className="text-xs font-medium" style={{ color: fam.color }}>
                  {fam.pros}{t('families.pros')}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { useRef, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Star, Award, Crown, Gem } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const levels = [
  { key: '1', icon: Star, color: '#6B6B80', bgColor: '#2A2A3A', borderColor: 'rgba(255,255,255,0.08)' },
  { key: '2', icon: Award, color: '#3B82F6', bgColor: '#1a2040', borderColor: 'rgba(59,130,246,0.3)' },
  { key: '3', icon: Crown, color: '#D4A853', bgColor: '#2a2010', borderColor: 'rgba(212,168,83,0.3)' },
  { key: '4', icon: Gem, color: '#A78BFA', bgColor: '#1f1535', borderColor: 'rgba(167,139,250,0.3)' },
];

export default function Levels() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.level-card', {
        y: 50,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
      // Connector line animation
      gsap.from('.level-connector', {
        scaleX: 0,
        transformOrigin: 'left',
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding" style={{ background: '#0A0A0F' }}>
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="overline mb-4">{t('levels.overline')}</p>
          <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: '#F0F0F5' }}>
            {t('levels.title')}
          </h2>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div
            className="level-connector hidden lg:block absolute top-16 left-[12%] right-[12%] h-0.5"
            style={{ background: 'linear-gradient(90deg, #6B6B80, #3B82F6, #D4A853, #A78BFA)' }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {levels.map((level) => {
              const Icon = level.icon;
              return (
                <div
                  key={level.key}
                  className="level-card flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2"
                  style={{
                    background: level.bgColor,
                    border: `1px solid ${level.borderColor}`,
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{ background: `${level.color}20`, border: `2px solid ${level.color}` }}
                  >
                    <Icon size={28} style={{ color: level.color }} />
                  </div>
                  <h4 className="text-lg font-bold mb-2" style={{ color: level.color }}>
                    {t(`levels.${level.key}_name`)}
                  </h4>
                  <p className="text-sm" style={{ color: '#6B6B80' }}>
                    {t(`levels.${level.key}_desc`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-10">
          <button className="btn-gold">{t('levels.cta')}</button>
        </div>
      </div>
    </section>
  );
}

import { useRef, useEffect, useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Users, Briefcase, Star, MapPin, TrendingUp, Shield } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  trigger: boolean;
}

function AnimatedCounter({ end, duration = 2.5, suffix = '', trigger }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let startTime: number;
    let raf: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * end));
      if (progress < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [trigger, end, duration]);

  return <>{count.toLocaleString()}{suffix}</>;
}

const stats = [
  { icon: Users, value: 2400, suffix: '+', labelKey: 'stats.pros', sub: '98% vérifiés' },
  { icon: Briefcase, value: 15000, suffix: '+', labelKey: 'stats.missions', sub: 'Ce mois' },
  { icon: Star, value: 48, suffix: '', labelKey: 'stats.rating', sub: '/5.0 moyenne' },
  { icon: MapPin, value: 12, suffix: '', labelKey: 'stats.cities', sub: 'Villes couvertes' },
  { icon: TrendingUp, value: 92, suffix: '%', labelKey: 'stats.satisfaction', sub: 'Clients satisfaits' },
  { icon: Shield, value: 100, suffix: '%', labelKey: 'stats.secure', sub: 'Paiements sécurisés' },
];

export default function Stats() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 85%',
        onEnter: () => setTriggered(true),
      });

      gsap.from('.stat-card', {
        y: 50,
        opacity: 0,
        scale: 0.9,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding"
      style={{
        background: 'linear-gradient(135deg, #0A0A0F 0%, #14141E 50%, #0A0A0F 100%)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="overline mb-4">{t('stats.overline')}</p>
          <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: '#F0F0F5' }}>
            {t('stats.title')}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="stat-card group flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2"
                style={{
                  background: '#14141E',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(212, 168, 83, 0.3)';
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(212, 168, 83, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ background: 'rgba(212, 168, 83, 0.1)' }}
                >
                  <Icon size={26} style={{ color: '#D4A853' }} />
                </div>
                <p
                  className="text-2xl md:text-3xl font-bold mb-1 tabular-nums"
                  style={{ color: '#D4A853' }}
                >
                  <AnimatedCounter
                    end={stat.value}
                    trigger={triggered}
                    suffix={stat.suffix}
                  />
                </p>
                <p className="text-sm font-medium mb-1" style={{ color: '#F0F0F5' }}>
                  {t(stat.labelKey)}
                </p>
                <p className="text-xs" style={{ color: '#6B6B80' }}>{stat.sub}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

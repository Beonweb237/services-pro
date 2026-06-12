import { useRef, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Check, Circle, Clock, Rocket, Shield, Zap, Brain } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const phases = [
  {
    key: '1', icon: Rocket, status: 'done',
    items: ['phase1_1', 'phase1_2', 'phase1_3', 'phase1_4'],
    color: '#2ECC71',
    bgColor: '#2ECC7115',
  },
  {
    key: '2', icon: Shield, status: 'active',
    items: ['phase2_1', 'phase2_2', 'phase2_3', 'phase2_4'],
    color: '#D4A853',
    bgColor: '#D4A85315',
  },
  {
    key: '3', icon: Zap, status: 'upcoming',
    items: ['phase3_1', 'phase3_2', 'phase3_3', 'phase3_4'],
    color: '#6B6B80',
    bgColor: 'rgba(255,255,255,0.05)',
  },
  {
    key: '4', icon: Brain, status: 'upcoming',
    items: ['phase4_1', 'phase4_2', 'phase4_3', 'phase4_4'],
    color: '#6B6B80',
    bgColor: 'rgba(255,255,255,0.05)',
  },
];

export default function Roadmap() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.roadmap-phase', {
        y: 40, opacity: 0, duration: 0.7, ease: 'power3.out', stagger: 0.15,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const statusIcon = (status: string, color: string) => {
    if (status === 'done') return <Check size={16} style={{ color }} />;
    if (status === 'active') return <Circle size={16} style={{ color }} />;
    return <Clock size={16} style={{ color }} />;
  };

  const statusLabel = (status: string) => {
    if (status === 'done') return t('roadmap.status_done');
    if (status === 'active') return t('roadmap.status_active');
    return t('roadmap.status_upcoming');
  };

  return (
    <section ref={sectionRef} className="section-padding" style={{ background: '#14141E' }}>
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="overline mb-4">{t('roadmap.overline')}</p>
          <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: '#F0F0F5' }}>
            {t('roadmap.title')}
          </h2>
        </div>

        {/* Timeline connector */}
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2" style={{ background: 'linear-gradient(180deg, #2ECC71, #D4A853, rgba(255,255,255,0.1), rgba(255,255,255,0.05))' }} />

          <div className="space-y-8 lg:space-y-0">
            {phases.map((phase, i) => {
              const Icon = phase.icon;
              const isLeft = i % 2 === 0;
              return (
                <div key={phase.key} className={`roadmap-phase lg:grid lg:grid-cols-2 lg:gap-16 ${i > 0 ? 'lg:mt-[-40px]' : ''} ${i < phases.length - 1 ? 'lg:mb-12' : ''}`}>
                  {/* Left side */}
                  <div className={`${isLeft ? 'lg:text-right lg:pr-8' : 'lg:col-start-2 lg:pl-8'}`}>
                    <div
                      className={`p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${isLeft ? '' : 'lg:col-start-2'}`}
                      style={{ background: phase.bgColor, border: `1px solid ${phase.color}30` }}
                    >
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'lg:flex-row-reverse' : ''}`}>
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `${phase.color}20` }}>
                          <Icon size={20} style={{ color: phase.color }} />
                        </div>
                        <div className={isLeft ? 'lg:text-right' : ''}>
                          <h4 className="text-sm font-bold" style={{ color: phase.color }}>{t(`roadmap.phase${phase.key}_title`)}</h4>
                          <p className="text-xs" style={{ color: '#6B6B80' }}>{t(`roadmap.phase${phase.key}_time`)}</p>
                        </div>
                        <span className={`ml-auto flex items-center gap-1 text-xs px-2 py-0.5 rounded-full lg:ml-0 ${isLeft ? 'lg:mr-auto lg:ml-0' : ''}`} style={{ background: `${phase.color}20`, color: phase.color }}>
                          {statusIcon(phase.status, phase.color)} {statusLabel(phase.status)}
                        </span>
                      </div>
                      <ul className="space-y-1.5">
                        {phase.items.map((_item, j) => (
                          <li key={j} className={`flex items-center gap-2 text-sm ${isLeft ? 'lg:flex-row-reverse' : ''}`} style={{ color: phase.status === 'upcoming' ? '#6B6B80' : '#F0F0F5' }}>
                            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: phase.color }} />
                            {t(`roadmap.phase${phase.key}_${j + 1}`)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Center dot on timeline */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                    <div className="w-4 h-4 rounded-full" style={{ background: phase.color, boxShadow: `0 0 12px ${phase.color}60` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

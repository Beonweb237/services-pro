import { useRef, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Award, Clock, Lock, Headphones, TrendingUp, CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const trustItems = [
  { icon: Award, titleKey: 'trust.verified', descKey: 'trust.verified_desc' },
  { icon: Clock, titleKey: 'trust.fast', descKey: 'trust.fast_desc' },
  { icon: Lock, titleKey: 'trust.secure', descKey: 'trust.secure_desc' },
  { icon: Headphones, titleKey: 'trust.support', descKey: 'trust.support_desc' },
  { icon: TrendingUp, titleKey: 'trust.growth', descKey: 'trust.growth_desc' },
  { icon: CheckCircle, titleKey: 'trust.guarantee', descKey: 'trust.guarantee_desc' },
];

export default function TrustBanner() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.trust-item', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16"
      style={{
        background: 'linear-gradient(90deg, rgba(212,168,83,0.08) 0%, rgba(212,168,83,0.02) 50%, rgba(212,168,83,0.08) 100%)',
        borderTop: '1px solid rgba(212, 168, 83, 0.15)',
        borderBottom: '1px solid rgba(212, 168, 83, 0.15)',
      }}
    >
      <div className="container-main">
        <p className="text-center text-xs uppercase tracking-widest mb-10" style={{ color: '#D4A853' }}>
          {t('trust.overline')}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {trustItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="trust-item flex flex-col items-center text-center">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: 'rgba(212, 168, 83, 0.1)' }}
                >
                  <Icon size={22} style={{ color: '#D4A853' }} />
                </div>
                <p className="text-sm font-medium mb-1" style={{ color: '#F0F0F5' }}>
                  {t(item.titleKey)}
                </p>
                <p className="text-xs" style={{ color: '#6B6B80' }}>
                  {t(item.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

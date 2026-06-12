import { useRef, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Search, ShieldCheck, CreditCard, Award, TrendingUp, Users, Star, MessageCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const clientFeatures = [
  { icon: Search, text: 'value.client_1' },
  { icon: ShieldCheck, text: 'value.client_2' },
  { icon: CreditCard, text: 'value.client_3' },
  { icon: Award, text: 'value.client_4' },
];

const proFeatures = [
  { icon: TrendingUp, text: 'value.pro_1' },
  { icon: Users, text: 'value.pro_2' },
  { icon: Star, text: 'value.pro_3' },
  { icon: MessageCircle, text: 'value.pro_4' },
];

export default function ValueProp() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.value-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding" style={{ background: '#0A0A0F' }}>
      <div className="container-main">
        <p className="overline mb-4">{t('value.overline')}</p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-12" style={{ color: '#F0F0F5' }}>
          {t('value.title')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Client card */}
          <div
            className="value-card p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1"
            style={{
              background: '#14141E',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(46,204,113,0.3)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(46,204,113,0.15)' }}>
                <Search size={24} style={{ color: '#2ECC71' }} />
              </div>
              <h3 className="text-xl font-semibold" style={{ color: '#F0F0F5' }}>{t('value.client_title')}</h3>
            </div>
            <p className="text-sm mb-6" style={{ color: '#6B6B80', lineHeight: 1.7 }}>
              {t('value.client_body')}
            </p>
            <ul className="space-y-3 mb-8">
              {clientFeatures.map((f, i) => {
                const Icon = f.icon;
                return (
                  <li key={i} className="flex items-center gap-3">
                    <Icon size={16} style={{ color: '#2ECC71', flexShrink: 0 }} />
                    <span className="text-sm" style={{ color: '#F0F0F5' }}>{t(f.text)}</span>
                  </li>
                );
              })}
            </ul>
            <button className="btn-gold">{t('value.cta_client')}</button>
          </div>

          {/* Pro card */}
          <div
            className="value-card p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1"
            style={{
              background: '#14141E',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(212,168,83,0.3)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(212,168,83,0.15)' }}>
                <TrendingUp size={24} style={{ color: '#D4A853' }} />
              </div>
              <h3 className="text-xl font-semibold" style={{ color: '#F0F0F5' }}>{t('value.pro_title')}</h3>
            </div>
            <p className="text-sm mb-6" style={{ color: '#6B6B80', lineHeight: 1.7 }}>
              {t('value.pro_body')}
            </p>
            <ul className="space-y-3 mb-8">
              {proFeatures.map((f, i) => {
                const Icon = f.icon;
                return (
                  <li key={i} className="flex items-center gap-3">
                    <Icon size={16} style={{ color: '#D4A853', flexShrink: 0 }} />
                    <span className="text-sm" style={{ color: '#F0F0F5' }}>{t(f.text)}</span>
                  </li>
                );
              })}
            </ul>
            <button className="btn-outline" style={{ borderColor: 'rgba(212,168,83,0.3)', color: '#D4A853' }}>
              {t('value.cta_pro')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

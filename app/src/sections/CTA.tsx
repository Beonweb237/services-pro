import { useRef, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    'cta.feature_1',
    'cta.feature_2',
    'cta.feature_3',
    'cta.feature_4',
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-left > *', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      gsap.from('.cta-right', {
        x: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
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
      id="become-pro"
      className="section-padding"
      style={{
        background: 'linear-gradient(180deg, #0A0A0F 0%, #14141E 100%)',
      }}
    >
      <div className="container-main">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left - text */}
          <div className="cta-left flex-1">
            <h2 className="text-3xl md:text-4xl font-semibold mb-5" style={{ color: '#F0F0F5' }}>
              {t('cta.title')}
            </h2>
            <p className="text-base mb-8" style={{ color: '#6B6B80', lineHeight: 1.7 }}>
              {t('cta.body')}
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle size={18} style={{ color: '#D4A853', flexShrink: 0 }} />
                  <span className="text-sm" style={{ color: '#F0F0F5' }}>{t(feature)}</span>
                </li>
              ))}
            </ul>

            <button className="btn-gold text-base px-8 py-3">
              {t('cta.button')}
            </button>
          </div>

          {/* Right - phone mockup */}
          <div className="cta-right flex-1 flex justify-center items-center">
            <div
              className="relative w-[280px] h-[560px] rounded-[40px] p-3 overflow-hidden"
              style={{
                background: 'linear-gradient(180deg, #1a1530 0%, #14141E 100%)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 30px 60px rgba(0,0,0,0.5), 0 0 80px rgba(212, 168, 83, 0.05)',
              }}
            >
              {/* Screen inner */}
              <div
                className="w-full h-full rounded-[32px] overflow-hidden flex flex-col"
                style={{
                  background: '#0A0A0F',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                {/* Dashboard header */}
                <div
                  className="p-5 pb-3"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <p className="text-xs mb-1" style={{ color: '#6B6B80' }}>Tableau de bord Pro</p>
                  <p className="text-lg font-bold" style={{ color: '#D4A853' }}>Jean Kouam</p>
                </div>

                {/* Score section */}
                <div className="p-5 flex items-center gap-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(212, 168, 83, 0.15)', border: '2px solid #D4A853' }}
                  >
                    <span className="text-xl font-bold" style={{ color: '#D4A853' }}>94</span>
                  </div>
                  <div>
                    <p className="text-xs" style={{ color: '#6B6B80' }}>Pro Score</p>
                    <p className="text-sm font-medium" style={{ color: '#2ECC71' }}>+2 ce mois</p>
                  </div>
                </div>

                {/* Mini chart */}
                <div className="p-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <p className="text-xs mb-3" style={{ color: '#6B6B80' }}>Évolution Score</p>
                  <div className="flex items-end gap-1 h-16">
                    {[40, 55, 50, 65, 60, 75, 70, 85, 80, 94].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm"
                        style={{
                          height: `${h}%`,
                          background: i === 9 ? '#D4A853' : 'rgba(212, 168, 83, 0.2)',
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Notifications */}
                <div className="p-5">
                  <p className="text-xs mb-3" style={{ color: '#6B6B80' }}>Notifications récentes</p>
                  {[
                    { text: 'Nouvel avis 5 étoiles', sub: 'Il y a 2h', color: '#2ECC71' },
                    { text: 'Réservation confirmée', sub: 'Il y a 4h', color: '#D4A853' },
                    { text: 'Demande de devis', sub: 'Il y a 6h', color: '#F5A623' },
                  ].map((notif, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 py-2"
                      style={{ borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}
                    >
                      <div
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ background: notif.color }}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs truncate" style={{ color: '#F0F0F5' }}>{notif.text}</p>
                        <p className="text-xs" style={{ color: '#6B6B80' }}>{notif.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

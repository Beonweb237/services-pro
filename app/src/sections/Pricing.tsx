import { useRef, useEffect, useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Check, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    key: 'free',
    features: ['free_1', 'free_2', 'free_3', 'free_4'],
    highlight: false,
    borderColor: 'rgba(255,255,255,0.06)',
  },
  {
    key: 'pro',
    features: ['pro_1', 'pro_2', 'pro_3', 'pro_4', 'pro_5'],
    highlight: true,
    borderColor: 'rgba(212,168,83,0.3)',
  },
  {
    key: 'expert',
    features: ['expert_1', 'expert_2', 'expert_3', 'expert_4', 'expert_5'],
    highlight: false,
    borderColor: 'rgba(212,168,83,0.2)',
  },
  {
    key: 'elite',
    features: ['elite_1', 'elite_2', 'elite_3', 'elite_4', 'elite_5'],
    highlight: false,
    borderColor: 'rgba(167,139,250,0.3)',
  },
];

export default function Pricing() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pricing-card', {
        y: 50, opacity: 0, duration: 0.7, ease: 'power3.out', stagger: 0.12,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding" style={{ background: '#0A0A0F' }}>
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="overline mb-4">{t('pricing.overline')}</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-3" style={{ color: '#F0F0F5' }}>
            {t('pricing.title')}
          </h2>
          <p className="text-sm" style={{ color: '#6B6B80' }}>{t('pricing.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.key}
              className="pricing-card relative rounded-2xl p-6 transition-all duration-300"
              style={{
                background: plan.key === 'elite' ? '#1f1535' : plan.key === 'pro' ? '#1A1A28' : '#14141E',
                border: `1px solid ${plan.highlight ? '#D4A85350' : plan.borderColor}`,
                boxShadow: hovered === plan.key || plan.highlight ? '0 10px 40px rgba(212,168,83,0.08)' : 'none',
                transform: hovered === plan.key ? 'translateY(-4px)' : 'none',
              }}
              onMouseEnter={() => setHovered(plan.key)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Popular badge */}
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium" style={{ background: '#D4A853', color: '#0A0A0F' }}>
                  <Sparkles size={12} /> {t('pricing.popular')}
                </div>
              )}

              <div className="mb-6">
                <h4 className="text-lg font-bold mb-1" style={{ color: '#F0F0F5' }}>
                  {t(`pricing.${plan.key}_name`)}
                </h4>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold" style={{ color: plan.key === 'elite' ? '#A78BFA' : '#D4A853' }}>
                    {t(`pricing.${plan.key}_price`)}
                  </span>
                  <span className="text-xs" style={{ color: '#6B6B80' }}>
                    {t(`pricing.${plan.key}_period`)}
                  </span>
                </div>
                <p className="text-xs mt-1" style={{ color: '#6B6B80' }}>
                  {t(`pricing.${plan.key}_commission`)}
                </p>
              </div>

              <ul className="space-y-2.5 mb-8">
                {plan.features.map((_f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check size={14} style={{ color: plan.key === 'elite' ? '#A78BFA' : '#D4A853', flexShrink: 0 }} />
                    <span className="text-sm" style={{ color: '#F0F0F5' }}>{t(`pricing.${plan.key}_${i + 1}`)}</span>
                  </li>
                ))}
              </ul>

              <button
                className="w-full py-2.5 rounded-xl text-sm font-medium transition-all"
                style={{
                  background: plan.highlight ? '#D4A853' : 'transparent',
                  color: plan.highlight ? '#0A0A0F' : plan.key === 'elite' ? '#A78BFA' : '#D4A853',
                  border: plan.highlight ? 'none' : `1px solid ${plan.key === 'elite' ? '#A78BFA40' : '#D4A85340'}`,
                }}
              >
                {t(`pricing.cta_${plan.key}`)}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

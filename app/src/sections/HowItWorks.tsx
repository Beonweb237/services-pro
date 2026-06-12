import { useRef, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Search, MessageCircle, Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: '01',
    titleKey: 'howitworks.step1_title',
    bodyKey: 'howitworks.step1_body',
    Icon: Search,
  },
  {
    num: '02',
    titleKey: 'howitworks.step2_title',
    bodyKey: 'howitworks.step2_body',
    Icon: MessageCircle,
  },
  {
    num: '03',
    titleKey: 'howitworks.step3_title',
    bodyKey: 'howitworks.step3_body',
    Icon: Star,
  },
];

export default function HowItWorks() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.how-step', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });

      gsap.from('.step-number', {
        scale: 0,
        duration: 0.5,
        ease: 'back.out(1.7)',
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="section-padding"
      style={{ background: '#14141E' }}
    >
      <div className="container-main">
        <p className="overline mb-4">{t('howitworks.overline')}</p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-14" style={{ color: '#F0F0F5' }}>
          {t('howitworks.title')}
        </h2>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Dashed connector line - desktop only */}
          <div
            className="hidden md:block absolute top-12 left-[20%] right-[20%]"
            style={{
              borderTop: '1px dashed rgba(212, 168, 83, 0.3)',
              zIndex: 0,
            }}
          />

          {steps.map((step, i) => {
            const Icon = step.Icon;
            return (
              <div key={i} className="how-step relative z-10 flex flex-col items-center text-center">
                <div
                  className="step-number w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{
                    background: 'rgba(212, 168, 83, 0.15)',
                    border: '2px solid #D4A853',
                  }}
                >
                  <span className="text-lg font-bold" style={{ color: '#D4A853' }}>{step.num}</span>
                </div>

                {/* Mock visual */}
                <div
                  className="w-full h-40 rounded-2xl mb-6 flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #1A1A28 0%, #252538 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  <Icon size={40} style={{ color: 'rgba(212, 168, 83, 0.4)' }} />
                </div>

                <h3 className="text-xl font-semibold mb-3" style={{ color: '#F0F0F5' }}>
                  {t(step.titleKey)}
                </h3>
                <p className="text-sm" style={{ color: '#6B6B80', lineHeight: 1.6, maxWidth: 300 }}>
                  {t(step.bodyKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

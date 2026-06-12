import { useRef, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Award, Clock, MessageSquare, DollarSign, Shield } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const scoreDimensions = [
  { icon: Award, labelKey: 'proscore.quality', percent: 30 },
  { icon: Clock, labelKey: 'proscore.punctuality', percent: 20 },
  { icon: MessageSquare, labelKey: 'proscore.communication', percent: 20 },
  { icon: DollarSign, labelKey: 'proscore.value', percent: 20 },
  { icon: Shield, labelKey: 'proscore.professionalism', percent: 10 },
];

export default function ProScore() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<SVGCircleElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left column animation
      gsap.from('.proscore-left > *', {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });

      // Progress bars animation
      gsap.from('.score-bar-fill', {
        scaleX: 0,
        transformOrigin: 'left',
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });

      // Ring animation
      ringRef.current.forEach((circle, i) => {
        if (!circle) return;
        const circumference = 2 * Math.PI * (140 - i * 20);
        const segmentLength = circumference * (scoreDimensions[i].percent / 100);
        gsap.fromTo(circle,
          { strokeDashoffset: circumference },
          {
            strokeDashoffset: circumference - segmentLength,
            duration: 0.6,
            ease: 'power3.out',
            delay: 0.3 + i * 0.3,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
            },
          }
        );
      });

      // Ring scale
      gsap.from('.score-ring-container', {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
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
      id="proscore"
      className="section-padding relative"
      style={{
        background: '#0A0A0F',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <div className="container-main">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left column - text */}
          <div className="proscore-left flex-1 lg:max-w-[55%]">
            <p className="overline mb-4">{t('proscore.overline')}</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-5" style={{ color: '#F0F0F5' }}>
              {t('proscore.title')}
            </h2>
            <p className="text-base mb-8" style={{ color: '#6B6B80', lineHeight: 1.7 }}>
              {t('proscore.body')}
            </p>

            {/* Scoring breakdown */}
            <div className="space-y-4 mb-8">
              {scoreDimensions.map((dim, i) => {
                const Icon = dim.icon;
                return (
                  <div key={i} className="flex items-center gap-3">
                    <Icon size={18} style={{ color: '#D4A853', flexShrink: 0 }} />
                    <span className="text-sm w-40" style={{ color: '#F0F0F5' }}>
                      {t(dim.labelKey)}
                    </span>
                    <span className="text-sm font-semibold w-10 text-right" style={{ color: '#D4A853' }}>
                      {dim.percent}{t('proscore.percent')}
                    </span>
                    <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: '#1A1A28' }}>
                      <div
                        className="score-bar-fill h-full rounded-full"
                        style={{
                          width: `${dim.percent * 2}%`,
                          background: `linear-gradient(90deg, #D4A853 0%, #E8C87A 100%)`,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="btn-outline">
              {t('proscore.cta')}
            </button>
          </div>

          {/* Right column - animated ring */}
          <div className="score-ring-container flex-1 flex justify-center items-center">
            <div className="relative" style={{ width: 320, height: 320 }}>
              <svg
                width="320"
                height="320"
                viewBox="0 0 320 320"
                className="transform -rotate-90"
              >
                {/* Background circles */}
                {[140, 120, 100, 80, 60].map((r, i) => (
                  <circle
                    key={`bg-${i}`}
                    cx="160"
                    cy="160"
                    r={r}
                    fill="none"
                    stroke="rgba(255,255,255,0.04)"
                    strokeWidth="16"
                  />
                ))}
                {/* Animated segments */}
                {[140, 120, 100, 80, 60].map((r, i) => {
                  const circumference = 2 * Math.PI * r;
                  const _segmentLength = circumference * (scoreDimensions[i].percent / 100); void _segmentLength;
                  const opacities = [1, 0.8, 0.6, 0.4, 0.2];
                  return (
                    <circle
                      key={`seg-${i}`}
                      ref={(el) => { if (el) ringRef.current[i] = el; }}
                      cx="160"
                      cy="160"
                      r={r}
                      fill="none"
                      stroke={`rgba(212, 168, 83, ${opacities[i]})`}
                      strokeWidth="16"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      strokeDashoffset={circumference}
                    />
                  );
                })}
              </svg>
              {/* Center text */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <span
                  className="text-6xl font-bold tabular-nums"
                  style={{ color: '#D4A853' }}
                >
                  100
                </span>
                <span className="text-xs uppercase tracking-wider mt-1" style={{ color: '#6B6B80' }}>
                  Pro Score
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

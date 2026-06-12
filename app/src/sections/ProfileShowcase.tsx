import { useRef, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { BadgeCheck, Zap, Star, CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProfileShowcase() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.profile-card', {
        x: 60,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });

      gsap.from('.anno-label', {
        opacity: 0,
        x: 20,
        duration: 0.5,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const weekDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  const dayColors = ['#2ECC71', '#2ECC71', '#F5A623', '#2ECC71', '#2ECC71', '#E74C3C', '#2ECC71'];

  return (
    <section
      ref={sectionRef}
      className="section-padding"
      style={{ background: '#0A0A0F' }}
    >
      <div className="container-main">
        <p className="overline mb-4">{t('profile.overline')}</p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-10" style={{ color: '#F0F0F5' }}>
          {t('profile.title')}
        </h2>

        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Profile card mockup */}
          <div
            className="profile-card relative w-full lg:w-[60%] rounded-2xl overflow-hidden"
            style={{
              background: '#14141E',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            {/* Cover photo */}
            <div
              className="h-48 w-full"
              style={{
                background: 'linear-gradient(135deg, #1a1030 0%, #2a1a40 40%, #1a1530 100%)',
              }}
            />

            {/* Avatar */}
            <div className="relative px-6">
              <div
                className="absolute -top-10 w-20 h-20 rounded-full overflow-hidden"
                style={{
                  border: '3px solid #14141E',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                }}
              >
                <img
                  src="/assets/pro-avatar-1.jpg"
                  alt={t('profile.name') as string}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Card content */}
            <div className="pt-14 px-6 pb-6">
              {/* Name & badges */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <h3 className="text-xl font-bold mr-2" style={{ color: '#F0F0F5' }}>
                  {t('profile.name')}
                </h3>
                <span
                  className="flex items-center gap-1 text-xs px-2 py-1 rounded-full"
                  style={{ background: 'rgba(46, 204, 113, 0.15)', color: '#2ECC71' }}
                >
                  <BadgeCheck size={12} /> {t('profile.badge_verified')}
                </span>
                <span
                  className="flex items-center gap-1 text-xs px-2 py-1 rounded-full"
                  style={{ background: 'rgba(212, 168, 83, 0.15)', color: '#D4A853' }}
                >
                  <Zap size={12} /> {t('profile.badge_expert')}
                </span>
                <span
                  className="flex items-center gap-1 text-xs px-2 py-1 rounded-full"
                  style={{ background: 'rgba(245, 166, 35, 0.15)', color: '#F5A623' }}
                >
                  <Zap size={12} /> {t('profile.badge_fast')}
                </span>
              </div>

              {/* Pro Score & Stats */}
              <div className="flex flex-wrap items-center gap-6 mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(212, 168, 83, 0.15)', border: '2px solid #D4A853' }}
                  >
                    <span className="text-lg font-bold" style={{ color: '#D4A853' }}>94</span>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider" style={{ color: '#6B6B80' }}>Pro Score</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="text-sm font-bold" style={{ color: '#F0F0F5' }}>156</p>
                    <p className="text-xs" style={{ color: '#6B6B80' }}>{t('profile.stat_reviews')}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold flex items-center gap-1" style={{ color: '#F0F0F5' }}>
                      <Star size={12} style={{ color: '#D4A853' }} /> 4.8
                    </p>
                    <p className="text-xs" style={{ color: '#6B6B80' }}>{t('profile.stat_stars')}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold" style={{ color: '#F0F0F5' }}>98%</p>
                    <p className="text-xs" style={{ color: '#6B6B80' }}>{t('profile.stat_completion')}</p>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <p className="text-sm mb-5" style={{ color: '#6B6B80', lineHeight: 1.6 }}>
                {t('profile.bio')}
              </p>

              {/* Availability strip */}
              <div className="mb-5">
                <p className="text-xs uppercase tracking-wider mb-2" style={{ color: '#6B6B80' }}>
                  Disponibilité
                </p>
                <div className="flex gap-2">
                  {weekDays.map((day, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-xs font-medium"
                      style={{
                        background: dayColors[i] === '#2ECC71' ? 'rgba(46, 204, 113, 0.15)' :
                          dayColors[i] === '#F5A623' ? 'rgba(245, 166, 35, 0.15)' :
                            'rgba(231, 76, 60, 0.15)',
                        color: dayColors[i],
                      }}
                    >
                      {day}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex gap-3">
                <button className="btn-gold text-sm">{t('profile.contact')}</button>
                <button className="btn-outline text-sm">{t('profile.quote')}</button>
              </div>
            </div>
          </div>

          {/* Annotations */}
          <div className="flex-1 flex flex-col gap-5 justify-center">
            {[
              { label: t('profile.anno_verified'), color: '#2ECC71' },
              { label: t('profile.anno_score'), color: '#D4A853' },
              { label: t('profile.anno_reviews'), color: '#F0F0F5' },
              { label: t('profile.anno_calendar'), color: '#2ECC71' },
            ].map((anno, i) => (
              <div
                key={i}
                className="anno-label flex items-center gap-3"
              >
                <CheckCircle size={16} style={{ color: anno.color }} />
                <span className="text-sm" style={{ color: '#F0F0F5' }}>{anno.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

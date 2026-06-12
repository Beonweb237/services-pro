import { useRef, useEffect, useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Star, MapPin, TrendingUp, ChevronLeft, ChevronRight, BadgeCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const pros = [
  { name: 'Jean Kouam', category: 'Plombier', city: 'Douala', score: 96, reviews: 156, avatar: '/assets/pro-avatar-1.jpg', badge: 'Expert', badgeColor: '#D4A853' },
  { name: 'Marie Nkoulou', category: 'Électricienne', city: 'Yaoundé', score: 94, reviews: 132, avatar: '/assets/pro-avatar-2.jpg', badge: 'Expert', badgeColor: '#D4A853' },
  { name: 'Paul Ekotto', category: 'Menuisier', city: 'Douala', score: 92, reviews: 98, avatar: '/assets/pro-avatar-3.jpg', badge: 'Certifié', badgeColor: '#3B82F6' },
  { name: 'Dr. François M.', category: 'Avocat', city: 'Douala', score: 95, reviews: 87, avatar: '/assets/pro-avatar-4.jpg', badge: 'Elite', badgeColor: '#A78BFA' },
  { name: 'Amina Toure', category: 'Designer', city: 'Yaoundé', score: 93, reviews: 112, avatar: '/assets/pro-avatar-5.jpg', badge: 'Expert', badgeColor: '#D4A853' },
  { name: 'Robert N.', category: 'Ingénieur BTP', city: 'Bafoussam', score: 91, reviews: 76, avatar: '/assets/pro-avatar-6.jpg', badge: 'Certifié', badgeColor: '#3B82F6' },
  { name: 'Léa F.', category: 'Infirmière', city: 'Douala', score: 97, reviews: 203, avatar: '/assets/pro-avatar-7.jpg', badge: 'Expert', badgeColor: '#D4A853' },
  { name: 'Bernard K.', category: 'Expert-comptable', city: 'Yaoundé', score: 90, reviews: 64, avatar: '/assets/pro-avatar-8.jpg', badge: 'Certifié', badgeColor: '#3B82F6' },
  { name: 'Marc E.', category: 'Développeur', city: 'Douala', score: 94, reviews: 91, avatar: '/assets/pro-avatar-9.jpg', badge: 'Expert', badgeColor: '#D4A853' },
];

export default function ProsMoment() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pros-title', {
        y: 30, opacity: 0, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
      gsap.from('.pro-moment-card', {
        x: 60, opacity: 0, duration: 0.5, ease: 'power3.out', stagger: 0.08,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const scroll = (dir: number) => {
    if (carouselRef.current) {
      const newPos = scrollPos + dir * 280;
      const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
      const clamped = Math.max(0, Math.min(newPos, maxScroll));
      setScrollPos(clamped);
      carouselRef.current.scrollTo({ left: clamped, behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="section-padding" style={{ background: '#14141E' }}>
      <div className="container-main">
        <div className="flex items-center justify-between mb-10">
          <div className="pros-title">
            <p className="overline mb-4">{t('prosmoment.overline')}</p>
            <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: '#F0F0F5' }}>
              {t('prosmoment.title')}
            </h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
              style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#F0F0F5' }}
              onClick={() => scroll(-1)}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
              style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#F0F0F5' }}
              onClick={() => scroll(1)}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none' }}
        >
          {pros.map((pro, i) => (
            <div
              key={i}
              className="pro-moment-card snap-start shrink-0 w-[260px] rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1"
              style={{
                background: '#1A1A28',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(212,168,83,0.3)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
            >
              {/* Cover area */}
              <div className="relative h-28" style={{ background: 'linear-gradient(135deg, #1a1530, #2a2040)' }}>
                <div className="absolute -bottom-8 left-4">
                  <div
                    className="w-16 h-16 rounded-full overflow-hidden"
                    style={{ border: `2px solid ${pro.badgeColor}`, boxShadow: `0 0 20px ${pro.badgeColor}30` }}
                  >
                    <img src={pro.avatar} alt={pro.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                {/* Badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full text-xs" style={{ background: `${pro.badgeColor}20`, color: pro.badgeColor }}>
                  <BadgeCheck size={12} /> {pro.badge}
                </div>
              </div>

              {/* Info */}
              <div className="pt-10 pb-5 px-4">
                <h4 className="text-sm font-semibold mb-0.5" style={{ color: '#F0F0F5' }}>{pro.name}</h4>
                <p className="text-xs mb-3" style={{ color: '#6B6B80' }}>
                  {pro.category} — <MapPin size={10} className="inline" /> {pro.city}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'rgba(212,168,83,0.15)', border: '1px solid #D4A853' }}>
                      <span className="text-xs font-bold" style={{ color: '#D4A853' }}>{pro.score}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={12} fill="#D4A853" style={{ color: '#D4A853' }} />
                    <span className="text-xs" style={{ color: '#6B6B80' }}>{pro.reviews} avis</span>
                  </div>
                  <TrendingUp size={14} style={{ color: '#2ECC71' }} />
                </div>
                <button className="w-full mt-4 py-2 rounded-xl text-xs font-medium transition-colors hover:bg-white/5" style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#F0F0F5' }}>
                  {t('prosmoment.view_profile')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`.scrollbar-hide::-webkit-scrollbar{display:none;}`}</style>
    </section>
  );
}

import { useRef, useEffect, useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quoteKey: 'testimonials.quote_1',
    authorKey: 'testimonials.author_1',
    avatar: '/assets/client-avatar-1.jpg',
    rating: 5,
    proName: 'Jean K.',
    proAvatar: '/assets/pro-avatar-1.jpg',
    category: 'Plomberie',
  },
  {
    quoteKey: 'testimonials.quote_2',
    authorKey: 'testimonials.author_2',
    avatar: '/assets/client-avatar-2.jpg',
    rating: 5,
    proName: 'Services Pro',
    proAvatar: '/assets/pro-avatar-3.jpg',
    category: 'Plateforme',
  },
  {
    quoteKey: 'testimonials.quote_3',
    authorKey: 'testimonials.author_3',
    avatar: '/assets/client-avatar-3.jpg',
    rating: 5,
    proName: 'Amina T.',
    proAvatar: '/assets/pro-avatar-2.jpg',
    category: 'Coiffure',
  },
];

export default function TestimonialsV2() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonial-main', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const prev = () => setCurrentIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setCurrentIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const current = testimonials[currentIndex];

  return (
    <section
      ref={sectionRef}
      className="section-padding"
      style={{ background: '#14141E' }}
    >
      <div className="container-main">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left - featured testimonial */}
          <div className="testimonial-main lg:w-2/3">
            <p className="overline mb-6">{t('testimonials.overline')}</p>
            <div
              className="relative p-8 md:p-10 rounded-2xl"
              style={{
                background: '#1A1A28',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              {/* Quote icon */}
              <Quote size={36} className="mb-4" style={{ color: 'rgba(212, 168, 83, 0.3)' }} />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: current.rating }).map((_, j) => (
                  <Star key={j} size={18} fill="#D4A853" style={{ color: '#D4A853' }} />
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-lg md:text-xl italic mb-8 leading-relaxed"
                style={{ color: '#F0F0F5' }}
              >
                "{t(current.quoteKey)}"
              </p>

              {/* Author row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden" style={{ border: '2px solid #D4A853' }}>
                    <img src={current.avatar} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: '#F0F0F5' }}>
                      — {t(current.authorKey)}
                    </p>
                    <p className="text-xs" style={{ color: '#D4A853' }}>{current.category}</p>
                  </div>
                </div>

                {/* Pro mini card */}
                <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img src={current.proAvatar} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs font-medium" style={{ color: '#F0F0F5' }}>{current.proName}</p>
                    <p className="text-xs" style={{ color: '#6B6B80' }}>Pro</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className="h-2 rounded-full transition-all"
                    style={{
                      width: i === currentIndex ? 24 : 8,
                      background: i === currentIndex ? '#D4A853' : 'rgba(255,255,255,0.2)',
                    }}
                    onClick={() => setCurrentIndex(i)}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
                  style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#F0F0F5' }}
                  onClick={prev}
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
                  style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#F0F0F5' }}
                  onClick={next}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Right - mini cards */}
          <div className="lg:w-1/3 space-y-4">
            {testimonials.map((testimonial, i) => (
              <button
                key={i}
                className="w-full text-left p-4 rounded-xl transition-all"
                style={{
                  background: i === currentIndex ? '#1A1A28' : 'transparent',
                  border: i === currentIndex ? '1px solid rgba(212, 168, 83, 0.2)' : '1px solid rgba(255,255,255,0.04)',
                }}
                onClick={() => setCurrentIndex(i)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0" style={{ border: i === currentIndex ? '2px solid #D4A853' : '2px solid transparent' }}>
                    <img src={testimonial.avatar} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium truncate" style={{ color: '#F0F0F5' }}>
                      {t(testimonial.authorKey)}
                    </p>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, j) => (
                        <Star key={j} size={10} fill="#D4A853" style={{ color: '#D4A853' }} />
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

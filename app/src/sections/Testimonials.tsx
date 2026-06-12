import { useRef, useEffect, useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quoteKey: 'testimonials.quote_1',
    authorKey: 'testimonials.author_1',
    rating: 5,
  },
  {
    quoteKey: 'testimonials.quote_2',
    authorKey: 'testimonials.author_2',
    rating: 5,
  },
  {
    quoteKey: 'testimonials.quote_3',
    authorKey: 'testimonials.author_3',
    rating: 5,
  },
  {
    quoteKey: 'testimonials.quote_1',
    authorKey: 'testimonials.author_1',
    rating: 5,
  },
  {
    quoteKey: 'testimonials.quote_2',
    authorKey: 'testimonials.author_2',
    rating: 5,
  },
  {
    quoteKey: 'testimonials.quote_3',
    authorKey: 'testimonials.author_3',
    rating: 5,
  },
];

export default function Testimonials() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = testimonials.length - 3;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonial-card', {
        x: 80,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const scrollToIndex = (index: number) => {
    const clamped = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(clamped);
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / testimonials.length;
      carouselRef.current.scrollTo({ left: cardWidth * clamped, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="section-padding"
      style={{ background: '#14141E' }}
    >
      <div className="container-main">
        <p className="overline mb-4">{t('testimonials.overline')}</p>
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: '#F0F0F5' }}>
            {t('testimonials.title')}
          </h2>
          <div className="hidden md:flex items-center gap-2">
            <button
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
              style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#F0F0F5' }}
              onClick={() => scrollToIndex(currentIndex - 1)}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
              style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#F0F0F5' }}
              onClick={() => scrollToIndex(currentIndex + 1)}
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="testimonial-card snap-start shrink-0 w-full md:w-[calc(33.333%-14px)] p-8 rounded-2xl"
              style={{
                background: '#1A1A28',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star key={j} size={18} fill="#D4A853" style={{ color: '#D4A853' }} />
                ))}
              </div>
              {/* Quote */}
              <p className="text-base italic mb-5" style={{ color: '#F0F0F5', lineHeight: 1.7 }}>
                "{t(testimonial.quoteKey)}"
              </p>
              {/* Author */}
              <p className="text-sm font-semibold" style={{ color: '#F0F0F5' }}>
                — {t(testimonial.authorKey)}
              </p>
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              className="w-2 h-2 rounded-full transition-all"
              style={{
                background: i === currentIndex ? '#D4A853' : 'rgba(255,255,255,0.2)',
                width: i === currentIndex ? 20 : 8,
              }}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to testimonial page ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}

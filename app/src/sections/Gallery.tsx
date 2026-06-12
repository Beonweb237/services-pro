import { useRef, useEffect, useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { X, ZoomIn } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const galleryItems = [
  {
    image: '/assets/pro-at-work-1.jpg',
    pro: 'François K.',
    category: 'Électricité',
    city: 'Douala',
    rating: 5,
  },
  {
    image: '/assets/pro-at-work-2.jpg',
    pro: 'Amina T.',
    category: 'Coiffure',
    city: 'Yaoundé',
    rating: 5,
  },
  {
    image: '/assets/pro-at-work-3.jpg',
    pro: 'Jean K.',
    category: 'Plomberie',
    city: 'Douala',
    rating: 5,
  },
  {
    image: '/assets/cover-plumbing.jpg',
    pro: 'Pierre M.',
    category: 'Plomberie',
    city: 'Bafoussam',
    rating: 4,
  },
  {
    image: '/assets/cat-cover-beauty.jpg',
    pro: 'Sophie N.',
    category: 'Coiffure',
    city: 'Douala',
    rating: 5,
  },
  {
    image: '/assets/cover-electrical.jpg',
    pro: 'Marc E.',
    category: 'Électricité',
    city: 'Yaoundé',
    rating: 5,
  },
  {
    image: '/assets/cat-cover-masonry.jpg',
    pro: 'Paul B.',
    category: 'Maçonnerie',
    city: 'Douala',
    rating: 4,
  },
  {
    image: '/assets/cat-cover-mechanic.jpg',
    pro: 'Brice M.',
    category: 'Mécanique',
    city: 'Bafoussam',
    rating: 5,
  },
];

export default function Gallery() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gallery-item', {
        y: 40,
        opacity: 0,
        scale: 0.95,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding"
      style={{ background: '#0A0A0F' }}
    >
      <div className="container-main">
        <div className="text-center mb-10">
          <p className="overline mb-4">{t('gallery.overline')}</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-3" style={{ color: '#F0F0F5' }}>
            {t('gallery.title')}
          </h2>
          <p className="text-sm" style={{ color: '#6B6B80' }}>
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`gallery-item group relative rounded-2xl overflow-hidden cursor-pointer ${
                i === 0 || i === 5 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              style={{
                aspectRatio: i === 0 || i === 5 ? '1/1' : '4/3',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
              onClick={() => setLightbox(i)}
            >
              <img
                src={item.image}
                alt={item.pro}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4"
                style={{
                  background: 'linear-gradient(180deg, transparent 40%, rgba(10,10,15,0.9) 100%)',
                }}
              >
                <p className="text-sm font-semibold" style={{ color: '#F0F0F5' }}>{item.pro}</p>
                <p className="text-xs" style={{ color: '#D4A853' }}>{item.category} — {item.city}</p>
              </div>
              {/* Zoom icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'rgba(212,168,83,0.2)' }}>
                <ZoomIn size={14} style={{ color: '#D4A853' }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(10,10,15,0.95)', backdropFilter: 'blur(10px)' }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(255,255,255,0.1)', color: '#F0F0F5' }}
            onClick={() => setLightbox(null)}
          >
            <X size={20} />
          </button>
          <img
            src={galleryItems[lightbox].image}
            alt={galleryItems[lightbox].pro}
            className="max-w-full max-h-[85vh] rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="text-lg font-semibold" style={{ color: '#F0F0F5' }}>
              {galleryItems[lightbox].pro}
            </p>
            <p className="text-sm" style={{ color: '#D4A853' }}>
              {galleryItems[lightbox].category} — {galleryItems[lightbox].city}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

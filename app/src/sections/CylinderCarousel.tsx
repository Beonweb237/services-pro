import { useRef, useEffect, useState } from 'react';
import {
  Droplets, Zap, Hammer, Mountain, Paintbrush, Flower2, Scissors,
  Ruler, Wrench, Monitor, Palette, Camera, ChefHat, Sparkles,
  Truck, Wind, Flame, Grid3x3
} from 'lucide-react';

const categories = [
  { icon: Droplets, name: 'Plumbing', nameFr: 'Plomberie', count: 234 },
  { icon: Zap, name: 'Electrical', nameFr: 'Électricité', count: 189 },
  { icon: Hammer, name: 'Carpentry', nameFr: 'Menuiserie', count: 156 },
  { icon: Mountain, name: 'Masonry', nameFr: 'Maçonnerie', count: 142 },
  { icon: Paintbrush, name: 'Painting', nameFr: 'Peinture', count: 198 },
  { icon: Flower2, name: 'Gardening', nameFr: 'Jardinage', count: 87 },
  { icon: Scissors, name: 'Hair & Beauty', nameFr: 'Coiffure', count: 267 },
  { icon: Ruler, name: 'Tailoring', nameFr: 'Couture', count: 134 },
  { icon: Wrench, name: 'Auto Mechanic', nameFr: 'Mécanique', count: 112 },
  { icon: Monitor, name: 'IT Services', nameFr: 'Informatique', count: 203 },
  { icon: Palette, name: 'Graphic Design', nameFr: 'Design', count: 178 },
  { icon: Camera, name: 'Photography', nameFr: 'Photo', count: 95 },
  { icon: ChefHat, name: 'Catering', nameFr: 'Cuisine', count: 145 },
  { icon: Sparkles, name: 'Cleaning', nameFr: 'Nettoyage', count: 220 },
  { icon: Truck, name: 'Moving', nameFr: 'Déménagement', count: 76 },
  { icon: Wind, name: 'AC Repair', nameFr: 'Climatisation', count: 98 },
  { icon: Flame, name: 'Metalwork', nameFr: 'Ferronnerie', count: 67 },
  { icon: Grid3x3, name: 'Tiling', nameFr: 'Carrelage', count: 123 },
];

const CARD_COUNT = categories.length;
const MAIN_RADIUS = 480;
const INNER_RADIUS = 280;
const ANGLE_STEP = 360 / CARD_COUNT;

export default function CylinderCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef(0);
  const rafRef = useRef(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const animate = () => {
      rotationRef.current += 0.18;
      if (containerRef.current) {
        containerRef.current.style.transform = `rotateX(-5deg) rotateY(${rotationRef.current}deg)`;
      }
      if (innerRef.current) {
        innerRef.current.style.transform = `rotateX(-5deg) rotateY(${-rotationRef.current * 1.4}deg)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div
      className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2"
      style={{
        width: '55%',
        height: '700px',
        perspective: '1100px',
      }}
    >
      {/* Main ring */}
      <div
        ref={containerRef}
        className="absolute inset-0 preserve-3d"
        style={{
          willChange: 'transform',
          transformStyle: 'preserve-3d',
        }}
      >
        {categories.map((cat, i) => {
          const Icon = cat.icon;
          const angle = i * ANGLE_STEP;
          return (
            <div
              key={`main-${i}`}
              className="absolute preserve-3d"
              style={{
                left: '50%',
                top: '50%',
                width: '200px',
                height: '260px',
                marginLeft: '-100px',
                marginTop: '-130px',
                transform: `rotateY(${angle}deg) translateZ(${MAIN_RADIUS}px)`,
                transformStyle: 'preserve-3d',
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card flipper */}
              <div
                className="relative w-full h-full preserve-3d transition-transform duration-500"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: hoveredIndex === i ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                {/* Front face */}
                <div
                  className="absolute inset-0 backface-hidden flex flex-col items-center justify-center gap-3 p-5"
                  style={{
                    background: '#1A1A28',
                    border: hoveredIndex === i
                      ? '1px solid rgba(212, 168, 83, 0.3)'
                      : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '16px',
                    boxShadow: hoveredIndex === i
                      ? '0 0 20px rgba(212, 168, 83, 0.1)'
                      : 'none',
                    transition: 'all 0.3s ease',
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <Icon size={32} style={{ color: '#D4A853' }} />
                  <span className="text-sm font-semibold text-center" style={{ color: '#F0F0F5' }}>
                    {cat.nameFr}
                  </span>
                  <span className="text-xs" style={{ color: '#6B6B80' }}>
                    {cat.count} pros
                  </span>
                </div>
                {/* Back face */}
                <div
                  className="absolute inset-0 backface-hidden flex flex-col items-center justify-center gap-3 p-5"
                  style={{
                    background: 'linear-gradient(135deg, #1A1A28 0%, #2A2040 100%)',
                    border: '1px solid rgba(212, 168, 83, 0.25)',
                    borderRadius: '16px',
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(212, 168, 83, 0.15)' }}
                  >
                    <Icon size={28} style={{ color: '#D4A853' }} />
                  </div>
                  <span className="text-sm font-semibold text-center" style={{ color: '#D4A853' }}>
                    {cat.name}
                  </span>
                  <span className="text-xs text-center" style={{ color: '#6B6B80' }}>
                    {cat.count} verified professionals
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Inner counter-rotating ring */}
      <div
        ref={innerRef}
        className="absolute inset-0 preserve-3d"
        style={{
          willChange: 'transform',
          transformStyle: 'preserve-3d',
        }}
      >
        {categories.map((cat, i) => {
          const Icon = cat.icon;
          const angle = i * ANGLE_STEP + ANGLE_STEP / 2;
          return (
            <div
              key={`inner-${i}`}
              className="absolute preserve-3d"
              style={{
                left: '50%',
                top: '50%',
                width: '120px',
                height: '120px',
                marginLeft: '-60px',
                marginTop: '-60px',
                transform: `rotateY(${angle}deg) translateZ(${INNER_RADIUS}px)`,
              }}
            >
              <div
                className="w-full h-full flex items-center justify-center rounded-xl"
                style={{
                  background: 'rgba(26, 26, 40, 0.6)',
                  border: '1px solid rgba(212, 168, 83, 0.1)',
                }}
              >
                <Icon size={24} style={{ color: 'rgba(212, 168, 83, 0.5)' }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

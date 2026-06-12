import { useRef, useEffect, useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Crown, Medal, Star, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const podiumData = [
  { rank: 1, nameKey: 'leaderboard.pro_1_name', tradeKey: 'leaderboard.pro_1_trade', score: 94, reviews: 156, avail: 'available_today', avatar: '/assets/pro-avatar-1.jpg', color: '#D4A853', borderColor: 'rgba(212, 168, 83, 0.4)', Icon: Crown },
  { rank: 2, nameKey: 'leaderboard.pro_2_name', tradeKey: 'leaderboard.pro_2_trade', score: 89, reviews: 98, avail: 'available_week', avatar: '/assets/pro-avatar-2.jpg', color: '#C0C0C0', borderColor: 'rgba(192, 192, 192, 0.3)', Icon: Medal },
  { rank: 3, nameKey: 'leaderboard.pro_3_name', tradeKey: 'leaderboard.pro_3_trade', score: 85, reviews: 72, avail: 'available_today', avatar: '/assets/pro-avatar-3.jpg', color: '#CD7F32', borderColor: 'rgba(205, 127, 50, 0.3)', Icon: Medal },
];

const tableData = [
  { rank: 4, name: 'Amina F.', category: 'Coiffure', city: 'Yaoundé', score: 84, reviews: 64, avail: 'available_today' },
  { rank: 5, name: 'Pierre M.', category: 'Peinture', city: 'Douala', score: 82, reviews: 51, avail: 'available_week' },
  { rank: 6, name: 'Grace T.', category: 'Nettoyage', city: 'Bafoussam', score: 80, reviews: 43, avail: 'available_today' },
  { rank: 7, name: 'François K.', category: 'Électricité', city: 'Douala', score: 79, reviews: 38, avail: 'busy' },
  { rank: 8, name: 'Rose N.', category: 'Couture', city: 'Yaoundé', score: 77, reviews: 35, avail: 'available_week' },
  { rank: 9, name: 'Eric B.', category: 'Informatique', city: 'Douala', score: 76, reviews: 29, avail: 'available_today' },
  { rank: 10, name: 'Lydia E.', category: 'Cuisine', city: 'Bafoussam', score: 74, reviews: 26, avail: 'available_today' },
];

export default function Leaderboard() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeCity, setActiveCity] = useState('Douala');
  const [showCityDropdown, setShowCityDropdown] = useState(false);

  const filters = [
    { key: 'All', label: t('leaderboard.filter_all') },
    { key: 'Plumbing', label: t('leaderboard.filter_plumbing') },
    { key: 'Electrical', label: t('leaderboard.filter_electrical') },
    { key: 'Beauty', label: t('leaderboard.filter_beauty') },
    { key: 'Carpentry', label: t('leaderboard.filter_carpentry') },
  ];

  const cities = [
    { key: 'Douala', label: t('leaderboard.city_douala') },
    { key: 'Yaoundé', label: t('leaderboard.city_yaounde') },
    { key: 'Bafoussam', label: t('leaderboard.city_bafoussam') },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Podium cards stagger
      gsap.from('.podium-card', {
        scale: 0.9,
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      // Table rows
      gsap.from('.leaderboard-row', {
        opacity: 0,
        x: -20,
        duration: 0.5,
        ease: 'power3.out',
        stagger: 0.05,
        scrollTrigger: {
          trigger: '.leaderboard-table',
          start: 'top 85%',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const getAvailStyle = (avail: string) => {
    switch (avail) {
      case 'available_today':
        return { bg: 'rgba(46, 204, 113, 0.15)', color: '#2ECC71', label: t('leaderboard.available_today') };
      case 'available_week':
        return { bg: 'rgba(245, 166, 35, 0.15)', color: '#F5A623', label: t('leaderboard.available_week') };
      default:
        return { bg: 'rgba(231, 76, 60, 0.15)', color: '#E74C3C', label: t('leaderboard.busy') };
    }
  };

  return (
    <section
      ref={sectionRef}
      id="leaderboard"
      className="section-padding"
      style={{ background: '#14141E' }}
    >
      <div className="container-main">
        <p className="overline mb-4">{t('leaderboard.overline')}</p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-8" style={{ color: '#F0F0F5' }}>
          {t('leaderboard.title')}
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f.key}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                background: activeFilter === f.key ? '#D4A853' : 'rgba(255,255,255,0.05)',
                color: activeFilter === f.key ? '#0A0A0F' : '#F0F0F5',
              }}
              onClick={() => setActiveFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
          <div className="relative ml-auto">
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all hover:bg-white/5"
              style={{ background: 'rgba(255,255,255,0.05)', color: '#F0F0F5' }}
              onClick={() => setShowCityDropdown(!showCityDropdown)}
            >
              {t('leaderboard.city')}: {cities.find(c => c.key === activeCity)?.label}
              <ChevronDown size={14} />
            </button>
            {showCityDropdown && (
              <div
                className="absolute top-full right-0 mt-1 py-2 rounded-xl z-10"
                style={{
                  background: '#1A1A28',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
                  minWidth: 160,
                }}
              >
                {cities.map((c) => (
                  <button
                    key={c.key}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-white/5 transition-colors"
                    style={{ color: activeCity === c.key ? '#D4A853' : '#F0F0F5' }}
                    onClick={() => { setActiveCity(c.key); setShowCityDropdown(false); }}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Podium */}
        <div className="flex flex-col md:flex-row items-end justify-center gap-4 md:gap-6 mb-12">
          {podiumData.map((pro, i) => {
            const Icon = pro.Icon;
            const avail = getAvailStyle(pro.avail);
            return (
              <div
                key={i}
                className="podium-card w-full md:w-[280px] flex flex-col items-center text-center p-6 rounded-2xl transition-all hover:-translate-y-1"
                style={{
                  background: '#1A1A28',
                  border: `1px solid ${pro.borderColor}`,
                  boxShadow: i === 0 ? '0 0 40px rgba(212, 168, 83, 0.08)' : 'none',
                  order: i === 0 ? 1 : i === 1 ? 0 : 2,
                }}
              >
                <Icon size={24} style={{ color: pro.color }} className="mb-3" />
                <div
                  className="w-20 h-20 rounded-full mb-4 overflow-hidden"
                  style={{ border: `2px solid ${pro.color}` }}
                >
                  <img
                    src={pro.avatar}
                    alt={t(pro.nameKey) as string}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-semibold" style={{ color: '#F0F0F5' }}>
                  {t(pro.nameKey)}
                </h4>
                <p className="text-sm mb-3" style={{ color: '#6B6B80' }}>
                  {t(pro.tradeKey)}
                </p>
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-2"
                  style={{ background: `rgba(212, 168, 83, 0.15)`, border: '2px solid #D4A853' }}
                >
                  <span className="text-lg font-bold" style={{ color: '#D4A853' }}>{pro.score}</span>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  <Star size={12} style={{ color: '#D4A853' }} />
                  <span className="text-xs" style={{ color: '#6B6B80' }}>
                    {pro.reviews} {t('leaderboard.reviews')}
                  </span>
                </div>
                <span
                  className="text-xs px-2 py-1 rounded-full"
                  style={{ background: avail.bg, color: avail.color }}
                >
                  {avail.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Table */}
        <div
          className="leaderboard-table overflow-x-auto rounded-2xl"
          style={{ border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <table className="w-full text-left">
            <thead>
              <tr style={{ background: '#1A1A28' }}>
                <th className="px-4 py-3 text-xs font-medium uppercase" style={{ color: '#6B6B80' }}>{t('leaderboard.rank')}</th>
                <th className="px-4 py-3 text-xs font-medium uppercase" style={{ color: '#6B6B80' }}>{t('leaderboard.name')}</th>
                <th className="px-4 py-3 text-xs font-medium uppercase hidden md:table-cell" style={{ color: '#6B6B80' }}>{t('leaderboard.category')}</th>
                <th className="px-4 py-3 text-xs font-medium uppercase hidden sm:table-cell" style={{ color: '#6B6B80' }}>{t('leaderboard.city_col')}</th>
                <th className="px-4 py-3 text-xs font-medium uppercase" style={{ color: '#6B6B80' }}>{t('leaderboard.score')}</th>
                <th className="px-4 py-3 text-xs font-medium uppercase hidden sm:table-cell" style={{ color: '#6B6B80' }}>{t('leaderboard.reviews')}</th>
                <th className="px-4 py-3 text-xs font-medium uppercase" style={{ color: '#6B6B80' }}>{t('leaderboard.availability')}</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => {
                const avail = getAvailStyle(row.avail);
                return (
                  <tr
                    key={row.rank}
                    className="leaderboard-row transition-colors"
                    style={{
                      borderTop: '1px solid rgba(255,255,255,0.04)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.02)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                  >
                    <td className="px-4 py-3 text-sm font-medium" style={{ color: '#D4A853' }}>#{row.rank}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                          style={{ background: 'rgba(212, 168, 83, 0.15)', color: '#D4A853' }}
                        >
                          {row.name.charAt(0)}
                        </div>
                        <span className="text-sm font-medium" style={{ color: '#F0F0F5' }}>{row.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm hidden md:table-cell" style={{ color: '#6B6B80' }}>{row.category}</td>
                    <td className="px-4 py-3 text-sm hidden sm:table-cell" style={{ color: '#6B6B80' }}>{row.city}</td>
                    <td className="px-4 py-3">
                      <span className="text-sm font-bold" style={{ color: '#D4A853' }}>{row.score}</span>
                    </td>
                    <td className="px-4 py-3 text-sm hidden sm:table-cell" style={{ color: '#6B6B80' }}>{row.reviews}</td>
                    <td className="px-4 py-3">
                      <span
                        className="text-xs px-2 py-1 rounded-full"
                        style={{ background: avail.bg, color: avail.color }}
                      >
                        {avail.label}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-8">
          <button className="btn-outline">
            {t('leaderboard.cta')}
          </button>
        </div>
      </div>
    </section>
  );
}

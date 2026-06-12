import { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('nav.find_pro') as string, hasDropdown: true },
    { label: t('nav.categories') as string, href: '#categories' },
    { label: t('nav.top_pros') as string, href: '#leaderboard' },
    { label: t('nav.how_it_works') as string, href: '#how-it-works' },
    { label: t('nav.become_pro') as string, href: '#become-pro' },
  ];

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: 'rgba(10, 10, 15, 0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <div className="container-main h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xl font-bold" style={{ color: '#D4A853' }}>Services Pro</span>
            <span className="text-xs" style={{ color: '#6B6B80' }}>Cameroon</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <div key={i} className="relative">
                {link.hasDropdown ? (
                  <button
                    className="flex items-center gap-1 px-3 py-2 text-sm rounded-lg transition-colors hover:bg-white/5"
                    style={{ color: '#F0F0F5' }}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
                  >
                    {link.label}
                    <ChevronDown size={14} />
                  </button>
                ) : (
                  <button
                    className="px-3 py-2 text-sm rounded-lg transition-colors hover:bg-white/5"
                    style={{ color: '#F0F0F5' }}
                    onClick={() => link.href && scrollToSection(link.href)}
                  >
                    {link.label}
                  </button>
                )}
                {link.hasDropdown && dropdownOpen && (
                  <div
                    className="absolute top-full left-0 mt-1 py-2 rounded-xl min-w-[200px]"
                    style={{
                      background: '#1A1A28',
                      border: '1px solid rgba(255,255,255,0.08)',
                      boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
                    }}
                  >
                    {['Plomberie', 'Électricité', 'Menuiserie', 'Coiffure', 'Informatique'].map((item) => (
                      <button
                        key={item}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-white/5 transition-colors"
                        style={{ color: '#F0F0F5' }}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language toggle */}
            <div className="flex items-center gap-1 text-sm">
              <button
                aria-label={`Langue actuelle: ${lang === 'fr' ? 'Français' : 'French'}`}
                className="px-2 py-1 rounded transition-colors"
                style={{ color: lang === 'fr' ? '#D4A853' : '#6B6B80', fontWeight: lang === 'fr' ? 600 : 400 }}
                onClick={() => setLang('fr')}
              >
                FR
              </button>
              <span style={{ color: '#6B6B80' }}>|</span>
              <button
                aria-label={`Current language: ${lang === 'en' ? 'English' : 'Anglais'}`}
                className="px-2 py-1 rounded transition-colors"
                style={{ color: lang === 'en' ? '#D4A853' : '#6B6B80', fontWeight: lang === 'en' ? 600 : 400 }}
                onClick={() => setLang('en')}
              >
                EN
              </button>
            </div>

            <button className="text-sm transition-colors hover:text-[#D4A853]" style={{ color: '#F0F0F5' }}>
              {t('nav.sign_in')}
            </button>
            <button className="btn-gold text-sm">
              {t('nav.get_started')}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6"
          style={{
            background: 'rgba(10, 10, 15, 0.98)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {navLinks.map((link, i) => (
            <button
              key={i}
              className="text-2xl font-semibold transition-colors hover:text-[#D4A853]"
              style={{
                color: '#F0F0F5',
                animation: `fadeInUp 0.4s ease ${i * 0.08}s both`,
              }}
              onClick={() => link.href ? scrollToSection(link.href) : setMobileOpen(false)}
            >
              {link.label}
            </button>
          ))}
          <div className="flex items-center gap-4 mt-4">
            <button
              className="text-lg px-4 py-2 rounded-lg"
              style={{ color: lang === 'fr' ? '#D4A853' : '#6B6B80' }}
              onClick={() => { setLang('fr'); setMobileOpen(false); }}
            >
              FR
            </button>
            <button
              className="text-lg px-4 py-2 rounded-lg"
              style={{ color: lang === 'en' ? '#D4A853' : '#6B6B80' }}
              onClick={() => { setLang('en'); setMobileOpen(false); }}
            >
              EN
            </button>
          </div>
          <button className="btn-gold mt-4" onClick={() => setMobileOpen(false)}>
            {t('nav.get_started')}
          </button>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}

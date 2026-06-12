import { useLanguage } from '../hooks/useLanguage';
import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

export default function Footer() {
  const { lang, setLang, t } = useLanguage();

  return (
    <footer
      style={{
        background: '#0A0A0F',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <div className="container-main py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 - Logo & About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold" style={{ color: '#D4A853' }}>Services Pro</span>
            </div>
            <p className="text-sm mb-6" style={{ color: '#6B6B80', lineHeight: 1.6 }}>
              {t('footer.tagline')}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
                style={{ background: 'rgba(255,255,255,0.05)', color: '#6B6B80' }}
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
                style={{ background: 'rgba(255,255,255,0.05)', color: '#6B6B80' }}
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
                style={{ background: 'rgba(255,255,255,0.05)', color: '#6B6B80' }}
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
                style={{ background: 'rgba(255,255,255,0.05)', color: '#6B6B80' }}
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Col 2 - For Clients */}
          <div>
            <h4 className="text-sm font-semibold mb-4" style={{ color: '#F0F0F5' }}>
              {t('footer.for_clients')}
            </h4>
            <ul className="space-y-2.5">
              {[
                t('footer.find_pro'),
                t('footer.how_works'),
                t('footer.safety'),
                t('footer.help'),
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-sm transition-colors hover:text-[#D4A853]"
                    style={{ color: '#6B6B80' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - For Pros */}
          <div>
            <h4 className="text-sm font-semibold mb-4" style={{ color: '#F0F0F5' }}>
              {t('footer.for_pros')}
            </h4>
            <ul className="space-y-2.5">
              {[
                t('footer.join'),
                t('footer.pricing'),
                t('footer.resources'),
                t('footer.success'),
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-sm transition-colors hover:text-[#D4A853]"
                    style={{ color: '#6B6B80' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 - Legal */}
          <div>
            <h4 className="text-sm font-semibold mb-4" style={{ color: '#F0F0F5' }}>
              {t('footer.legal')}
            </h4>
            <ul className="space-y-2.5">
              {[
                t('footer.terms'),
                t('footer.privacy'),
                t('footer.charter'),
                t('footer.rating'),
                t('footer.contact'),
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-sm transition-colors hover:text-[#D4A853]"
                    style={{ color: '#6B6B80' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="py-5"
        style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}
      >
        <div className="container-main flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: '#6B6B80' }}>
            {t('footer.copyright')}
          </p>
          <div className="flex items-center gap-1 text-xs">
            <button
              className="px-2 py-1 rounded transition-colors hover:text-[#D4A853]"
              style={{ color: lang === 'fr' ? '#D4A853' : '#6B6B80', fontWeight: lang === 'fr' ? 600 : 400 }}
              onClick={() => setLang('fr')}
            >
              FR
            </button>
            <span style={{ color: '#6B6B80' }}>|</span>
            <button
              className="px-2 py-1 rounded transition-colors hover:text-[#D4A853]"
              style={{ color: lang === 'en' ? '#D4A853' : '#6B6B80', fontWeight: lang === 'en' ? 600 : 400 }}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

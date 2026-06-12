import { useRef, useEffect, useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { ChevronDown, HelpCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqsFr = [
  { q: 'Comment sont calculés les Pro Scores ?', a: 'Le Pro Score (0-100) est calculé à partir de 5 dimensions : Qualité du travail (30%), Ponctualité (20%), Communication (20%), Rapport qualité-prix (20%) et Professionnalisme (10%). Seuls les clients ayant complété une mission peuvent noter.' },
  { q: 'Les professionnels sont-ils vérifiés ?', a: 'Oui ! Chaque professionnel passe par un processus de vérification en 3 étapes : vérification d\'identité, vérification des qualifications, et entretien téléphonique. Les badges "Vérifié" sont affichés sur les profils.' },
  { q: 'Comment contacter un professionnel ?', a: 'Vous pouvez contacter un pro directement via notre messagerie intégrée, ou appeler directement depuis son profil. La première consultation est souvent gratuite.' },
  { q: 'Services Pro est-il gratuit pour les clients ?', a: 'Oui, l\'utilisation est 100% gratuite pour les clients. Aucun frais de mise en relation ni de commission n\'est appliqué.' },
  { q: 'Quelles villes sont couvertes ?', a: 'Services Pro couvre actuellement Douala, Yaoundé, Bafoussam, Bamenda, Garoua, Maroua, Ngaoundéré, Bertoua, Ebolowa et Buéa, avec plus de 2 400 professionnels.' },
  { q: 'Comment devenir professionnel sur Services Pro ?', a: 'Créez votre profil gratuitement, complétez vos informations, téléchargez vos photos de travaux, et passez la vérification. Votre profil sera visible en 24-48h.' },
  { q: 'Puis-je voir les avis avant de contacter un pro ?', a: 'Absolument ! Chaque profil affiche tous les avis vérifiés laissés par des clients ayant effectué une mission. Les avis sont modérés pour garantir leur authenticité.' },
  { q: 'Que faire en cas de litige ?', a: 'Services Pro offre une médiation gratuite en cas de différend. Notre équipe examine chaque cas sous 48h et propose une solution équitable pour les deux parties.' },
];

const faqsEn = [
  { q: 'How are Pro Scores calculated?', a: 'The Pro Score (0-100) is calculated from 5 dimensions: Quality of Work (30%), Punctuality (20%), Communication (20%), Value for Money (20%), and Professionalism (10%). Only clients who completed a mission can rate.' },
  { q: 'Are professionals verified?', a: 'Yes! Each professional goes through a 3-step verification: identity check, qualifications verification, and phone interview. "Verified" badges appear on profiles.' },
  { q: 'How do I contact a professional?', a: 'You can contact a pro directly via our built-in messaging, or call directly from their profile. The first consultation is often free.' },
  { q: 'Is Services Pro free for clients?', a: 'Yes, it is 100% free for clients. No connection fees or commissions are applied.' },
  { q: 'Which cities are covered?', a: 'Services Pro currently covers Douala, Yaoundé, Bafoussam, Bamenda, Garoua, Maroua, Ngaoundéré, Bertoua, Ebolowa, and Buéa, with over 2,400 professionals.' },
  { q: 'How do I become a professional on Services Pro?', a: 'Create your profile for free, complete your information, upload your work photos, and pass verification. Your profile will be visible within 24-48h.' },
  { q: 'Can I see reviews before contacting a pro?', a: 'Absolutely! Each profile displays all verified reviews left by clients who completed a mission. Reviews are moderated to ensure authenticity.' },
  { q: 'What if there is a dispute?', a: 'Services Pro offers free mediation in case of disputes. Our team reviews each case within 48h and proposes a fair solution for both parties.' },
];

export default function FAQ() {
  const { lang, t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = lang === 'fr' ? faqsFr : faqsEn;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.faq-item', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding"
      style={{ background: '#14141E' }}
    >
      <div className="container-main">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left column */}
          <div className="lg:w-1/3 lg:sticky lg:top-24 lg:self-start">
            <p className="overline mb-4">{t('faq.overline')}</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4" style={{ color: '#F0F0F5' }}>
              {t('faq.title')}
            </h2>
            <p className="text-sm mb-6" style={{ color: '#6B6B80', lineHeight: 1.7 }}>
              {t('faq.subtitle')}
            </p>
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ background: 'rgba(212, 168, 83, 0.1)' }}
            >
              <HelpCircle size={28} style={{ color: '#D4A853' }} />
            </div>
          </div>

          {/* Right column - accordion */}
          <div className="lg:w-2/3 space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="faq-item rounded-xl overflow-hidden transition-all duration-300"
                style={{
                  background: '#1A1A28',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className="text-sm font-medium pr-4" style={{ color: '#F0F0F5' }}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className="shrink-0 transition-transform duration-300"
                    style={{
                      color: '#D4A853',
                      transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: openIndex === i ? 200 : 0,
                    opacity: openIndex === i ? 1 : 0,
                  }}
                >
                  <p
                    className="px-5 pb-5 text-sm"
                    style={{ color: '#6B6B80', lineHeight: 1.7 }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

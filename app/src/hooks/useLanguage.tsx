import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const fr: Record<string, string> = {
  // Navigation
  'nav.find_pro': 'Trouver un Pro',
  'nav.categories': 'Catégories',
  'nav.top_pros': 'Top Pros',
  'nav.how_it_works': 'Comment ça marche',
  'nav.become_pro': 'Devenir Pro',
  'nav.sign_in': 'Connexion',
  'nav.get_started': 'Commencer',

  // Hero
  'hero.overline': 'Réseau Professionnel #1 au Cameroun',
  'hero.title': 'Trouvez les Meilleurs Pros. Notés par de Vrais Clients.',
  'hero.subtitle': 'Plombiers, électriciens, coiffeurs, designers — chaque professionnel noté et vérifié. Vérifiez la disponibilité. Réservez en confiance.',
  'hero.search_placeholder': 'Quel service cherchez-vous ?',
  'hero.city_placeholder': 'Ville ou région',
  'hero.cta_find': 'Trouver un Pro',
  'hero.cta_explore': 'Explorer les Catégories',
  'hero.stat_pros': 'Pros Vérifiés',
  'hero.stat_missions': 'Missions',
  'hero.stat_rating': 'Note Moyenne',

  // Trust
  'trust.overline': 'POURQUOI NOUS FAIRE CONFIANCE',
  'trust.verified': 'Pros Vérifiés',
  'trust.verified_desc': 'Identité & qualifications',
  'trust.fast': 'Intervention Rapide',
  'trust.fast_desc': 'Sous 24h en moyenne',
  'trust.secure': 'Paiement Sécurisé',
  'trust.secure_desc': 'Transactions protégées',
  'trust.support': 'Support 24/7',
  'trust.support_desc': 'À votre écoute',
  'trust.growth': 'Croissance',
  'trust.growth_desc': '+300% de revenus',
  'trust.guarantee': 'Garantie',
  'trust.guarantee_desc': 'Satisfait ou refait',

  // Stats
  'stats.overline': 'NOS CHIFFRES',
  'stats.title': 'Le Cameroun Nous Fait Confiance',
  'stats.pros': 'Pros Vérifiés',
  'stats.missions': 'Missions Réalisées',
  'stats.rating': 'Note Moyenne',
  'stats.cities': 'Villes Couvertes',
  'stats.satisfaction': 'Satisfaction',
  'stats.secure': 'Transactions Sécurisées',

  // Pro Score
  'proscore.overline': 'TRANSPARENCE & CONFIANCE',
  'proscore.title': 'Comment fonctionne le Pro Score',
  'proscore.body': 'Chaque professionnel obtient un Pro Score de 0 à 100, calculé selon cinq dimensions. Seuls les clients vérifiés ayant terminé une mission peuvent noter — garantissant des scores authentiques et fiables.',
  'proscore.quality': 'Qualité du Travail',
  'proscore.punctuality': 'Ponctualité',
  'proscore.communication': 'Communication',
  'proscore.value': 'Rapport Qualité-Prix',
  'proscore.professionalism': 'Professionnalisme',
  'proscore.cta': 'En savoir plus',
  'proscore.percent': '%',

  // Leaderboard
  'leaderboard.overline': 'CLASSEMENT — JUIN 2026',
  'leaderboard.title': 'Top Professionnels ce Mois',
  'leaderboard.filter_all': 'Tous',
  'leaderboard.filter_plumbing': 'Plomberie',
  'leaderboard.filter_electrical': 'Électricité',
  'leaderboard.filter_beauty': 'Coiffure & Beauté',
  'leaderboard.filter_carpentry': 'Menuiserie',
  'leaderboard.city': 'Ville',
  'leaderboard.city_douala': 'Douala',
  'leaderboard.city_yaounde': 'Yaoundé',
  'leaderboard.city_bafoussam': 'Bafoussam',
  'leaderboard.rank': 'Rang',
  'leaderboard.name': 'Nom',
  'leaderboard.category': 'Catégorie',
  'leaderboard.city_col': 'Ville',
  'leaderboard.score': 'Score',
  'leaderboard.reviews': 'Avis',
  'leaderboard.availability': 'Dispo.',
  'leaderboard.available_today': 'Dispo Aujourd\'hui',
  'leaderboard.available_week': 'Cette Semaine',
  'leaderboard.busy': 'Occupé',
  'leaderboard.cta': 'Voir le Classement Complet',
  'leaderboard.pro_1_name': 'Jean Kouam',
  'leaderboard.pro_1_trade': 'Plombier — Douala',
  'leaderboard.pro_2_name': 'Marie Nkoulou',
  'leaderboard.pro_2_trade': 'Électricienne — Yaoundé',
  'leaderboard.pro_3_name': 'Paul Ekotto',
  'leaderboard.pro_3_trade': 'Menuisier — Douala',

  // Categories
  'categories.overline': 'TOUTES LES PROFESSIONS',
  'categories.title': '20 Catégories. Tous les Talents dont vous avez Besoin.',
  'categories.pro_count': ' pros',
  'categories.1': 'Plomberie',
  'categories.2': 'Électricité',
  'categories.3': 'Menuiserie',
  'categories.4': 'Maçonnerie',
  'categories.5': 'Peinture',
  'categories.6': 'Jardinage',
  'categories.7': 'Coiffure & Beauté',
  'categories.8': 'Couture',
  'categories.9': 'Mécanique Auto',
  'categories.10': 'Informatique',
  'categories.11': 'Design Graphique',
  'categories.12': 'Photographie',
  'categories.13': 'Cuisine',
  'categories.14': 'Nettoyage',
  'categories.15': 'Déménagement',
  'categories.16': 'Climatisation',
  'categories.17': 'Ferronnerie',
  'categories.18': 'Carrelage',
  'categories.19': 'Électronique',
  'categories.20': 'Autres',

  // Cities
  'cities.overline': 'COUVERTURE NATIONALE',
  'cities.title': 'Trouvez un Pro dans Votre Ville',
  'cities.subtitle': 'Services Pro couvre les principales villes du Cameroun avec des professionnels vérifiés prêts à intervenir.',
  'cities.explore': 'Explorer les Pros',

  // How It Works
  'howitworks.overline': 'SIMPLE & RAPIDE',
  'howitworks.title': 'Comment Services Pro Fonctionne',
  'howitworks.step1_title': 'Trouvez Votre Pro',
  'howitworks.step1_body': 'Recherchez par métier, ville ou disponibilité. Comparez les profils, les avis vérifiés et les portfolios — tout en un seul endroit.',
  'howitworks.step2_title': 'Contactez & Finalisez',
  'howitworks.step2_body': 'Envoyez une demande via notre messagerie intégrée ou appelez directement. Mettez-vous d\'accord sur une date et un prix. Faites le travail.',
  'howitworks.step3_title': 'Notez Votre Expérience',
  'howitworks.step3_body': 'Après la mission, laissez un avis détaillé. Votre note aide le pro à s\'améliorer et aide les autres clients à choisir en confiance.',

  // Gallery
  'gallery.overline': 'PORTFOLIOS',
  'gallery.title': 'Travaux Réalisés par Nos Pros',
  'gallery.subtitle': 'Découvrez la qualité des prestations à travers les photos de travaux réalisés.',

  // Profile Showcase
  'profile.overline': 'PROFILS PROFESSIONNELS',
  'profile.title': 'Votre Travail, Votre Réputation',
  'profile.name': 'Jean Kouam',
  'profile.badge_verified': 'Vérifié',
  'profile.badge_expert': 'Expert',
  'profile.badge_fast': 'Réponse Rapide',
  'profile.stat_reviews': 'Avis',
  'profile.stat_stars': 'Étoiles',
  'profile.stat_completion': 'Terminé',
  'profile.bio': 'Plombier certifié avec 10 ans d\'expérience à Douala. Spécialisé dans les réparations urgentes et les nouvelles installations. Disponible 7 jours sur 7. Devis gratuit.',
  'profile.contact': 'Contacter',
  'profile.quote': 'Demander un Devis',
  'profile.anno_verified': 'Badge identité vérifiée',
  'profile.anno_score': 'Pro Score 0-100',
  'profile.anno_reviews': 'Avis de vrais clients',
  'profile.anno_calendar': 'Disponibilité en temps réel',

  // Testimonials
  'testimonials.overline': 'TÉMOIGNAGES',
  'testimonials.title': 'Approuvé par des Milliers',
  'testimonials.quote_1': 'Jean a réparé notre fuite de salle de bain en moins d\'une heure. Travail professionnel et propre. Le système de notation aide vraiment à trouver des personnes fiables.',
  'testimonials.author_1': 'Marie D., Douala',
  'testimonials.quote_2': 'Depuis que j\'ai rejoint Services Pro, ma clientèle a triplé. Le Pro Score me pousse à donner le meilleur de moi-même à chaque mission.',
  'testimonials.author_2': 'Jean K., Plombier',
  'testimonials.quote_3': 'J\'avais besoin d\'une coiffeuse en urgence et j\'ai trouvé Amina en 10 minutes. Ses avis étaient exacts. Expérience incroyable !',
  'testimonials.author_3': 'Sophie M., Yaoundé',

  // FAQ
  'faq.overline': 'BESOIN D\'AIDE ?',
  'faq.title': 'Questions Fréquentes',
  'faq.subtitle': 'Trouvez les réponses aux questions les plus courantes. Notre équipe est également disponible 24/7 pour vous accompagner.',

  // CTA
  'cta.title': 'Vous êtes Professionnel ?',
  'cta.body': 'Rejoignez 2 400+ pros vérifiés au Cameroun. Bâtissez votre réputation, soyez découvert par des clients, et développez votre activité — tout est gratuit.',
  'cta.feature_1': 'Profil professionnel gratuit',
  'cta.feature_2': 'Système de notation transparent',
  'cta.feature_3': 'Messagerie client directe',
  'cta.feature_4': 'Visibilité auprès de milliers de clients potentiels',
  'cta.button': 'Créer Votre Profil Pro',

  // Footer
  'footer.tagline': 'Le réseau professionnel de confiance du Cameroun.',
  'footer.for_clients': 'Pour les Clients',
  'footer.find_pro': 'Trouver un Pro',
  'footer.how_works': 'Comment ça marche',
  'footer.safety': 'Sécurité',
  'footer.help': 'Centre d\'aide',
  'footer.for_pros': 'Pour les Pros',
  'footer.join': 'Devenir Pro',
  'footer.pricing': 'Tarifs',
  'footer.resources': 'Ressources',
  'footer.success': 'Success Stories',
  'footer.legal': 'Légal',
  'footer.terms': 'Conditions d\'utilisation',
  'footer.privacy': 'Politique de confidentialité',
  'footer.charter': 'Charte du Pro',
  'footer.rating': 'Politique de notation',
  'footer.contact': 'Contact',
  'footer.copyright': '2026 Services Pro. Tous droits réservés.',

  // ======== NOUVELLES SECTIONS WOW ========

  // Double Valeur
  'value.overline': 'POUR QUI ?',
  'value.title': 'Une Plateforme, Deux Opportunités',
  'value.client_title': 'Vous cherchez un professionnel ?',
  'value.client_body': 'Trouvez rapidement le bon expert près de chez vous. Comparez, vérifiez les avis, et réservez en toute confiance.',
  'value.client_1': 'Trouver rapidement le bon profil',
  'value.client_2': 'Comparer sur des critères objectifs',
  'value.client_3': 'Sécuriser le paiement',
  'value.client_4': 'Bénéficier de garanties',
  'value.pro_title': 'Vous êtes professionnel ?',
  'value.pro_body': 'Obtenez de la visibilité qualifiée, gérez vos missions en un seul endroit, et construisez une réputation vérifiable.',
  'value.pro_1': 'Obtenir de la visibilité qualifiée',
  'value.pro_2': 'Gérer vos missions en un seul endroit',
  'value.pro_3': 'Construire une réputation vérifiable',
  'value.pro_4': 'Accéder à une clientèle élargie',
  'value.cta_client': 'Trouver un Pro',
  'value.cta_pro': 'Devenir Pro',

  // Familles de services
  'families.overline': '10 GRANDES FAMILLES',
  'families.title': 'Plus de 60 Métiers Représentés',
  'families.1': 'Juridique & Légal',
  'families.1_desc': 'Avocats, Notaires, Huissiers',
  'families.2': 'Financier & Comptable',
  'families.2_desc': 'Experts-comptables, Conseillers fiscaux',
  'families.3': 'Médical & Santé',
  'families.3_desc': 'Médecins, Infirmiers, Kinés',
  'families.4': 'Architecture & BTP',
  'families.4_desc': 'Architectes, Ingénieurs, Artisans',
  'families.5': 'Numérique & Tech',
  'families.5_desc': 'Développeurs, Designers, SEO',
  'families.6': 'Communication',
  'families.6_desc': 'Graphistes, Rédacteurs, Vidéastes',
  'families.7': 'Éducatif & Formation',
  'families.7_desc': 'Enseignants, Coachs, Formateurs',
  'families.8': 'Services Entreprises',
  'families.8_desc': 'Consultants RH, Experts qualité',
  'families.9': 'Personne & Bien-être',
  'families.9_desc': 'Coaching sportif, Traiteurs, Coiffeurs',
  'families.10': 'Environnement & Tech',
  'families.10_desc': 'Climatisation, Énergies renouvelables',
  'families.pros': ' pros',

  // Niveaux de profil
  'levels.overline': 'NIVEAUX DE PROFIL',
  'levels.title': 'De Starter à Elite — Évoluez sur Services Pro',
  'levels.1_name': 'Starter',
  'levels.1_desc': 'Profil complété à 60%',
  'levels.2_name': 'Certifié',
  'levels.2_desc': 'Identité vérifiée + 3 avis',
  'levels.3_name': 'Expert',
  'levels.3_desc': '20 missions + note ≥ 4,2',
  'levels.4_name': 'Elite',
  'levels.4_desc': '100 missions + note ≥ 4,7',
  'levels.cta': 'Commencer Votre Parcours',

  // Pros du moment
  'prosmoment.overline': 'PROFESSIONNELS DU MOMENT',
  'prosmoment.title': 'Ils Ont le Pro Score le Plus Élevé',
  'prosmoment.view_profile': 'Voir le Profil',

  // Plans tarifaires
  'pricing.overline': 'TARIFS',
  'pricing.title': 'Choisissez Votre Plan',
  'pricing.subtitle': 'Commencez gratuitement. Évoluez quand vous êtes prêt.',
  'pricing.free_name': 'Gratuit',
  'pricing.free_price': '0',
  'pricing.free_period': '/mois',
  'pricing.free_commission': '15% de commission',
  'pricing.free_1': 'Profil basique',
  'pricing.free_2': '5 contacts/mois',
  'pricing.free_3': 'Apparition dans les résultats',
  'pricing.free_4': 'Messagerie interne',
  'pricing.pro_name': 'Pro',
  'pricing.pro_price': '15 000',
  'pricing.pro_period': 'XAF/mois',
  'pricing.pro_commission': '10% de commission',
  'pricing.pro_1': 'Profil complet',
  'pricing.pro_2': 'Contacts illimités',
  'pricing.pro_3': 'Statistiques de base',
  'pricing.pro_4': 'Badge Certifié',
  'pricing.pro_5': 'Support prioritaire',
  'pricing.expert_name': 'Expert',
  'pricing.expert_price': '35 000',
  'pricing.expert_period': 'XAF/mois',
  'pricing.expert_commission': '7% de commission',
  'pricing.expert_1': 'Tout le plan Pro',
  'pricing.expert_2': 'Boost mensuel inclus',
  'pricing.expert_3': 'Statistiques avancées',
  'pricing.expert_4': 'Badge Expert doré',
  'pricing.expert_5': 'Conseiller dédié',
  'pricing.elite_name': 'Elite',
  'pricing.elite_price': 'Sur invitation',
  'pricing.elite_period': '',
  'pricing.elite_commission': '5% de commission',
  'pricing.elite_1': 'Tout le plan Expert',
  'pricing.elite_2': 'Visibilité maximale',
  'pricing.elite_3': 'Badge Elite platine',
  'pricing.elite_4': 'Top des résultats',
  'pricing.elite_5': 'Partenaire certifié',
  'pricing.cta_free': 'Commencer Gratuitement',
  'pricing.cta_pro': 'Choisir Pro',
  'pricing.cta_expert': 'Choisir Expert',
  'pricing.cta_elite': 'Demander une Invitation',
  'pricing.popular': 'Le plus populaire',

  // Roadmap
  'roadmap.overline': 'ROADMAP',
  'roadmap.title': 'Notre Feuille de Route',
  'roadmap.phase1_title': 'Phase 1 — MVP',
  'roadmap.phase1_time': 'Mois 1-3',
  'roadmap.phase1_1': 'Inscription profils pro',
  'roadmap.phase1_2': 'Moteur de recherche',
  'roadmap.phase1_3': 'Messagerie basique',
  'roadmap.phase1_4': 'Système d\'avis',
  'roadmap.phase2_title': 'Phase 2 — Enrichissement',
  'roadmap.phase2_time': 'Mois 4-6',
  'roadmap.phase2_1': 'Badges de confiance',
  'roadmap.phase2_2': 'Devis & contrats',
  'roadmap.phase2_3': 'Calendier & réservation',
  'roadmap.phase2_4': 'App mobile',
  'roadmap.phase3_title': 'Phase 3 — Croissance',
  'roadmap.phase3_time': 'Mois 7-12',
  'roadmap.phase3_1': 'Matching intelligent',
  'roadmap.phase3_2': 'Abonnement Pro',
  'roadmap.phase3_3': 'Comparateur de profils',
  'roadmap.phase3_4': 'Extension géographique',
  'roadmap.phase4_title': 'Phase 4 — Maturité',
  'roadmap.phase4_time': 'Année 2+',
  'roadmap.phase4_1': 'Intelligence artificielle',
  'roadmap.phase4_2': 'Formations certifiantes',
  'roadmap.phase4_3': 'Communauté pro',
  'roadmap.phase4_4': 'Internationalisation',
  'roadmap.status_done': 'Terminé',
  'roadmap.status_active': 'En cours',
  'roadmap.status_upcoming': 'À venir',
};

const en: Record<string, string> = {};

const translations: Record<Language, Record<string, string>> = { fr, en };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('fr');

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    document.documentElement.lang = newLang;
  }, []);

  const t = useCallback((key: string): string => {
    return translations[lang][key] || key;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

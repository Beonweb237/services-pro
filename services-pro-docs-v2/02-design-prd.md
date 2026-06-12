# SERVICES PRO — PRODUCT DESIGN DOCUMENT (v2.0)

---

## TABLE DES MATIÈRES

1. Identité Visuelle Globale
2. Design Tokens (Couleurs, Typo, Espacement)
3. Système de Grille & Responsive
4. Spécifications des 20 Sections
5. Animations & Micro-interactions
6. Assets Visuels (19 images générées)
7. Spécifications Techniques Frontend

---

## 1. IDENTITÉ VISUELLE GLOBALE

### 1.1 Direction Artistique

**Concept** : "Excellence Nocturne"

Le design s'inspire des plateformes premium de trading P2P et des marketplaces modernes. Une esthétique sombre élégante met en valeur les professionnels comme des talents précieux — chaque pro est une étoile dans une constellation de compétences. L'or (#D4A853) symbolise l'excellence et la récompense, le vert (#2ECC71) la disponibilité et la confiance.

**Mots-clés** : Premium, Confiance, Africain moderne, Classement, Transparence, Excellence

### 1.2 Palette de Couleurs

#### Couleurs de Fond
| Nom | Hex | Usage |
|-----|-----|-------|
| **Bg Primary** | `#0A0A0F` | Fond principal |
| **Bg Secondary** | `#14141E` | Sections alternées |
| **Bg Elevated** | `#1A1A28` | Cards, dropdowns |

#### Couleurs de Texte
| Nom | Hex | Usage |
|-----|-----|-------|
| **Text Primary** | `#F0F0F5` | Titres, texte principal |
| **Text Secondary** | `#A0A0B8` | Corps de texte |
| **Text Tertiary** | `#6B6B80` | Captions, placeholders |

#### Accents Dorés (Primary)
| Nom | Hex | Usage |
|-----|-----|-------|
| **Gold** | `#D4A853` | Boutons, badges, scores, bordures |
| **Gold Light** | `#E8C87A` | Hover states, dégradés |
| **Gold Dim** | `rgba(212, 168, 83, 0.15)` | Fonds subtils |

#### Accents Fonctionnels
| Nom | Hex | Usage |
|-----|-----|-------|
| **Success** | `#2ECC71` | Disponible, vérifié |
| **Warning** | `#F5A623` | Cette semaine, attention |
| **Danger** | `#E74C3C` | Occupé, erreur |
| **Info** | `#3B82F6` | Certifié, liens |
| **Elite** | `#A78BFA` | Badge Elite |

#### Couleurs des 10 Familles
| Famille | Couleur |
|---------|---------|
| Juridique | `#6366F1` |
| Financier | `#10B981` |
| Médical | `#EF4444` |
| BTP | `#F59E0B` |
| Numérique | `#3B82F6` |
| Communication | `#EC4899` |
| Éducatif | `#8B5CF6` |
| Entreprises | `#14B8A6` |
| Bien-être | `#F97316` |
| Environnement | `#22C55E` |

### 1.3 Typographie

**Police** : Inter (Google Fonts)
- Regular (400), Medium (500), SemiBold (600), Bold (700), ExtraBold (800)

**Hiérarchie** :
| Élément | Taille | Poids | Line-height |
|---------|--------|-------|-------------|
| H1 (Hero) | 48-56px | 700 | 1.1 |
| H2 (Section) | 32-40px | 600 | 1.2 |
| H3 (Card) | 18-20px | 600 | 1.3 |
| Body | 14-16px | 400 | 1.6 |
| Caption | 12-13px | 400 | 1.5 |
| Overline | 14px | 600 | 1.4 |

---

## 2. DESIGN TOKENS

### Espacement
- Section padding : 80-112px vertical
- Container max-width : 1200px
- Grid gap : 16-24px
- Card padding : 24-32px
- Border-radius cards : 16px
- Border-radius buttons : 9999px (pill)
- Border-radius badges : 9999px

### Ombres
```
Card default : 0 4px 20px rgba(0,0,0,0.2)
Card hover : 0 10px 40px rgba(212,168,83,0.08)
Button gold hover : 0 8px 25px rgba(212,168,83,0.35)
```

### Bordures
```
Default : 1px solid rgba(255,255,255,0.06)
Hover : 1px solid rgba(212,168,83,0.3)
Active/Focus : 2px solid #D4A853
```

---

## 3. SYSTÈME DE GRILLE & RESPONSIVE

### Breakpoints
| Nom | Largeur | Colonnes |
|-----|---------|----------|
| Desktop | ≥1200px | 12 |
| Tablet | ≥768px | 8 |
| Mobile | <768px | 4 |

### Grille Catégories
- Desktop : 4 colonnes
- Tablet : 2 colonnes
- Mobile : 1 colonne

### Grille Familles
- Desktop : 5 colonnes
- Tablet : 2 colonnes
- Mobile : 1 colonne

---

## 4. SPÉCIFICATIONS DES 20 SECTIONS

### Section 1 — Navigation
- Position : fixed, z-index 50
- Hauteur : 64px
- Background : `rgba(10,10,15,0.85)` + `backdrop-filter: blur(20px)`
- Bordure bottom : `1px solid rgba(255,255,255,0.06)`
- Shadow au scroll : `0 2px 20px rgba(0,0,0,0.3)`
- Contenu : Logo (Services Pro + Cameroon) | Liens nav | Toggle FR/EN | Connexion | CTA

### Section 2 — Hero
- Hauteur : 100vh
- Background : Image de pro électricien (`pro-at-work-1.jpg`) avec overlay gradient
- Particules dorées : Canvas 2D, ~150 particules, connexions lignes, répulsion souris
- **Carrousel 3D cylindrique** (conservé) : 18 cartes catégories, rotateY auto, 2 anneaux (MAIN_RADIUS=480px, INNER_RADIUS=280px)
- Contenu gauche : Overline, H1, sous-titre, barre de recherche, CTAs, stats confiance
- Contenu droite (desktop) : Cartes photos pros (coiffure, plombier, satisfaction 94%)

### Section 3 — Trust Banner
- Background : gradient doré subtil
- Bordures : top/bottom `1px solid rgba(212,168,83,0.15)`
- 6 items en grille : icône + titre + description

### Section 4 — Stats Animés
- 6 cartes en grille (1 ligne desktop, 2x3 tablet, 3x2 mobile)
- Compteurs animés avec GSAP (durée 2.5s, easing power3)
- Icônes dorées dans cercles

### Section 5 — Pro Score
- 2 colonnes : texte explicatif (gauche) + anneau SVG animé (droite)
- 5 barres de progression dorées
- Anneau SVG : 5 cercles concentriques, stroke-dashoffset animé

### Section 6 — Pros du Moment
- Carrousel horizontal scrollable
- 9 cartes de profil avec : cover photo, avatar circulaire, badge, nom, catégorie, ville, score, avis
- Navigation : flèches + dots

### Section 7 — Leaderboard
- Filtres par catégorie (pills) + sélecteur ville (dropdown)
- Podium : 3 cartes avec photos, bordures Or/Argent/Bronze
- Tableau : rangs 4-10 avec indicateurs de disponibilité colorés

### Section 8 — 10 Familles de Services
- Grille 5x2
- Chaque carte : icône colorée, nom, description, nombre de pros
- Hover : border colorée, ombre portée, scale icône

### Section 9 — 20 Catégories
- Grille 4x5
- Chaque carte : image de couverture réelle en fond, overlay gradient, icône dorée, nom, nombre de pros, barre de progression au hover

### Section 10 — Comment ça marche
- 3 colonnes avec numéros 01-02-03
- Ligne connectrice dorée pointillée entre les cercles
- Chaque étape : cercle numéroté, illustration, titre, description

### Section 11 — 14 Villes
- Barre de tabs scrollable avec 14 villes
- Chaque ville : bouton avec couleur régionale
- Panneau principal : photo panoramique, overlay gradient, région, population, stats (pros/catégories/quartiers), top catégories tags

### Section 12 — Profil Pro
- Cover photo avec gradient overlay
- Avatar circulaire avec bordure dorée
- 3 badges : Vérifié (vert), Expert (or), Réponse Rapide (orange)
- Pro Score circulaire, stats (avis, étoiles, terminaison)
- Bio, calendrier de disponibilité (L M M J V S D avec couleurs)
- Boutons : Contacter, Demander un Devis

### Section 13 — Galerie Portfolio
- Grille masonry : 2 grandes images (span 2) + 6 normales
- Hover : overlay info (nom pro, catégorie, ville), icône zoom
- Lightbox : clic ouvre image plein écran, Escape pour fermer

### Section 14 — Niveaux de Profil
- 4 cartes horizontales avec ligne connectrice
- Couleurs progressives : Gris → Bleu → Or → Violet
- Icônes : Star → Award → Crown → Gem

### Section 15 — Plans Tarifaires
- 4 colonnes : Gratuit | Pro (popular) | Expert | Elite
- Carte Pro : badge "Le plus populaire", bordure dorée
- Chaque plan : nom, prix, commission, liste de features, CTA

### Section 16 — Témoignages
- 2 colonnes : citation principale (gauche) + mini-cartes (droite)
- Guillemets décoratifs dorés, étoiles, avatar client
- Mini-carte pro associé avec photo et badge
- Navigation : dots + flèches

### Section 17 — FAQ
- 2 colonnes : titre sticky (gauche) + accordéon (droite)
- 8 questions avec réponses complètes
- Chevron rotatif à 180° à l'ouverture
- Animation max-height + opacity

### Section 18 — Roadmap
- Timeline verticale avec ligne connectrice
- 4 phases en alternance gauche/droite
- Icônes : Rocket → Shield → Zap → Brain
- Badges de statut : Terminé (vert) / En cours (or) / À venir (gris)

### Section 19 — CTA
- 2 colonnes : texte + liste (gauche) + mockup téléphone (droite)
- Mockup : téléphone avec dashboard Pro, Pro Score, graphique évolution, notifications

### Section 20 — Footer
- 4 colonnes : Logo+tagline+RS | Pour les Clients | Pour les Pros | Légal
- Barre copyright + toggle FR/EN

---

## 5. ANIMATIONS & MICRO-INTERACTIONS

### Animations Globales (GSAP + ScrollTrigger)
| Élément | Animation | Déclencheur |
|---------|-----------|-------------|
| Section title | fadeInUp (y:30→0, opacity:0→1) | scroll top 80% |
| Cards | stagger fadeInUp | scroll top 80% |
| Stats counters | countUp 0→valeur (2.5s) | scroll top 85% |
| Pro Score ring | strokeDashoffset animation | scroll top 75% |
| Tableau rows | stagger slideInLeft | scroll top 85% |
| Gallery items | stagger scale+fade | scroll top 80% |

### Animations Continues
| Élément | Animation | Durée |
|---------|-----------|-------|
| Carrousel 3D | rotateY auto | 0.18deg/frame |
| Particules | drift + mouse repulsion | continu |
| Scroll indicator | bounce | 2s loop |

### Micro-interactions
| Élément | Hover | Durée |
|---------|-------|-------|
| Card | translateY(-4px), border doré | 300ms |
| Button gold | translateY(-2px), ombre | 300ms |
| Category card | scale image 1.1, barre progression | 500ms |
| Gallery item | overlay opacity, scale image | 300ms |

---

## 6. ASSETS VISUELS (19 IMAGES GÉNÉRÉES)

### Avatars Professionnels (9)
| Fichier | Métier | Ville |
|---------|--------|-------|
| `pro-avatar-1.jpg` | Plombier | Douala |
| `pro-avatar-2.jpg` | Électricienne | Yaoundé |
| `pro-avatar-3.jpg` | Menuisier | Douala |
| `pro-avatar-4.jpg` | Avocat | Douala |
| `pro-avatar-5.jpg` | Designer | Yaoundé |
| `pro-avatar-6.jpg` | Ingénieur BTP | Bafoussam |
| `pro-avatar-7.jpg` | Infirmière | Douala |
| `pro-avatar-8.jpg` | Expert-comptable | Yaoundé |
| `pro-avatar-9.jpg` | Développeur | Douala |

### Photos au Travail (3)
| Fichier | Description |
|---------|-------------|
| `pro-at-work-1.jpg` | Électricien camerounais, panneau électrique, étincelles |
| `pro-at-work-2.jpg` | Coiffeuse tressant dans salon moderne |
| `pro-at-work-3.jpg` | Plombier réparant sous évier |

### Panoramas Villes (3)
| Fichier | Ville |
|---------|-------|
| `city-douala.jpg` | Douala à l'heure dorée |
| `city-yaounde.jpg` | Yaoundé avec palais de l'Unité |
| `city-bafoussam.jpg` | Bafoussam, architecture Bamiléké |

### Avatars Clients (3)
| Fichier | Description |
|---------|-------------|
| `client-avatar-1.jpg` | Femme camerounaise 20-30 ans |
| `client-avatar-2.jpg` | Homme camerounais 40 ans, business |
| `client-avatar-3.jpg` | Femme étudiante 20 ans |

### Couvertures Catégories (4)
| Fichier | Catégorie |
|---------|-----------|
| `cat-cover-masonry.jpg` | Maçonnerie |
| `cat-cover-mechanic.jpg` | Mécanique |
| `cat-cover-beauty.jpg` | Coiffure & Beauté |
| `cover-plumbing.jpg` | Plomberie |
| `cover-electrical.jpg` | Électricité |
| `cover-carpentry.jpg` | Menuiserie |

---

## 7. SPÉCIFICATIONS TECHNIQUES FRONTEND

### Stack
- React 18 + TypeScript + Vite
- Tailwind CSS 3.4 + shadcn/ui
- GSAP + ScrollTrigger (animations)
- Lenis (smooth scrolling)
- Lucide React (icônes)

### Composants Clés
| Composant | Fichier | Description |
|-----------|---------|-------------|
| Navigation | `Navigation.tsx` | Barre fixe avec dropdown |
| HeroV2 | `HeroV2.tsx` | Hero avec fond image + cards |
| ParticleCanvas | `ParticleCanvas.tsx` | Canvas 2D particules dorées |
| CylinderCarousel | `CylinderCarousel.tsx` | Carrousel 3D CSS |
| TrustBanner | `TrustBanner.tsx` | 6 piliers de confiance |
| Stats | `Stats.tsx` | Compteurs animés |
| ProScore | `ProScore.tsx` | Anneau SVG + barres |
| ProsMoment | `ProsMoment.tsx` | Carrousel pros Elite |
| Leaderboard | `Leaderboard.tsx` | Podium + tableau |
| Families | `Families.tsx` | 10 familles colorées |
| CategoriesV2 | `CategoriesV2.tsx` | 20 catégories avec images |
| HowItWorks | `HowItWorks.tsx` | 3 étapes connectées |
| CitiesV2 | `CitiesV2.tsx` | 14 villes interactives |
| ProfileShowcase | `ProfileShowcase.tsx` | Carte profil complète |
| Gallery | `Gallery.tsx` | Grille masonry + lightbox |
| Levels | `Levels.tsx` | 4 niveaux connectés |
| Pricing | `Pricing.tsx` | 4 plans tarifaires |
| TestimonialsV2 | `TestimonialsV2.tsx` | Carousel enrichi |
| FAQ | `FAQ.tsx` | Accordéon 8 questions |
| Roadmap | `Roadmap.tsx` | Timeline 4 phases |
| CTA | `CTA.tsx` | CTA + mockup phone |
| Footer | `Footer.tsx` | Footer 4 colonnes |

---

*Document v2.0 — Services Pro Cameroon*

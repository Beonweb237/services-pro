# SERVICES PRO — ARCHITECTURE TECHNIQUE & API (v2.0)

---

## TABLE DES MATIÈRES

1. Stack Technique Complète
2. Architecture Système
3. Modèle de Données (Schéma SQL)
4. API REST — Spécification Complète
5. Frontend Architecture (20 composants)
6. Animations & Performance
7. Sécurité
8. Intégrations Tiers

---

## 1. STACK TECHNIQUE COMPLÈTE

### 1.1 Vue d'Ensemble

```
┌─────────────────────────────────────────────────────────────┐
│                         CLIENTS                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                  │
│  │  React   │  │  React   │  │  iOS/   │                  │
│  │  Web     │  │  Native  │  │  Android│ (Phase 2)        │
│  │  (WOW)   │  │  (P2)   │  │  (P3)  │                  │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘                  │
│       │              │              │                        │
│       └──────────────┼──────────────┘                        │
│                      HTTPS/JSON                              │
├──────────────────────┼──────────────────────────────────────┤
│                      │                                        │
│  ┌───────────────────┴──────────────────────┐               │
│  │              CDN / CloudFlare            │               │
│  └───────────────────┬──────────────────────┘               │
│                      │                                       │
│  ┌───────────────────┴──────────────────────┐               │
│  │              API Gateway (Nginx)         │               │
│  │  • Rate limiting • SSL termination       │               │
│  │  • Request routing • Static files        │               │
│  └───────────────────┬──────────────────────┘               │
│                      │                                       │
│  ┌───────────────────┴──────────────────────┐               │
│  │         Application Server               │               │
│  │         (Node.js / Express)              │               │
│  │                                          │               │
│  │  Auth │ Pro │ Review │ Search │ Message  │               │
│  │  City │ Family │ Level │ Pricing │ Admin  │               │
│  └───────────────────┬──────────────────────┘               │
│                      │                                       │
│  ┌───────────────────┴──────────────────────┐               │
│  │           Data Layer                     │               │
│  │  PostgreSQL │ Redis │ ElasticSearch      │               │
│  └──────────────────────────────────────────┘               │
└─────────────────────────────────────────────────────────────┘
```

### 1.2 Frontend Stack (Implémenté)

| Technologie | Version | Rôle |
|-------------|---------|------|
| **React** | 18.3+ | Framework UI |
| **TypeScript** | 5.4+ | Typage statique |
| **Vite** | 7.2+ | Build tool |
| **Tailwind CSS** | 3.4.19 | Styling utilitaire |
| **shadcn/ui** | latest | Composants UI base |
| **GSAP** | 3.12+ | Animations + ScrollTrigger |
| **Lenis** | 1.1+ | Smooth scrolling |
| **Lucide React** | latest | Icônes |

### 1.3 Backend Stack (Phase 2)

| Technologie | Version | Rôle |
|-------------|---------|------|
| **Node.js** | 20+ | Runtime |
| **Express** | 4.18+ | Framework API |
| **PostgreSQL** | 15+ | Base de données |
| **Redis** | 7+ | Cache + Sessions |
| **ElasticSearch** | 8+ | Moteur de recherche |

---

## 2. ARCHITECTURE SYSTÈME

### 2.1 Modules Backend

| Module | Routes | Description |
|--------|--------|-------------|
| **Auth** | `/api/auth/*` | Inscription, connexion, JWT, OAuth |
| **Pros** | `/api/pros/*` | CRUD profils, niveaux, badges |
| **Reviews** | `/api/reviews/*` | Avis, Pro Score, modération |
| **Search** | `/api/search/*` | Recherche full-text, filtres |
| **Cities** | `/api/cities/*` | 14 villes, quartiers, stats |
| **Families** | `/api/families/*` | 10 familles, 20 catégories |
| **Levels** | `/api/levels/*` | 5 niveaux, progression |
| **Pricing** | `/api/pricing/*` | 4 plans, souscriptions |
| **Messages** | `/api/messages/*` | Messagerie temps réel |
| **Admin** | `/api/admin/*` | Modération, analytics |

---

## 3. MODÈLE DE DONNÉES (SCHÉMA SQL)

### 3.1 Tables Principales

```sql
-- Utilisateurs
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  avatar_url VARCHAR(500),
  role ENUM('client', 'pro', 'admin', 'moderator') DEFAULT 'client',
  city_id UUID REFERENCES cities(id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Villes (14)
CREATE TABLE cities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  region VARCHAR(100) NOT NULL,
  population VARCHAR(20),
  pros_count INT DEFAULT 0,
  categories_count INT DEFAULT 0,
  quarters_count INT DEFAULT 0,
  image_url VARCHAR(500),
  color VARCHAR(7) DEFAULT '#D4A853',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Familles de services (10)
CREATE TABLE service_families (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  description TEXT,
  icon VARCHAR(50),
  color VARCHAR(7) DEFAULT '#D4A853',
  pros_count INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Catégories (20)
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  family_id UUID REFERENCES service_families(id),
  icon VARCHAR(50),
  image_url VARCHAR(500),
  pros_count INT DEFAULT 0,
  display_order INT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Profils professionnels
CREATE TABLE pro_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  category_id UUID REFERENCES categories(id),
  title VARCHAR(200),
  bio TEXT,
  cover_photo_url VARCHAR(500),
  pro_score INT DEFAULT 0 CHECK (pro_score >= 0 AND pro_score <= 100),
  level ENUM('starter', 'certified', 'expert', 'elite', 'partner') DEFAULT 'starter',
  total_reviews INT DEFAULT 0,
  avg_rating DECIMAL(2,1) DEFAULT 0,
  total_missions INT DEFAULT 0,
  response_rate INT DEFAULT 0,
  response_time_avg INT, -- minutes
  hourly_rate_min INT,
  hourly_rate_max INT,
  availability JSONB DEFAULT '{}',
  badges JSONB DEFAULT '[]',
  is_verified BOOLEAN DEFAULT FALSE,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Avis
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  pro_id UUID REFERENCES pro_profiles(id),
  client_id UUID REFERENCES users(id),
  mission_id UUID,
  quality_score INT CHECK (quality_score BETWEEN 1 AND 5),
  punctuality_score INT CHECK (punctuality_score BETWEEN 1 AND 5),
  communication_score INT CHECK (communication_score BETWEEN 1 AND 5),
  value_score INT CHECK (value_score BETWEEN 1 AND 5),
  professionalism_score INT CHECK (professionalism_score BETWEEN 1 AND 5),
  overall_score DECIMAL(3,1),
  comment TEXT,
  is_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Plans tarifaires
CREATE TABLE pricing_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(50) NOT NULL,
  slug VARCHAR(20) UNIQUE NOT NULL,
  price_xaf INT DEFAULT 0,
  commission_percent INT DEFAULT 15,
  contacts_limit INT DEFAULT 5,
  features JSONB DEFAULT '[]',
  is_popular BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Souscriptions
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  pro_id UUID REFERENCES pro_profiles(id),
  plan_id UUID REFERENCES pricing_plans(id),
  status ENUM('active', 'cancelled', 'expired') DEFAULT 'active',
  started_at TIMESTAMP DEFAULT NOW(),
  expires_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Messages
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sender_id UUID REFERENCES users(id),
  receiver_id UUID REFERENCES users(id),
  content TEXT NOT NULL,
  attachments JSONB DEFAULT '[]',
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## 4. API REST — SPÉCIFICATION

### 4.1 Endpoints Principaux

#### Authentification
```
POST   /api/auth/register       → Inscription
POST   /api/auth/login          → Connexion
POST   /api/auth/refresh        → Refresh token
POST   /api/auth/verify-phone   → Vérification SMS
DELETE /api/auth/logout         → Déconnexion
```

#### Professionnels
```
GET    /api/pros                → Liste (paginée, filtres)
GET    /api/pros/:id            → Détail profil
POST   /api/pros                → Création profil
PUT    /api/pros/:id            → Mise à jour
GET    /api/pros/featured       → Pros du moment
GET    /api/pros/leaderboard    → Classement mensuel
```

#### Villes
```
GET    /api/cities              → Liste 14 villes
GET    /api/cities/:id          → Détail ville + stats
GET    /api/cities/:id/pros     → Pros par ville
GET    /api/cities/:id/quarters → Quartiers
```

#### Familles & Catégories
```
GET    /api/families            → 10 familles
GET    /api/families/:id        → Détail + catégories
GET    /api/categories          → 20 catégories
GET    /api/categories/:id      → Détail + pros
```

#### Avis & Notation
```
POST   /api/reviews             → Déposer un avis
GET    /api/reviews/:pro_id     → Avis d'un pro
PUT    /api/reviews/:id/response → Répondre à un avis
GET    /api/reviews/score/:pro_id → Calculer Pro Score
```

#### Messagerie
```
GET    /api/messages            → Conversations
GET    /api/messages/:user_id   → Messages avec un user
POST   /api/messages            → Envoyer message
PUT    /api/messages/:id/read   → Marquer lu
```

---

## 5. FRONTEND ARCHITECTURE — 20 COMPOSANTS

### 5.1 Structure des Dossiers

```
src/
├── sections/           (20 sections)
│   ├── Navigation.tsx
│   ├── HeroV2.tsx
│   ├── ParticleCanvas.tsx
│   ├── CylinderCarousel.tsx
│   ├── TrustBanner.tsx
│   ├── Stats.tsx
│   ├── ProScore.tsx
│   ├── ProsMoment.tsx
│   ├── Leaderboard.tsx
│   ├── Families.tsx
│   ├── CategoriesV2.tsx
│   ├── HowItWorks.tsx
│   ├── CitiesV2.tsx
│   ├── ProfileShowcase.tsx
│   ├── Gallery.tsx
│   ├── Levels.tsx
│   ├── Pricing.tsx
│   ├── TestimonialsV2.tsx
│   ├── FAQ.tsx
│   ├── Roadmap.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
├── hooks/
│   └── useLanguage.tsx    (Système i18n FR/EN)
├── App.tsx
└── index.css              (Variables CSS + thème sombre)
```

### 5.2 Système i18n

```typescript
// useLanguage.tsx
// Contexte React avec traductions FR/EN
// ~200 clés de traduction couvrant toutes les 20 sections
```

---

## 6. ANIMATIONS & PERFORMANCE

### 6.1 Animations Implémentées

| Animation | Technologie | Performance |
|-----------|-------------|-------------|
| Carrousel 3D | CSS transforms + requestAnimationFrame | 60fps |
| Particules dorées | Canvas 2D + rAF | ~150 particules, 60fps |
| Scroll-triggered | GSAP ScrollTrigger | Batch processing |
| Compteurs animés | requestAnimationFrame + easing | 60fps |
| SVG ring | stroke-dashoffset + GSAP | GPU-accelerated |
| Hover effects | CSS transitions | GPU-composited |

### 6.2 Optimisations

- `will-change: transform` sur éléments animés
- IntersectionObserver pour pause quand hors écran
- `prefers-reduced-motion` respecté
- Lazy loading des images
- Code splitting par section

---

## 7. SÉCURITÉ

### 7.1 Mesures

| Couche | Mesure |
|--------|--------|
| Auth | JWT + refresh tokens, bcrypt |
| Input | Validation Joi, sanitization |
| API | Rate limiting, CORS |
| Upload | Type validation, size limit, scan |
| XSS | CSP headers, escaping |
| SQL | Parameterized queries |

---

## 8. INTÉGRATIONS TIERS

| Service | Usage | Phase |
|---------|-------|-------|
| **Cloudflare** | CDN, DDoS protection | P1 |
| **Twilio/Africa's Talking** | SMS vérification | P1 |
| **Stripe/PayUnit** | Paiement Mobile Money | P2 |
| **Google Maps** | Carte des pros par ville | P2 |
| **Firebase** | Push notifications | P2 |
| **S3/Cloudinary** | Stockage images | P1 |

---

*Document v2.0 — Services Pro Cameroon*

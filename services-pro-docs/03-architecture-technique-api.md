# SERVICES PRO — ARCHITECTURE TECHNIQUE & DOCUMENTATION API

---

## TABLE DES MATIÈRES

1. Stack Technique Complète
2. Architecture Système
3. Infrastructure & Déploiement
4. Modèle de Données (Schéma SQL)
5. API REST — Spécification Complète
6. Logique Métier (Pseudo-code)
7. Sécurité
8. Performance & Optimisation
9. Intégrations Tiers
10. Monitoring & Logging
11. Plan de Reprise d'Activité

---

## 1. STACK TECHNIQUE COMPLÈTE

### 1.1 Vue d'Ensemble

```
┌─────────────────────────────────────────────────────────────────────┐
│                         CLIENTS                                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                          │
│  │  React   │  │  React   │  │  iOS/   │                          │
│  │  Web     │  │  Native  │  │  Android│ (Future)                 │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘                          │
│       │              │              │                               │
│       └──────────────┼──────────────┘                               │
│                      HTTPS/JSON                                    │
├──────────────────────┼──────────────────────────────────────────────┤
│                      │                                              │
│  ┌───────────────────┴──────────────────────┐                     │
│  │              CDN / Load Balancer         │                     │
│  │              (CloudFlare / Nginx)        │                     │
│  └───────────────────┬──────────────────────┘                     │
│                      │                                             │
│  ┌───────────────────┴──────────────────────┐                     │
│  │              API Gateway                 │                     │
│  │         (Nginx Reverse Proxy)            │                     │
│  │  • Rate limiting  • SSL termination      │                     │
│  │  • Request routing  • Static files       │                     │
│  └───────────────────┬──────────────────────┘                     │
│                      │                                             │
│  ┌───────────────────┴──────────────────────┐                     │
│  │         Application Server               │                     │
│  │         (Node.js / Express)              │                     │
│  │                                          │                     │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ │                     │
│  │  │ Auth     │ │ Pro      │ │ Review   │ │                     │
│  │  │ Module   │ │ Module   │ │ Module   │ │                     │
│  │  └──────────┘ └──────────┘ └──────────┘ │                     │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ │                     │
│  │  │ Search   │ │ Message  │ │ Notif    │ │                     │
│  │  │ Module   │ │ Module   │ │ Module   │ │                     │
│  │  └──────────┘ └──────────┘ └──────────┘ │                     │
│  │  ┌──────────┐ ┌──────────┐              │                     │
│  │  │ Leaderb  │ │ Admin    │              │                     │
│  │  │ Module   │ │ Module   │              │                     │
│  │  └──────────┘ └──────────┘              │                     │
│  └──────────────────────────────────────────┘                     │
│                      │                                             │
│  ┌───────────────────┴──────────────────────┐                     │
│  │           Data Layer                     │                     │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ │                     │
│  │  │PostgreSQL│ │  Redis   │ │ElasticS. │ │                     │
│  │  │Primary   │ │  Cache   │ │  Search  │ │                     │
│  │  │DB        │ │  Queue   │ │  Engine  │ │                     │
│  │  └──────────┘ └──────────┘ └──────────┘ │                     │
│  └──────────────────────────────────────────┘                     │
│                      │                                             │
│  ┌───────────────────┴──────────────────────┐                     │
│  │        External Services                 │                     │
│  │  ┌────────┐ ┌────────┐ ┌──────────────┐ │                     │
│  │  │Twilio/ │ │Cloud  │ │Mobile Money  │ │                     │
│  │  │Africa  │ │Storage│ │(Phase 2)     │ │                     │
│  │  │Talking │ │(S3)   │ │              │ │                     │
│  │  └────────┘ └────────┘ └──────────────┘ │                     │
│  └──────────────────────────────────────────┘                     │
└─────────────────────────────────────────────────────────────────────┘
```

### 1.2 Frontend

| Technologie | Version | Rôle |
|-------------|---------|------|
| **React** | 18.3+ | Framework UI déclaratif |
| **TypeScript** | 5.4+ | Typage statique, DX améliorée |
| **Vite** | 5.2+ | Build tool, HMR, bundling |
| **Tailwind CSS** | 3.4+ | Styling utilitaire, design system |
| **shadcn/ui** | latest | Composants UI de base accessibles |
| **Framer Motion** | 11.0+ | Animations React déclaratives |
| **Lucide React** | latest | Système d'icônes cohérent |
| **TanStack Query** | 5.0+ | Gestion état serveur, caching, sync |
| **Zustand** | 4.5+ | Gestion état global léger |
| **React Router** | 6.22+ | Routing côté client |
| **Recharts** | 2.12+ | Graphiques et visualisations |
| **Leaflet** | latest | Cartes interactives (OpenStreetMap) |
| **React Hook Form** | 7.51+ | Gestion formulaires performante |
| **Zod** | 3.22+ | Validation schémas TypeScript |
| **Socket.io-client** | 4.7+ | Web temps réel (messagerie, notifs) |

### 1.3 Backend

| Technologie | Version | Rôle |
|-------------|---------|------|
| **Node.js** | 20 LTS | Runtime JavaScript |
| **Express.js** | 4.19+ | Framework web minimaliste |
| **TypeScript** | 5.4+ | Typage statique |
| **Prisma ORM** | 5.12+ | ORM type-safe, migrations |
| **bcrypt** | 5.1+ | Hachage mots de passe |
| **jsonwebtoken** | 9.0+ | Génération/validation JWT |
| **multer** | 1.4+ | Upload de fichiers |
| **sharp** | 0.33+ | Redimensionnement images |
| **nodemailer** | 6.9+ | Envoi d'emails |
| **twilio** | 5.0+ | Envoi SMS |
| **socket.io** | 4.7+ | WebSocket temps réel |
| **helmet** | 7.1+ | Sécurité headers HTTP |
| **cors** | 2.8+ | Cross-origin requests |
| **express-rate-limit** | 7.2+ | Rate limiting |
| **morgan** | 1.10+ | Logging HTTP |
| **winston** | 3.13+ | Logging applicatif |
| **node-cron** | 3.0+ | Tâches planifiées |
| **joi** | 17.12+ | Validation des entrées |
| **ioredis** | 5.3+ | Client Redis |
| **@elastic/elasticsearch** | 8.12+ | Client Elasticsearch |
| **stripe** | 15.0+ | Paiements (Phase 2) |

### 1.4 Base de Données

| Technologie | Version | Rôle |
|-------------|---------|------|
| **PostgreSQL** | 16+ | Base de données principale |
| **Redis** | 7.2+ | Cache, sessions, rate limiting, leaderboard temps réel |
| **Elasticsearch** | 8.12+ | Recherche full-text des professionnels |

### 1.5 Infrastructure

| Technologie | Version | Rôle |
|-------------|---------|------|
| **Nginx** | 1.25+ | Reverse proxy, load balancing, SSL |
| **Docker** | 25+ | Conteneurisation |
| **Docker Compose** | 2.24+ | Orchestration développement |
| **GitHub Actions** | N/A | CI/CD |
| **AWS / DigitalOcean** | N/A | Cloud hosting (IaaS) |
| **CloudFlare** | N/A | CDN, DDoS protection |

---

## 2. ARCHITECTURE SYSTÈME

### 2.1 Diagramme de Composants

```
┌────────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                            │
│                                                                │
│   React SPA                                                    │
│   ├── src/pages/       (Page components)                       │
│   ├── src/components/  (Reusable UI)                           │
│   ├── src/hooks/       (Custom hooks)                          │
│   ├── src/stores/      (Zustand stores)                        │
│   ├── src/lib/         (Utils, API client)                     │
│   └── src/types/       (TypeScript types)                      │
└──────────────────────────┬─────────────────────────────────────┘
                           │ HTTPS / REST JSON / WebSocket
┌──────────────────────────┴─────────────────────────────────────┐
│                        API LAYER                               │
│                                                                │
│   Express.js                                                   │
│   ├── src/middleware/                                          │
│   │   ├── auth.ts        (JWT validation)                      │
│   │   ├── rateLimiter.ts (Request throttling)                  │
│   │   ├── upload.ts      (File upload handler)                 │
│   │   ├── validation.ts  (Request body validation)             │
│   │   └── errorHandler.ts (Centralized error handling)         │
│   ├── src/modules/                                             │
│   │   ├── auth/                                                │
│   │   │   ├── auth.controller.ts                               │
│   │   │   ├── auth.service.ts                                  │
│   │   │   └── auth.routes.ts                                   │
│   │   ├── profile/                                             │
│   │   ├── pro/                                                 │
│   │   ├── review/                                              │
│   │   ├── search/                                              │
│   │   ├── message/                                             │
│   │   ├── notification/                                        │
│   │   ├── leaderboard/                                         │
│   │   └── admin/                                               │
│   ├── src/services/                                            │
│   │   ├── email.service.ts                                     │
│   │   ├── sms.service.ts                                       │
│   │   ├── storage.service.ts                                   │
│   │   ├── elasticsearch.service.ts                             │
│   │   └── socket.service.ts                                    │
│   ├── src/jobs/                                                │
│   │   ├── leaderboard.job.ts                                   │
│   │   ├── notifications.job.ts                                 │
│   │   └── cleanup.job.ts                                       │
│   └── src/utils/                                               │
│       ├── logger.ts                                            │
│       ├── hash.ts                                              │
│       └── validators.ts                                        │
└──────────────────────────┬─────────────────────────────────────┘
                           │ SQL / Redis Protocol / HTTP
┌──────────────────────────┴─────────────────────────────────────┐
│                        DATA LAYER                              │
│                                                                │
│   PostgreSQL (Prisma ORM)                                      │
│   ├── Tables: users, profiles, pro_details, categories,        │
│   │           missions, reviews, messages, badges, ...         │
│   │                                                            │
│   Redis                                                        │
│   ├── Keys: sessions, rate_limits, leaderboard_cache,          │
│   │         search_cache, otp_codes                            │
│   │                                                            │
│   Elasticsearch                                                │
│   └── Index: pros (full-text search)                           │
└────────────────────────────────────────────────────────────────┘
```

### 2.2 Flux de Données

#### 2.2.1 Authentification

```
Client                          Serveur
  │                                │
  │── POST /api/auth/register ────>│
  │   {email, phone, password}     │
  │                                │── Validation (Joi/Zod)
  │                                │── Hash password (bcrypt, 12 rounds)
  │                                │── INSERT user (Prisma)
  │                                │── Generate OTP (4 digits)
  │                                │── Store OTP in Redis (TTL 10min)
  │                                │── Send SMS via Twilio
  │<──── {userId, requiresVerification: true} ────│
  │                                │
  │── POST /api/auth/verify ──────>│
  │   {userId, otpCode}            │
  │                                │── Verify OTP (Redis lookup)
  │                                │── UPDATE user (phoneVerifiedAt)
  │                                │── Generate JWT pair
  │<──── {accessToken, refreshToken, user} ────│
  │                                │
  │── API calls ──────────────────>│
  │   Authorization: Bearer <JWT>  │── Verify JWT (jsonwebtoken)
  │                                │── Attach user to request
  │<──── Protected data ───────────│
```

#### 2.2.2 Dépôt d'un Avis

```
Client                          Serveur
  │                                │
  │── POST /api/reviews ──────────>│
  │   {missionId, ratings,        │── Auth middleware (JWT)
  │    comment, photos,            │── Validation (Joi/Zod)
  │    recommend, isAnonymous}     │── Anti-fraud checks:
  │                                │    1. Mission exists & completed
  │                                │    2. Client is mission owner
  │                                │    3. No existing review for mission
  │                                │    4. IP/phone checks
  │                                │── Fraud detection service
  │                                │── IF fraud suspected:
  │                                │     status = 'flagged'
  │                                │     Notify moderators
  │                                │   ELSE:
  │                                │     status = 'approved'
  │                                │── INSERT review (Prisma)
  │                                │── Recalculate Pro Score
  │                                │── Invalidate leaderboard cache
  │                                │── Update Elasticsearch index
  │                                │── Send notification to pro (Socket.IO)
  │                                │── Update Redis search cache
  │<──── {review, scoreUpdated} ───│
  │                                │── IF approved:
  │                                │     Emit SSE to connected clients
  │                                │── IF flagged:
  │                                │     Add to moderation queue
```

#### 2.2.3 Mise à Jour Leaderboard (Cron Job)

```
Cron (toutes les heures)
  │
  ├── leaderboard.job.ts
  │     │
  │     ├── Pour chaque catégorie:
  │     │   ├── Récupérer pros actifs (mission < 60j)
  │     │   ├── Trier par pro_score DESC
  │     │   ├── Attribuer rang
  │     │   ├── Comparer avec snapshot précédent
  │     │   ├── INSERT leaderboard_snapshot
  │     │   └── Notifier pros du Top 10 (si changement)
  │     │
  │     ├── Pour chaque ville:
  │     │   └── Même processus
  │     │
  │     ├── Invalider cache Redis (del leaderboard:*)
  │     └── Préchauffer cache (SET leaderboard:global, leaderboard:cat:*)
  │
  └── Mettre à jour le cache Redis avec les nouveaux classements
```

### 2.3 Architecture des Modules

Chaque module suit la structure **Controller → Service → Repository** :

```typescript
// Module Pattern (ex: auth)

// auth.routes.ts — Définition des routes
router.post('/register', validate(registerSchema), authController.register);
router.post('/login', validate(loginSchema), authController.login);

// auth.controller.ts — Gestion des requêtes/réponses
const register = async (req: Request, res: Response) => {
  const result = await authService.register(req.body);
  res.status(201).json(result);
};

// auth.service.ts — Logique métier
const register = async (data: RegisterDTO) => {
  const hashedPassword = await hash(data.password, 12);
  const user = await prisma.user.create({ data: { ...data, password: hashedPassword } });
  await sendVerificationSMS(user.phone);
  return { userId: user.id, requiresVerification: true };
};
```

---

## 3. INFRASTRUCTURE & DÉPLOIEMENT

### 3.1 Architecture d'Hébergement

```
┌─────────────────────────────────────────────────────────────┐
│                     ZONE DNS (CloudFlare)                   │
│  servicespro.cm → CDN + DDoS protection + SSL              │
└──────────────────────────┬──────────────────────────────────┘
                           │
┌──────────────────────────┴──────────────────────────────────┐
│                  VPS CLOUD (DigitalOcean/AWS)               │
│                                                             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │   Nginx     │  │  App Server │  │  App Server │         │
│  │  (Reverse   │  │   (Node)    │  │   (Node)    │         │
│  │   Proxy)    │  │  Instance 1 │  │  Instance 2 │         │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘         │
│         │                │                │                │
│         └────────────────┴────────────────┘                │
│                           │                                 │
│  ┌─────────────┐  ┌──────┴──────┐  ┌─────────────┐         │
│  │ PostgreSQL  │  │    Redis    │  │Elasticsearch│         │
│  │  (Primary)  │  │   (Cache)   │  │   (Search)  │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
│                                                             │
│  ┌─────────────┐  ┌─────────────┐                           │
│  │ Object Sto. │  │  Backup     │                           │
│  │   (S3)      │  │  Storage    │                           │
│  └─────────────┘  └─────────────┘                           │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 Conteneurisation (Docker)

```yaml
# docker-compose.yml (Development)
version: '3.8'

services:
  app:
    build: ./backend
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://user:pass@postgres:5432/servicespro
      - REDIS_URL=redis://redis:6379
      - JWT_SECRET=${JWT_SECRET}
      - TWILIO_SID=${TWILIO_SID}
    depends_on:
      - postgres
      - redis
      - elasticsearch

  web:
    build: ./frontend
    ports:
      - "5173:5173"
    volumes:
      - ./frontend:/app
      - /app/node_modules

  postgres:
    image: postgres:16-alpine
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_DB=servicespro
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

  elasticsearch:
    image: elasticsearch:8.12.0
    environment:
      - discovery.type=single-node
      - xpack.security.enabled=false
    ports:
      - "9200:9200"

volumes:
  postgres_data:
```

### 3.3 CI/CD Pipeline (GitHub Actions)

```yaml
# .github/workflows/deploy.yml
name: Deploy Services Pro

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run lint
      - run: npm run test:unit
      - run: npm run test:integration

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: docker build -t servicespro:${{ github.sha }} .
      - run: docker push registry/servicespro:${{ github.sha }}

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - run: ssh deploy@server "docker pull registry/servicespro:${{ github.sha }} && docker-compose up -d"
```

### 3.4 Configuration Nginx

```nginx
# /etc/nginx/sites-available/servicespro
server {
    listen 443 ssl http2;
    server_name servicespro.cm www.servicespro.cm;

    ssl_certificate /etc/letsencrypt/live/servicespro.cm/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/servicespro.cm/privkey.pem;

    # Frontend (React SPA)
    location / {
        root /var/www/servicespro/web;
        try_files $uri $uri/ /index.html;
        expires 1d;
        add_header Cache-Control "public, immutable";
    }

    # API
    location /api {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # Rate limiting
        limit_req zone=api burst=20 nodelay;
        limit_req_status 429;
    }

    # WebSocket (Socket.IO)
    location /socket.io {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }

    # Uploaded files
    location /uploads {
        alias /var/www/servicespro/uploads;
        expires 7d;
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
}

# Rate limiting zones
limit_req_zone $binary_remote_addr zone=api:10m rate=100r/m;
```

---

## 4. MODÈLE DE DONNÉES (SCHÉMA SQL)

### 4.1 Schéma Complet (Prisma)

```prisma
// schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// ============================================================
// UTILISATEURS
// ============================================================

model User {
  id                String    @id @default(uuid())
  email             String    @unique
  phone             String    @unique
  passwordHash      String    @map("password_hash")
  role              UserRole  @default(CLIENT)
  isVerified        Boolean   @default(false) @map("is_verified")
  isActive          Boolean   @default(true) @map("is_active")
  emailVerifiedAt   DateTime? @map("email_verified_at")
  phoneVerifiedAt   DateTime? @map("phone_verified_at")
  createdAt         DateTime  @default(now()) @map("created_at")
  updatedAt         DateTime  @updatedAt @map("updated_at")

  // Relations
  profile           Profile?
  sentMessages      Message[] @relation("SentMessages")
  notifications     Notification[]
  activityLogs      ActivityLog[]
  userBadges        UserBadge[]
  sessions          Session[]

  @@map("users")
}

enum UserRole {
  CLIENT
  PRO
  ADMIN
  MODERATOR
  
  @@map("user_role")
}

// ============================================================
// SESSIONS (JWT Refresh Tokens)
// ============================================================

model Session {
  id           String   @id @default(uuid())
  userId       String   @map("user_id")
  refreshToken String   @unique @map("refresh_token")
  fingerprint  String?
  ipAddress    String?  @map("ip_address")
  userAgent    String?  @map("user_agent")
  expiresAt    DateTime @map("expires_at")
  createdAt    DateTime @default(now()) @map("created_at")

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@map("sessions")
}

// ============================================================
// PROFILS (Client & Pro)
// ============================================================

model Profile {
  id              String   @id @default(uuid())
  userId          String   @unique @map("user_id")
  type            ProfileType
  firstName       String   @map("first_name")
  lastName        String   @map("last_name")
  displayName     String?  @map("display_name")
  avatarUrl       String?  @map("avatar_url")
  coverUrl        String?  @map("cover_url")
  bio             String?
  videoUrl        String?  @map("video_url")
  city            String
  district        String?
  latitude        Decimal? @db.Decimal(10, 8)
  longitude       Decimal? @db.Decimal(11, 8)
  serviceRadiusKm Int      @default(10) @map("service_radius_km")
  languages       Json?    @default("[\"fr\"]")
  createdAt       DateTime @default(now()) @map("created_at")
  updatedAt       DateTime @updatedAt @map("updated_at")

  // Relations
  user            User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  proDetails      ProDetails?
  clientMissions  Mission[] @relation("ClientMissions")
  proMissions     Mission[] @relation("ProMissions")
  clientReviews   Review[] @relation("ClientReviews")
  proReviews      Review[] @relation("ProReviews")
  conversationsAsClient Conversation[] @relation("ClientConversations")
  conversationsAsPro    Conversation[] @relation("ProConversations")
  portfolioItems  PortfolioItem[]

  @@map("profiles")
}

enum ProfileType {
  CLIENT
  PRO
  
  @@map("profile_type")
}

// ============================================================
// DÉTAILS PRO
// ============================================================

model ProDetails {
  id                    String          @id @default(uuid())
  profileId             String          @unique @map("profile_id")
  categoryId            String          @map("category_id")
  subcategories         Json            @default("[]")
  expertiseLevel        ExpertiseLevel  @map("expertise_level")
  priceMin              Int?            @map("price_min")
  priceMax              Int?            @map("price_max")
  pricingType           PricingType     @default(QUOTE) @map("pricing_type")
  freeQuote             Boolean         @default(true) @map("free_quote")
  yearsExperience       Int             @default(0) @map("years_experience")
  idDocumentUrl         String?         @map("id_document_url")
  idVerifiedAt          DateTime?       @map("id_verified_at")
  idVerifiedBy          String?         @map("id_verified_by")
  
  // Scoring
  proScore              Decimal         @default(0) @db.Decimal(5, 2) @map("pro_score")
  totalReviews          Int             @default(0) @map("total_reviews")
  averageRating         Decimal         @default(0) @db.Decimal(2, 1) @map("average_rating")
  responseTimeAvgMin    Int             @default(0) @map("response_time_avg_minutes")
  completionRate        Decimal         @default(100) @db.Decimal(5, 2) @map("completion_rate")
  repeatClientRate      Decimal         @default(0) @db.Decimal(5, 2) @map("repeat_client_rate")
  
  // Availability
  isAvailable           Boolean         @default(true) @map("is_available")
  isUrgentAvailable     Boolean         @default(false) @map("is_urgent_available")
  nextAvailableDate     DateTime?       @map("next_available_date")
  
  // Status
  validationStatus      ValidationStatus @default(PENDING) @map("validation_status")
  validatedAt           DateTime?       @map("validated_at")
  validatedBy           String?         @map("validated_by")
  
  createdAt             DateTime        @default(now()) @map("created_at")
  updatedAt             DateTime        @updatedAt @map("updated_at")

  // Relations
  profile   Profile   @relation(fields: [profileId], references: [id], onDelete: Cascade)
  category  Category  @relation(fields: [categoryId], references: [id])
  availabilitySlots AvailabilitySlot[]

  @@map("pro_details")
}

enum ExpertiseLevel {
  BEGINNER
  INTERMEDIATE
  EXPERT
  MASTER
  
  @@map("expertise_level")
}

enum PricingType {
  FIXED
  HOURLY
  QUOTE
  
  @@map("pricing_type")
}

enum ValidationStatus {
  PENDING
  ON_HOLD
  VALIDATED
  REJECTED
  
  @@map("validation_status")
}

// ============================================================
// CATÉGORIES
// ============================================================

model Category {
  id              String   @id @default(uuid())
  slug            String   @unique
  nameFr          String   @map("name_fr")
  nameEn          String   @map("name_en")
  icon            String   @default("CircleHelp")
  description     String?
  displayOrder    Int      @default(0) @map("display_order")
  isActive        Boolean  @default(true) @map("is_active")
  createdAt       DateTime @default(now()) @map("created_at")

  // Relations
  proDetails      ProDetails[]
  missions        Mission[]
  subcategories   Subcategory[]

  @@map("categories")
}

model Subcategory {
  id          String   @id @default(uuid())
  categoryId  String   @map("category_id")
  nameFr      String   @map("name_fr")
  nameEn      String   @map("name_en")
  slug        String
  isActive    Boolean  @default(true) @map("is_active")

  category Category @relation(fields: [categoryId], references: [id], onDelete: Cascade)

  @@unique([categoryId, slug])
  @@map("subcategories")
}

// ============================================================
// PORTFOLIO
// ============================================================

model PortfolioItem {
  id          String   @id @default(uuid())
  profileId   String   @map("profile_id")
  imageUrl    String   @map("image_url")
  caption     String?
  beforeUrl   String?  @map("before_url")
  displayOrder Int     @default(0) @map("display_order")
  createdAt   DateTime @default(now()) @map("created_at")

  profile Profile @relation(fields: [profileId], references: [id], onDelete: Cascade)

  @@map("portfolio_items")
}

// ============================================================
// DISPONIBILITÉS
// ============================================================

model AvailabilitySlot {
  id            String    @id @default(uuid())
  proId         String    @map("pro_id")
  dayOfWeek     Int       @map("day_of_week") // 0 = Dimanche, 1 = Lundi...
  startTime     String    @map("start_time") // "HH:mm"
  endTime       String    @map("end_time")
  isRecurring   Boolean   @default(true) @map("is_recurring")
  specificDate  DateTime? @map("specific_date")
  isBlocked     Boolean   @default(false) @map("is_blocked")
  blockReason   String?   @map("block_reason")
  createdAt     DateTime  @default(now()) @map("created_at")

  proDetails ProDetails @relation(fields: [proId], references: [id], onDelete: Cascade)

  @@map("availability_slots")
}

// ============================================================
// MISSIONS
// ============================================================

model Mission {
  id              String        @id @default(uuid())
  clientId        String        @map("client_id")
  proId           String        @map("pro_id")
  categoryId      String        @map("category_id")
  title           String
  description     String?
  status          MissionStatus @default(PENDING)
  scheduledDate   DateTime?     @map("scheduled_date")
  completedDate   DateTime?     @map("completed_date")
  cancelledDate   DateTime?     @map("cancelled_date")
  cancelReason    String?       @map("cancel_reason")
  priceAgreed     Int?          @map("price_agreed")
  address         String?
  latitude        Decimal?      @db.Decimal(10, 8)
  longitude       Decimal?      @db.Decimal(11, 8)
  createdAt       DateTime      @default(now()) @map("created_at")
  updatedAt       DateTime      @updatedAt @map("updated_at")

  // Relations
  client    Profile  @relation("ClientMissions", fields: [clientId], references: [id])
  pro       Profile  @relation("ProMissions", fields: [proId], references: [id])
  category  Category @relation(fields: [categoryId], references: [id])
  review    Review?

  @@map("missions")
}

enum MissionStatus {
  PENDING       // En attente d'acceptation
  ACCEPTED      // Acceptée par le pro
  IN_PROGRESS   // En cours de réalisation
  COMPLETED     // Terminée (peut être notée)
  CANCELLED     // Annulée
  DISPUTED      // En litige
  
  @@map("mission_status")
}

// ============================================================
// AVIS (REVIEWS)
// ============================================================

model Review {
  id                      String       @id @default(uuid())
  missionId               String       @unique @map("mission_id")
  clientId                String       @map("client_id")
  proId                   String       @map("pro_id")
  
  // 5 critères
  qualityRating           Int          @map("quality_rating")
  punctualityRating       Int          @map("punctuality_rating")
  communicationRating     Int          @map("communication_rating")
  valueRating             Int          @map("value_rating")
  professionalismRating   Int          @map("professionalism_rating")
  overallRating           Decimal      @db.Decimal(2, 1) @map("overall_rating")
  
  // Contenu
  comment                 String
  photos                  Json?        @default("[]")
  wouldRecommend          Boolean      @map("would_recommend")
  isAnonymous             Boolean      @default(false) @map("is_anonymous")
  
  // Modération
  status                  ReviewStatus @default(PENDING)
  flaggedReason           String?      @map("flagged_reason")
  moderatedAt             DateTime?    @map("moderated_at")
  moderatedBy             String?      @map("moderated_by")
  moderationNote          String?      @map("moderation_note")
  
  // Réponse du pro
  proResponse             String?      @map("pro_response")
  proRespondedAt          DateTime?    @map("pro_responded_at")
  
  // Anti-fraude
  clientIp                String?      @map("client_ip")
  isFraudSuspected        Boolean      @default(false) @map("is_fraud_suspected")
  
  createdAt               DateTime     @default(now()) @map("created_at")
  updatedAt               DateTime     @updatedAt @map("updated_at")

  // Relations
  mission Mission @relation(fields: [missionId], references: [id])
  client  Profile @relation("ClientReviews", fields: [clientId], references: [id])
  pro     Profile @relation("ProReviews", fields: [proId], references: [id])

  @@map("reviews")
}

enum ReviewStatus {
  PENDING   // En attente de modération
  APPROVED  // Approuvé et publié
  REJECTED  // Rejeté
  FLAGGED   // Signalé (fraude ou contenu)
  
  @@map("review_status")
}

// ============================================================
// MESSAGERIE
// ============================================================

model Conversation {
  id        String   @id @default(uuid())
  clientId  String   @map("client_id")
  proId     String   @map("pro_id")
  createdAt DateTime @default(now()) @map("created_at")
  updatedAt DateTime @updatedAt @map("updated_at")

  // Relations
  client   Profile   @relation("ClientConversations", fields: [clientId], references: [id])
  pro      Profile   @relation("ProConversations", fields: [proId], references: [id])
  messages Message[]

  @@unique([clientId, proId])
  @@map("conversations")
}

model Message {
  id              String    @id @default(uuid())
  conversationId  String    @map("conversation_id")
  senderId        String    @map("sender_id")
  content         String
  attachments     Json?     @default("[]")
  readAt          DateTime? @map("read_at")
  createdAt       DateTime  @default(now()) @map("created_at")

  conversation Conversation @relation(fields: [conversationId], references: [id], onDelete: Cascade)
  sender       User         @relation("SentMessages", fields: [senderId], references: [id])

  @@map("messages")
}

// ============================================================
// BADGES
// ============================================================

model Badge {
  id              String   @id @default(uuid())
  slug            String   @unique
  nameFr          String   @map("name_fr")
  nameEn          String   @map("name_en")
  description     String?
  icon            String   @default("Award")
  color           String   @default("#F59E0B")
  conditionType   String   @map("condition_type")
  conditionValue  Int      @map("condition_value")
  createdAt       DateTime @default(now()) @map("created_at")

  userBadges UserBadge[]

  @@map("badges")
}

model UserBadge {
  id        String   @id @default(uuid())
  userId    String   @map("user_id")
  badgeId   String   @map("badge_id")
  earnedAt  DateTime @default(now()) @map("earned_at")
  metadata  Json?

  user  User  @relation(fields: [userId], references: [id], onDelete: Cascade)
  badge Badge @relation(fields: [badgeId], references: [id], onDelete: Cascade)

  @@unique([userId, badgeId])
  @@map("user_badges")
}

// ============================================================
// LEADERBOARD
// ============================================================

model LeaderboardSnapshot {
  id          String   @id @default(uuid())
  categoryId  String?  @map("category_id")
  city        String?
  periodMonth String   @map("period_month") // "2026-06"
  rankings    Json
  createdAt   DateTime @default(now()) @map("created_at")
  updatedAt   DateTime @updatedAt @map("updated_at")

  @@unique([categoryId, city, periodMonth])
  @@map("leaderboard_snapshots")
}

// ============================================================
// NOTIFICATIONS
// ============================================================

model Notification {
  id        String           @id @default(uuid())
  userId    String           @map("user_id")
  type      NotificationType
  title     String
  message   String
  data      Json?
  isRead    Boolean          @default(false) @map("is_read")
  readAt    DateTime?        @map("read_at")
  createdAt DateTime         @default(now()) @map("created_at")

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@map("notifications")
}

enum NotificationType {
  NEW_CONTACT_REQUEST
  NEW_REVIEW
  REVIEW_RESPONSE
  RANKING_CHANGE
  BADGE_EARNED
  VALIDATION_RESULT
  NEW_MESSAGE
  REVIEW_REMINDER
  PRO_AVAILABLE
  SECURITY_ALERT
  SYSTEM
  
  @@map("notification_type")
}

// ============================================================
// SIGNLEMENTS
// ============================================================

model Report {
  id          String       @id @default(uuid())
  reporterId  String       @map("reporter_id")
  reportedId  String       @map("reported_id")
  type        ReportType
  description String
  status      ReportStatus @default(OPEN)
  resolution  String?
  resolvedAt  DateTime?    @map("resolved_at")
  resolvedBy  String?      @map("resolved_by")
  createdAt   DateTime     @default(now()) @map("created_at")
  updatedAt   DateTime     @updatedAt @map("updated_at")

  @@map("reports")
}

enum ReportType {
  NO_SHOW
  OVERCHARGING
  POOR_QUALITY
  MISCONDUCT
  FAKE_REVIEW
  SPAM
  OTHER
  
  @@map("report_type")
}

enum ReportStatus {
  OPEN
  UNDER_REVIEW
  RESOLVED
  DISMISSED
  
  @@map("report_status")
}

// ============================================================
// ACTIVITY LOGS (Audit)
// ============================================================

model ActivityLog {
  id          String   @id @default(uuid())
  userId      String?  @map("user_id")
  action      String
  entityType  String   @map("entity_type")
  entityId    String   @map("entity_id")
  metadata    Json?
  ipAddress   String?  @map("ip_address")
  createdAt   DateTime @default(now()) @map("created_at")

  user User? @relation(fields: [userId], references: [id])

  @@index([userId, createdAt])
  @@index([entityType, entityId])
  @@map("activity_logs")
}

// ============================================================
// OTP CODES (Téléphone)
// ============================================================

model OtpCode {
  id        String   @id @default(uuid())
  phone     String
  code      String
  purpose   String   // "register", "login", "reset_password"
  attempts  Int      @default(0)
  expiresAt DateTime @map("expires_at")
  createdAt DateTime @default(now()) @map("created_at")

  @@index([phone, purpose, createdAt])
  @@map("otp_codes")
}
```

### 4.2 Index de Performance

```sql
-- Index pour la recherche de pros
CREATE INDEX idx_pro_details_score ON pro_details(pro_score DESC);
CREATE INDEX idx_pro_details_category ON pro_details(category_id);
CREATE INDEX idx_pro_details_validation ON pro_details(validation_status);
CREATE INDEX idx_pro_details_available ON pro_details(is_available);

-- Index pour les avis
CREATE INDEX idx_reviews_pro_id ON reviews(pro_id, status, created_at DESC);
CREATE INDEX idx_reviews_mission_id ON reviews(mission_id);
CREATE INDEX idx_reviews_status ON reviews(status);

-- Index pour les missions
CREATE INDEX idx_missions_client ON missions(client_id, status);
CREATE INDEX idx_missions_pro ON missions(pro_id, status);
CREATE INDEX idx_missions_completed ON missions(status, completed_date) WHERE status = 'COMPLETED';

-- Index pour la messagerie
CREATE INDEX idx_messages_conversation ON messages(conversation_id, created_at DESC);
CREATE INDEX idx_conversations_participants ON conversations(client_id, proId);

-- Index pour les notifications
CREATE INDEX idx_notifications_user ON notifications(user_id, is_read, created_at DESC);

-- Index pour les logs
CREATE INDEX idx_activity_logs_user ON activity_logs(user_id, created_at DESC);
CREATE INDEX idx_activity_logs_entity ON activity_logs(entity_type, entity_id);

-- Index full-text pour la recherche (PostgreSQL native)
CREATE INDEX idx_profiles_search ON profiles USING gin(to_tsvector('french', coalesce(first_name, '') || ' ' || coalesce(last_name, '') || ' ' || coalesce(bio, '')));
```

---

## 5. API REST — SPÉCIFICATION COMPLÈTE

### 5.1 Convention Générale

- **Base URL** : `https://api.servicespro.cm/v1`
- **Format** : JSON
- **Authentification** : Header `Authorization: Bearer <access_token>`
- **Content-Type** : `application/json` (sauf upload : `multipart/form-data`)
- **Pagination** : `?page=1&limit=20`
- **Tri** : `?sort=field:asc` ou `?sort=field:desc`
- **Filtrage** : `?field=value` ou `?field[gte]=value`
- **Réponse standard** :
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 156,
    "totalPages": 8
  }
}
```
- **Réponse erreur** :
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Le champ email est requis",
    "details": [ { "field": "email", "message": "Email invalide" } ]
  }
}
```

### 5.2 Codes d'Erreur

| Code HTTP | Code Erreur | Description |
|-----------|-------------|-------------|
| 400 | `VALIDATION_ERROR` | Données invalides |
| 400 | `BAD_REQUEST` | Requête incorrecte |
| 401 | `UNAUTHORIZED` | Non authentifié |
| 401 | `TOKEN_EXPIRED` | Token expiré |
| 403 | `FORBIDDEN` | Accès interdit |
| 404 | `NOT_FOUND` | Ressource non trouvée |
| 409 | `CONFLICT` | Conflit (doublon) |
| 429 | `RATE_LIMITED` | Trop de requêtes |
| 500 | `INTERNAL_ERROR` | Erreur serveur |

### 5.3 Endpoints Authentification

#### POST `/api/auth/register`

**Description** : Créer un compte utilisateur

**Body** :
```json
{
  "email": "jean@example.com",
  "phone": "+237699887766",
  "password": "SecurePass123",
  "role": "CLIENT"
}
```

**Validation** :
- `email` : email valide, unique
- `phone` : format +237XXXXXXXXX, unique
- `password` : 8+ caractères, 1 majuscule, 1 minuscule, 1 chiffre
- `role` : "CLIENT" ou "PRO"

**Réponse 201** :
```json
{
  "success": true,
  "data": {
    "userId": "uuid",
    "requiresVerification": true
  }
}
```

**Erreurs possibles** : `VALIDATION_ERROR`, `CONFLICT` (email/phone existant)

---

#### POST `/api/auth/verify-phone`

**Description** : Vérifier le numéro de téléphone avec OTP

**Body** :
```json
{
  "userId": "uuid",
  "code": "1234"
}
```

**Réponse 200** :
```json
{
  "success": true,
  "data": {
    "accessToken": "jwt_token",
    "refreshToken": "refresh_token",
    "user": {
      "id": "uuid",
      "email": "jean@example.com",
      "phone": "+237699887766",
      "role": "CLIENT"
    }
  }
}
```

---

#### POST `/api/auth/resend-otp`

**Description** : Renvoyer le code OTP

**Body** :
```json
{
  "userId": "uuid"
}
```

**Rate limit** : Max 3 envois par heure

---

#### POST `/api/auth/login`

**Description** : Se connecter

**Body** :
```json
{
  "identifier": "jean@example.com",
  "password": "SecurePass123"
}
```

**Réponse 200** : Même format que verify-phone

---

#### POST `/api/auth/refresh`

**Description** : Rafraîchir le token d'accès

**Body** :
```json
{
  "refreshToken": "refresh_token"
}
```

**Réponse 200** :
```json
{
  "success": true,
  "data": {
    "accessToken": "new_jwt_token",
    "refreshToken": "new_refresh_token"
  }
}
```

---

#### POST `/api/auth/logout`

**Description** : Se déconnecter

**Headers** : `Authorization: Bearer <token>`

**Body** :
```json
{
  "refreshToken": "refresh_token"
}
```

**Réponse 200** :
```json
{
  "success": true,
  "data": { "message": "Déconnecté avec succès" }
}
```

---

#### POST `/api/auth/forgot-password`

**Description** : Demander réinitialisation mot de passe

**Body** :
```json
{
  "identifier": "jean@example.com"
}
```

**Réponse 200** : Message générique (ne pas révéler si l'email existe)

---

#### POST `/api/auth/reset-password`

**Description** : Réinitialiser le mot de passe

**Body** :
```json
{
  "token": "reset_token",
  "newPassword": "NouveauPass123"
}
```

---

### 5.4 Endpoints Profils

#### GET `/api/profiles/me`

**Description** : Récupérer son profil

**Auth** : Requise

**Réponse 200** :
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "type": "PRO",
    "firstName": "Jean",
    "lastName": "Kouam",
    "displayName": "Jean Kouam",
    "avatarUrl": "https://...",
    "coverUrl": "https://...",
    "bio": "Plombier passionné avec 8 ans d'expérience...",
    "city": "Douala",
    "district": "Akwa",
    "serviceRadiusKm": 15,
    "proDetails": {
      "categoryId": "uuid",
      "subcategories": ["Fuite d'eau", "Installation sanitaire"],
      "expertiseLevel": "EXPERT",
      "priceMin": 15000,
      "priceMax": 50000,
      "pricingType": "HOURLY",
      "freeQuote": true,
      "yearsExperience": 8,
      "proScore": 87.5,
      "totalReviews": 127,
      "averageRating": 4.8,
      "isAvailable": true,
      "nextAvailableDate": "2026-06-02"
    }
  }
}
```

---

#### PUT `/api/profiles/me`

**Description** : Modifier son profil

**Auth** : Requise

**Body** (partiel, uniquement champs à modifier) :
```json
{
  "firstName": "Jean",
  "lastName": "Kouam",
  "bio": "Nouvelle bio...",
  "city": "Douala",
  "district": "Bonanjo"
}
```

---

#### POST `/api/profiles/avatar`

**Description** : Upload photo de profil

**Auth** : Requise

**Content-Type** : `multipart/form-data`

**Body** :
- `file` : Image (JPG/PNG, max 5 Mo)

**Réponse 200** :
```json
{
  "success": true,
  "data": {
    "avatarUrl": "https://cdn.servicespro.cm/avatars/uuid.jpg"
  }
}
```

---

#### GET `/api/profiles/:id`

**Description** : Profil public d'un pro

**Auth** : Optionnelle (données complètes si auth, limitées si non)

**Réponse 200** :
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "displayName": "Jean Kouam",
    "avatarUrl": "https://...",
    "coverUrl": "https://...",
    "bio": "...",
    "city": "Douala",
    "category": {
      "id": "uuid",
      "name": "Plomberie",
      "icon": "Droplet"
    },
    "subcategories": ["Fuite d'eau", "Installation sanitaire"],
    "expertiseLevel": "EXPERT",
    "yearsExperience": 8,
    "priceRange": { "min": 15000, "max": 50000, "type": "HOURLY" },
    "freeQuote": true,
    "proScore": 87.5,
    "totalReviews": 127,
    "averageRating": 4.8,
    "isAvailable": true,
    "nextAvailableDate": "2026-06-02",
    "badges": [
      { "slug": "verified", "name": "Vérifié", "icon": "ShieldCheck", "color": "#10B981" },
      { "slug": "expert", "name": "Expert", "icon": "Star", "color": "#C0C0C0" }
    ],
    "portfolio": [
      { "id": "uuid", "imageUrl": "https://...", "caption": "Installation salle de bain" }
    ]
  }
}
```

---

### 5.5 Endpoints Professionnels

#### GET `/api/pros`

**Description** : Liste des professionnels

**Query Parameters** :
| Paramètre | Type | Description |
|-----------|------|-------------|
| `category` | string | ID ou slug de catégorie |
| `city` | string | Nom de ville |
| `minScore` | number | Score minimum (0-100) |
| `available` | boolean | Disponible maintenant |
| `urgent` | boolean | Accepte urgences |
| `verified` | boolean | Uniquement vérifiés |
| `q` | string | Recherche textuelle |
| `sort` | string | `score`, `rating`, `reviews`, `price_asc`, `price_desc`, `distance` |
| `page` | number | Page (défaut: 1) |
| `limit` | number | Résultats par page (défaut: 12, max: 50) |

**Réponse 200** :
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "displayName": "Jean Kouam",
      "avatarUrl": "https://...",
      "category": "Plomberie",
      "city": "Douala",
      "proScore": 87.5,
      "averageRating": 4.8,
      "totalReviews": 127,
      "priceMin": 15000,
      "priceMax": 50000,
      "isAvailable": true,
      "nextAvailableDate": "2026-06-02",
      "badges": ["verified", "expert"]
    }
  ],
  "meta": {
    "page": 1,
    "limit": 12,
    "total": 234,
    "totalPages": 20
  }
}
```

---

#### GET `/api/pros/search`

**Description** : Recherche full-text

**Query** : `?q=plombier+douala`

**Réponse** : Même format que `/api/pros`

**Technique** : Requête Elasticsearch avec fuzziness, boost sur nom, catégorie, ville

---

#### PUT `/api/pros/me`

**Description** : Modifier les détails pro

**Auth** : Requise (rôle PRO)

**Body** :
```json
{
  "categoryId": "uuid",
  "subcategories": ["Fuite d'eau", "Débouchage"],
  "expertiseLevel": "EXPERT",
  "priceMin": 15000,
  "priceMax": 50000,
  "pricingType": "HOURLY",
  "freeQuote": true,
  "yearsExperience": 8,
  "serviceRadiusKm": 15
}
```

---

#### PUT `/api/pros/me/availability`

**Description** : Modifier les disponibilités

**Auth** : Requise (rôle PRO)

**Body** :
```json
{
  "slots": [
    {
      "dayOfWeek": 1,
      "startTime": "08:00",
      "endTime": "18:00",
      "isRecurring": true
    }
  ],
  "blockedDates": ["2026-06-15", "2026-06-16"],
  "isAvailable": true,
  "isUrgentAvailable": false
}
```

---

#### GET `/api/pros/me/dashboard`

**Description** : Tableau de bord pro

**Auth** : Requise (rôle PRO)

**Réponse 200** :
```json
{
  "success": true,
  "data": {
    "score": {
      "current": 87.5,
      "variation": 3.2,
      "period": "week"
    },
    "ranking": {
      "current": 12,
      "total": 340,
      "category": "Plomberie",
      "city": "Douala",
      "trend": "up",
      "variation": 3
    },
    "views": {
      "total": 456,
      "period": "month",
      "chart": [12, 15, 18, 22, 20, 25, 30, 28, 35, 40, 45, 50, 48, 42]
    },
    "requests": {
      "new": 3,
      "pending": 1,
      "accepted": 8,
      "declined": 2
    },
    "missions": {
      "thisMonth": 12,
      "lastMonth": 15,
      "completionRate": 92
    },
    "latestReviews": [
      {
        "id": "uuid",
        "overallRating": 5.0,
        "comment": "Excellent travail...",
        "clientName": "Marie D.",
        "createdAt": "2026-05-28T14:30:00Z"
      }
    ]
  }
}
```

---

### 5.6 Endpoints Catégories

#### GET `/api/categories`

**Description** : Liste des catégories

**Réponse 200** :
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "slug": "plomberie",
      "name": "Plomberie",
      "icon": "Droplet",
      "proCount": 234
    }
  ]
}
```

---

#### GET `/api/categories/:id/subcategories`

**Description** : Sous-catégories

**Réponse 200** :
```json
{
  "success": true,
  "data": [
    { "id": "uuid", "name": "Fuite d'eau", "slug": "fuite-eau" },
    { "id": "uuid", "name": "Installation sanitaire", "slug": "installation-sanitaire" }
  ]
}
```

---

### 5.7 Endpoints Missions

#### POST `/api/missions`

**Description** : Créer une mission

**Auth** : Requise (rôle CLIENT)

**Body** :
```json
{
  "proId": "uuid",
  "categoryId": "uuid",
  "title": "Fuite d'eau salle de bain",
  "description": "J'ai une fuite sous l'évier de la salle de bain...",
  "scheduledDate": "2026-06-05T10:00:00Z",
  "address": "Rue des Palmiers, Bonanjo, Douala",
  "priceAgreed": 25000
}
```

---

#### GET `/api/missions`

**Description** : Liste de mes missions

**Auth** : Requise

**Query** : `?status=COMPLETED&page=1&limit=10`

---

#### GET `/api/missions/:id`

**Description** : Détail d'une mission

---

#### PUT `/api/missions/:id/status`

**Description** : Changer le statut

**Auth** : Requise

**Body** :
```json
{
  "status": "ACCEPTED"
}
```

**Permissions** :
- `ACCEPTED` : Seul le pro
- `IN_PROGRESS` : Seul le pro (après ACCEPTED)
- `COMPLETED` : Le pro ou le client (après IN_PROGRESS)
- `CANCELLED` : Les deux parties (avant COMPLETED)

---

### 5.8 Endpoints Avis (REVIEWS) — CRITIQUE

#### POST `/api/reviews`

**Description** : Créer un avis

**Auth** : Requise (rôle CLIENT)

**Body** :
```json
{
  "missionId": "uuid",
  "qualityRating": 5,
  "punctualityRating": 4,
  "communicationRating": 5,
  "valueRating": 4,
  "professionalismRating": 5,
  "comment": "Jean a fait un excellent travail sur ma salle de bain. Il est arrivé à l'heure, a expliqué tout ce qu'il faisait et le résultat est impeccable. Je recommande vivement !",
  "photos": ["base64_or_url", "base64_or_url"],
  "wouldRecommend": true,
  "isAnonymous": false
}
```

**Validation** :
- Mission existe, statut COMPLETED
- Client est le owner de la mission
- Pas d'avis existant pour cette mission
- Commentaire : 30-500 caractères
- Ratings : 1-5 chacun

**Réponse 201** :
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "status": "APPROVED",
    "overallRating": 4.6,
    "proScoreUpdated": {
      "previous": 84.3,
      "current": 87.5,
      "variation": 3.2
    }
  }
}
```

---

#### GET `/api/reviews`

**Description** : Liste des avis

**Query** :
| Paramètre | Type | Description |
|-----------|------|-------------|
| `proId` | string | Avis d'un pro spécifique |
| `clientId` | string | Avis d'un client |
| `status` | string | `APPROVED`, `PENDING`, `FLAGGED` |
| `rating` | number | Filtre par note |
| `sort` | string | `recent`, `rating_desc`, `rating_asc` |
| `page` | number | Pagination |
| `limit` | number | Résultats par page |

---

#### GET `/api/reviews/:id`

**Description** : Détail d'un avis

---

#### POST `/api/reviews/:id/response`

**Description** : Répondre à un avis (PRO uniquement)

**Auth** : Requise (rôle PRO, owner de l'avis)

**Body** :
```json
{
  "response": "Merci beaucoup Marie pour votre confiance ! C'était un plaisir de travailler chez vous. N'hésitez pas pour de futurs projets !"
}
```

**Validation** : Réponse 10-500 caractères, 1 seule réponse par avis

---

#### POST `/api/reviews/:id/report`

**Description** : Signaler un avis

**Auth** : Requise

**Body** :
```json
{
  "reason": "Contenu diffamatoire",
  "details": "Cet avis contient des accusations fausses..."
}
```

---

#### PUT `/api/reviews/:id/moderate`

**Description** : Modérer un avis (ADMIN uniquement)

**Auth** : Requise (rôle ADMIN/MODERATOR)

**Body** :
```json
{
  "status": "APPROVED",
  "note": "Avis légitime, approuvé"
}
```

---

### 5.9 Endpoints Leaderboard

#### GET `/api/leaderboard`

**Description** : Classement

**Query** :
| Paramètre | Type | Description |
|-----------|------|-------------|
| `category` | string | ID ou slug catégorie (optionnel) |
| `city` | string | Ville (optionnel) |
| `period` | string | `2026-06` (défaut: mois en cours) |
| `limit` | number | Nombre de résultats (défaut: 10, max: 100) |

**Réponse 200** :
```json
{
  "success": true,
  "data": {
    "period": "2026-06",
    "category": null,
    "city": null,
    "updatedAt": "2026-06-01T14:00:00Z",
    "rankings": [
      {
        "rank": 1,
        "previousRank": 2,
        "trend": "up",
        "pro": {
          "id": "uuid",
          "displayName": "Jean Kouam",
          "avatarUrl": "https://...",
          "category": "Plomberie",
          "city": "Douala",
          "proScore": 94.2,
          "totalReviews": 156,
          "averageRating": 4.9
        }
      }
    ]
  }
}
```

---

#### GET `/api/leaderboard/podium`

**Description** : Top 3 formaté pour le front

**Query** : Même que `/api/leaderboard`

**Réponse 200** :
```json
{
  "success": true,
  "data": {
    "first": { "rank": 1, "pro": { ... } },
    "second": { "rank": 2, "pro": { ... } },
    "third": { "rank": 3, "pro": { ... } }
  }
}
```

---

### 5.10 Endpoints Messagerie

#### GET `/api/conversations`

**Description** : Mes conversations

**Auth** : Requise

**Réponse 200** :
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "participant": {
        "id": "uuid",
        "displayName": "Jean Kouam",
        "avatarUrl": "https://..."
      },
      "lastMessage": {
        "content": "Bonjour, je suis disponible demain...",
        "createdAt": "2026-05-30T10:30:00Z",
        "isRead": false
      },
      "unreadCount": 2
    }
  ]
}
```

---

#### GET `/api/conversations/:id/messages`

**Description** : Messages d'une conversation

**Query** : `?page=1&limit=50`

**Réponse 200** :
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "senderId": "uuid",
      "content": "Bonjour, êtes-vous disponible pour une fuite d'eau ?",
      "attachments": [],
      "readAt": "2026-05-30T10:35:00Z",
      "createdAt": "2026-05-30T10:30:00Z"
    }
  ]
}
```

---

#### POST `/api/conversations`

**Description** : Démarrer une conversation

**Auth** : Requise

**Body** :
```json
{
  "proId": "uuid"
}
```

---

#### POST `/api/conversations/:id/messages`

**Description** : Envoyer un message

**Auth** : Requise

**Body** :
```json
{
  "content": "Bonjour, je suis disponible demain matin..."
}
```

---

#### PUT `/api/messages/:id/read`

**Description** : Marquer comme lu

**Auth** : Requise

---

### 5.11 Endpoints Notifications

#### GET `/api/notifications`

**Description** : Mes notifications

**Auth** : Requise

**Query** : `?unreadOnly=true&page=1&limit=20`

---

#### PUT `/api/notifications/:id/read`

**Description** : Marquer comme lue

---

#### PUT `/api/notifications/read-all`

**Description** : Tout marquer comme lu

---

#### PUT `/api/notifications/preferences`

**Description** : Modifier préférences

**Body** :
```json
{
  "email": {
    "newContact": true,
    "newReview": true,
    "newMessage": false,
    "newsletter": true
  },
  "push": {
    "newContact": true,
    "newReview": true,
    "newMessage": true,
    "newsletter": false
  },
  "sms": {
    "newContact": false,
    "newReview": false,
    "newMessage": false,
    "security": true
  }
}
```

---

### 5.12 Endpoints Admin

#### GET `/api/admin/dashboard`

**Description** : Stats globales

**Auth** : Requise (ADMIN/MODERATOR)

**Réponse 200** :
```json
{
  "success": true,
  "data": {
    "users": { "total": 4520, "today": 23, "thisMonth": 156 },
    "pros": { "total": 2340, "active": 1890, "pending": 45, "suspended": 12 },
    "missions": { "total": 12500, "thisMonth": 890, "completed": 840, "cancelled": 50 },
    "reviews": { "total": 8900, "thisMonth": 720, "pending": 12, "flagged": 5 },
    "reports": { "open": 8, "underReview": 4, "resolved": 156 }
  }
}
```

---

#### GET `/api/admin/users`

**Description** : Liste utilisateurs

**Auth** : Admin

**Query** : `?role=PRO&status=active&page=1`

---

#### PUT `/api/admin/users/:id/status`

**Description** : Activer/suspendre compte

**Body** :
```json
{
  "isActive": false,
  "reason": "Suspicion de fraude aux avis"
}
```

---

#### GET `/api/admin/pros/pending`

**Description** : Pros en attente de validation

**Auth** : Moderator+

---

#### PUT `/api/admin/pros/:id/verify`

**Description** : Valider/refuser un pro

**Body** :
```json
{
  "status": "VALIDATED",
  "note": "Pièce d'identité vérifiée, tout est conforme"
}
```

---

#### GET `/api/admin/reviews/pending`

**Description** : Avis en attente de modération

---

#### PUT `/api/admin/reviews/:id/moderate`

**Description** : Modérer un avis

---

#### GET `/api/admin/reports`

**Description** : Signalements

---

### 5.13 Upload de Fichiers

#### POST `/api/upload/image`

**Description** : Upload d'une image

**Auth** : Requise

**Content-Type** : `multipart/form-data`

**Body** :
- `file` : Image (JPG, PNG, WebP)
- `folder` : `avatars`, `covers`, `portfolio`, `reviews`

**Validation** :
- Taille max : 5 Mo (avatars), 10 Mo (covers/portfolio)
- Dimensions min : 200×200 (avatars), 800×300 (covers)
- Redimensionnement automatique via Sharp

**Réponse 200** :
```json
{
  "success": true,
  "data": {
    "url": "https://cdn.servicespro.cm/uploads/folder/uuid-800x600.webp",
    "thumbnailUrl": "https://cdn.servicespro.cm/uploads/folder/uuid-200x200.webp",
    "originalName": "photo.jpg",
    "size": 2400000,
    "dimensions": { "width": 800, "height": 600 }
  }
}
```

---

## 6. LOGIQUE MÉTIER (PSEUDO-CODE)

### 6.1 Calcul du Pro Score

```typescript
function calculateProScore(pro: ProDetails): number {
  // Critères de notation (moyenne pondérée)
  const reviews = getApprovedReviews(pro.profileId);
  
  if (reviews.length === 0) return 0;
  
  // 1. Qualité (30%) — moyenne des 5 critères × 16
  const avgQuality = reviews.reduce((sum, r) => {
    const criteriaAvg = (r.qualityRating + r.punctualityRating + 
                        r.communicationRating + r.valueRating + 
                        r.professionalismRating) / 5;
    return sum + criteriaAvg;
  }, 0) / reviews.length;
  const qualityScore = avgQuality * 16; // sur 80
  
  // 2. Fiabilité (10%) — taux de complétion × 0.1
  const missions = getMissions(pro.profileId);
  const completed = missions.filter(m => m.status === 'COMPLETED').length;
  const total = missions.length;
  const completionRate = total > 0 ? (completed / total) * 100 : 100;
  const reliabilityScore = completionRate * 0.1; // sur 10
  
  // 3. Réactivité (10%) — temps de réponse
  const avgResponseTime = pro.responseTimeAvgMinutes;
  let reactivityScore: number;
  if (avgResponseTime <= 30) reactivityScore = 10;
  else if (avgResponseTime <= 60) reactivityScore = 8;
  else if (avgResponseTime <= 120) reactivityScore = 6;
  else if (avgResponseTime <= 240) reactivityScore = 4;
  else reactivityScore = 2;
  
  // 4. Fidélité (10%) — % clients récurrents × 0.1
  const repeatRate = pro.repeatClientRate;
  const loyaltyScore = Number(repeatRate) * 0.1;
  
  // 5. Ancienneté (10%) — +2pts par année, max 10
  const yearsOnPlatform = getYearsSince(pro.createdAt);
  const seniorityScore = Math.min(yearsOnPlatform * 2, 10);
  
  // 6. Bonus vérification (+5 pts)
  const verificationBonus = pro.profile.user.isVerified ? 5 : 0;
  
  // Total (max 100)
  let proScore = qualityScore + reliabilityScore + reactivityScore + 
                 loyaltyScore + seniorityScore + verificationBonus;
  
  return Math.min(100, Math.max(0, proScore));
}
```

### 6.2 Anti-Fraude Notation

```typescript
async function detectReviewFraud(reviewData: CreateReviewDTO, client: User): Promise<FraudResult> {
  const flags: string[] = [];
  
  // 1. Même IP que le pro
  const pro = await getPro(reviewData.proId);
  const proUser = await getUserByProfileId(pro.profileId);
  const lastProLogin = await getLastLoginIp(proUser.id);
  if (reviewData.clientIp && reviewData.clientIp === lastProLogin) {
    flags.push('SAME_IP_AS_PRO');
  }
  
  // 2. Trop rapide (mission créée et notée dans la même heure)
  const mission = await getMission(reviewData.missionId);
  const timeDiff = Date.now() - mission.createdAt.getTime();
  if (timeDiff < 3600000) { // < 1 heure
    flags.push('TOO_FAST');
  }
  
  // 3. Client récent avec note extrême
  const clientAge = Date.now() - client.createdAt.getTime();
  const isNewClient = clientAge < 7 * 24 * 3600000; // < 7 jours
  const isExtremeRating = reviewData.overallRating <= 1 || reviewData.overallRating >= 5;
  if (isNewClient && isExtremeRating) {
    flags.push('NEW_CLIENT_EXTREME_RATING');
  }
  
  // 4. Même téléphone
  if (client.phone === proUser.phone) {
    flags.push('SAME_PHONE');
  }
  
  // 5. Burst de reviews (plusieurs avis identiques sur le même pro en peu de temps)
  const recentReviews = await getRecentReviewsForPro(reviewData.proId, 24); // 24h
  if (recentReviews.length >= 3) {
    flags.push('REVIEW_BURST');
  }
  
  return {
    isSuspicious: flags.length > 0,
    flags,
    recommendedAction: flags.length >= 2 ? 'FLAG_FOR_MODERATION' : 
                       flags.length === 1 ? 'FLAG_FOR_MODERATION' : 'APPROVE'
  };
}
```

### 6.3 Mise à Jour Leaderboard

```typescript
async function updateLeaderboard(period: string): Promise<void> {
  const categories = await prisma.category.findMany({ where: { isActive: true } });
  const cities = await getDistinctProCities();
  
  // Global + par catégorie + par ville + par catégorie×ville
  const combinations = generateCombinations(categories, cities);
  
  for (const combo of combinations) {
    // Récupérer pros actifs (mission dans les 60j)
    const pros = await prisma.proDetails.findMany({
      where: {
        validationStatus: 'VALIDATED',
        isActive: true,
        ...(combo.categoryId && { categoryId: combo.categoryId }),
        ...(combo.city && { profile: { city: combo.city } }),
        profile: {
          proMissions: {
            some: {
              completedDate: { gte: subDays(new Date(), 60) }
            }
          }
        }
      },
      orderBy: { proScore: 'desc' },
      take: 100
    });
    
    // Attribuer rangs
    const rankings = pros.map((pro, index) => ({
      proId: pro.profileId,
      rank: index + 1,
      score: pro.proScore,
      name: pro.profile.displayName,
      avatar: pro.profile.avatarUrl,
      category: pro.category.nameFr,
      city: pro.profile.city,
      reviews: pro.totalReviews,
      rating: pro.averageRating
    }));
    
    // Sauvegarder snapshot
    await prisma.leaderboardSnapshot.upsert({
      where: {
        categoryId_city_periodMonth: {
          categoryId: combo.categoryId,
          city: combo.city,
          periodMonth: period
        }
      },
      update: { rankings, updatedAt: new Date() },
      create: {
        categoryId: combo.categoryId,
        city: combo.city,
        periodMonth: period,
        rankings
      }
    });
  }
  
  // Invalider cache Redis
  await redis.del('leaderboard:*');
  
  // Préchauffer cache
  await warmLeaderboardCache();
}
```

### 6.4 Indexation Elasticsearch

```typescript
async function indexProForSearch(pro: ProDetails): Promise<void> {
  const document = {
    id: pro.profileId,
    name: pro.profile.displayName,
    bio: pro.profile.bio,
    category: pro.category.nameFr,
    categorySlug: pro.category.slug,
    subcategories: pro.subcategories,
    city: pro.profile.city,
    district: pro.profile.district,
    proScore: pro.proScore,
    averageRating: pro.averageRating,
    totalReviews: pro.totalReviews,
    priceMin: pro.priceMin,
    priceMax: pro.priceMax,
    expertiseLevel: pro.expertiseLevel,
    isAvailable: pro.isAvailable,
    badges: pro.profile.userBadges.map(ub => ub.badge.slug),
    location: {
      lat: pro.profile.latitude,
      lon: pro.profile.longitude
    }
  };
  
  await elasticsearch.index({
    index: 'pros',
    id: pro.profileId,
    document
  });
}

async function searchPros(query: string, filters: SearchFilters): Promise<SearchResult[]> {
  const searchBody = {
    query: {
      bool: {
        must: [
          {
            multi_match: {
              query,
              fields: ['name^3', 'category^2', 'bio', 'subcategories', 'city^2'],
              fuzziness: 'AUTO'
            }
          }
        ],
        filter: [
          ...(filters.category ? [{ term: { categorySlug: filters.category } }] : []),
          ...(filters.city ? [{ term: { city: filters.city } }] : []),
          ...(filters.minScore ? [{ range: { proScore: { gte: filters.minScore } } }] : []),
          ...(filters.available ? [{ term: { isAvailable: true } }] : [])
        ]
      }
    },
    sort: [
      { proScore: 'desc' },
      { averageRating: 'desc' }
    ]
  };
  
  const result = await elasticsearch.search({ index: 'pros', body: searchBody });
  return result.hits.hits.map(hit => hit._source);
}
```

---

## 7. SÉCURITÉ

### 7.1 Authentification & Autorisation

```
┌────────────────────────────────────────────────────────────────┐
│                    AUTH FLOW                                   │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  1. Register → Hash password (bcrypt, 12 rounds)               │
│  2. Verify phone → OTP via SMS (Redis TTL 10min)               │
│  3. Login → Verify password → Generate JWT pair                │
│                                                                │
│  JWT Access Token:                                             │
│  - Payload: { userId, role, iat, exp }                         │
│  - TTL: 15 minutes                                             │
│  - Algo: HS256                                                 │
│  - Secret: 256-bit random (env var)                            │
│                                                                │
│  JWT Refresh Token:                                            │
│  - Payload: { userId, sessionId, iat, exp }                    │
│  - TTL: 7 days                                                 │
│  - Stockage: httpOnly cookie + DB (sessions table)             │
│  - Rotation: Nouveau refresh token à chaque refresh            │
│                                                                │
│  4. API calls → Verify JWT (middleware)                        │
│  5. Refresh → Verify refresh token → New pair                  │
│  6. Logout → Revoke refresh token (DB + cookie clear)          │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### 7.2 Middleware de Sécurité

```typescript
// Middleware stack (ordre d'application)
app.use(helmet());                    // Security headers
app.use(cors({                        // CORS
  origin: process.env.CLIENT_URL,
  credentials: true
}));
app.use(rateLimit({                   // Rate limiting global
  windowMs: 1 * 60 * 1000,            // 1 minute
  max: 100,                           // 100 requêtes/minute
  message: { error: { code: 'RATE_LIMITED', message: 'Trop de requêtes' } }
}));
app.use('/api/auth/login', rateLimit({ // Rate limiting spécifique login
  windowMs: 15 * 60 * 1000,
  max: 5,
  skipSuccessfulRequests: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(sanitizeInput());             // XSS prevention
```

### 7.3 Headers de Sécurité (Helmet)

```javascript
{
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "https://cdn.servicespro.cm", "data:"],
      connectSrc: ["'self'", "https://api.servicespro.cm"],
    }
  },
  hsts: { maxAge: 31536000, includeSubDomains: true, preload: true },
  xFrameOptions: 'SAMEORIGIN',
  xContentTypeOptions: 'nosniff',
  referrerPolicy: 'strict-origin-when-cross-origin'
}
```

### 7.4 Gestion des Fichiers Uploadés

```typescript
const uploadConfig = {
  // Validation MIME par magic bytes (pas juste l'extension)
  allowedTypes: ['image/jpeg', 'image/png', 'image/webp'],
  maxSize: 5 * 1024 * 1024, // 5 Mo
  
  // Redimensionnement
  resize: {
    avatar: { width: 400, height: 400, fit: 'cover' },
    cover: { width: 1200, height: 400, fit: 'cover' },
    portfolio: { width: 800, height: 600, fit: 'inside' },
    thumbnail: { width: 200, height: 200, fit: 'cover' }
  },
  
  // Conversion WebP pour optimisation
  outputFormat: 'webp',
  quality: 80,
  
  // Stockage hors répertoire web
  storagePath: '/var/www/uploads',
  
  // Pas d'exécution possible
  serveStatic: true,
  contentDisposition: 'attachment' // Force download
};
```

### 7.5 Audit & Logs de Sécurité

| Événement | Log | Niveau |
|-----------|-----|--------|
| Connexion réussie | userId, IP, userAgent | INFO |
| Connexion échouée | identifier, IP, raison | WARN |
| Inscription | userId, email, IP | INFO |
| OTP vérifié/échoué | phone, attempts | INFO/WARN |
| Nouvel avis | reviewId, clientId, proId, fraud flags | INFO |
| Avis signalé | reviewId, reporterId, reason | WARN |
| Modération | adminId, reviewId, action | INFO |
| Changement permission | adminId, targetUserId, oldRole, newRole | WARN |
| Tentative accès non autorisé | userId, resource, IP | ERROR |
| Rate limit atteint | IP, endpoint | WARN |

---

## 8. PERFORMANCE & OPTIMISATION

### 8.1 Stratégies de Cache

```
┌────────────────────────────────────────────────────────────────┐
│                    CACHE LAYERS                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Layer 1: Browser Cache (Frontend)                             │
│  - Static assets: 1 year (hash in filename)                    │
│  - API responses: TanStack Query cache                         │
│                                                                │
│  Layer 2: Redis Cache (Backend)                                │
│  - Sessions: TTL 7 days                                        │
│  - OTP codes: TTL 10 minutes                                   │
│  - Leaderboard: TTL 1 hour (jusqu'à prochain update)          │
│  - Search results: TTL 15 minutes                              │
│  - Rate limits: TTL 15 minutes                                 │
│  - Pro profiles (public): TTL 5 minutes                        │
│                                                                │
│  Layer 3: PostgreSQL                                           │
│  - Materialized view pour leaderboard                          │
│  - Index composites pour recherches fréquentes                 │
│  - Partitionnement des reviews par date (année)               │
│                                                                │
│  Layer 4: CDN (CloudFlare)                                     │
│  - Static assets                                               │
│  - Images uploadées                                            │
│  - API responses (cacheable, TTL 5min)                         │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### 8.2 Clés Redis

| Clé | Format | TTL | Description |
|-----|--------|-----|-------------|
| `session:{refreshToken}` | Hash | 7 jours | Session utilisateur |
| `otp:{phone}:{purpose}` | String | 10 min | Code OTP |
| `ratelimit:{ip}:{endpoint}` | String | 15 min | Compteur rate limit |
| `leaderboard:global:{period}` | JSON | 1h | Classement global |
| `leaderboard:cat:{id}:{period}` | JSON | 1h | Classement par catégorie |
| `leaderboard:city:{city}:{period}` | JSON | 1h | Classement par ville |
| `search:{hash}` | JSON | 15 min | Résultats de recherche |
| `pro:public:{id}` | JSON | 5 min | Profil public |
| `stats:dashboard` | JSON | 1h | Stats dashboard admin |

### 8.3 Optimisations Base de Données

```sql
-- Materialized view pour le leaderboard (mis à jour toutes les heures)
CREATE MATERIALIZED VIEW leaderboard_current AS
SELECT 
  pd.id as pro_id,
  pd.category_id,
  p.city,
  pd.pro_score,
  pd.total_reviews,
  pd.average_rating,
  RANK() OVER (PARTITION BY pd.category_id ORDER BY pd.pro_score DESC) as category_rank,
  RANK() OVER (ORDER BY pd.pro_score DESC) as global_rank
FROM pro_details pd
JOIN profiles p ON pd.profile_id = p.id
WHERE pd.validation_status = 'VALIDATED';

CREATE INDEX idx_leaderboard_current ON leaderboard_current(pro_score DESC);

-- Rafraîchissement
REFRESH MATERIALIZED VIEW CONCURRENTLY leaderboard_current;
```

### 8.4 Objectifs de Performance

| Métrique | Objectif | Méthode |
|----------|----------|---------|
| First Contentful Paint | < 1.5s | Code splitting, lazy loading, preconnect |
| Largest Contentful Paint | < 2.5s | Optim images, font-display: swap |
| Time to Interactive | < 3.5s | Minimize JS, defer non-critical |
| API response (p50) | < 200ms | Caching, DB indexes, connection pooling |
| API response (p95) | < 500ms | Async processing, DB optimization |
| Search query | < 300ms | Elasticsearch, Redis cache |
| Upload image | < 3s | Sharp optimization, async processing |
| WebSocket latency | < 100ms | Direct connection, minimal payload |

---

## 9. INTÉGRATIONS TIERS

### 9.1 SMS (Twilio / Africa's Talking)

| Cas d'usage | Template | Priorité |
|-------------|----------|----------|
| OTP inscription | "Votre code Services Pro : {code}. Valable 10 minutes." | Haute |
| OTP login | "Code de connexion Services Pro : {code}" | Haute |
| Rappel notation | "Comment s'est passée votre mission avec {proName} ? Notez-la : {link}" | Haute |
| Nouvelle demande | "Nouvelle demande de {clientName}. Répondez vite pour maintenir votre score !" | Normale |
| Validation pro | "Votre profil Services Pro a été validé ! Bienvenue 🎉" | Normale |

**Configuration** :
```typescript
// Fallback: Twilio international, Africa's Talking pour Cameroun
const smsProvider = process.env.SMS_PROVIDER || 'africastalking';

// Rate limiting: max 5 SMS/minute par numéro
// Stockage OTP: Redis avec TTL 10 minutes
// Retry: Max 3 tentatives, backoff exponentiel
```

### 9.2 Email (Nodemailer + SMTP)

| Cas d'usage | Template | Fréquence |
|-------------|----------|-----------|
| Bienvenue | HTML template | Immédiat |
| Reset password | HTML template | À la demande |
| Newsletter hebdo | HTML template | Hebdomadaire |
| Notification avis | HTML template | Immédiat |

**Configuration** :
```typescript
// Providers: SendGrid, Resend, ou SMTP local
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// Templates: Handlebars compilés
// Rate: Max 100 emails/heure (warmup), puis 1000/heure
```

### 9.3 Stockage Fichiers (S3-Compatible)

```typescript
// AWS S3, DigitalOcean Spaces, ou MinIO (self-hosted)
const s3Client = new S3Client({
  endpoint: process.env.S3_ENDPOINT,
  region: process.env.S3_REGION,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_KEY
  }
});

// Buckets:
// - servicespro-uploads/avatars/
// - servicespro-uploads/covers/
// - servicespro-uploads/portfolio/
// - servicespro-uploads/reviews/
// - servicespro-uploads/id-documents/

// Policy: Private buckets, signed URLs avec TTL 1 heure
```

### 9.4 Mobile Money (Phase 2)

```typescript
// Intégration Orange Money / MTN Mobile Money
// API REST des opérateurs
// Webhooks pour confirmation de paiement
// Payouts vers les pros
```

---

## 10. MONITORING & LOGGING

### 10.1 Logging

```typescript
// Winston configuration
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'servicespro-api' },
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

// Log levels:
// ERROR: Erreurs système, exceptions
// WARN:  Événements suspects (fraude, rate limit)
// INFO:  Actions utilisateur normales
// DEBUG: Développement uniquement
```

### 10.2 Health Checks

```typescript
// GET /api/health
{
  "status": "healthy",
  "timestamp": "2026-06-01T12:00:00Z",
  "version": "1.0.0",
  "services": {
    "database": { "status": "up", "latencyMs": 12 },
    "redis": { "status": "up", "latencyMs": 3 },
    "elasticsearch": { "status": "up", "latencyMs": 8 }
  }
}
```

### 10.3 Alertes

| Condition | Seuil | Action |
|-----------|-------|--------|
| API error rate | > 5% sur 5min | PagerDuty alert |
| DB latency | > 500ms p95 | Slack warning |
| Redis down | > 30s | PagerDuty critical |
| Disk usage | > 80% | Slack warning |
| Memory usage | > 85% | Slack warning |
| Failed logins | > 100/min | Security alert |

---

## 11. PLAN DE REPRISE D'ACTIVITÉ

### 11.1 Backup

| Type | Fréquence | Rétention | Méthode |
|------|-----------|-----------|---------|
| PostgreSQL | Quotidien | 30 jours | pg_dump → S3 |
| PostgreSQL | Heure (WAL) | 7 jours | Streaming replication |
| Redis | Quotidien | 7 jours | RDB snapshot → S3 |
| Uploads | Continu | 30 jours | S3 versioning |

### 11.2 Procédure de Restauration

```
RTO (Recovery Time Objective): < 1 heure
RPO (Recovery Point Objective): < 15 minutes

Étapes:
1. Détecter l'incident (monitoring auto)
2. Basculer sur instance secondaire (failover DB)
3. Restaurer dernier backup si nécessaire
4. Vérifier intégrité des données
5. Redémarrer services
6. Notification équipe + utilisateurs
```

---

*Document rédigé le 31 mai 2026 — Version 1.0.0*
*Services Pro — Architecture Technique & API*

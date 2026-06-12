# SERVICES PRO — PLAN DE TESTS

---

## TABLE DES MATIÈRES

1. Stratégie de Test
2. Tests Unitaires
3. Tests d'Intégration
4. Tests End-to-End (E2E)
5. Tests de Performance
6. Tests de Sécurité
7. Tests Utilisateurs (UAT)
8. Tests de Compatibilité
9. Tests d'Accessibilité
10. Tests de Régression
11. Automatisation & CI/CD
12. Gestion des Bugs
13. Checklists de Validation

---

## 1. STRATÉGIE DE TEST

### 1.1 Pyramide de Test

```
                    ▲
                   ╱ ╲
                  ╱   ╲     Tests E2E (10%)
                 ╱  E2E ╲    — Playwright, scénarios complets
                ╱─────────╲
               ╱           ╲
              ╱  Intégration ╲   Tests d'Intégration (20%)
             ╱──────────────────╲  — API tests, DB, services
            ╱                   ╲
           ╱    Unitaires        ╲  Tests Unitaires (70%)
          ╱────────────────────────╲ — Fonctions isolées, logique
```

### 1.2 Environnements

| Environnement | URL | Usage | Données |
|---------------|-----|-------|---------|
| **Local** | `localhost:5173` | Développement | Seed data |
| **Test** | `test.servicespro.cm` | Tests automatisés | Reset quotidien |
| **Staging** | `staging.servicespro.cm` | Validation pré-prod | Snapshot production anonymisé |
| **Production** | `servicespro.cm` | Live | Réelles |

### 1.3 Outils

| Type | Outil | Version | Usage |
|------|-------|---------|-------|
| Unit tests | **Jest** | 29+ | Tests unitaires JS/TS |
| Unit tests (React) | **React Testing Library** | 14+ | Tests composants React |
| API tests | **Supertest** | 6+ | Tests endpoints HTTP |
| E2E tests | **Playwright** | 1.41+ | Tests navigateur automatisés |
| Performance | **Lighthouse CI** | latest | Audit performance |
| Performance API | **k6** | latest | Load testing |
| Sécurité | **OWASP ZAP** | latest | Scan vulnérabilités |
| Accessibilité | **axe-core** | latest | Audit a11y |
| Couverture | **Istanbul/nyc** | latest | Code coverage |
| Mocking | **MSW** | latest | Mock Service Worker |

---

## 2. TESTS UNITAIRES

### 2.1 Tests de la Logique Métier

#### 2.1.1 Calcul du Pro Score

```typescript
// __tests__/proScore.test.ts
describe('calculateProScore', () => {
  it('should return 0 for a pro with no reviews', () => {
    const pro = createMockPro({ totalReviews: 0 });
    expect(calculateProScore(pro)).toBe(0);
  });

  it('should calculate score correctly for a pro with perfect reviews', () => {
    // 5★ on all criteria × 10 reviews
    const pro = createMockPro({
      totalReviews: 10,
      reviews: Array(10).fill({
        qualityRating: 5, punctualityRating: 5,
        communicationRating: 5, valueRating: 5,
        professionalismRating: 5
      }),
      completionRate: 100,
      responseTimeAvgMin: 15,
      repeatClientRate: 80,
      yearsOnPlatform: 3,
      isVerified: true
    });
    
    const score = calculateProScore(pro);
    // Quality: 5.0 × 16 = 80
    // Reliability: 100 × 0.1 = 10
    // Reactivity: avg 15min → 10
    // Loyalty: 80 × 0.1 = 8
    // Seniority: min(3×2, 10) = 6
    // Verification: 5
    // Total = 80 + 10 + 10 + 8 + 6 + 5 = 119 → clamped to 100
    expect(score).toBe(100);
  });

  it('should clamp score between 0 and 100', () => {
    const pro = createMockPro({ /* negative inputs */ });
    expect(calculateProScore(pro)).toBeGreaterThanOrEqual(0);
    expect(calculateProScore(pro)).toBeLessThanOrEqual(100);
  });

  it('should penalize high response time', () => {
    const proFast = createMockPro({ responseTimeAvgMin: 30 });
    const proSlow = createMockPro({ responseTimeAvgMin: 300 });
    expect(calculateProScore(proFast)).toBeGreaterThan(calculateProScore(proSlow));
  });

  it('should add verification bonus only for verified pros', () => {
    const verified = createMockPro({ isVerified: true });
    const unverified = createMockPro({ isVerified: false });
    expect(calculateProScore(verified)).toBe(calculateProScore(unverified) + 5);
  });
});
```

#### 2.1.2 Anti-Fraude Notation

```typescript
// __tests__/fraudDetection.test.ts
describe('detectReviewFraud', () => {
  it('should flag review from same IP as pro', async () => {
    const review = createMockReview({ clientIp: '192.168.1.1' });
    const pro = createMockPro({ lastLoginIp: '192.168.1.1' });
    
    const result = await detectReviewFraud(review, pro);
    expect(result.isSuspicious).toBe(true);
    expect(result.flags).toContain('SAME_IP_AS_PRO');
  });

  it('should flag extremely fast review (< 1h)', async () => {
    const mission = createMockMission({ createdAt: Date.now() - 30 * 60 * 1000 }); // 30min ago
    const review = createMockReview({ missionId: mission.id });
    
    const result = await detectReviewFraud(review);
    expect(result.flags).toContain('TOO_FAST');
  });

  it('should flag new client with extreme rating', async () => {
    const client = createMockClient({ createdAt: subDays(new Date(), 3) });
    const review = createMockReview({ overallRating: 1 });
    
    const result = await detectReviewFraud(review, client);
    expect(result.flags).toContain('NEW_CLIENT_EXTREME_RATING');
  });

  it('should approve legitimate review', async () => {
    const client = createMockClient({ createdAt: subDays(new Date(), 30) });
    const mission = createMockMission({ createdAt: subDays(new Date(), 7) });
    const review = createMockReview({ overallRating: 4, clientIp: '10.0.0.1' });
    
    const result = await detectReviewFraud(review, client);
    expect(result.isSuspicious).toBe(false);
    expect(result.recommendedAction).toBe('APPROVE');
  });

  it('should escalate to moderation for 2+ flags', async () => {
    const review = createMockReview({ 
      clientIp: '192.168.1.1', // same as pro
      overallRating: 1 // extreme
    });
    
    const result = await detectReviewFraud(review);
    expect(result.flags.length).toBeGreaterThanOrEqual(2);
    expect(result.recommendedAction).toBe('FLAG_FOR_MODERATION');
  });
});
```

#### 2.1.3 Validation des Entrées

```typescript
// __tests__/validation.test.ts
describe('Register validation', () => {
  it('should reject invalid email format', () => {
    const result = registerSchema.safeParse({ email: 'invalid' });
    expect(result.success).toBe(false);
    expect(result.error.errors[0].path).toContain('email');
  });

  it('should reject password < 8 characters', () => {
    const result = registerSchema.safeParse({ password: 'short1' });
    expect(result.success).toBe(false);
    expect(result.error.errors[0].message).toMatch(/8/);
  });

  it('should reject password without uppercase', () => {
    const result = registerSchema.safeParse({ password: 'lowercase1' });
    expect(result.success).toBe(false);
  });

  it('should reject password without digit', () => {
    const result = registerSchema.safeParse({ password: 'NoDigitsHere' });
    expect(result.success).toBe(false);
  });

  it('should accept valid phone number format', () => {
    const valid = registerSchema.safeParse({ phone: '+237699887766' });
    expect(valid.success).toBe(true);
  });

  it('should reject invalid phone format', () => {
    const invalid = registerSchema.safeParse({ phone: '12345' });
    expect(invalid.success).toBe(false);
  });
});

describe('Review validation', () => {
  it('should reject comment < 30 characters', () => {
    const result = reviewSchema.safeParse({ comment: 'Trop court' });
    expect(result.success).toBe(false);
  });

  it('should reject comment > 500 characters', () => {
    const result = reviewSchema.safeParse({ comment: 'a'.repeat(501) });
    expect(result.success).toBe(false);
  });

  it('should reject rating outside 1-5 range', () => {
    const result = reviewSchema.safeParse({ qualityRating: 6 });
    expect(result.success).toBe(false);
  });

  it('should accept valid review', () => {
    const result = reviewSchema.safeParse({
      qualityRating: 5,
      punctualityRating: 4,
      communicationRating: 5,
      valueRating: 4,
      professionalismRating: 5,
      comment: 'Un commentaire détaillé de plus de trente caractères.',
      wouldRecommend: true,
      isAnonymous: false
    });
    expect(result.success).toBe(true);
  });
});
```

### 2.2 Tests des Utilitaires

```typescript
// __tests__/utils.test.ts
describe('formatPrice', () => {
  it('should format price in FCFA', () => {
    expect(formatPrice(15000)).toBe('15 000 FCFA');
    expect(formatPrice(50000)).toBe('50 000 FCFA');
  });

  it('should handle zero', () => {
    expect(formatPrice(0)).toBe('0 FCFA');
  });
});

describe('slugify', () => {
  it('should create URL-friendly slug', () => {
    expect(slugify('Jean Kouam')).toBe('jean-kouam');
    expect(slugify('Plombier à Douala')).toBe('plombier-a-douala');
  });
});

describe('timeAgo', () => {
  it('should return relative time', () => {
    expect(timeAgo(subDays(new Date(), 2))).toBe('il y a 2 jours');
    expect(timeAgo(subHours(new Date(), 5))).toBe('il y a 5 heures');
  });
});

describe('debounce', () => {
  it('should delay function execution', (done) => {
    const fn = jest.fn();
    const debounced = debounce(fn, 100);
    
    debounced();
    debounced();
    debounced();
    
    expect(fn).not.toBeCalled();
    
    setTimeout(() => {
      expect(fn).toBeCalledTimes(1);
      done();
    }, 150);
  });
});
```

### 2.3 Objectifs de Couverture

| Module | Couverture cible |
|--------|------------------|
| Auth (validation, JWT) | 95% |
| Pro Score (calcul) | 100% |
| Anti-fraude | 95% |
| Utilities (format, parse) | 90% |
| API validation | 90% |

---

## 3. TESTS D'INTÉGRATION

### 3.1 Tests API

```typescript
// __tests__/api/auth.test.ts
import request from 'supertest';
import { app } from '../../src/app';
import { prisma } from '../../src/lib/prisma';

describe('POST /api/auth/register', () => {
  afterEach(async () => {
    await prisma.user.deleteMany();
  });

  it('should create a new user with valid data', async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .send({
        email: 'test@example.com',
        phone: '+237699887766',
        password: 'SecurePass123',
        role: 'CLIENT'
      });

    expect(response.status).toBe(201);
    expect(response.body.data.requiresVerification).toBe(true);
    expect(response.body.data.userId).toBeDefined();
  });

  it('should return 409 for duplicate email', async () => {
    await createTestUser({ email: 'test@example.com' });
    
    const response = await request(app)
      .post('/api/auth/register')
      .send({
        email: 'test@example.com',
        phone: '+237699887767',
        password: 'SecurePass123',
        role: 'CLIENT'
      });

    expect(response.status).toBe(409);
    expect(response.body.error.code).toBe('CONFLICT');
  });

  it('should return 400 for weak password', async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .send({
        email: 'test@example.com',
        phone: '+237699887766',
        password: 'weak',
        role: 'CLIENT'
      });

    expect(response.status).toBe(400);
  });

  it('should send OTP via SMS', async () => {
    const sendSMSMock = jest.spyOn(smsService, 'send');
    
    await request(app)
      .post('/api/auth/register')
      .send({
        email: 'test@example.com',
        phone: '+237699887766',
        password: 'SecurePass123',
        role: 'CLIENT'
      });

    expect(sendSMSMock).toBeCalled();
    expect(sendSMSMock.mock.calls[0][0]).toMatch(/237699887766/);
  });
});
```

### 3.2 Tests Database

```typescript
// __tests__/database/review.test.ts
describe('Review creation flow', () => {
  it('should prevent duplicate review for same mission', async () => {
    const mission = await createTestMission({ status: 'COMPLETED' });
    await createTestReview({ missionId: mission.id });
    
    const duplicate = await prisma.review.create({
      data: { missionId: mission.id, /* ... */ }
    }).catch(e => e);
    
    expect(duplicate.code).toBe('P2002'); // Unique constraint
  });

  it('should update pro score after review creation', async () => {
    const pro = await createTestPro({ proScore: 50 });
    const mission = await createTestMission({ proId: pro.id, status: 'COMPLETED' });
    
    await createTestReview({
      missionId: mission.id,
      qualityRating: 5, punctualityRating: 5,
      communicationRating: 5, valueRating: 5,
      professionalismRating: 5
    });
    
    const updatedPro = await prisma.proDetails.findUnique({
      where: { profileId: pro.id }
    });
    
    expect(Number(updatedPro.proScore)).toBeGreaterThan(50);
  });

  it('should not allow review for non-completed mission', async () => {
    const mission = await createTestMission({ status: 'PENDING' });
    
    const response = await request(app)
      .post('/api/reviews')
      .set('Authorization', `Bearer ${clientToken}`)
      .send({ missionId: mission.id, /* ... */ });
    
    expect(response.status).toBe(400);
    expect(response.body.error.message).toMatch(/terminée/);
  });
});
```

### 3.3 Tests Services Externes

```typescript
// __tests__/services/sms.test.ts
describe('SMS Service', () => {
  it('should send OTP successfully', async () => {
    const mockSend = jest.fn().mockResolvedValue({ sid: 'SM123' });
    Twilio.mockImplementation(() => ({ messages: { create: mockSend } }));
    
    await smsService.sendOTP('+237699887766', '1234');
    
    expect(mockSend).toBeCalledWith(expect.objectContaining({
      to: '+237699887766',
      body: expect.stringContaining('1234')
    }));
  });

  it('should handle SMS failure gracefully', async () => {
    const mockSend = jest.fn().mockRejectedValue(new Error('Network error'));
    Twilio.mockImplementation(() => ({ messages: { create: mockSend } }));
    
    await expect(smsService.sendOTP('+237699887766', '1234'))
      .rejects.toThrow('Failed to send SMS');
  });
});
```

---

## 4. TESTS END-TO-END (E2E)

### 4.1 Scénarios E2E avec Playwright

#### 4.1.1 Inscription Client Complète

```typescript
// e2e/auth.spec.ts
test('Inscription client complète', async ({ page }) => {
  // 1. Accès page d'accueil
  await page.goto('/');
  await expect(page).toHaveTitle(/Services Pro/);
  
  // 2. Clic sur "S'inscrire"
  await page.click('text=S\'inscrire');
  await expect(page.url()).toContain('/register');
  
  // 3. Remplir formulaire étape 1
  await page.fill('[name="email"]', `test-${Date.now()}@example.com`);
  await page.fill('[name="phone"]', '+237699887766');
  await page.fill('[name="password"]', 'SecurePass123');
  await page.fill('[name="confirmPassword"]', 'SecurePass123');
  await page.check('[name="acceptCGU"]');
  await page.click('button:has-text("Continuer")');
  
  // 4. Vérification téléphone
  await expect(page.locator('text=Code de vérification')).toBeVisible();
  
  // Mock OTP (en test)
  const otpCode = await getMockOTP('+237699887766');
  await page.fill('[name="otp"]', otpCode);
  await page.click('button:has-text("Vérifier")');
  
  // 5. Redirection accueil connecté
  await expect(page.url()).toBe('/');
  await expect(page.locator('text=Mon compte')).toBeVisible();
});
```

#### 4.1.2 Parcours Recherche → Contact

```typescript
// e2e/search.spec.ts
test('Recherche et contact d\'un plombier', async ({ page }) => {
  // Seed: Créer un pro plombier à Douala
  const pro = await seed.createPro({
    category: 'Plomberie',
    city: 'Douala',
    displayName: 'Martin le Plombier'
  });
  
  // 1. Recherche
  await page.goto('/');
  await page.fill('[placeholder*="pro"]', 'plombier douala');
  await page.click('button:has-text("Rechercher")');
  
  // 2. Résultats
  await expect(page.url()).toContain('/search');
  await expect(page.locator('text=Martin le Plombier')).toBeVisible();
  await expect(page.locator('text=Plomberie')).toBeVisible();
  
  // 3. Filtres
  await page.click('text=Filtres');
  await page.selectOption('[name="category"]', 'Plomberie');
  await page.click('text=Appliquer');
  
  // 4. Voir profil
  await page.click('text=Martin le Plombier');
  await expect(page.url()).toContain('/pro/');
  
  // 5. Vérifier éléments du profil
  await expect(page.locator('text=À propos')).toBeVisible();
  await expect(page.locator('text=Avis')).toBeVisible();
  await expect(page.locator('text=Contacter')).toBeVisible();
  
  // 6. Contacter
  await page.click('text=Contacter');
  await expect(page.locator('textarea')).toBeVisible();
  
  await page.fill('textarea', 'Bonjour, j\'ai une fuite dans ma salle de bain. Êtes-vous disponible cette semaine ?');
  await page.click('button:has-text("Envoyer")');
  
  // 7. Confirmation
  await expect(page.locator('text=Message envoyé')).toBeVisible();
});
```

#### 4.1.3 Déposer un Avis

```typescript
// e2e/review.spec.ts
test('Déposer un avis après mission', async ({ page }) => {
  // Seed: Mission terminée
  const { client, pro, mission } = await seed.createCompletedMission();
  
  // Login as client
  await page.goto('/login');
  await page.fill('[name="identifier"]', client.email);
  await page.fill('[name="password"]', 'password123');
  await page.click('button:has-text("Se connecter")');
  
  // 1. Aller sur la mission
  await page.goto('/missions');
  await page.click('text=Noter');
  
  // 2. Formulaire de notation
  await expect(page.url()).toContain('/review');
  
  // 3. Noter les 5 critères (4-5 étoiles)
  await page.locator('[data-criterion="quality"] .star').nth(4).click();
  await page.locator('[data-criterion="punctuality"] .star').nth(3).click();
  await page.locator('[data-criterion="communication"] .star').nth(4).click();
  await page.locator('[data-criterion="value"] .star').nth(3).click();
  await page.locator('[data-criterion="professionalism"] .star').nth(4).click();
  
  // 4. Commentaire
  await page.fill('textarea', 'Très bon travail de Martin. Il est arrivé à l\'heure, a expliqué le problème clairement et a réparé la fuite rapidement. Je recommande !');
  
  // 5. Recommandation
  await page.click('text=Oui');
  
  // 6. Soumettre
  await page.click('button:has-text("Soumettre")');
  
  // 7. Confirmation
  await expect(page.locator('text=avis a été publié')).toBeVisible();
  
  // 8. Vérifier sur le profil du pro
  await page.goto(`/pro/${pro.slug}`);
  await page.click('text=Avis');
  await expect(page.locator('text=Très bon travail')).toBeVisible();
  await expect(page.locator('text=4.6')).toBeVisible(); // Average
});
```

#### 4.1.4 Navigation Podium & Leaderboard

```typescript
// e2e/leaderboard.spec.ts
test('Navigation podium et leaderboard', async ({ page }) => {
  // Seed: Plusieurs pros avec scores
  await seed.createProsWithScores([
    { name: 'Pro A', score: 95, category: 'Plomberie' },
    { name: 'Pro B', score: 88, category: 'Plomberie' },
    { name: 'Pro C', score: 82, category: 'Électricité' }
  ]);
  
  await page.goto('/');
  
  // 1. Podium visible
  await expect(page.locator('text=Les meilleurs pros du mois')).toBeVisible();
  await expect(page.locator('.podium-card').nth(0)).toBeVisible(); // #1
  await expect(page.locator('.podium-card').nth(1)).toBeVisible(); // #2
  await expect(page.locator('.podium-card').nth(2)).toBeVisible(); // #3
  
  // 2. Filtrer par catégorie
  await page.click('text=Plomberie');
  await expect(page.locator('text=Pro A')).toBeVisible();
  await expect(page.locator('text=Pro C')).not.toBeVisible();
  
  // 3. Liste 4-10
  await expect(page.locator('.leaderboard-list tr').count()).toBeGreaterThan(0);
  
  // 4. Clic sur un pro du podium → profil
  await page.locator('.podium-card').first().click();
  await expect(page.url()).toContain('/pro/');
});
```

### 4.2 Cas Limites E2E

```typescript
test('Recherche sans résultats', async ({ page }) => {
  await page.goto('/search?q=metierinexistant villeinexistante');
  await expect(page.locator('text=Aucun pro trouvé')).toBeVisible();
  await expect(page.locator('img[alt="Aucun résultat"]')).toBeVisible();
});

test('Accès profil pro sans connexion', async ({ page }) => {
  await page.goto('/pro/jean-kouam-plombier-douala');
  await expect(page.locator('text=Contacter')).toBeVisible();
  // Pas de bouton "Noter" car pas connecté
  await expect(page.locator('text=Noter')).not.toBeVisible();
});

test('Double soumission formulaire', async ({ page }) => {
  await page.goto('/login');
  await page.fill('[name="identifier"]', 'test@example.com');
  await page.fill('[name="password"]', 'password');
  
  // Double clic rapide
  await page.click('button:has-text("Se connecter")');
  await page.click('button:has-text("Se connecter")');
  
  // Pas d'erreur, une seule requête
  await expect(page.locator('text=Erreur')).not.toBeVisible();
});

test('Responsive mobile', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/');
  
  // Menu hamburger visible
  await expect(page.locator('[aria-label="Menu"]')).toBeVisible();
  
  // Navigation masquée
  await expect(page.locator('text=Explorer')).not.toBeVisible();
  
  // Clic hamburger
  await page.click('[aria-label="Menu"]');
  await expect(page.locator('text=Explorer')).toBeVisible();
});
```

---

## 5. TESTS DE PERFORMANCE

### 5.1 Lighthouse CI

```json
// lighthouserc.js
module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:5173/',
        'http://localhost:5173/search?q=plombier',
        'http://localhost:5173/pro/jean-kouam'
      ],
      numberOfRuns: 3
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.85 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
        'first-contentful-paint': ['error', { maxNumericValue: 1500 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['error', { maxNumericValue: 200 }],
        'interactive': ['error', { maxNumericValue: 3500 }]
      }
    }
  }
};
```

### 5.2 Load Testing (k6)

```javascript
// load-tests/homepage.js
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '2m', target: 100 },    // Ramp up
    { duration: '5m', target: 100 },    // Steady state
    { duration: '2m', target: 200 },    // Spike
    { duration: '5m', target: 200 },    // Sustained
    { duration: '2m', target: 0 },      // Ramp down
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'],   // 95% < 500ms
    http_req_failed: ['rate<0.01'],     // < 1% errors
  },
};

export default function () {
  const responses = http.batch([
    ['GET', 'https://servicespro.cm/'],
    ['GET', 'https://servicespro.cm/api/leaderboard/podium'],
    ['GET', 'https://servicespro.cm/api/categories'],
  ]);
  
  check(responses[0], {
    'homepage status 200': (r) => r.status === 200,
    'homepage < 500ms': (r) => r.timings.duration < 500,
  });
  
  sleep(1);
}
```

### 5.3 Stress Testing

```javascript
// load-tests/stress.js
export const options = {
  stages: [
    { duration: '5m', target: 500 },    // Ramp to 500 users
    { duration: '10m', target: 500 },   // Hold
    { duration: '5m', target: 1000 },   // Spike to 1000
    { duration: '10m', target: 1000 },  // Hold
    { duration: '5m', target: 0 },      // Ramp down
  ],
};
```

### 5.4 Tests de Performance Base de Données

```sql
-- Explain analyze pour les requêtes critiques
EXPLAIN ANALYZE
SELECT p.*, pd.pro_score, pd.total_reviews
FROM profiles p
JOIN pro_details pd ON p.id = pd.profile_id
WHERE pd.validation_status = 'VALIDATED'
  AND p.city = 'Douala'
  AND pd.category_id = 'uuid'
ORDER BY pd.pro_score DESC
LIMIT 12 OFFSET 0;

-- Doit utiliser l'index composite
-- Temps cible: < 10ms
```

---

## 6. TESTS DE SÉCURITÉ

### 6.1 OWASP ZAP Scan

```bash
# Démarrer ZAP en mode headless
docker run -t owasp/zap2docker-stable zap-baseline.py \
  -t https://staging.servicespro.cm \
  -r zap-report.html \
  -w zap-warnings.md

# Vérifications:
# - XSS reflected/stored
# - SQL injection
# - CSRF tokens
# - Security headers
# - Information disclosure
# - Broken authentication
```

### 6.2 Tests d'Injection

```typescript
// security/injection.test.ts
describe('Security - Injection prevention', () => {
  it('should prevent SQL injection in search', async () => {
    const malicious = "'; DROP TABLE users; --";
    const response = await request(app)
      .get(`/api/pros/search?q=${encodeURIComponent(malicious)}`);
    
    expect(response.status).not.toBe(500);
    expect(response.body.data).toEqual([]);
  });

  it('should prevent XSS in profile bio', async () => {
    const xss = '<script>alert("xss")</script>';
    const response = await request(app)
      .put('/api/profiles/me')
      .set('Authorization', `Bearer ${token}`)
      .send({ bio: xss });
    
    expect(response.body.data.bio).not.toContain('<script>');
    expect(response.body.data.bio).toContain('&lt;script&gt;');
  });

  it('should prevent NoSQL injection', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        identifier: { $ne: null },
        password: { $ne: null }
      });
    
    expect(response.status).toBe(400);
  });
});
```

### 6.3 Tests d'Authentification

```typescript
// security/auth.test.ts
describe('Security - Authentication', () => {
  it('should reject expired JWT', async () => {
    const expiredToken = jwt.sign({ userId: 'test' }, secret, { expiresIn: '-1h' });
    const response = await request(app)
      .get('/api/profiles/me')
      .set('Authorization', `Bearer ${expiredToken}`);
    
    expect(response.status).toBe(401);
  });

  it('should reject tampered JWT', async () => {
    const tamperedToken = validToken.slice(0, -5) + 'xxxxx';
    const response = await request(app)
      .get('/api/profiles/me')
      .set('Authorization', `Bearer ${tamperedToken}`);
    
    expect(response.status).toBe(401);
  });

  it('should enforce rate limiting on login', async () => {
    // 6 tentatives rapides
    for (let i = 0; i < 6; i++) {
      await request(app)
        .post('/api/auth/login')
        .send({ identifier: 'test', password: 'wrong' });
    }
    
    const response = await request(app)
      .post('/api/auth/login')
      .send({ identifier: 'test', password: 'wrong' });
    
    expect(response.status).toBe(429);
  });

  it('should not leak user existence', async () => {
    const validUser = await request(app)
      .post('/api/auth/login')
      .send({ identifier: 'exists@example.com', password: 'wrong' });
    
    const invalidUser = await request(app)
      .post('/api/auth/login')
      .send({ identifier: 'notexists@example.com', password: 'wrong' });
    
    expect(validUser.body.error.message).toBe(invalidUser.body.error.message);
  });

  it('should require auth for protected routes', async () => {
    const routes = [
      '/api/profiles/me',
      '/api/pros/me/dashboard',
      '/api/reviews',
      '/api/conversations'
    ];
    
    for (const route of routes) {
      const res = await request(app).get(route);
      expect(res.status).toBe(401);
    }
  });
});
```

### 6.4 Tests d'Autorisation

```typescript
// security/authorization.test.ts
describe('Security - Authorization', () => {
  it('should prevent pro from accessing admin routes', async () => {
    const proToken = await getProToken();
    
    const response = await request(app)
      .get('/api/admin/dashboard')
      .set('Authorization', `Bearer ${proToken}`);
    
    expect(response.status).toBe(403);
  });

  it('should prevent client from responding to review', async () => {
    const clientToken = await getClientToken();
    const review = await createTestReview();
    
    const response = await request(app)
      .post(`/api/reviews/${review.id}/response`)
      .set('Authorization', `Bearer ${clientToken}`)
      .send({ response: 'Test' });
    
    expect(response.status).toBe(403);
  });

  it('should prevent pro from modifying own reviews', async () => {
    const proToken = await getProToken();
    const review = await createTestReview({ proId: pro.id });
    
    const response = await request(app)
      .put(`/api/reviews/${review.id}`)
      .set('Authorization', `Bearer ${proToken}`)
      .send({ comment: 'Modified' });
    
    expect(response.status).toBe(403);
  });

  it('should prevent access to other user conversations', async () => {
    const token1 = await getUserToken('user1');
    const conv = await createTestConversation('user2', 'pro1');
    
    const response = await request(app)
      .get(`/api/conversations/${conv.id}/messages`)
      .set('Authorization', `Bearer ${token1}`);
    
    expect(response.status).toBe(403);
  });
});
```

### 6.5 Tests d'Upload

```typescript
// security/upload.test.ts
describe('Security - File upload', () => {
  it('should reject non-image files', async () => {
    const response = await request(app)
      .post('/api/upload/image')
      .set('Authorization', `Bearer ${token}`)
      .attach('file', Buffer.from('not an image'), 'file.exe');
    
    expect(response.status).toBe(400);
  });

  it('should reject oversized files', async () => {
    const bigFile = Buffer.alloc(6 * 1024 * 1024); // 6MB
    const response = await request(app)
      .post('/api/upload/image')
      .set('Authorization', `Bearer ${token}`)
      .attach('file', bigFile, 'big.jpg');
    
    expect(response.status).toBe(413);
  });

  it('should strip EXIF data from images', async () => {
    const imageWithGPS = createImageWithGPS();
    const response = await request(app)
      .post('/api/upload/image')
      .set('Authorization', `Bearer ${token}`)
      .attach('file', imageWithGPS, 'gps.jpg');
    
    const uploaded = await sharp(response.body.data.url).metadata();
    expect(uploaded.gps).toBeUndefined();
  });
});
```

---

## 7. TESTS UTILISATEURS (UAT)

### 7.1 Plan de Recrutement

| Profil | Nombre | Ville | Critères |
|--------|--------|-------|----------|
| Clients (particuliers) | 10 | Douala (6), Yaoundé (4) | 18-55 ans, ont déjà fait appel à un pro |
| Professionnels | 8 | Douala (5), Yaoundé (3) | 2+ ans d'expérience, smartphone |
| Novices (jamais utilisé de marketplace) | 5 | Douala | 20-40 ans, smartphone |

### 7.2 Scénarios de Test Utilisateur

#### Scénario 1 : Première recherche (5 min)

**Consigne** : "Vous avez une fuite d'eau dans votre cuisine à Douala. Trouvez un plombier disponible cette semaine et contactez-le."

**Observations** :
- [ ] Temps pour trouver la barre de recherche
- [ ] Compréhension de l'autocomplete
- [ ] Facilité d'application des filtres
- [ ] Temps de choix d'un pro
- [ ] Clic sur "Contacter" compris
- [ ] Formulaire de contact rempli sans aide

**Succès** : Tâche accomplie en < 2 minutes sans aide

---

#### Scénario 2 : Notation d'un pro (5 min)

**Consigne** : "Un plombier est venu chez vous hier et a fait un excellent travail. Retrouvez la mission et laissez-lui un avis détaillé."

**Observations** :
- [ ] Trouve facilement la section "Mes missions"
- [ ] Identifie la mission à noter
- [ ] Comprend les 5 critères de notation
- [ ] Interaction avec les étoiles fluide
- [ ] Commentaire rédigé (min 30 caractères)
- [ ] Option anonyme comprise
- [ ] Soumission sans erreur

**Succès** : Avis déposé avec les 5 critères et un commentaire

---

#### Scénario 3 : Création profil pro (10 min)

**Consigne** : "Vous êtes électricien à Douala. Créez votre profil professionnel pour recevoir des clients."

**Observations** :
- [ ] Formulaire d'inscription complété
- [ ] Upload photo de profil réussi
- [ ] Upload pièce d'identité réussi
- [ ] Catégorie et sous-catégories sélectionnées
- [ ] Tarifs renseignés
- [ ] Disponibilités configurées
- [ ] Message de confirmation de soumission compris

**Succès** : Profil soumis, message de confirmation reçu

---

#### Scénario 4 : Répondre à un avis (3 min)

**Consigne** : "Vous avez reçu un nouvel avis de la part d'un client. Lisez-le et répondez de manière professionnelle."

**Observations** :
- [ ] Notification perçue
- [ ] Avis lu en entier
- [ ] Bouton "Répondre" trouvé
- [ ] Réponse rédigée
- [ ] Réponse publiée

**Succès** : Réponse publiée sous l'avis

---

#### Scénario 5 : Explorer le leaderboard (3 min)

**Consigne** : "Découvrez qui sont les meilleurs plombiers de Douala ce mois-ci."

**Observations** :
- [ ] Section "Top Pros" trouvée
- [ ] Podium compris (Or/Argent/Bronze)
- [ ] Filtrage par catégorie utilisé
- [ ] Filtrage par ville utilisé
- [ ] Clic sur un pro du podium

**Succès** : Trouve et consulte le classement des plombiers de Douala

### 7.3 Grille d'Évaluation

| Critère | Échelle |
|---------|---------|
| Facilité d'utilisation | 1-5 (très difficile → très facile) |
| Temps de complétion | En secondes |
| Erreurs commises | Nombre |
| Aide demandée | Oui/Non |
| Satisfaction perçue | 😠 😞 😐 🙂 😃 |

### 7.4 Questionnaire Post-Test

```
1. Quel est votre impression globale de Services Pro ? (1-10)
2. Recommanderiez-vous Services Pro à un ami ? (NPS 0-10)
3. Quelle fonctionnalité avez-vous trouvée la plus utile ? (Open)
4. Quelle a été la partie la plus difficile ? (Open)
5. Qu'aimeriez-vous voir amélioré ? (Open)
6. Le système de notation est-il clair ? (Oui/Non/Partiellement)
7. Le leaderboard est-il motivant ? (Oui/Non/Neutre)
```

---

## 8. TESTS DE COMPATIBILITÉ

### 8.1 Matrice de Compatibilité

| Navigateur | Windows | macOS | Android | iOS |
|------------|---------|-------|---------|-----|
| Chrome 120+ | ✅ Test | ✅ Test | ✅ Test | N/A |
| Firefox 121+ | ✅ Test | ✅ Test | N/A | N/A |
| Safari 17+ | N/A | ✅ Test | N/A | ✅ Test |
| Edge 120+ | ✅ Test | ✅ Test | N/A | N/A |
| Samsung Internet | N/A | N/A | ✅ Test | N/A |

### 8.2 Matrice Mobile

| Appareil | Résolution | OS | Test |
|----------|-----------|-----|------|
| iPhone SE | 375×667 | iOS 17 | ✅ |
| iPhone 14 | 390×844 | iOS 17 | ✅ |
| iPhone 14 Pro Max | 430×932 | iOS 17 | ✅ |
| Samsung Galaxy S23 | 360×780 | Android 14 | ✅ |
| Xiaomi Redmi Note 12 | 393×873 | Android 13 | ✅ |
| Tecno Spark 20 | 360×800 | Android 13 | ✅ |

### 8.3 Tests Spécifiques Mobile

- [ ] Touch targets ≥ 44×44px
- [ ] Pas de hover states bloquants
- [ ] Scroll fluide (momentum)
- [ ] Input zoom prevention (font-size ≥ 16px)
- [ ] Safe area insets (iPhone notch)
- [ ] Offline mode (PWA cache)
- [ ] Battery drain raisonnable
- [ ] Pas de memory leak

---

## 9. TESTS D'ACCESSIBILITÉ

### 9.1 Audit Automatique (axe-core)

```typescript
// a11y/axe.test.ts
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('Homepage accessibility', async ({ page }) => {
  await page.goto('/');
  
  const accessibilityScanResults = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
    .analyze();
  
  expect(accessibilityScanResults.violations).toEqual([]);
});

test('Search page accessibility', async ({ page }) => {
  await page.goto('/search?q=plombier');
  
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations.length).toBeLessThan(3); // Allow minor issues
});
```

### 9.2 Checklist Manuelle WCAG 2.1 AA

| Critère | Test | Statut |
|---------|------|--------|
| **1.1.1** Images non textuelles | Toutes les images ont un alt | ⬜ |
| **1.2.1** Contenu audio/vidéo | Transcription disponible | ⬜ |
| **1.3.1** Structure sémantique | Headings hiérarchiques | ⬜ |
| **1.4.1** Ne pas dépendre de la couleur | Icônes + texte | ⬜ |
| **1.4.3** Contraste minimum | Ratio ≥ 4.5:1 | ⬜ |
| **1.4.4** Texte redimensionnable | Zoom 200% OK | ⬜ |
| **1.4.10** Reflow | Pas de scroll horizontal à 320px | ⬜ |
| **1.4.11** Contraste non-texte | Ratio ≥ 3:1 pour UI | ⬜ |
| **2.1.1** Clavier | Tout est navigable au clavier | ⬜ |
| **2.1.2** Pas de piège clavier | Focus peut sortir de tout | ⬜ |
| **2.4.3** Ordre de focus | Logique et visible | ⬜ |
| **2.4.4** But des liens | Texte descriptif | ⬜ |
| **2.4.7** Focus visible | Outline clair | ⬜ |
| **2.5.1** Gestures | Pas de gestures complexes obligatoires | ⬜ |
| **2.5.2** Annulation | Clic peut être annulé | ⬜ |
| **2.5.3** Étiquette dans le nom | aria-label inclut le texte visible | ⬜ |
| **3.1.1** Langue de la page | `<html lang="fr">` | ⬜ |
| **3.2.1** Focus | Pas de changement de contexte au focus | ⬜ |
| **3.2.2** Input | Pas de changement de contexte à l'input | ⬜ |
| **3.3.1** Erreurs identification | Messages d'erreur clairs | ⬜ |
| **3.3.2** Étiquettes | Labels associés aux inputs | ⬜ |
| **4.1.1** Parsing | HTML valide | ⬜ |
| **4.1.2** Nom, rôle, valeur | ARIA correct | ⬜ |
| **4.1.3** Messages statut | Alert/aria-live pour les toasts | ⬜ |

### 9.3 Tests avec Lecteur d'Écran

```
Appareils: VoiceOver (macOS/iOS), TalkBack (Android), NVDA (Windows)

Scénarios:
1. Inscription complète avec lecteur d'écran
2. Recherche et contact d'un pro
3. Dépôt d'un avis
4. Navigation du leaderboard

Vérifications:
- Tous les éléments interactifs sont annoncés
- Les états (chargement, succès, erreur) sont communiqués
- Les headings structurent la navigation
- Les tableaux de données sont correctement lus
- Les alerts/toasts sont annoncés (aria-live)
```

---

## 10. TESTS DE RÉGRESSION

### 10.1 Suite de Régression

À exécuter avant chaque déploiement en production :

```
RÉGRESSION — Pré-déploiement
├── Auth
│   ├── ✅ Inscription client
│   ├── ✅ Inscription pro
│   ├── ✅ Vérification OTP
│   ├── ✅ Connexion
│   ├── ✅ Mot de passe oublié
│   └── ✅ Déconnexion
├── Profil
│   ├── ✅ Visualisation profil public
│   ├── ✅ Modification profil
│   ├── ✅ Upload avatar
│   └── ✅ Upload portfolio
├── Recherche
│   ├── ✅ Recherche textuelle
│   ├── ✅ Filtres (catégorie, ville, prix)
│   ├── ✅ Tri des résultats
│   └── ✅ Pagination
├── Notation
│   ├── ✅ Dépôt d'avis
│   ├── ✅ Réponse au pro
│   ├── ✅ Signalement
│   └── ✅ Calcul du score
├── Leaderboard
│   ├── ✅ Affichage podium
│   ├── ✅ Filtrage
│   └── ✅ Mise à jour temps réel
├── Messagerie
│   ├── ✅ Envoi message
│   ├── ✅ Réception temps réel
│   └── ✅ Marquer comme lu
└── Admin
    ├── ✅ Dashboard stats
    ├── ✅ Validation pro
    └── ✅ Modération avis
```

### 10.2 Snapshot Testing

```typescript
// __tests__/snapshots/components.test.tsx
describe('Component snapshots', () => {
  it('ProCard renders correctly', () => {
    const { container } = render(<ProCard pro={mockPro} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('StarRating renders correctly', () => {
    const { container } = render(<StarRating value={3.5} max={5} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Podium renders correctly', () => {
    const { container } = render(<Podium pros={[pro1, pro2, pro3]} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
```

---

## 11. AUTOMATISATION & CI/CD

### 11.1 Pipeline GitHub Actions

```yaml
# .github/workflows/test.yml
name: Tests

on:
  push:
    branches: [develop, main]
  pull_request:
    branches: [develop, main]

jobs:
  unit-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - run: npm ci
      - run: npm run test:unit -- --coverage
      
      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/lcov.info
          fail_ci_if_error: true
          minimum_coverage: 70

  integration-tests:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:16
        env:
          POSTGRES_PASSWORD: test
          POSTGRES_DB: servicespro_test
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
      redis:
        image: redis:7
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
    
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - run: npm ci
      - run: npm run db:migrate
      - run: npm run test:integration
        env:
          DATABASE_URL: postgresql://postgres:test@localhost/servicespro_test
          REDIS_URL: redis://localhost:6379
          JWT_SECRET: test-secret

  e2e-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install Playwright
        run: |
          npm ci
          npx playwright install --with-deps
      
      - run: npm run test:e2e
      
      - name: Upload test results
        uses: actions/upload-artifact@v3
        if: always()
        with:
          name: playwright-report
          path: playwright-report/

  security-scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: ZAP Baseline Scan
        uses: zaproxy/action-baseline@v0.10.0
        with:
          target: 'https://staging.servicespro.cm'
          rules_file_name: '.zap/rules.tsv'

  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run Lighthouse CI
        run: |
          npm install -g @lhci/cli@0.12.x
          lhci autorun
        env:
          LHCI_GITHUB_APP_TOKEN: ${{ secrets.LHCI_GITHUB_APP_TOKEN }}
```

### 11.2 Plan d'Exécution

| Type | Fréquence | Déclencheur | Durée |
|------|-----------|-------------|-------|
| Unitaires | À chaque push | CI/CD | ~2 min |
| Intégration | À chaque push | CI/CD | ~5 min |
| E2E | À chaque PR | CI/CD | ~10 min |
| Performance | Quotidien | Cron (2h du matin) | ~15 min |
| Sécurité | Hebdomadaire | Cron (dimanche) | ~30 min |
| Accessibilité | À chaque PR | CI/CD | ~5 min |
| Régression | Pré-déploiement | Manuel | ~20 min |
| Utilisateurs | Par phase | Planning | 2-3 jours |

---

## 12. GESTION DES BUGS

### 12.1 Classification des Bugs

| Sévérité | Description | SLA de résolution |
|----------|-------------|-------------------|
| **CRITIQUE** | Site inaccessible, perte de données, sécurité | 4 heures |
| **HAUTE** | Fonctionnalité principale cassée | 24 heures |
| **MOYENNE** | Fonctionnalité secondaire, contournement possible | 72 heures |
| **BASSE** | UI/UX, cosmetique | 1 semaine |
| **AMÉLIORATION** | Suggestion d'amélioration | Backlog |

### 12.2 Template de Rapport de Bug

```markdown
## Description
[Description claire du bug]

## Étape de reproduction
1. Aller sur '...'
2. Cliquer sur '...'
3. Observer '...'

## Comportement attendu
[Ce qui devrait se passer]

## Comportement actuel
[Ce qui se passe]

## Screenshots
[Si applicable]

## Environnement
- OS: [ex: Android 13]
- Navigateur: [ex: Chrome 120]
- Appareil: [ex: Samsung Galaxy S23]
- Résolution: [ex: 360×780]
- URL: [ex: /search?q=plombier]

## Console errors
[Copier-coller les erreurs console]

## Sévérité
[CRITIQUE/HAUTE/MOYENNE/BASSE]
```

### 12.3 Suivi des Métriques Qualité

| Métrique | Objectif | Mesure |
|----------|----------|--------|
| Bugs en production | < 5/mois | Suivi hebdo |
| Bugs critiques | 0 | Suivi temps réel |
| Temps moyen de résolution | < 48h | Jira/GitHub Issues |
| Taux de régression | < 2% | Post-déploiement |
| Couverture de tests | > 70% | CI/CD |
| Score Lighthouse | > 85 | CI/CD |

---

## 13. CHECKLISTS DE VALIDATION

### 13.1 Checklist Pré-lancement

```
AVANT LE LANCEMENT PUBLIC

Fonctionnel
□ Inscription client complète (email + téléphone)
□ Inscription pro complète (4 étapes)
□ Validation admin des pros
□ Recherche par texte + filtres
□ Page profil pro public
□ Système de notation (5 critères + commentaire)
□ Réponse du pro aux avis
□ Messagerie temps réel
□ Leaderboard podium
□ Disponibilités pro
□ Tableau de bord pro
□ Notifications (push + email)
□ Modération admin (avis + pros)

Performance
□ Lighthouse score > 85 sur toutes les pages
□ Temps de chargement < 3s sur 3G
□ API response < 500ms (p95)
□ Images optimisées (WebP)
□ Lazy loading implémenté
□ Code splitting actif

Sécurité
□ HTTPS partout
□ JWT sécurisé (httpOnly cookie)
□ Rate limiting actif
□ Upload de fichiers sécurisé
□ XSS/CSRF protégés
□ Headers de sécurité
□ Données sensibles chiffrées

Accessibilité
□ Navigation clavier complète
□ Alt text sur toutes les images
□ Contraste ≥ 4.5:1
□ ARIA labels corrects
□ Test avec lecteur d'écran

Responsive
□ Mobile (320px - 480px)
□ Tablet (481px - 1024px)
□ Desktop (1025px+)
□ Touch targets ≥ 44px

Contenu
□ Tous les textes en français
□ Pas de "Lorem ipsum"
□ Données de démo réalistes
□ CGU et Politique de confidentialité rédigées
□ Mentions légales présentes

Monitoring
□ Sentry configuré (erreurs)
□ Uptime monitoring actif
□ Logs applicatifs configurés
□ Alertes configurées

```

### 13.2 Checklist Post-déploiement

```
APRÈS LE DÉPLOIEMENT

Immédiat (< 1h)
□ Site accessible sur servicespro.cm
□ HTTPS fonctionnel
□ API répond correctement
□ Authentification fonctionne
□ Upload d'images fonctionne
□ Base de données connectée
□ Redis connecté

Cour terme (< 24h)
□ Aucune erreur critique dans Sentry
□ Performance stable (RUM)
□ Inscriptions fonctionnent
□ SMS d'OTP envoyés
□ Emails envoyés
□ Leaderboard mis à jour

Moyen terme (< 1 semaine)
□ Premiers utilisateurs inscrits
□ Premières missions créées
□ Premiers avis déposés
□ Pas de bug critique signalé
□ Métriques de stabilité OK
```

---

*Document rédigé le 31 mai 2026 — Version 1.0.0*
*Services Pro — Plan de Tests*

# SERVICES PRO — PLAN DE TESTS (v2.0)

---

## TABLE DES MATIÈRES

1. Stratégie de Test
2. Tests des 20 Sections
3. Tests du Pro Score
4. Tests du Carrousel 3D
5. Tests des Particules
6. Tests du Système de Notation
7. Tests des Niveaux de Profil
8. Tests des Plans Tarifaires
9. Tests des 14 Villes
10. Tests des 10 Familles
11. Tests de Performance
12. Tests de Sécurité
13. Tests d'Accessibilité
14. Automatisation & CI/CD

---

## 1. STRATÉGIE DE TEST

### Pyramide de Test

```
                    ▲
                   ╱ ╲     Tests E2E (10%)
                  ╱   ╲    — Playwright, parcours complets
                 ╱ E2E ╲
                ╱─────────╲
               ╱           ╲
              ╱ Intégration ╲   Tests d'Intégration (20%)
             ╱──────────────────╲  — API, DB, services
            ╱                   ╲
           ╱    Unitaires        ╲  Tests Unitaires (70%)
          ╱────────────────────────╲ — Fonctions isolées
```

### Environnements

| Environnement | URL | Usage |
|---------------|-----|-------|
| **Local** | `localhost:5173` | Développement |
| **Test** | `test.servicespro.cm` | Tests automatisés |
| **Staging** | `staging.servicespro.cm` | Pré-production |
| **Production** | `servicespro.cm` | Live |

### Outils

| Type | Outil |
|------|-------|
| Unit tests | **Jest** + React Testing Library |
| E2E tests | **Playwright** |
| Performance | **Lighthouse CI** |
| Accessibilité | **axe-core** |

---

## 2. TESTS DES 20 SECTIONS

### Section 1 — Navigation

| ID | Test | Résultat attendu |
|----|------|-----------------|
| NAV-01 | Navigation fixe au scroll | Barre reste fixe, backdrop blur actif |
| NAV-02 | Menu mobile | Overlay fullscreen, animations stagger |
| NAV-03 | Dropdown "Trouver un Pro" | S'ouvre au clic, 5 catégories visibles |
| NAV-04 | Toggle FR/EN | Contenu bascule instantanément |
| NAV-05 | Scroll shadow | Ombre apparait après 50px de scroll |

### Section 2 — Hero

| ID | Test | Résultat attendu |
|----|------|-----------------|
| HERO-01 | Carrousel 3D rotation | Rotation continue 0.18deg/frame |
| HERO-02 | Particules répulsion | Particules s'écartent du curseur |
| HERO-03 | Particules connections | Lignes entre particules proches (<100px) |
| HERO-04 | Flip card hover | Rotation 180° au hover, recto→verso |
| HERO-05 | Barre de recherche | Input fonctionnel, placeholder traduit |
| HERO-06 | Stats confiance | 3 stats affichées avec icônes dorées |
| HERO-07 | Cartes photos (desktop) | 3 cartes visibles avec overlay info |

### Section 3 — Trust Banner

| ID | Test | Résultat attendu |
|----|------|-----------------|
| TRUST-01 | 6 items visibles | Icône + titre + description pour chaque |
| TRUST-02 | Responsive | Grille 6→3→2 colonnes |

### Section 4 — Stats Animés

| ID | Test | Résultat attendu |
|----|------|-----------------|
| STATS-01 | Compteurs animation | Valeurs comptent de 0 à cible en 2.5s |
| STATS-02 | Scroll trigger | Animation démarre à 85% viewport |
| STATS-03 | 6 cartes | Pros, Missions, Rating, Villes, Satisfaction, Sécurisé |

### Section 5 — Pro Score

| ID | Test | Résultat attendu |
|----|------|-----------------|
| PROS-01 | Anneau SVG | 5 segments animés avec stagger |
| PROS-02 | 5 barres progression | Largeur proportionnelle au pourcentage |
| PROS-03 | Valeur centrale | "100" affiché avec "Pro Score" |

### Section 6 — Pros du Moment

| ID | Test | Résultat attendu |
|----|------|-----------------|
| PROM-01 | 9 cartes | Carrousel horizontal scrollable |
| PROM-02 | Navigation flèches | Défilement de 280px par clic |
| PROM-03 | Badges visibles | Expert (or), Certifié (bleu) |
| PROM-04 | Scores affichés | Pro Score circulaire + nombre d'avis |

### Section 7 — Leaderboard

| ID | Test | Résultat attendu |
|----|------|-----------------|
| LEAD-01 | Podium 3 cartes | Or/Argent/Bronze avec bordures colorées |
| LEAD-02 | Filtres catégorie | Pills actifs, tableau filtré |
| LEAD-03 | Sélecteur ville | Dropdown avec 3 villes |
| LEAD-04 | Tableau 7 rangs | Rang 4 à 10 avec indicateurs dispo |
| LEAD-05 | Disponibilité couleurs | Vert/orange/rouge selon statut |

### Section 8 — 10 Familles

| ID | Test | Résultat attendu |
|----|------|-----------------|
| FAM-01 | 10 cartes | Grille 5×2 avec icônes colorées |
| FAM-02 | Hover effects | Bordure colorée, ombre, scale icône |
| FAM-03 | Nombre de pros | Affiché pour chaque famille |

### Section 9 — 20 Catégories

| ID | Test | Résultat attendu |
|----|------|-----------------|
| CAT-01 | 20 cartes | Images de couverture en fond |
| CAT-02 | Overlay gradient | Gradient sombre par-dessus image |
| CAT-03 | Hover barre progression | Barre dorée apparait au hover |
| CAT-04 | Responsive | 4→2→1 colonnes |

### Section 10 — Comment ça marche

| ID | Test | Résultat attendu |
|----|------|-----------------|
| HIW-01 | 3 étapes | Numéros 01-02-03 avec cercles dorés |
| HIW-02 | Ligne connectrice | Ligne pointillée dorée entre étapes |

### Section 11 — 14 Villes

| ID | Test | Résultat attendu |
|----|------|-----------------|
| CITY-01 | 14 tabs | Barre scrollable avec toutes les villes |
| CITY-02 | Changement ville | Image, stats, top catégories mis à jour |
| CITY-03 | Stats affichées | Pros, catégories, quartiers |

### Section 12 — Profil Pro

| ID | Test | Résultat attendu |
|----|------|-----------------|
| PROF-01 | 6 blocs | Identité, Score, Compétences, Parcours, Tarifs, Avis |
| PROF-02 | Badges | Vérifié (vert), Expert (or), Réponse rapide (orange) |
| PROF-03 | Calendrier dispo | L M M J V S D avec couleurs |

### Section 13 — Galerie

| ID | Test | Résultat attendu |
|----|------|-----------------|
| GAL-01 | Grille masonry | 2 grandes + 6 normales |
| GAL-02 | Lightbox | Clic ouvre plein écran |
| GAL-03 | Fermeture | Escape ferme, clic extérieur ferme |

### Section 14 — Niveaux

| ID | Test | Résultat attendu |
|----|------|-----------------|
| LEV-01 | 4 niveaux | Starter, Certifié, Expert, Elite |
| LEV-02 | Ligne connectrice | Gradient gris→bleu→or→violet |

### Section 15 — Plans Tarifaires

| ID | Test | Résultat attendu |
|----|------|-----------------|
| PRI-01 | 4 plans | Gratuit, Pro, Expert, Elite |
| PRI-02 | Badge popular | "Le plus populaire" sur plan Pro |
| PRI-03 | Features listées | Check + description pour chaque |

### Section 16 — Témoignages

| ID | Test | Résultat attendu |
|----|------|-----------------|
| TEST-01 | Carousel | Citation principale + mini-cartes |
| TEST-02 | Navigation | Dots + flèches fonctionnels |

### Section 17 — FAQ

| ID | Test | Résultat attendu |
|----|------|-----------------|
| FAQ-01 | 8 questions | Accordéon avec chevron rotatif |
| FAQ-02 | Ouverture/fermeture | max-height + opacity animés |

### Section 18 — Roadmap

| ID | Test | Résultat attendu |
|----|------|-----------------|
| ROAD-01 | 4 phases | Timeline avec icônes et statuts |
| ROAD-02 | Badges statut | Vert (terminé), Or (en cours), Gris (à venir) |

---

## 3. TESTS PERFORMANCE

| ID | Test | Seuil |
|----|------|-------|
| PERF-01 | First Contentful Paint | < 1.5s |
| PERF-02 | Time to Interactive | < 3.5s |
| PERF-03 | Animations 60fps | > 55fps moyen |
| PERF-04 | Bundle size | < 500KB gzipped |
| PERF-05 | Images optimisées | WebP, lazy loading |

---

## 4. TESTS ACCESSIBILITÉ

| ID | Test | Norme |
|----|------|-------|
| A11Y-01 | Contraste couleurs | WCAG 2.1 AA (≥4.5:1) |
| A11Y-02 | Navigation clavier | Tab order logique |
| A11Y-03 | Lecteurs d'écran | aria-labels sur tous les éléments interactifs |
| A11Y-04 | Reduced motion | `prefers-reduced-motion` respecté |
| A11Y-05 | Focus visible | Outline doré sur :focus-visible |

---

*Document v2.0 — Services Pro Cameroon*

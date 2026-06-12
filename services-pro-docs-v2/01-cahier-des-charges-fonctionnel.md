# SERVICES PRO — CAHIER DES CHARGES FONCTIONNEL (v2.0)

---

## TABLE DES MATIÈRES

1. Présentation du Projet
2. Acteurs & Rôles
3. Parcours Utilisateurs (User Flows)
4. Spécifications Fonctionnelles Détaillées
5. Module Authentification
6. Module Profil Client
7. Module Profil Professionnel (6 blocs + 5 niveaux)
8. Module Recherche & Filtrage
9. Module Top Pro Podium & Pros du Moment
10. Module Système de Notation (Coeur)
11. Module Tableau de Bord Pro
12. Module Messagerie
13. Module Administration
14. Module Notifications
15. Module Plans Tarifaires (Freemium)
16. Module Villes & Quartiers (14 villes)
17. Module Familles de Services (10 familles)
18. Règles Métier Critiques
19. Règles de Gamification
20. Exigences Non-Fonctionnelles
21. Glossaire

---

## 1. PRÉSENTATION DU PROJET

### 1.1 Identification

| Champ | Valeur |
|-------|--------|
| **Nom du projet** | Services Pro |
| **Version** | 2.0.0 (WOW) |
| **Date de rédaction** | 31 mai 2026 |
| **Statut** | Spécification fonctionnelle complète — Version enrichie |

### 1.2 Vision

Services Pro est la plateforme de référence au Cameroun permettant de découvrir, contacter et évaluer les meilleurs professionnels de services. Inspirée des mécanismes de confiance des plateformes P2P (Peer-to-Peer), Services Pro établit un écosystème transparent où la qualité est récompensée par une visibilité accrue. La version WOW enrichit l'expérience avec 20 sections visuelles, 14 villes couvertes, 10 familles de services et un système de progression Starter → Elite.

### 1.3 Mission

> « Connecter chaque Camerounais avec le meilleur professionnel de son domaine, en toute confiance et transparence. »

### 1.4 Objectifs Stratégiques

| Objectif | Indicateur | Cible (12 mois) |
|----------|------------|-----------------|
| Devenir le répertoire professionnel de référence au Cameroun | Part de marché | 40% des artisans en ligne |
| Couvrir 14 villes majeures du Cameroun | Villes actives | 14 villes, 200+ quartiers |
| Instaurer la confiance par la transparence | Taux de satisfaction client | > 92% |
| Récompenser l'excellence professionnelle | Pros avec badge Expert+ | > 500 |
| Faciliter l'accès aux services | Temps moyen de recherche | < 2 minutes |
| Créer un effet de réseau viral | NPS (Net Promoter Score) | > 50 |

### 1.5 Périmètre Géographique — 14 Villes

**Phase 1 (Lancement)** : Douala, Yaoundé, Bafoussam
**Phase 2 (Mois 4-6)** : Garoua, Bamenda, Ngaoundéré, Maroua, Bertoua
**Phase 3 (Mois 7-12)** : Ebolowa, Buea, Kribi, Limbe, Edéa, Kumba

**Répartition par région** :
| Région | Villes couvertes |
|--------|-----------------|
| Littoral | Douala, Edéa |
| Centre | Yaoundé |
| Ouest | Bafoussam |
| Nord | Garoua |
| Nord-Ouest | Bamenda |
| Adamaoua | Ngaoundéré |
| Extrême-Nord | Maroua |
| Est | Bertoua |
| Sud | Ebolowa, Kribi |
| Sud-Ouest | Buea, Limbe, Kumba |

### 1.6 10 Familles de Services — 60+ Métiers

1. **Juridique & Légal** — Avocats, Notaires, Huissiers, Juristes d'entreprise
2. **Financier & Comptable** — Experts-comptables, Conseillers fiscaux, Auditeurs
3. **Médical & Santé** — Médecins, Infirmiers, Kinésithérapeutes, Dentistes
4. **Architecture & BTP** — Architectes, Ingénieurs, Plombiers, Électriciens, Maçons
5. **Numérique & Technologie** — Développeurs, Designers UI/UX, Experts SEO
6. **Communication** — Graphistes, Rédacteurs, Photographes, Vidéastes
7. **Éducatif & Formation** — Enseignants, Coachs, Formateurs professionnels
8. **Services Entreprises** — Consultants RH, Experts qualité, Traducteurs
9. **Personne & Bien-être** — Coachs sportifs, Traiteurs, Coiffeurs, Esthéticiens
10. **Environnement & Technique** — Climatisation, Énergies renouvelables, Géomètres

### 1.7 20 Catégories Métiers Détaillées

1. Plomberie | 2. Électricité | 3. Menuiserie | 4. Maçonnerie | 5. Peinture
6. Jardinage | 7. Coiffure & Beauté | 8. Couture | 9. Mécanique Auto | 10. Informatique
11. Design Graphique | 12. Photographie | 13. Cuisine | 14. Nettoyage | 15. Déménagement
16. Climatisation | 17. Ferronnerie | 18. Carrelage | 19. Électronique | 20. Autres

---

## 2. ACTEURS & RÔLES

### 2.1 Matrice des Acteurs

| Acteur | Description | Actions principales |
|--------|-------------|---------------------|
| **Visiteur** | Utilisateur non connecté | Consulter l'accueil, rechercher, voir profils limités |
| **Client** | Utilisateur inscrit cherchant un service | Rechercher, contacter, noter, sauvegarder favoris |
| **Professionnel** | Prestataire de services inscrit | Gérer profil, répondre aux demandes, recevoir avis |
| **Modérateur** | Équipe plateforme | Valider profils, modérer avis, gérer signalements |
| **Administrateur** | Équipe technique | Configuration système, analytics, gestion utilisateurs |

---

## 3. PARCOURS UTILISATEURS

### 3.1 Parcours Client Complet

```
1. DÉCOUVERTE → Arrivée sur la page d'accueil (Hero + Carrousel 3D + Particules)
2. CONFIANCE → Trust Banner (6 piliers) + Stats animés + Pro Score expliqué
3. RECHERCHE → Familles de services (10) ou 20 catégories avec images
4. EXPLORATION → Pros du Moment (carousel) + Leaderboard (filtres par ville/catégorie)
5. SÉLECTION → Profil complet avec 6 blocs, badges, portfolio, disponibilité
6. CONTACT → Messagerie intégrée ou appel direct
7. MISSION → Travail réalisé, paiement sécurisé
8. CLÔTURE → Avis déposé (5 critères), Pro Score mis à jour
```

### 3.2 Parcours Professionnel Complet

```
1. INSCRIPTION → Création profil (niveau Starter)
2. VÉRIFICATION → Identité + qualifications → niveau Certifié
3. MISSIONS → 20 missions + note ≥ 4.2 → niveau Expert
4. EXCELLENCE → 100 missions + note ≥ 4.7 → niveau Elite
5. VISIBILITÉ → Apparition dans Pros du Moment + Leaderboard
6. CROISSANCE → Plan tarifaire (Gratuit/Pro/Expert/Elite)
```

---

## 4. SPÉCIFICATIONS FONCTIONNELLES DÉTAILLÉES

### 4.1 Page d'Accueil — 20 Sections

| # | Section | Description | Priorité |
|---|---------|-------------|----------|
| 1 | **Navigation** | Barre fixe avec blur backdrop, menu dropdown, toggle FR/EN | P0 |
| 2 | **Hero** | Carrousel 3D cylindrique auto-rotatif (18 catégories), particules dorées interactives, barre de recherche, stats de confiance | P0 |
| 3 | **Trust Banner** | 6 piliers : Pros Vérifiés, Intervention 24h, Paiement Sécurisé, Support 24/7, Croissance +300%, Garantie | P0 |
| 4 | **Stats Animés** | 6 compteurs animés : 2400+ pros, 15000+ missions, 4.8/5, 12 villes, 92% satisfaction, 100% sécurisé | P1 |
| 5 | **Pro Score** | Anneau SVG animé avec 5 dimensions de notation (Qualité 30%, Ponctualité 20%, Communication 20%, Valeur 20%, Professionnalisme 10%) | P0 |
| 6 | **Pros du Moment** | Carrousel horizontal de 9 profils Elite avec badges, scores, avis | P1 |
| 7 | **Leaderboard** | Podium Or/Argent/Bronze + tableau des rangs 4-10, filtres par catégorie et ville | P0 |
| 8 | **10 Familles de Services** | Grille de 10 familles avec icônes colorées, nombre de pros | P1 |
| 9 | **20 Catégories** | Cartes avec images de couverture réelles, barre de progression au hover | P0 |
| 10 | **Comment ça marche** | 3 étapes numérotées (01-02-03) connectées par ligne dorée pointillée | P1 |
| 11 | **14 Villes** | Sélecteur interactif avec photos panoramiques, stats par ville, top catégories | P1 |
| 12 | **Profil Pro** | Carte complète avec cover photo, avatar, badges, score, calendrier dispo | P0 |
| 13 | **Galerie Portfolio** | Grille masonry 8 photos avec lightbox cliquable, overlay info pro | P1 |
| 14 | **Niveaux de Profil** | 4 niveaux (Starter → Certifié → Expert → Elite) avec ligne connectrice colorée | P1 |
| 15 | **Plans Tarifaires** | 4 plans : Gratuit (0 XAF), Pro (15 000 XAF), Expert (35 000 XAF), Elite (invitation) | P1 |
| 16 | **Témoignages** | Carousel avec avatars réels de clients, mini-carte pro associé, navigation dot+flèches | P1 |
| 17 | **FAQ** | Accordéon 8 questions avec réponses complètes, design sticky left column | P1 |
| 18 | **Roadmap** | Timeline visuelle 4 phases (MVP → Enrichissement → Croissance → Maturité) | P2 |
| 19 | **CTA** | Mockup téléphone avec dashboard Pro + notifications | P1 |
| 20 | **Footer** | 4 colonnes (À propos, Clients, Pros, Légal), réseaux sociaux, switch FR/EN | P0 |

---

## 5. MODULE AUTHENTIFICATION

### 5.1 Inscription Client (2 étapes)

**Étape 1** : Email + mot de passe (minimum 8 caractères, 1 majuscule, 1 minuscule, 1 chiffre)
**Étape 2** : Vérification téléphone (SMS code 4 chiffres)

### 5.2 Inscription Professionnel (4 étapes)

**Étape 1** : Email + mot de passe
**Étape 2** : Informations professionnelles (nom, catégorie, ville, téléphone)
**Étape 3** : Vérification d'identité (upload pièce d'identité)
**Étape 4** : Complétion profil (photo, bio, tarifs, disponibilités)

---

## 6. MODULE PROFIL CLIENT

- Historique des missions
- Professionnels sauvegardés (favoris)
- Avis à déposer (rappels actifs)
- Messagerie
- Suivi des paiements / devis
- Alertes email sur nouveaux profils correspondant aux critères

---

## 7. MODULE PROFIL PROFESSIONNEL — 6 BLOCS + 5 NIVEAUX

### 7.1 Structure d'un Profil Complet (6 blocs)

```
┌─────────────────────────────────────────────────────┐
│  BLOC 1 : Identité & Accroche                        │
│  Photo · Nom · Titre · Localisation · Disponibilité  │
├─────────────────────────────────────────────────────┤
│  BLOC 2 : Score de confiance                         │
│  Pro Score 0-100 · Badge niveau · Certifications     │
├─────────────────────────────────────────────────────┤
│  BLOC 3 : Compétences & Spécialités                  │
│  Tags · Domaines · Langues · Expérience (années)     │
├─────────────────────────────────────────────────────┤
│  BLOC 4 : Parcours & Références                      │
│  Formation · Expériences · Portfolio · Publications  │
├─────────────────────────────────────────────────────┤
│  BLOC 5 : Tarification & Disponibilités              │
│  Tarif horaire/forfait · Calendrier · Zone d'action  │
├─────────────────────────────────────────────────────┤
│  BLOC 6 : Avis clients & Historique                  │
│  Commentaires · Statistiques · Projets réalisés      │
└─────────────────────────────────────────────────────┘
```

### 7.2 Niveaux de Profil (5 niveaux)

| Niveau | Nom | Critères | Badge | Avantages |
|--------|-----|----------|-------|-----------|
| 0 | **Starter** | Profil complété à 60% | Gris | Apparition dans les résultats |
| 1 | **Certifié** | Identité vérifiée + 3 avis | Bleu | Badge bleu, meilleur référencement |
| 2 | **Expert** | 20 missions + note ≥ 4.2 | Or | Badge or, accès missions premium |
| 3 | **Elite** | 100 missions + note ≥ 4.7 + 0 plainte | Platine | Badge platine, top page, conseiller dédié |
| 4 | **Partenaire** | Sélection manuelle plateforme | Platine+ | Contrat partenaire, visibilité maximale |

### 7.3 Badges de Confiance Visuels

- ✔ Identité vérifiée
- ✔ Diplôme vérifié
- ✔ Ordre professionnel
- ✔ Top Répondeur (>90% sous 24h)
- ✔ Fidélité clients (>30% récurrents)

---

## 8. MODULE RECHERCHE & FILTRAGE

### 8.1 Barre de Recherche Principale
- Champ métier : "Quel service cherchez-vous ?"
- Champ ville : "Ville ou région"
- Autocomplétion avec 60+ métiers

### 8.2 Filtres Avancés
- Catégorie / Sous-catégorie
- Disponibilité (immédiate / cette semaine / ce mois)
- Fourchette de tarif (slider)
- Note minimale (Pro Score)
- Localisation (rayon en km)
- Niveau de profil (Certifié / Expert / Elite)
- Langues parlées
- Badges spécifiques

---

## 9. MODULE TOP PRO PODIUM & PROS DU MOMENT

### 9.1 Podium (Top 3)
- Cartes avec photos réelles, badges Or/Argent/Bronze
- Score, nombre d'avis, disponibilité colorée
- Mise en valeur visuelle avec bordures dorées

### 9.2 Tableau de Classement (Rangs 4-10+)
- Filtres par catégorie et par ville
- Colonnes : Rang, Nom, Catégorie, Ville, Score, Avis, Disponibilité
- Indicateurs de disponibilité : vert (aujourd'hui), orange (cette semaine), rouge (occupé)

### 9.3 Pros du Moment
- Carrousel horizontal de 9 profils
- Rotation automatique des profils Elite récemment actifs
- Carte avec cover photo, avatar, badge, score, nombre d'avis

---

## 10. MODULE SYSTÈME DE NOTATION (COEUR)

### 10.1 5 Critères Pondérés (Pro Score 0-100)

| Critère | Pondération | Description |
|---------|-------------|-------------|
| Qualité du travail | 30% | Résultat conforme aux attentes |
| Ponctualité | 20% | Respect des horaires convenus |
| Communication | 20% | Clarté, réactivité, professionnalisme |
| Rapport qualité/prix | 20% | Adéquation tarif/prestation |
| Professionnalisme | 10% | Tenue, courtoisie, éthique |

### 10.2 Règles d'Intégrité
- Avis uniquement après mission complétée
- Délai de dépôt : 72h à 30 jours après clôture
- 1 avis maximum par mission
- Réponse publique du professionnel autorisée
- Modération automatique des avis suspects

### 10.3 Poids Historique des Avis

| Ancienneté | Poids |
|------------|-------|
| 0-3 mois | 100% |
| 3-6 mois | 80% |
| 6-12 mois | 60% |
| 12-24 mois | 40% |
| > 24 mois | 20% |

---

## 11. MODULE TABLEAU DE BORD PRO

- Résumé des activités (missions en cours, demandes reçues, revenus)
- Messagerie centralisée
- Gestion des disponibilités (calendrier intégré)
- Suivi des avis et réponses
- Statistiques de performance (vues, taux de contact, conversion)
- Évolution du Pro Score (graphique historique)
- Gestion des documents (diplômes, certifications)
- Paramètres de tarification

---

## 12. MODULE MESSAGERIE

- Messagerie interne sécurisée
- Partage de fichiers (PDF, images)
- Templates de réponse pour professionnels
- Marquage des messages importants
- Archivage automatique après clôture
- Notifications push pour les réponses

---

## 13. MODULE ADMINISTRATION

- Validation des profils professionnels
- Modération des avis et signalements
- Gestion des utilisateurs (suspendre, bannir)
- Tableau de bord analytics
- Gestion du contenu (FAQ, témoignages)
- Configuration des plans tarifaires

---

## 14. MODULE NOTIFICATIONS

### 14.1 Types de Notifications
- Nouvelle demande de contact
- Nouvel avis reçu
- Rappel de disponibilité
- Badge débloqué
- Mise à jour du classement
- Offres et promotions

### 14.2 Canaux
- Email
- Push mobile (Phase 2)
- In-app (badge sur l'icône)
- SMS pour les urgences

---

## 15. MODULE PLANS TARIFAIRES (FREEMIUM)

### 15.1 Grille Tarifaire

| Plan | Prix | Commission | Contacts | Fonctionnalités |
|------|------|------------|----------|-----------------|
| **Gratuit** | 0 XAF/mois | 15% | 5/mois | Profil basique, messagerie |
| **Pro** | 15 000 XAF/mois | 10% | Illimités | Profil complet, stats de base, badge Certifié |
| **Expert** | 35 000 XAF/mois | 7% | Illimités | Tout Pro + boost mensuel + stats avancées + badge Expert |
| **Elite** | Sur invitation | 5% | Illimités | Tout Expert + conseiller dédié + badge Elite + top résultats |

---

## 16. MODULE VILLES & QUARTIERS — 14 VILLES

### 16.1 Villes Couvertes avec Données

| Ville | Région | Population | Pros | Catégories | Quartiers |
|-------|--------|------------|------|------------|-----------|
| Douala | Littoral | ~4.5M | 1 240 | 18 | 32 |
| Yaoundé | Centre | ~4M | 890 | 18 | 35 |
| Bafoussam | Ouest | ~400K | 270 | 15 | 15 |
| Garoua | Nord | ~500K | 145 | 12 | 15 |
| Bamenda | Nord-Ouest | ~500K | 189 | 14 | 17 |
| Ngaoundéré | Adamaoua | ~300K | 98 | 10 | 13 |
| Maroua | Extrême-Nord | ~450K | 134 | 11 | 17 |
| Bertoua | Est | ~250K | 87 | 10 | 11 |
| Ebolowa | Sud | ~150K | 56 | 9 | 9 |
| Buea | Sud-Ouest | ~300K | 167 | 13 | 19 |
| Kribi | Sud | ~100K | 45 | 8 | 12 |
| Limbe | Sud-Ouest | ~200K | 112 | 12 | 15 |
| Edéa | Littoral | ~150K | 78 | 9 | 10 |
| Kumba | Sud-Ouest | ~300K | 134 | 12 | 12 |

---

## 17. RÈGLES MÉTIER CRITIQUES

- Un professionnel ne peut pas s'auto-noter
- Un client doit avoir complété une mission pour noter
- Le Pro Score est recalculé en temps réel après chaque avis
- Les avis sont modérés sous 24h
- 3 signalements confirmés = suspension temporaire
- 5 signalements confirmés = suppression définitive
- Les profils sans photo ne sont pas mis en avant
- Les tarifs doivent être affichés (même en fourchette)

---

## 18. RÈGLES DE GAMIFICATION

### 18.1 Système de Points

| Action | Points |
|--------|--------|
| Inscription complète | +50 |
| Première mission complétée | +100 |
| Avis 5 étoiles reçu | +20 |
| Réponse sous 1h | +10 |
| Client récurrent | +30 |
| Portfolio ajouté | +25 |
| Vérification d'identité | +50 |

### 18.2 Badges Déblocables

| Badge | Condition | Visuel |
|-------|-----------|--------|
| **Nouveau** | Inscription | Gris |
| **Certifié** | ID vérifiée + 3 avis | Bleu |
| **Expert** | 20 missions + note ≥ 4.2 | Or |
| **Elite** | 100 missions + note ≥ 4.7 | Platine |
| **Top Répondeur** | Taux de réponse > 90% | Vert |
| **Fidélité** | > 30% clients récurrents | Cœur |
| **Rising Star** | +50 points en 30 jours | Flamme |

---

## 19. EXIGENCES NON-FONCTIONNELLES

### 19.1 Performance
- Temps de chargement initial < 2s
- First Contentful Paint < 1.5s
- Time to Interactive < 3.5s
- Animations à 60fps

### 19.2 Responsive
- Desktop : 1200px+ ( grille 4 colonnes catégories)
- Tablet : 768px-1199px (grille 2 colonnes)
- Mobile : < 768px (grille 1 colonne, carousel swipe)

### 19.3 Accessibilité
- Conformité WCAG 2.1 AA
- Contraste ≥ 4.5:1
- Navigation au clavier complète
- Lecteurs d'écran supportés
- `prefers-reduced-motion` respecté

---

## 20. GLOSSAIRE

| Terme | Définition |
|-------|------------|
| **Pro Score** | Score composite 0-100 calculé sur 5 critères |
| **Mission** | Prestation de service conclue via la plateforme |
| **Badge** | Indicateur visuel attestant d'une caractéristique |
| **Escrow** | Dépôt sécurisé des fonds jusqu'à validation |
| **Lead** | Demande de contact qualifiée |
| **NPS** | Net Promoter Score — mesure de satisfaction |
| **CAC** | Customer Acquisition Cost |
| **LTV** | Lifetime Value |

---

*Document v2.0 — Services Pro Cameroon*

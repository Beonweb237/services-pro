# SERVICES PRO — CAHIER DES CHARGES FONCTIONNEL

---

## TABLE DES MATIÈRES

1. Présentation du Projet
2. Acteurs & Rôles
3. Parcours Utilisateurs (User Flows)
4. Spécifications Fonctionnelles Détaillées
5. Module Authentification
6. Module Profil Client
7. Module Profil Professionnel
8. Module Recherche & Filtrage
9. Module Top Pro Podium
10. Module Système de Notation (Coeur)
11. Module Tableau de Bord Pro
12. Module Messagerie
13. Module Administration
14. Module Notifications
15. Règles Métier Critiques
16. Règles de Gamification
17. Exigences Non-Fonctionnelles
18. Gestion des Erreurs & Cas Limite
19. Glossaire

---

## 1. PRÉSENTATION DU PROJET

### 1.1 Identification

| Champ | Valeur |
|-------|--------|
| **Nom du projet** | Services Pro |
| **Version** | 1.0.0 |
| **Date de rédaction** | 31 mai 2026 |
| **Statut** | Spécification fonctionnelle complète |
| **Auteur** | Product Owner — Services Pro |

### 1.2 Vision

Services Pro est la plateforme de référence au Cameroun permettant de découvrir, contacter et évaluer les meilleurs professionnels de services. Inspirée des mécanismes de confiance des plateformes P2P (Peer-to-Peer), Services Pro établit un écosystème transparent où la qualité est récompensée par une visibilité accrue.

### 1.3 Mission

> « Connecter chaque Camerounais avec le meilleur professionnel de son domaine, en toute confiance et transparence. »

### 1.4 Objectifs Stratégiques

| Objectif | Indicateur | Cible (12 mois) |
|----------|------------|-----------------|
| Devenir le répertoire professionnel de référence au Cameroun | Part de marché | 40% des artisans en ligne |
| Instaurer la confiance par la transparence | Taux de satisfaction client | > 90% |
| Récompenser l'excellence professionnelle | Pros avec badge Or+ | > 500 |
| Faciliter l'accès aux services | Temps moyen de recherche | < 2 minutes |
| Créer un effet de réseau viral | NPS (Net Promoter Score) | > 50 |

### 1.5 Périmètre Géographique

**Phase 1 (Lancement)** : Douala, Yaoundé, Bafoussam
**Phase 2 (6 mois)** : Garoua, Maroua, Bamenda, Bertoua, Ngaoundéré
**Phase 3 (12 mois)** : Toutes les villes > 50 000 habitants + Expansion CEMAC (Tchad, Congo, Gabon, Guinée Équatoriale, RCA)

### 1.6 Domaines Professionnels Couverts

**Catégories Métier (20 domaines)** :

1. Plomberie
2. Électricité
3. Menuiserie
4. Maçonnerie
5. Peinture & Décoration
6. Jardinage & Espaces verts
7. Coiffure & Esthétique
8. Couture & Mode
9. Mécanique Automobile
10. Informatique & Réseaux
11. Design Graphique & Web
12. Photographie & Vidéo
13. Cuisine & Traiteur
14. Nettoyage & Hygiène
15. Déménagement & Transport
16. Climatisation & Froid
17. Ferronnerie & Soudure
18. Carrelage & Sols
19. Électronique & Électroménager
20. Autres Services

### 1.7 Positionnement Concurrentiel

| Critère | Services Pro | Annuaires classiques | Bouche-à-oreille | Facebook |
|---------|-------------|----------------------|-------------------|----------|
| Notation vérifiée | ✅ Oui | ❌ Non | ❌ Non | ⚠️ Aléatoire |
| Transparence totale | ✅ Oui | ❌ Non | ❌ Non | ❌ Non |
| Leaderboard dynamique | ✅ Oui | ❌ Non | ❌ Non | ❌ Non |
| Disponibilité temps réel | ✅ Oui | ❌ Non | ❌ Non | ❌ Non |
| Profil professionnel structuré | ✅ Oui | ⚠️ Basique | ❌ Non | ⚠️ Informel |
| Gamification | ✅ Oui | ❌ Non | ❌ Non | ❌ Non |
| Modération & sécurité | ✅ Oui | ❌ Non | ❌ Non | ❌ Non |

---

## 2. ACTEURS & RÔLES

### 2.1 Définition des Acteurs

#### 2.1.1 Client (Utilisateur Final)

**Profil** : Particulier résidant au Cameroun, âgé de 18 à 65 ans, cherchant un professionnel pour un besoin ponctuel ou récurrent.

**Besoins** :
- Trouver rapidement un professionnel qualifié et disponible
- Avoir confiance dans le choix grâce à des avis vérifiés
- Comparer facilement plusieurs professionnels
- Pouvoir évaluer la prestation après service

**Fréquence d'utilisation** : Ponctuelle (1-4 fois par mois selon les besoins)

#### 2.1.2 Professionnel (Prestataire de Services)

**Profil** : Artisan, freelance ou entrepreneur de services, âgé de 20 à 55 ans, souhaitant développer sa clientèle et valoriser son savoir-faire.

**Besoins** :
- Gagner en visibilité auprès de clients qualifiés
- Construire une réputation solide et vérifiable
- Gérer ses disponibilités de manière efficace
- Recevoir des demandes de contact pertinentes
- Répondre aux avis clients pour montrer son professionnalisme

**Fréquence d'utilisation** : Quotidienne (consultation des demandes, mise à jour des dispos)

#### 2.1.3 Administrateur (Équipe Services Pro)

**Profil** : Membre de l'équipe Services Pro chargé de la modération, de la validation et du bon fonctionnement de la plateforme.

**Sous-rôles** :
- **Super Admin** : Accès total, gestion des comptes, configuration système
- **Modérateur** : Validation des inscriptions pro, modération des avis, gestion des signalements
- **Support** : Réponse aux tickets utilisateurs, résolution de litiges

#### 2.1.4 Visiteur (Non-connecté)

**Profil** : Internaute découvrant la plateforme sans compte.

**Permissions** :
- Consulter la page d'accueil
- Voir le leaderboard
- Rechercher des professionnels (résultats limités)
- Voir les profils publics (informations partielles)

**Restrictions** :
- Pas de contact direct avec les pros
- Pas de possibilité de noter
- Pas d'accès à la messagerie
- Affichage de bannières d'inscription incitatives

---

## 3. PARCOURS UTILISATEURS (USER FLOWS)

### 3.1 Parcours Client Complet

```
┌─────────────────────────────────────────────────────────────────────┐
│                    PARCOURS CLIENT — VERSION DÉTAILLÉE              │
└─────────────────────────────────────────────────────────────────────┘

ÉTAPE 1 — DÉCOUVERTE
├─ Canal d'entrée : SEO, réseaux sociaux, bouche-à-oreille, publicité
├─ Action : Accès à la landing page www.servicespro.cm
└─ Objectif : Comprendre la valeur proposition en < 3 secondes

ÉTAPE 2 — RECHERCHE
├─ Action : Saisie dans la barre de recherche principale
├─ Input accepté : Métier (ex: "plombier"), ville (ex: "Douala"), ou combinaison
├─ Autocomplete : Suggestions après 2 caractères (métier + ville)
├─ Filtres optionnels : Disponibilité, prix, score, vérification
└─ Objectif : Obtenir une liste filtrée en < 500ms

ÉTAPE 3 — EXPLORATION DES RÉSULTATS
├─ Affichage : Grille de cards professionnels triés par score décroissant
├─ Par card : Photo, nom, catégorie, score, étoiles, avis, dispo, prix, ville
├─ Actions possibles :
│   ├─ Cliquer "Voir profil" → Page détaillée du pro
│   ├─ Cliquer "Contacter" → Redirection inscription/connexion si visiteur
│   └─ Ajouter aux favoris (si connecté)
└─ Objectif : Trouver 2-3 professionnels pertinents

ÉTAPE 4 — CONSULTATION DU PROFIL PRO
├─ Onglets disponibles :
│   ├─ "À propos" : Bio, compétences, tarifs, zone géographique
│   ├─ "Portfolio" : Photos avant/après des réalisations
│   ├─ "Avis" : Tous les avis clients + réponses du pro
│   └─ "Disponibilités" : Calendrier des prochaines disponibilités
├─ Actions possibles :
│   ├─ "Contacter" → Ouverture messagerie
│   ├─ "Demander un devis" → Formulaire structuré
│   ├─ "Appeler" → Numéro masqué via passerelle
│   └─ "Partager" → Lien/QR code du profil
└─ Objectif : Confirmer que ce professionnel correspond au besoin

ÉTAPE 5 — PRISE DE CONTACT
├─ Canal 1 : Messagerie interne (chat texte + photos)
├─ Canal 2 : Appel téléphonique (numéro masqué)
├─ Canal 3 : WhatsApp Business (intégration)
├─ Information échangée : Description du besoin, budget, date souhaitée
└─ Objectif : Convenir d'une date et d'un prix pour la mission

ÉTAPE 6 — MISSION EN COURS
├─ Le client et le pro se retrouvent (date/location convenues)
├─ La prestation est réalisée
├─ Paiement direct entre client et pro (hors plateforme Phase 1)
└─ Objectif : Service rendu à la satisfaction du client

ÉTAPE 7 — NOTIFICATION DE NOTATION
├─ Déclencheur : 24h après la date de mission (si renseignée)
├─ Canaux : Email + notification push + SMS (optionnel)
├─ Contenu : "Comment s'est passée votre mission avec [Nom Pro] ? Notez-la maintenant !"
└─ Lien direct vers le formulaire de notation

ÉTAPE 8 — NOTATION (COEUR DU SYSTÈME)
├─ Prérequis : Mission en statut "terminée" ou confirmation manuelle
├─ Formulaire :
│   ├─ 5 critères notés sur 5 étoiles :
│   │   ├─ Qualité du travail
│   │   ├─ Ponctualité
│   │   ├─ Communication
│   │   ├─ Rapport qualité/prix
│   │   └─ Professionnalisme
│   ├─ Commentaire texte (obligatoire, 30-500 caractères)
│   ├─ Photos du travail réalisé (optionnel, max 5)
│   ├─ Recommandation : "Recommanderiez-vous [Nom Pro] ?" Oui/Non
│   └─ Anonymat : Option "Publier anonymement"
├─ Validation : Vérification anti-fraude (IP, historique)
└─ Publication : Immédiate (client vérifié) ou après modération (nouveau)

ÉTAPE 9 — SUIVI POST-NOTATION
├─ Le pro reçoit une notification du nouvel avis
├─ Le pro peut répondre au commentaire (1 réponse max)
├─ Le score Pro est recalculé en temps réel
├─ Le leaderboard est mis à jour dans l'heure
└─ Le client peut modifier son avis sous 24h

ÉTAPE 10 — FIDÉLISATION
├─ Le client a accès à son historique de missions
├─ Favoris : Liste des pros préférés pour accès rapide
├─ Recommandations personnalisées : "Vous avez aimé [Pro X], découvrez [Pro Y]"
└─ Programme de fidélité : Badges client ("Première mission", "Avisateur", "Fidèle")
```

### 3.2 Parcours Professionnel Complet

```
┌─────────────────────────────────────────────────────────────────────┐
│                 PARCOURS PROFESSIONNEL — VERSION DÉTAILLÉE          │
└─────────────────────────────────────────────────────────────────────┘

ÉTAPE 1 — DÉCOUVERTE DE LA PLATEFORME
├─ Canal : Bouche-à-oreille, réseaux sociaux, street marketing
├─ Landing dédiée : "Développez votre activité avec Services Pro"
└─ Arguments : Gratuit, visibilité, notation = réputation

ÉTAPE 2 — INSCRIPTION
├─ Formulaire étape 1 (Compte) :
│   ├─ Email valide
│   ├─ Numéro de téléphone (+237...)
│   ├─ Mot de passe (8+ caractères, 1 majuscule, 1 chiffre)
│   └─ Rôle : "Je suis un professionnel"
├─ Vérification : Code SMS envoyé au numéro renseigné
├─ Formulaire étape 2 (Identité) :
│   ├─ Prénom et Nom
│   ├─ Photo de profil (obligatoire, visage visible)
│   ├─ Photo de couverture/bannière (optionnel, travaux en action)
│   ├─ Nom d'entreprise (si applicable)
│   ├─ Numéro de registre commerce (RCCM, optionnel mais recommandé)
│   └─ Pièce d'identité (upload CNI/passeport pour vérification)
├─ Formulaire étape 3 (Métier) :
│   ├─ Catégorie principale (dropdown des 20 catégories)
│   ├─ Sous-catégories/specialités (tags multi-sélection)
│   ├─ Niveau d'expertise (Débutant / Confirmé / Expert / Maître)
│   ├─ Années d'expérience
│   └─ Description de l'activité (bio, 100-1000 caractères)
├─ Formulaire étape 4 (Localisation & Tarifs) :
│   ├─ Ville principale
│   ├─ Quartier
│   ├─ Zone d'intervention (rayon en km)
│   ├─ Fourchette de prix (min-max en FCFA)
│   └─ Type de tarification (forfait / horaire / devis)
└─ Soumission → Statut "En attente de validation"

ÉTAPE 3 — VALIDATION ADMIN
├─ Vérification manuelle par un modérateur Services Pro (délai 24-48h)
├─ Contrôles effectués :
│   ├─ Pièce d'identité valide et cohérente
│   ├─ Photo de profil professionnelle (pas de photo inappropriée)
│   ├─ Informations cohérentes (ville, métier)
│   └─ Pas de doublon (même personne déjà inscrite)
├─ Résultat :
│   ├─ ✅ Accepté → Email de confirmation + accès complet
│   ├─ ⚠️ Demandes de précisions → Email avec questions
│   └─ ❌ Refusé → Email avec motif + possibilité de réessayer
└─ Badge "Vérifié" attribué après validation positive

ÉTAPE 4 — CONFIGURATION DU PROFIL
├─ Portfolio : Upload de photos de réalisations (max 20)
├─ Vidéo de présentation : Upload ou lien YouTube (30 secondes max)
├─ Compétences détaillées : Tags spécialisés
├─ Disponibilités :
│   ├─ Créneaux récurrents (ex: Lun-Ven 8h-18h)
│   ├─ Dates spécifiques bloquées (congés)
│   ├─ Mode "Disponible immédiatement"
│   └─ Mode "Mission urgente acceptée"
└─ Objectif : Profil à 100% pour maximiser la visibilité

ÉTAPE 5 — RÉCEPTION DES DEMANDES
├─ Notification push/email/SMS à chaque nouvelle demande
├─ Tableau de bord "Demandes reçues" :
│   ├─ Type de demande (devis, contact direct, urgence)
│   ├─ Description du besoin
│   ├─ Localisation du client
│   ├─ Budget estimé (si renseigné)
│   └─ Date souhaitée
├─ Actions possibles :
│   ├─ ✅ Accepter + message de confirmation
│   ├─ ❌ Décliner + motif (trop loin, pas disponible, hors scope)
│   └─ 💬 Demander plus d'informations
└─ Objectif : Répondre sous 24h pour maintenir un bon score

ÉTAPE 6 — RÉALISATION DE LA MISSION
├─ Le pro se rend chez le client (ou reçoit le client)
├─ La prestation est réalisée selon les termes convenus
├─ Le pro peut marquer la mission comme "terminée" dans son dashboard
└─ Le client est automatiquement notifié pour déposer un avis

ÉTAPE 7 — GESTION DES AVIS
├─ Réception de la notification "Nouvel avis"
├─ Consultation dans le tableau de bord :
│   ├─ Note détaillée par critère (radar chart)
│   ├─ Commentaire du client
│   ├─ Photos uploadées (si applicable)
│   └─ Recommandation Oui/Non
├─ Possibilité de répondre (1 réponse, modifiable sous 48h)
├─ Réponse type attendue : Professionnelle, reconnaissante, constructive
├─ Possibilité de signaler un avis (si injustifié, faux, diffamatoire)
└─ Impact : Le score Pro est recalculé, le classement peut évoluer

ÉTAPE 8 — OPTIMISATION CONTINUE
├─ Consultation du tableau de bord :
│   ├─ Score Pro et évolution (graphique)
│   ├─ Classement dans sa catégorie et ville
│   ├─ Statistiques de visibilité (vues du profil)
│   ├─ Taux de conversion (vues → contacts → missions)
│   └─ Comparaison avec la moyenne de la catégorie
├─ Actions d'amélioration :
│   ├─ Mise à jour régulière des disponibilités
│   ├─ Enrichissement du portfolio
│   ├─ Réactivité aux demandes (objectif < 1h)
│   └─ Sollicitation d'avis auprès des clients satisfaits
└─ Objectif : Progresser dans le leaderboard, débloquer des badges

ÉTAPE 9 — CROISSANCE & RECONNAISSANCE
├─ Progression dans les niveaux :
│   ├─ Débutant → Confirmé → Expert → Maître → Légende
│   └─ Chaque niveau débloque : Badge visuel, visibilité accrue, fonctionnalités
├─ Accès au "Top Pro Podium" (Top 10 de sa catégorie/ville)
├─ Badge "Trust Seal" après 10 missions 5★
├─ Opportunités de mise en avant (sélection éditoriale)
└─ Objectif : Devenir le référent dans sa spécialité et sa zone
```

### 3.3 Parcours Administrateur

```
┌─────────────────────────────────────────────────────────────────────┐
│                  PARCOURS ADMINISTRATEUR                            │
└─────────────────────────────────────────────────────────────────────┘

CONNEXION → Tableau de bord admin sécurisé (URL /admin, 2FA optionnel)

MODULE 1 — VALIDATION DES PROS
├─ File d'attente des inscriptions pro "en attente"
├─ Pour chaque inscription :
│   ├─ Voir les informations soumises
│   ├─ Voir la pièce d'identité uploadée
│   ├─ Vérifier la cohérence des informations
│   ├─ Actions : Valider / Demander précisions / Refuser
│   └─ Note interne (visible uniquement admin)
└─ Statistiques : Nombre en attente, délai moyen de validation

MODULE 2 — MODÉRATION DES AVIS
├─ File d'attente "Avis à modérer" (nouveaux clients < 3 missions)
├─ File d'attente "Avis signalés" (par des pros ou système anti-fraude)
├─ Pour chaque avis :
│   ├─ Voir le contenu complet (notes, commentaire, photos)
│   ├─ Voir le contexte (mission liée, historique client)
│   ├─ Actions : Approuver / Rejeter (avec motif) / Demander modification
│   └─ Si rejeté : Email au client avec explication
└─ Journal de toutes les actions de modération

MODULE 3 — GESTION DES SIGNALEMENTS
├─ Liste des signalements clients (problème avec un pro)
├─ Liste des signalements pros (avis injustifié, client problématique)
├─ Workflow de résolution :
│   ├─ Étape 1 : Examen du signalement (24h)
│   ├─ Étape 2 : Contact des deux parties pour recueillir les faits
│   ├─ Étape 3 : Décision (48h)
│   │   ├─ Avis fondé → Sanction graduée
│   │   └─ Avis non fondé → Classement sans suite
│   └─ Étape 4 : Application de la sanction (si applicable)
└─ Suivi des sanctions en cours

MODULE 4 — ANALYSES & STATISTIQUES
├─ KPIs globaux en temps réel :
│   ├─ Nombre d'utilisateurs (total, aujourd'hui, ce mois)
│   ├─ Nombre de pros actifs / en attente / suspendus
│   ├─ Missions créées / complétées / annulées
│   ├─ Avis déposés (approvés, rejetés, en attente)
│   ├─ Score de satisfaction global
│   └─ Taux de conversion (visite → inscription → mission)
├─ Rapports par ville, par catégorie, par période
└─ Export CSV des données

MODULE 5 — CONFIGURATION SYSTÈME
├─ Gestion des catégories (CRUD)
├─ Configuration du calcul du Pro Score (poids des critères)
├─ Seuils des niveaux et badges
├─ Messages système (notifications push, emails)
├─ Paramètres de modération (mots interdits, règles auto)
└─ Gestion des administrateurs (CRUD, permissions)
```

---

## 4. SPÉCIFICATIONS FONCTIONNELLES DÉTAILLÉES

### 4.1 Module Authentification

#### 4.1.1 Inscription Client

**Cas d'utilisation** : UC-AUTH-001 — Créer un compte client

**Acteur** : Visiteur

**Préconditions** :
- Le visiteur accède à la page d'inscription
- Le visiteur n'a pas déjà de compte avec cet email ou téléphone

**Flux nominal** :
1. Le visiteur clique sur "S'inscrire" ou "Devenir Client"
2. Le système affiche le formulaire d'inscription (étape 1)
3. Le visiteur renseigne :
   - Adresse email (format valide, unique)
   - Numéro de téléphone (+237 XXX XXX XXX, unique)
   - Mot de passe (8 caractères minimum, 1 majuscule, 1 minuscule, 1 chiffre)
   - Confirmation du mot de passe (identique)
   - Case à cocher "J'accepte les CGU"
4. Le visiteur clique sur "Continuer"
5. Le système valide les champs (en temps réel + à la soumission)
6. Le système envoie un code SMS à 4 chiffres au numéro renseigné
7. Le visiteur saisit le code de vérification (3 tentatives, validité 10 minutes)
8. Le système crée le compte avec le rôle "client"
9. Le système envoie un email de bienvenue
10. Le système redirige vers la page d'accueil connectée

**Flux alternatifs** :
- FA1 (Étape 3) : Email déjà utilisé → Message : "Cet email est déjà associé à un compte. Connectez-vous ou utilisez un autre email."
- FA2 (Étape 3) : Téléphone déjà utilisé → Message similaire
- FA3 (Étape 3) : Mot de passe trop faible → Indicateur de force + message d'aide
- FA4 (Étape 7) : Code incorrect → Message : "Code incorrect. Il vous reste X tentatives."
- FA5 (Étape 7) : Code expiré → Bouton "Renvoyer le code" (délai 60 secondes entre 2 envois)
- FA6 (Étape 7) : 3 tentatives échouées → Blocage 15 minutes + email de sécurité

**Postconditions** :
- Compte client créé et actif
- Téléphone vérifié
- Session JWT initialisée

#### 4.1.2 Inscription Professionnel

**Cas d'utilisation** : UC-AUTH-002 — Créer un compte professionnel

**Acteur** : Visiteur

**Préconditions** : Même que UC-AUTH-001

**Flux nominal** (4 étapes) :

**Étape 1 — Compte** (identique à l'inscription client)

**Étape 2 — Identité Professionnelle** :
1. Prénom (2-50 caractères, lettres uniquement)
2. Nom (2-50 caractères)
3. Nom d'entreprise (optionnel, 2-100 caractères)
4. Photo de profil (obligatoire) :
   - Formats acceptés : JPG, PNG
   - Taille max : 5 Mo
   - Dimensions recommandées : 400×400 pixels minimum
   - Contrôles : Visage visible, pas de photo de groupe, contenu approprié
   - Recadrage carré automatique proposé
5. Photo de couverture/bannière (optionnel) :
   - Dimensions recommandées : 1200×400
   - Préférence : Photo de travaux réalisés
6. Pièce d'identité (obligatoire) :
   - CNI recto-verso ou passeport
   - Formats : JPG, PNG, PDF
   - Taille max : 10 Mo par fichier
   - Usage : Vérification manuelle par l'admin
7. Numéro RCCM (optionnel, mais donne un bonus de confiance)

**Étape 3 — Activité** :
1. Catégorie principale (dropdown des 20 catégories, 1 sélection)
2. Sous-catégories/Specialités (tags multi-sélection, 1-10 tags)
   - Exemple : Plomberie → "Fuite d'eau", "Installation sanitaire", "Débouchage", "Chauffe-eau"
3. Niveau d'expertise (radio buttons) :
   - Débutant (0-2 ans)
   - Confirmé (2-5 ans)
   - Expert (5-10 ans)
   - Maître (10+ ans)
4. Années d'expérience (nombre entier, 0-50)
5. Bio/Description (100-1000 caractères)
   - Placeholder : "Décrivez votre expérience, vos spécialités et ce qui vous différencie..."
   - Compteur de caractères affiché

**Étape 4 — Localisation & Tarifs** :
1. Ville (dropdown des villes supportées)
2. Quartier (texte libre avec autocomplete)
3. Zone d'intervention (curseur, 1-100 km, défaut 10 km)
4. Fourchette de prix minimum (nombre, FCFA)
5. Fourchette de prix maximum (nombre, FCFA, > min)
6. Type de tarification (radio) :
   - Forfait (prix fixe par prestation)
   - Horaire (prix à l'heure)
   - Sur devis (estimation après visite)
7. Devis gratuit (toggle, défaut ON)

**Finalisation** :
- Le pro clique sur "Soumettre mon profil"
- Statut du compte : "En attente de validation"
- Email de confirmation envoyé : "Votre profil est en cours de vérification. Délai : 24 à 48 heures."
- Redirection vers une page d'attente avec FAQ et conseils d'optimisation

**Postconditions** :
- Compte pro créé en statut "pending_validation"
- Profil partiellement visible (pas dans les résultats de recherche)
- Notification envoyée à l'équipe de modération

#### 4.1.3 Connexion

**Cas d'utilisation** : UC-AUTH-003 — Se connecter

**Acteur** : Utilisateur enregistré (client ou pro)

**Préconditions** : Compte existant et actif

**Flux nominal** :
1. L'utilisateur accède à la page de connexion
2. Il saisit son email ou numéro de téléphone
3. Il saisit son mot de passe
4. Il clique sur "Se connecter"
5. Le système vérifie les credentials
6. Le système génère un JWT (access token 15 min + refresh token 7 jours)
7. Le système enregistre l'IP et l'user agent (sécurité)
8. Redirection vers la page d'accueil personnalisée

**Flux alternatifs** :
- FA1 : Identifiants incorrects → Message générique : "Email/téléphone ou mot de passe incorrect" (ne pas révéler si l'email existe)
- FA2 : Compte suspendu → Message : "Votre compte est temporairement suspendu. Contactez le support."
- FA3 : Compte en attente de validation (pro) → Message : "Votre profil est en cours de validation."
- FA4 : 5 tentatives échouées → Compte verrouillé 15 minutes + email d'alerte
- FA5 : Nouvel appareil détecté → Email de notification de connexion

#### 4.1.4 Mot de passe Oublié

**Cas d'utilisation** : UC-AUTH-004 — Réinitialiser le mot de passe

**Flux nominal** :
1. L'utilisateur clique "Mot de passe oublié"
2. Il saisit son email ou téléphone
3. Le système envoie un code à 6 chiffres (SMS si téléphone, email si email)
4. L'utilisateur saisit le code
5. Il définit un nouveau mot de passe (mêmes règles que l'inscription)
6. Le système met à jour le mot de passe (hachage bcrypt)
7. Notification envoyée : "Votre mot de passe a été modifié"
8. Redirection vers la connexion

#### 4.1.5 Déconnexion

**Cas d'utilisation** : UC-AUTH-005 — Se déconnecter

- Bouton "Déconnexion" dans le menu utilisateur
- Invalidation du refresh token côté serveur
- Suppression des tokens côté client (localStorage/cookies)
- Redirection vers la page d'accueil publique

#### 4.1.6 Gestion de Session

| Aspect | Spécification |
|--------|---------------|
| Access Token TTL | 15 minutes |
| Refresh Token TTL | 7 jours |
| Stockage Access Token | localStorage |
| Stockage Refresh Token | httpOnly cookie (secure, sameSite=strict) |
| Renouvellement auto | Silencieux 2 min avant expiration |
| Déconnexion auto | Si refresh token expiré → redirection login |
| Multi-appareils | Autorisé (max 3 sessions actives) |
| Révocation | Possible depuis les paramètres ("Déconnecter tous les appareils") |

---

## 5. MODULE PROFIL CLIENT

### 5.1 Informations Personnelles

| Champ | Type | Obligatoire | Validation | Modifiable |
|-------|------|-------------|------------|------------|
| Photo de profil | Image | Non | JPG/PNG, < 5Mo | Oui |
| Prénom | Texte | Oui | 2-50 caractères | Oui |
| Nom | Texte | Oui | 2-50 caractères | Oui |
| Email | Email | Oui | Unique, format valide | Oui (avec re-vérification) |
| Téléphone | Téléphone | Oui | +237..., unique | Oui (avec re-vérification SMS) |
| Ville | Dropdown | Oui | Liste des villes supportées | Oui |
| Quartier | Texte | Non | 100 caractères max | Oui |
| Date de naissance | Date | Non | 18+ ans | Non |
| Genre | Radio | Non | M/F/Non précisé | Oui |
| Langues parlées | Multi-select | Non | Français, Anglais, pidgin... | Oui |

### 5.2 Tableau de Bord Client

**Section "Mes Missions"** :
- Liste chronologique des missions (toutes, en cours, terminées, annulées)
- Pour chaque mission : Pro concerné, date, statut, action "Noter" (si terminée)

**Section "Mes Avis"** :
- Liste des avis déposés
- Pour chaque avis : Note globale, commentaire, date, statut (publié/en modération)
- Action "Modifier" (sous 24h uniquement)

**Section "Mes Favoris"** :
- Grille des pros favoris (photo, nom, catégorie, score)
- Possibilité de retirer des favoris
- Bouton "Contacter" direct

**Section "Notifications"** :
- Centre de notifications in-app
- Marquer comme lu/non lu
- Préférences de notification (email, push, SMS)

### 5.3 Compte & Sécurité

- Modification du mot de passe (ancien mot de passe requis)
- Modification de l'email (vérification par lien)
- Modification du téléphone (vérification par SMS)
- Historique des connexions (appareil, date, IP approximative)
- Déconnexion de toutes les sessions
- Suppression du compte :
  - Confirmation par email
  - Anonymisation des avis ("Utilisateur anonyme")
  - Conservation des données 30 jours puis suppression définitive
  - Possibilité de réactivation sous 30 jours

---

## 6. MODULE PROFIL PROFESSIONNEL

### 6.1 Structure du Profil Public

Le profil public d'un professionnel est la page la plus importante de la plateforme. Elle doit convertir un visiteur intéressé en client.

#### 6.1.1 En-tête du Profil

| Élément | Spécification |
|---------|---------------|
| Bannière/Couverture | 1200×400px, photo de travaux en action |
| Photo de profil | 150px diamètre, superposée à la bannière, bordure 3px |
| Bordure spéciale | Or #FFD700 si Top 10, Argent #C0C0C0 si Top 50, standard sinon |
| Badge niveau | Overlay sur la photo (coin bas-droit, 32px) |
| Nom | 28px Bold, #FFFFFF |
| Catégorie | 14px Medium, badge coloré par catégorie |
| Ville + Distance | 14px Regular, #A0A0B8 |
| Pro Score | Cercle de progression + chiffre (ex: 87/100) |
| Étoiles moyenne | 5 étoiles + note (ex: 4.8) + nombre d'avis |
| Badges ligne | Horizontale, icons cliquables pour tooltip |
| Bouton "Contacter" | Primary, pleine largeur mobile |
| Bouton "Demander un devis" | Outline, pleine largeur mobile |
| Bouton "Appeler" | Ghost, icon téléphone |
| Bouton "Partager" | Ghost, icon share |
| Statut disponibilité | Badge dynamique (vert/orange/rouge) |

#### 6.1.2 Onglets de Navigation

**Onglet "À propos"** (défaut) :
- Bio/Description du pro
- Compétences/Specialités (tags)
- Tarification (fourchette, type, devis gratuit oui/non)
- Zone d'intervention (carte avec cercle)
- Langues parlées
- Années d'expérience
- Membre depuis [date]
- Nombre de missions réalisées

**Onglet "Portfolio"** :
- Grille masonry de photos (3 colonnes desktop, 2 tablet, 1 mobile)
- Chaque photo : Avant/Après si disponible (slider toggle)
- Légende optionnelle
- Lightbox au clic (navigation fléchée)
- Vidéos intégrées (YouTube ou upload direct)

**Onglet "Avis"** (CRITIQUE) :
- Score global avec répartition (histogramme 5★→1★)
- Radar chart des 5 critères (qualité, ponctualité, communication, valeur, professionnalisme)
- Filtres : Tous / Récent / Positif (4-5★) / Critique (1-2★) / Avec réponse
- Tri : Plus récent / Plus utile / Plus positif / Plus critique
- Liste des avis (pagination 10 par page)
- Structure d'un avis :
  - Photo client (ou anonyme)
  - Nom client (ou "Client anonyme")
  - Date
  - 5 critères en étoiles (collapsible)
  - Commentaire
  - Photos du travail (si présentes)
  - Recommandation Oui/Non badge
  - Réponse du pro (si présente, encadrée)
  - Bouton "Utile" (thumbs up)
- Résumé statistique : "Basé sur 127 avis vérifiés"

**Onglet "Disponibilités"** :
- Vue calendrier (semaine par défaut)
- Jours colorés : Vert (disponible), Orange (partiellement), Rouge (indisponible)
- Créneaux horaires cliquables
- Légende explicative
- Badge "Prochaine disponibilité : [date]" en haut

### 6.2 Structure du Profil Privé (Dashboard Pro)

#### 6.2.1 Vue d'Ensemble

| Widget | Contenu | Mise à jour |
|--------|---------|-------------|
| Score Pro | Grand nombre + barre de progression + variation (↗ +2pts cette semaine) | Temps réel |
| Classement | "#12 sur 340 plombiers à Douala" + tendance | Toutes les heures |
| Vues profil | Graphique linéaire 30 jours | Temps réel |
| Demandes | Nombre nouvelles / en attente / acceptées / déclinées | Temps réel |
| Missions ce mois | Nombre + comparaison mois précédent | Temps réel |
| Prochain avis | Dernier avis reçu + note | Temps réel |

#### 6.2.2 Gestion des Disponibilités

**Interface Calendrier** :
- Vue mensuelle et hebdomadaire
- Créneaux récurrents : Configuration par jour de la semaine
  - Ex: "Tous les lundis, 8h-12h et 14h-18h"
- Dates spécifiques :
  - Bloquer une date (congé, indisponible)
  - Ajouter un créneau exceptionnel
- Mode "Disponible immédiatement" (toggle)
- Mode "Accepte missions urgentes" (toggle)
- Synchronisation possible avec Google Calendar (future)

#### 6.2.3 Gestion des Demandes

| Statut | Description | Action possible |
|--------|-------------|-----------------|
| Nouvelle | Demande reçue, non lue | Lire, Accepter, Décliner |
| En attente | Demande lue, pas encore répondu | Accepter, Décliner |
| Acceptée | Le pro a accepté | Marquer en cours, Annuler |
| En cours | Mission en cours de réalisation | Marquer terminée |
| Terminée | Mission réalisée | — |
| Déclinée | Le pro a refusé | — |
| Annulée | Annulée par le client ou le pro | — |

#### 6.2.4 Gestion des Avis

- Liste chronologique des avis reçus
- Pour chaque avis :
  - Détail complet (5 critères, commentaire, photos)
  - Bouton "Répondre" (si pas encore répondu)
  - Bouton "Signaler" (si avis problématique)
- Réponse : Textarea 500 caractères max, 1 réponse par avis
- Statistiques :
  - Évolution de la note moyenne (graphique)
  - Répartition des notes
  - Taux de recommandation

#### 6.2.5 Statistiques Avancées

| Graphique | Description |
|-----------|-------------|
| Taux de conversion | Entonnoir : Vues → Clics → Contacts → Missions |
| Évolution du score | Courbe sur 3 mois |
| Répartition des avis | Histogramme 5★ à 1★ |
| Performance par critère | Radar chart vs moyenne catégorie |
| Comparaison | Mon score vs Top 3 de ma catégorie |
| Sources de trafic | Recherche directe / Catégorie / Leaderboard |

---

## 7. MODULE RECHERCHE & FILTRAGE

### 7.1 Barre de Recherche Principale

**Position** : Centrée dans le hero de la page d'accueil + sticky header sur les pages de résultats

**Comportement** :
- Placeholder : "De quel pro avez-vous besoin ? (ex: plombier Douala)"
- Autocomplete après 2 caractères saisis
- Suggestions :
  - Catégories populaires (icon + nom)
  - Villes ("À Douala", "À Yaoundé")
  - Pros populaires (photo + nom + catégorie)
- Historique des recherches récentes (5 max, stocké localStorage)
- Recherche par geolocalisation : "Autour de moi" (permission navigateur)

### 7.2 Page de Résultats

#### 7.2.1 Filtres Avancés

| Filtre | Type | Options/Défaut |
|--------|------|----------------|
| Catégorie | Multi-select dropdown | Toutes les 20 catégories |
| Sous-catégorie | Multi-select (dépendant) | Tags de la catégorie sélectionnée |
| Ville | Dropdown | Toutes les villes supportées |
| Quartier | Texte + autocomplete | Basé sur la ville sélectionnée |
| Disponibilité | Dropdown | "Toutes", "Aujourd'hui", "Cette semaine", "Dans 3 jours", Date picker |
| Score minimum | Curseur | 0 à 100, défaut 0 |
| Prix minimum | Nombre | FCFA, défaut vide |
| Prix maximum | Nombre | FCFA, défaut vide |
| Vérifié uniquement | Toggle | OFF par défaut |
| Mode Urgence | Toggle | OFF par défaut |
| Langue | Multi-select | Français, Anglais, Bilingue |

#### 7.2.2 Options de Tri

| Option | Description |
|--------|-------------|
| **Pertinence** (défaut) | Score Pro décroissant + nombre d'avis |
| Meilleure note | Étoile moyenne décroissante |
| Plus d'avis | Nombre d'avis décroissant |
| Prix croissant | Prix minimum croissant |
| Prix décroissant | Prix minimum décroissant |
| Plus proche | Distance géographique croissante |
| Plus disponible | Disponibilité la plus proche |

#### 7.2.3 Modes d'Affichage

**Vue Cartes** (défaut) :
- Grille responsive (3 colonnes desktop, 2 tablet, 1 mobile)
- Card pro complète (définie dans le Design PRD)

**Vue Liste** :
- Liste compacte (1 colonne)
- Moins visuel, plus d'informations textuelles
- Adaptée pour la comparaison rapide

**Vue Carte** :
- Carte Google Maps/OpenStreetMap à droite (desktop) ou plein écran (mobile)
- Pins des pros géolocalisés
- Popup au clic avec info résumée
- Filtrage par zone (dessin d'un périmètre)

#### 7.2.4 Pagination & Infinite Scroll

- Desktop : Pagination numérotée (12 résultats par page)
- Mobile : Infinite scroll (charge 12 résultats supplémentaires)
- Compteur total : "234 pros trouvés"
- Skeleton loaders pendant le chargement

### 7.3 Algorithme de Recherche

**Pertinence** = pondération des facteurs :
1. Score Pro (40%)
2. Nombre d'avis (20%)
3. Disponibilité (15%)
4. Proximité géographique (15%)
5. Complétude du profil (10%)

---

## 8. MODULE TOP PRO PODIUM

### 8.1 Principe Général

Le Podium est l'élément phare de la page d'accueil. Il met en avant les meilleurs professionnels de manière visuelle et dynamique, créant un effet de désirabilité et de compétition saine.

### 8.2 Règles de Classement

**Période** : Classement du mois en cours (reset le 1er de chaque mois à 00h00)
**Base de calcul** : Pro Score à la date de snapshot
**Fréquence de mise à jour** : Toutes les heures (cache Redis)

**Catégories de classement** :
- Global (tous métiers confondus, national)
- Par catégorie (ex: "Top Plombiers")
- Par ville (ex: "Top Pros de Douala")
- Par catégorie + ville (ex: "Top Plombiers de Douala")

### 8.3 Structure Visuelle du Podium

**Podium Principal (Top 3)** :
- 3 cards disposées en forme de podium physique
- Card #1 (Or) : Centrée, plus grande, glow doré, couronne animée
- Card #2 (Argent) : Gauche, taille médium, médaille argent
- Card #3 (Bronze) : Droite, taille médium, médaille bronze
- Chaque card : Photo, nom, catégorie, score, étoiles, nombre d'avis
- Animation d'entrée : Apparition progressive avec stagger

**Liste Secondaire (Places 4-10)** :
- Tableau compact avec 7 lignes
- Colonnes : Rang, Photo miniature, Nom, Catégorie, Score, Étoiles, Tendance
- Tendance : Flèche verte (↗ monté), rouge (↘ descendu), grise (→ stable) depuis la semaine dernière

**Barre de Filtres** :
- Tabs horizontales scrollables : "Global" + chaque catégorie
- Dropdown ville : "Toutes les villes" + villes supportées
- Période affichée : "Classement Juin 2026 — Mis à jour il y a 23 minutes"

### 8.4 Animation & Interactivité

- **Entrée** : Les cards du podium apparaissent avec un effet de "montée" (translateY 50px → 0, opacity 0 → 1)
- **Stagger** : #1 délai 0ms, #2 délai 150ms, #3 délai 300ms
- **Hover** : Scale 1.03, intensification du glow, transition 300ms
- **Counter** : Les scores s'affichent avec animation de comptage (0 → valeur finale en 1.5s)
- **Confetti** : Si un pro connecté entre dans le Top 10, animation confetti doré à sa connexion

### 8.5 Mise à Jour du Podium

```
Algorithme de mise à jour (exécuté toutes les heures) :

1. Pour chaque combinaison (catégorie × ville) :
   a. Récupérer tous les pros actifs (mission dans les 60j)
   b. Trier par pro_score DESC
   c. Attribuer le rang (1, 2, 3...)
   d. Comparer avec le snapshot précédent pour la tendance
   e. Sauvegarder dans la table leaderboard_snapshots

2. Invalider le cache Redis

3. Émettre un événement SSE (Server-Sent Events) pour les clients connectés
   → Le podium se met à jour en temps réel sans refresh

4. Notifications :
   - Si un pro entre dans le Top 3 → Notification push "Félicitations ! Vous êtes #1 des plombiers à Douala !"
   - Si un pro sort du Top 10 → Notification "Vous êtes maintenant #11. Voici comment remonter..."
```

---

## 9. MODULE SYSTÈME DE NOTATION (COEUR)

### 9.1 Philosophie

Le système de notation est le **cœur battant** de Services Pro. Il doit être :
- **Transparent** : Tout le monde voit tout (même les avis négatifs)
- **Vérifié** : Seuls les clients ayant réellement eu une mission peuvent noter
- **Équilibré** : Le pro peut répondre, mais jamais modifier ou supprimer
- **Anti-fraude** : Détection automatique des comportements suspects

### 9.2 Conditions de Notation

**Prérequis stricts** (tous doivent être remplis) :
1. ✅ Le client a un compte vérifié (téléphone confirmé)
2. ✅ Une mission existe entre le client et le pro
3. ✅ La mission est en statut "terminée" (confirmée par le pro ou auto après 48h)
4. ✅ Le client n'a pas déjà noté cette mission
5. ✅ La mission date de moins de 30 jours (délai de notation)

### 9.3 Formulaire de Notation

#### Étape 1 — Les 5 Critères

Chaque critère est noté sur 5 étoiles (1 à 5) :

| Critère | Description | Poids dans le score |
|---------|-------------|---------------------|
| **Qualité du travail** | Le résultat final correspond-il à vos attentes ? | 30% |
| **Ponctualité** | Le pro est-il arrivé à l'heure convenue ? | 20% |
| **Communication** | Était-il clair, réactif et courtois ? | 20% |
| **Rapport qualité/prix** | Le prix était-il justifié par la qualité ? | 20% |
| **Professionnalisme** | Comportement, tenue, respect des lieux | 10% |

**Interface** :
- 5 lignes, une par critère
- Label à gauche, 5 étoiles interactives à droite
- Étoiles : Hover = preview jaune, Clic = confirmation
- Animation : Scale 1.2 au hover, pulse au clic
- Évaluation globale : "Note moyenne : X.X / 5" mise à jour en temps réel

#### Étape 2 — Commentaire

- **Obligatoire** (min 30 caractères)
- Max 500 caractères
- Placeholder : "Décrivez votre expérience avec [Nom Pro]. Qu'est-ce qui s'est bien passé ? Que pourrait-il améliorer ? Votre avis aide d'autres clients à faire le bon choix."
- Compteur "X/500" en bas à droite
- Validation visuelle : Bordure verte si ≥ 30 caractères, rouge si < 30
- Mots interdits automatiquement rejetés (liste maintenue par admin)

#### Étape 3 — Photos (Optionnel)

- Upload de 1 à 5 photos
- Formats : JPG, PNG
- Taille max : 5 Mo par photo
- Preview avec possibilité de suppression
- Suggestion : "Ajoutez des photos du travail réalisé (avant/après)"

#### Étape 4 — Recommandation

- Question : "Recommanderiez-vous [Nom Pro] à un ami ou un membre de votre famille ?"
- Réponse : Toggle Oui (vert) / Non (rouge)
- Usage statistique : Taux de recommandation affiché sur le profil

#### Étape 5 — Anonymat

- Toggle "Publier anonymement"
- Par défaut : OFF (avis public avec prénom)
- Si ON : Le nom est remplacé par "Client anonyme" publiquement
- **Important** : L'identité réelle reste visible pour le pro et l'admin (anti-fraude)

#### Étape 6 — Soumission

- Bouton "Soumettre mon avis" (désactivé tant que les critères + commentaire ne sont pas valides)
- État loading : Spinner + "Envoi en cours..."
- Vérification anti-fraude côté serveur (IP, comportement)
- Si suspect → Avis en statut "flagged" pour modération
- Sinon → Avis publié immédiatement

### 9.4 Publication de l'Avis

**Cas 1 — Client vérifié** (3+ missions notées précédemment) :
- Avis publié immédiatement
- Notification au pro
- Score recalculé en temps réel

**Cas 2 — Nouveau client** (< 3 missions notées) :
- Avis en statut "pending"
- File d'attente de modération
- Délai max de modération : 24h
- Si approuvé → Publication + recalcul
- Si rejeté → Email au client avec motif

### 9.5 Réponse du Professionnel

**Règles** :
- 1 réponse maximum par avis
- La réponse est publique et visible sous le commentaire
- Le pro NE peut PAS modifier ou supprimer l'avis client
- Délai de réponse : Illimité (mais recommandé sous 48h)
- Modification de la réponse possible sous 48h

**Conseils de réponse affichés** :
- "Remerciez le client pour son temps"
- "Soyez constructif si l'avis est critique"
- "Restez professionnel, même face à la critique"
- "Proposez une solution si le client a été mécontent"

**Exemples de bonnes réponses** :
- Avis positif : "Merci beaucoup [Prénom] pour votre confiance ! C'était un plaisir de travailler chez vous. N'hésitez pas pour de futurs projets ! 🙏"
- Avis critique : "Merci [Prénom] pour votre retour honnête. Je suis désolé que la ponctualité n'ait pas été au rendez-vous ce jour-là. J'ai pris des mesures pour mieux gérer mes déplacements. J'espère avoir l'occasion de vous convaincre lors d'une prochaine mission."

### 9.6 Modification & Suppression

| Action | Client | Pro | Admin |
|--------|--------|-----|-------|
| Modifier l'avis | ✅ Sous 24h | ❌ | ❌ (sauf faute grave) |
| Supprimer l'avis | ❌ | ❌ | ✅ (avec motif tracé) |
| Répondre | ❌ | ✅ (1 fois) | ❌ |
| Modifier sa réponse | ❌ | ✅ Sous 48h | ❌ |
| Signaler | ✅ | ✅ | — |

### 9.7 Système Anti-Fraude

**Détections automatiques** (flag l'avis pour modération) :
1. **Même IP** : Le client et le pro partagent la même IP
2. **Même téléphone** : Le numéro client correspond à un connu du pro
3. **Timing suspect** : Mission créée et notée dans la même heure
4. **Contenu** : Mots-clés suspects, copié-collé d'un autre avis
5. **Profil** : Client créé récemment, 1 seule mission, note extrême (1★ ou 5★)
6. **Burst** : Plusieurs avis identiques reçus par le pro en peu de temps
7. **Self-review** : Le client a les mêmes nom/prénom que le pro (famille)

**Actions en cas de fraude détectée** :
- 1ère fois : Avis rejeté, avertissement au pro
- 2ème fois : Suspension pro 7 jours
- 3ème fois : Bannissement permanent du pro, avis supprimés

---

## 10. MODULE TABLEAU DE BORD PRO

### 10.1 Dashboard Principal

Le tableau de bord est la page d'atterrissage par défaut pour un professionnel connecté. Il doit donner une vue d'ensemble complète et inciter à l'action.

#### Widgets Principaux

**Widget "Mon Score"** (en haut, large) :
- Score actuel (grand chiffre, ex: 87)
- Barre de progression 0-100 avec couleur dynamique :
  - 0-30 : Rouge
  - 31-60 : Orange
  - 61-80 : Bleu
  - 81-95 : Vert
  - 96-100 : Or
- Variation : "+3 pts cette semaine" ou "-1 pt cette semaine"
- Objectif suivant : "Il vous manque 4 pts pour atteindre le niveau Expert"

**Widget "Mon Classement"** :
- "#12 sur 340 plombiers à Douala"
- Tendance : Flèche + "Vous êtes monté de 3 places cette semaine"
- Mini-graphique d'évolution sur 30 jours
- Comparaison : "Moyenne des plombiers à Douala : 72 pts — Vous : 87 pts"

**Widget "Mes Vues"** :
- Graphique linéaire : Vues du profil sur 30 jours
- Total ce mois : "456 vues"
- vs mois précédent : "+23%"

**Widget "Mes Demandes"** :
- 4 statuts avec compteurs : Nouvelles (3) | En attente (1) | Acceptées (8) | Déclinées (2)
- Liste des 3 dernières demandes avec action rapide

**Widget "Mes Missions"** :
- Compteur du mois : "12 missions ce mois"
- vs objectif : "Objectif : 15 — Il vous manque 3"
- Graphique en barres : Missions par semaine

### 10.2 Calendrier de Disponibilités

**Interface** :
- Vue mensuelle par défaut
- Jours colorés :
  - 🟢 Vert : Disponible (créneaux configurés)
  - 🟠 Orange : Partiellement (quelques créneaux)
  - 🔴 Rouge : Bloqué (congé ou indisponible)
  - ⚪ Gris : Non configuré
- Clic sur un jour → Modal d'édition des créneaux
- Glisser-déposer pour sélectionner plusieurs jours

**Configuration des Créneaux** :
- Par défaut : Lundi au Vendredi, 8h-18h
- Granularité : 30 minutes
- Répétition : "Appliquer à toutes les semaines" toggle
- Exceptions : "Bloquer ce jour spécifique"

**Modes Spéciaux** :
- 🟢 "Disponible immédiatement" : Toggle visible sur le profil
- 🚨 "Accepte missions urgentes" : Badge spécial, notifications prioritaires
- 🌴 "Mode congés" : Bloque toutes les dates d'une période

### 10.3 Gestion des Avis

**Vue d'ensemble** :
- Note moyenne globale avec étoiles
- Répartition : 5★ (89), 4★ (32), 3★ (5), 2★ (1), 1★ (2)
- Radar chart des 5 critères
- "Taux de recommandation : 94%"

**Liste des Avis** :
- Filtres : Tous / À répondre / Signalés / Positifs (4-5★) / Critiques (1-3★)
- Pour chaque avis :
  - Card avec photo client, nom, date, étoiles
  - Commentaire complet
  - Photos (si présentes)
  - Bouton "Répondre" ou "Voir ma réponse"
  - Bouton "Signaler" (icon flag)

**Réponse** :
- Modal textarea (max 500 caractères)
- Compteur de caractères
- Preview avant envoi
- Bouton "Publier ma réponse"

### 10.4 Statistiques Avancées

**Onglet "Performance"** :
- Graphique d'évolution du score (courbe sur 3 mois)
- Comparaison avec Top 3 de la catégorie
- Objectifs personnalisés : "Pour atteindre le Top 10, améliorez votre réactivité"

**Onglet "Conversion"** :
- Entonnoir : Vues du profil → Clics "Contacter" → Demandes acceptées → Missions réalisées
- Taux de conversion à chaque étape
- Comparaison avec la moyenne de la catégorie

**Onglet "Sources"** :
- Répartition du trafic :
  - Recherche directe : 45%
  - Catégorie : 25%
  - Leaderboard : 15%
  - Favoris/Direct : 10%
  - Autres : 5%

---

## 11. MODULE MESSAGERIE

### 11.1 Conversations

**Liste des Conversations** (sidebar gauche) :
- Photo du correspondant, nom, dernier message, date
- Badge non lu (compteur)
- Statut en ligne (vert) / dernière connexion
- Recherche dans les conversations
- Possibilité d'archiver ou de supprimer une conversation

**Conversation Individuelle** (zone centrale) :
- Header : Photo, nom, statut, bouton "Voir profil", bouton "Appeler"
- Zone de messages : Style chat bulles (client à droite, pro à gauche)
- Types de messages :
  - Texte
  - Image (upload direct, max 5 Mo)
  - Localisation (partage GPS)
- Templates rapides (pro) :
  - "Bonjour, merci pour votre intérêt. Je suis disponible pour en discuter."
  - "Pourriez-vous m'envoyer plus de détails sur votre projet ?"
  - "Je peux me déplacer sur [zone]. Quand seriez-vous disponible ?"
- Statuts : Envoyé → Lu → Répondu
- Horodatage : Groupé par jour ("Aujourd'hui", "Hier", "Lundi 12 mai")

### 11.2 Notifications Messages

- Push notification : "Nouveau message de [Nom]"
- Email (si non lu sous 1h) : Résumé du message
- Badge sur l'icon messagerie dans le header
- Son de notification (désactivable)

### 11.3 Sécurité & Modération

- Signalement de conversation (spam, harcèlement)
- Blocage d'utilisateur
- Filtrage automatique des numéros de téléphone (incite à rester sur la plateforme)
- Logs de toutes les conversations (conservation 6 mois)

---

## 12. MODULE ADMINISTRATION

### 12.1 Authentification Admin

- URL distincte : `/admin`
- Authentification standard + 2FA optionnel (TOTP)
- Rôles : super_admin, moderator, support
- Journal de connexion (IP, user agent, date)
- Timeout de session : 30 minutes d'inactivité

### 12.2 Dashboard Administrateur

**KPIs Globaux** (temps réel) :
| Indicateur | Description |
|------------|-------------|
| Utilisateurs totaux | Clients + Pros |
| Inscriptions aujourd'hui | Nombre et variation |
| Pros actifs | Ayant reçu une demande dans les 30j |
| Pros en attente | File de validation |
| Missions ce mois | Créées, complétées, annulées |
| Avis ce mois | Déposés, en modération, rejetés |
| Taux de satisfaction | Note moyenne globale |
| Signalements en cours | Requérant une action |

**Graphiques** :
- Courbe d'inscriptions (30 jours)
- Répartition par ville (carte choroplèthe)
- Répartition par catégorie (diagramme circulaire)
- Activité horaire (heatmap)

### 12.3 Validation des Professionnels

**File d'Attente** :
- Tableau triable : Date, Nom, Catégorie, Ville, Statut
- Filtres : Tous / En attente / Validés / Refusés / En attente de précisions

**Processus de Validation** :
1. Cliquer sur une inscription → Vue détaillée
2. Examiner :
   - Photo de profil (appropriée ? professionnelle ?)
   - Pièce d'identité (valide ? correspond au nom ?)
   - Cohérence des informations
3. Actions :
   - ✅ **Valider** → Compte actif, email de confirmation, badge "Vérifié"
   - ⚠️ **Demander des précisions** → Email au pro avec questions, statut "on_hold"
   - ❌ **Refuser** → Email avec motif détaillé, possibilité de réinscrire
4. Note interne (champ texte, visible uniquement admin)

**Délai de Service** : Validation sous 24h ouvrées (objectif 95% des cas)

### 12.4 Modération des Avis

**File d'Attente "Avis à Modérer"** :
- Avis de nouveaux clients (< 3 missions notées)
- Avis signalés automatiquement (anti-fraude)
- Avis signalés manuellement (par un pro)

**Interface de Modération** :
- Vue côte-à-côte : Avis en question | Contexte (mission, historique client)
- Actions :
  - ✅ **Approuver** → Avis publié, score recalculé
  - ❌ **Rejeter** → Avis supprimé, email au client avec motif :
    - "Contenu inapproprié"
    - "Preuve de fraude"
    - "Hors sujet"
    - "Autre (préciser)"
  - ✏️ **Demander modification** → Email au client
- Journal de toutes les actions (qui, quand, quoi, pourquoi)

### 12.5 Gestion des Signalements

**Types de Signalements** :
| Type | Description | Priorité |
|------|-------------|----------|
| Pro absent | Le pro ne s'est pas présenté à la mission | Haute |
| Surfacturation | Prix supérieur à ce qui était convenu | Haute |
| Travail non conforme | Qualité insuffisante | Haute |
| Comportement | Pro irrespectueux ou inapproprié | Critique |
| Fraude avis | Soupçon d'avis fictif | Haute |
| Spam | Contenu publicitaire non sollicité | Moyenne |
| Autre | À préciser par le signaleur | Selon contenu |

**Workflow de Résolution** :
1. **Réception** : Signalement enregistré, priorité assignée
2. **Examen** (délai selon priorité : critique < 4h, haute < 24h, moyenne < 48h)
3. **Contact** : Email aux deux parties pour recueillir les faits
4. **Décision** :
   - Sans suite : Signalement non fondé
   - Avertissement : Écrit au concerné
   - Suspension temporaire : 7 ou 30 jours
   - Bannissement : Exclusion définitive
5. **Notification** : Les deux parties sont informées de la décision
6. **Archivage** : Signalement clôturé avec motif

### 12.6 Gestion des Catégories

- CRUD complet des 20 catégories
- Gestion des sous-catégories (tags) par catégorie
- Réordonnancement (drag & drop)
- Activation/Désactivation
- Icônes associées (upload SVG)

### 12.7 Configuration Système

**Paramètres du Pro Score** :
- Poids des 5 critères (défaut : 30/20/20/20/10)
- Bonus vérification (+5 pts)
- Bonus ancienneté (+2 pts/année)
- Pénalité inactivité (-2 pts/mois après 60j)

**Seuils des Niveaux** :
| Niveau | Missions | Score Min | Autres conditions |
|--------|----------|-----------|-------------------|
| Débutant | 0-4 | 0 | Inscription |
| Confirmé | 5+ | 70 | — |
| Expert | 15+ | 80 | — |
| Maître | 30+ | 90 | — |
| Légende | 50+ | 95 | — |

**Seuils des Badges** :
- Badge "Réactif" : Temps de réponse moyen < 1h sur 10+ demandes
- Badge "Fidélité" : 50%+ de clients récurrents
- Badge "Urgence" : 50+ missions en mode urgent acceptées
- Badge "Trust Seal" : 10 missions consécutives notées 5★

---

## 13. MODULE NOTIFICATIONS

### 13.1 Types de Notifications

#### Pour les Professionnels

| Code | Événement | Canaux | Priorité |
|------|-----------|--------|----------|
| PRO-001 | Nouvelle demande de contact | Push + SMS | Haute |
| PRO-002 | Nouvel avis reçu | Push + Email | Haute |
| PRO-003 | Réponse à un avis approuvée | Push | Normale |
| PRO-004 | Changement de classement (Top 10) | Push + Email | Haute |
| PRO-005 | Badge débloqué | Push + Email | Normale |
| PRO-006 | Demande de validation (résultat) | Email | Haute |
| PRO-007 | Signalement reçu | Email + SMS | Critique |
| PRO-008 | Rappel : Mise à jour dispos (inactif 7j) | Email | Normale |
| PRO-009 | Nouveau message | Push | Normale |
| PRO-010 | Profil consulté X fois ce mois | Email (hebdo) | Basse |
| PRO-011 | Objectif de niveau proche | Push | Normale |
| PRO-012 | Newsletter hebdo | Email | Basse |

#### Pour les Clients

| Code | Événement | Canaux | Priorité |
|------|-----------|--------|----------|
| CLI-001 | Réponse du pro à une demande | Push + Email | Haute |
| CLI-002 | Rappel de notation (24h post-mission) | Push + SMS + Email | Haute |
| CLI-003 | Avis modéré (approuvé/rejeté) | Email | Normale |
| CLI-004 | Réponse du pro à votre avis | Push | Normale |
| CLI-005 | Pro favori devenu disponible | Push | Normale |
| CLI-006 | Nouveau message | Push | Normale |
| CLI-007 | Newsletter (Top pros, conseils) | Email | Basse |
| CLI-008 | Mission terminée (confirmation) | Push | Normale |

#### Pour les Administrateurs

| Code | Événement | Canaux | Priorité |
|------|-----------|--------|----------|
| ADM-001 | Nouvelle inscription pro en attente | Email | Normale |
| ADM-002 | Avis signalé (fraude/auto) | Email | Haute |
| ADM-003 | Signalement utilisateur | Email + SMS | Critique |
| ADM-004 | Objectif quotidien atteint | Email (résumé) | Basse |
| ADM-005 | Alerte sécurité (tentative intrusion) | SMS + Email | Critique |

### 13.2 Centre de Notifications

- Accessible depuis l'icon cloche dans le header
- Badge rouge avec compteur de non lus
- Liste chronologique (infinite scroll)
- Groupage par jour
- Actions :
  - Marquer comme lu (un ou tous)
  - Archiver
  - Cliquer → Navigation vers l'élément concerné
- Préférences de notification (lien vers paramètres)

### 13.3 Préférences Utilisateur

Par type de notification et par canal :

| Notification | Push | Email | SMS |
|--------------|------|-------|-----|
| Demandes/Missions | ON | ON | OFF |
| Avis | ON | ON | OFF |
| Messages | ON | OFF | OFF |
| Classement/Badges | ON | OFF | OFF |
| Newsletter | OFF | ON | OFF |
| Sécurité | ON | ON | ON |

---

## 14. RÈGLES MÉTIER CRITIQUES

### Règle 1 — Vérification de Mission pour Notation
> **Un client ne peut noter un professionnel que si une mission a été créée et marquée comme "terminée" entre eux deux.**

Implémentation : Vérification en base de données (table missions, statut = 'completed')

### Règle 2 — Unicité de la Notation par Mission
> **Un client ne peut déposer qu'un seul avis par mission.**

Implémentation : Contrainte UNIQUE sur (mission_id, client_id) dans la table reviews

### Règle 3 — Délai de Modification d'Avis
> **Un avis ne peut être modifié que dans les 24 heures suivant sa publication.**

Implémentation : Champ updated_at, vérification (NOW() - created_at) < INTERVAL '24 hours'

### Règle 4 — Suppression d'Avis Interdite (Client & Pro)
> **Ni le client ni le professionnel ne peut supprimer un avis. Seul un administrateur peut le faire, avec motif tracé.**

Implémentation : Pas d'endpoint DELETE /reviews/:id pour les rôles client/pro. Endpoint admin avec journalisation.

### Règle 5 — Calcul Temps Réel du Pro Score
> **Le Pro Score est recalculé immédiatement après la publication de chaque nouvel avis.**

Implémentation : Trigger PostgreSQL ou callback après création d'un review

### Règle 6 — Mise à Jour du Leaderboard
> **Le leaderboard est mis à jour toutes les heures via un job cron.**

Implémentation : Cron job (node-cron) tournant toutes les heures, invalide le cache Redis

### Règle 7 — Pénalité d'Inactivité
> **Un professionnel sans mission terminée depuis 60 jours perd 2 points par mois sur son Pro Score (minimum 0).**

Implémentation : Vérification mensuelle, champ last_mission_date dans pro_details

### Règle 8 — Masquage des Avis Signalés
> **Un avis signalé est immédiatement masqué du profil public en attendant la modération (délai max 24h).**

Implémentation : Champ status dans reviews, filtrage dans les requêtes publiques

### Règle 9 — Sanctions Graduelles
> **Trois signalements fondés contre un professionnel entraînent la suspension automatique de son compte.**

| Signalement | Sanction |
|-------------|----------|
| 1er | Avertissement écrit |
| 2ème | Suspension 7 jours |
| 3ème | Suspension 30 jours |
| 4ème | Bannissement définitif |

### Règle 10 — Vérification du Badge "Vérifié"
> **Le badge "Vérifié" n'est attribué qu'après validation manuelle par un administrateur de la pièce d'identité et du numéro de téléphone.**

Implémentation : Champ id_verified_at et phone_verified_at doivent être non NULL

### Règle 11 — Conservation des Données
> **Les données personnelles sont conservées 3 ans maximum après la dernière activité, conformément à la loi camerounaise.**

Implémentation : Job mensuel d'anonymisation des comptes inactifs > 3 ans

### Règle 12 — Unicité Contact
> **Un client et un pro ne peuvent avoir qu'une seule conversation active. Tous les messages sont regroupés dans la même thread.**

Implémentation : Contrainte UNIQUE sur (client_id, pro_id) dans la table conversations

### Règle 13 — Limitation des Photos
> **Un professionnel ne peut uploader que 20 photos maximum dans son portfolio. Chaque photo ne doit pas dépasser 5 Mo.**

Implémentation : Vérification côté client + côté serveur

### Règle 14 — Réponse Unique aux Avis
> **Un professionnel ne peut répondre qu'une seule fois à un avis donné. La réponse peut être modifiée dans les 48 heures.**

Implémentation : Champ pro_response (texte), pro_responded_at (timestamp), vérification (NOW() - pro_responded_at) < INTERVAL '48 hours'

### Règle 15 — Géolocalisation Approximative
> **L'adresse exacte d'un professionnel n'est jamais affichée publiquement. Seule la ville, le quartier et une localisation approximative sur carte sont visibles.**

Implémentation : Stockage lat/lng avec jitter aléatoire (±200m) pour l'affichage public

---

## 15. RÈGLES DE GAMIFICATION

### 15.1 Système de Niveaux

| Niveau | Icône | Missions Min | Score Min | Visibilité |
|--------|-------|--------------|-----------|------------|
| **Débutant** | 🌱 | 0 | 0 | Standard |
| **Confirmé** | 🥉 | 5 | 70 | +20% visibilité |
| **Expert** | 🥈 | 15 | 80 | +50% visibilité, badge sur profil |
| **Maître** | 🥇 | 30 | 90 | +100% visibilité, page d'accueil |
| **Légende** | 💎 | 50 | 95 | +200% visibilité, profil vedette |

**Déclenchement** : Vérification automatique à chaque nouvelle mission terminée. Si les conditions sont remplies → Notification + Badge attribué.

### 15.2 Système de Badges

#### Badges de Niveau
| Badge | Condition | Apparence |
|-------|-----------|-----------|
| Débutant | Inscription complète | Cercle gris, lettre "D" |
| Confirmé | 5 missions, score ≥ 70 | Cercle bronze, étoile |
| Expert | 15 missions, score ≥ 80 | Cercle argent, 2 étoiles |
| Maître | 30 missions, score ≥ 90 | Cercle or, 3 étoiles |
| Légende | 50 missions, score ≥ 95 | Cercle diamant, couronne |

#### Badges Spéciaux
| Badge | Condition | Apparence |
|-------|-----------|-----------|
| Vérifié | ID + téléphone validés par admin | Coche verte dans cercle |
| Réactif | Temps de réponse moyen < 1h | Éclair bleu |
| Fidélité | 50%+ clients récurrents | Cœur rose |
| Urgence | 50 missions urgentes acceptées | Flamme rouge |
| Trust Seal | 10 missions consécutives 5★ | Sceau doré |
| Photographe | 15+ photos dans le portfolio | Appareil photo |
| Populaire | 100+ vues du profil cette semaine | Graphique montant |
| Passeport | Missions dans 3+ villes différentes | Globe |

### 15.3 Récompenses & Motivations

**Motivation Extrinsèque** :
- Visibilité accrue dans les résultats de recherche
- Place sur le podium (Top 10)
- Badge "Trust Seal" = confiance immédiate des clients
- Mise en avant sur les réseaux sociaux de Services Pro
- Newsletter "Pros du Mois"

**Motivation Intrinsèque** :
- Satisfaction de voir son score augmenter
- Fierté d'être dans le Top 10
- Reconnaissance par les pairs
- Amélioration continue (feedback des clients)

### 15.4 Parcours de Progression

```
Jour 1-7 :    Débutant
               Objectif : Compléter son profil à 100%
               Action : Configurer dispos, upload portfolio

Semaine 2-4 : Débutant → Confirmé
               Objectif : Réaliser 5 missions
               Action : Répondre vite, faire du bon travail

Mois 2-3 :    Confirmé → Expert
               Objectif : Atteindre 15 missions, score > 80
               Action : Solliciter des avis, répondre aux commentaires

Mois 4-6 :    Expert → Maître
               Objectif : Atteindre 30 missions, score > 90
               Action : Viser le Top 10 de sa catégorie

Mois 7-12 :   Maître → Légende
               Objectif : Atteindre 50 missions, score > 95
               Action : Maintenir l'excellence, devenir le référent
```

---

## 16. EXIGENCES NON-FONCTIONNELLES

### 16.1 Performance

| Indicateur | Objectif | Méthode de mesure |
|------------|----------|-------------------|
| First Contentful Paint | < 1.5s | Lighthouse |
| Largest Contentful Paint | < 2.5s | Lighthouse |
| Time to Interactive | < 3.5s | Lighthouse |
| Cumulative Layout Shift | < 0.1 | Lighthouse |
| Temps de réponse API (p50) | < 200ms | Monitoring serveur |
| Temps de réponse API (p95) | < 500ms | Monitoring serveur |
| Temps de recherche | < 300ms | Test utilisateur |
| Temps de chargement page profil | < 2s | Lighthouse |

### 16.2 Disponibilité

- **Uptime cible** : 99.5% (hors maintenance planifiée)
- **Maintenance planifiée** : Maximum 2h/mois, annoncée 48h à l'avance
- **Temps de récupération** (RTO) : < 1h
- **Point de récupération** (RPO) : < 15 minutes

### 16.3 Sécurité

| Menace | Contre-mesure |
|--------|---------------|
| Injection SQL | Requêtes paramétrées (prepared statements), ORM |
| XSS | Échappement HTML (React auto), CSP headers |
| CSRF | Tokens CSRF, SameSite cookies |
| Brute force login | Rate limiting (5 tentatives/15min), captcha après échecs |
| Upload malveillant | Vérification MIME, scan antivirus, sandbox |
| JWT volé | Short TTL (15min), refresh token rotation, fingerprinting |
| Enumeration email | Message générique "Identifiants incorrects" |
| Session hijacking | Fingerprinting, invalidation multi-appareils |

### 16.4 Scalabilité

- **Utilisateurs simultanés** : 1 000 (Phase 1), 10 000 (Phase 2), 50 000 (Phase 3)
- **Pros enregistrés** : 500 (Phase 1), 5 000 (Phase 2), 25 000 (Phase 3)
- **Architecture** : Stateless API, scalable horizontalement
- **Cache** : Redis pour sessions, leaderboard, résultats de recherche
- **CDN** : Assets statiques (images, CSS, JS)
- **Base de données** : Lecture répliquée, sharding si nécessaire Phase 3

### 16.5 Accessibilité (WCAG 2.1 AA)

- Contraste texte/fond ≥ 4.5:1 (normal), ≥ 3:1 (grand texte/UI)
- Navigation complète au clavier (Tab, Enter, Escape, flèches)
- ARIA labels sur tous les éléments interactifs
- Lecteur d'écran compatible (headings structurés, alt text)
- Focus visible sur tous les éléments interactifs
- Pas de dépendance à la couleur seule (icônes + texte)
- Réduction de mouvement respectée (prefers-reduced-motion)

### 16.6 Compatibilité Navigateurs

| Navigateur | Versions supportées |
|------------|---------------------|
| Chrome | 2 dernières versions |
| Firefox | 2 dernières versions |
| Safari | 2 dernières versions |
| Edge | 2 dernières versions |
| Chrome Mobile | 2 dernières versions |
| Safari iOS | 2 dernières versions |
| Samsung Internet | Dernière version |

### 16.7 SEO

- URLs propres et sémantiques : `/pro/jean-kouam-plombier-douala`
- Meta tags dynamiques par page (title, description, OG)
- Schema.org LocalBusiness pour chaque profil de pro
- Sitemap XML auto-généré (mis à jour quotidiennement)
- robots.txt optimisé
- Performance Core Web Vitals (critère Google ranking)
- Contenu texte riche et unique (bios, avis)

---

## 17. GESTION DES ERREURS & CAS LIMITE

### 17.1 Erreurs Système

| Code | Situation | Message Utilisateur | Action |
|------|-----------|---------------------|--------|
| ERR-001 | Serveur indisponible (500) | "Une erreur est survenue. Notre équipe a été notifiée. Veuillez réessayer dans quelques minutes." | Retry automatique ×3, puis bouton "Réessayer" |
| ERR-002 | Timeout API | "Le service met trop de temps à répondre. Vérifiez votre connexion et réessayez." | Retry avec backoff exponentiel |
| ERR-003 | Rate limiting (429) | "Trop de requêtes. Veuillez patienter quelques instants." | Compte à rebours affiché |
| ERR-004 | Connexion perdue | "Vous semblez hors ligne. Certaines fonctionnalités sont indisponibles." | Mode offline, actions en file d'attente |

### 17.2 Cas Limite Métier

| Cas | Comportement Attendu |
|-----|----------------------|
| Pro supprime son compte | Profil masqué, avis conservés avec "Compte fermé", score figé |
| Client supprime son compte | Avis anonymisés ("Utilisateur anonyme"), missions conservées |
| Pro suspendu | Profil masqué des résultats, badge "Compte suspendu" si accès direct |
| Avis sur un pro disparu | Avis conservés, mention "Ce pro a fermé son compte" |
| Mission annulée | Impossible à noter, pas d'impact sur les scores |
| Égalité de score au leaderboard | Départagé par nombre d'avis, puis ancienneté |
| Score = 0 (nouveau pro) | Affichage "Nouveau" au lieu du score, badge débutant |
| Notation sans les 5 critères | Impossible — formulaire bloqué tant que tous critères non notés |
| Commentaire < 30 caractères | Validation front + back, message : "Votre commentaire doit faire au moins 30 caractères" |
| Upload photo > 5 Mo | Rejet avec message : "La photo ne doit pas dépasser 5 Mo" |
| Ville non couverte | Message : "Services Pro n'est pas encore disponible dans votre ville. Inscrivez-vous pour être informé de notre arrivée !" |
| Navigateur incompatible | Page de mise à jour suggérant Chrome/Firefox récents |

### 17.3 Messages de Confirmation

| Action | Message |
|--------|---------|
| Inscription réussie | "Bienvenue sur Services Pro ! Votre compte a été créé avec succès." |
| Avis publié | "Merci ! Votre avis a été publié et aide la communauté Services Pro." |
| Avis en modération | "Merci ! Votre avis est en cours de vérification et sera publié sous 24h." |
| Réponse au pro | "Votre réponse a été publiée." |
| Demande envoyée | "Votre demande a été envoyée à [Nom Pro]. Vous serez notifié de sa réponse." |
| Profil mis à jour | "Vos modifications ont été enregistrées." |
| Disponibilités mises à jour | "Vos disponibilités ont été mises à jour." |

---

## 18. GLOSSAIRE

| Terme | Définition |
|-------|------------|
| **Avis** | Évaluation déposée par un client après une mission, comprenant 5 critères en étoiles, un commentaire et optionnellement des photos |
| **Badge** | Icône visuelle attribuée à un professionnel en récompense d'une réalisation ou caractéristique (ex: Vérifié, Expert, Réactif) |
| **Catégorie** | Domaine professionnel général (ex: Plomberie, Électricité) regroupant plusieurs sous-catégories |
| **Client** | Utilisateur inscrit recherchant un professionnel pour une prestation de services |
| **Dashboard** | Tableau de bord personnel affichant les statistiques, demandes et outils de gestion |
| **FCFA** | Franc CFA, devise utilisée au Cameroun (1 EUR ≈ 655,957 FCFA) |
| **Leaderboard** | Classement public des professionnels par score, catégorie et/ou ville |
| **Mission** | Prestation de service réalisée par un professionnel pour un client, identifiable et traçable dans le système |
| **Mode Urgent** | Type de demande nécessitant une intervention sous 24 heures |
| **Notation P2P** | Système d'évaluation Peer-to-Peer où le client évalue directement le professionnel après transaction |
| **Podium** | Visuel des 3 meilleurs professionnels d'une catégorie/ville, affiché en page d'accueil |
| **Pro** | Abréviation de Professionnel, prestataire de services inscrit sur la plateforme |
| **Pro Score** | Score composite sur 100 points représentant la qualité globale d'un professionnel, calculé à partir de 5 critères pondérés |
| **Réponse (avis)** | Commentaire publié par un professionnel en réponse à un avis client, visible publiquement |
| **Sous-catégorie** | Spécialisation au sein d'une catégorie (ex: "Fuite d'eau" dans Plomberie) |
| **Trust Seal** | Badge doré spécial attribué après 10 missions consécutives notées 5 étoiles, symbole de confiance absolue |
| **Vérifié** | Statut attribué après validation manuelle par l'équipe Services Pro de l'identité et du téléphone du professionnel |
| **Widget** | Composant d'interface affichant une information ou statistique spécifique sur le dashboard |
| **WCAG** | Web Content Accessibility Guidelines, normes d'accessibilité web |
| **JWT** | JSON Web Token, méthode d'authentification par token signé |

---

## ANNEXES

### Annexe A — Modèle de Données (Résumé)

```
users (id, email, phone, password_hash, role, is_verified, is_active, created_at)
  │
  ├── profiles (id, user_id, type, first_name, last_name, avatar_url, city, ...)
  │     │
  │     ├── pro_details (id, profile_id, category_id, pro_score, total_reviews, ...)
  │     │     ├── availability_slots (id, pro_id, day_of_week, start_time, ...)
  │     │     └── portfolio_items (id, pro_id, image_url, caption, ...)
  │     │
  │     ├── missions (id, client_id, pro_id, status, scheduled_date, ...)
  │     │     └── reviews (id, mission_id, client_id, pro_id, overall_rating, comment, ...)
  │     │
  │     ├── conversations (id, client_id, pro_id, created_at)
  │     │     └── messages (id, conversation_id, sender_id, content, created_at)
  │     │
  │     └── user_badges (id, user_id, badge_id, earned_at)
  │
  └── activity_logs (id, user_id, action, entity_type, entity_id, created_at)

categories (id, slug, name_fr, name_en, icon, display_order)
badges (id, slug, name_fr, name_en, icon_url, color, condition_type, condition_value)
leaderboard_snapshots (id, category_id, city, period_month, rankings, created_at)
```

### Annexe B — Calendrier de Développement (Indicatif)

| Phase | Durée | Livrables |
|-------|-------|-----------|
| Conception | 2 semaines | Spécifications finales, maquettes validées |
| Développement Backend | 6 semaines | API, base de données, authentification |
| Développement Frontend | 6 semaines | Pages, composants, intégrations API |
| Tests & QA | 3 semaines | Tests fonctionnels, performance, sécurité |
| Bêta fermée | 2 semaines | Retours utilisateurs, corrections |
| Lancement | 1 semaine | Mise en production, monitoring |

**Total estimé : 20 semaines (5 mois)**

---

*Document rédigé le 31 mai 2026 — Version 1.0.0*
*Services Pro — Plateforme de mise en relation professionnelle au Cameroun*

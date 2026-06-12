# SERVICES PRO — ASSET INVENTORY

---

## TABLE DES MATIÈRES

1. Vue d'Ensemble
2. Logos & Branding
3. Icônes du Système
4. Photos & Illustrations
5. Vidéos
6. Polices de Caractères
7. Sons & Audio
8. Animations Lottie
9. Vérification des Assets

---

## 1. VUE D'ENSEMBLE

### 1.1 Inventaire Complet

| Catégorie | Nombre d'assets | Format principal | Poids total estimé |
|-----------|----------------|------------------|--------------------|
| Logos & Branding | 5 fichiers | SVG, PNG | < 200 Ko |
| Icônes système | 40+ icônes | SVG (inline) | < 100 Ko |
| Photos profils démo | 15 fichiers | JPG | < 1 Mo |
| Photos portfolio démo | 30 fichiers | JPG | < 3 Mo |
| Photos bannières | 10 fichiers | JPG | < 2 Mo |
| Illustrations empty states | 6 fichiers | SVG | < 300 Ko |
| Illustrations sections | 4 fichiers | SVG/PNG | < 500 Ko |
| Vidéos | 1 fichier | MP4 | < 3 Mo |
| Polices | 4 fichiers | WOFF2 | < 200 Ko |
| Sons | 2 fichiers | MP3 | < 50 Ko |
| **TOTAL** | **~115 fichiers** | — | **~10 Mo** |

### 1.2 Conventions de Nommage

```
{catégorie}-{sujet}-{variante}.{extension}

Exemples:
- logo-dark.svg
- logo-light.svg
- icon-category-plomberie.svg
- photo-pro-01.jpg
- photo-portfolio-plomberie-01.jpg
- illustration-empty-search.svg
- sound-notification.mp3
```

### 1.3 Hiérarchie des Dossiers

```
public/
├── assets/
│   ├── logo/
│   │   ├── logo-dark.svg
│   │   ├── logo-light.svg
│   │   ├── logo-icon.svg
│   │   ├── favicon.ico
│   │   └── og-image.jpg
│   ├── icons/
│   │   └── (générés via Lucide React — pas de fichiers statiques)
│   ├── images/
│   │   ├── hero-bg.jpg
│   │   ├── hero-bg-mobile.jpg
│   │   ├── how-it-works-1.svg
│   │   ├── how-it-works-2.svg
│   │   ├── how-it-works-3.svg
│   │   └── cta-pro.png
│   ├── illustrations/
│   │   ├── empty-search.svg
│   │   ├── empty-reviews.svg
│   │   ├── empty-messages.svg
│   │   ├── empty-notifications.svg
│   │   ├── empty-portfolio.svg
│   │   └── profile-incomplete.svg
│   ├── demo/
│   │   ├── pros/
│   │   │   ├── pro-01.jpg
│   │   │   ├── pro-02.jpg
│   │   │   └── ...
│   │   ├── portfolios/
│   │   │   ├── portfolio-01.jpg
│   │   │   └── ...
│   │   └── banners/
│   │       ├── banner-01.jpg
│   │       └── ...
│   ├── video/
│   │   └── hero-bg.mp4
│   └── audio/
│       ├── notification.mp3
│       └── badge-unlock.mp3
└── fonts/
    ├── inter-regular.woff2
    ├── inter-medium.woff2
    ├── inter-semibold.woff2
    └── inter-bold.woff2
```

---

## 2. LOGOS & BRANDING

### 2.1 Logo Principal (Dark)

| Attribut | Valeur |
|----------|--------|
| **Nom fichier** | `logo-dark.svg` |
| **Format** | SVG vectoriel |
| **ViewBox** | `0 0 220 40` |
| **Dimensions** | Scalable (min affichage: 120×22px) |
| **Fond** | Transparent |
| **Poids max** | < 30 Ko |

**Description détaillée** :
- **Icon** (gauche) : Icône abstraite représentant une connexion entre deux personnes (style minimaliste, lignes fines). Forme géométrique simplifiée suggérant un maillage/réseau. Couleur : `#F59E0B` (or).
- **Texte "Services"** : Police Inter Bold, 20px, couleur `#FFFFFF`. Positionné à droite de l'icon avec un gap de 8px.
- **Texte "Pro"** : Police Inter Bold, 20px, couleur `#F59E0B`. Collé à "Services" sans espace supplémentaire.
- **Espacement icon-texte** : 8px.

**Spécifications techniques SVG** :
```svg
<svg viewBox="0 0 220 40" xmlns="http://www.w3.org/2000/svg">
  <!-- Icon: réseau connexion -->
  <g fill="none" stroke="#F59E0B" stroke-width="2" stroke-linecap="round">
    <circle cx="12" cy="20" r="6"/>
    <circle cx="32" cy="12" r="4"/>
    <circle cx="32" cy="28" r="4"/>
    <line x1="18" y1="17" x2="28" y2="14"/>
    <line x1="18" y1="23" x2="28" y2="26"/>
  </g>
  <!-- Texte -->
  <text x="44" y="26" font-family="Inter, sans-serif" font-weight="700" font-size="20" fill="#FFFFFF">Services</text>
  <text x="128" y="26" font-family="Inter, sans-serif" font-weight="700" font-size="20" fill="#F59E0B">Pro</text>
</svg>
```

**Usages** :
- Header (desktop & mobile)
- Footer
- Page de connexion/inscription
- Emails (version PNG intégrée)

---

### 2.2 Logo Light

| Attribut | Valeur |
|----------|--------|
| **Nom fichier** | `logo-light.svg` |
| **Format** | SVG vectoriel |
| **ViewBox** | `0 0 220 40` |
| **Fond** | Transparent |
| **Poids max** | < 30 Ko |

**Description** : Identique au logo dark mais :
- "Services" : couleur `#0A0A0F` (noir)
- "Pro" : couleur `#F59E0B` (or, inchangé)
- Icon : couleur `#0A0A0F` (noir)

**Usages** :
- Impressions (flyers, cartes de visite)
- Documents PDF
- Sur fonds clairs uniquement

---

### 2.3 Logo Icon (Favicon)

| Attribut | Valeur |
|----------|--------|
| **Nom fichier** | `logo-icon.svg` |
| **Format** | SVG + dérivés PNG/ICO |
| **ViewBox** | `0 0 64 64` |
| **Tailles PNG** | 32×32, 180×180 (Apple touch), 192×192 (Android) |
| **Fond** | `#0A0A0F` |

**Description** :
- Lettre "S" stylisée, style géométrique moderne
- Couleur : `#F59E0B` (or) sur fond `#0A0A0F`
- Forme carrée avec bords légèrement arrondis (radius 12px)
- La lettre "S" est créée avec des lignes épaisses (4px) et des angles droits

**Usages** :
- Favicon navigateur (favicon.ico, 32×32)
- Icône application mobile (180×180, 192×192)
- PWA icon
- Shortcut icon

---

### 2.4 Image Open Graph

| Attribut | Valeur |
|----------|--------|
| **Nom fichier** | `og-image.jpg` |
| **Format** | JPG (haute qualité) |
| **Dimensions** | 1200×630 px |
| **Poids max** | < 200 Ko |
| **Fond** | Dégradé `#0A0A0F` → `#1A1A2E` |

**Description** :
- Fond : Dégradé diagonal sombre (même que hero)
- Contenu centré :
  - Logo Services Pro (version or/blanc)
  - Tagline : "Les meilleurs pros du Cameroun" — 48px Inter Bold, blanc
  - Sous-titre : "Notés et vérifiés par des milliers de clients" — 24px Inter Regular, `#A0A0B8`
- Effet : Légères particules dorées en arrière-plan (subtil)
- Coins : légèrement arrondis (subtil, le format est rectangulaire)

**Usages** :
- Meta `og:image` (partages Facebook, WhatsApp, LinkedIn)
- Meta `twitter:image`

---

### 2.5 Logo pour Favicon .ico

| Attribut | Valeur |
|----------|--------|
| **Nom fichier** | `favicon.ico` |
| **Format** | ICO multi-résolution |
| **Tailles incluses** | 16×16, 32×32, 48×48 |
| **Poids max** | < 50 Ko |

---

## 3. ICÔNES DU SYSTÈME

### 3.1 Librairie Principale

**Librairie** : Lucide React (`lucide-react`)
**Style** : Line (stroke-based)
**Stroke width par défaut** : 1.5px
**Tailles utilisées** :
- XS : 14px
- SM : 16px
- MD : 20px (défaut)
- LG : 24px
- XL : 32px

### 3.2 Mapping Icônes par Usage

#### Navigation
| Usage | Icône Lucide | Taille | Couleur |
|-------|-------------|--------|---------|
| Logo icon | `Network` (custom) | 20px | `#F59E0B` |
| Menu hamburger | `Menu` | 24px | `#FFFFFF` |
| Fermer menu | `X` | 24px | `#FFFFFF` |
| Recherche | `Search` | 20px | `#0A0A0F` (dans bouton) |
| Chercher | `Search` | 20px | `#A0A0B8` |
| Flèche droite | `ChevronRight` | 16px | `#A0A0B8` |
| Flèche gauche | `ChevronLeft` | 16px | `#A0A0B8` |
| Flèche haut | `ChevronUp` | 16px | `#A0A0B8` |
| Flèche bas | `ChevronDown` | 16px | `#A0A0B8` |
| Lien externe | `ExternalLink` | 14px | `#F59E0B` |

#### Catégories Métier
| Catégorie | Icône Lucide | Taille | Couleur |
|-----------|-------------|--------|---------|
| Plomberie | `Droplets` | 28px | `#3B82F6` |
| Électricité | `Zap` | 28px | `#F59E0B` |
| Menuiserie | `Hammer` | 28px | `#A0522D` |
| Maçonnerie | `Mountain` | 28px | `#6B6B80` |
| Peinture | `Paintbrush` | 28px | `#EC4899` |
| Jardinage | `Flower2` | 28px | `#10B981` |
| Coiffure | `Scissors` | 28px | `#8B5CF6` |
| Couture | `Ruler` | 28px | `#F43F5E` |
| Mécanique | `Wrench` | 28px | `#6B6B80` |
| Informatique | `Monitor` | 28px | `#3B82F6` |
| Design Graphique | `Palette` | 28px | `#EC4899` |
| Photographie | `Camera` | 28px | `#6B6B80` |
| Cuisine | `ChefHat` | 28px | `#F97316` |
| Nettoyage | `Sparkles` | 28px | `#06B6D4` |
| Déménagement | `Truck` | 28px | `#6B6B80` |
| Climatisation | `Wind` | 28px | `#06B6D4` |
| Ferronnerie | `Flame` | 28px | `#EF4444` |
| Carrelage | `Grid3x3` | 28px | `#6B6B80` |
| Électronique | `Cpu` | 28px | `#3B82F6` |
| Autre | `CircleHelp` | 28px | `#6B6B80` |

#### Actions
| Usage | Icône Lucide | Taille | Couleur |
|-------|-------------|--------|---------|
| Contacter | `MessageCircle` | 20px | `#0A0A0F` |
| Demander devis | `FileText` | 20px | `#FFFFFF` |
| Appeler | `Phone` | 20px | `#A0A0B8` |
| Partager | `Share2` | 20px | `#A0A0B8` |
| Envoyer | `Send` | 20px | `#0A0A0F` |
| Favori (off) | `Heart` | 20px | `#A0A0B8` |
| Favori (on) | `Heart` (fill) | 20px | `#EF4444` |
| Copier | `Copy` | 16px | `#A0A0B8` |
| Éditer | `Pencil` | 16px | `#A0A0B8` |
| Supprimer | `Trash2` | 16px | `#EF4444` |
| Ajouter | `Plus` | 20px | `#FFFFFF` |
| Télécharger | `Download` | 20px | `#FFFFFF` |
| Upload | `Upload` | 20px | `#A0A0B8` |
| Fermer | `X` | 20px | `#FFFFFF` |
| Voir | `Eye` | 16px | `#A0A0B8` |
| Voir (off) | `EyeOff` | 16px | `#A0A0B8` |
| Filtrer | `SlidersHorizontal` | 20px | `#A0A0B8` |
| Carte | `Map` | 20px | `#A0A0B8` |
| Liste | `List` | 20px | `#A0A0B8` |
| Grille | `LayoutGrid` | 20px | `#A0A0B8` |

#### Notation & Avis
| Usage | Icône Lucide | Taille | Couleur |
|-------|-------------|--------|---------|
| Étoile (vide) | `Star` | 24px | `#4A4A5C` |
| Étoile (pleine) | `Star` (fill) | 24px | `#F59E0B` |
| Étoile (demi) | `StarHalf` | 24px | `#F59E0B` |
| Pouce haut | `ThumbsUp` | 16px | `#A0A0B8` |
| Pouce bas | `ThumbsDown` | 16px | `#A0A0B8` |
| Recommander oui | `ThumbsUp` | 20px | `#10B981` |
| Recommander non | `ThumbsDown` | 20px | `#EF4444` |
| Signaler | `Flag` | 16px | `#EF4444` |
| Répondre | `MessageSquare` | 16px | `#3B82F6` |

#### Badges
| Badge | Icône Lucide | Taille | Couleur |
|-------|-------------|--------|---------|
| Vérifié | `ShieldCheck` | 16px | `#10B981` |
| Expert/Maître | `Star` | 16px | `#F59E0B` |
| Légende | `Crown` | 16px | `#FFD700` |
| Réactif | `Zap` | 16px | `#3B82F6` |
| Fidélité | `Heart` | 16px | `#EC4899` |
| Urgence | `Flame` | 16px | `#EF4444` |
| Trust Seal | `Award` | 16px | `#F59E0B` |
| Photographe | `Camera` | 16px | `#A0A0B8` |
| Populaire | `TrendingUp` | 16px | `#10B981` |
| Passeport | `Globe` | 16px | `#3B82F6` |

#### Podium & Leaderboard
| Usage | Icône Lucide | Taille | Couleur |
|-------|-------------|--------|---------|
| Couronne (1er) | `Crown` | 48px | `#FFD700` |
| Médaille argent | `Medal` | 24px | `#C0C0C0` |
| Médaille bronze | `Medal` | 24px | `#CD7F32` |
| Tendance haut | `TrendingUp` | 16px | `#10B981` |
| Tendance bas | `TrendingDown` | 16px | `#EF4444` |
| Stable | `Minus` | 16px | `#6B6B80` |

#### Disponibilité & Localisation
| Usage | Icône Lucide | Taille | Couleur |
|-------|-------------|--------|---------|
| Disponible | `Circle` (fill) | 12px | `#10B981` |
| Indisponible | `Circle` (fill) | 12px | `#EF4444` |
| Demi-disponible | `Circle` (fill) | 12px | `#F97316` |
| Calendrier | `Calendar` | 20px | `#A0A0B8` |
| Horloge | `Clock` | 16px | `#A0A0B8` |
| Localisation | `MapPin` | 16px | `#A0A0B8` |
| Zone | `Locate` | 16px | `#A0A0B8` |
| Distance | `Navigation` | 16px | `#A0A0B8` |

#### Messagerie
| Usage | Icône Lucide | Taille | Couleur |
|-------|-------------|--------|---------|
| Message | `MessageCircle` | 20px | `#A0A0B8` |
| Nouveau message | `MessageSquarePlus` | 20px | `#F59E0B` |
| Envoyé | `Check` | 14px | `#6B6B80` |
| Lu | `CheckCheck` | 14px | `#3B82F6` |
| Pièce jointe | `Paperclip` | 20px | `#A0A0B8` |
| Emoji | `Smile` | 20px | `#A0A0B8` |
| Bloquer | `Ban` | 16px | `#EF4444` |

#### Social Media
| Usage | Icône | Taille | Couleur |
|-------|-------|--------|---------|
| Facebook | Custom SVG | 20px | `#1877F2` |
| WhatsApp | Custom SVG | 20px | `#25D366` |
| Instagram | Custom SVG | 20px | `#E4405F` |
| LinkedIn | Custom SVG | 20px | `#0A66C2` |
| Twitter/X | Custom SVG | 20px | `#1DA1F2` |

> **Note** : Les icônes sociales nécessitent des fichiers SVG custom car Lucide ne fournit pas les logos de réseaux sociaux.

---

## 4. PHOTOS & ILLUSTRATIONS

### 4.1 Hero Background

| Attribut | Valeur |
|----------|--------|
| **Nom fichier** | `hero-bg.jpg` |
| **Dimensions** | 1920×1080 px (16:9) |
| **Format** | JPG, qualité 80% |
| **Poids max** | < 200 Ko |
| **Fond** | Non transparent |

**Description détaillée** :
- Photo artistique sombre d'un artisan camerounais au travail
- Sujet : Un plombier ou électricien concentré sur sa tâche, vue en contre-plongée légère
- Éclairage : Dramatique, source de lumière latérale (type fenêtre ou projecteur), créant des ombres prononcées
- Tons : Dominance de noirs et gris foncés, avec des accents chaleureux (oranges/ambers subtils sur la peau, outils métalliques)
- Atmosphère : Professionnelle, sérieuse, premium
- Flou : Légère profondeur de champ (bokeh) sur l'arrière-plan
- Pas de texte, pas de watermark
- Zone sûre pour texte : Le tiers central gauche doit être relativement sombre et uni (pour le texte du hero)

**Variante mobile** :
| Attribut | Valeur |
|----------|--------|
| **Nom fichier** | `hero-bg-mobile.jpg` |
| **Dimensions** | 750×1200 px (portrait) |
| **Poids max** | < 150 Ko |
- Même sujet mais recadré en portrait
- Zone de texte en haut (tiers supérieur sombre)

---

### 4.2 Photos de Profil (Démonstration)

15 photos de professionnels camerounais variés pour les données de démo.

| Attribut | Valeur |
|----------|--------|
| **Nom fichiers** | `pro-01.jpg` à `pro-15.jpg` |
| **Dimensions** | 400×400 px (carré 1:1) |
| **Format** | JPG, qualité 80% |
| **Poids max** | < 50 Ko chacune |
| **Fond** | Non transparent |

**Description par profil** :

| # | Genre | Âge apparent | Métier | Description | Tenue |
|---|-------|-------------|--------|-------------|-------|
| 01 | M | 35 | Plombier | Homme souriant, confiant, visage rasé | Polo bleu avec logo entreprise |
| 02 | F | 28 | Coiffeuse | Femme professionnelle, sourire chaleureux | Tablier noir stylé |
| 03 | M | 42 | Électricien | Homme mûr, expérimenté, regard direct | Combinaison de travail orange |
| 04 | M | 30 | Designer | Homme jeune, créatif, lunettes | T-shirt noir, look minimaliste |
| 05 | F | 35 | Menuisière | Femme déterminée, bras croisés | Chemise carreaux, salopette |
| 06 | M | 50 | Mécanicien | Homme robuste, barbe grisonnante | Bleu de travail, taches d'huile |
| 07 | F | 25 | Peintre | Femme jeune, énergie positive | Tache de peinture sur vêtement |
| 08 | M | 38 | Maçon | Homme musclé, casquette | Débardeur, poussière de ciment |
| 09 | F | 45 | Couturière | Femme élégante, sourire accueillant | Robe africaine stylisée |
| 10 | M | 32 | Jardinier | Homme nature, sourire authentique | Chemise kaki, chapeau de paille |
| 11 | F | 29 | Photographe | Femme artiste, caméra autour du cou | Veste en jean, look décontracté |
| 12 | M | 40 | Cuisinier | Homme passionné, toque sur la tête | Veste de chef blanche |
| 13 | F | 33 | Informaticienne | Femme tech, regard perçant | Hoodie noir, écouteurs autour du cou |
| 14 | M | 55 | Ferronnier | Homme artisan, mains callosées | Tablier de cuir, chemise sombre |
| 15 | F | 27 | Électricienne | Femme dynamique, équipement professionnel | Gilet de sécurité jaune |

**Style commun** :
- Fond neutre (gris clair ou studio)
- Éclairage professionnel (softbox)
- Sourire professionnel (ni trop formel, ni trop décontracté)
- Cadrage poitrine/tête (headshot)
- Qualité studio, pas de selfie

---

### 4.3 Photos de Bannières (Démonstration)

10 photos de couverture pour les profils pros.

| Attribut | Valeur |
|----------|--------|
| **Nom fichiers** | `banner-01.jpg` à `banner-10.jpg` |
| **Dimensions** | 1200×400 px (3:1) |
| **Format** | JPG, qualité 75% |
| **Poids max** | < 100 Ko chacune |

**Description par bannière** :

| # | Métier | Description de la scène |
|---|--------|------------------------|
| 01 | Plomberie | Vue plongée d'un évier en cours d'installation, outils alignés, lumière naturelle |
| 02 | Coiffure | Salon moderne avec miroirs lumineux, client en cours de coupe |
| 03 | Électricité | Installation de tableau électrique, câbles colorés soigneusement rangés |
| 04 | Design | Bureau créatif avec écran affichant un design, tablette graphique, cafés |
| 05 | Menuiserie | Atelier avec copeaux de bois, étagères d'outils, projet en cours |
| 06 | Mécanique | Garage automobile, voiture sur pont, outils professionnels |
| 07 | Peinture | Mur en cours de peinture, échelle, pots de peinture colorés |
| 08 | Maçonnerie | Chantier construction, briques alignées, niveau à bulle |
| 09 | Cuisine | Cuisine professionnelle, plats colorés en préparation, vapeur |
| 10 | Jardinage | Jardin verdoyant, haies taillées, outils de jardinage posés |

**Style commun** :
- Action/metier en cours (pas de portrait)
- Atmosphère professionnelle et chaleureuse
- Couleurs vives mais naturelles
- Lumière naturelle ou éclairage professionnel
- Pas de visage identifiable (focus sur le travail)

---

### 4.4 Photos de Portfolio (Démonstration)

30 photos de réalisations pour les profils démo (avant/après).

| Attribut | Valeur |
|----------|--------|
| **Nom fichiers** | `portfolio-01.jpg` à `portfolio-30.jpg` |
| **Dimensions** | 800×600 px (4:3) |
| **Format** | JPG, qualité 75% |
| **Poids max** | < 80 Ko chacune |

**Répartition** :
- Plomberie (6 photos) : Installations sanitaires, réparations fuites, salles de bain
- Électricité (4 photos) : Tableaux électriques, installations, éclairages
- Coiffure (4 photos) : Coupes, tresses, coiffures avant/après
- Menuiserie (4 photos) : Meubles, portes, fenêtres
- Peinture (4 photos) : Murs, façades, intérieurs avant/après
- Cuisine (4 photos) : Plats, buffets, présentations
- Jardinage (4 photos) : Jardins aménagés, pelouses, haies

---

### 4.5 Illustrations Empty States

6 illustrations vectorielles pour les états vides.

| Attribut Global | Valeur |
|----------------|--------|
| **Format** | SVG |
| **Style** | Flat design moderne, lignes épurées |
| **Palette** | `#1A1A28` (fond shapes), `#A0A0B8` (éléments), `#F59E0B` (accent) |
| **Poids max** | < 50 Ko chacune |

**Illustration 1 : Aucun résultat de recherche**
| Attribut | Valeur |
|----------|--------|
| **Nom fichier** | `empty-search.svg` |
| **Dimensions** | 240×200 px |
| **Description** | Personnage stylisé regardant dans une grande loupe. La loupe est dorée (`#F59E0B`). Le personnage a une expression de recherche. Quelques points d'interrogation flottent autour. Fond transparent. Style minimaliste. |

**Illustration 2 : Aucun avis**
| Attribut | Valeur |
|----------|--------|
| **Nom fichier** | `empty-reviews.svg` |
| **Dimensions** | 240×200 px |
| **Description** | Bulle de dialogue vide avec 3 étoiles grises fantômes à l'intérieur. La bulle est en trait fin `#A0A0B8`. Un personnage stylisé à côté semble attendre. Style minimaliste. |

**Illustration 3 : Aucun message**
| Attribut | Valeur |
|----------|--------|
| **Nom fichier** | `empty-messages.svg` |
| **Dimensions** | 240×200 px |
| **Description** | Enveloppe ouverte avec un papier vierge sortant. L'enveloppe est stylisée avec des lignes épurées. Accent doré sur le cachet. Style minimaliste. |

**Illustration 4 : Aucune notification**
| Attribut | Valeur |
|----------|--------|
| **Nom fichier** | `empty-notifications.svg` |
| **Dimensions** | 240×200 px |
| **Description** | Cloche de notification sans mouvement/cone sonore. La cloche est en trait gris. Un "Zzz" stylisé à côté indique le calme. Style minimaliste. |

**Illustration 5 : Portfolio vide**
| Attribut | Valeur |
|----------|--------|
| **Nom fichier** | `empty-portfolio.svg` |
| **Dimensions** | 240×200 px |
| **Description** | Cadre photo vide avec une icône de caméra au centre. Plusieurs cadres de tailles différentes empilés de manière artistique. Un bouton "+" doré suggère l'ajout. Style minimaliste. |

**Illustration 6 : Profil incomplet**
| Attribut | Valeur |
|----------|--------|
| **Nom fichier** | `profile-incomplete.svg` |
| **Dimensions** | 240×200 px |
| **Description** | Personnage stylisé avec une checklist partiellement remplie à côté. Quelques cases sont cochées (vert), d'autres sont vides. Une flèche dorée pointe vers les cases vides. Style minimaliste. |

---

### 4.6 Illustrations Section "Comment ça marche"

3 illustrations pour les 3 étapes du processus.

| Attribut Global | Valeur |
|----------------|--------|
| **Format** | SVG |
| **Dimensions** | 200×160 px |
| **Style** | Flat design, couleurs primaires `#F59E0B` et `#3B82F6` sur fond transparent |
| **Poids max** | < 40 Ko chacune |

**Étape 1 : Trouver un pro**
| Attribut | Valeur |
|----------|--------|
| **Nom fichier** | `how-it-works-1.svg` |
| **Description** | Écran de téléphone/mobile stylisé affichant une liste de profils avec étoiles. Une loupe dorée en surimposition. Des lignes de connexion suggèrent la recherche. Style flat moderne. |

**Étape 2 : Contacter & réaliser**
| Attribut | Valeur |
|----------|--------|
| **Nom fichier** | `how-it-works-2.svg` |
| **Description** | Deux bulles de dialogue (chat) avec une icône d'outil (marteau/clé) au centre. Une main stylisée clique sur un bouton. Flèches de communication entre les éléments. Style flat moderne. |

**Étape 3 : Noter l'expérience**
| Attribut | Valeur |
|----------|--------|
| **Nom fichier** | `how-it-works-3.svg` |
| **Description** | 5 étoiles dorées alignées avec la 5ème en train de se remplir (animation suggérée). Un pouce levé (like) à côté. Des confettis subtils autour. Style flat moderne. |

---

### 4.7 Illustration Section CTA Pro

| Attribut | Valeur |
|----------|--------|
| **Nom fichier** | `cta-pro.png` (ou SVG) |
| **Dimensions** | 600×800 px (portrait 3:4) |
| **Format** | PNG avec transparence |
| **Poids max** | < 400 Ko |

**Description** :
- Mockup de smartphone (style iPhone moderne, bords arrondis)
- L'écran du téléphone affiche un profil Services Pro réaliste :
  - Photo de profil d'un pro
  - Score de 92/100 avec barre dorée
  - Badges "Vérifié", "Expert"
  - 4.9 étoiles, "156 avis"
  - Mini portfolio (3 photos)
- Le téléphone est légèrement incliné (15° rotation)
- Ombre portée subtile sous le téléphone
- Éléments flottants autour du téléphone :
  - Badge "Top 10" doré (bulle flottante)
  - Graphique de croissance (flèche montante)
  - Icône de notification "Nouvelle demande"
- Fond : transparent (pour s'intégrer sur le dégradé sombre)

---

## 5. VIDÉOS

### 5.1 Hero Background Video (Optionnel)

| Attribut | Valeur |
|----------|--------|
| **Nom fichier** | `hero-bg.mp4` |
| **Dimensions** | 1920×1080 px |
| **Format** | MP4 (H.264) |
| **Codec** | H.264, High Profile, Level 4.1 |
| **Bitrate** | 2-3 Mbps |
| **Poids** | < 3 Mo |
| **Durée** | 5-8 secondes |
| **Loop** | Seamless (boucle parfaite) |
| **Audio** | Aucun (muet) |
| **Fond** | Non transparent |

**Description** :
- Time-lapse très lent de mains travaillant
- Séquence suggérée : Soudure étincelante → Coupe de bois à la scie → Tissage/Couture au doigt → Pose de carrelage
- Transitions très douces entre les scènes (fade cross)
- Tons : Sombre, chaud, atmosphérique
- Éclairage : Faible, dramatique, sources ponctuelles (étincelles, lumière de travail)
- Pas de visage visible (focus sur les mains et l'action)
- Grain film subtil (texture organique)
- Fallback : Si la vidéo ne charge pas, afficher `hero-bg.jpg`

**Variante mobile** :
| Attribut | Valeur |
|----------|--------|
| **Nom fichier** | `hero-bg-mobile.mp4` |
| **Dimensions** | 1080×1920 px (portrait 9:16) |
| **Poids** | < 2 Mo |
- Même contenu recadré en portrait

### 5.2 Vidéo de Présentation Pro

| Attribut | Valeur |
|----------|--------|
| **Format** | MP4 (H.264) |
| **Dimensions** | 720×1280 px (portrait) ou 1280×720 px (paysage) |
| **Durée max** | 30 secondes |
| **Poids max** | 10 Mo |
| **Audio** | Optionnel (voix du pro) |

**Conseils pour les pros** :
- Se présenter en 30 secondes
- Montrer son savoir-faire (gestes, outils, réalisations)
- Parler clairement, sourire
- Fond professionnel (atelier, bureau, salon)
- Lumière naturelle de face

---

## 6. POLICES DE CARACTÈRES

### 6.1 Police Principale : Inter

| Poids | Fichier | Unicode Range | Usage |
|-------|---------|---------------|-------|
| Regular (400) | `inter-regular.woff2` | U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD | Corps de texte, descriptions |
| Medium (500) | `inter-medium.woff2` | Même | Labels, navigation, sous-titres |
| SemiBold (600) | `inter-semibold.woff2` | Même | Boutons, titres de cards, emphasis |
| Bold (700) | `inter-bold.woff2` | Même | Titres H1-H3, scores, chiffres importants |

**Spécifications de chargement** :
```css
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter-regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter-medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter-semibold.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter-bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

**Fallback stack** :
```css
font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 
             'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

**Google Fonts alternative** (si self-hosting non possible) :
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

## 7. SONS & AUDIO

### 7.1 Notification

| Attribut | Valeur |
|----------|--------|
| **Nom fichier** | `notification.mp3` |
| **Format** | MP3 |
| **Durée** | < 2 secondes |
| **Poids** | < 15 Ko |

**Description** : 
- Son doux et professionnel de notification
- Type : "Pop" subtil (comme un message reçu)
- Tonalité : Aigu, court, non intrusif
- Comparaison : Similaire à la notification Slack ou Teams (plus doux)
- Pas de vibration suggérée

**Déclencheurs** :
- Nouveau message reçu
- Nouvel avis reçu
- Nouvelle demande de contact

---

### 7.2 Déblocage de Badge

| Attribut | Valeur |
|----------|--------|
| **Nom fichier** | `badge-unlock.mp3` |
| **Format** | MP3 |
| **Durée** | < 3 secondes |
| **Poids** | < 20 Ko |

**Description** :
- Son de récompense/déblocage
- Type : "Success chime" ascendant
- Tonalité : Dorée, chaleureuse, légèrement mélodique (3 notes montantes)
- Comparaison : Son de niveau gagné dans un jeu vidéo (mais plus subtil)
- Doit évoquer la satisfaction et l'accomplissement

**Déclencheurs** :
- Nouveau badge débloqué
- Passage de niveau (Confirmé → Expert, etc.)
- Entrée dans le Top 10

---

## 8. ANIMATIONS LOTTIE

### 8.1 Badge Unlock Animation

| Attribut | Valeur |
|----------|--------|
| **Nom fichier** | `lottie-badge-unlock.json` |
| **Format** | Lottie JSON |
| **Dimensions** | 200×200 px |
| **Poids** | < 30 Ko |

**Description** :
- Animation de célébration pour le déblocage d'un badge
- Séquence :
  1. Badge apparaît avec scale(0) → scale(1.2) → scale(1) + effet élastique
  2. Cercle d'or pulse autour du badge
  3. 8-10 confettis dorés partent du centre vers l'extérieur
  4. 2-3 étoiles scintillent brièvement
- Durée : 1.5 seconde
- Couleurs : Or `#F59E0B`, blanc `#FFFFFF`
- Doit être jouée une seule fois (pas de loop)

### 8.2 Success Check Animation

| Attribut | Valeur |
|----------|--------|
| **Nom fichier** | `lottie-success.json` |
| **Format** | Lottie JSON |
| **Dimensions** | 80×80 px |
| **Poids** | < 15 Ko |

**Description** :
- Cercle vert `#10B981` qui se dessine
- Checkmark blanc qui apparaît à l'intérieur
- Durée : 0.8 seconde
- Usage : Confirmation d'action réussie

---

## 9. VÉRIFICATION DES ASSETS

### 9.1 Checklist de Validation

Chaque asset doit passer les vérifications suivantes avant intégration :

| # | Vérification | Méthode | Critère |
|---|-------------|---------|---------|
| 1 | Poids | `ls -l` ou outil | ≤ poids max spécifié |
| 2 | Dimensions | `file` ou identify (ImageMagick) | = dimensions spécifiées |
| 3 | Format | Extension + `file` command | = format spécifié |
| 4 | Fond transparent | Vérification visuelle (PNG/SVG) | Transparent si requis |
| 5 | Pas de texte superflu | Vérification visuelle | Aucun texte non voulu |
| 6 | Pas de watermark | Vérification visuelle | Aucun watermark |
| 7 | Qualité d'image | Vérification visuelle à 100% | Nette, pas pixelisée |
| 8 | Cohérence couleurs | Pipette colorimétrique | Correspond à la palette |
| 9 | SVG propre | Validation W3C +SVGO | Pas d'erreurs, optimisé |
| 10 | Accessibilité | Alt text défini | Chaque image a un alt |

### 9.2 Outils de Vérification

```bash
# Vérification poids
find public/assets -type f -size +200k

# Vérification dimensions (ImageMagick)
identify public/assets/images/*.jpg

# Optimisation SVG
svgo public/assets/logo/*.svg

# Optimisation JPG
jpegoptim --size=200k public/assets/images/*.jpg

# Conversion en WebP (optionnel)
cwebp -q 80 public/assets/images/hero-bg.jpg -o public/assets/images/hero-bg.webp
```

### 9.3 Fallbacks

| Asset principal | Fallback | Condition |
|-----------------|----------|-----------|
| `hero-bg.mp4` | `hero-bg.jpg` | Vidéo ne charge pas / prefers-reduced-motion |
| `logo-dark.svg` | Texte "Services Pro" | SVG ne charge pas |
| Inter (self-hosted) | Google Fonts CDN | Self-hosting échoue |
| Image profil pro | `avatar-placeholder.svg` | Photo non uploadée |
| Image portfolio | `empty-portfolio.svg` | Image non chargée |
| `og-image.jpg` | Texte "Services Pro" | Image indisponible |

---

*Document rédigé le 31 mai 2026 — Version 1.0.0*
*Services Pro — Asset Inventory*

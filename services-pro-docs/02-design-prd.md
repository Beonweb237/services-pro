# SERVICES PRO — PRODUCT DESIGN DOCUMENT (Design PRD)

---

## TABLE DES MATIÈRES

1. Identité Visuelle Globale
2. Design Tokens
3. Système de Grille & Responsive
4. Composants UI Spécifiés (Page par Page)
5. Animations & Micro-interactions
6. Assets Visuels
7. Spécifications Techniques Frontend

---

## 1. IDENTITÉ VISUELLE GLOBALE

### 1.1 Direction Artistique

**Concept** : "Excellence Nocturne"

Le design s'inspire des plateformes premium de trading P2P et des marketplaces modernes. Une esthétique sombre élégante met en valeur les professionnels comme des talents précieux — chaque pro est une étoile dans une constellation de compétences. L'or (amber) symbolise l'excellence et la récompense, le vert la disponibilité et la confiance.

**Mots-clés** : Premium, Confiance, Africain moderne, Classement, Transparence, Excellence

**Références visuelles** :
- Plateformes P2P : Binance P2P, Paxful (système de confiance)
- Marketplaces premium : Toptal, Awwwards (direction artistique)
- Leaderboards gaming : Sonexa, DrPjit (design podium)
- Apps mobiles africaines : Wave, Yango (simplicité adaptée au contexte)

### 1.2 Palette de Couleurs

#### Couleurs de Fond

| Nom | Hex | Usage |
|-----|-----|-------|
| **Bg Primary** | `#0A0A0F` | Fond principal de toutes les pages |
| **Bg Secondary** | `#14141E` | Sections alternées, sidebar, footer |
| **Bg Elevated** | `#1A1A28` | Cards, modales, dropdowns, tooltip |
| **Bg Tertiary** | `#222234` | Éléments secondaires, hover states subtils |
| **Bg Input** | `#11111A` | Champs de formulaire, inputs |
| **Bg Overlay** | `rgba(10, 10, 15, 0.85)` | Overlays, backdrop-filter |

#### Couleurs de Texte

| Nom | Hex | Usage |
|-----|-----|-------|
| **Text Primary** | `#FFFFFF` | Titres, texte principal |
| **Text Secondary** | `#A0A0B8` | Corps de texte, descriptions |
| **Text Tertiary** | `#6B6B80` | Captions, placeholders, meta-info |
| **Text Disabled** | `#4A4A5C` | Texte désactivé, non interactif |

#### Couleurs d'Accent

| Nom | Hex | Usage |
|-----|-----|-------|
| **Accent Primary** | `#F59E0B` | Or — Boutons primary, badges, podium, scores |
| **Accent Primary Hover** | `#FBBF24` | Or clair — Hover primary |
| **Accent Primary Glow** | `rgba(245, 158, 11, 0.3)` | Glow/ombre des éléments dorés |
| **Accent Success** | `#10B981` | Vert — Disponible, succès, vérifié |
| **Accent Success Dim** | `rgba(16, 185, 129, 0.15)` | Fond vert subtil |
| **Accent Danger** | `#EF4444` | Rouge — Erreur, indisponible, urgence |
| **Accent Danger Dim** | `rgba(239, 68, 68, 0.15)` | Fond rouge subtil |
| **Accent Info** | `#3B82F6` | Bleu — Liens, tags catégorie, info |
| **Accent Info Dim** | `rgba(59, 130, 246, 0.15)` | Fond bleu subtil |
| **Accent Warning** | `#F97316` | Orange — Attention, demi-disponible |

#### Couleurs du Podium

| Nom | Hex | Usage |
|-----|-----|-------|
| **Gold** | `#FFD700` | 1ère place, couronne, badge or |
| **Gold Glow** | `rgba(255, 215, 0, 0.4)` | Glow/ombre dorée |
| **Silver** | `#C0C0C0` | 2ème place, badge argent |
| **Silver Glow** | `rgba(192, 192, 192, 0.3)` | Glow/ombre argent |
| **Bronze** | `#CD7F32` | 3ème place, badge bronze |
| **Bronze Glow** | `rgba(205, 127, 50, 0.3)` | Glow/ombre bronze |

#### Dégradés

| Nom | Valeur | Usage |
|-----|--------|-------|
| **Gradient Hero** | `linear-gradient(135deg, #0A0A0F 0%, #1A1A2E 50%, #16213E 100%)` | Section hero |
| **Gradient Card** | `linear-gradient(180deg, rgba(26,26,40,0.9) 0%, rgba(10,10,15,0.95) 100%)` | Cards premium |
| **Gradient Gold** | `linear-gradient(180deg, #FFD700 0%, #F59E0B 100%)` | Éléments or |
| **Gradient Overlay** | `linear-gradient(180deg, transparent 0%, rgba(10,10,15,0.95) 100%)` | Overlay sur images |

### 1.3 Typographie

#### Famille de Police

**Police principale** : Inter (Google Fonts)
**Fallback** : `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

**Polices chargées** :
- Inter Regular (400)
- Inter Medium (500)
- Inter SemiBold (600)
- Inter Bold (700)

#### Échelle Typographique

| Élément | Taille | Poids | Hauteur de ligne | Espacement | Couleur |
|---------|--------|-------|------------------|------------|---------|
| **H1** | 56px (3.5rem) | 700 | 1.1 | -0.02em | #FFFFFF |
| **H2** | 40px (2.5rem) | 600 | 1.2 | -0.01em | #FFFFFF |
| **H3** | 28px (1.75rem) | 600 | 1.3 | 0 | #FFFFFF |
| **H4** | 22px (1.375rem) | 600 | 1.35 | 0 | #FFFFFF |
| **H5** | 18px (1.125rem) | 500 | 1.4 | 0 | #FFFFFF |
| **Body Large** | 18px (1.125rem) | 400 | 1.6 | 0 | #A0A0B8 |
| **Body** | 16px (1rem) | 400 | 1.6 | 0 | #A0A0B8 |
| **Body Small** | 14px (0.875rem) | 400 | 1.5 | 0 | #A0A0B8 |
| **Caption** | 12px (0.75rem) | 500 | 1.4 | 0.02em | #6B6B80 |
| **Label** | 11px (0.6875rem) | 600 | 1.4 | 0.08em | #6B6B80 |
| **Score Display** | 64px (4rem) | 700 | 1.0 | -0.03em | #F59E0B |
| **Podium Name** | 20px (1.25rem) | 600 | 1.3 | 0 | #FFFFFF |

### 1.4 Icônes

**Librairie** : Lucide React (lucide-react)
**Style** : Line (stroke-based), 1.5-2px stroke width
**Taille standard** : 20px (1.25rem)
**Taille petite** : 16px (1rem)
**Taille grande** : 24px (1.5rem)

---

## 2. DESIGN TOKENS

### 2.1 Espacements

| Token | Valeur | Usage |
|-------|--------|-------|
| `space-0` | 0px | — |
| `space-1` | 4px (0.25rem) | Gap icône-texte, padding badge |
| `space-2` | 8px (0.5rem) | Petit gap, padding compact |
| `space-3` | 12px (0.75rem) | Gap standard interne |
| `space-4` | 16px (1rem) | Padding card, gap grille |
| `space-5` | 20px (1.25rem) | Padding section interne |
| `space-6` | 24px (1.5rem) | Padding card medium, gap section |
| `space-8` | 32px (2rem) | Padding section, gap composants |
| `space-10` | 40px (2.5rem) | Marge section petite |
| `space-12` | 48px (3rem) | Marge section moyenne |
| `space-16` | 64px (4rem) | Marge section large |
| `space-20` | 80px (5rem) | Marge section XL |
| `space-24` | 96px (6rem) | Marge section Hero |

### 2.2 Rayons de Bordure

| Token | Valeur | Usage |
|-------|--------|-------|
| `radius-sm` | 4px (0.25rem) | Tags, badges petits |
| `radius-md` | 8px (0.5rem) | Boutons, inputs, petits composants |
| `radius-lg` | 12px (0.75rem) | Cards, modales |
| `radius-xl` | 16px (1rem) | Cards larges, hero container |
| `radius-2xl` | 20px (1.25rem) | Cards featured |
| `radius-full` | 9999px | Avatars, badges ronds, pills |

### 2.3 Ombres

| Token | Valeur | Usage |
|-------|--------|-------|
| `shadow-sm` | `0 1px 2px rgba(0,0,0,0.3)` | Éléments subtils |
| `shadow-md` | `0 4px 6px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.2)` | Cards standard |
| `shadow-lg` | `0 10px 15px rgba(0,0,0,0.4), 0 4px 6px rgba(0,0,0,0.2)` | Cards hover, dropdowns |
| `shadow-xl` | `0 20px 25px rgba(0,0,0,0.5), 0 10px 10px rgba(0,0,0,0.2)` | Modales, menus |
| `shadow-gold` | `0 0 30px rgba(245,158,11,0.3)` | Éléments gold featured |
| `shadow-gold-lg` | `0 0 60px rgba(245,158,11,0.4)` | Podium #1 |
| `shadow-success` | `0 0 20px rgba(16,185,129,0.25)` | Disponible badge |
| `shadow-inner` | `inset 0 2px 4px rgba(0,0,0,0.3)` | Pressed states |

### 2.4 Transitions

| Token | Valeur | Usage |
|-------|--------|-------|
| `transition-fast` | `150ms ease` | Hover boutons, changements d'état |
| `transition-base` | `250ms ease` | Cards hover, apparence d'éléments |
| `transition-slow` | `400ms ease` | Section reveals, modales |
| `transition-slower` | `600ms cubic-bezier(0.22, 1, 0.36, 1)` | Podium animations |
| `transition-bounce` | `300ms cubic-bezier(0.34, 1.56, 0.64, 1)` | Badges, notifications |

### 2.5 Z-Index

| Token | Valeur | Usage |
|-------|--------|-------|
| `z-base` | 0 | Éléments de base |
| `z-dropdown` | 100 | Menus déroulants |
| `z-sticky` | 200 | Header sticky |
| `z-drawer` | 300 | Side panels, drawers |
| `z-modal` | 400 | Modales, dialogs |
| `z-popover` | 500 | Tooltips, popovers |
| `z-toast` | 600 | Notifications toast |
| `z-max` | 9999 | Éléments critiques |

---

## 3. SYSTÈME DE GRILLE & RESPONSIVE

### 3.1 Grille

**Système** : 12 colonnes
**Gouttière** : 24px (16px sur mobile)
**Container max-width** : 1280px
**Container padding** : 24px (16px sur mobile)

```
Desktop (≥1280px):  │  [  12 colonnes  ]  │  gutter: 24px
Tablet  (≥768px):    │  [   8 colonnes   ]  │  gutter: 24px  
Mobile  (<768px):    │  [   4 colonnes   ]  │  gutter: 16px
```

### 3.2 Breakpoints

| Nom | Min | Max | Usage |
|-----|-----|-----|-------|
| `xs` | 0 | 479px | Très petits écrans |
| `sm` | 480px | 767px | Mobiles |
| `md` | 768px | 1023px | Tablettes |
| `lg` | 1024px | 1279px | Petits desktops |
| `xl` | 1280px | 1535px | Desktop standard |
| `2xl` | 1536px | ∞ | Grands écrans |

### 3.3 Adaptations Responsive par Composant

#### Header
- **Desktop** : Logo gauche, navigation centre, boutons droite
- **Tablet/Mobile** : Logo gauche, hamburger menu droite

#### Hero
- **Desktop** : Contenu centré, barre recherche horizontale, stats en ligne
- **Tablet** : Contenu centré, barre recherche verticale (input + bouton), stats en ligne
- **Mobile** : Contenu centré, barre recherche empilée (input full width, bouton full width dessous), stats en colonne

#### Podium
- **Desktop** : 3 cards côte à côte, #1 centrée et plus grande
- **Tablet** : 3 cards plus petites, même disposition
- **Mobile** : Carousel swipeable, 1 card visible avec pagination dots

#### Grille Pros (Recherche)
- **Desktop** : 3 colonnes
- **Tablet** : 2 colonnes
- **Mobile** : 1 colonne

#### Profil Pro
- **Desktop** : Bannière full, info en overlay, 2 colonnes sous tabs
- **Tablet** : Bannière full, info sous bannière, 1 colonne
- **Mobile** : Bannière 200px, info empilée, tabs scrollables horizontalement

#### Footer
- **Desktop** : 4 colonnes
- **Tablet** : 2 colonnes
- **Mobile** : 1 colonne, accordéon

---

## 4. COMPOSANTS UI SPÉCIFIÉS (PAGE PAR PAGE)

### 4.1 Composants Globaux

#### 4.1.1 Header / Navigation

**Dimensions** :
- Hauteur : 72px (4.5rem)
- Position : Fixed top
- Z-index : `z-sticky` (200)
- Backdrop-filter : `blur(20px)`
- Background : `rgba(10, 10, 15, 0.85)`
- Border-bottom : `1px solid rgba(255, 255, 255, 0.05)`

**Structure** :
```
┌─────────────────────────────────────────────────────────────────────┐
│  [LOGO]        [Accueil] [Explorer] [Top Pros] [Comment]    [Connexion] [S'inscrire] │
│                  nav-links (desktop)                          buttons (desktop)      │
│                                                                     │
│  [LOGO]                                          [☰]               │
│                  mobile                              hamburger       │
└─────────────────────────────────────────────────────────────────────┘
```

**Logo** :
- Texte : "Services" (Inter Bold, 20px, #FFFFFF) + "Pro" (Inter Bold, 20px, #F59E0B)
- Icon : Icône abstraite de connexion (20×20, #F59E0B) à gauche du texte
- Espacement icon-text : 8px
- Hover : Opacity 0.9, transition `transition-fast`

**Navigation Links (Desktop)** :
- Items : "Accueil", "Explorer", "Top Pros", "Comment ça marche"
- Style : Inter Medium, 14px, #A0A0B8
- Espacement entre items : 32px
- Hover : Color #FFFFFF, transition `transition-fast`
- Active : Color #F59E0B, underline 2px en dessous (offset 4px)
- Underline animation : ScaleX 0 → 1, origin left

**Boutons (Desktop)** :
- "Connexion" : Ghost button, color #A0A0B8, hover #FFFFFF
- "S'inscrire" : Outline button, border 1px #F59E0B, color #F59E0B, padding 10px 20px, radius `radius-md`
  - Hover : bg #F59E0B, color #0A0A0F, transition `transition-fast`
- "Devenir Pro" (variant) : Même style que "S'inscrire"

**Menu Mobile (Hamburger)** :
- Icon : 3 lignes (Lucide Menu), 24px, #FFFFFF
- Drawer : Slide from right, width 280px, bg #14141E, shadow `shadow-xl`
- Overlay : `rgba(10, 10, 15, 0.8)`, backdrop-filter blur(4px)
- Items : Empilés, padding 16px 24px, 18px Medium
- Fermeture : Icon X (Lucide X), swipe right, clic overlay

**Scroll Behavior** :
- Scroll < 50px : Pas d'ombre
- Scroll ≥ 50px : `box-shadow: 0 2px 20px rgba(0,0,0,0.3)`
- Transition : `transition-fast`

#### 4.1.2 Boutons

**Primary Button** :
```
Background: #F59E0B
Color: #0A0A0F
Padding: 12px 24px
Font: Inter SemiBold, 14px
Border-radius: radius-md (8px)
Border: none
Cursor: pointer

Hover:
  Background: #FBBF24
  Transform: translateY(-2px)
  Box-shadow: shadow-gold
  Transition: transition-base

Active:
  Transform: translateY(0)
  Box-shadow: shadow-inner

Disabled:
  Opacity: 0.4
  Cursor: not-allowed
  Transform: none
  Box-shadow: none
```

**Secondary Button** :
```
Background: transparent
Color: #FFFFFF
Padding: 12px 24px
Font: Inter SemiBold, 14px
Border-radius: radius-md
Border: 1px solid rgba(255, 255, 255, 0.2)

Hover:
  Background: rgba(255, 255, 255, 0.05)
  Border-color: rgba(255, 255, 255, 0.4)
  Transition: transition-base

Active:
  Background: rgba(255, 255, 255, 0.1)
```

**Ghost Button** :
```
Background: transparent
Color: #A0A0B8
Padding: 8px 16px
Font: Inter Medium, 14px
Border: none

Hover:
  Color: #FFFFFF
  Background: rgba(255, 255, 255, 0.05)
  Border-radius: radius-md
```

**Danger Button** :
```
Background: #EF4444
Color: #FFFFFF
Padding: 12px 24px
Font: Inter SemiBold, 14px
Border-radius: radius-md

Hover: Background #DC2626, translateY(-2px)
```

**Icon Button** :
```
Size: 40px × 40px
Background: transparent
Color: #A0A0B8
Border-radius: radius-md
Display: flex, align-items: center, justify-content: center

Hover:
  Background: rgba(255, 255, 255, 0.05)
  Color: #FFFFFF
```

**Button Sizes** :
| Taille | Padding | Font | Usage |
|--------|---------|------|-------|
| Small | 8px 16px | 12px Medium | Actions secondaires, tags |
| Medium (défaut) | 12px 24px | 14px SemiBold | Actions principales |
| Large | 16px 32px | 16px SemiBold | CTA hero, actions importantes |

#### 4.1.3 Cards

**Card Standard** :
```
Background: #1A1A28
Border: 1px solid rgba(255, 255, 255, 0.05)
Border-radius: radius-lg (12px)
Padding: space-6 (24px)
Box-shadow: shadow-md

Hover (si cliquable):
  Border-color: rgba(245, 158, 11, 0.3)
  Transform: translateY(-4px)
  Box-shadow: shadow-lg
  Transition: transition-base
```

**Card Pro (Résultats Recherche)** :
```
Layout: Vertical
Padding: 0 (image flush top) + space-5 (20px) content

Header:
  - Photo: 72px circle, centered, border 2px rgba(245,158,11,0.3)
  - Badge niveau: 24px circle overlay, bottom-right of photo
  
Content:
  - Nom: 18px SemiBold, #FFFFFF, centered
  - Catégorie + Ville: 14px, #A0A0B8, centered
  - Score bar: bg rgba(245,158,11,0.15), height 6px, radius-full
    - Fill: #F59E0B, width = score%, transition 1s ease
  - Stats row: flex, gap 16px, centered
    - ⭐ 4.8 (125 avis): 14px
    - 💰 15-50k FCFA: 14px
    - 📍 2.5km: 14px
  - Availability badge: centered, mt 12px
    - Vert: "Dispo aujourd'hui" | Orange: "Dispo demain" | Rouge: "Prochaine: 12 juin"
  - Tags: flex wrap, gap 8px, centered
    - Tag: bg Accent Info Dim, color Accent Info, padding 4px 12px, radius-full, font 12px
  - CTA: "Voir profil" button (Secondary style), mt 16px, full width
```

**Card Podium #1 (Or)** :
```
Width: 320px
Background: Gradient Card
Border: 1px solid rgba(255, 215, 0, 0.3)
Border-radius: radius-xl (16px)
Padding: space-8 (32px)
Box-shadow: shadow-gold-lg

Hover: scale(1.03), shadow intensified

Elements:
  - Crown icon: 48px, #FFD700, position top -24px center
  - Badge "1": 48px circle, bg Gold, position top of card
  - Photo: 120px circle, border 3px Gold, mt space-6
  - Nom: 22px SemiBold
  - Catégorie: 14px, #A0A0B8
  - Score: 48px Bold, Gold color
  - Stars: 20px, filled Gold
  - "127 avis vérifiés": 14px, #A0A0B8
  - Mini-stats row: flex, gap 16px
```

**Card Podium #2 (Argent)** :
- Même structure que #1 mais :
  - Width : 280px (plus petit)
  - Height : 320px
  - Position : Alignée en bas, 20px plus bas que #1
  - Badge "2" : bg Silver
  - Border : `rgba(192, 192, 192, 0.3)`
  - Shadow : `shadow-sm`
  - Photo : 100px

**Card Podium #3 (Bronze)** :
- Même structure que #2 mais :
  - Height : 300px
  - Badge "3" : bg Bronze
  - Border : `rgba(205, 127, 50, 0.3)`
  - Photo : 90px

#### 4.1.4 Formulaires

**Input Text** :
```
Background: #11111A
Border: 1px solid rgba(255, 255, 255, 0.1)
Border-radius: radius-md (8px)
Padding: 12px 16px
Font: Inter Regular, 16px
Color: #FFFFFF
Placeholder: #6B6B80
Width: 100%

Focus:
  Border-color: #F59E0B
  Box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.15)
  Outline: none
  Transition: transition-fast

Error:
  Border-color: #EF4444
  Box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15)
```

**Textarea** :
- Même style que Input Text
- Min-height : 100px
- Resize : vertical
- Compteur : "X/500" en bas à droite, Caption style

**Select/Dropdown** :
```
Background: #11111A
Border: 1px solid rgba(255, 255, 255, 0.1)
Border-radius: radius-md
Padding: 12px 40px 12px 16px (espace pour chevron)
Font: Inter Regular, 16px
Color: #FFFFFF
Appearance: none
Background-image: chevron-down icon (Lucide), 20px, #A0A0B8, position right 12px center

Focus: Même style que Input Focus
```

**Checkbox** :
```
Size: 20px × 20px
Border-radius: radius-sm (4px)
Border: 2px solid rgba(255, 255, 255, 0.2)
Background: transparent

Checked:
  Background: #F59E0B
  Border-color: #F59E0B
  Background-image: check icon (Lucide), 14px, #0A0A0F
  
Transition: transition-fast
```

**Toggle Switch** :
```
Track: width 44px, height 24px, radius-full
Track off: bg #6B6B80
Track on: bg #F59E0B
Thumb: 20px circle, bg #FFFFFF, shadow-sm
Thumb position: left 2px (off), left 22px (on)
Transition: transition-fast
```

**Radio Button** :
```
Size: 20px × 20px
Border-radius: radius-full
Border: 2px solid rgba(255, 255, 255, 0.2)

Checked:
  Border-color: #F59E0B
  Background: radial-gradient(circle, #F59E0B 40%, transparent 45%)
```

#### 4.1.5 Badges & Tags

**Availability Badge** :
```
Green (Disponible):
  Background: Accent Success Dim
  Color: #10B981
  Border: 1px solid rgba(16, 185, 129, 0.3)
  
Orange (Demain):
  Background: rgba(249, 115, 22, 0.15)
  Color: #F97316
  Border: 1px solid rgba(249, 115, 22, 0.3)
  
Red (Indisponible):
  Background: Accent Danger Dim
  Color: #EF4444
  Border: 1px solid rgba(239, 68, 68, 0.3)

Common: padding 6px 12px, radius-full, font 12px Medium, inline-flex, gap 6px
Icon: 12px circle (filled), same color as text
```

**Category Tag** :
```
Background: Accent Info Dim
Color: #3B82F6
Padding: 4px 12px
Border-radius: radius-full
Font: 12px Medium
```

**Level Badge** (sur photo de profil) :
```
Size: 28px × 28px circle
Position: absolute, bottom -4px, right -4px
Border: 2px solid #1A1A28

Débutant: bg #6B6B80, icon "D"
Confirmé: bg #CD7F32, icon star
Expert: bg #C0C0C0, icon 2 stars
Maître: bg #FFD700, icon 3 stars
Légende: bg #F59E0B, icon crown

Icon: Lucide, 14px, #FFFFFF
```

**Trust Seal Badge** :
```
Background: Gradient Gold
Color: #0A0A0F
Padding: 6px 16px
Border-radius: radius-full
Font: 12px Bold, uppercase, letter-spacing 0.05em
Icon: Shield Check (Lucide), 14px
Shadow: shadow-gold
```

#### 4.1.6 Étoiles de Notation

```
Container: flex, gap 4px

Étoile vide:
  Icon: Star (Lucide)
  Size: 24px
  Color: #4A4A5C
  Fill: none (stroke only)
  Stroke-width: 2px

Étoile pleine:
  Icon: Star (Lucide)
  Size: 24px
  Color: #F59E0B
  Fill: #F59E0B
  Stroke-width: 0

Étoile hover (interactive):
  Transform: scale(1.2)
  Transition: transition-fast
  Cursor: pointer

Étoile demi (si notation 3.5):
  Fill via clip-path ou SVG gradient
```

#### 4.1.7 Barre de Score

```
Container:
  Height: 8px
  Background: rgba(245, 158, 11, 0.15)
  Border-radius: radius-full
  Overflow: hidden

Fill:
  Height: 100%
  Background: linear-gradient(90deg, #F59E0B, #FBBF24)
  Border-radius: radius-full
  Transition: width 1.5s cubic-bezier(0.22, 1, 0.36, 1)

Label (optionnel):
  Position: absolute right
  Font: 14px Bold, #F59E0B
```

#### 4.1.8 Modales

```
Overlay:
  Background: rgba(10, 10, 15, 0.85)
  Backdrop-filter: blur(8px)
  Z-index: z-modal

Container:
  Background: #1A1A28
  Border: 1px solid rgba(255, 255, 255, 0.08)
  Border-radius: radius-xl (16px)
  Padding: space-8 (32px)
  Max-width: 480px (small), 640px (medium), 800px (large)
  Width: calc(100% - 32px)
  Box-shadow: shadow-xl

Entrée:
  Transform: scale(0.95) → scale(1)
  Opacity: 0 → 1
  Transition: 200ms ease

Header:
  Titre: H4 (22px SemiBold)
  Bouton fermer: Icon Button (X), position absolute top-right

Footer:
  Flex row, justify-content flex-end, gap 12px
  Boutons: Secondary + Primary
```

#### 4.1.9 Toasts / Notifications

```
Container:
  Position: fixed, bottom 24px, right 24px
  Z-index: z-toast

Toast:
  Background: #1A1A28
  Border: 1px solid rgba(255, 255, 255, 0.08)
  Border-radius: radius-lg
  Padding: 16px 20px
  Min-width: 320px
  Max-width: 480px
  Box-shadow: shadow-lg
  Display: flex, gap 12px, align-items center

Types:
  Success: border-left 3px solid #10B981, icon Check Circle (vert)
  Error: border-left 3px solid #EF4444, icon X Circle (rouge)
  Warning: border-left 3px solid #F97316, icon Alert Triangle (orange)
  Info: border-left 3px solid #3B82F6, icon Info (bleu)

Entrée:
  Transform: translateX(100%) → translateX(0)
  Opacity: 0 → 1
  Transition: 300ms cubic-bezier(0.22, 1, 0.36, 1)

Sortie:
  Transform: translateX(0) → translateX(100%)
  Opacity: 1 → 0
  Transition: 200ms ease
  Auto-dismiss: 5 secondes
```

---

### 4.2 Page d'Accueil (Landing)

#### 4.2.1 Section Hero

**Dimensions** :
- Min-height : 100vh (min 700px)
- Padding-top : 120px (espace pour header fixed)
- Padding-bottom : space-16 (64px)

**Fond** :
```
Background: Gradient Hero
Position: relative
Overflow: hidden
```

**Effet de Particules (Canvas)** :
- 80 particules max
- Taille : 2-4px
- Couleur : `rgba(245, 158, 11, 0.25)`
- Mouvement : Dérive vers le haut, vitesse 0.3-0.8 px/frame
- Connexions : Lignes entre particules à < 120px, opacity 0.08, 1px width
- Mouse interaction : Les particules s'éloignent du curseur (force répulsive, rayon 100px)
- Opacity globale : 60% (ne pas surcharger)

**Contenu (centré, max-width 800px)** :

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  [Badge "TOP"] "N°1 des professionnels au Cameroun" │
│                                                     │
│  "Trouvez les meilleurs pros"                       │
│  "du Cameroun"                                      │
│  H1, 56px Bold, #FFFFFF, text-align center          │
│                                                     │
│  "Notés et vérifiés par des milliers de clients     │
│   satisfaits..."                                    │
│  20px Regular, #A0A0B8, text-align center           │
│  max-width 560px, mx-auto                           │
│                                                     │
│  ┌──────────────────────────────────────────────┐   │
│  │  [🔍 De quel pro avez-vous besoin ?] [Rechercher] │
│  │   Input                          Button         │
│  └──────────────────────────────────────────────┘   │
│  Barre de recherche, max-width 640px, mx-auto       │
│                                                     │
│  2,400+ Pros     15,000+ Missions     4.8★ Note    │
│  ───────────     ────────────────     ──────────    │
│  [Stats de confiance, flex row, gap 48px, centered] │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Badge "TOP"** :
```
Background: rgba(245, 158, 11, 0.12)
Border: 1px solid rgba(245, 158, 11, 0.25)
Color: #F59E0B
Padding: 8px 16px
Border-radius: radius-full
Font: 12px SemiBold, uppercase, letter-spacing 0.08em
Display: inline-flex, gap 8px, align-items center
Icon: Sparkles (Lucide), 14px
Margin-bottom: space-6
```

**Barre de Recherche** :
```
Container:
  Background: rgba(26, 26, 40, 0.8)
  Border: 1px solid rgba(255, 255, 255, 0.08)
  Border-radius: radius-xl (16px)
  Padding: 8px
  Display: flex
  Gap: 8px

Input:
  Flex: 1
  Background: transparent
  Border: none
  Color: #FFFFFF
  Placeholder: "De quel pro avez-vous besoin ?"
  Font: 16px Regular
  Padding: 14px 20px
  
  Focus: outline none

Button:
  Background: #F59E0B
  Color: #0A0A0F
  Padding: 14px 28px
  Border-radius: radius-lg (12px)
  Font: 16px SemiBold
  Display: flex, gap 8px, align-items center
  Icon: Search (Lucide), 20px
  
  Hover: bg #FBBF24, scale(1.02)
```

**Stats de Confiance** :
```
Container: flex, justify-content center, gap space-10 (40px)
Mobile: flex-col, gap space-4

Chaque stat:
  Number: 32px Bold, #FFFFFF
  Label: 14px Regular, #6B6B80
  Align: center

Séparateur (desktop): 
  Width: 1px
  Height: 40px
  Background: rgba(255, 255, 255, 0.1)
```

#### 4.2.2 Section Top Pro Podium

**Dimensions** :
- Padding : space-20 (80px) vertical
- Background : #14141E

**En-tête de section** :
```
Label: "CLASSEMENT" — 11px Bold, uppercase, #F59E0B, letter-spacing 0.1em
Titre: "Les meilleurs pros du mois" — H2 (40px SemiBold)
Sous-titre: "Découvrez les professionnels les mieux notés de votre ville" 
           — Body Large, #A0A0B8
Align: center
Mb: space-12
```

**Filtres du Podium** :
```
Container: flex, justify-content center, gap space-3, mb space-10

Catégories (tabs):
  Style: pill buttons
  Items: "Global", "Plomberie", "Électricité", "Coiffure", "Menuiserie", "+"
  Inactif: bg transparent, color #A0A0B8, border 1px rgba(255,255,255,0.1)
  Actif: bg #F59E0B, color #0A0A0F
  Padding: 8px 16px
  Radius: radius-full
  Scrollable horizontal sur mobile

Ville (dropdown):
  Position: right of categories
  Style: Select component
```

**Podium Visuel (Top 3)** :
```
Container: flex, align-items flex-end, justify-content center, gap space-6
Mobile: carousel (snap scroll)

Card #1 (Or - Centre):
  Width: 300px (desktop), 280px (tablet)
  Position: relative, z-index 2
  
  Crown: 
    Position: absolute, top -30px, left 50%, transform translateX(-50%)
    Icon: Crown (Lucide), 56px, #FFD700
    Animation: float 3s ease-in-out infinite
    
  Inner:
    Background: linear-gradient(180deg, rgba(255,215,0,0.08) 0%, #1A1A28 30%)
    Border: 1px solid rgba(255, 215, 0, 0.35)
    Border-radius: radius-xl
    Padding: space-8
    Text-align: center
    Box-shadow: 0 0 60px rgba(255, 215, 0, 0.25), shadow-lg
    
  Rank badge:
    Width: 48px, height: 48px
    Background: Gradient Gold
    Border-radius: radius-full
    Position: absolute, top -24px, left 50%, transform translateX(-50%)
    Display: flex, align-items center, justify-content center
    Font: 20px Bold, #0A0A0F
    Border: 3px solid #1A1A28
    
  Photo: 112px circle, border 3px #FFD700, mt space-4
  Name: 22px SemiBold, #FFFFFF, mt space-4
  Category: 14px, #A0A0B8
  Score: 48px Bold, #FFD700
  Stars: 20px, #F59E0B filled
  Reviews: 14px, #6B6B80, "127 avis vérifiés"
  
  Hover: scale(1.03), shadow 0 0 80px rgba(255,215,0,0.35)

Card #2 (Argent - Gauche):
  Width: 260px
  Position: relative
  Transform: translateY(24px)
  
  Inner:
    Background: linear-gradient(180deg, rgba(192,192,192,0.06) 0%, #1A1A28 30%)
    Border: 1px solid rgba(192, 192, 192, 0.25)
    Box-shadow: 0 0 30px rgba(192, 192, 192, 0.1)
    
  Rank badge: bg #C0C0C0
  Photo: 96px, border #C0C0C0
  Score: 40px, #C0C0C0
  
  Hover: scale(1.03)

Card #3 (Bronze - Droite):
  Width: 260px
  Transform: translateY(48px)
  
  Inner:
    Background: linear-gradient(180deg, rgba(205,127,50,0.06) 0%, #1A1A28 30%)
    Border: 1px solid rgba(205, 127, 50, 0.25)
    Box-shadow: 0 0 30px rgba(205, 127, 50, 0.1)
    
  Rank badge: bg #CD7F32
  Photo: 88px, border #CD7F32
  Score: 36px, #CD7F32
  
  Hover: scale(1.03)
```

**Liste 4-10** :
```
Container: max-width 640px, mx-auto, mt space-10
Background: rgba(26, 26, 40, 0.5)
Border: 1px solid rgba(255, 255, 255, 0.05)
Border-radius: radius-lg
Overflow: hidden

Header row (grid):
  Columns: 40px | 48px | 1fr | 120px | 80px | 60px
  Padding: 12px 16px
  Font: 11px Bold, uppercase, #6B6B80, letter-spacing 0.05em
  Labels: "#", "", "PRO", "CATÉGORIE", "SCORE", ""

Rows:
  Each: grid same columns, padding 12px 16px, align-items center
  Border-top: 1px solid rgba(255, 255, 255, 0.03)
  
  Rank: 14px Bold, #A0A0B8
  Photo: 36px circle
  Name: 14px Medium, #FFFFFF
  Name sub: 12px, #A0A0B8 (category)
  Score bar: container 80px × 6px, fill #F59E0B
  Trend: 
    Up: ArrowUp (Lucide), 14px, #10B981
    Down: ArrowDown, 14px, #EF4444
    Stable: Minus, 14px, #6B6B80
  
  Hover row: bg rgba(255, 255, 255, 0.02)
```

#### 4.2.3 Section Catégories Populaires

**Dimensions** :
- Padding : space-20 vertical
- Background : #0A0A0F

**En-tête** :
```
Label: "EXPLORER"
Titre: "Trouvez un pro par métier"
Align: center
Mb: space-12
```

**Grille de Catégories** :
```
Layout: grid, 4 colonnes (desktop), 2 (tablet), 2 (mobile)
Gap: space-4
Max-width: 960px, mx-auto

Card catégorie:
  Background: #1A1A28
  Border: 1px solid rgba(255, 255, 255, 0.05)
  Border-radius: radius-lg
  Padding: space-6
  Text-align: center
  Cursor: pointer
  
  Icon container:
    Width: 56px, height: 56px
    Background: rgba(59, 130, 246, 0.1)
    Border-radius: radius-lg
    Display: flex, align-items center, justify-content center
    Mx: auto, mb: space-4
    Icon: Lucide (category-specific), 28px, #3B82F6
    
  Name: 16px SemiBold, #FFFFFF
  Count: 14px, #6B6B80, "234 pros"
  
  Hover:
    Border-color: rgba(59, 130, 246, 0.3)
    Transform: translateY(-4px)
    Shadow: shadow-lg
    Icon container: bg rgba(59, 130, 246, 0.2)
```

**Mapping Icônes Catégories** :
| Catégorie | Icône Lucide |
|-----------|-------------|
| Plomberie | Droplet |
| Électricité | Zap |
| Menuiserie | Hammer |
| Maçonnerie | BrickWall (ou Mountain) |
| Peinture | Paintbrush |
| Jardinage | Flower2 (ou TreePine) |
| Coiffure | Scissors |
| Couture | Ruler |
| Mécanique | Wrench |
| Informatique | Monitor |
| Design | Palette |
| Photographie | Camera |
| Cuisine | ChefHat (ou UtensilsCrossed) |
| Nettoyage | Sparkles |
| Déménagement | Truck |
| Climatisation | Wind |
| Ferronnerie | Flame (ou Anvil) |
| Carrelage | Grid3x3 |
| Électronique | Cpu |
| Autre | CircleHelp |

#### 4.2.4 Section Comment ça Marche

**Dimensions** :
- Padding : space-20 vertical
- Background : #14141E

**En-tête** :
```
Label: "SIMPLE & RAPIDE"
Titre: "Comment ça marche ?"
Align: center
Mb: space-12
```

**Étapes (3 colonnes)** :
```
Layout: grid, 3 colonnes (desktop), 1 (mobile)
Gap: space-8
Max-width: 1080px, mx-auto

Step card:
  Text-align: center
  
  Number:
    Width: 48px, height: 48px
    Background: rgba(245, 158, 11, 0.15)
    Border: 2px solid rgba(245, 158, 11, 0.3)
    Border-radius: radius-full
    Display: flex, align-items center, justify-content center
    Font: 20px Bold, #F59E0B
    Mx: auto, mb: space-5
    
  Title: 20px SemiBold, #FFFFFF, mb: space-3
  Description: 16px Regular, #A0A0B8, line-height 1.6
  
Step 1:
  Number: "1"
  Title: "Trouvez un pro"
  Description: "Recherchez par métier, ville ou disponibilité. Comparez les profils, les avis vérifiés et les portfolios."
  
Step 2:
  Number: "2"
  Title: "Contactez & réalisez"
  Description: "Envoyez une demande via la messagerie ou appelez directement. Convenez d'une date et d'un prix."
  
Step 3:
  Number: "3"
  Title: "Notez votre expérience"
  Description: "Après la mission, déposez un avis détaillé. Votre notation aide le pro à progresser et aide d'autres clients."
```

**Connecteurs (Desktop uniquement)** :
```
Entre Step 1 et 2, Step 2 et 3:
  Line: 1px dashed rgba(255, 255, 255, 0.1)
  Width: calc(33% - 48px)
  Position: absolute, top 24px
  Arrow: ChevronRight icon à l'extrémité
```

#### 4.2.5 Section Témoignages

**Dimensions** :
- Padding : space-20 vertical
- Background : #0A0A0F

**En-tête** :
```
Label: "TÉMOIGNAGES"
Titre: "Ils nous font confiance"
Align: center
Mb: space-12
```

**Carousel Témoignages** :
```
Container: max-width 800px, mx-auto

Card témoignage:
  Background: #1A1A28
  Border: 1px solid rgba(255, 255, 255, 0.05)
  Border-radius: radius-xl
  Padding: space-8
  Text-align: center
  
  Stars: 5 étoiles #F59E0B, mb space-4
  Quote: 22px Regular, #FFFFFF, line-height 1.5, italic
       — mb space-6
  Author photo: 56px circle, mb space-3
  Author name: 16px SemiBold, #FFFFFF
  Author detail: 14px, #A0A0B8, "Client à Douala"

Navigation:
  Dots: 8px circles, #6B6B80 inactive, #F59E0B active
  Position: bottom -32px
  
  Flèches (desktop):
    Circle buttons, 40px, bg rgba(255,255,255,0.05)
    Icons: ChevronLeft / ChevronRight
    Position: left/right of card
    Hover: bg rgba(255,255,255,0.1)
```

#### 4.2.6 Section CTA Devenir Pro

**Dimensions** :
- Padding : space-20 vertical
- Background : Gradient (subtle, #0A0A0F → #14141E → #0A0A0F)

**Contenu (2 colonnes)** :
```
Layout: grid, 2 colonnes (desktop), 1 (mobile)
Gap: space-12
Max-width: 1080px, mx-auto
Align-items: center

Colonne gauche:
  Label: "PROFESSIONNELS"
  Titre: "Développez votre activité avec Services Pro"
         H2, #FFFFFF
  Description: "Rejoignez des milliers de professionnels au Cameroun. Gagnez en visibilité, recevez des avis vérifiés et devenez le référent de votre métier."
               Body Large, #A0A0B8
  
  Avantages (liste):
    Item: flex, gap space-3, align-items center, mb space-3
      Icon: CheckCircle (Lucide), 20px, #10B981
      Text: 16px Regular, #FFFFFF
    
    Items:
      - "Inscription gratuite"
      - "Profil professionnel complet"
      - "Système de notation transparent"
      - "Visibilité auprès de milliers de clients"
  
  Button: "Créer mon profil pro" (Primary, Large)
  
Colonne droite:
  Illustration/mockup:
    Phone mockup montrant un profil pro Services Pro
    Shadow: shadow-xl
    Border-radius: radius-xl
```

#### 4.2.7 Footer

**Dimensions** :
- Padding : space-16 top, space-8 bottom
- Background : #0A0A0F
- Border-top : 1px solid rgba(255, 255, 255, 0.05)

**Structure (4 colonnes)** :
```
Layout: grid, 4 colonnes (desktop), 2 (tablet), 1 (mobile)
Gap: space-8
Max-width: 1280px, mx-auto

Colonne 1 — Brand:
  Logo: Services Pro (même que header)
  Tagline: "Les meilleurs pros du Cameroun, notés par ceux qui comptent."
         14px, #A0A0B8, mt space-4
  Social icons: flex, gap space-3, mt space-5
    - Facebook, WhatsApp, Instagram, LinkedIn
    - 20px, #6B6B80, hover #FFFFFF

Colonne 2 — Clients:
  Title: "Pour les clients" — 14px SemiBold, #FFFFFF, mb space-4
  Links: 
    - Chercher un pro
    - Comment ça marche
    - Aide & FAQ
    - Sécurité
  Style: 14px, #A0A0B8, hover #FFFFFF, mb space-3

Colonne 3 — Pros:
  Title: "Pour les pros" — same style
  Links:
    - Devenir un pro
    - Comment optimiser son profil
    - Tarifs (future)
    - Ressources

Colonne 4 — Légal:
  Title: "Légal" — same style
  Links:
    - Conditions d'utilisation
    - Politique de confidentialité
    - Politique de notation
    - Mentions légales

Bottom bar:
  Border-top: 1px solid rgba(255, 255, 255, 0.05)
  Mt: space-8, pt: space-6
  Text: "© 2026 Services Pro. Tous droits réservés."
        14px, #6B6B80, text-align center
```

---

### 4.3 Page de Résultats de Recherche

#### 4.3.1 Layout Général

```
┌──────────────────────────────────────────────────────────────┐
│  HEADER (fixed)                                               │
├──────────────────────────────────────────────────────────────┤
│                                                               │
│  Barre de recherche compacte (sticky sous header)             │
│  ┌──────────────────────────────────────────────────────┐    │
│  │  [🔍 plombier douala]        [Filtres ▼]  [Carte ▼]  │    │
│  └──────────────────────────────────────────────────────┘    │
│                                                               │
│  ┌─────────────────────┐  ┌──────────────────────────────┐   │
│  │                     │  │                              │   │
│  │  FILTRES            │  │  RÉSULTATS                   │   │
│  │                     │  │                              │   │
│  │  Catégorie          │  │  234 pros trouvés            │   │
│  │  [Dropdown    ]     │  │  Trier: Pertinence ▼         │   │
│  │                     │  │                              │   │
│  │  Ville              │  │  ┌──────────┐ ┌──────────┐   │   │
│  │  [Dropdown    ]     │  │  │ Card Pro │ │ Card Pro │   │   │
│  │                     │  │  └──────────┘ └──────────┘   │   │
│  │  Disponibilité      │  │  ┌──────────┐ ┌──────────┐   │   │
│  │  [Aujourd'hui]      │  │  │ Card Pro │ │ Card Pro │   │   │
│  │                     │  │  └──────────┘ └──────────┘   │   │
│  │  Fourchette de prix │  │                              │   │
│  │  [Min] — [Max]      │  │  [1] [2] [3] ... [20]      │   │
│  │                     │  │                              │   │
│  │  Score minimum      │  └──────────────────────────────┘   │
│  │  [━━●━━━━] 45       │                                   │
│  │                     │                                   │
│  │  [✓] Vérifiés       │                                   │
│  │  [ ] Urgence        │                                   │
│  │                     │                                   │
│  │  [Réinitialiser]    │                                   │
│  │                     │                                   │
│  └─────────────────────┘                                   │
│                                                               │
└──────────────────────────────────────────────────────────────┘
```

#### 4.3.2 Barre de Recherche Compacte

```
Background: #14141E
Border-bottom: 1px solid rgba(255, 255, 255, 0.05)
Padding: space-4 0
Position: sticky, top 72px (sous header), z-index 100

Container: flex, gap space-3, max-width 1280px, mx-auto

Input:
  Flex: 1
  Background: #1A1A28
  Border: 1px solid rgba(255, 255, 255, 0.08)
  ... (même style input global)

Buttons:
  "Filtres" — Secondary style, icon SlidersHorizontal
  "Carte" — Secondary style, icon Map (toggle on/off)
```

#### 4.3.3 Sidebar Filtres

```
Width: 280px (desktop), full width (mobile, drawer)
Background: transparent
Padding-right: space-6

Filtre group:
  Margin-bottom: space-6
  
  Label: 14px SemiBold, #FFFFFF, mb space-3
  
  Input/Dropdown/Slider: (styles globaux)

Slider (range):
  Track: height 6px, bg rgba(255,255,255,0.1), radius-full
  Fill: bg #F59E0B
  Thumb: 20px circle, bg #FFFFFF, border 3px solid #F59E0B, shadow-md
  
Toggle:
  Label à droite: 14px Regular, #A0A0B8
  
Action:
  "Réinitialiser" — Ghost button, full width
  "Appliquer" — Primary button, full width (mobile only)
```

#### 4.3.4 Grille de Résultats

```
Layout: grid, 3 colonnes (desktop), 2 (tablet), 1 (mobile)
Gap: space-5

Header results:
  Flex, justify-content space-between, align-items center, mb space-6
  
  Left: "234 pros trouvés" — 18px SemiBold
  Right: 
    "Trier par" label + Select dropdown
    View toggle: Grid icon / List icon (icon buttons)
```

**Vue Liste (alternative)** :
```
Layout: 1 colonne, gap space-3

Row:
  Background: #1A1A28
  Border: 1px solid rgba(255, 255, 255, 0.05)
  Border-radius: radius-lg
  Padding: space-4
  Display: flex, gap space-4, align-items center
  
  Photo: 64px circle
  Info: flex 1
    Name: 16px SemiBold
    Category + City: 14px, #A0A0B8
    Tags: flex, gap space-2
  Stats: 
    Score badge: #F59E0B
    Stars + count
  Actions:
    "Voir profil" — Ghost button
    "Contacter" — Primary button small
```

#### 4.3.5 Pagination

```
Container: flex, justify-content center, gap space-2, mt space-10

Button page:
  Min-width: 40px, height: 40px
  Background: transparent
  Border: 1px solid rgba(255, 255, 255, 0.1)
  Border-radius: radius-md
  Font: 14px Medium
  Color: #A0A0B8
  
  Active: bg #F59E0B, color #0A0A0F, border-color #F59E0B
  Hover (inactive): bg rgba(255, 255, 255, 0.05)

Previous/Next:
  Icons: ChevronLeft / ChevronRight
  Disabled: opacity 0.3

Mobile: 
  "Charger plus" button (Secondary, full width)
  Infinite scroll option
```

---

### 4.4 Page Profil Pro (Public)

#### 4.4.1 Bannière

```
Height: 300px (desktop), 200px (mobile)
Width: 100%
Background: image cover, center
Overlay: linear-gradient(180deg, transparent 0%, rgba(10,10,15,0.7) 70%, #0A0A0F 100%)
```

#### 4.4.2 Info Header

```
Position: relative, margin-top: -80px (overlap bannière)
Padding: 0 space-6

Photo container:
  Position: relative, display: inline-block
  
  Photo: 140px circle (desktop), 100px (mobile)
  Border: 4px solid #0A0A0F
  
  Level badge: position absolute, bottom 0, right 0
  Trust seal: position absolute, top 0, right 0 (si applicable)

Info text:
  Mt: space-4
  
  Name: H2 (40px Bold)
  Category badge: inline-flex, bg Accent Info Dim, color Accent Info
  City: flex, gap space-2, icon MapPin, 16px, #A0A0B8

Actions row:
  Flex, gap space-3, mt space-5
  
  "Contacter" — Primary, Large, icon MessageCircle
  "Demander un devis" — Secondary, Large, icon FileText
  "Appeler" — Icon Button, icon Phone
  "Partager" — Icon Button, icon Share2
```

#### 4.4.3 Score Section

```
Background: #1A1A28
Border: 1px solid rgba(255, 255, 255, 0.05)
Border-radius: radius-xl
Padding: space-8
Mt: space-8

Layout: grid, 2 colonnes (desktop), 1 (mobile)
Gap: space-8

Colonne gauche — Score global:
  Score number: 80px Bold, #F59E0B, text-align center
  Label: "Pro Score" — 14px Medium, #A0A0B8, text-align center
  Bar: max-width 300px, mx-auto, mt space-4
  
  "Basé sur 127 avis vérifiés" — 14px, #6B6B80, text-align center

Colonne droite — Répartition:
  5 rows (5★ à 1★):
    Label: "5★" — 14px, #A0A0B8, width 24px
    Bar: flex 1, height 8px, bg rgba(255,255,255,0.05), radius-full
      Fill: #F59E0B, width = %
    Count: "89" — 14px, #A0A0B8, width 32px, text-align right
```

#### 4.4.4 Onglets

```
Container: flex, gap space-1, border-bottom 1px solid rgba(255,255,255,0.08)
Mt: space-8
Overflow-x: auto (mobile)

Tab:
  Padding: 12px 20px
  Font: 14px Medium
  Color: #A0A0B8
  Border-bottom: 2px solid transparent
  Margin-bottom: -1px
  White-space: nowrap
  
  Active: color #F59E0B, border-color #F59E0B
  Hover: color #FFFFFF

Tabs:
  - "À propos" (default)
  - "Portfolio" (badge count si items)
  - "Avis" (badge count)
  - "Disponibilités"
```

#### 4.4.5 Contenu Onglet "À propos"

```
Layout: grid, 2 colonnes 60/40 (desktop), 1 (mobile)
Gap: space-8
Mt: space-8

Colonne principale:
  Section "Bio":
    Title: H4, mb space-3
    Text: Body, #A0A0B8
    
  Section "Compétences":
    Title: H4, mb space-3
    Tags: flex wrap, gap space-2
      Tag: bg #222234, color #FFFFFF, padding 8px 16px, radius-md, 14px

Colonne secondaire:
  Info cards (stacked, gap space-4):
    
    Card "Tarifs":
      Icon: Wallet (Lucide), 20px, #F59E0B
      "15 000 — 50 000 FCFA"
      "Tarification horaire"
      "Devis gratuit : Oui"
      
    Card "Zone d'intervention":
      Icon: MapPin, 20px, #10B981
      "Douala, Akwa"
      "Rayon : 15 km"
      [Mini carte]
      
    Card "Expérience":
      Icon: Calendar, 20px, #3B82F6
      "8 ans d'expérience"
      "Membre depuis janv. 2025"
```

#### 4.4.6 Contenu Onglet "Portfolio"

```
Grid: 3 colonnes (desktop), 2 (tablet), 1 (mobile)
Gap: space-4
Mt: space-8

Item:
  Aspect-ratio: 4/3
  Background: image cover, center
  Border-radius: radius-lg
  Cursor: pointer
  Position: relative
  
  Hover overlay:
    Background: rgba(10, 10, 15, 0.7)
    Display: flex, align-items center, justify-content center
    Icon: ZoomIn (Lucide), 32px, #FFFFFF
    
  Caption (optionnel):
    Position: absolute, bottom 0
    Background: linear-gradient(transparent, rgba(0,0,0,0.7))
    Padding: space-4
    Font: 14px Medium
```

#### 4.4.7 Contenu Onglet "Avis"

```
Mt: space-8

Filtres avis:
  Flex, gap space-3, mb space-6
  
  Segmented control:
    Background: #1A1A28
    Border-radius: radius-lg
    Padding: 4px
    
    Option:
      Padding: 8px 16px
      Radius: radius-md
      Font: 14px Medium
      
      Active: bg #222234, color #FFFFFF
      Inactive: color #A0A0B8
      
    Options: "Tous (127)", "5★", "4★", "3★", "2★", "1★", "Avec réponse"

Sort:
  "Trier par" + Select: "Plus récent", "Plus utile", "Plus positif"

Liste avis:
  Gap: space-4
  
  Review card:
    Background: #1A1A28
    Border: 1px solid rgba(255, 255, 255, 0.05)
    Border-radius: radius-lg
    Padding: space-6
    
    Header:
      Flex, gap space-3, align-items center, mb space-4
      
      Photo: 40px circle (ou anonyme icon)
      Info:
        Name: 14px SemiBold (ou "Client anonyme")
        Date: 12px, #6B6B80
      Rating: margin-left auto
        Score: 14px Bold, #F59E0B
        Stars: 16px
    
    Body:
      Comment: 16px Regular, #A0A0B8, line-height 1.6
      
      Photos (si présentes):
        Flex, gap space-2, mt space-4
        Thumbnail: 80px × 80px, radius-md, object-fit cover
        
    Footer:
      Flex, gap space-4, mt space-4, pt space-4
      Border-top: 1px solid rgba(255, 255, 255, 0.05)
      
      "Recommande" badge (si oui): bg Accent Success Dim, color #10B981
      "Recommande pas" badge (si non): bg Accent Danger Dim, color #EF4444
      
      Actions: margin-left auto
        "Utile (12)" — Ghost button, icon ThumbsUp
    
    Pro response (si présente):
      Mt: space-4
      Ml: space-8
      Pl: space-4
      Border-left: 3px solid #F59E0B
      Background: rgba(245, 158, 11, 0.05)
      Padding: space-4
      Border-radius: 0 radius-md radius-md 0
      
      Label: "Réponse de [Nom Pro]" — 12px SemiBold, #F59E0B
      Text: 14px Regular, #A0A0B8
```

#### 4.4.8 Contenu Onglet "Disponibilités"

```
Mt: space-8
Max-width: 600px

Prochaine dispo badge:
  Background: Accent Success Dim
  Color: #10B981
  Padding: 12px 20px
  Radius: radius-lg
  Font: 16px Medium
  Icon: CalendarCheck, 20px
  Mb: space-6

Calendrier:
  Header:
    Flex, justify-content space-between, align-items center, mb space-4
    
    Month/Year: 20px SemiBold
    Navigation: < > circle buttons
    
  Grid:
    7 columns (Lun-Dim)
    
    Day header:
      Text-align: center
      Font: 12px Bold, uppercase, #6B6B80
      Pb: space-3
      
    Day cell:
      Aspect-ratio: 1
      Display: flex, align-items center, justify-content center
      Font: 14px Medium
      Border-radius: radius-md
      Cursor: pointer
      
      Available (green):
        Background: rgba(16, 185, 129, 0.15)
        Color: #10B981
        
      Partial (orange):
        Background: rgba(249, 115, 22, 0.15)
        Color: #F97316
        
      Unavailable:
        Color: #4A4A5C
        Cursor: default
        
      Selected:
        Background: #F59E0B
        Color: #0A0A0F
        Font: Bold
        
      Hover (available):
        Background: rgba(245, 158, 11, 0.2)
```

---

### 4.5 Page Formulaire de Notation

#### 4.5.1 Layout

```
┌──────────────────────────────────────────────────────────────┐
│  HEADER                                                       │
├──────────────────────────────────────────────────────────────┤
│                                                               │
│  Noter [Nom Pro] — Plombier à Douala                         │
│  "Votre avis compte. Il aide [Nom] à s'améliorer et aide    │
│   d'autres clients à faire le bon choix."                    │
│                                                               │
│  ┌──────────────────────────────────────────────────────┐    │
│  │                                                      │    │
│  │  1. Qualité du travail    ⭐⭐⭐⭐⭐                  │    │
│  │  2. Ponctualité           ⭐⭐⭐⭐⭐                  │    │
│  │  3. Communication         ⭐⭐⭐⭐⭐                  │    │
│  │  4. Rapport qualité/prix  ⭐⭐⭐⭐⭐                  │    │
│  │  5. Professionnalisme     ⭐⭐⭐⭐⭐                  │    │
│  │                                                      │    │
│  │  Note moyenne : 4.2 / 5                              │    │
│  │                                                      │    │
│  │  2. Votre commentaire *                              │    │
│  │  ┌──────────────────────────────────────────────┐    │    │
│  │  │                                              │    │    │
│  │  │                                              │    │    │
│  │  └──────────────────────────────────────────────┘    │    │
│  │  0/500                                               │    │
│  │                                                      │    │
│  │  3. Photos (optionnel)                               │    │
│  │  [+] [+] [+] [+] [+]                                 │    │
│  │                                                      │    │
│  │  4. Recommandez-vous [Nom Pro] ?                     │    │
│  │  [  Oui  ] [  Non  ]                                 │    │
│  │                                                      │    │
│  │  [✓] Publier anonymement                             │    │
│  │                                                      │    │
│  │  [        Soumettre mon avis        ]                │    │
│  │                                                      │    │
│  └──────────────────────────────────────────────────────┘    │
│                                                               │
└──────────────────────────────────────────────────────────────┘
```

#### 4.5.2 Formulaire Détaillé

**En-tête** :
```
Container: max-width 640px, mx-auto, pt space-12

Title: "Noter [Nom Pro]" — H2
Subtitle: "Catégorie · Ville" — 14px, #A0A0B8
Description: Body, #A0A0B8, mt space-3
```

**Section Étoiles** :
```
Container: bg #1A1A28, border radius-lg, padding space-8, mt space-8

Row (par critère):
  Flex, justify-content space-between, align-items center, mb space-5
  
  Label: 16px Medium, #FFFFFF
  Stars: interactive, 28px

Moyenne:
  Text-align: center, mt space-4
  "Note moyenne : " + 24px Bold + "/ 5"
  Color: #F59E0B
```

**Section Commentaire** :
```
Mt: space-8

Label: "Votre commentaire" + " *" (red)
Textarea: (style global), min-height 120px
Placeholder: "Décrivez votre expérience avec [Nom Pro]. Qu'est-ce qui s'est bien passé ? Le professionnalisme, la qualité du travail ? Que pourrait-il améliorer ? Votre avis est précieux pour la communauté..."
Counter: "0/500" — position absolute, bottom 12px, right 16px, 12px, #6B6B80
Validation: Bordure verte si ≥ 30 caractères
```

**Section Photos** :
```
Mt: space-8

Label: "Photos du travail réalisé" — 16px Medium + " (optionnel)"
Sub: "Ajoutez jusqu'à 5 photos montrant le résultat" — 14px, #A0A0B8

Upload grid: flex, gap space-3, mt space-4

Slot empty:
  Width: 80px, height: 80px
  Background: #1A1A28
  Border: 2px dashed rgba(255, 255, 255, 0.15)
  Border-radius: radius-md
  Display: flex, align-items center, justify-content center
  Icon: Plus (Lucide), 24px, #6B6B80
  Cursor: pointer
  
  Hover: border-color #F59E0B, bg rgba(245,158,11,0.05)

Slot filled:
  Same dimensions
  Background: image cover
  Position: relative
  
  Remove button:
    Position: absolute, top -8px, right -8px
    24px circle, bg #EF4444, icon X, 12px, #FFFFFF
```

**Section Recommandation** :
```
Mt: space-8

Label: "Recommanderiez-vous [Nom Pro] ?" — 16px Medium

Segmented control:
  Flex, gap space-3, mt space-4
  
  Option "Oui":
    Flex: 1
    Padding: 12px
    Border: 1px solid rgba(255, 255, 255, 0.15)
    Border-radius: radius-lg
    Text-align: center
    Font: 16px Medium
    Cursor: pointer
    
    Selected: bg rgba(16, 185, 129, 0.15), border-color #10B981, color #10B981
    Icon: ThumbsUp
    
  Option "Non":
    Same structure
    Selected: bg rgba(239, 68, 68, 0.15), border-color #EF4444, color #EF4444
    Icon: ThumbsDown
```

**Section Anonymat** :
```
Mt: space-8

Checkbox + Label: "Publier anonymement"
Description: "Votre nom n'apparaîtra pas publiquement. Le professionnel voit votre identité pour des raisons de sécurité." — 14px, #6B6B80
```

**Bouton Soumission** :
```
Mt: space-10

Button: Primary, Large, full width
"Soumettre mon avis"
Icon: Send (Lucide)

Disabled state: opacity 0.4 (tant que critères + commentaire invalides)
Loading state: Spinner + "Envoi en cours..."
```

---

### 4.6 Page Tableau de Bord Pro (Privé)

#### 4.6.1 Layout

```
┌──────────────────────────────────────────────────────────────┐
│  HEADER                                                       │
├──────────┬───────────────────────────────────────────────────┤
│          │                                                   │
│  SIDEBAR │  CONTENT                                          │
│          │                                                   │
│  [Logo]  │  ┌──────────┐ ┌──────────┐ ┌──────────┐          │
│          │  │ Score    │ │ Classemt │ │ Vues     │          │
│  ─────── │  └──────────┘ └──────────┘ └──────────┘          │
│          │                                                   │
│  Tableau │  ┌──────────────────────────────────────────┐    │
│  de bord │  │ Demandes récentes                        │    │
│          │  └──────────────────────────────────────────┘    │
│  Profil  │                                                   │
│          │  ┌──────────────────┐ ┌──────────────────┐      │
│  Avis    │  │ Avis récents     │ │ Calendrier       │      │
│          │  └──────────────────┘ └──────────────────┘      │
│  Dispos  │                                                   │
│          │                                                   │
│  Stats   │                                                   │
│          │                                                   │
│  Paramèt │                                                   │
│          │                                                   │
└──────────┴───────────────────────────────────────────────────┘
```

#### 4.6.2 Sidebar

```
Width: 260px
Background: #14141E
Border-right: 1px solid rgba(255, 255, 255, 0.05)
Height: 100vh
Position: fixed
Padding: space-6
Display: flex, flex-direction: column

Logo: same as header, mb space-8

Nav items:
  Mb: space-1
  
  Item:
    Flex, gap space-3, align-items center
    Padding: 12px 16px
    Border-radius: radius-md
    Font: 14px Medium
    Color: #A0A0B8
    Cursor: pointer
    
    Icon: Lucide, 20px
    
    Active: bg rgba(245, 158, 11, 0.1), color #F59E0B
    Hover: bg rgba(255, 255, 255, 0.03), color #FFFFFF

Items:
  - LayoutDashboard, "Tableau de bord"
  - User, "Mon profil"
  - Star, "Mes avis"
  - Calendar, "Disponibilités"
  - BarChart3, "Statistiques"
  - Settings, "Paramètres"

Bottom:
  Mt: auto
  User mini-card:
    Flex, gap space-3, align-items center
    Photo: 36px circle
    Name: 14px Medium
    "Mon compte" — 12px, #A0A0B8
```

#### 4.6.3 Widgets Dashboard

**Widget Score** :
```
Background: #1A1A28
Border: 1px solid rgba(255, 255, 255, 0.05)
Border-radius: radius-lg
Padding: space-6

Score: 48px Bold, #F59E0B
Label: "Pro Score" — 14px, #A0A0B8
Variation: flex, gap space-2, mt space-2
  Icon: TrendingUp (vert) / TrendingDown (rouge)
  Text: "+3 pts cette semaine" — 14px
Bar: mt space-4

Action link: "Comment améliorer ? →" — 14px, #F59E0B
```

**Widget Classement** :
```
Rank: "#12" — 36px Bold
Context: "sur 340 plombiers à Douala" — 14px, #A0A0B8
Tendance: "↗ Monté de 3 places" — 14px, #10B981
Mini chart: sparkline, 60px height
```

**Widget Demandes** :
```
Header: flex, justify-content space-between
  Title: "Demandes récentes" — 16px SemiBold
  "Voir tout →" — 14px, #F59E0B

List: 
  Item: flex, gap space-3, align-items center, padding 12px 0
    Border-bottom: 1px solid rgba(255, 255, 255, 0.03)
    
    Avatar: 40px circle, initial if no photo
    Info:
      Name: 14px Medium
      Detail: 12px, #A0A0B8, "Plomberie · Demain"
    Badge: "Nouveau" — bg #F59E0B, color #0A0A0F, 11px Bold, radius-full
```

---

## 5. ANIMATIONS & MICRO-INTERACTIONS

### 5.1 Système de Particules (Hero)

```typescript
// Configuration
const PARTICLE_CONFIG = {
  count: 80,
  color: 'rgba(245, 158, 11, 0.25)',
  size: { min: 2, max: 4 },
  speed: { min: 0.2, max: 0.6 }, // px/frame
  connectionDistance: 120,
  connectionOpacity: 0.08,
  mouseRadius: 100,
  mouseForce: 0.5,
};

// Comportement
// - Chaque particule dérive vers le haut à vitesse constante
// - Reset en bas quand elle sort du viewport
// - Lignes entre particules à distance < connectionDistance
// - Le curseur repousse les particules (force répulsive)
```

### 5.2 Scroll Reveal

```
Trigger: IntersectionObserver, threshold 0.15

Initial state:
  Opacity: 0
  Transform: translateY(30px)

Animated state:
  Opacity: 1
  Transform: translateY(0)

Transition:
  Duration: 500ms
  Easing: cubic-bezier(0.22, 1, 0.36, 1)
  
Stagger (éléments multiples):
  Delay entre éléments: 100ms
```

### 5.3 Podium Entrance

```
Trigger: Section podium visible dans le viewport

Card #1:
  Initial: opacity 0, translateY(60px), scale(0.9)
  Final: opacity 1, translateY(0), scale(1)
  Delay: 0ms
  Duration: 600ms
  Easing: cubic-bezier(0.22, 1, 0.36, 1)

Card #2:
  Same, Delay: 150ms

Card #3:
  Same, Delay: 300ms

Crown icon:
  Animation: float 3s ease-in-out infinite
  Keyframes:
    0%: translateY(0)
    50%: translateY(-8px)
    100%: translateY(0)
```

### 5.4 Counter Animation (Score)

```
Trigger: Élément visible

Animation:
  Valeur: 0 → valeur finale
  Duration: 1500ms
  Easing: ease-out
  Format: Nombre entier (pas de décimale pour le comptage)
  
Update: RequestAnimationFrame (pas de setInterval)
```

### 5.5 Hover Cards

```
Trigger: Mouse enter

Transform: translateY(-4px)
Border-color: rgba(245, 158, 11, 0.3)
Box-shadow: shadow-lg (intensifié)
Duration: 250ms
Easing: ease

Trigger: Mouse leave

Retour à l'état initial
Same duration/easing
```

### 5.6 Star Rating Interaction

```
Hover étoile:
  Transform: scale(1.25)
  Duration: 150ms
  Easing: ease
  
  Toutes les étoiles précédentes: filled preview
  
Click étoile:
  Animation: pulse
  Keyframes:
    0%: scale(1)
    50%: scale(1.4)
    100%: scale(1)
  Duration: 300ms
  
  Confirmation: fill permanent + couleur #F59E0B
```

### 5.7 Toast Notification

```
Entrée:
  Transform: translateX(120%)
  Opacity: 0
  →
  Transform: translateX(0)
  Opacity: 1
  Duration: 400ms
  Easing: cubic-bezier(0.22, 1, 0.36, 1)

Sortie:
  Transform: translateX(0)
  →
  Transform: translateX(120%)
  Opacity: 1 → 0
  Duration: 200ms
  Easing: ease-in
  
Auto-dismiss: 5000ms après entrée complète
```

### 5.8 Modal

```
Overlay:
  Opacity: 0 → 1
  Duration: 200ms

Container:
  Transform: scale(0.95) → scale(1)
  Opacity: 0 → 1
  Duration: 200ms
  Easing: ease
  
Sortie:
  Inverse, duration 150ms
```

### 5.9 Skeleton Loading

```
Background: linear-gradient(
  90deg,
  #1A1A28 0%,
  #222234 50%,
  #1A1A28 100%
)
Background-size: 200% 100%
Animation: shimmer 1.5s infinite
Border-radius: radius-md

@keyframes shimmer:
  0%: background-position: 200% 0
  100%: background-position: -200% 0
```

### 5.10 Tab Switching

```
Indicator (underline):
  Transition: left 250ms ease, width 250ms ease
  
Contenu:
  Opacity: 1 → 0 (50ms)
  → Swap contenu
  → Opacity: 0 → 1 (200ms)
```

### 5.11 Search Autocomplete

```
Dropdown:
  Opacity: 0 → 1
  Transform: translateY(-8px) → translateY(0)
  Duration: 200ms
  Easing: ease
  
Items:
  Stagger: 30ms entre items
  Opacity: 0 → 1
  Transform: translateX(-8px) → translateX(0)
```

### 5.12 Badge Unlock (Gamification)

```
Trigger: Badge attribué

Animation:
  1. Badge apparaît avec scale(0) → scale(1.2) → scale(1)
     Duration: 600ms, easing: cubic-bezier(0.34, 1.56, 0.64, 1)
     
  2. Glow pulse: box-shadow 0 0 0 → 0 0 30px gold → 0 0 0
     Duration: 800ms
     
  3. Confetti particles (5-10 particules dorées)
     Émission depuis le badge
     Gravité simulée, durée 1s
```

### 5.13 Reduced Motion

```
@media (prefers-reduced-motion: reduce):
  Toutes les animations: disabled
  Transitions: none
  Particules: static (pas d'animation)
  Scroll reveal: instant (pas de délai)
```

---

## 6. ASSETS VISUELS

### 6.1 Logo

| Variante | Format | Dimensions | Fond |
|----------|--------|------------|------|
| Logo dark (défaut) | SVG | Scalable | Transparent |
| Logo light | SVG | Scalable | Transparent |
| Favicon | PNG/ICO | 32×32, 180×180 | #0A0A0F |
| OG Image | JPG | 1200×630 | Gradient Hero |

### 6.2 Icônes Catégories

20 icônes Lucide (voir mapping section 4.2.3)

### 6.3 Icônes Badges

| Badge | Icône Lucide | Couleur |
|-------|-------------|---------|
| Vérifié | ShieldCheck | #10B981 |
| Or/Argent/Bronze | Medal | #FFD700/#C0C0C0/#CD7F32 |
| Réactif | Zap | #3B82F6 |
| Fidélité | Heart | #EC4899 |
| Urgence | Flame | #EF4444 |
| Trust Seal | Award | #F59E0B |
| Photographe | Camera | #A0A0B8 |
| Populaire | TrendingUp | #10B981 |
| Passeport | Globe | #3B82F6 |

### 6.4 Illustrations Empty States

| Scénario | Description |
|----------|-------------|
| Aucun résultat de recherche | Personnage regardant dans une loupe géante, style flat sombre |
| Aucun avis | Bulle de dialogue vide avec étoiles fantômes |
| Aucun message | Enveloppe ouverte avec un papier sortant |
| Profil incomplet | Checklist partiellement remplie |
| Maintenance | Engrenages avec un éclair doré |

### 6.5 Photos

| Type | Spécifications |
|------|---------------|
| Hero background | 1920×1080, photo artistique sombre d'artisan au travail |
| Avatar placeholder | 400×400, silhouette neutre professionnelle |
| Bannière pro | 1200×400, photo de travaux réalisés |
| Portfolio | Variable, 4:3 ratio, max 5 Mo |
| Avis photos | Variable, max 5 Mo |

---

## 7. SPÉCIFICATIONS TECHNIQUES FRONTEND

### 7.1 Stack Technique

| Technologie | Version | Usage |
|-------------|---------|-------|
| React | 18+ | Framework UI |
| TypeScript | 5+ | Typage statique |
| Vite | 5+ | Build tool |
| Tailwind CSS | 3.4+ | Styling utilitaire |
| shadcn/ui | latest | Composants UI de base |
| Framer Motion | 11+ | Animations React |
| Lucide React | latest | Icônes |
| React Query | 5+ | Gestion état serveur |
| Zustand | 4+ | Gestion état global |
| React Router | 6+ | Routing |

### 7.2 Variables CSS (index.css)

```css
@layer base {
  :root {
    /* Background */
    --bg-primary: #0A0A0F;
    --bg-secondary: #14141E;
    --bg-elevated: #1A1A28;
    --bg-tertiary: #222234;
    --bg-input: #11111A;
    --bg-overlay: rgba(10, 10, 15, 0.85);

    /* Text */
    --text-primary: #FFFFFF;
    --text-secondary: #A0A0B8;
    --text-tertiary: #6B6B80;
    --text-disabled: #4A4A5C;

    /* Accents */
    --accent-primary: #F59E0B;
    --accent-primary-hover: #FBBF24;
    --accent-success: #10B981;
    --accent-danger: #EF4444;
    --accent-info: #3B82F6;
    --accent-warning: #F97316;

    /* Podium */
    --gold: #FFD700;
    --silver: #C0C0C0;
    --bronze: #CD7F32;

    /* Spacing */
    --space-1: 4px;
    --space-2: 8px;
    --space-3: 12px;
    --space-4: 16px;
    --space-5: 20px;
    --space-6: 24px;
    --space-8: 32px;
    --space-10: 40px;
    --space-12: 48px;
    --space-16: 64px;
    --space-20: 80px;
    --space-24: 96px;

    /* Radius */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-xl: 16px;
    --radius-2xl: 20px;
    --radius-full: 9999px;
  }
}
```

### 7.3 Classes Utilitaires Personnalisées

```css
@layer utilities {
  .text-gradient-gold {
    background: linear-gradient(180deg, #FFD700, #F59E0B);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .glass {
    background: rgba(10, 10, 15, 0.85);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }

  .glow-gold {
    box-shadow: 0 0 30px rgba(245, 158, 11, 0.3);
  }

  .glow-gold-lg {
    box-shadow: 0 0 60px rgba(245, 158, 11, 0.4);
  }
}
```

### 7.4 Conventions de Nommage

**Composants** : PascalCase (ex: `ProCard.tsx`, `StarRating.tsx`)
**Hooks** : camelCase préfixé par `use` (ex: `useProScore.ts`)
**Utilitaires** : camelCase (ex: `calculateScore.ts`)
**Styles** : Kebab-case pour les classes Tailwind
**Fichiers** : Kebab-case (ex: `pro-card.tsx`)

### 7.5 Accessibilité

```
- Tous les éléments interactifs: focus visible (ring 2px #F59E0B, offset 2px)
- Images: alt text descriptif
- Icônes décoratives: aria-hidden="true"
- Boutons icon-only: aria-label descriptif
- Modales: focus trap, escape to close, aria-modal="true"
- Notifications: role="alert", aria-live="polite"
- Skip link: "Aller au contenu principal"
- Langue: <html lang="fr">
```

---

*Document rédigé le 31 mai 2026 — Version 1.0.0*
*Services Pro — Product Design Document*

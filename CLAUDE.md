# Brief — Site vitrine Nioo Consulting (niooconsulting.com)

> À donner tel quel à Claude Code. Place ce fichier à la racine du repo (tu peux le renommer `CLAUDE.md`), avec le dossier `nioo/` (logos + GUIDE-MARQUE.md) copié dans `public/brand/`.

---

## 1. Contexte

Site vitrine d'un consultant freelance, Cheikh Niang, basé à Casablanca.
Marque : **Nioo Consulting**.

Objectif unique du site : **qu'un dirigeant de PME ou une agence Odoo prenne contact** (email, WhatsApp, Malt).

Cibles, par ordre de priorité :
1. PME au Maroc et au Sénégal qui utilisent Odoo (ou veulent l'adopter) et ont besoin d'aide : intégrations, migrations, modules sur mesure, dépannage.
2. Agences partenaires Odoo (Maroc, France, Afrique francophone) qui cherchent un freelance en sous-traitance.
3. Clients francophones trouvés via Malt et LinkedIn.

Langue : **français**. Prévoir la structure pour ajouter l'anglais plus tard (`/en/`), mais ne pas le construire maintenant.

---

## 2. Stack technique

- **Astro** (site 100 % statique), pas de backend, pas de base de données.
- CSS simple (pas de Tailwind obligatoire). Pas de framework JS côté client.
- Police : **Manrope** (Google Fonts), poids 400, 500, 600.
- Hébergement : **Cloudflare** (Workers/Pages), déploiement automatique depuis GitHub à chaque push sur `main`.
- Domaine : `niooconsulting.com` (DNS déjà chez Cloudflare).
- Formulaire de contact : **pas en V1**. Boutons email (`mailto:`), WhatsApp (`https://wa.me/`) et Malt. Un formulaire avec Cloudflare Worker + Turnstile viendra en V2.
- Favicon : `public/brand/favicon.svg` + PNG 32 et 180 (apple-touch-icon).
- SEO de base : `<title>`, meta description, Open Graph (image = logo horizontal clair en PNG), `sitemap.xml`, `robots.txt`.
- Performance : Lighthouse ≥ 95 partout. Images en SVG ou WebP.
- Accessibilité : contrastes AA, focus clavier visible, `prefers-reduced-motion` respecté.
- Responsive : mobile d'abord (beaucoup de visites viendront de LinkedIn sur téléphone).

---

## 3. Identité visuelle

Voir `public/brand/GUIDE-MARQUE.md`. Résumé :

| Rôle | Hex |
|---|---|
| Prune foncé (principale) | `#4A2E48` |
| Turquoise (accent) | `#17A2A8` |
| Turquoise clair (accent sur fond sombre) | `#2BC4C9` |
| Prune pâle (texte sur fond sombre) | `#E9D9E6` |
| Prune nuit (fond sombre) | `#1E141D` |
| Blanc cassé (fond clair) | `#FAF7FA` |

**Idée directrice : "connecter des systèmes".** Le logo est un N dont les extrémités sont des nœuds reliés par des traits. Ce motif (traits fins + petits cercles aux extrémités) est le seul élément graphique fort du site. On l'utilise pour **montrer des connexions réelles** (Odoo ↔ boutique en ligne ↔ banque, etc.), pas comme décoration.

Règles :
- Le prune porte la structure (titres, logo, footer). Le turquoise reste rare : boutons, liens, nœuds.
- Pas de dégradés, pas d'ombres portées, pas de grilles de cartes identiques. Mise en page aérée, alignée à gauche.
- Pas de numérotation décorative (01/02/03) sauf pour le processus de travail, qui est une vraie séquence.
- Pas de libellés en MAJUSCULES au-dessus des titres. Casse normale partout.
- Le seul mouvement du site est le fil conducteur décrit en 3 bis. Pas d'autres animations d'entrée de section, pas d'effets au survol des blocs (hors états hover/focus des boutons et liens).
- Footer en fond sombre `#1E141D` avec le logo variante dark.

---

## 3 bis. Concept central : le fil conducteur

C'est l'élément signature du site. Tout le reste reste sobre pour le mettre en valeur.

**L'idée :** une ligne turquoise part du nœud en bas à droite du N (le logo du hero) et descend tout le long de la page, comme un câble. Chaque section est un **nœud** sur cette ligne. La ligne se dessine au fur et à mesure du scroll, et quand elle atteint une section, le nœud de cette section s'allume (cercle vide → cercle plein turquoise). En bas de page, la ligne aboutit au bouton "Discuter de votre projet" de la section Contact, qui est le dernier nœud : le visiteur est "connecté".

**Forme du tracé :**
- Desktop (≥ 900 px) : la ligne circule dans une gouttière à gauche du contenu. Entre deux sections, elle fait une courbe douce (Bézier) vers la droite puis revient, pour ne pas être un simple trait vertical. Les nœuds de section sont posés sur la ligne, alignés avec le titre de chaque section.
- Mobile : la ligne est droite, collée à gauche (≈ 20 px du bord), le contenu est décalé à droite. Pas de courbes.
- Mêmes proportions que le logo : trait de 3 px, extrémités arrondies, nœuds de 12 px (vides avec contour turquoise de 3 px, puis pleins une fois atteints).
- Sur le footer sombre, la ligne passe en turquoise clair `#2BC4C9`.

**Le hero :** à gauche le titre et les boutons, à droite le N du logo en grand (≈ 220 px de haut). Le fil part de son nœud bas-droit. Remplace le schéma "Odoo relié à 4 nœuds" prévu en 4.1 : on garde ces 4 mots ("Boutique en ligne", "Banque", "Pointeuses", "Applications métier") comme courtes étiquettes posées le long des premiers centimètres du fil, chacune avec un petit nœud, pour montrer dès l'arrivée ce que "connecter" veut dire.

**Section Réalisations :** chaque mission est un petit nœud secondaire sur une branche courte qui part du fil principal (comme une dérivation de câble).

**Implémentation technique :**
- Un seul `<svg>` positionné en absolu derrière le contenu, de la hauteur de la page, `aria-hidden="true"`, `pointer-events: none`.
- Le tracé (`<path>`) est calculé en JS à partir des positions réelles des nœuds (`getBoundingClientRect` sur des éléments repères `[data-node]` dans chaque section). Recalculer au chargement, au redimensionnement (debounce) et après chargement des polices.
- Progression liée au scroll : `stroke-dasharray` = longueur totale, `stroke-dashoffset` mis à jour via `requestAnimationFrame` sur un listener scroll `passive`. La tête de ligne se situe à environ 60 % de la hauteur de l'écran.
- Allumage des nœuds : classe `.is-reached` ajoutée quand la longueur dessinée dépasse la position du nœud sur le tracé.
- `prefers-reduced-motion` : ligne entièrement dessinée et tous les nœuds pleins dès le départ, aucun mouvement.
- Sans JavaScript : une simple bordure verticale turquoise en CSS sur la gouttière, nœuds affichés pleins. Le site reste parfaitement lisible.
- Le script tient dans un seul fichier léger (< 5 Ko), sans librairie.
- Vérifier que la ligne ne passe jamais sur du texte et ne gêne pas la sélection.

---

## 4. Structure : une seule page + page mentions légales

Ancres : `#services`, `#realisations`, `#methode`, `#a-propos`, `#contact`.

En-tête : logo horizontal clair à gauche, liens d'ancre à droite, bouton "Me contacter". Menu burger sur mobile.

### 4.1 Hero

**Titre :**
Votre Odoo, connecté à tout le reste.

**Sous-titre :**
Je suis Cheikh Niang, consultant Odoo freelance. J'intègre Odoo à vos outils (boutique en ligne, banque, applications métier), je migre vos données et je développe les modules qui manquent, pour que vos équipes arrêtent de ressaisir.

**Boutons :**
- Principal : "Discuter de votre projet" → `#contact`
- Secondaire : "Voir des réalisations" → `#realisations`

**Visuel :** le N du logo en grand, d'où part le fil conducteur (voir 3 bis).

**Ligne de confiance sous le hero (texte simple, pas de logos clients) :**
Odoo 15 à 19 · Odoo.sh et serveurs dédiés · Clients au Maroc, au Sénégal et en France

### 4.2 Services (`#services`)

**Titre :** Ce que je fais

Présenter Odoo comme l'activité principale (bloc plus grand), puis les autres services en plus petit. Pas de grille de cartes identiques.

**Bloc principal — Odoo, de bout en bout**
- **Intégrations** : Shopify, WMS, transporteurs, pointeuses biométriques, applications tierces via API et XML-RPC.
- **Migrations** : montée de version (jusqu'à Odoo 19), reprise de données depuis Excel ou une autre base Odoo, consolidation multi-sociétés.
- **Modules sur mesure** : workflows de validation des achats, liens caisse/fabrication, gestion de flotte et de contrats, rapports QWeb.
- **Dépannage en production** : diagnostic, correction et rapport clair quand quelque chose bloque.

**Services complémentaires**
- **Applications web et design** : outils internes, tableaux de bord, sites vitrines rapides.
- **Automatisation et agents IA** : automatiser les tâches répétitives (relances, rapprochements, traitement de documents) en connectant l'IA à vos données Odoo.
- **Formation** : prise en main d'Odoo et formation Excel pour vos équipes, du niveau débutant à expert.

> Ne PAS afficher Microsoft Dynamics pour l'instant (formation en cours). Prévoir un emplacement facile à ajouter dans la liste des services complémentaires.

### 4.3 Réalisations (`#realisations`)

**Titre :** Quelques missions récentes

Intro : Les clients sont anonymisés. Chaque mission indique le problème, ce que j'ai fait et le résultat.

Présenter en liste verticale (pas en cartes), chaque mission avec : secteur, problème, intervention, résultat.

1. **Gestion de flotte VTC — Odoo sur mesure**
   - Problème : suivi des chauffeurs, des contrats et des impayés éparpillé entre tableurs et messages.
   - Intervention : application VTC dans Odoo avec réouverture de contrats, relances automatiques des chauffeurs en dette, parcours de recouvrement en kanban, facturation des kilomètres supplémentaires.
   - Résultat : un seul outil pour les contrats, les décomptes et le recouvrement.

2. **Retail — incident critique sur les pointages**
   - Problème : un dysfonctionnement des pointeuses bloquait le calcul des présences de milliers d'enregistrements.
   - Intervention : diagnostic en mode simulation, correction ciblée, contrôle de conformité pour éviter la récidive.
   - Résultat : système rétabli sans perte de données.

3. **Distribution — mise à jour tarifaire de masse**
   - Problème : des dizaines de milliers de lignes de listes de prix à synchroniser entre deux environnements.
   - Intervention : scripts Python/XML-RPC d'export, de comparaison et de synchronisation, avec arrondis métier et mode simulation avant application.
   - Résultat : une mise à jour fiable et traçable, sans erreur.

4. **E-commerce — migration et entrepôt**
   - Problème : migration vers Odoo 19 d'une boutique connectée à Shopify, avec changement de logique de livraison.
   - Intervention : migration, conversion des préparations en cours, restauration de stock, réglage du connecteur.
   - Résultat : bascule sans interruption des ventes.

### 4.4 Méthode (`#methode`)

**Titre :** Comment on travaille ensemble

Séquence numérotée (c'est une vraie séquence) :
1. **Un appel de 30 minutes** pour comprendre votre besoin. Gratuit.
2. **Un devis détaillé par lot**, pour pouvoir prioriser.
3. **Des tests en mode simulation** avant toute modification de vos données réelles.
4. **Une livraison documentée** : ce qui a changé, comment le tester, comment l'utiliser.

### 4.5 À propos (`#a-propos`)

**Titre :** Qui suis-je

**Texte :**
Je viens du Sénégal et je vis à Casablanca. Avant l'ERP, j'ai travaillé côté logistique et supply chain : je connais les stocks, les achats et les livraisons de l'intérieur, pas seulement à l'écran.

Aujourd'hui, je mets en place et je fais évoluer Odoo pour des entreprises de secteurs variés : distribution, restauration, textile, transport, formation. Ce qui me motive : transformer des tâches répétitives en processus qui tournent tout seuls.

Je travaille en français et en anglais, à distance ou sur site au Maroc.

Emplacement pour une photo (`public/photo-cheikh.webp`, à fournir). Si absente, ne rien afficher (pas d'avatar générique).

### 4.6 Contact (`#contact`)

**Titre :** Parlons de votre projet

**Texte :** Décrivez-moi votre besoin en quelques lignes. Je réponds sous 24 heures.

**Boutons (variables dans un fichier de config `src/config.ts`) :**
- Email : `contact@niooconsulting.com`
- WhatsApp : `https://wa.me/212XXXXXXXXX` (numéro à compléter)
- Malt : `URL_MALT` (à compléter)
- LinkedIn : `URL_LINKEDIN` (à compléter)

### 4.7 Footer

Fond `#1E141D`, logo horizontal dark, rappel email/LinkedIn/Malt, "© 2026 Nioo Consulting", lien "Mentions légales".

### 4.8 Page `/mentions-legales`

Nom de l'éditeur (Cheikh Niang), contact, hébergeur (Cloudflare, Inc.), mention que le site n'utilise pas de cookies publicitaires. Placeholder pour le statut juridique (à compléter).

---

## 5. Contraintes de contenu

- Ne pas inventer de chiffres, de témoignages ou de logos clients.
- Ne pas utiliser le logo ni le nom d'Odoo comme si j'étais partenaire officiel. Écrire "Odoo" en texte simple. Ajouter en pied de page : "Odoo est une marque déposée d'Odoo S.A. Nioo Consulting est un consultant indépendant."
- Ton : direct, concret, vouvoiement, phrases courtes.

---

## 6. Livrables attendus de Claude Code

1. Projet Astro initialisé, structure claire (`src/pages`, `src/components`, `src/config.ts`, `public/brand/`).
2. Page d'accueil complète + mentions légales.
3. README avec : lancer en local, déployer sur Cloudflare, modifier les liens de contact.
4. Vérification finale : affichage mobile, Lighthouse, liens d'ancre, favicon, aperçu Open Graph.
# Nioo Consulting — site vitrine

Site vitrine statique de **Cheikh Niang**, consultant Odoo freelance
(niooconsulting.com). Construit avec [Astro](https://astro.build), sans
backend ni base de données. Déployé sur Cloudflare Pages.

---

## Prérequis

- [Node.js](https://nodejs.org) 18 ou plus (testé avec Node 20)
- npm (fourni avec Node)

## Lancer en local

```bash
npm install     # à faire une seule fois
npm run dev      # démarre le serveur de développement
```

Le site est alors disponible sur <http://localhost:4321>.

Autres commandes :

```bash
npm run build    # génère le site statique dans dist/
npm run preview  # prévisualise le résultat de build en local
```

---

## Modifier les liens de contact

Toutes les coordonnées sont centralisées dans **`src/config.ts`**.
Modifiez uniquement ce fichier :

```ts
export const contact = {
  email: 'contact@niooconsulting.com',
  whatsapp: '212XXXXXXXXX', // numéro international sans "+" ni espaces
  malt: '',                 // URL Malt, ou '' pour masquer le bouton
  linkedin: '',             // URL LinkedIn, ou '' pour masquer le bouton
};
```

- **WhatsApp** : mettez le numéro au format international collé, ex.
  `212600112233`. Le lien `https://wa.me/...` se construit tout seul.
- **Malt / LinkedIn** : laissez la chaîne vide `''` tant que vous n'avez pas
  l'URL — le bouton correspondant disparaît automatiquement (header, contact,
  footer).

> Pensez à remplacer `212XXXXXXXXX` par le vrai numéro WhatsApp avant la mise
> en ligne.

---

## Ajouter votre photo (section « Qui suis-je »)

Déposez une image nommée **`public/photo-cheikh.webp`**. Elle apparaîtra
automatiquement dans la section À propos. Si le fichier est absent, aucune
photo ni avatar générique ne s'affiche.

---

## Ajouter un service (ex. Microsoft Dynamics)

Dans `src/components/Services.astro`, ajoutez un objet à la liste
`complementaires` :

```ts
const complementaires = [
  // ...
  { title: 'Microsoft Dynamics', body: 'Description du service.' },
];
```

---

## Déployer sur Cloudflare Pages

Le DNS de `niooconsulting.com` est déjà géré par Cloudflare. Pour un
déploiement automatique à chaque `git push` sur `main` :

1. Poussez ce dépôt sur GitHub.
2. Dans le tableau de bord Cloudflare → **Workers & Pages** → **Create** →
   **Pages** → **Connect to Git**, sélectionnez le dépôt.
3. Paramètres de build :
   - **Framework preset** : `Astro`
   - **Build command** : `npm run build`
   - **Build output directory** : `dist`
4. Déployez, puis associez le domaine `niooconsulting.com` dans l'onglet
   **Custom domains** du projet Pages.

À chaque push sur `main`, Cloudflare rebuild et met le site en ligne.

---

## Structure du projet

```
public/
  brand/              logos, favicons, guide de marque
  robots.txt
src/
  config.ts           coordonnées de contact et navigation (à éditer)
  layouts/Layout.astro  gabarit HTML, SEO, Open Graph, favicons, polices
  components/          Header, Hero, Services, Realisations, Methode,
                       APropos, Contact, Footer, Thread (le fil conducteur)
  pages/
    index.astro       page d'accueil
    mentions-legales.astro
  styles/global.css   couleurs de marque et styles de base
astro.config.mjs      config Astro (site + sitemap)
```

### Le « fil conducteur »

`src/components/Thread.astro` dessine la ligne turquoise qui relie les
sections. Le tracé est calculé en JavaScript à partir des éléments
`[data-node]` présents dans chaque section. La ligne se dessine au scroll et
allume chaque nœud atteint. Sans JavaScript, un simple filet vertical CSS
reste affiché ; en mode `prefers-reduced-motion`, la ligne est dessinée en
entier dès le départ, sans animation.

---

## À faire avant la mise en ligne

- [ ] Renseigner le numéro WhatsApp dans `src/config.ts`.
- [ ] Renseigner les URL Malt et LinkedIn.
- [ ] Compléter le statut juridique dans `src/pages/mentions-legales.astro`.
- [ ] (Optionnel) Ajouter `public/photo-cheikh.webp`.

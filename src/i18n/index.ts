// ------------------------------------------------------------------
//  Internationalisation — tout le contenu éditorial, FR et EN.
//  Pour corriger un texte, modifiez-le ici ; les composants lisent
//  content[lang]. Pour ajouter une langue, dupliquez un bloc.
// ------------------------------------------------------------------

export type Lang = 'fr' | 'en';

export const languages: Record<Lang, string> = {
  fr: 'Français',
  en: 'English',
};

export const defaultLang: Lang = 'fr';

// Clés de page → URL par langue. Sert au SEO (hreflang), au sélecteur
// de langue et aux liens internes.
export type PageKey = 'home' | 'legal';

export const routes: Record<PageKey, Record<Lang, string>> = {
  home: { fr: '/', en: '/en/' },
  legal: { fr: '/mentions-legales', en: '/en/legal-notice' },
};

// Ancres de navigation (identifiants communs aux deux langues).
const navHrefs = ['#services', '#realisations', '#methode', '#a-propos'];

interface Content {
  htmlLang: string;
  ogLocale: string;
  meta: {
    homeTitle: string;
    homeDescription: string;
    legalTitle: string;
    legalDescription: string;
  };
  skip: string;
  nav: { label: string; cta: string; items: { href: string; label: string }[] };
  langSwitch: { label: string; to: string };
  hero: {
    title: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    markAlt: string;
    connectionsLabel: string;
    connections: string[];
    trust: string;
  };
  services: {
    heading: string;
    odooTitle: string;
    odoo: { title: string; body: string }[];
    extraTitle: string;
    extra: { title: string; body: string }[];
  };
  realisations: {
    heading: string;
    intro: string;
    labels: { problem: string; action: string; result: string };
    missions: { title: string; probleme: string; intervention: string; resultat: string }[];
  };
  methode: { heading: string; steps: { titre: string; detail: string }[] };
  about: { heading: string; paragraphs: string[]; photoAlt: string };
  contact: {
    heading: string;
    intro: string;
    email: string;
    whatsapp: string;
    malt: string;
    linkedin: string;
    direct: string;
  };
  footer: {
    note: string;
    copyright: (year: number) => string;
    legal: string;
    trademark: string;
  };
  legal: {
    heading: string;
    editorTitle: string;
    editorBody: string; // peut contenir du HTML simple (<br>)
    editorContact: string;
    statusTodo: string;
    hostTitle: string;
    hostBody: string;
    ipTitle: string;
    ipBody: string;
    ipTrademark: string;
    dataTitle: string;
    dataBody: string;
    back: string;
  };
}

export const content: Record<Lang, Content> = {
  fr: {
    htmlLang: 'fr',
    ogLocale: 'fr_FR',
    meta: {
      homeTitle: 'Nioo Consulting — Consultant Odoo freelance à Casablanca',
      homeDescription:
        "Cheikh Niang, consultant Odoo freelance à Casablanca. Intégrations, migrations, modules sur mesure et dépannage Odoo pour PME et agences au Maroc, au Sénégal et en France.",
      legalTitle: 'Mentions légales — Nioo Consulting',
      legalDescription: 'Mentions légales du site niooconsulting.com.',
    },
    skip: 'Aller au contenu',
    nav: {
      label: 'Me contacter',
      cta: 'Me contacter',
      items: [
        { href: navHrefs[0], label: 'Services' },
        { href: navHrefs[1], label: 'Réalisations' },
        { href: navHrefs[2], label: 'Méthode' },
        { href: navHrefs[3], label: 'À propos' },
      ],
    },
    langSwitch: { label: 'EN', to: 'Voir en anglais' },
    hero: {
      title: 'Votre Odoo, connecté à tout le reste.',
      lead: "Je suis Cheikh Niang, consultant Odoo freelance. J'intègre Odoo à vos outils (boutique en ligne, banque, applications métier), je migre vos données et je développe les modules qui manquent, pour que vos équipes arrêtent de ressaisir.",
      ctaPrimary: 'Discuter de votre projet',
      ctaSecondary: 'Voir des réalisations',
      markAlt: 'Le N de Nioo Consulting, formé de nœuds reliés',
      connectionsLabel: 'Exemples de systèmes connectés',
      connections: ['Boutique en ligne', 'Banque', 'Pointeuses', 'Applications métier'],
      trust:
        'Odoo 15 à 19 · Odoo.sh et serveurs dédiés · Clients au Maroc, au Sénégal et en France',
    },
    services: {
      heading: 'Ce que je fais',
      odooTitle: 'Odoo, de bout en bout',
      odoo: [
        {
          title: 'Intégrations',
          body: 'Shopify, WMS, transporteurs, pointeuses biométriques, applications tierces via API et XML-RPC.',
        },
        {
          title: 'Migrations',
          body: "Montée de version (jusqu'à Odoo 19), reprise de données depuis Excel ou une autre base Odoo, consolidation multi-sociétés.",
        },
        {
          title: 'Modules sur mesure',
          body: 'Workflows de validation des achats, liens caisse/fabrication, gestion de flotte et de contrats, rapports QWeb.',
        },
        {
          title: 'Dépannage en production',
          body: 'Diagnostic, correction et rapport clair quand quelque chose bloque.',
        },
      ],
      extraTitle: 'Services complémentaires',
      extra: [
        {
          title: 'Applications web et design',
          body: 'Outils internes, tableaux de bord, sites vitrines rapides.',
        },
        {
          title: 'Automatisation et agents IA',
          body: "Automatiser les tâches répétitives (relances, rapprochements, traitement de documents) en connectant l'IA à vos données Odoo.",
        },
        {
          title: 'Formation',
          body: "Prise en main d'Odoo et formation Excel pour vos équipes, du niveau débutant à expert.",
        },
      ],
    },
    realisations: {
      heading: 'Quelques missions récentes',
      intro:
        "Les clients sont anonymisés. Chaque mission indique le problème, ce que j'ai fait et le résultat.",
      labels: { problem: 'Problème', action: 'Intervention', result: 'Résultat' },
      missions: [
        {
          title: 'Gestion de flotte VTC — Odoo sur mesure',
          probleme:
            'Suivi des chauffeurs, des contrats et des impayés éparpillé entre tableurs et messages.',
          intervention:
            'Application VTC dans Odoo avec réouverture de contrats, relances automatiques des chauffeurs en dette, parcours de recouvrement en kanban, facturation des kilomètres supplémentaires.',
          resultat: 'Un seul outil pour les contrats, les décomptes et le recouvrement.',
        },
        {
          title: 'Retail — incident critique sur les pointages',
          probleme:
            "Un dysfonctionnement des pointeuses bloquait le calcul des présences de milliers d'enregistrements.",
          intervention:
            'Diagnostic en mode simulation, correction ciblée, contrôle de conformité pour éviter la récidive.',
          resultat: 'Système rétabli sans perte de données.',
        },
        {
          title: 'Distribution — mise à jour tarifaire de masse',
          probleme:
            'Des dizaines de milliers de lignes de listes de prix à synchroniser entre deux environnements.',
          intervention:
            "Scripts Python/XML-RPC d'export, de comparaison et de synchronisation, avec arrondis métier et mode simulation avant application.",
          resultat: 'Une mise à jour fiable et traçable, sans erreur.',
        },
        {
          title: 'E-commerce — migration et entrepôt',
          probleme:
            "Migration vers Odoo 19 d'une boutique connectée à Shopify, avec changement de logique de livraison.",
          intervention:
            'Migration, conversion des préparations en cours, restauration de stock, réglage du connecteur.',
          resultat: 'Bascule sans interruption des ventes.',
        },
      ],
    },
    methode: {
      heading: 'Comment on travaille ensemble',
      steps: [
        { titre: 'Un appel de 30 minutes', detail: 'Pour comprendre votre besoin. Gratuit.' },
        { titre: 'Un devis détaillé par lot', detail: 'Pour pouvoir prioriser.' },
        {
          titre: 'Des tests en mode simulation',
          detail: 'Avant toute modification de vos données réelles.',
        },
        {
          titre: 'Une livraison documentée',
          detail: 'Ce qui a changé, comment le tester, comment l’utiliser.',
        },
      ],
    },
    about: {
      heading: 'Qui suis-je',
      paragraphs: [
        "Je viens du Sénégal et je vis à Casablanca. Avant l'ERP, j'ai travaillé côté logistique et supply chain : je connais les stocks, les achats et les livraisons de l'intérieur, pas seulement à l'écran.",
        "Aujourd'hui, je mets en place et je fais évoluer Odoo pour des entreprises de secteurs variés : distribution, restauration, textile, transport, formation. Ce qui me motive : transformer des tâches répétitives en processus qui tournent tout seuls.",
        'Je travaille en français et en anglais, à distance ou sur site au Maroc.',
      ],
      photoAlt: 'Cheikh Niang, consultant Odoo',
    },
    contact: {
      heading: 'Parlons de votre projet',
      intro: 'Décrivez-moi votre besoin en quelques lignes. Je réponds sous 24 heures.',
      email: 'Écrire un e-mail',
      whatsapp: 'WhatsApp',
      malt: 'Malt',
      linkedin: 'LinkedIn',
      direct: 'Ou directement :',
    },
    footer: {
      note: 'Consultant Odoo indépendant',
      copyright: (year) => `© ${year} Nioo Consulting`,
      legal: 'Mentions légales',
      trademark:
        "Odoo est une marque déposée d'Odoo S.A. Nioo Consulting est un consultant indépendant.",
    },
    legal: {
      heading: 'Mentions légales',
      editorTitle: 'Éditeur du site',
      editorBody: 'Cheikh Niang, consultant Odoo indépendant.<br />Casablanca, Maroc.',
      editorContact: 'Contact :',
      statusTodo: 'Statut juridique : à compléter.',
      hostTitle: 'Hébergement',
      hostBody:
        'Site hébergé par Cloudflare, Inc.<br />101 Townsend Street, San Francisco, CA 94107, États-Unis.',
      ipTitle: 'Propriété intellectuelle',
      ipBody:
        "L'ensemble des contenus de ce site (textes, identité visuelle, logo Nioo Consulting) est la propriété de Cheikh Niang, sauf mention contraire. Toute reproduction sans autorisation est interdite.",
      ipTrademark:
        "Odoo est une marque déposée d'Odoo S.A. Nioo Consulting est un consultant indépendant, sans lien de partenariat officiel avec Odoo S.A.",
      dataTitle: 'Données personnelles et cookies',
      dataBody:
        "Ce site est une vitrine statique. Il n'utilise pas de cookies publicitaires ni de traceurs tiers. Les prises de contact se font directement par e-mail ou messagerie, sans formulaire collectant vos données sur le site.",
      back: "← Retour à l'accueil",
    },
  },

  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    meta: {
      homeTitle: 'Nioo Consulting — Freelance Odoo consultant in Casablanca',
      homeDescription:
        'Cheikh Niang, freelance Odoo consultant based in Casablanca. Integrations, migrations, custom modules and production support for SMEs and agencies in Morocco, Senegal and France.',
      legalTitle: 'Legal notice — Nioo Consulting',
      legalDescription: 'Legal notice for niooconsulting.com.',
    },
    skip: 'Skip to content',
    nav: {
      label: 'Get in touch',
      cta: 'Get in touch',
      items: [
        { href: navHrefs[0], label: 'Services' },
        { href: navHrefs[1], label: 'Case studies' },
        { href: navHrefs[2], label: 'Method' },
        { href: navHrefs[3], label: 'About' },
      ],
    },
    langSwitch: { label: 'FR', to: 'View in French' },
    hero: {
      title: 'Your Odoo, connected to everything else.',
      lead: "I'm Cheikh Niang, a freelance Odoo consultant. I connect Odoo to your tools (online store, bank, business apps), migrate your data and build the modules you're missing — so your teams stop re-entering the same information.",
      ctaPrimary: 'Discuss your project',
      ctaSecondary: 'See case studies',
      markAlt: 'The Nioo Consulting N, made of connected nodes',
      connectionsLabel: 'Examples of connected systems',
      connections: ['Online store', 'Bank', 'Time clocks', 'Business apps'],
      trust:
        'Odoo 15 to 19 · Odoo.sh and dedicated servers · Clients in Morocco, Senegal and France',
    },
    services: {
      heading: 'What I do',
      odooTitle: 'Odoo, end to end',
      odoo: [
        {
          title: 'Integrations',
          body: 'Shopify, WMS, carriers, biometric time clocks and third-party apps through the API and XML-RPC.',
        },
        {
          title: 'Migrations',
          body: 'Version upgrades (up to Odoo 19), data import from Excel or another Odoo database, multi-company consolidation.',
        },
        {
          title: 'Custom modules',
          body: 'Purchase approval workflows, POS/manufacturing links, fleet and contract management, QWeb reports.',
        },
        {
          title: 'Production support',
          body: 'Diagnosis, fix and a clear report when something breaks.',
        },
      ],
      extraTitle: 'Additional services',
      extra: [
        {
          title: 'Web apps and design',
          body: 'Internal tools, dashboards, fast landing pages.',
        },
        {
          title: 'Automation and AI agents',
          body: 'Automating repetitive tasks (follow-ups, reconciliations, document processing) by connecting AI to your Odoo data.',
        },
        {
          title: 'Training',
          body: 'Getting started with Odoo and Excel training for your teams, from beginner to expert.',
        },
      ],
    },
    realisations: {
      heading: 'Recent projects',
      intro:
        'Clients are anonymised. Each project states the problem, what I did and the result.',
      labels: { problem: 'Problem', action: 'What I did', result: 'Result' },
      missions: [
        {
          title: 'Ride-hailing fleet management — custom Odoo',
          probleme:
            'Tracking of drivers, contracts and unpaid balances scattered across spreadsheets and messages.',
          intervention:
            'A ride-hailing app in Odoo with contract reopening, automatic reminders for drivers in debt, a kanban collection pipeline and billing of extra mileage.',
          resultat: 'A single tool for contracts, statements and debt collection.',
        },
        {
          title: 'Retail — critical attendance incident',
          probleme:
            'A time-clock malfunction was blocking attendance calculation across thousands of records.',
          intervention:
            'Diagnosis in simulation mode, a targeted fix and a compliance check to prevent recurrence.',
          resultat: 'System restored with no data loss.',
        },
        {
          title: 'Distribution — bulk price update',
          probleme:
            'Tens of thousands of price-list lines to sync between two environments.',
          intervention:
            'Python/XML-RPC scripts to export, compare and sync, with business rounding and a dry-run before applying.',
          resultat: 'A reliable, traceable update with no errors.',
        },
        {
          title: 'E-commerce — migration and warehouse',
          probleme:
            'Migration to Odoo 19 of a Shopify-connected store, with a change in delivery logic.',
          intervention:
            'Migration, conversion of in-progress pickings, stock restoration and connector tuning.',
          resultat: 'Switchover with no interruption to sales.',
        },
      ],
    },
    methode: {
      heading: 'How we work together',
      steps: [
        { titre: 'A 30-minute call', detail: 'To understand your need. Free.' },
        { titre: 'A detailed quote, broken down', detail: 'So you can prioritise.' },
        {
          titre: 'Tests in simulation mode',
          detail: 'Before any change to your real data.',
        },
        {
          titre: 'A documented delivery',
          detail: 'What changed, how to test it, how to use it.',
        },
      ],
    },
    about: {
      heading: 'About me',
      paragraphs: [
        "I'm from Senegal and I live in Casablanca. Before ERP, I worked in logistics and supply chain: I know stock, purchasing and deliveries from the inside, not just on screen.",
        'Today I set up and evolve Odoo for companies across many sectors: distribution, food service, textile, transport, training. What drives me: turning repetitive tasks into processes that run on their own.',
        'I work in French and English, remotely or on site in Morocco.',
      ],
      photoAlt: 'Cheikh Niang, Odoo consultant',
    },
    contact: {
      heading: "Let's talk about your project",
      intro: 'Describe your need in a few lines. I reply within 24 hours.',
      email: 'Send an email',
      whatsapp: 'WhatsApp',
      malt: 'Malt',
      linkedin: 'LinkedIn',
      direct: 'Or directly:',
    },
    footer: {
      note: 'Independent Odoo consultant',
      copyright: (year) => `© ${year} Nioo Consulting`,
      legal: 'Legal notice',
      trademark:
        'Odoo is a registered trademark of Odoo S.A. Nioo Consulting is an independent consultant.',
    },
    legal: {
      heading: 'Legal notice',
      editorTitle: 'Site publisher',
      editorBody: 'Cheikh Niang, independent Odoo consultant.<br />Casablanca, Morocco.',
      editorContact: 'Contact:',
      statusTodo: 'Legal status: to be completed.',
      hostTitle: 'Hosting',
      hostBody:
        'Site hosted by Cloudflare, Inc.<br />101 Townsend Street, San Francisco, CA 94107, USA.',
      ipTitle: 'Intellectual property',
      ipBody:
        'All content on this site (text, visual identity, Nioo Consulting logo) is the property of Cheikh Niang unless otherwise stated. Any reproduction without authorisation is prohibited.',
      ipTrademark:
        'Odoo is a registered trademark of Odoo S.A. Nioo Consulting is an independent consultant with no official partnership with Odoo S.A.',
      dataTitle: 'Personal data and cookies',
      dataBody:
        'This site is a static showcase. It uses no advertising cookies or third-party trackers. Contact is made directly by email or messaging, with no form collecting your data on the site.',
      back: '← Back to home',
    },
  },
};

// Petit utilitaire : URL de la page `page` dans la langue `lang`.
export const routeUrl = (page: PageKey, lang: Lang): string => routes[page][lang];

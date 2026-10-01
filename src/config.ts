// Configuration centrale du site Nioo Consulting.
// Modifiez ici les coordonnées de contact et les URL : elles sont utilisées
// partout dans le site (header, contact, footer, mentions légales).

export const site = {
  name: 'Nioo Consulting',
  domain: 'niooconsulting.com',
  url: 'https://niooconsulting.com',
  // Nom du consultant / éditeur du site
  owner: 'Cheikh Niang',
  city: 'Casablanca',
  // Description utilisée pour le SEO (meta description + Open Graph)
  description:
    "Cheikh Niang, consultant Odoo freelance à Casablanca. Intégrations, migrations, modules sur mesure et dépannage Odoo pour PME et agences au Maroc, au Sénégal et en France.",
};

// Coordonnées de contact.
export const contact = {
  email: 'contact@niooconsulting.com',
  // Numéro WhatsApp au format international sans le "+" ni espaces.
  // Exemple : 212600000000  →  https://wa.me/212600000000
  whatsapp: '212626783537',
  // URL de votre profil Malt (laisser vide '' pour masquer le bouton)
  malt: 'https://www.malt.fr/profile/cheikhniang',
  // URL de votre profil LinkedIn (laisser vide '' pour masquer le bouton)
  linkedin: 'https://www.linkedin.com/in/cheikh-niang-870809197/',
};

// Photo de la section « Qui suis-je / About me ».
// Déposez l'image dans public/photo-cheikh.webp PUIS passez cette valeur à true.
// Tant qu'elle est à false, aucune photo ni avatar générique n'est affiché.
export const hasPhoto = false;

// Liens dérivés (ne pas modifier directement, ils se construisent tout seuls).
export const links = {
  mailto: `mailto:${contact.email}`,
  whatsapp: `https://wa.me/${contact.whatsapp}`,
  malt: contact.malt,
  linkedin: contact.linkedin,
};

// Toutes les données du commerce au même endroit (NAP, horaires, liens).
// Modifier ici : le site entier (pages, pied de page, JSON-LD) suit.

export const site = {
  name: 'MSA Multi Services Auto',
  alias: 'Casse RN1',
  url: 'https://msa-multi-services-auto.vercel.app',
  phone: '01 39 84 17 91',
  phoneHref: 'tel:+33139841791',
  phoneIntl: '+33 1 39 84 17 91',
  street: '16 route de Calais (RN1)',
  postalCode: '95410',
  city: 'Groslay',
  region: "Val-d'Oise",
  rating: { value: '3,4', count: 'environ 210' },
  payments: ['Carte bancaire', 'Sans contact'],
  // Position GPS exacte du 16 route de Calais : [À CONFIRMER]. Ex. { lat: 48.98, lng: 2.35 } ; le JSON-LD l'ajoute dès qu'elle est renseignée.
  geo: null as { lat: number; lng: number } | null,
  // Réseaux sociaux / fiche Google exacte : [À CONFIRMER] (laisser vide tant qu'inconnu).
  sameAs: [] as string[],
  // Numéro WhatsApp au format international sans espaces ni +, ex. '336XXXXXXXX'. [À CONFIRMER]
  whatsapp: '' as string,
  // Clé d'accès Web3Forms (https://web3forms.com). [À CONFIRMER]
  web3formsKey: '' as string,
  neighbours: [
    'Montmorency',
    'Saint-Brice-sous-Forêt',
    'Sarcelles',
    'Deuil-la-Barre',
    'Montmagny',
    'Domont',
    'Ézanville',
  ],
};

const q = encodeURIComponent(`${site.name}, 16 route de Calais, ${site.postalCode} ${site.city}`);
export const links = {
  directions: `https://www.google.com/maps/dir/?api=1&destination=${q}`,
  googleListing: `https://www.google.com/maps/search/?api=1&query=${q}`,
  mapEmbed: `https://www.google.com/maps?q=${q}&output=embed`,
};

// Horaires. day : 0 = dimanche … 6 = samedi. Heures au format 'HH:MM'.
export const hours = [
  { label: 'Lundi', day: 1, open: '09:00', close: '18:00' },
  { label: 'Mardi', day: 2, open: '09:00', close: '18:00' },
  { label: 'Mercredi', day: 3, open: '09:00', close: '18:00' },
  { label: 'Jeudi', day: 4, open: '09:00', close: '18:00' },
  { label: 'Vendredi', day: 5, open: '09:00', close: '18:00' },
  { label: 'Samedi', day: 6, open: '09:00', close: '18:00' },
  { label: 'Dimanche', day: 0, open: '09:00', close: '13:00' },
];

export const fmt = (t: string) => t.replace(':', 'h');

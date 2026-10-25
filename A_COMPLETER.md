# À compléter (marqués `[À CONFIRMER]` sur le site)

## Bloquant pour la mise en service
- [ ] **Clé Web3Forms** (`web3formsKey` dans `src/data/site.ts`) : sans elle, le formulaire affiche « envoi pas encore activé, appelez le 01 39 84 17 91 ». Créer la clé avec l'adresse e-mail qui doit recevoir les demandes.
- [ ] **Numéro WhatsApp** (`whatsapp` dans `src/data/site.ts`, format `336XXXXXXXX`) : le bouton « Envoyer par WhatsApp » s'active tout seul une fois renseigné.

## Garantie & échange (section « Garantie & échange »)
- [ ] Durée de garantie des pièces d'occasion
- [ ] Délai pour échanger une pièce
- [ ] Justificatif demandé pour un échange (ticket de caisse ?)
- [ ] Les pièces électriques sont-elles testées avant la vente ?

## Services
- [ ] Montage des pièces achetées ailleurs : oui / non, conditions
- [ ] Rachat de véhicules : proposé ? conditions
- [ ] Enlèvement d'épave : proposé ? zone, conditions

## FAQ
- [ ] « Les pièces sont-elles testées ? »
- [ ] « Puis-je venir avec mon mécanicien ? »
- [ ] « Montez-vous les pièces achetées ailleurs ? »
(Une fois répondues : passer `confirmed: true` et remplir `a` dans `src/pages/index.astro`, elles entrent alors aussi dans le JSON-LD FAQ.)

## Infos pratiques
- [ ] Ouverture les jours fériés
- [ ] Stationnement (sur place ? où se garer ?)
- [ ] Coordonnées GPS exactes du 16 route de Calais (actuellement celles du centre de Groslay, `geo` dans `src/data/site.ts`)
- [ ] Lien exact de la fiche Google Business Profile (actuellement une recherche Google Maps)
- [ ] Réseaux sociaux éventuels (`sameAs` dans `src/data/site.ts`)

## Légal
- [ ] Forme juridique et capital, SIRET, RCS, n° de TVA intracommunautaire
- [ ] Directeur de la publication
- [ ] Adresse e-mail de contact (mentions légales + exercice des droits RGPD)
- [ ] Durée de conservation des demandes de pièce

## Photos
- [ ] Voir `PHOTOS_A_PRENDRE.md` (3 emplacements sur l'accueil + image de partage éventuelle).

## Domaine
- [ ] Domaine définitif : mettre à jour `astro.config.mjs`, `src/data/site.ts`, `public/robots.txt`, `public/llms.txt`.

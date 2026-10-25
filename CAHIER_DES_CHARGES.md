# Prompt Claude Code : site « MSA Multi Services Auto » (casse RN1 + garage, Groslay)

Tu es un développeur front-end et directeur artistique senior. Crée le site vitrine complet de **MSA Multi Services Auto**, casse automobile et garage sur la RN1 à Groslay. Objectif business : que les clients **trouvent la pièce avant de se déplacer** (demande de pièce en ligne), connaissent les services (vente de pièces d'occasion, montage, mécanique) et appellent. Le site doit aussi **rassurer**, car l'accueil est le point faible cité dans les avis : affiche clairement les règles (prix, garantie, échange) pour éviter les malentendus.

## Fiche d'identité (informations vérifiées)
- **Nom** : MSA Multi Services Auto (aussi connue comme « Casse RN1 »)
- **Type** : casse automobile / vente de pièces d'occasion + atelier mécanique (montage, boîtes de vitesse, embrayages)
- **Adresse** : 16 route de Calais (RN1), 95410 Groslay
- **Téléphone** : 01 39 84 17 91
- **Horaires** : lundi au samedi : 09h00–18h00 · dimanche : 09h00–13h00
- **Note Google** : 3,4/5 sur ~210 avis
- **Organisation sur place** (d'après les avis) : plusieurs comptoirs/boxes (dont un comptoir pièces électriques), une caisse centrale, un atelier
- **Paiements** : CB, sans contact
- **Schema.org** : `AutoPartsStore` + `AutoRepair`

## Ce que disent les clients
Positif : « on y trouve de tout », prix très concurrentiels, pièces d'occasion pas chères (ex. boîte de vitesse 1.2 PureTech 6 vitesses), chef d'atelier professionnel, une responsable citée pour son professionnalisme. Négatif : attente, accueil inégal, prix pas affichés, échanges compliqués.
→ Le site répond directement aux reproches : **demande de pièce en ligne avec réponse par téléphone/SMS**, astuce « appelez avant, on démonte la pièce, vous passez la récupérer », **politique d'échange affichée** (délai `[À CONFIRMER]`), test des pièces électriques avant vente `[À CONFIRMER]`.

Extraits d'avis utilisables (« Avis Google ») :
- « On y trouve de tout, et surtout à des prix super concurrentiels. »
- « Le chef d'atelier est très professionnel, et le travail effectué est également très bon. »
- « Top, prix très correct. Boîte de vitesse 1.2 PureTech boîte 6. »

## Direction artistique
- Inspiration : **signalétique routière de la RN1, étiquettes de pièces détachées, tampons d'atelier, plaques d'immatriculation**. Brut, efficace, industriel, mais propre.
- Palette : jaune signalisation (#F2C200 ou proche), noir graphite, gris béton, blanc ; accent rouge pour « En stock ».
- Typo : une grotesque condensée type signalétique (ex. Barlow Condensed, Oswald) + une sans neutre ; chiffres en très grand (le « 16 » de l'adresse, « RN1 »).
- Idée signature : un **panneau routier « RN1 – Groslay »** comme élément de header, et des fiches services en forme d'**étiquette de pièce** (référence, catégorie).

## Structure
1. **Accueil** : « Pièces auto d'occasion et atelier, sur la RN1 à Groslay », statut ouvert/fermé, boutons Appeler / Demander une pièce / Itinéraire.
2. **Demander une pièce** (cœur du site) : formulaire marque, modèle, année, motorisation, immatriculation (optionnelle), pièce recherchée, téléphone, consentement RGPD. Bouton secondaire « Envoyer par WhatsApp » `[À CONFIRMER numéro]`.
3. **Nos services** : pièces d'occasion (moteur, boîte, électricité, carrosserie, optiques…), montage en atelier, mécanique générale, `[À CONFIRMER]` pour le reste (rachat de véhicules, enlèvement d'épave ?).
4. **Comment ça marche** : 1. vous demandez la pièce, 2. on vérifie le stock et on démonte, 3. vous venez la récupérer à la caisse.
5. **Garantie & échange** : règles claires `[À CONFIRMER]`.
6. **Avis** : 3 extraits + lien fiche Google.
7. **Infos pratiques** : horaires (dimanche matin ouvert, c'est un argument), accès RN1, carte.
8. **FAQ** : « Les pièces sont-elles testées ? », « Puis-je venir avec mon mécanicien ? », « Montez-vous les pièces achetées ailleurs ? » → réponses `[À CONFIRMER]`.

---

## Règles communes (à respecter strictement)

### 1. Avant de coder
- Liste les skills et plugins disponibles dans ta session et **utilise toutes celles qui s'appliquent** : design frontend (ex. `frontend-design`), tests navigateur / captures (Playwright, `webapp-testing`), images, déploiement, etc. Dis-moi lesquelles tu utilises.
- Propose-moi en 10 lignes max la direction artistique (palette en hex, 2 polices, ambiance, 1 idée de mise en page signature) **puis enchaîne sans attendre ma validation**.

### 2. Stack technique
- **Astro + Tailwind CSS**, site statique, zéro framework JS lourd côté client (îlots JS seulement si nécessaire).
- Polices auto-hébergées (`@fontsource`), pas d'appel Google Fonts.
- Images en AVIF/WebP via `astro:assets`, `loading="lazy"` sauf la première image.
- Déploiement prévu sur **Vercel** (ajoute la config si besoin). Si un accès Vercel est connecté dans ta session, fais un déploiement **preview** et donne-moi l'URL.
- Objectif Lighthouse : ≥ 95 sur les 4 scores, mobile.

### 3. Design qui NE FAIT PAS « site généré par IA » (priorité n°1)
Interdit :
- dégradés violet/bleu, « glassmorphism », blobs flous en fond, néons, ombres molles partout ;
- la grille « 3 cartes avec une icône + titre + 2 lignes » ;
- les emojis comme icônes, les icônes génériques type Heroicons/Lucide posées partout ;
- Inter/Poppins/Montserrat seules, tout centré, tout arrondi en `rounded-2xl` ;
- les phrases creuses : « Bienvenue chez… », « Découvrez… », « Plongez dans… », « Votre partenaire de confiance », « Une expérience unique », « Notre passion, votre satisfaction » ;
- les fausses stats (« +500 clients satisfaits »), les faux témoignages, les photos de banque d'images clichés (poignée de main, personnes en costume qui sourient).

À faire :
- une **identité propre au lieu** (voir la direction artistique plus haut), avec un ou deux partis pris forts : typographie éditoriale, mise en page asymétrique, détails réels (ardoise, ticket, plaque, carte routière, numéro de rue en très grand…) ;
- des textes **courts, concrets, à la voix du commerçant**, avec de vrais détails (horaires, plats, adresses, noms de rues, parkings) ;
- du rythme : alterner sections pleines et aérées, une grande typo, des espaces généreux ;
- des micro-interactions sobres (hover, apparition légère au scroll), rien de plus ;
- `prefers-reduced-motion` respecté.

### 4. Contenu : zéro invention
- Utilise **uniquement** les informations fournies dans ce prompt.
- Tout ce qui manque (prix, plats exacts, photos, nom du gérant, SIRET…) = un marqueur visible **`[À CONFIRMER]`** et une entrée dans le fichier `A_COMPLETER.md` à la racine.
- Avis clients : n'utilise **que** les extraits fournis, attribués « Avis Google ». Jamais d'avis inventé, jamais de nom inventé.

### 5. Photos
- **Ne télécharge pas et n'intègre pas** de photos Google Maps / Facebook / Instagram (droits d'auteur des clients et du commerce).
- Mets des emplacements propres (bloc couleur + légende du cliché attendu, pas de gris « placeholder ») et crée `PHOTOS_A_PRENDRE.md` : la liste précise des photos à faire (cadrage, lumière, format), pour que je les prenne moi-même chez le commerçant.

### 6. SEO local (indispensable)
- `<html lang="fr">`, title + meta description uniques, Open Graph, favicon.
- **JSON-LD schema.org** adapté (type indiqué plus haut) avec nom, adresse, téléphone, horaires `openingHoursSpecification`, géolocalisation, `sameAs` (réseaux sociaux).
- Nom / adresse / téléphone identiques partout (NAP), pied de page compris.
- Carte : iframe Google Maps chargée **au clic** (façade légère) pour ne pas plomber la perf.
- `sitemap.xml`, `robots.txt`, URLs propres, H1 unique, balises `alt` descriptives.
- Mots-clés locaux naturels : la ville + les communes voisines (Groslay, Montmorency, Saint-Brice-sous-Forêt, Sarcelles, Deuil-la-Barre, Montmagny, Domont, Ézanville).

### 7. Conversion et mobile
- Mobile d'abord. **Bouton d'appel fixe en bas d'écran sur mobile** (`tel:`), + bouton itinéraire (lien Google Maps).
- Horaires lisibles, avec indication « Ouvert maintenant / Fermé » calculée en JS léger (fuseau Europe/Paris).
- Accessibilité AA : contrastes, focus visibles, navigation clavier, tailles de cibles ≥ 44 px.

### 8. Légal
- Page **Mentions légales** (éditeur, hébergeur Vercel, SIRET `[À CONFIRMER]`) et **Politique de confidentialité**.
- Pas de traceur, donc pas de bandeau cookies. Si un formulaire existe : consentement RGPD + envoi via un service sans backend (ex. Formspree / Web3Forms, clé `[À CONFIRMER]`).

### 9. Livraison
1. `npm run build` sans erreur ni warning.
2. Captures Playwright **mobile (390 px) et desktop (1440 px)** de chaque page ; regarde-les toi-même et corrige ce qui fait « template » ou « IA » avant de me rendre la main.
3. Un `README.md` court : lancer en local, déployer, où changer textes / photos / horaires.
4. Les fichiers `A_COMPLETER.md` et `PHOTOS_A_PRENDRE.md`.
5. Un résumé final de 10 lignes max : ce qui est fait, ce qui manque.

# MSA Multi Services Auto — site vitrine

Astro 7 + Tailwind CSS 4, site statique. Polices auto-hébergées (Barlow Condensed, Archivo).

## Lancer en local
```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # génère dist/
npm run preview    # sert dist/ sur http://localhost:4401
npm run captures   # captures 390 px et 1440 px de chaque page dans captures/ (après build)
node scripts/og.mjs  # régénère public/og.png et public/apple-touch-icon.png
```

## Déployer
Projet Vercel importé depuis le dépôt GitHub : chaque push sur `main` redéploie. Aucune config spéciale (Astro statique détecté automatiquement). Mettre à jour `site` dans `astro.config.mjs`, `url` dans `src/data/site.ts`, `public/robots.txt` et `public/llms.txt` avec le domaine définitif.

## Où changer quoi
- **Nom, adresse, téléphone, horaires, WhatsApp, clé du formulaire, réseaux sociaux** : `src/data/site.ts` (tout le site et le JSON-LD suivent).
- **Textes de l'accueil** (étapes, services, garantie, avis, FAQ) : `src/pages/index.astro`.
- **Formulaire** : `src/components/PartForm.astro`. Renseigner `web3formsKey` dans `src/data/site.ts` (clé gratuite sur web3forms.com) pour activer l'envoi.
- **Photos** : remplacer les `<PhotoSlot>` de `src/pages/index.astro` par `<Image>` d'`astro:assets` (images dans `src/assets/`). Liste des prises de vue : `PHOTOS_A_PRENDRE.md`.
- **Pages légales** : `src/pages/mentions-legales.astro`, `src/pages/confidentialite.astro`.
- **Couleurs et polices** : `src/styles/global.css` (bloc `@theme`).

Ce qui reste à fournir : `A_COMPLETER.md`.

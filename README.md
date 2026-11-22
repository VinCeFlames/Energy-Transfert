# Energy Transfert — Cartographie d’enquête

Site parodique interne présentant un organigramme d’équipe façon tableau d’enquête, avec **dossiers cliquables**, portraits et **connexions rouges animées**. Le design est responsive PC/mobile.

## Ouvrir le site

Ouvrez **`index.html`** avec Chrome. Il n’y a **rien à installer** : ni Node.js, ni `npm install`, ni serveur. Laissez le dossier `assets` à côté de `index.html`.

## Organisation du projet

```text
Energy-Transfert/
├── index.html                   Page d’accueil et fiches modales
├── assets/
│   ├── css/
│   │   └── styles.css           Mise en page et animations
│   ├── js/
│   │   ├── people.js            Les dix profils et leurs photos
│   │   └── app.js               Cartographie, liens, clics, responsive
│   └── images/                  Portraits JPEG et espaces réservés SVG
├── .gitignore
└── README.md
```

## Modifier une fiche

Dans `assets/js/people.js`, cherchez le prénom ou l’identifiant (`ET-002`, etc.). Modifiez :

- `name` : prénom et nom complets (l’affichage peut être limité au prénom)
- `displayName` : nom affiché sur la carte, si nécessaire (Vincent)
- `pseudo` : surnom affiché sous le prénom (ex. « millimètre »)
- `role`, `description`, `qualities`, `faults`, `quote`
- `image` : fichier local situé dans `assets/images/`

Pour changer une photo, vous pouvez remplacer le fichier JPEG en gardant exactement **le même nom de fichier**. Sinon, modifiez la valeur `image` dans `people.js`.

Pour modifier les effets et les connexions, utilisez `assets/css/styles.css` et `assets/js/app.js`.

## Mettre le projet sur GitHub Desktop (dépôt privé)

1. Décompressez le ZIP dans `Documents > Développement > 01 — Sites Web` afin d’obtenir le dossier **Energy-Transfert**.
2. Ouvrez **GitHub Desktop** : **File > Add local repository**, puis sélectionnez le dossier **Energy-Transfert**.
3. Si GitHub Desktop propose de créer le dépôt local (le dossier n’est pas encore un dépôt Git), cliquez sur **Create a repository** et validez.
4. Saisissez un message de commit (par exemple « Version initiale du site Energy Transfert »), puis cliquez sur **Commit to main**.
5. Cliquez sur **Publish repository**, laissez **Keep this code private** activé, puis publiez.

Le dépôt restera **privé** si vous gardez cette option. Aucune publication Cloudflare ou GitHub Pages n’est configurée ici.

Pour les mises à jour, modifiez les fichiers dans ce dossier, puis utilisez **Commit to main > Push origin** dans GitHub Desktop.

## Données et diffusion

Les images d’Anthony, Julien et Alex sont réelles ; les autres sont des visuels provisoires ou des emplacements vides. Le site est une **parodie** et ne constitue pas une véritable enquête. Avant de rendre le dépôt ou le site public, obtenez l’accord des personnes photographiées et représentées.

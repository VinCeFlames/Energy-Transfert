/* ENERGY TRANSFERT — fiches membres.
 * Modifier ici les prénoms, pseudos, descriptions, qualités et défauts.
 * Les liens vers les photos sont relatifs à index.html.
 * Les membres archivés sont ajoutés dans la section ARCHIVES à part de la hiérarchie active.
 */
const people = [
  {
    "id": "ET-001",
    "name": "William Lidou",
    "pseudo": "Le Chequier",
    "role": "Patron",
    "level": "01 · DIRECTION",
    "image": "assets/images/william.jpg",
    "description": "Profil à compléter : anecdotes, parcours et présentation humoristique à ajouter ultérieurement.",
    "qualities": [
      "À compléter"
    ],
    "faults": [
      "À compléter"
    ],
    "quote": "",
    "photoStatus": "Photographie de démonstration"
  },
  {
    "id": "ET-002",
    "name": "Anthony Piefert",
    "pseudo": "Millimètre",
    "role": "Chef",
    "level": "02 · ENCADREMENT",
    "image": "assets/images/anthony.jpg",
    "description": "Anthony est désormais intégré avec sa vraie photo. Profil d'encadrement, regard sérieux, posture posée : parfait pour renforcer l'esthétique enquête/police du tableau principal.",
    "qualities": [
      "Travailleur",
      "Perfectionniste",
      "Patient",
      "Drôle"
    ],
    "faults": [
      "Bordélique",
      "Gourmand",
      "Stressé"
    ],
    "quote": "Chef de l'encadrement.",
    "photoStatus": "Photo réelle intégrée"
  },
  {
    "id": "ET-003",
    "name": "Julien Metz",
    "pseudo": "Tetris",
    "role": "Chef",
    "level": "02 · ENCADREMENT",
    "image": "assets/images/julien.jpg",
    "description": "Profil à compléter : anecdotes, parcours et présentation humoristique à ajouter ultérieurement.",
    "qualities": [
      "À compléter"
    ],
    "faults": [
      "À compléter"
    ],
    "quote": "",
    "photoStatus": "Photo réelle intégrée"
  },
  {
    "id": "ET-004",
    "name": "Bobby",
    "pseudo": "BobX",
    "role": "Chef",
    "level": "02 · ENCADREMENT",
    "image": "assets/images/bobby.jpg",
    "description": "Profil à compléter : anecdotes, parcours et présentation humoristique à ajouter ultérieurement.",
    "qualities": [
      "À compléter"
    ],
    "faults": [
      "À compléter"
    ],
    "quote": "",
    "photoStatus": "Photo réelle intégrée"
  },
  {
    "id": "ET-005",
    "name": "Guillaume",
    "pseudo": "PtitGras",
    "role": "Chef",
    "level": "02 · ENCADREMENT",
    "image": "assets/images/guillaume.jpg",
    "description": "Profil à compléter : anecdotes, parcours et présentation humoristique à ajouter ultérieurement.",
    "qualities": [
      "À compléter"
    ],
    "faults": [
      "À compléter"
    ],
    "quote": "",
    "photoStatus": "Photo réelle intégrée"
  },
  {
    "id": "ET-006",
    "name": "Delaporte Vincent",
    "displayName": "Vincent",
    "role": "Intérimaire",
    "level": "03 · TERRAIN",
    "image": "assets/images/vincent.jpg",
    "description": "Profil à compléter : anecdotes, parcours et présentation humoristique à ajouter ultérieurement.",
    "qualities": [
      "À compléter"
    ],
    "faults": [
      "À compléter"
    ],
    "quote": "",
    "photoStatus": "Photo réelle intégrée"
  },
  {
    "id": "ET-007",
    "name": "Sheriff",
    "pseudo": "SFR",
    "role": "Intérimaire",
    "level": "03 · TERRAIN",
    "image": "assets/images/sheriff.jpg",
    "description": "Profil à compléter : anecdotes, parcours et présentation humoristique à ajouter ultérieurement.",
    "qualities": [
      "À compléter"
    ],
    "faults": [
      "À compléter"
    ],
    "quote": "",
    "photoStatus": "Photo réelle intégrée"
  },
  {
    "id": "ET-008",
    "name": "Alex",
    "role": "Intérimaire",
    "level": "03 · TERRAIN",
    "image": "assets/images/alex.jpg",
    "description": "Photo réelle d’Alex intégrée au tableau. Les anecdotes et le rapport humoristique seront ajoutés ultérieurement.",
    "qualities": [
      "À compléter"
    ],
    "faults": [
      "À compléter"
    ],
    "quote": "",
    "photoStatus": "Photo réelle intégrée"
  },
  {
    "id": "ET-009",
    "name": "Bastien",
    "role": "Intérimaire",
    "level": "03 · TERRAIN",
    "image": "assets/images/bastien.svg",
    "description": "Profil à compléter : anecdotes, parcours et présentation humoristique à ajouter ultérieurement.",
    "qualities": [
      "À compléter"
    ],
    "faults": [
      "À compléter"
    ],
    "quote": "",
    "photoStatus": "Photographie à ajouter"
  },
  {
    "id": "ET-010",
    "name": "Nolan",
    "role": "Intérimaire",
    "level": "03 · TERRAIN",
    "image": "assets/images/nolan.jpg",
    "description": "Profil à compléter : anecdotes, parcours et présentation humoristique à ajouter ultérieurement.",
    "qualities": [
      "À compléter"
    ],
    "faults": [
      "À compléter"
    ],
    "quote": "",
    "photoStatus": "Photo réelle intégrée"
  },
  {
    "id": "ET-011",
    "name": "Patrick",
    "pseudo": "Rambo",
    "role": "Ancien chef",
    "level": "ARCHIVES · ENCADREMENT (RETRAITÉ)",
    "archive": true,
    "image": "assets/images/patrick.svg",
    "description": "Ancien chef aujourd’hui à la retraite, Patrick est resté célèbre pour son tempérament de motard, son côté bourrin et ses contrôles de fin de journée : tous les outils devaient être rangés avant le départ.",
    "qualities": [
      "Rigoureux sur le matériel",
      "Organisé",
      "Vigilant sur les outils"
    ],
    "faults": [
      "Un peu bourrin",
      "L’inventaire pouvait rallonger la journée"
    ],
    "quote": "« Les gars, on range bien les outils ! Je veux qu’il ne manque rien. »",
    "photoStatus": "Portrait à venir"
  }
];

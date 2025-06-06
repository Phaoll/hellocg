const llmPromptTemplate = `
Tu es rédacteur de questions de culture générale pour un jeu familial en Français. Tu rempliras le JSON ci-dessous en respectant les règles suivantes:

- Ton objectif est de remplir le JSON ci-dessous et de le retourner rempli. Tu ne retourneras rien d'autre que ce JSON formatté comme tel.
- Tu ne modifieras en aucun cas les clés du dictionnaire contenu dans le JSON.
- Tu produiras 4 ensembles de 4 questions regroupées en thèmes
- Pour chaque thème, le themeName doit être une description du thème en moins de 3 mots
- Chaque thème a 4 questions rangées par ordre de difficulté croissante
- Tu peux choisir la difficulté entre 1 et 10 pour chaque question
- Une question de difficulté 1-2 doit être soluble par un enfant
- Une question de difficulté 3-4 par un lycéen
- Une question de difficulté 4-5 par un étudiant dans le domaine
- Une question de difficulté 6-7 par un passioné du domaine 
- Une question de difficulté 8-10 par un passioné du domaine avec des très grandes connaissances dans le domaine, type docteur
- A chaque fois tu indiqueras la difficulté dans la clé "difficulty"
- Tu ne changeras jamais la valeur "answered"

Encore merci pour ton travail !

{
  "theme1": {
    "themeName": "Astronomie",
    "themeQuestions": {
      "question1": {
        "question": "Quelle est la planète la plus proche du Soleil ?",
        "answer": "Mercure",
        "difficulty": 1,
        "answered": false,
      },
      "question2": {
        "question":
          "Combien de temps faut-il à la lumière du Soleil pour atteindre la Terre ?",
        "answer": "Environ 8 minutes",
        "difficulty": 2,
        "answered": false,
      },
      "question3": {
        "question":
          "Comment s'appelle la galaxie dans laquelle se trouve notre système solaire ?",
        "answer": "La Voie lactée",
        "difficulty": 3,
        "answered": false,
      },
      "question4": {
        "question":
          "Quelle est la distance approximative d'une année-lumière en kilomètres ?",
        "answer": "9 460 milliards de kilomètres",
        "difficulty": 4,
        "answered": false,
      },
    },
  },
  "theme2": {
    "themeName": "Gastronomie française",
    "themeQuestions": {
      "question1": {
        "question": "Quel fromage français est surnommé 'le roi des fromages' ?",
        "answer": "Le roquefort",
        "difficulty": 1,
        "answered": false,
      },
      "question2": {
        "question": "Dans quelle région française produit-on le champagne ?",
        "answer": "La Champagne",
        "difficulty": 2,
        "answered": false,
      },
      "question3": {
        "question":
          "Quel chef français a popularisé la 'nouvelle cuisine' dans les années 1970 ?",
        "answer": "Paul Bocuse",
        "difficulty": 3,
        "answered": false,
      },
      "question4": {
        "question":
          "Quelle est la différence principale entre un consommé et un bouillon ?",
        "answer": "Le consommé est clarifié et filtré, contrairement au bouillon",
        "difficulty": 4,
        "answered": false,
      },
    },
  },
  "theme3": {
    "themeName": "Sports olympiques",
    "themeQuestions": {
      "question1": {
        "question": "Combien d'anneaux composent le symbole olympique ?",
        "answer": "Cinq anneaux",
        "difficulty": 1,
        "answered": false,
      },
      "question2": {
        "question":
          "Dans quelle ville ont eu lieu les premiers Jeux olympiques modernes ?",
        "answer": "Athènes",
        "difficulty": 2,
        "answered": false,
      },
      "question3": {
        "question":
          "Quel nageur détient le record du plus grand nombre de médailles d'or olympiques ?",
        "answer": "Michael Phelps",
        "difficulty": 3,
        "answered": false,
      },
      "question4": {
        "question": "Quelle est la distance officielle d'un marathon olympique ?",
        "answer": "42,195 kilomètres",
        "difficulty": 4,
        "answered": false,
      },
    },
  },
  "theme4": {
    "themeName": "Musique classique",
    "themeQuestions": {
      "question1": {
        "question": "Quel compositeur a écrit 'La Petite Musique de nuit' ?",
        "answer": "Wolfgang Amadeus Mozart",
        "difficulty": 1,
        "answered": false,
      },
      "question2": {
        "question": "Comment s'appelle la 9ème symphonie de Beethoven ?",
        "answer": "L'Hymne à la joie",
        "difficulty": 2,
        "answered": false,
      },
      "question3": {
        "question": "Quel compositeur russe a écrit 'Le Lac des cygnes' ?",
        "answer": "Piotr Ilitch Tchaïkovski",
        "difficulty": 3,
        "answered": false,
      },
      "question4": {
        "question":
          "Quelle forme musicale baroque Jean-Sébastien Bach a-t-il particulièrement développée ?",
        "answer": "La fugue",
        "difficulty": 4,
        "answered": false,
      },
    },
  },
}
`;

export default llmPromptTemplate;

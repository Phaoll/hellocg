const llmPromptTemplate = `
Tu es rédacteur de questions de culture générale pour un jeu familial en Français. Tu rempliras le JSON ci-dessous en respectant les règles suivantes:

- Ton objectif est de remplir le JSON ci-dessous et de le retourner rempli. Tu ne retourneras rien d'autre que ce JSON formatté comme tel.
- Tu ne modifieras en aucun cas les clés du dictionnaire contenu dans le JSON.
- Tu produiras 4 ensembles de 4 questions regroupées en thèmes
- Pour chaque thème, le themeName doit être une description du thème en moins de 3 mots
- Chaque thème a 4 questions rangées par ordre de difficulté croissante
- La question 1 doit être accessible même à un jeune joueur
- Les questions 2 et 3 doivent être vraiment plus dures mais rester accessibles à un adulte cultivé
- La question 4 doit être soluble par quelqu'un ayant commencé ses études dans le domaine

Encore merci pour ton travail !

{
  "theme1": {
    "themeName": "Nom du theme 1",
    "themeQuestions": {
      "question1": {
        "question": "Theme 1, question 1 question",
        "answer": "Theme 1, question 1 reponse",
      },
      "question2": {
        "question": "Theme 1, question 2 question",
        "answer": "Theme 1, question 2 reponse",
      },
      "question3": {
        "question": "Theme 1, question 3 question",
        "answer": "Theme 1, question 3 reponse",
      },
      "question4": {
        "question": "Theme 1, question 4 question",
        "answer": "Theme 1, question 4 reponse",
      },
    },
  },
  "theme2": {
    "themeName": "Nom du theme 2",
    "themeQuestions": {
      "question1": {
        "question": "Theme 2, question 1 question",
        "answer": "Theme 2, question 1 reponse",
      },
      "question2": {
        "question": "Theme 2, question 2 question",
        "answer": "Theme 2, question 2 reponse",
      },
      "question3": {
        "question": "Theme 2, question 3 question",
        "answer": "Theme 2, question 3 reponse",
      },
      "question4": {
        "question": "Theme 2, question 4 question",
        "answer": "Theme 2, question 4 reponse",
      },
    },
  },
  "theme3": {
    "themeName": "Nom du theme 3",
    "themeQuestions": {
      "question1": {
        "question": "Theme 3, question 1 question",
        "answer": "Theme 3, question 1 reponse",
      },
      "question2": {
        "question": "Theme 3, question 2 question",
        "answer": "Theme 3, question 2 reponse",
      },
      "question3": {
        "question": "Theme 3, question 3 question",
        "answer": "Theme 3, question 3 reponse",
      },
      "question4": {
        "question": "Theme 3, question 4 question",
        "answer": "Theme 3, question 4 reponse",
      },
    },
  },
  "theme4": {
    "themeName": "Nom du theme 4",
    "themeQuestions": {
      "question1": {
        "question": "Theme 4, question 1 question",
        "answer": "Theme 4, question 1 reponse",
      },
      "question2": {
        "question": "Theme 4, question 2 question",
        "answer": "Theme 4, question 2 reponse",
      },
      "question3": {
        "question": "Theme 4, question 3 question",
        "answer": "Theme 4, question 3 reponse",
      },
      "question4": {
        "question": "Theme 4, question 4 question",
        "answer": "Theme 4, question 4 reponse",
      },
    },
  },
}
`;

export default llmPromptTemplate;

import "./index.css";

import ThemeRow, { type ThemeItem } from "./components/themeRow";

interface QuestionTemplateType {
  [key: string]: ThemeItem;
}

const typedQuestionTemplate = {
  theme1: {
    themeName: "Nom du theme 1",
    themeQuestions: {
      question1: {
        question: "Theme 1, question 1 question",
        answer: "Theme 1, question 1 reponse",
      },
      question2: {
        question: "Theme 1, question 2 question",
        answer: "Theme 1, question 2 reponse",
      },
      question3: {
        question: "Theme 1, question 3 question",
        answer: "Theme 1, question 3 reponse",
      },
      question4: {
        question: "Theme 1, question 4 question",
        answer: "Theme 1, question 4 reponse",
      },
    },
  },
  theme2: {
    themeName: "Nom du theme 2",
    themeQuestions: {
      question1: {
        question: "Theme 2, question 1 question",
        answer: "Theme 2, question 1 reponse",
      },
      question2: {
        question: "Theme 2, question 2 question",
        answer: "Theme 2, question 2 reponse",
      },
      question3: {
        question: "Theme 2, question 3 question",
        answer: "Theme 2, question 3 reponse",
      },
      question4: {
        question: "Theme 2, question 4 question",
        answer: "Theme 2, question 4 reponse",
      },
    },
  },
  theme3: {
    themeName: "Nom du theme 3",
    themeQuestions: {
      question1: {
        question: "Theme 3, question 1 question",
        answer: "Theme 3, question 1 reponse",
      },
      question2: {
        question: "Theme 3, question 2 question",
        answer: "Theme 3, question 2 reponse",
      },
      question3: {
        question: "Theme 3, question 3 question",
        answer: "Theme 3, question 3 reponse",
      },
      question4: {
        question: "Theme 3, question 4 question",
        answer: "Theme 3, question 4 reponse",
      },
    },
  },
  theme4: {
    themeName: "Nom du theme 4",
    themeQuestions: {
      question1: {
        question: "Theme 4, question 1 question",
        answer: "Theme 4, question 1 reponse",
      },
      question2: {
        question: "Theme 4, question 2 question",
        answer: "Theme 4, question 2 reponse",
      },
      question3: {
        question: "Theme 4, question 3 question",
        answer: "Theme 4, question 3 reponse",
      },
      question4: {
        question: "Theme 4, question 4 question",
        answer: "Theme 4, question 4 reponse",
      },
    },
  },
} as QuestionTemplateType;

function App() {
  return (
    <div className="flex h-full w-full overflow-hidden">
      <div className="w-full h-full flex flex-col items-center justify-top p-6 text-gray-800">
        {Object.entries(typedQuestionTemplate).map(([themeKey, themeData]) => (
          <ThemeRow key={themeKey} themeKey={themeKey} themeData={themeData} />
        ))}
      </div>
    </div>
  );
}

export default App;

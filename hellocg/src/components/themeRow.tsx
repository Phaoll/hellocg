import { FC } from "react";
import QuestionButton from "./questionButton";

interface QuestionItem {
  question: string;
  answer: string;
}

interface QuestionsDict {
  [key: string]: QuestionItem;
}

export interface ThemeItem {
  themeName: string;
  themeQuestions: QuestionsDict;
}

interface ThemeRowProps {
  themeKey: string; // The key (e.g., "theme1")
  themeData: ThemeItem; // The actual theme object
}

const ThemeRow: FC<ThemeRowProps> = ({ themeKey, themeData }) => {
  return (
    <div className="flex flex-row mb-6 p-4 bg-white rounded shadow-md w-full max-w-2xl">
      <h2 className="text-xl font-bold mb-4">{themeData.themeName}</h2>
      {Object.entries(themeData.themeQuestions).map(
        ([questionKey, questionData]) => (
          <QuestionButton
            key={`${themeKey}${questionKey}`}
            questionNumber={questionKey}
            question={questionData.question}
            answer={questionData.answer}
          />
        )
      )}
    </div>
  );
};

export default ThemeRow;

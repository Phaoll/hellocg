import type { FC } from "react";

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
    <>
      <div className="flex flex-1 flex-row p-4 bg-white rounded shadow-md h-full items-center justify-start">
        <div className="flex flex-1 min-w-40 mr-6">
          <h2 className="text-xl font-bold">{themeData.themeName}</h2>
        </div>
        <div className="flex flex-row gap-4 items-center flex-1 h-full">
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
      </div>
    </>
  );
};

export default ThemeRow;

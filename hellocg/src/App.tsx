import "./index.css";

import ThemeRow, { type ThemeItem } from "./components/themeRow";
import questionTemplate from "./data/question.template";
interface QuestionTemplateType {
  [key: string]: ThemeItem;
}

const typedQuestionTemplate = questionTemplate as QuestionTemplateType;

function App() {
  return (
    <div className="flex h-full w-full overflow-hidden">
      <div className="w-full h-full flex flex-col items-center justify-start p-6 text-gray-800 gap-6">
        {Object.entries(typedQuestionTemplate).map(([themeKey, themeData]) => (
          <ThemeRow key={themeKey} themeKey={themeKey} themeData={themeData} />
        ))}
      </div>
    </div>
  );
}

export default App;

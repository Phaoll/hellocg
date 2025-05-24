import "./index.css";

import ThemeRow, { type ThemeItem } from "./components/themeRow";
import questionTemplate from "./data/question.template";
interface QuestionTemplateType {
  [key: string]: ThemeItem;
}

const typedQuestionTemplate = questionTemplate as QuestionTemplateType;

function App() {
  return (
    <div className="h-screen flex flex-col justify-center items-center p-6 text-gray-800 gap-6">
      {Object.entries(typedQuestionTemplate).map(([themeKey, themeData]) => (
        <ThemeRow key={themeKey} themeKey={themeKey} themeData={themeData} />
      ))}
    </div>
  );
}

export default App;

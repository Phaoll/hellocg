import "./index.css";

import ThemeRow, { type ThemeItem } from "./components/themeRow";
import questionTemplate from "./data/question.template";
import { SidebarInset, SidebarProvider } from "./components/ui/sidebar";
import SimpleSidebar from "./components/simpleSidebar";
interface QuestionTemplateType {
  [key: string]: ThemeItem;
}

// Copy paste of the question
// Display of the question

// TODO not MVP
// Styling
// Parameters
// Responsiveness
// Un petit toaster propre
// Implémenter difficulté de 1 à 10

const typedQuestionTemplate = questionTemplate as QuestionTemplateType;

function App() {
  return (
    <SidebarProvider>
      <SimpleSidebar />
      <SidebarInset className="overflow-hidden">
        <div className="h-screen max-w-full flex flex-col justify-center items-center p-6 text-gray-800 gap-6">
          {Object.entries(typedQuestionTemplate).map(
            ([themeKey, themeData]) => (
              <ThemeRow
                key={themeKey}
                themeKey={themeKey}
                themeData={themeData}
              />
            )
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default App;

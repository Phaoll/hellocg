import "./index.css";

import ThemeRow from "./components/themeRow";
import { SidebarInset, SidebarProvider } from "./components/ui/sidebar";
import SimpleSidebar from "./components/simpleSidebar";
import {
  selectQuestionsDict,
  type QuestionTemplateType,
} from "./store/slices/questionsSlice";
import { useAppSelector } from "./store/hooks/hooks";
import { useSelector } from "react-redux";
import type { RootState } from "./store";
import { useEffect } from "react";

// TODO
// Favicon + Nom d'onglet
// vrai nom de domaine + https

function App() {
  const questions = useAppSelector(selectQuestionsDict);
  const typedQuestionTemplate = questions as QuestionTemplateType;

  const currentTheme = useSelector(
    (state: RootState) => state.settingsStore.appTheme
  );

  useEffect(() => {
    // Apply the theme from Redux state on app initialization
    const root = document.documentElement;
    root.removeAttribute("data-theme");
    if (currentTheme !== "helloworld_light") {
      root.setAttribute("data-theme", currentTheme);
    }
  }, [currentTheme]);

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

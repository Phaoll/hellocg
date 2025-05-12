import { useState } from "react";
import "./index.css";

import SimpleSidebar from "./components/simpleSidebar";
import ThemeRow, { ThemeItem } from "./components/themeRow";
import { SidebarProvider } from "./components/ui/sidebar";
import questionTemplate from "./question.template";

interface QuestionTemplateType {
  [key: string]: ThemeItem;
}

const typedQuestionTemplate = questionTemplate as QuestionTemplateType;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="gradient-bg-custom w-full">
      <div className="flex h-screen w-full overflow-hidden">
        <SidebarProvider>
          <SimpleSidebar collapsed={collapsed} toggleSidebar={toggleSidebar} />
          <main
            className={`w-full transition-all duration-300 ease-in-out ${
              collapsed ? "pl-2" : "pl-64"
            }`}
          >
            <div className="min-h-screen w-full flex flex-col items-center justify-top p-4 text-gray-800">
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
          </main>
        </SidebarProvider>
      </div>
    </div>
  );
}

export default App;

import "./index.css";

import ThemeRow, { type ThemeItem } from "./components/themeRow";
import questionTemplate from "./data/question.template";
import { Sidebar } from "lucide-react";
import { SidebarInset, SidebarProvider } from "./components/ui/sidebar";
import SimpleSidebar from "./components/simpleSidebar";
import { useState } from "react";
interface QuestionTemplateType {
  [key: string]: ThemeItem;
}

const typedQuestionTemplate = questionTemplate as QuestionTemplateType;

function App() {
  const [collapsed, setCollapsed] = useState(true);

  function toggleCollapse() {
    setCollapsed(!collapsed);
  }

  return (
    <SidebarProvider>
      <SimpleSidebar collapsed={collapsed} toggleSidebar={toggleCollapse} />
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

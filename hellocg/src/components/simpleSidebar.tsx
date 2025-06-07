import { CircleHelp, FileQuestion, Settings2 } from "lucide-react";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import PlayerCard from "./playerCard";
import { useState } from "react";
import { AppSettingsDialogContent } from "./appSetting.dialogContent";
import { QuestionsSettingsDialogContent } from "./questionsSetting.dialogContent";
import { useAppSelector } from "@/store/hooks/hooks";
import { selectPlayerNumber } from "@/store/slices/settingsSlice";
import { TutorialStepperDialogContent } from "./tutorialStepper.dialogContent";

// TODO
// - Player avatar

export function SimpleSidebar() {
  const [isOpenQuestionsSettingDialog, setIsOpenQuestionsSettingDialog] =
    useState(false);
  const [isOpenTutorialStepperDialog, setIsOpenTutorialStepperDialog] =
    useState(() => {
      try {
        const storedValue = localStorage.getItem("isFirstVisit");
        const isFirstVisit = storedValue === null;

        // Mark as visited
        if (isFirstVisit) {
          localStorage.setItem("isFirstVisit", "false");
        }

        return isFirstVisit;
      } catch {
        return true; // Default for SSR
      }
    });
  const playerNumber = useAppSelector(selectPlayerNumber);

  return (
    <Sidebar
      className={`h-full transition-all duration-300 
        flex-shrink-0 border-r border-gray-200`}
      collapsible="icon"
    >
      <SidebarHeader>
        <h1 className="text-center text-4xl">Hello CG</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="gap-y-10">
            {Array.from(Array(playerNumber).keys()).map((number) => (
              <PlayerCard key={number} />
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <Dialog>
            <DialogTrigger>
              <SidebarMenuItem key={"Configurer"}>
                <div
                  className={`flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md w-full`}
                >
                  <Settings2 size={20} />
                  <span>Paramètres</span>
                </div>
              </SidebarMenuItem>
            </DialogTrigger>
            <AppSettingsDialogContent />
          </Dialog>

          <Dialog
            open={isOpenQuestionsSettingDialog}
            onOpenChange={setIsOpenQuestionsSettingDialog}
          >
            <DialogTrigger>
              <SidebarMenuItem key={"Configurer"}>
                <div
                  className={`flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md w-full`}
                >
                  <FileQuestion size={20} />
                  <span>Nouvelles questions</span>
                </div>
              </SidebarMenuItem>
            </DialogTrigger>
            <QuestionsSettingsDialogContent
              setIsOpenQuestionsSettingDialog={setIsOpenQuestionsSettingDialog}
            />
          </Dialog>

          <Dialog
            open={isOpenTutorialStepperDialog}
            onOpenChange={setIsOpenTutorialStepperDialog}
          >
            <DialogTrigger>
              <SidebarMenuItem key={"Configurer"}>
                <div
                  className={`flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md w-full`}
                >
                  <CircleHelp size={20} />
                  <span>Tutoriel</span>
                </div>
              </SidebarMenuItem>
            </DialogTrigger>
            <TutorialStepperDialogContent />
          </Dialog>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

export default SimpleSidebar;

import { FileQuestion, Settings, Settings2 } from "lucide-react";

import { ConfigurationDialogContent } from "./configuration.dialogContent";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import PlayerCard from "./playerCard";

export function SimpleSidebar() {
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
        <SidebarGroupLabel className="text-2xl">Scores</SidebarGroupLabel>
        <SidebarGroup>
          <SidebarGroupContent className="gap-y-10">
            <PlayerCard />
            <PlayerCard />
            <PlayerCard />
            <PlayerCard />
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
                  <span>Settings</span>
                </div>
              </SidebarMenuItem>
            </DialogTrigger>
            <ConfigurationDialogContent />
          </Dialog>
          <Dialog>
            <DialogTrigger>
              <SidebarMenuItem key={"Configurer"}>
                <div
                  className={`flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md w-full`}
                >
                  <FileQuestion size={20} />
                  <span>Set questions</span>
                </div>
              </SidebarMenuItem>
            </DialogTrigger>
            <ConfigurationDialogContent />
          </Dialog>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

export default SimpleSidebar;

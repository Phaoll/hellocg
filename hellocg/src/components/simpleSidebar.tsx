import { PanelRightClose, PanelRightOpen, PencilIcon } from "lucide-react";

import { ConfigurationDialogContent } from "./configuration.dialogContent";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SimpleSidebarProps {
  collapsed: boolean;
  toggleSidebar: () => void;
}

export function SimpleSidebar({
  collapsed,
  toggleSidebar,
}: SimpleSidebarProps) {
  return (
    <Sidebar
      className={`h-full transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      } flex-shrink-0 border-r border-gray-200`}
      collapsible="icon"
    >
      <SidebarContent className="h-full">
        <div className="flex items-center justify-center py-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="h-8 w-8"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? (
              <PanelRightOpen size={18} />
            ) : (
              <PanelRightClose size={18} />
            )}
          </Button>
        </div>

        <SidebarGroup>
          {!collapsed && <SidebarGroupLabel>Application</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>
              <Dialog>
                <DialogTrigger>
                  <SidebarMenuItem
                    key={"Configurer"}
                    className={collapsed ? "flex justify-center" : ""}
                  >
                    {/* <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <SidebarMenuButton asChild>
                            <a
                              className={`flex items-center ${
                                collapsed ? "justify-center" : "justify-start"
                              } gap-2 px-4 py-2 hover:bg-gray-100 rounded-md w-full`}
                            >
                              <PencilIcon size={20} />
                              {!collapsed && <span>Configurer</span>}
                            </a>
                          </SidebarMenuButton>
                        </TooltipTrigger>
                        {collapsed && (
                          <TooltipContent side="right">
                            Configurer
                          </TooltipContent>
                        )}
                      </Tooltip>
                    </TooltipProvider> */}
                    Toto
                  </SidebarMenuItem>
                </DialogTrigger>
                <ConfigurationDialogContent />
              </Dialog>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default SimpleSidebar;

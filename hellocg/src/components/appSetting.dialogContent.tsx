import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogHeader } from "./ui/dialog";
import { Button } from "./ui/button";
import { type Dispatch, type SetStateAction } from "react";
import {
  APP_THEME_NAMES,
  setAppTheme,
  type AppThemeName,
} from "@/store/slices/settingsSlice";
import { useDispatch } from "react-redux";

interface AppSettingsDialogContentProps {
  setIsOpenAppSettingsDialog: Dispatch<SetStateAction<boolean>>;
}

// TODO
// Theme avatar
// Timer setting

export function AppSettingsDialogContent({
  setIsOpenAppSettingsDialog,
}: AppSettingsDialogContentProps) {
  const dispatch = useDispatch();

  const handleSetAppTheme = (newTheme: AppThemeName) => {
    dispatch(setAppTheme(newTheme));
  };

  const handleConfirmSettings = () => {
    setIsOpenAppSettingsDialog(false);
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Configurer votre partie</DialogTitle>
      </DialogHeader>
      <div>Thème de fond:</div>
      <div className="flex flex-row gap-1">
        {APP_THEME_NAMES.map((theme_name, index) => {
          return (
            <Button
              onClick={(_) => {
                handleSetAppTheme(theme_name);
              }}
              key={index}
            >
              {theme_name}
            </Button>
          );
        })}
      </div>

      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Annuler</Button>
        </DialogClose>
        <Button type="submit" onClick={handleConfirmSettings}>
          Sauvegarder ces questions
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}

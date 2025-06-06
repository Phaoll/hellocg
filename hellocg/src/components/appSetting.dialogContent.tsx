import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogHeader } from "./ui/dialog";
import { Button } from "./ui/button";
import { useState } from "react";
import {
  selectPlayerNumber,
  setAppTheme,
  setPlayerNumber,
  type AppThemeName,
} from "@/store/slices/settingsSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/store/hooks/hooks";
import { Minus, Plus } from "lucide-react";
import {
  APP_THEME_LIST,
  MAX_NUMBER_OF_PLAYER,
  MIN_NUMBER_OF_PLAYER,
} from "@/config";

// TODO
// Timer setting
// Toaster for player number out of range

export function AppSettingsDialogContent() {
  const dispatch = useDispatch();
  const playerNumber = useAppSelector(selectPlayerNumber);
  const [playerCounter, setPlayerCounter] = useState(playerNumber);

  const handleSetAppTheme = (newTheme: AppThemeName) => {
    dispatch(setAppTheme(newTheme));
  };

  const playerSetterWrapper = (newPlayerNumber: number) => {
    if (
      newPlayerNumber < MIN_NUMBER_OF_PLAYER ||
      newPlayerNumber > MAX_NUMBER_OF_PLAYER
    )
      return;
    setPlayerCounter(newPlayerNumber);
    dispatch(setPlayerNumber(newPlayerNumber));
  };

  return (
    <DialogContent style={{ backgroundColor: "hsl(var(--middleground))" }}>
      <DialogHeader>
        <DialogTitle>Configurer votre partie</DialogTitle>
      </DialogHeader>
      <div className="font-semibold">Thème de fond:</div>
      <div className="flex flex-row gap-4 justify-center">
        {APP_THEME_LIST.map((themeObject, index) => {
          return (
            <Button
              className="relative w-32 h-16 rounded-lg overflow-hidden hover:scale-110 transition-transform duration-200 shadow-lg group"
              style={{ backgroundColor: `${themeObject.avatarColorBottom}` }}
              onClick={(_) => {
                handleSetAppTheme(themeObject.indexCSSName);
              }}
              key={index}
            >
              <div
                className="absolute inset-0 bg-teal-500"
                style={{
                  clipPath: "polygon(0% 0%, 100% 0%, 0% 100%)",
                  backgroundColor: `${themeObject.avatarColorTop}`,
                }}
              ></div>
              <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm group-hover:text-yellow-300 transition-colors">
                {themeObject.displayName}
              </span>
            </Button>
          );
        })}
      </div>
      <div className="font-semibold">Nombre de joueurs:</div>
      <div className="flex flex-row items-center justify-center gap-2 py-2">
        <Button
          className="p-2 aspect-square flex-none"
          onClick={() => {
            playerSetterWrapper(playerCounter - 1);
          }}
          disabled={playerCounter <= MIN_NUMBER_OF_PLAYER}
        >
          <Minus />
        </Button>
        <div className="p-2 min-w-16 h-10 bg-background text-center rounded-lg aspect-square">{`${playerCounter}`}</div>
        <Button
          className="p-2 aspect-square flex-none"
          onClick={() => {
            playerSetterWrapper(playerCounter + 1);
          }}
          disabled={playerCounter >= MAX_NUMBER_OF_PLAYER}
        >
          <Plus />
        </Button>
      </div>

      <DialogFooter>
        <DialogClose type="submit" className="font-bold">
          OK
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
}

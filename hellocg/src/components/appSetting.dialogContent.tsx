import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogHeader } from "./ui/dialog";
import { Button } from "./ui/button";
import { useState, type Dispatch, type SetStateAction } from "react";
import {
  APP_THEME_NAMES,
  selectPlayerNumber,
  setAppTheme,
  setPlayerNumber,
  type AppThemeName,
} from "@/store/slices/settingsSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/store/hooks/hooks";
import { Minus, Plus } from "lucide-react";
import { MAX_NUMBER_OF_PLAYER, MIN_NUMBER_OF_PLAYER } from "@/config";

// TODO
// Theme avatar
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
      <div>Nombre de joueurs:</div>
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
        <div className="p-2 bg-gray-200 grow h-10 text-center rounded-lg aspect-square">{`${playerCounter}`}</div>
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
        <DialogClose type="submit">OK</DialogClose>
      </DialogFooter>
    </DialogContent>
  );
}

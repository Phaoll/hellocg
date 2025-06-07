import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogHeader } from "./ui/dialog";
import llmPromptTemplate from "@/data/prompt.template";
import { AlertCircle, Check, Copy, Minus, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  selectDifficultyMax,
  selectDifficultyMin,
  selectFavouriteThemes,
  selectNumberOfQuestions,
  selectNumberOfTheme,
  selectQuestionsDict,
  setDifficultyMax,
  setDifficultyMin,
  setFavouriteThemes,
  setNumberOfQuestions,
  setNumberOfTheme,
  setQuestionsFromString,
} from "@/store/slices/questionsSlice";
import { useSelector } from "react-redux";
import { type Dispatch, type SetStateAction } from "react";
import {
  MAX_DIFFICULTY,
  MAX_NUMBER_OF_QUESTIONS,
  MAX_NUMBER_OF_THEMES,
  MIN_DIFFICULTY,
  MIN_NUMBER_OF_QUESTIONS,
  MIN_NUMBER_OF_THEMES,
} from "@/config";

interface CopyButtonProps {
  numberOfTheme: number;
  numberOfQuestions: number;
  difficultyMin: number;
  difficultyMax: number;
  favouriteThemes: string;
  className?: string;
  children?: React.ReactNode;
}

export const CopyButton: React.FC<CopyButtonProps> = ({
  numberOfTheme,
  numberOfQuestions,
  difficultyMin,
  difficultyMax,
  favouriteThemes,
  className,
  children,
}) => {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        llmPromptTemplate(
          numberOfTheme,
          numberOfQuestions,
          difficultyMin,
          difficultyMax,
          favouriteThemes
        )
      );
      setStatus("success");
      setTimeout(() => setStatus("idle"), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2000);
    }
  };

  const getIcon = () => {
    switch (status) {
      case "success":
        return <Check className="h-4 w-4" />;
      case "error":
        return <AlertCircle className="h-4 w-4" />;
      default:
        return <Copy className="h-4 w-4" />;
    }
  };

  const getVariant = () => {
    switch (status) {
      case "success":
        return "default";
      case "error":
        return "destructive";
      default:
        return "outline";
    }
  };

  return (
    <Button
      onClick={handleCopy}
      variant={getVariant()}
      size="sm"
      className={cn("gap-2", className)}
      disabled={status !== "idle"}
    >
      {getIcon()}
      {children ||
        (status === "success" ? "Copiée" : status === "error" ? "Erreur" : "")}
    </Button>
  );
};

interface QuestionsSettingsDialogContentProps {
  setIsOpenQuestionsSettingDialog: Dispatch<SetStateAction<boolean>>;
}

export function QuestionsSettingsDialogContent({
  setIsOpenQuestionsSettingDialog,
}: QuestionsSettingsDialogContentProps) {
  const dispatch = useDispatch();
  const [newQuestionsValue, setNewQuestionsValue] = useState("");
  const currentQuestions = useSelector(selectQuestionsDict);
  const numberOfTheme = useSelector(selectNumberOfTheme);
  const numberOfQuestions = useSelector(selectNumberOfQuestions);
  const difficultyMin = useSelector(selectDifficultyMin);
  const difficultyMax = useSelector(selectDifficultyMax);
  const favouriteThemes = useSelector(selectFavouriteThemes);

  const handleConfirmLoadQuestions = () => {
    dispatch(setQuestionsFromString(newQuestionsValue));
    setIsOpenQuestionsSettingDialog(false);
  };

  const handleNumberOfThemeChange = (newNumberOfTheme: number) => {
    if (
      newNumberOfTheme < MIN_NUMBER_OF_THEMES ||
      newNumberOfTheme > MAX_NUMBER_OF_THEMES
    )
      return;
    dispatch(setNumberOfTheme(newNumberOfTheme));
  };

  const handleNumberOfQuestionChange = (newNumberOfQuestion: number) => {
    if (
      newNumberOfQuestion < MIN_NUMBER_OF_QUESTIONS ||
      newNumberOfQuestion > MAX_NUMBER_OF_QUESTIONS
    )
      return;
    dispatch(setNumberOfQuestions(newNumberOfQuestion));
  };

  const handleDifficultyMinChange = (newDifficultyMin: number) => {
    if (newDifficultyMin < MIN_DIFFICULTY || newDifficultyMin > difficultyMax)
      return;
    dispatch(setDifficultyMin(newDifficultyMin));
  };

  const handleDifficultyMaxChange = (newDifficultyMax: number) => {
    if (newDifficultyMax < difficultyMin || newDifficultyMax > MAX_DIFFICULTY)
      return;
    dispatch(setDifficultyMax(newDifficultyMax));
  };

  const handleFavouriteThemesChange = (newFavouritesThemes: string) => {
    dispatch(setFavouriteThemes(newFavouritesThemes));
  };

  return (
    <DialogContent style={{ backgroundColor: "hsl(var(--middleground))" }}>
      <DialogHeader>
        <DialogTitle>Configurer les questions</DialogTitle>
        <div className="flex flex-row gap-4 justify-center items-center">
          <DialogDescription>
            Copiez la prompt ci-contre et collez là dans un LLM pour que
            celui-ci vous fournisse des questions inédites. Copiez ensuite le
            code fournit par le LLM dans la zone ci-dessous pour lancer le jeu.
          </DialogDescription>
          <div className="justify-center items-center aspect-square">
            <CopyButton
              numberOfTheme={numberOfTheme}
              numberOfQuestions={numberOfQuestions}
              difficultyMin={difficultyMin}
              difficultyMax={difficultyMax}
              favouriteThemes={favouriteThemes}
            />
          </div>
        </div>
      </DialogHeader>
      <div className="font-bold">Paramètres des questions:</div>
      <div className="flex flex-col gap-1">
        <div className="flex flex-row justify-between items-center gap-1">
          <div className="">Nombre de thème</div>
          <div className="flex flex-row items-center justify-center gap-2 py-2">
            <Button
              className="p-2 aspect-square flex-none"
              onClick={() => {
                handleNumberOfThemeChange(numberOfTheme - 1);
              }}
              disabled={numberOfTheme <= MIN_NUMBER_OF_THEMES}
            >
              <Minus />
            </Button>
            <div className="p-2 min-w-16 h-10 bg-background text-center rounded-lg aspect-square">{`${numberOfTheme}`}</div>
            <Button
              className="p-2 aspect-square flex-none"
              onClick={() => {
                handleNumberOfThemeChange(numberOfTheme + 1);
              }}
              disabled={numberOfTheme >= MAX_NUMBER_OF_THEMES}
            >
              <Plus />
            </Button>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center gap-1">
          <div className="">Nombre de questions par thème</div>
          <div className="flex flex-row items-center justify-center gap-2 py-2">
            <Button
              className="p-2 aspect-square flex-none"
              onClick={() => {
                handleNumberOfQuestionChange(numberOfQuestions - 1);
              }}
              disabled={numberOfQuestions <= MIN_NUMBER_OF_QUESTIONS}
            >
              <Minus />
            </Button>
            <div className="p-2 min-w-16 h-10 bg-background text-center rounded-lg aspect-square">{`${numberOfQuestions}`}</div>
            <Button
              className="p-2 aspect-square flex-none"
              onClick={() => {
                handleNumberOfQuestionChange(numberOfQuestions + 1);
              }}
              disabled={numberOfQuestions >= MAX_NUMBER_OF_QUESTIONS}
            >
              <Plus />
            </Button>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center gap-1">
          <div className="">Difficulté minimum</div>
          <div className="flex flex-row items-center justify-center gap-2 py-2">
            <Button
              className="p-2 aspect-square flex-none"
              onClick={() => {
                handleDifficultyMinChange(difficultyMin - 1);
              }}
              disabled={difficultyMin <= MIN_DIFFICULTY}
            >
              <Minus />
            </Button>
            <div className="p-2 min-w-16 h-10 bg-background text-center rounded-lg aspect-square">{`${difficultyMin}`}</div>
            <Button
              className="p-2 aspect-square flex-none"
              onClick={() => {
                handleDifficultyMinChange(difficultyMin + 1);
              }}
              disabled={difficultyMin >= difficultyMax}
            >
              <Plus />
            </Button>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center gap-1">
          <div className="">Difficulté maximum</div>
          <div className="flex flex-row items-center justify-center gap-2 py-2">
            <Button
              className="p-2 aspect-square flex-none"
              onClick={() => {
                handleDifficultyMaxChange(difficultyMax - 1);
              }}
              disabled={difficultyMax <= difficultyMin}
            >
              <Minus />
            </Button>
            <div className="p-2 min-w-16 h-10 bg-background text-center rounded-lg aspect-square">{`${difficultyMax}`}</div>
            <Button
              className="p-2 aspect-square flex-none"
              onClick={() => {
                handleDifficultyMaxChange(difficultyMax + 1);
              }}
              disabled={difficultyMax >= MAX_DIFFICULTY}
            >
              <Plus />
            </Button>
          </div>
        </div>
        <div className="flex flex-col justify-between items-start gap-1">
          <div className="">Thèmes à favoriser</div>
          <Input
            value={favouriteThemes}
            onChange={(e) => {
              handleFavouriteThemesChange(e.target.value);
            }}
            placeholder="Sur quoi voulez vous êtere interrogés ?"
            className="border-foreground"
          ></Input>
        </div>
      </div>
      <div className="font-bold">Collez le retour de votre LLM ci-dessous:</div>
      <Input
        placeholder={`${JSON.stringify(currentQuestions)}`}
        onChange={(e) => {
          setNewQuestionsValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleConfirmLoadQuestions();
          }
        }}
        className="border-foreground"
      />
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline" className="font-bold">
            Annuler
          </Button>
        </DialogClose>
        <Button
          type="submit"
          className="font-bold"
          onClick={handleConfirmLoadQuestions}
        >
          Sauvegarder ces questions
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}

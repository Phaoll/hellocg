import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogHeader } from "./ui/dialog";
import llmPromptTemplate from "@/data/prompt.template";
import { AlertCircle, Check, Copy } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  selectQuestionsDict,
  setQuestionsFromString,
} from "@/store/slices/questionsSlice";
import { useSelector } from "react-redux";
import { type Dispatch, type SetStateAction } from "react";

// TODO
// - Tooltip around the copy button
// - Hide and reveal inputs for new questions

interface CopyButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export const CopyButton: React.FC<CopyButtonProps> = ({
  className,
  children,
}) => {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(llmPromptTemplate);
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

  const handleConfirmLoadQuestions = () => {
    dispatch(setQuestionsFromString(newQuestionsValue));
    setIsOpenQuestionsSettingDialog(false);
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
            <CopyButton />
          </div>
        </div>
      </DialogHeader>
      <div>Collez le retour de votre LLM ci-dessous:</div>
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

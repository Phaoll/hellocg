import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogHeader } from "./ui/dialog";
import llmPromptTemplate from "@/data/prompt.template";
import questionTemplate from "@/data/question.template";
import { AlertCircle, Check, Copy } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";

// TODO
// - Tooltip around the copy button
// - Properly format JSON

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

export function ConfigurationDialogContent() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Configurer les questions</DialogTitle>
        <div className="flex flex-row gap-4 justify-center items-center">
          <DialogDescription>
            Copiez la prompt ci-contre et collez là dans un LLM pour que
            celui-ci vous fournisse des questions originales. Copiez ensuite le
            code fournit par le LLM dans la zone ci-dessous pour lancer le jeu.
          </DialogDescription>
          <div className="justify-center items-center aspect-square">
            <CopyButton />
          </div>
        </div>
      </DialogHeader>
      <div>Collez le retour de votre LLM ci-dessous:</div>
      <Input
        // className="h-48 text-left wrap-anywhere"
        placeholder={`${JSON.stringify(questionTemplate)}`}
      />
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Annuler</Button>
        </DialogClose>
        <Button type="submit">Sauvegarder ces questions</Button>
      </DialogFooter>
    </DialogContent>
  );
}

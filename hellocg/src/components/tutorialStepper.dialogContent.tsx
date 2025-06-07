import {
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogHeader } from "./ui/dialog";
import { Button } from "./ui/button";
import {
  Users,
  Settings,
  HelpCircle,
  Play,
  RotateCcw,
  FileQuestion,
  Settings2,
} from "lucide-react";
import { DialogClose } from "@radix-ui/react-dialog";

export function TutorialStepperDialogContent() {
  const steps = [
    {
      id: 1,
      title: "Changez les paramètres du jeu",
      description:
        "Dans la section paramètres, définissez le nombre de joueurs, le thème de fond et si vous souhaitez que vos questions soit minutées",
      icon: Settings2,
    },
    {
      id: 2,
      title: "Inscrivez le nom des joueurs",
      description:
        "En cliquant sur le nom des joueurs vous pouvez les changer avec les noms de vos équipes",
      icon: Users,
    },
    {
      id: 3,
      title: "Préparez vos questions",
      description:
        "Dans la section 'Nouvelles questions', laissez vous guider pour que l'IA crée vos questions",
      icon: FileQuestion,
    },
    {
      id: 4,
      title: "Jouez !",
      description:
        "Votre partie est prête, vous pouvez cliquer sur les questions et y répondre à tour de rôle, ou pas ! Vous faites les règles",
      icon: Play,
    },
    {
      id: 5,
      title: "Recommencez !",
      description:
        "Relancer le LLM pour de nouvelles questions, changez les règles et rejouez",
      icon: RotateCcw,
    },
  ];

  return (
    <DialogContent style={{ backgroundColor: "hsl(var(--middleground))" }}>
      <DialogHeader>
        <DialogTitle>Bienvenue dans Hello CG</DialogTitle>
      </DialogHeader>

      <div className="px-6 py-6">
        <div className="space-y-4">
          {steps.map((step, _) => {
            const IconComponent = step.icon;
            return (
              <div key={step.id} className="flex items-start gap-4 p-3">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full">
                    <IconComponent className="w-10 h-10 " strokeWidth={2} />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold mb-1">{step.title}</h3>
                  <p className="text-xs">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <DialogFooter>
        <DialogClose variant="outline" className="font-semibold">
          OK
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
}

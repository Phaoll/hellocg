import { useState, type FC } from "react";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

// TODO
// - Change opacity of background when Drawer is drawn

interface QuestionButtonProps {
  questionNumber: string;
  question: string;
  answer: string;
}

const QuestionButton: FC<QuestionButtonProps> = ({
  questionNumber,
  question,
  answer,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Drawer open={isDrawerOpen}>
      <DrawerTrigger asChild>
        <Button
          onClick={() => setIsDrawerOpen(true)}
          className="w-full h-full min-h-32 min-w-32 aspect-square relative flex justify-center bg-gray-500"
          type="button"
          aria-label={`Question ${questionNumber}`}
        >
          <img
            src="./helloPointLogo.png"
            alt=""
            className="w-full h-full min-w-8 min-h-8 object-cover rounded"
          />

          <div className="absolute inset-0 flex items-center justify-center z-10">
            <span className="text-black font-bold text-4xl drop-shadow-md">
              {questionNumber.replace("question", "")}
            </span>
          </div>
        </Button>
      </DrawerTrigger>
      <DrawerContent
        onEscapeKeyDown={(_) => setIsDrawerOpen(false)}
        onInteractOutside={(_) => setIsDrawerOpen(false)}
      >
        <div className="flex flex-col mx-auto w-full items-center justify-center">
          <DrawerHeader>
            <DrawerTitle>{question}</DrawerTitle>
          </DrawerHeader>
          <details>
            <summary>Réponse</summary>
            <p>{answer}</p>
          </details>
          <DrawerFooter>
            <Button onClick={() => setIsDrawerOpen(false)}>
              La question, elle est répondue
            </Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default QuestionButton;

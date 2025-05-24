import type { FC } from "react";
import { Button } from "./ui/button";

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
  const handleClick = () => {
    alert(`${question} -> ${answer}`);
  };

  return (
    <Button
      onClick={handleClick}
      className="relative flex items-center gap-3 px-6 bg-transparent"
      type="button"
      aria-label={`Question ${questionNumber}`}
    >
      <img
        src="./helloPointLogo.png"
        alt=""
        className="w-8 h-8 object-cover rounded"
      />

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <span className="text-black font-bold text-xl drop-shadow-md">
          {questionNumber.replace("question", "")}
        </span>
      </div>
    </Button>
  );
};

export default QuestionButton;

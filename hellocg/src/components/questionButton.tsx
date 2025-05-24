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
  );
};

export default QuestionButton;

import { FC } from "react";

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
    <button
      onClick={handleClick}
      className={`relative overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
    >
      <img
        src={"./public/helloPointLogo.png"}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white font-bold text-6xl drop-shadow-md">
          {questionNumber.replace("question", "")}
        </span>
      </div>
    </button>
  );
};

export default QuestionButton;

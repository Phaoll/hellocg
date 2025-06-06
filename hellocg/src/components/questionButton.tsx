import { useEffect, useState, type FC } from "react";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import {
  selectTimerMaxTime,
  selectUseTimer,
} from "@/store/slices/settingsSlice";
import { useAppSelector } from "@/store/hooks/hooks";

interface QuestionButtonProps {
  questionNumber: string;
  question: string;
  answer: string;
  difficulty: number;
  answered: boolean;
}

const QuestionButton: FC<QuestionButtonProps> = ({
  questionNumber,
  question,
  answer,
  difficulty,
  answered,
}) => {
  const useTimer = useAppSelector(selectUseTimer);
  const timerMaxTime = useAppSelector(selectTimerMaxTime);
  const [answeredState, setAnsweredState] = useState(answered);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(timerMaxTime);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((timeLeft) => timeLeft - 1000);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsTimerRunning(false);
      setIsAnswerRevealed(true);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isTimerRunning, timeLeft]);

  const handleDrawerOpening = () => {
    setIsDrawerOpen(true);
    setTimeLeft(timerMaxTime);
    setIsTimerRunning(true);
    setAnsweredState(true);
  };

  const getTimerColor = () => {
    const progress = timeLeft / timerMaxTime;
    if (progress > 0.5) return "text-green-600";
    if (progress > 0.25) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <Drawer open={isDrawerOpen}>
      <DrawerTrigger asChild>
        <Button
          onClick={handleDrawerOpening}
          className="w-full h-full bg-transparent min-h-32 min-w-32 aspect-square relative flex justify-center"
          aria-label={`Question ${questionNumber}`}
          disabled={answeredState}
        >
          <img
            src="./pointLogo.hellopoint.png"
            className="w-full h-full min-w-8 min-h-8 object-contain rounded"
          />

          <div className="absolute inset-0 flex items-center justify-center z-10">
            <span className="font-bold text-6xl drop-shadow-md text-gray-500">
              {difficulty}
            </span>
          </div>
        </Button>
      </DrawerTrigger>
      <DrawerContent
        style={{ backgroundColor: "hsl(var(--middleground))" }}
        onEscapeKeyDown={(_) => setIsDrawerOpen(false)}
        onInteractOutside={(_) => setIsDrawerOpen(false)}
      >
        <div className="flex flex-row">
          <div className="flex flex-col mx-auto w-full items-center justify-center">
            <DrawerHeader>
              <DrawerTitle className="text-3xl">{question}</DrawerTitle>
            </DrawerHeader>
            <div className="w-full text-center">
              {AnswerSpoilerBlur({
                childrenString: answer,
                isRevealed: isAnswerRevealed,
                setIsRevealed: setIsAnswerRevealed,
              })}
            </div>
            <DrawerFooter>
              <Button onClick={() => setIsDrawerOpen(false)}>
                La question, elle est répondue
              </Button>
            </DrawerFooter>
          </div>

          {useTimer && (
            <div className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-4 min-w-[140px]">
              <div className="flex flex-col items-center space-y-2">
                <div className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                  Temps restant
                </div>

                {timeLeft > 0 ? (
                  <>
                    <div
                      className={`text-2xl font-bold tabular-nums ${getTimerColor()}`}
                    >
                      {timeLeft / 1000}
                    </div>
                    <div className="text-xs text-gray-500">
                      {timeLeft === 1000 ? "seconde" : "secondes"}
                    </div>

                    {/* Progress bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ${
                          timeLeft / timerMaxTime > 0.5
                            ? "bg-green-500"
                            : timeLeft / timerMaxTime > 0.25
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                        style={{ width: `${(timeLeft / timerMaxTime) * 100}%` }}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-2xl font-bold text-red-600 animate-pulse">
                      ⏰
                    </div>
                    <div className="text-sm font-semibold text-red-600 text-center animate-bounce">
                      Temps écoulé !
                    </div>
                    <div className="text-xs text-gray-500 text-center">
                      Le temps est fini
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

interface AnswerSpoilerBlurProps {
  childrenString: string;
  isRevealed: boolean;
  setIsRevealed: React.Dispatch<React.SetStateAction<boolean>>;
}

function AnswerSpoilerBlur({
  childrenString,
  isRevealed,
  setIsRevealed,
}: AnswerSpoilerBlurProps) {
  const handleClick = () => {
    setIsRevealed(true);
  };

  return (
    <div className="relative inline w-full">
      <span
        className={`
          text-2xl relative cursor-pointer select-none transition-all duration-300 ease-out
          ${
            isRevealed
              ? "text-gray-800"
              : "text-transparent bg-gray-300 rounded-md"
          }
        `}
        onClick={handleClick}
        style={{
          filter: isRevealed ? "none" : "blur(4px)",
          textShadow: isRevealed ? "none" : "0 0 8px rgba(0,0,0,0.5)",
        }}
      >
        {childrenString}
      </span>
      {!isRevealed && (
        <span
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
          onClick={handleClick}
        >
          <span className="text-2xl text-gray-500 font-medium px-1 whitespace-nowrap">
            Montrer la réponse
          </span>
        </span>
      )}
    </div>
  );
}

export default QuestionButton;

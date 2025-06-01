import { Minus, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export default function PlayerCard() {
  const [counterA, setCounterA] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState("Player's Name");

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      setIsEditing(false);
    }
    if (e.key === "Escape") {
      setIsEditing(false);
    }
  };
  return (
    <div className="flex flex-col">
      <div className="p-2 text-center hover:bg-gray-50">
        {isEditing ? (
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            autoFocus
            className="w-full text-center bg-gray-100 border outline-none"
          />
        ) : (
          <div onClick={handleClick} className="cursor-pointer">
            {value || "Click to edit..."}
          </div>
        )}
      </div>
      <div className="flex flex-row items-center justify-center gap-2 py-2">
        <Button
          className="p-2 aspect-square flex-none"
          onClick={() => {
            setCounterA(counterA + 1);
          }}
        >
          <Plus />
        </Button>
        <div className="p-2 bg-gray-200 grow h-10 text-center rounded-lg aspect-square">{`${counterA}`}</div>
        <Button
          className="p-2 aspect-square flex-none"
          onClick={() => {
            setCounterA(counterA - 1);
          }}
        >
          <Minus />
        </Button>
      </div>
    </div>
  );
}

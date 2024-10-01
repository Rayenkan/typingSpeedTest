"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { generateRandomText } from "@/utils/FetchParagraph";
import { Input } from "../ui/input";
import useTestStore from "../stores/store";
import { motion } from "framer-motion";

const TypingArea = () => {
  const { testBy, filter, duration, length } = useTestStore();
  let [textLength, setTextLength] = useState(0);
  const [randomText, setRandomText] = useState<string>("");
  const [typedText, setTypedText] = useState<string>("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const Length = testBy == "word" ? length : 25;
    setTextLength(Length);
    setRandomText(generateRandomText(Length));
    inputRef.current?.focus();
  }, [length, testBy]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (startTime === null) {
        setStartTime(Date.now());
      }
      if (value.length === randomText.length) {
        setIsFinished(true);
      }
      setTypedText(value);
    },
    [randomText, startTime]
  );

  const calculateWPM = useCallback(() => {
    if (!startTime) return 0;
    const elapsedTimeInMinutes = (Date.now() - startTime) / 1000 / 60;
    const wordsTyped = typedText.trim().split(/\s+/).length;
    return Math.round(wordsTyped / elapsedTimeInMinutes);
  }, [startTime, typedText]);

  const calculateAccuracy = useCallback(() => {
    const correctChars = typedText
      .split("")
      .filter((char, index) => char === randomText[index]).length;
    return Math.round((correctChars / randomText.length) * 100);
  }, [typedText, randomText]);

  return (
    <motion.div
      className="relative w-[95vw]  p-2 bg-[#323437] rounded-lg mt-24"
     
    >
      <div
        className="mb-4 text-4xl  font-mono relative"
        style={{ lineHeight: "1.6" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          {randomText.split("").map((char, index) => {
            const typedChar = typedText[index];
            let className = "text-gray-300";
            if (typedChar === char) {
              className = "text-green-500";
            } else if (typedChar && typedChar !== char) {
              className = "text-red-500";
            }
            return (
              <span key={index} className={`${className}`}>
                {char}
              </span>
            );
          })}
        </div>
        <motion.input
         key="testLength"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.2 }}
          ref={inputRef}
          type="text"
          value={typedText}
          onChange={handleInputChange}
          disabled={isFinished}
          className="w-full bg-transparent text-transparent caret-black focus:outline-none mb-1" // Added mb-1 for margin-bottom
          style={{ caretColor: "yellow" , caretShape:"bar" , }}
        />
      </div>
      {isFinished && (
        <div className="mt-4 text-xl">
          <p className="text-blue-600">
            Well done! Your typing speed is {calculateWPM()} WPM.
          </p>
          <p className="text-green-600">Accuracy: {calculateAccuracy()}%</p>
        </div>
      )}
    </motion.div>
  );
};

export default TypingArea;

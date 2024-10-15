"use client";
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useLayoutEffect,
} from "react";
import { generateRandomText } from "@/utils/FetchParagraph";
import useTestStore from "../stores/store";
import { motion, useAnimation } from "framer-motion";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Clock, Zap, Target } from "lucide-react";
import { ReloadIcon } from "@radix-ui/react-icons";
const TypingArea = () => {
  const { testBy, filter, duration, length } = useTestStore();
  const [randomText, setRandomText] = useState<string>("");
  const [typedText, setTypedText] = useState<string>("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number>(duration);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const controls = useAnimation();
  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      inputRef.current?.focus();
      console.log("Input focused");
    }, 0); 

    return () => clearTimeout(timer); 
  }, [randomText, isDialogOpen]); 

  useEffect(() => {
    const lengthToUse = testBy === "word" ? length : 25;
    const generatedText = generateRandomText(lengthToUse);
    setRandomText(applyFilters(generatedText));
  }, [length, testBy, filter]);

  const applyFilters = (text: string) => {
    let filteredText = text;
    if (!filter.includes("Punctuation")) {
      filteredText = filteredText.toLowerCase().replace(/[^\w\s]/gi, "");
    }
    if (!filter.includes("Numbers")) {
      filteredText = filteredText.replace(/[0-9]/g, "");
    }
    return filteredText;
  };

  const handleTestEnd = () => {
    setIsDialogOpen(false);
    setTypedText("");
    setIsFinished(false);
    setStartTime(null);
    setTimeLeft(duration);
    const lengthToUse = testBy === "word" ? length : 25;
    setRandomText(applyFilters(generateRandomText(lengthToUse)));
    clearInterval(timerRef.current as NodeJS.Timeout);
    inputRef.current?.focus();
  };

  useEffect(() => {
    handleTestEnd(); // Reset state whenever relevant props change
  }, [length, testBy, filter, duration]);

  const startTimer = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!startTime) setStartTime(Date.now());

    if (testBy === "time") {
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1 || e.target.value.length >= randomText.length) {
            clearInterval(timerRef.current as NodeJS.Timeout);
            setIsFinished(true);
            setIsDialogOpen(true);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
  };

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (!startTime) startTimer(e);

      setTypedText(value);

      if (testBy === "word" && value.length === randomText.length) {
        setIsFinished(true);
        setIsDialogOpen(true);
        clearInterval(timerRef.current as NodeJS.Timeout);
      }
    },
    [randomText, startTime, testBy]
  );

  const calculateWPM = useCallback(() => {
    if (!startTime) return 0;
    const elapsedTimeInMinutes = (Date.now() - startTime) / 1000 / 60;
    const wordsTyped = typedText.trim().split(/\s+/).length;
    return Math.round(wordsTyped / elapsedTimeInMinutes);
  }, [startTime, typedText]);

  const calculateAccuracy = useCallback(() => {
    const correctChars = typedText.split("").reduce((acc, char, idx) => {
      return char === randomText[idx] ? acc + 1 : acc;
    }, 0);
    return typedText.length > 0
      ? Math.round((correctChars / typedText.length) * 100)
      : 100;
  }, [typedText, randomText]);

  return (
    <motion.div className="relative flex flex-col w-[95vw] p-2 bg-[#323437] rounded-lg ">
      <div className=" flex justify-center pt-5  ">
        <ReloadIcon
          className="h-12 w-12 text-gray-500 hover:text-gray-300 hover:cursor-pointer"
          onClick={() => handleTestEnd()}
        />
      </div>
      {testBy === "time" && !isFinished && (
        <p className="text-lg text-yellow-500 ">Time left: {timeLeft}s</p>
      )}
      <div
        className="mb-4 text-4xl font-mono relative mt-16"
        style={{ lineHeight: "1.6" }}
      >
        <div className="relative">
          {randomText.split("").map((char, index) => {
            const typedChar = typedText[index];
            let className = "text-gray-300";
            if (typedChar === char) {
              className = "text-green-500";
            } else if (typedChar && typedChar !== char) {
              className = "text-red-500";
            }

            return (
              <span key={index} className={`${className} relative`}>
                {char}
                {index === typedText.length && (
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500 animate-pulse"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{
                      duration: 1,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  ></motion.span>
                )}
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
          className="w-full h-[40vh] py-2 bg-transparent text-transparent absolute top-0  focus:outline-none mb-1"
        />
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-[#2C2E31] border-none rounded-lg shadow-lg max-w-2xl w-full p-6">
          <DialogHeader className="space-y-4">
            <DialogTitle className="text-gray-600 text-4xl font-semibold ">
              Test Results
            </DialogTitle>
            <DialogDescription className="space-y-6 p-4">
              <div className="flex items-center justify-between bg-gray-800 rounded-lg p-4">
                <Clock className="text-blue-400 w-6 h-6" />
                {testBy == "time" ? (
                  <span className="text-gray-200 text-xl font-semibold">
                    {duration} Seconds{" "}
                  </span>
                ) : (
                  <span className="text-gray-200 text-xl font-semibold">
                    {length} Words{" "}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-900 rounded-lg p-4 flex flex-col items-center justify-center">
                  <Zap className="text-yellow-400 w-8 h-8 mb-2" />
                  <span className="text-gray-200 text-lg font-semibold">
                    Speed
                  </span>
                  <span className="text-yellow-400 text-2xl font-bold">
                    {calculateWPM()} WPM
                  </span>
                </div>
                <div className="bg-green-900 rounded-lg p-4 flex flex-col items-center justify-center">
                  <Target className="text-green-400 w-8 h-8 mb-2" />
                  <span className="text-gray-200 text-lg font-semibold">
                    Accuracy
                  </span>
                  <span className="text-green-400 text-2xl font-bold">
                    {calculateAccuracy()}%
                  </span>
                </div>
              </div>

              <DialogClose asChild>
                <Button
                  variant="ghost"
                  className="w-full text-black hover:bg-[#3A3C3F] hover:text-gray-100 bg-yellow-400 transition-colors"
                  onClick={handleTestEnd}
                  onKeyDown={(event) => {
                    event.preventDefault();
                  }}
                >
                  ok
                </Button>
              </DialogClose>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default TypingArea;

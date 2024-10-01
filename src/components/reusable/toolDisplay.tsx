"use client";
import { TestFilter } from "./testFilter";
import { TestBy } from "./testBy";
import TimeSettings from "./timeSettings";
import VerticalSeperator from "./verticalSeperator";
import useTestStore from "../stores/store";
import TestLengthSettings from "./testLengthSettings";
import { AnimatePresence, motion } from "framer-motion";


const ToolsDisplay = () => {
  const { testBy  } = useTestStore();
 
  return (
    <motion.div className="relative h-14 w-fit px-4 rounded-xl flex flex-row items-center justify-center space-x-8 bg-[#2c2e31] text-gray-500">
      <TestFilter />
      <VerticalSeperator />
      <TestBy />
      <VerticalSeperator />

      <AnimatePresence mode="wait">
        {testBy === "word" ? (
          <motion.div
            key="testLength"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <TestLengthSettings />
          </motion.div>
        ) : (
          <motion.div
            key="timeSettings"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <TimeSettings />
          </motion.div>
        )}
      </AnimatePresence>
      
    </motion.div>
  );
};

export default ToolsDisplay;

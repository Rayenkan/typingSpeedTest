"use client";
import { CustomLengthDialog } from "./customLenghtDialog";
import useTestStore from "../stores/store";

const TestLengthSettings = () => {
  const { length, setLength } = useTestStore();
  return (
    <div className="flex flex-row items-center justify-between space-x-8">
      <p
        onClick={() => setLength(15)}
        className={` hover:text-gray-300 cursor-pointer ${
          length == 15 ? "text-yellow-500" : "text-gray-500"
        }`}
      >
        15
      </p>
      <p
        onClick={() => setLength(25)}
        className={` hover:text-gray-300 cursor-pointer ${
          length == 25 ? "text-yellow-500" : "text-gray-500"
        }`}
      >
        25
      </p>
      <p
        onClick={() => setLength(50)}
        className={` hover:text-gray-300 cursor-pointer ${
          length == 50 ? "text-yellow-500" : "text-gray-500"
        }`}
      >
        50
      </p>
      <p
        onClick={() => setLength(100)}
        className={` hover:text-gray-300 cursor-pointer ${
          length == 100 ? "text-yellow-500" : "text-gray-500"
        }`}
      >
        100
      </p>
      <CustomLengthDialog />
    </div>
  );
};
export default TestLengthSettings;

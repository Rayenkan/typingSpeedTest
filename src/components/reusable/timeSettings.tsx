"use client";

import { CustomTimeDialog } from "./customTimeDialog";
import useTestStore from "../stores/store";

const TimeSettings = () => {
  const { duration, setDuration } = useTestStore();
  return (
    <div className="flex flex-row items-center justify-between space-x-8">
      <p
        onClick={() => setDuration(15)}
        className={` hover:text-gray-300 cursor-pointer ${
          duration == 15 ? "text-yellow-500" : "text-gray-500"
        }`}
      >
        15
      </p>
      <p
        onClick={() => setDuration(30)}
        className={` hover:text-gray-300 cursor-pointer ${
          duration == 30 ? "text-yellow-500" : "text-gray-500"
        }`}
      >
        30
      </p>
      <p
        onClick={() => setDuration(60)}
        className={` hover:text-gray-300 cursor-pointer ${
          duration == 60 ? "text-yellow-500" : "text-gray-500"
        }`}
      >
        60
      </p>
      <p
        onClick={() => setDuration(100)}
        className={` hover:text-gray-300 cursor-pointer ${
          duration == 100 ? "text-yellow-500" : "text-gray-500"
        }`}
      >
        100
      </p>
      <CustomTimeDialog />
    </div>
  );
};
export default TimeSettings;

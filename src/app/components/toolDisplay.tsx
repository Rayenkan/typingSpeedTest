import ClockIcon from "../svgs/clockIcon";
import TextIcon from "../svgs/textIcon";
import TimeSettings from "./timeSettings";
import VerticalSeperator from "./verticalSeperator";

const ToolsDisplay = () => {
  return (
    <div className=" relative h-14 w-[45%] rounded-xl flex flex-row items-center justify-center space-x-8 bg-[#2c2e31] text-gray-500">
      <p>@ Punctuation</p>
      <p># Numbers</p>
      <VerticalSeperator />
      <div className="flex flex-row items-center space-x-1">
        <ClockIcon />
        <p>Time</p>
      </div>

      <div className="flex flex-row items-center space-x-1">
        <TextIcon />
        <p>word</p>
      </div>

      <VerticalSeperator />
      <TimeSettings />
    </div>
  );
};
export default ToolsDisplay;

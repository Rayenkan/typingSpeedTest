import TopBar from "@/components/reusable/topBar"
import ToolsDisplay from "@/components/reusable/toolDisplay";
import TypingArea from "@/components/reusable/TypingArea";

const Page =()=>{
  
  return (
    <div className="h-full w-full flex flex-col items-center">
      <TopBar/>
      <ToolsDisplay/>
      <TypingArea/>
    </div>
  )
}
export default Page;



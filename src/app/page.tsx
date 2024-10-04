import TopBar from "@/components/reusable/topBar"
import ToolBar from "@/components/reusable/toolBar";
import TypingArea from "@/components/reusable/TypingArea";

const Page =()=>{
  
  return (
    <div className="h-full w-full flex flex-col items-center">
      <ToolBar/>
      <TypingArea/>
    </div>
  )
}
export default Page;



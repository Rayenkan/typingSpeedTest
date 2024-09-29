import TopBar from "./components/topBar"
import ToolsDisplay from "./components/toolDisplay";
const Page =()=>{
  return (
    <div className="h-full w-full flex flex-col items-center">
      <TopBar/>
      <ToolsDisplay/>
    </div>
  )
}
export default Page;
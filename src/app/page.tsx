import TopBar from "../components/reusable/topBar"
import ToolsDisplay from "../components/reusable/toolDisplay";
const Page =()=>{
  return (
    <div className="h-full w-full flex flex-col items-center">
      <TopBar/>
      <ToolsDisplay/>
    </div>
  )
}
export default Page;
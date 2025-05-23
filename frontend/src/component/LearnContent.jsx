import { useTheme } from "../fucntions/Theme";
import LearnSteps from "./LearnSteps";
const LearnContent = () => {
    const {theme} = useTheme()
    return (  
        < div className={`w-full h-screen overflow-auto flex justify-center items-start ${theme ? "text-gray-900" : "text-white"}`}>
            <div className="w-[80%] flex flex-col gap-y-7 !mt-[30%] base-size:w-[70%] base-size:!mt-[30%] base2-size:w-[60%] base2-size:!mt-[25%] 
             base3-size:!mt-[20%] lg:!mt-[15%] xl:!mt-[15%] 2xl:!mt-[10%] xl:w-[50%] 2xl:w-[40%]">
                <div>
                    <h1 className="text-[35px] font-medium">How to Start With Cryptocurrency</h1>
                </div>
                <LearnSteps theme={theme}  />
            </div>

        </div >
    );
}
 
export default LearnContent
   
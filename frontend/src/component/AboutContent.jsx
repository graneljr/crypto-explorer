import { useTheme } from "../fucntions/Theme";
import FrequentlyAsked from "./FrequentlyAsked";
const AboutContent = () => {
    const {theme} = useTheme()
    return ( 
        
        <div className={`w-full h-screen overflow-auto flex justify-center items-start ${theme ? "text-gray-900" : "text-white"}`}>
            <div className="w-[80%] flex flex-col gap-y-7 !mt-[30%] base3-size:!mt-[15%] base3-size:w-[60%] xl:w-[50%]">
                <div>
                    <h1 className="text-[40px] font-medium base3-size:text-6xl !mb-[2%]">About</h1>
                    <span className="flex flex-wrap text-[15px] base3-size:text-[20px] ">We are dedicated to providing you with the lateat news. Insights, and resources in the cryptocurrency space. Our goal is to help you havigate the world of digital currencies with case and confidence.</span>
                </div>
                <FrequentlyAsked />
               </div>
     
        </div>
        
     );
}
 
export default AboutContent;
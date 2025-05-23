import HeroImage from "./HeroImage";
import HeroTyphography from "./HeroTyphography";
import { useTheme } from "../fucntions/Theme";
const HeroContent = () => {
    const {theme} = useTheme()
    return ( 
        <div className={`w-full h-screen relative flex flex-row-reverse justify-evenly items-center ${theme ?  "text-gray-900":"text-white"}`}>
            <HeroImage/>
            <HeroTyphography/>
        </div>
     );
}
 
export default HeroContent;
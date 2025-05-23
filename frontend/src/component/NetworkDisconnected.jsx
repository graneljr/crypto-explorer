import day from "../assets/day internet.png";
import night from "../assets/night internet.png";
import { useTheme } from "../fucntions/Theme";
const NetworkDisconnected = () => {
    const {theme} = useTheme()
    return ( 
        <div className="w-full flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <img src={theme ? night : day} alt="internet" className="w-[300px] h-[300px]"/>
                <h1 className="text-2xl">No Internet Connection</h1>
            </div>
        </div>
     );
}
 
export default NetworkDisconnected;
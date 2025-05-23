import { NavLink} from "react-router-dom";
import { useTheme } from "../fucntions/Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faXmark,faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
const ResponsiveNav = ({slider,openNav,setOpenNav }) => {
    const {theme,toggleTheme} = useTheme()
    return ( 
        <nav className={`flex flex-col min-[800px]:hidden items-center gap-y-6 ease-in-out font-bold !py-[30px] ${theme ? "text-white bg-gray-900" : "text-gray-900 bg-white"} text-[15px] h-full w-1/3 fixed top-0 right-0 ${slider}`}>
            <div className="w-full flex justify-around">
                <FontAwesomeIcon icon={theme ? faMoon : faSun} className={`${theme ? "" : "text-yellow-400"} transition-colors duration-300 text-2xl`} onClick={() => toggleTheme()} />
                <FontAwesomeIcon icon={faXmark} className={` ${theme ? "text-white" : "text-gray-900"} text-2xl scale-[40px]`} onClick={() => setOpenNav(!openNav)} />                   
                </div>
            <ul className="flex flex-col gap-3 w-full items-center justify-center">
                <li> 
                    <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/crypto"}>Crypto</NavLink>
                </li>
                <li>
                    <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                    <NavLink to={"/learn"}>Learn</NavLink>
                </li>
            </ul>
        </nav>
    );
}
 
export default ResponsiveNav;
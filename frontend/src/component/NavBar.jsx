import {NavLink, useLocation}  from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars,faSun, faMoon} from "@fortawesome/free-solid-svg-icons"

import { useState } from "react"
import ResponsiveNav from "./responsiveNav"
import { useTheme } from "../fucntions/Theme"
const NavBar = () => {
    const [openNav, setOpenNav] = useState(false)
    const {theme,toggleTheme} = useTheme()
    const location = useLocation()
    const links = [
        { to: "/", label: "Home" },
        { to: "/crypto", label: "Crypto" },
        { to: "/about", label: "About" },
        { to: "/learn", label: "Learn" },
    ];
    const currentLink = links.find(link => link.to === location.pathname)?.label || "";
    return (
        <>
            <h1 className={` ${theme ? "text-gray-900" : "text-white"} min-[800px]:!hidden text-2xl absolute top-[5%] left-[5%] scale-[40px]
            `}>Crypto Explorer</h1> 
            <h1 className={` ${theme ? "text-gray-900" : "text-white"} min-[800px]:!hidden text-2xl absolute top-[5%] right-[20%] scale-[40px]`}>{currentLink}</h1>      
            <div className="fixed top-[6%] max-[800px]:right-[5%] z-100 min-[800px]:w-full">
                {!openNav && (<FontAwesomeIcon icon={faBars} className={` ${theme ? "text-gray-900" : "text-white"} min-[800px]:!hidden text-2xl scale-[40px] z-50`} onClick={() => setOpenNav(!openNav)} />)}
                <ResponsiveNav openNav={openNav} setOpenNav={setOpenNav} slider={`duration-300 transition-translate z-10 ${openNav ? "translate-x-0 opacity-100 pointer-events-auto" : "translate-x-full opacity-0 pointer-events-none"}`} />
                <nav className={`flex z-10 max-[800px]:hidden items-center justify-around w-full text-2xl ${theme ? "text-gray-900" : "text-white"}`}>
                    <h1>Crypto Explorer</h1>
                    <ul className="flex w-[50%] justify-around items-center xl:w-[30%]">
                        {links.map((links,index)=>{
                            return(
                                <li key={index}>
                                    <NavLink to={links.to}>{links.label}</NavLink>
                                </li>
                            )
                        })}
                        <FontAwesomeIcon icon={theme ? faMoon : faSun} className={`${theme ? "" : "text-yellow-400"} transition-colors duration-300`} onClick={() => toggleTheme()} />
                    </ul>

                </nav>
            </div>
        </>
    );
}
 
export default NavBar;

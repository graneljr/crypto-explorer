import { Route, Routes } from "react-router-dom"
import NavBar from "./component/NavBar"
import { useTheme } from "./fucntions/Theme"
import Hero from "./pages/hero"
import Crypto from "./pages/Crypto"
import About from "./pages/About"
import Learn from "./pages/Learn"
const  App = ()=> {
  const {theme} = useTheme()
  return (
    <div className={`${theme ? "bg-white" : "bg-gray-900"} w-[-100%] h-[100vh] transition-colors duration-300 `}>
     <NavBar/>
     <Routes>
       <Route path="/" element={<Hero/>}/>
       <Route path="crypto" element={<Crypto/>}/>
       <Route path="about" element={<About/>}/>
       <Route path="learn" element={<Learn/>}/>
     </Routes>
    </div>
  )
}

export default App

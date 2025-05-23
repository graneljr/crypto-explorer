import { useState, createContext,useContext } from "react";

const ThemeContext = createContext()

export function ThemeProvider({children}){
    const [theme ,setTheme] = useState(false)
    const toggleTheme = () => {
        setTheme(!theme);
      };
      return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
      )
}

export function useTheme(){
    return useContext(ThemeContext)
}
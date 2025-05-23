import { useContext, createContext, useState } from "react";
import axios from "axios";
const SearchContext = createContext()
export const SearchProvider = ({children}) => {
    const [search, setSearch] = useState([])
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const [searchFound , setSearchFound] = useState(false)
    const [isSearching,setIsSearching] = useState(false)
    const Search = async (crypto) => {
        setLoading(true)
        if(crypto.trim().length == 0){
            setSearch([])
            setLoading(false)
            setIsSearching(false)
        }else{
        
            const response = await axios.get(`http://localhost:3000/search/${crypto}`)
            .then(res => { setSearch(res.data),console.log(res.data) })
            .catch((error) => {setSearchFound(true) ,setLoading(false)})
                .finally(() => { setLoading(false), setIsSearching(false) })
        }
    }
    const EnterSearch = (event) => {
        if (event.key === "Enter") {
            Search(input)
        
        }
    }
    return ( 
        <SearchContext.Provider value={{search, setSearch, input, setInput, Search, EnterSearch, loading,searchFound,setSearchFound ,isSearching,setIsSearching}}>
            {children}
        </SearchContext.Provider>
     );
}

export const useSearch = () => {
    return useContext(SearchContext)
}
 
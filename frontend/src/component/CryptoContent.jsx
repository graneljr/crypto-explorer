import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import CryptoTable from "./CryptoTable";
import { useTheme } from "../fucntions/Theme";
import { useSearch } from "../fucntions/Search";
import Loading from "./Loading";
const CryptoContent = () => {

    const { theme } = useTheme()
    const { input, setInput, EnterSearch, search, loading, setSearch, searchFound, setSearchFound, isSearching, setIsSearching } = useSearch()
    return ( 
        <div className={` ${theme ? "text-gray-900" : "text-white"} w-full h-screen overflow-auto  flex justify-center items-start `}>
            <div className="w-[80%]  flex flex-col gap-y-5 !mt-[30%] base3-size:!mt-[15%] lg:!mt-[10%] base3-size:w-[70%] lg:w-[55%] xl:w-[50%]">
                <h1 className="text-[40px]  font-medium">Crypto</h1>
                <div className="w-full h-[40px] bg-gray-50/20 rounded-[4px] flex justify-around items-center">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type="text" className="w-[80%] h-full  outline-0" onChange={(e)=> {setInput(e.target.value)}} onKeyDown={EnterSearch} value={input} placeholder="Search Cryptocurrency" />
                </div>
                <div className="w-full flex justify-between">
                    <h3>{!input.trim().length == 0 ?  "Search":"Top 10 Crypto" }</h3>
                    <h1>Source <a href="https://www.coingecko.com" target="_blank" className="text-blue-500">CoinGecko</a></h1>
                </div>
                {loading ? <div className="flex w-full justify-center items-center h-[300px]"><Loading/></div> : <CryptoTable colBg={`${theme ? "bg-white" : "bg-gray-900"}`}  searched={search} input={input} setSearch={setSearch} searchFound={searchFound} setSearchFound={setSearchFound} isSearching={isSearching} setIsSearching={setIsSearching}/>}
        </div>  
    </div>
);
}
 
export default CryptoContent;
import { useEffect ,useState} from "react";
import axios from 'axios'
import CurrentCoins from "./CurrentCoins";
import SearchedCoin from "./SearchedCoin";
import Loading from "./Loading";
import NetworkDetection from "./NetworkDetection";
import CoinsNotFound from "./CoinsNotFound";
const CryptoTable = ({ colBg, searched, input, setSearch, searchFound, setSearchFound, isSearching, setIsSearching }) => {
    const [crypto_data ,setCrypto_data] = useState([])
    const [refresh ,setRefresh] = useState(false)
    const [loading ,setLoading] = useState(false)
    
    useEffect(()=>{    
        setLoading(true)
        axios.get("http://localhost:3000/top-10-cryptocurrency")
        .then((response)=> {
            setCrypto_data(response.data)
            setLoading(false)
        }).catch((error)=>{console.log(error)})
    },[refresh])

   useEffect(()=>{
    setIsSearching(true)
        if(input.trim().length == 0){
            setSearch([])
            setLoading(false)
            setSearchFound(false)
            setIsSearching(false)   
        }else{
            setLoading(true)
        }
   },[input])   
    return ( 
        
            <NetworkDetection>
                <div className="w-full flex flex-col gap-y-3">
                    {
                        searched.length == 0 && (
                            <div className="flex justify-end">
                                <button className="px-4 py-1 bg-blue-500 text-white rounded" onClick={() => setRefresh(prev => !prev)}>Refresh</button>
                            </div>
                        )
                    }
                    <div className=" overflow-y-auto overflow-x-auto pb-3.5">
                        {isSearching ? (
                        searchFound ? (<CoinsNotFound />) : (loading ? (<></>) : (<SearchedCoin searched={searched} colBg={colBg} input={input} isSearching={isSearching} />) )
                        )
                            : (
                                !crypto_data.length == 0 && (
                                    loading ? <div className="flex w-full justify-center items-center h-[300px]">< Loading /></div> : <CurrentCoins crypto_data={crypto_data} colBg={colBg} />
                                ) 
                            )
                        }
                    </div>
                </div>
            </NetworkDetection>
        
     );
}

export default CryptoTable;
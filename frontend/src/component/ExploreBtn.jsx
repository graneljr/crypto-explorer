import {useNavigate} from "react-router-dom"
const ExploreBtn = () => {
    const navigate = useNavigate()
    const RedirectToCrypto = ()=>{
        navigate('/crypto')
    }
    return <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700
    transition-colors ease-in-out duration-200 !p-[10px] outline-0 text-[15px] w-[150px] rounded-[7px]" onClick={RedirectToCrypto}>Explore Now</button>
}
 
export default ExploreBtn;
const Guides = ({step, guide,number,theme}) =>{
    return(
        <div className="justify-center items-center flex flex-col">
            <div className={`w-full py-4 border-1 rounded-2xl flex justify-evenly items-center  ${theme ? "border-gray-900" : "border-white"}`}>
                <div className={`h-[100px] w-[30%] border-0 rounded-[10px] flex flex-col justify-evenly ${theme ? "text-gray-900 bg-gray-200/60" : "text-white bg-gray-50/10"} flex justify-center items-center`}>
                    <h3>Step</h3>
                    <h1 className="text-5xl">{number}</h1>
                </div>
                <div className="w-[50%] flex flex-col justify-evenly">
                    <h1 className="text-[19px] font-black   ">{step}</h1>
                    <p className="text-[14px]">{guide}</p>
                </div>
            </div>
            {number !== 5 && <div className={`w-[2px] h-[30px]  ${theme ? "bg-gray-900" : "bg-white"} `}></div>}
        </div>
       
    )
}
const LearnSteps = ({theme}) => {
    const steps = [{
        number:1,
        step:"Choose an Exchange",
        guide:"Select a cryptocurrency exchange that meets your needs."
    },
    {
        number: 2,
        step:"Create an Account",
        guide:"Sign up with personal information with complete verification proccess"
    },{
        number: 3,
        step:"Deposit Funds",
        guide:"Fund your account using a bank transfer, credit card, or other methods"
    },{
        number: 4,
        step:"Buy Cryptocurrency",
        guide:"Purchased desired cryptocurrency"
    },{
        number: 5,
        step:"Trade Your Cryptocurrency",
        guide:"Go to trading center to trade your crypto before you trade your crypto make sure the price is not bad "
    }
]
    return ( 
        <div className="pb-5 fade-in">
            {
                steps.map((step, index)=>(
                    <Guides key={index} {...step} theme={theme} className="fade-item"
                        style={{ animationDelay: `${(index+1) * 0.1}s` }}/>
                ))
            }
        </div>
     );
}
 
export default LearnSteps;
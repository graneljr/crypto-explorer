import ExploreBtn from "./ExploreBtn";
const HeroTyphography = () => {
    return ( 
        <div className="font-bold  max-[999px]:absolute  max-[999px]:top-[40%]  max-[999px]:left-[25%] flex flex-col gap-y-[35px] base-size:left-[28%] base2-size:left-[32%] sm:left-[35%]
        base3-size:!left-[40%]">
            <div className="flex flex-col lg:gap-y-[10px]">
                <h1 className="text-3xl base-size:text-3xl base2-size:text-5xl lg:text-7xl">Invest in</h1>
                <h2 className="text-2xl  base-size:text-3xl base2-size:text-4xl lg:text-5xl">Cryptocurrency</h2>
                <h4 className="text-[14px] base2-size:text-[18px] lg:text-2xl">Start your crypto journey today!</h4>
            </div>
            <ExploreBtn/>
        </div>
     );
}
 
export default HeroTyphography;
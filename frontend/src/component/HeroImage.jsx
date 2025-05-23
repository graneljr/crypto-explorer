import hand from "../assets/hand.png"
const HeroImage = () => {
    return ( 
        <div>
            <img src={hand} alt="hand" className=" max-[999px]:w-[70%] max-[999px]:h-[70%] object-contain max-[999px]:absolute  max-[999px]:top-[20%]  max-[999px]:left-[16%]  max-[999px]:blur-[3px]
            w-[400px]"/>
        </div>
     );
}
 
export default HeroImage;
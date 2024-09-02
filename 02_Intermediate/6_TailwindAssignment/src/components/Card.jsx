import Count from "./Count";
function Card({name, address}){
    return(
        <div className="border-gray-300 shadow-lg">
            <div className="  ">
                <div className="bg-green-500 h-36">
                    
                </div>
                <div className="bg-white h-36 flex justify-center items-center flex-col">
                    <div className=" font-bold text-xl ">
                        {name}
                    </div>
                    <p className=" font-light text-sm ">{address}</p>
                </div>
            </div>
            <div className="w-full h-px bg-gray-300">
                
            </div>
            <Count  follwerCount={"80K"} likesCount={"803k"} photos={"1.4K"}/>
        </div>
    );
}
export default Card;
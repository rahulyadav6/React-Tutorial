import Count from "./Count";
function Card({name, address}){
    return(
        <div className="border-gray-300 shadow-lg">
            <div className="flex flex-col flex-wrap  ">
                <div className="bg-green-500 h-36 relative ">
                    <div className=" absolute -bottom-12 left-20">
                        <img className=" size-32 rounded-full" src="https://images.pexels.com/photos/27990629/pexels-photo-27990629/free-photo-of-woman-sitting-in-dress-and-with-bag.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                    </div>
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
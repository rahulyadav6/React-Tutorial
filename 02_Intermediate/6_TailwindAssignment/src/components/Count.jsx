function Count({follwerCount, likesCount, photos}){
    return(
        <div className="flex  w-full justify-around  ">
            <div className="flex flex-col justify-center items-center">
                <div className=" font-bold text-xl ">
                    {follwerCount}
                </div>
                <p className=" font-light text-sm ">Followers</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className=" font-bold text-xl ">
                    {likesCount}
                </div>
                <p className=" font-light text-sm ">Likes</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className=" font-bold text-xl ">
                    {photos}
                </div>
                <p className=" font-light text-sm  ">Photos</p>
            </div>
        </div>
    );
}
export default Count;
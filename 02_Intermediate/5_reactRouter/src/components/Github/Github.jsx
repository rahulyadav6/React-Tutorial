import React, { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    const data = useLoaderData();
    // const [data,setData] = useState(null)
    // useEffect(() => {
    //     async function asyncResult() {
    //         try {
    //             const result = await fetch('https://api.github.com/users/rahulyadav6');
    //             const jsonResult = await result.json();
    //             setData(jsonResult);
    //             console.log(jsonResult);
    //         } catch (error) {
    //             console.error("Error fetching data:", error);
    //         }
    //     }
        
    //     asyncResult();
        
    // },[])

    return(
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github Followers: {data && data.followers} <img src={data && data.avatar_url} alt="Git picture" width={300} /></div>
    );
}

export default Github

export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/rahulyadav6');
    return response.json();
}
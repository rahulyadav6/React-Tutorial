import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState(
        {
            city:"Delhi",
            feelslike:24.34,
            temp:23,
            tempMin:12,
            tempMax:34,
            huimidity:35,
            weather:"haze"
        }
    );
    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign: "center"}}>
            <h2>Weather App by Rahul</h2>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    );
}
export default WeatherApp;
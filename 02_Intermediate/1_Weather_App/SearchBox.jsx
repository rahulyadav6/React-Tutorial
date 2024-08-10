import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";
function SearchBox({updateInfo}) {
  let [city, setCity] = useState("");
  const API_URL = "http://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "5f51fe018647761f8e34878fd8817240"; 

  let getWeatherInfo = async ()=>{
    let response = await fetch (`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();
    let result = {
        city: jsonResponse,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        feelsLike: jsonResponse.main.feels_like,
        humidity: jsonResponse.main.humidity,
        weather: jsonResponse.weather[0].description,
    };
    console.log(result);
    return result;
  }

  let handleChange =  (event) => {
    setCity(event.target.value);
  };
  let handleSubmit = async (event)=>{
    event.preventDefault();
    console.log(city);
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
    setCity("");
  }
  return (
    <div className="searchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search{" "}
        </Button>
      </form>
    </div>
  );
}

export default SearchBox;

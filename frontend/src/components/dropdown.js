import "../dropdown.css";
import React, { useState } from 'react';


const seasonOptions = ["Summer", "Winter", "Spring", "Fall"];
const weatherOptions = ["Sun", "Rain", "Wind"];

const defaultSeason = seasonOptions[0];
const defaultWeather = weatherOptions[0];

function useDropdown() {
  const [season, setSeason] = useState(defaultSeason);
  const [weather, setWeather] = useState(defaultWeather);

  function handleSeasonChange(event) {
    setSeason(event.target.value);
  }

  function handleWeatherChange(event) {
    setWeather(event.target.value);
  }

  return {
    season,
    weather,
    render:(
      <div className='dropdown-container'>
        <div className='season-container'>
          <label className='season-label'>
            Season
          </label>
          <select className='season-dropdown' value={season} onChange={handleSeasonChange}>            
            <option value={seasonOptions[0]}>{seasonOptions[0]}</option>
            <option value={seasonOptions[1]}>{seasonOptions[1]}</option>
            <option value={seasonOptions[2]}>{seasonOptions[2]}</option>
            <option value={seasonOptions[3]}>{seasonOptions[3]}</option>
          </select>
        </div>
        <div className='weather-conainter'>
          <label className='weather-label'>
            Weather
          </label>
          <select className='weather-dropdown' value={weather} onChange={handleWeatherChange}>            
            <option value={weatherOptions[0]}>{weatherOptions[0]}</option>
            <option value={weatherOptions[1]}>{weatherOptions[1]}</option>
            <option value={weatherOptions[2]}>{weatherOptions[2]}</option>
          </select>
        </div> 
      </div>
    )
  }
}

// export default SeasonDropdown;
export default useDropdown;
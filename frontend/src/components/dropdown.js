import { Dropdown, Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';
import React, { useEffect, useState, useCallback } from 'react';
// import App from '../App';

const apiEndpoint = "http://localhost:8080/fish_query"
const seasonOptions = ["Summer", "Winter", "Spring", "Fall"];
const weatherOptions = ["Sun", "Rain", "Wind"];

const defaultSeason = seasonOptions[0];
const defaultWeather = weatherOptions[0];

// LOCATION,TIME,WEATHER,SUMMER,WINTER,FALL,SPRING,SUN,RAIN,WIND
const defaultFishTable = []

function SeasonDropdown() {
  //Declare Hooks
  const [season, setSeason] = useState(defaultSeason);
  const [weather, setWeather] = useState(defaultWeather);
  const [fishData, setFishData] = useState(defaultFishTable);
  const [fishDisplay, setFishDisplay] = useState([])

  const fetchBusinesses = useCallback(() => {
    setFishData(fetchFish(season,weather));
    mapFishData();
  }, [season, weather])
  useEffect(() => {
    fetchBusinesses()
  }, [fetchBusinesses])


  async function fetchFish() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        "season": season,
        "weather": weather
      })
    };
    const response = await fetch(apiEndpoint, requestOptions);
    const result = await response.json();
    console.log(result);
    return result;
  }

  function mapFishData(key, index){
    // try {
    //   console.log(fishData.value);
    //   if (typeof(fishData,Object)) {
    //     console.log('fishData is an Object');
    //     console.log(fishData);
    //   } else {
    //     console.log('fishData is NOT an object');
    //   }
    //   console.log("length: "+(Object.keys(fishData.value).length));
    //   let tempFishDisplay = Array(Object.keys(fishData.value).length).fill('');
    //   for (let i = 0; i < fishData.length; i++) {
    //     tempFishDisplay[i] = "Name: "+ fishData[i]['NAME'] + " Location: "+ fishData[i]['LOCATION'] +" Time: "+ fishData[i]['TIME'] +"\n";
    //     console.log("Name: "+ fishData[i]['NAME'] + " Location: "+ fishData[i]['LOCATION'] +" Time: "+ fishData[i]['TIME']);
    //   }
    //   setFishDisplay(tempFishDisplay);
    //   console.log("fishData: " + fishData);
    //   console.log("Fish Display: "+fishDisplay);
    // } catch(error) {
    //   console.log(error);
    // }
    // return "Name: "+ fishData[key]['NAME'] + " Location: "+ fishData[key]['LOCATION'] +" Time: "+ fishData[key]['TIME'] + "\n"
    try {
      return (
      <div key={index}>
        <h2>
          {key}: {fishData[key]}
        </h2>

        <hr />
      </div>
    );
    } catch(error) {
      console.log(error);
      return "";
    }
    
  }

  function loadFish(event) {
    setFishData(fetchFish());
    event.preventDefault();
  }

  function handleSeasonChange(event) {
    setSeason(event.target.value);
  }

  function handleWeatherChange(event) {
    setWeather(event.target.value);
  }

  return (
    <div>
      <form onSubmit={loadFish}>
        <label>
          Season
          <select value={season} onChange={handleSeasonChange}>            
            <option value={seasonOptions[0]}>{seasonOptions[0]}</option>
            <option value={seasonOptions[1]}>{seasonOptions[1]}</option>
            <option value={seasonOptions[2]}>{seasonOptions[2]}</option>
            <option value={seasonOptions[3]}>{seasonOptions[3]}</option>
          </select>
        </label>
        <label>
          Weather
          <select value={weather} onChange={handleWeatherChange}>            
            <option value={weatherOptions[0]}>{weatherOptions[0]}</option>
            <option value={weatherOptions[1]}>{weatherOptions[1]}</option>
            <option value={weatherOptions[2]}>{weatherOptions[2]}</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div>{Object.keys(fishData).map(mapFishData)}</div>
    </div>
    )
}

export default SeasonDropdown;
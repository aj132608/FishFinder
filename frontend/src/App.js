// import logo from './logo.svg';
import './App.css';
import { Dropdown, Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';
import React, { useState } from 'react';
import SeasonDropdown from './components/dropdown';

const seasonOptions = ["Summer", "Winter", "Spring", "Fall"];
const weatherOptions = ["Sun", "Rain", "Wind"];

const defaultSeason = seasonOptions[0];
const defaultWeather = weatherOptions[0];

// const [season, setSeasonVal] = useState(
//   defaultSeason
// );
// function setSeason(season) {
//   setSeasonVal(season);
// }

// const [weather, setWeatherVal] = useState(
//   defaultWeather
// );
// function setWeather(weather) {
//   setWeatherVal(weather);
// }

// function useWeather(defaultValue) {
//   const [weather, setWeatherVal] = useState(
//     defaultValue || defaultWeather,
//   );
//   function setWeather(weather) {
//     setWeatherVal(weather);
//   }
//   return {
//     setWeather,
//     weather,
//   };
// }

// function useSeason(defaultValue) {
//   const [season, setSeasonVal] = useState(
//     defaultValue || defaultSeason,
//   );
//   function setSeason(season) {
//     setSeasonVal(season);
//   }
//   return {
//     setSeason,
//     season,
//   };
// }

// function get_fish() {
//   console.log('Looking for fish with these constraints: ')
//   console.log('Season: ', season)
//   console.log('Weather: ', weather)
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='App-title'>Stardew Valley Fish Finder</h1>

        {/* <div className='dropdown-container'>
          <div className='Season-Dropdown'>
            <label>Select a Season</label>
            <Dropdown
              placeholder="Select a Season"
              className="dropdown-season"
              options={['Summer', 'Winter', 'Spring', 'Fall']}
              value="Summer"
              onChange={(value) => {
                const seasonObj = useSeason();
                seasonObj.setSeason(value)
              }}
              onSelect={(value) => console.log('selected!', value)} // always fires once a selection happens even if there is no change
              onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
              onOpen={() => console.log('open!')}
            />
          </div>
          <div className='Weather-Dropdown'>
            <label>Select a Weather Condition</label>
            <Dropdown
              placeholder="Select a Weather Condition"
              className="dropdown-weather"
              options={['Sun', 'Rain', 'Wind']}
              value="Sun"
              onChange={(value) => {
                const weatherObj = useWeather();
                weatherObj.setWeather(value)
              }}
              onSelect={(value) => console.log('selected!', value)} // always fires once a selection happens even if there is no change
              onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
              onOpen={() => console.log('open!')}
            />
          </div>
        </div> */}

        {/* <div className='dropdown-container'>
          
          <div className='Season-Dropdown'>
            <h3>Season</h3>
            <select className='season-dropdown'>
              <option value={seasonOptions[0]}>{seasonOptions[0]}</option>
              <option value={seasonOptions[1]}>{seasonOptions[1]}</option>
              <option value={seasonOptions[2]}>{seasonOptions[2]}</option>
              <option value={seasonOptions[3]}>{seasonOptions[3]}</option>
            </select>
          </div>
          <div className='Weather-Dropdown'>
            <h3>Weather</h3>
            <select className='weather-dropdown'>
              <option value={weatherOptions[0]}>{weatherOptions[0]}</option>
              <option value={weatherOptions[1]}>{weatherOptions[1]}</option>
              <option value={weatherOptions[2]}>{weatherOptions[2]}</option>
            </select>
          </div>
        </div> */}

        <SeasonDropdown/>
        
        <button className='submit-button'>Submit</button>
      </header>

    </div>
  );
}

function DropdownItem(props) {
  return (
    <li>{props.text}</li>
  )
}

export default App;

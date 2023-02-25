// import logo from './logo.svg';
import './App.css';
import { Dropdown, Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';
import React, { useState } from 'react';

const defaultSeason = "Summer";
const defaultWeather = "Sun";

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

function useWeather(defaultValue) {
  const [weather, setWeatherVal] = useState(
    defaultValue || defaultWeather,
  );
  function setWeather(weather) {
    setWeatherVal(weather);
  }
  return {
    setWeather,
    weather,
  };
}

function useSeason(defaultValue) {
  const [season, setSeasonVal] = useState(
    defaultValue || defaultSeason,
  );
  function setSeason(season) {
    setSeasonVal(season);
  }
  return {
    setSeason,
    season,
  };
}

function get_fish() {
  console.log('Looking for fish with these constraints: ')
  console.log('Season: ', season)
  console.log('Weather: ', weather)
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='App-title'>Stardew Valley Fish Finder</h1>

        <div className='dropdown-container'>
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
        </div>
        <button className='submit-button' onClick={get_fish}>Submit</button>
      </header>

    </div>
  );
}

export default App;

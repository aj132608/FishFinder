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
        <SeasonDropdown/>        
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

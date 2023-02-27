import { Dropdown, Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';
import React from 'react';
// import App from '../App';

const apiEndpoint = "http://localhost:8080/fish_query"
const seasonOptions = ["Summer", "Winter", "Spring", "Fall"];
const weatherOptions = ["Sun", "Rain", "Wind"];

const defaultSeason = seasonOptions[0];
const defaultWeather = weatherOptions[0];

// LOCATION,TIME,WEATHER,SUMMER,WINTER,FALL,SPRING,SUN,RAIN,WIND
const defaultFishTable = {
  'NAME': [],
  "DESCRIPTION": [],
  "LOCATION": [],
  "TIME": [],
  "WEATHER": [],
  "SUMMER": [],
  "WINTER": [],
  "FALL": [],
  "SPRING": [],
  "SUN": [],
  "RAIN": [],
  "WIND": []
}

class SeasonDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {seasonValue: defaultSeason, weatherValue: defaultWeather, fishTable: defaultFishTable};
    this.handleSeasonChange = this.handleSeasonChange.bind(this);
    this.handleWeatherChange = this.handleWeatherChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSeasonChange(event) {    this.setState({seasonValue: event.target.value});  }
  handleWeatherChange(event) {    this.setState({weatherValue: event.target.value});  }
  handleSubmit(event) {
    alert('Season: ' + this.state.seasonValue +' Weather: '+ this.state.weatherValue);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        "season": this.state.seasonValue,
        "weather": this.state.weatherValue
      })
    };
    fetch(apiEndpoint, requestOptions)
        .then(response => this.setState({ fishTable: response.json() }))
        .then(console.log(this.state.fishTable));

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Season
          <select value={this.state.seasonValue} onChange={this.handleSeasonChange}>            
            <option value={seasonOptions[0]}>{seasonOptions[0]}</option>
            <option value={seasonOptions[1]}>{seasonOptions[1]}</option>
            <option value={seasonOptions[2]}>{seasonOptions[2]}</option>
            <option value={seasonOptions[3]}>{seasonOptions[3]}</option>
          </select>
        </label>
        <label>
          Weather
          <select value={this.state.weatherValue} onChange={this.handleWeatherChange}>            
            <option value={weatherOptions[0]}>{weatherOptions[0]}</option>
            <option value={weatherOptions[1]}>{weatherOptions[1]}</option>
            <option value={weatherOptions[2]}>{weatherOptions[2]}</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SeasonDropdown;
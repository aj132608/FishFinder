import './App.css';
import React, { useState, useEffect } from 'react';
import useDropdown from './components/dropdown';
import Table from './components/table';

const apiEndpoint = "http://localhost:8080/fish_query"

function App() {
  const {render, season, weather} = useDropdown();
  const [fishData, setFishData] = useState([]);
  const [displayTable, setDisplayTable] = useState(<h1>Not Loaded Yet</h1>);

  async function fetchData() {
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
    console.log(result['fish_data']);
    setFishData(result['fish_data']);
    return result;
  }

  useEffect(() => {
    if (fishData.length !== 0) {
      console.log("useEffect Code")
      console.log(fishData);
      setDisplayTable(<Table fishData={fishData}/>);
    }
  }, [fishData])

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='App-title'>Stardew Valley Fish Finder</h1>
        {render}
        <button className='submit-button' onClick={fetchData}>Submit</button>
        {displayTable}
      </header>

    </div>
  );
}

export default App;

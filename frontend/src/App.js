import './App.css';
import title from './Stardew Valley Fish Finder Title.png';
import React, { useState, useEffect } from 'react';
import useDropdown from './components/dropdown';
import Table from './components/table';

const apiEndpoint = "https://flask-fish-api.herokuapp.com/fish_query"

function App() {
  const {render, season, weather} = useDropdown();
  const [fishData, setFishData] = useState([]);
  const [displayTable, setDisplayTable] = useState(<h1></h1>);

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
        <img src={title}></img>
        <hr></hr>
        {render}
        <button className='submit-button' onClick={fetchData}>Submit</button>
        <div className='output-div'>
          {displayTable}
        </div>
        <p>Check out source code <a href='https://github.com/aj132608/FishFinder' 
                                    target="_blank" rel="noreferrer noopener"> here</a>
        </p>
        
      </header>

    </div>
  );
}

export default App;

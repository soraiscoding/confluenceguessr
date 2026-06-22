import React, { useEffect, useState } from 'react';
//import { invoke } from '@forge/bridge'; this is to call the backend in index.js in ../../src
import logo from './images/logo.svg'; 
import './components/Button.css';
import './App.css';

function App() {
  //const [data, setData] = useState(null);
  // no logic needed for home screen for now

  return (
    <div className='hero_container'>
      <img src={logo} className="hero_logo" alt="confluenceguessr logo"></img>

      <div>
        <button className="button_style">Game mode: Team</button>
        <button className="button_style">Number of questions: 10</button>
      </div>
    </div>
  );
}

export default App;

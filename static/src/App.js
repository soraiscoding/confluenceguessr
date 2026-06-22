import React, { useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';
import logo from './images/logo.svg'; 

function App() {
  const [data, setData] = useState(null);

  

  return (
    <div className='hero_container'>
      <text>Hello</text>
      <img src={logo} className="hero_logo" alt="confluenceguessr logo"></img>

      <div>
        <button>Button</button>
      </div>
    </div>
  );
}

export default App;

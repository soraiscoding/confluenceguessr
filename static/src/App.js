//import React, { useEffect, useState } from 'react'; probs don't need this since it'll be in the components' files
//import { invoke } from '@forge/bridge'; this is to call the backend in index.js in ../../src

// import screens
import CreateGame from './screens/CreateGame.js';
import QuestionScreen from './screens/QuestionScreen.js';

function App() {
  //const [data, setData] = useState(null);
  // no logic needed for home screen for now

  return (
    <CreateGame />
  );
}

export default App;

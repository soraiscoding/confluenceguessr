import React, { useEffect, useState } from 'react';
//import { invoke } from '@forge/bridge'; this is to call the backend in index.js in ../../src

// import screens
import CreateGame from './screens/CreateGame.js';
import QuestionScreen from './screens/QuestionScreen.js';

function App() {
  const [currScreen, setCurrScreen] = useState('createGame');

  return (
    <CreateGame />

  );
}

export default App;

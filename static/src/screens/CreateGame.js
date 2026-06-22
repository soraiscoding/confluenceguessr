import React from 'react';
//import { invoke } from '@forge/bridge'; this is to call the backend in index.js in ../../src
import logo from '../images/logo.svg'; 
import '../components/Button.css';
import './CreateGame.css';

function CreateGame() {
  return (
    <div className='page_container'>
      <img src={logo} className="logo" alt="confluenceguessr logo"></img>

      <div className="game_config">
        <button className="button_style_flex">Game mode: Team</button>
        <button className="button_style_flex">Number of questions: 20</button>
      </div>
      <div className="create_game">
        <button className="button_style_flex">Create Game</button>
      </div>
    </div>
  );
}

export default CreateGame;

import React from 'react';
//import { invoke } from '@forge/bridge'; this is to call the backend in index.js in ../../src
import logo from '../images/logo.svg'; 
import '../components/Button.css';
import './QuestionScreen.css';

function QuestionScreen() {
  return (
    <button className="button_style_flex">This is the question screen</button>
  );
}

export default QuestionScreen;

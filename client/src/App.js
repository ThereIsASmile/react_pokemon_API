import pokeball from './pokeball.png';
import './App.css';
import PokeApi from './components/PokeApi';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={pokeball} className="App-pokeball" alt="pokeball" />
        <h1>Pokemon API</h1>
      </header>
      <div className="App-body">  
        <PokeApi/>
      </div>

    </div>
  );
}

export default App;

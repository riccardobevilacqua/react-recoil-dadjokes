import React from 'react';
import { RecoilRoot } from 'recoil';

import { CharacterCounter } from './components/CharacterCounter';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </RecoilRoot>
  );
}

export default App;

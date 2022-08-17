import React from 'react';
import logo from './logo.svg';
import './App.css';
// import store from './store';
import { observer } from 'mobx-react-lite';
import store from './store';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          {store.firstName}
          {store.lastName}
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
  );
}

export default observer(App);

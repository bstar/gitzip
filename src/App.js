import React from 'react';
import logo from './Octocat.png';
import Auth from './components/auth';
import './App.css';

const App = () => {
  return (
      <div className="App-header">
        <Auth />
        <img src={logo} className="App-logo" alt="logo" />
      </div>
  );
}

export default App;

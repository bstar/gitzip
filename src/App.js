import React from 'react';
import { connect } from 'react-redux';
import logo from './Octocat.png';
import Auth from './components/auth';
import Repos from './components/repos';
import './App.css';

const mapStateToProps = state => {

  return ({
    user: state.user,
  });
};

const App = ({ user }) => {

  const { login, repos } = user;

  return (
    <div className="main-container">
      { login ?
        <Repos repos={repos} />
      :
        <div className="App-header">
          <Auth />
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      }
    </div>
  );
}

export default connect(
  mapStateToProps,
)(App);

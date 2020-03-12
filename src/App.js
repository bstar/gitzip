import React from 'react';
import { connect } from 'react-redux';
import logo from './Octocat.png';
import Auth from './components/auth';
import Repos from './components/repos';
import Issues from './components/issues';
import './App.css';

const mapStateToProps = state => {

  return ({
    user: state.user,
  });
};

const App = ({ user }) => {

  const { login, repos, issues } = user;

  return (
    <div className="main-container">
      { login ?
        <div className="content-container">
          <Repos repos={repos} />

          { issues &&
              <Issues issues={issues} />
          }
        </div>
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

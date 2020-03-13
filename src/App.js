import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './Octocat.png';
import Auth from './components/auth';
import Repos from './components/repos';
import Issues from './components/issues';
import './App.css';


const mapStateToProps = state => {

  return ({
    user: state.user,
    issues: state.user.issues,
  });
};

class App extends Component {

  render () {

    const { user, issues } = this.props;
    const { login, repos } = user;

    return (
      <div className="main-container">
        { login ?
          <div className="content-container">
            <Repos repos={repos} />
  
            { issues &&
                <Issues issues={issues} user={user} />
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
}

export default connect(
  mapStateToProps,
)(App);

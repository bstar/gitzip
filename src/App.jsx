import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from './Octocat.png';
import Auth from './components/auth';
import Repos from './components/repos';
import Issues from './components/issues';
import './App.css';


const mapStateToProps = state => ({
    user: state.user,
    issues: state.user.issues,
});

const App = ({ user, issues }) => {

    const { login, repos } = user;

    return (
        <div className="main-container">
            { login ?
                <div>
                    <div className="header">
                        <img alt="avatar" src={user.avatar_url} />
                        <div className="user-text">{user.name} ({user.login})</div>
                    </div>
                    <div className="content-container">
                        <Repos repos={repos} />
                        { issues &&
                            <Issues issues={issues} user={user} />
                        }
                    </div>
                </div> :
                <div className="App">
                    <Auth />
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
            }
        </div>
    );
};

App.propTypes = {
    user: PropTypes.object,
    issues: PropTypes.array,
};

export default connect(
    mapStateToProps,
)(App);

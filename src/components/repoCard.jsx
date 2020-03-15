import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import get from 'lodash.get';
import { setActiveRepo } from '../actions';
  

const mapStateToProps = state => {

    return ({
        activeRepoName: get(state, 'user.activeRepoData.name'),
    });
};

const mapDispatchToProps = dispatch => ({
    setRepo: id => {
        dispatch(setActiveRepo(id));
    }
});

const RepoCard = ({ repo, setRepo, activeRepoName }) => {

    const repoHandler = e => {
        window.scrollTo(0,0);
        setRepo({ name: repo.name });
    };

    const containerBorderStyle = activeRepoName === repo.name ? { border: '1px solid cyan' } : {};

    return (
        <button className="repo-card-container" style={containerBorderStyle} onClick={() => repoHandler(repo.id)}>
            <div><b>Name: {repo.name}</b></div>
            <div><b>Description:</b> {repo.description}</div>
        </button>
    );
};

RepoCard.propTypes = {
    repo: PropTypes.object.isRequired,
    setRepo: PropTypes.func.isRequired,
    activeRepoName: PropTypes.string,
};

RepoCard.defaultProps = {
    activeRepoName: null,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RepoCard);

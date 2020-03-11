import React from 'react';
import { connect } from 'react-redux';
import { setActiveRepo } from '../actions';
  

const mapDispatchToProps = dispatch => ({
    setRepo: id => {
        dispatch(setActiveRepo(id));
    }
});

const RepoCard = ({ repo, setRepo }) => {

    const repoHandler = e => {
        setRepo(repo.id);
    };

    return (
        <button className="repo-card-container" onClick={() => repoHandler(repo.id)}>
            <div><b>Name: {repo.name}</b></div>
            <div><b>Description:</b> {repo.description}</div>
            <div><b>Issues:</b> {repo.open_issues}</div>
        </button>
    );
};

export default connect(
    null,
    mapDispatchToProps
)(RepoCard);
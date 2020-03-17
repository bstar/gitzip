import React from 'react';
import PropTypes from 'prop-types';
import RepoCard from './repoCard';


const Repos = ({ repos }) => (
    <div className="repos-container">
        <div className="content-header">Select a Repo</div>
        <div className="list">
            { repos.map(repo => (<RepoCard key={repo.id} repo={repo} />))}
        </div>
    </div>
);

Repos.propTypes = {
    repos: PropTypes.array,
};

Repos.defaultProps = {
    repos: [],
};

export default Repos;

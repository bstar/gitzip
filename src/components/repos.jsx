import React from 'react';
import RepoCard from './repoCard';
  

const Repos = ({ repos } ) => (
    <div className="repos-container">
        <div className="repos-header">Select a Repo</div>
        { repos && repos.map(repo => {
            return (
                <RepoCard key={repo.id} repo={repo} />
            )
        })}
    </div>
);

export default Repos;

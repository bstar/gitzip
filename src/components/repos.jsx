import React from 'react';
import RepoCard from './repoCard';
  

const Repos = ({ repos } ) => (
    <div className="repos-container">
        <div className="content-header">Select a Repo</div>
        <div className="list">
            { repos && repos.map(repo => {
                return (
                    <RepoCard key={repo.id} repo={repo} />
                )
            })}
        </div>
    </div>
);

export default Repos;

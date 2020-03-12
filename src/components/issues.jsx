import React from 'react';
import IssueCard from './issueCard';
  

const Issues = ({ issues } ) => {

    console.log("ISSUES", issues)
    return (
        <div className="repos-container">
            <div className="repos-header">Order an Issue</div>
            { issues && issues.map(issue => {
                return (
                    <IssueCard key={issue.id} issue={issue} />
                )
            })}
        </div>
    );
}

export default Issues;

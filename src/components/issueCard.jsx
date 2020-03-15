import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
  

const IssueCard = ({ issue }) => {

    return (
        <button className="issue-card-container">
            <div><b>Title: {issue.title}</b></div>
            <div><b>State:</b> {issue.state}</div>
            <div><b>Created at:</b> {moment(issue.created_at).format('MM/DD/YYYY')}</div>
            <div><b>Updated at:</b> {moment(issue.updated_at).fromNow()}</div>
        </button>
    );
};

IssueCard.propTypes = {
    issue: PropTypes.object.isRequired,
};

export default IssueCard;

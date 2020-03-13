import React from 'react';
import { connect } from 'react-redux';
import { setIssueRank } from '../actions';
import Issues from './issues';
  

const mapDispatchToProps = dispatch => ({
    setRank: id => {
        dispatch(setIssueRank(id));
    }
});

const IssueCard = ({ issue, setRank }) => {

    return (
        <button className="issue-card-container">
            <div><b>Title: {issue.title}</b></div>
            <div><b>State:</b> {issue.state}</div>
            <div><b>Created at:</b> {issue.created_at}</div>
        </button>
    );
};

export default connect(
    null,
    mapDispatchToProps
)(IssueCard);
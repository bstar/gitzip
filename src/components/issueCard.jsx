import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import get from 'lodash.get';


const IssueCard = ({ issue }) => {

    const unorderedStyle = {
        border: '1px solid #ffbf80',
    };

    if (issue) {
        return (
            <button className="issue-card-container" style={issue.unordered && unorderedStyle}>
                <div><b>Title:</b> {issue.title}</div>
                <div><b>Created at:</b> {moment(issue.created_at).format('MM/DD/YYYY')}</div>
                <div><b>Updated at:</b> {moment(issue.updated_at).fromNow()}</div>
                { issue.assignee &&
                    <div>
                        <img title="Assignee" className="assigneeAvatar" alt="avatar" src={get(issue, 'assignee.avatar_url', 'none')} />
                    </div>
                }
            </button>
        );
    }

    return <span />;
};

IssueCard.propTypes = {
    issue: PropTypes.object,
};

IssueCard.defaultProps = {
    issue: {},
};

export default IssueCard;

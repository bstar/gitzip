import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import get from 'lodash.get';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import IssueCard from './issueCard';


const mapStateToProps = state => ({
    userLogin: state.user.login,
    activeRepoName: get(state, 'user.activeRepoData.name'),
});

const SortableItem = SortableElement(({ issue }) => <IssueCard issue={issue} />);

const SortableList = SortableContainer(({ issues }) => (
    <div>
        { issues.map((issue, index) => (
            <SortableItem key={`issue-${issue.id}`} index={index} issue={issue} />
        ))}
    </div>
));

const getNewIssues = (orderIdArray, issues) => (
    issues.reduce((acc, issue) => {

        const issueId = issue.id.toString();
        const isStored = orderIdArray.includes(issueId);
        const unordered = true;

        if (isStored) {
            return acc;
        }

        return acc.concat({ ...issue, unordered });
    }, [])
);

class Issues extends Component {

    static propTypes = {
        activeRepoName: PropTypes.string,
        userLogin: PropTypes.string,
        issues: PropTypes.array,
    };

    static defaultProps = {
        issues: [],
    }

    state = { issues: [] };

    componentDidMount () {

        const { activeRepoName, userLogin, issues } = this.props;
        const key = `${userLogin}+${activeRepoName}`;
        const orderIdsFromLocalStorage = localStorage.getItem(key);

        if (orderIdsFromLocalStorage) {
            const orderIdArray = orderIdsFromLocalStorage.split(',');
            const orderedIssues = orderIdArray.map(id => issues.find(issue => issue.id === +id));
            // identifies issues that have been added after list has been ordered
            const missing = getNewIssues(orderIdArray, issues) || [];
            const combinedIssues = orderedIssues.concat(missing);

            this.setState({ issues: combinedIssues });
        } else {
            this.setState({ issues });
        }
    }

    onSortEnd = ({ oldIndex, newIndex }) => {

        const { activeRepoName, userLogin } = this.props;

        this.setState(({ issues }) => {

            const movedIssues = arrayMove(issues, oldIndex, newIndex);
            const issuesArray = movedIssues.map(issue => issue.id);

            localStorage.setItem(`${userLogin}+${activeRepoName}`, issuesArray);

            return { issues: movedIssues };
        });
    };

    render () {

        const { activeRepoName } = this.props;
        const { issues } = this.state;

        return (
            <div className="issues-container">
                <div className="content-header">Order issues for: {activeRepoName}</div>

                { issues.length > 0 ?
                    <SortableList lockAxis="y" issues={issues} onSortEnd={this.onSortEnd} />
               :
                    <div className="warning">This repo has no issues.</div>
                }
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Issues);

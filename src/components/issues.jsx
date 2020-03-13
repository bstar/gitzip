import React, { Component } from 'react';
import { connect } from 'react-redux';
import get from 'lodash.get';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import IssueCard from './issueCard';
  

const mapStateToProps = state => {

    return ({
        userLogin: state.user.login,
        activeRepoName: state.user.activeRepoData.name,
    });
};
  
const SortableItem = SortableElement(({ issue }) => <IssueCard issue={issue} />);

const SortableList = SortableContainer(({ issues }) => {

    return (
        <div>
            { issues.map((issue, index) => (
                <SortableItem key={`issue-${index}`} index={index} issue={issue} />
            ))}
        </div>
    );
});

class Issues extends Component {

    state = { issues: [] };

    componentDidMount () {

        const { activeRepoName, userLogin, issues } = this.props;
        const key = `${userLogin}+${activeRepoName}`;
        const orderIdsFromLocalStorage = localStorage.getItem(key);

        if (orderIdsFromLocalStorage) {
            const orderIdArray = orderIdsFromLocalStorage.split(',');
            const orderedIssues = orderIdArray.map(id => issues.find(issue => issue.id === +id));

            this.setState({ issues: orderedIssues });
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
            <div className="repos-container">
                <div className="repos-header">Order issues for: {activeRepoName}</div>

                <SortableList lockAxis="y" issues={issues} onSortEnd={this.onSortEnd} />
            </div>
        )
    };
}

export default connect(
    mapStateToProps,
)(Issues);
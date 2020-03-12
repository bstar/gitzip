import React, { Component } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import IssueCard from './issueCard';
  

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

        const { issues } = this.props;

        this.setState({ issues });
    }

    onSortEnd = ({ oldIndex, newIndex }) => {

        this.setState(({ issues }) => ({
            issues: arrayMove(issues, oldIndex, newIndex),
        }));
    };

    render () {

        const { issues } = this.state;

        return (
            <div className="repos-container">
                <div className="repos-header">Order an Issue</div>

                { issues &&
                    <SortableList lockAxis="y" issues={issues} onSortEnd={this.onSortEnd} />
                }
            </div>
        )
    };
}

export default Issues;

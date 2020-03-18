import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';
import IssueCard from '../components/issueCard';

const issueFixture = {
    title: 'test issue',
    created_at: '2020-03-17T12:41:57Z',
    updated_at: '2020-03-17T12:41:57Z',
};

const store = createStore(
    reducers,
);

it('renders correctly', () => {
    const tree = renderer.create(<Provider store={store}><IssueCard issue={issueFixture} /></Provider>).toJSON();

    expect(tree).toMatchSnapshot();
});

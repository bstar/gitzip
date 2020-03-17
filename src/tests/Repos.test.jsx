import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';
import Repos from '../components/repos';


const store = createStore(
    reducers,
);

it('renders correctly', () => {
    const tree = renderer.create(<Provider store={store}><Repos /></Provider>).toJSON();

    expect(tree).toMatchSnapshot();
});

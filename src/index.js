import React from 'react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { render } from 'react-dom';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import SagaRoot from './sagas';

const sagaMW = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(sagaMW),
  )
);

sagaMW.run(SagaRoot)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();

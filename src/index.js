import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/reducers'
import multi from 'redux-multi'
import promise from 'redux-promise'

import App from './main/App';

import reportWebVitals from './reportWebVitals';

const store = applyMiddleware(multi, promise)(createStore)(reducers)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);

reportWebVitals();

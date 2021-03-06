import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedbackReducer = (state = {
    // feeling: 0,
    // understanding: 0,
    // support: 0,
    // comments: ''
}, action) => {
    if (action.type === 'ADD_FEELING') {
        state = {...state,
        feeling: action.payload}
    }
    else if (action.type === 'ADD_UNDERSTANDING') {
        state = {...state,
            understanding: action.payload
        }
    }
    else if (action.type === 'ADD_SUPPORT') {
        state = {
            ...state,
            support: action.payload
        }
    }
    else if (action.type === 'ADD_COMMENTS') {
        state = {
            ...state,
            comments: action.payload
        }
    }
    else if (action.type === 'RESET_FEEDBACK') {
        state = {
            feeling: 0,
            understanding: 0,
            support: 0,
            comments: ''
        }
    }
    return state;
}

const reduxStore = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));

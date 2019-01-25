import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';


const initialState = {
    countersLimit: 0,
    listCounters: [],
    count: 0
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_COUNTER':
            return Object.assign(
                {},
                state, {
                    listCounters: [...state.listCounters, +new Date()],
                    count: state.count + 1
                });
        case 'DELETE_COUNTER':
            let newCounters = [
                ...state.listCounters
            ];
            newCounters.splice(action.indexCounter, 1);
            return {
                ...state,
                listCounters: newCounters,
                count: state.count - 1
            };
        case 'ADD_LIMIT':
            console.log("Entrooooo " + action.countersLimit)
            return Object.assign(
                {},
                state, {
                    countersLimit: action.countersLimit
                }
            )


        default:
            return state;
    }
}

let store = Redux.createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(

    <ReactRedux.Provider store={store}>
        <App />
    </ReactRedux.Provider>,

    document.getElementById('root')
);
serviceWorker.unregister();
